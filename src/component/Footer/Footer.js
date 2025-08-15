import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>ElectroShop</h3>
            <p>Your one-stop shop for all electronics.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#">Home</a></li>
              <li><a href="/#">Products</a></li>
              <li><a href="/#">About Us</a></li>
              <li><a href="/#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="/#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="/#" aria-label="Twitter"><FaTwitter /></a>
              <a href="/#" aria-label="Instagram"><FaInstagram /></a>
              <a href="/#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ElectroShop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
