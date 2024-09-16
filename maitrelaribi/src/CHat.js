import React, { useState } from "react";
import logo from './logo.png';
import './Chat.css'; // Make sure the filename is correct
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [email, setEmail] = useState(""); // Store user email
  const [emailSubmitted, setEmailSubmitted] = useState(false); // Track if email was submitted

  const responses = {
    email: "Notre Email est contact@maitrelaaribi.com",
    phone: "Notre Numéro de téléphone est +216 70 256 595.",
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    let botResponse = "";

    if (!emailSubmitted) {
      // Validate and store the email
      if (isValidEmail(input)) {
        setEmail(input); // Set the email
        setEmailSubmitted(true); // Mark email as submitted
        botResponse = "Thank you for providing your email. How can I assist you further?";
      } else {
        botResponse = "Please provide a valid email address to continue.";
      }
    } else {
      // Handle contact information requests
      if (input.toLowerCase().includes("email") || input.toLowerCase().includes("contact")) {
        botResponse = responses.email;
      } else if (input.toLowerCase().includes("phone") || input.toLowerCase().includes("number")) {
        botResponse = responses.phone;
      } else {
        // Regular message after email is submitted
        try {
          const response = await fetch("https://www.maitrelaaribi.com/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input, email }) // Send email with message
          });

          const data = await response.json();
          botResponse = data.response;
        } catch (error) {
          botResponse = "Sorry, there was an error processing your request.";
        }
      }
    }

    setMessages([...messages, { sender: "bot", text: botResponse }]);
    setInput(""); // Clear input
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard id="chat1" style={{ borderRadius: "15px" }}>
            <MDBCardHeader
              className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              <MDBIcon fas icon="angle-left" />
              <p className="mb-0 fw-bold">Live chat</p>
              <MDBIcon fas icon="times" />
            </MDBCardHeader>

            <MDBCardBody>
              {messages.map((msg, index) => (
                <div key={index}>
                  {msg.sender === 'user' ? (
                    <div className="d-flex flex-row justify-content-start mb-4">
                      <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                      <div
                        className="p-3 ms-3"
                        style={{
                          borderRadius: "15px",
                          backgroundColor: "rgba(57, 192, 237,.2)",
                        }}
                      >
                        <div>
                          <label>{msg.sender}: </label>
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex flex-row justify-content-end mb-4">
                      <div
                        className="p-3 me-3 border"
                        style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
                      >
                        <p className="small mb-0">{msg.text}</p>
                      </div>
                      <img
                        src={logo}
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>
                  )}
                </div>
              ))}

              <MDBTextArea
                className="form-outline"
                label={!emailSubmitted ? "Enter your email" : "Type your message"}
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
            </MDBCardBody>
            <button onClick={sendMessage}>Send</button>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
