import React, { useState } from 'react';
import './Articles.css';
import phishingimage from '../assets/phishing.jpeg';
import strongpassword from '../assets/strong password.jpeg';
import cyber from '../assets/cyber.jpeg';

const articles = [
  {
    title: "Understanding Phishing Attacks",
    image: phishingimage,
    content: "Phishing attacks are deceptive attempts to steal sensitive information..."
  },
  {
    title: "The Importance of Strong Passwords",
    image: strongpassword,
    content: "Strong passwords are your first line of defense against unauthorized access..."
  },
  {
    title: "Cybersecurity Best Practices for Remote Work",
    image: cyber,
    content: "With the rise of remote work, cybersecurity has become more important than ever..."
  }
];

function ArticlesSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      (prevIndex + 1) % articles.length
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      (prevIndex - 1 + articles.length) % articles.length
    );
  };

  return (
    <section className="articles-section" id="articles">
      <h2>Latest Articles</h2>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>&lt;</button>
        <div className="card-container">
          {[0, 1, 2].map((offset) => {
            const index = (startIndex + offset) % articles.length;
            return (
              <div className="card" key={index}>
                <img src={articles[index].image} alt={articles[index].title} />
                <div className="card-content">
                  <h3>{articles[index].title}</h3>
                  <p>{articles[index].content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
}

export default ArticlesSection;