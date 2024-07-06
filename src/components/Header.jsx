import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Prevent default link behavior (optional but recommended)
      event.preventDefault(); // Added line

      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav className='navigation-bar'>
        <ul className='header-container'>
          <li><Link to="/" onClick={(event) => scrollToSection('hero')}>Home</Link></li>
          <li><Link to="/" onClick={(event) => scrollToSection('quiz')}>Quiz</Link></li>
          <li><Link to="/" onClick={(event) => scrollToSection('articles')}>Articles</Link></li>
          <li><Link to="/" onClick={(event) => scrollToSection('safety-tips')}>Safety Tips</Link></li>
          <li><Link to="/" onClick={(event) => scrollToSection('resources')}>Resources</Link></li>
          <li><Link className="login-btn" to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
