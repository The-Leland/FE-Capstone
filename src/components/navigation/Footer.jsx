


import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact us: info@nerdalert.com | Phone: (123) 456-7890</p>
      <p>Address: 123 Nerd Street, Nerdtropolis, UT 12345</p>
      <div className="footer-links">
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About</Link>
      </div>
    </footer>
  );
};

export default Footer;
