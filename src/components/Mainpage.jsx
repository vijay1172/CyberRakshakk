import React from 'react';
import HeroSection from './HeroSection';
import QuizApp from './Quiz';
import ArticlesSection from './Articles';
// Import other sections as needed

function MainPage() {
  return (
    <main>
      <div id="hero"><HeroSection /></div>
      <div id="quiz"><QuizApp /></div>
      <div id="articles"><ArticlesSection /></div>
      {/* Add components for other sections */}
    </main>
  );
}

export default MainPage;
