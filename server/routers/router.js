const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

// Function to scrape data from the website
const scrapeWebsiteData = async () => {
  try {
    const { data } = await axios.get('https://www.maitrelaaribi.com/');
    const $ = cheerio.load(data);

    // Extract meta description
    const metaDescription = $('meta[name="description"]').attr('content');
    
    // Extract important headings or other key content
    const headings = [];
    $('h1').each((index, element) => {
      headings.push($(element).text().trim());
    });

    // Combine data into a useful format
    const websiteInfo = {
      metaDescription: metaDescription || "No meta description available.",
      headings: headings.length ? headings : ["No headings found"],
    };

    return websiteInfo;
  } catch (error) {
    console.error('Error scraping the website:', error);
    return {
      metaDescription: "Error fetching website data.",
      headings: ["Error fetching headings"],
    };
  }
};

// API route to handle chatbot requests
router.post('/api/chat', async (req, res) => {
  const { message, email } = req.body;

  try {
    // Scrape website data before answering the user
    const websiteData = await scrapeWebsiteData();

    // Create a context for ChatGPT with website data
    const context = `You are analyzing the website of a legal advisor. Here is the website description: ${websiteData.metaDescription}. Main headings: ${websiteData.headings.join(', ')}.`;

    // Send the user question + website data context to the AI
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: context },
        { role: 'user', content: `User email: ${email}. Question: ${message}` }
      ],
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer sk-svcacct-ydAWef80hXReUMj2lR9CXdf5GaZvPfIkCPNyp9WDpGU_ZX5tK_Z45Z85MYXcB-mrvOj7SqHImA_3LT3BlbkFJK29yMqtqDt0wOqrkq8-rhyO62VIls45xGGleIlaeOvEFX5i_WZa157i3nT3BZdYBoUqGJqVIcB_AA`,
        'Content-Type': 'application/json'
      }
    });

    // Send the response back to the frontend
    res.json({
      response: response.data.choices[0].message.content.trim(),
    });
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).send('Error communicating with AI service.');
  }
});

module.exports = { chatrouter: router };
