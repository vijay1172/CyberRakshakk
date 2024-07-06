import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import QuizApp from './components/Quiz';
import ArticlesSection from './components/Articles';
// import SafetyTipsSection from './components/SafetyTipsSection';
import './App.css';
import Footer from './components/Footer';

function App() {
  return ( 
    <div className="App">
      <Header />
      <main>
        <HeroSection id="hero" />
        <QuizApp id="quiz" />
        <ArticlesSection id="articles" />
        {/* <SafetyTipsSection id="safety-tips" /> */}
        {/* <ResourcesSection id="resources" /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;