import React, { useState } from "react";
import logo from './logo.png';
import './Chat.css'; // Ensure this file exists and is correctly named
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

  // Define responses for specific queries
  const responses = {
    email: "Notre email est contact@maitrelaaribi.com",
    phone: "Notre numéro de téléphone est +216 70 256 595",
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Determine bot response based on user input
    let botResponse = "";

    // Check for email or phone number queries
    if (input.toLowerCase().includes("email") || input.toLowerCase().includes("contact")) {
      botResponse = responses.email;
    } else if (input.toLowerCase().includes("phone") || input.toLowerCase().includes("number")) {
      botResponse = responses.phone;
    } else {
      // Send to backend if not a contact information query
      try {
        const response = await fetch("https://www.maitrelaaribi.com/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input })
        });

        const data = await response.json();
        botResponse = data.response;
      } catch (error) {
        console.error("Error fetching response:", error);
        botResponse = "Désolé, il y a eu une erreur lors du traitement de votre demande.";
      }
    }

    setMessages([...updatedMessages, { sender: "bot", text: botResponse }]);
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
                  {console.log("Message:", msg)} {/* Debugging line */}
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
                label="Type your message"
                id="textAreaExample"
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
