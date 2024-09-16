import React, { useState } from 'react';
import './Subscribe.css'; // Assuming you will have some custom styling for this component
import axios from 'axios';
const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      // Handle subscription logic here (e.g., send email to API)
      axios.post("https://www.maitrelaaribi.com/api/subscribe",{email}).then((res)=>{
        console.log(res)
      })
      console.log(`Subscribed with email: ${email}`);
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <section className="wrapper">
      <div className="content">
        <section>
          <p>
          Inscrivez-vous dès maintenant pour recevoir nos dernières offres et nouveautés directement dans votre boîte mail !
          </p>
        </section>
        <footer>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </footer>
      </div>
    </section>
  );
};

export default SubscribeForm;
