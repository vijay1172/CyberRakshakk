import React from 'react';
import './Header.css'

function Header() {
  return (
    <header>
      <nav >
        <ul className='header-container'>
          <li><a href="#hero">Home</a></li>
          <li><a href="#quiz">Quiz</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#safety-tips">Safety Tips</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;