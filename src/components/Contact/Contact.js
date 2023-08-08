import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <>
    <div className='container'>
      <h2>Let's Chat</h2>
      <p>You can reach me at this email</p>
      <a href='mailto:masciotd@uwindsor.ca' className='contact-button'>
        masciotd@uwindsor.ca
      </a>
    </div>
    </>
  );
}

export default Contact;
