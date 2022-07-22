import React, { useState } from 'react';
import '../../styles/Contact.css'

function ContactForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const warningBox = document.getElementsByClassName("warning")

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      name: name,
      email: email,
      message: message,
    });

    setName('');
    setEmail('');
    setMessage('');
 
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange1 = (e) => {

    if (e.target.value === null) {
      warningBox.textContent = "An email is required."
    }
    if (!isValidEmail(e.target.value)) {
      warningBox.textContent = "Your email is invalid."
    }
    setEmail(e.target.value);
  };

  const handleChange2 = (e) => {
    setName(e.target.value);

  };

  const handleChange3 = (e) => {

    if (e.target.value === null) {
      warningBox.textContent = "A message is required."
    }

    setMessage(e.target.value);
  };

  return (
    <div>
      <h4 className="contact-header">If you would like to reach me, send me a message using the form below.</h4>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          className="email-input"
          onChange={handleChange1}
        ></input>
                <label>Name:</label>
                <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          className="name-input"
          onChange={handleChange2}
        ></input>
                <label>Message:</label>
                <textarea
          type="text"
          placeholder="Enter your message here"
          value={message}
          name="message"
          className="message-input"
          onChange={handleChange3}
        ></textarea>

        <p className = "warning"></p>

        <button className="message-button">Send message</button>
      </form>
    </div>
  );
    
}

export default ContactForm;
