import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We are committed to educating users on cybersecurity best practices through interactive quizzes, tutorials, and real-world scenarios.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#quiz">Quiz</a></li>
            <li><a href="#articles">Articles</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: support@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 CyberRakshak | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
