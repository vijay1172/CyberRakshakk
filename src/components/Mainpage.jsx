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
      <div id="safety-tips">{/* Safety Tips Component */}</div>
      <div id="resources">{/* Resources Component */}</div>
    </main>
  );
}
export default MainPage;
