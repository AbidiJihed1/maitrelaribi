import React, { useState } from 'react';
import './Subscribe.css'; // Assuming you will have some custom styling for this component
import axios from 'axios';
import Swal from 'sweetalert2';
const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = ({handleClose}) => {
    if (email) {
      // Handle subscription logic here (e.g., send email to API)
      axios.post("https://www.maitrelaaribi.com/api/subscribe",{email}).then((res)=>{
       if(res.data.message==="Email inserted successfully"){
        handleClose()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Votre Poste a été enregistré.",
            showConfirmButton: false,
            timer: 1500
          })
       }
      })
      console.log(`Subscribed with email: ${email}`);
    } else {
      alert("Please enter a valid email.");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        handleSubscribe();
      
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
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSubscribe}
          onKeyDown={handleKeyDown}
          >Subscribe</button>
        </footer>
      </div>
    </section>
  );
};

export default SubscribeForm;
