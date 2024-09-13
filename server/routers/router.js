
const express = require('express');
const axios = require('axios');

const router = express.Router();

const rateLimitDelay = 1000; // delay in milliseconds

router.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    // Delay between requests
    await new Promise(resolve => setTimeout(resolve, rateLimitDelay));

    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo', // or 'gpt-4'
      messages: [
        { role: 'user', content: message }
      ],
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer sk-svcacct-ydAWef80hXReUMj2lR9CXdf5GaZvPfIkCPNyp9WDpGU_ZX5tK_Z45Z85MYXcB-mrvOj7SqHImA_3LT3BlbkFJK29yMqtqDt0wOqrkq8-rhyO62VIls45xGGleIlaeOvEFX5i_WZa157i3nT3BZdYBoUqGJqVIcB_AA`,
        'Content-Type': 'application/json'
      }
    });
    res.json({
      response: response.data.choices[0].message.content.trim(),
      
    });
  } catch (error) {
    console.error('Error communicating with OpenAI', error);
    if (error.response && error.response.status === 429) {
      res.status(429).send('Rate limit exceeded. Please try again later.');
    } else {
      res.status(500).send('Error communicating with AI service.');
    }
  }
});

module.exports = { chatrouter: router };
