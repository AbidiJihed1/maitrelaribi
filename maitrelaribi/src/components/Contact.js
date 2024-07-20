import React, { useState } from 'react';
import Maps from './Maps';
import './Contact.css';
import axios from 'axios';

const Contact = ({ selectedLanguage }) => {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleTelChange = (e) => {
    setTel(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

const handleAttachmentChange = (e) => {
  setAttachment(e.target.files[0]);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or submit the form data as needed
    axios.post('https://www.maitrelaaribi.com/api/sendmail', {
      subject: subject,
      name: name,
      // lastName: lastName,
      tel: tel,
      email: email,
      message: message,
      attachment:attachment
    }).then((res) => {
      if (res.status === 'success') {
        console.log('ok')
      }
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>{selectedLanguage === 'ar' ? 'اتصل بنا' : 'Contact Us'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">{selectedLanguage === 'fr'? "Sujet" : selectedLanguage === 'ar' ? 'الموضوع' : 'Subject'}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">{selectedLanguage === 'fr'? "Nom & Prenom" : selectedLanguage === 'ar' ? 'اللقب & الاسم' : 'Name & Last Name'}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="lastName">{selectedLanguage === 'fr'? "Prenom" : selectedLanguage === 'ar' ? '' : ''}</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="tel">{selectedLanguage === 'fr'? "Tel" : selectedLanguage === 'ar' ? 'الهاتف' : 'Telephone'}</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={tel}
              onChange={handleTelChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{selectedLanguage === 'fr'? "Email" : selectedLanguage === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{selectedLanguage === 'fr'? "Message" : selectedLanguage === 'ar' ? 'الرسالة' : 'Message'}</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
  <label htmlFor="attachment">{selectedLanguage === 'fr' ? 'Pièce jointe' : selectedLanguage === 'ar' ? 'مرفق' : 'Attachment'}</label>
  <input
    type="file"
    id="attachment"
    name="attachment"
    onChange={handleAttachmentChange}
  />
</div>
          <button type="submit">{selectedLanguage === 'fr'? "Envoyer" : selectedLanguage === 'ar' ? 'إرسال' : 'Send'}</button>
        </form>
      </div>

      {/* You can embed your Google Maps iframe code here */}
      <Maps />
    </div>
  );
};

export default Contact;
