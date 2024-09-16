import React, { useState } from "react";
import logo from './logo.png';
import './CHat.css';
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

  const sendMessage = async () => {
    if (!input.trim()) return;

    if (!emailSubmitted) {
      // If email is not yet submitted, we first capture the email
      const emailMessage = { sender: "user", text: input };
      setMessages([...messages, emailMessage]);

      // Send the email to backend
      const response = await fetch("https://www.maitrelaaribi.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, email })
      });

      const data = await response.json();
      setMessages([...messages, emailMessage, { sender: "bot", text: data.response }]);
      setEmail(input); // Set the email
      setEmailSubmitted(true); // Mark email as submitted
      setInput(""); // Clear input
    } else {
      // Regular message after email is submitted
      const userMessage = { sender: "user", text: input };
      setMessages([...messages, userMessage]);

      const response = await fetch("https://www.maitrelaaribi.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, email }) // Send email with message
      });

      const data = await response.json();
      setMessages([...messages, userMessage, { sender: "bot", text: data.response }]);
      setInput("");
    }
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
