import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Akshay Solanke</h3>
            <p>Full-Stack Web Developer</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#about">About</a></li>
              <li><a href="/#resume">Resume</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Me</h4>
            <ul>
              <li>
                <a href="mailto:akshaysolan804@gmail.com">
                  <FaEnvelope /> akshaysolan804@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:8855878880">
                  <i className="fas fa-phone"></i> 8855878880
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Akshay Solanke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;