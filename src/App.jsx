import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuizApp from './components/Quiz';
import ArticlesSection from './components/Articles';
import Footer from './components/Footer';
import Login from './components/Login'; // Make sure to create this component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection id="hero" />
              <QuizApp id="quiz" />
              <ArticlesSection id="articles" />
              {/* Add other sections as needed */}
            </main>
          } />
          <Route path="/login" element={<Login/>} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;