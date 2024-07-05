import React from 'react';
import HeroSection from './HeroSection';
import QuizSection from './QuizSection';
import ArticlesSection from './ArticlesSection';
import SafetyTipsSection from './SafetyTipsSection';
import ResourcesSection from './ResourcesSection';

function MainPage() {
  return (
    <div className="main-page">
      <HeroSection />
      <QuizSection />
      <ArticlesSection />
      <SafetyTipsSection />
      <ResourcesSection />
    </div>
  );
}

export default MainPage;