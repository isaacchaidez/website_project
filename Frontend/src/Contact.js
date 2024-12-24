import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out with your queries or project ideas.</p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea placeholder="Your Message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

