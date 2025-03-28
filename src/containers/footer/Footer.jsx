import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others ?</h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links">
      <div className="neuralux">
        <h1>NeuralUX</h1>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contacts</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Address</p>
        <p>0123456789</p>
        <p>info@pay.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2024 NeuralUX. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
