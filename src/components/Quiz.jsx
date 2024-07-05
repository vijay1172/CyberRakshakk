import React, { useState, useEffect } from 'react';
import Quiz from 'react-quiz-component';
import '../components/Quiz.css';  

function QuizApp() {
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching questions...');
    fetch('/questions.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Questions loaded:', data);
        setQuizData(data);
      })
      .catch(error => {
        console.error('Error loading questions:', error);
        setError(error.message);
      });
  }, []);

  const handleQuizFinish = (obj) => {
    setScore(obj.correctPoints);
  };

  if (error) {
    return <div className="error-message">Error loading quiz: {error}</div>;
  }

  if (!quizData) {
    return <div className="loading-message">Loading quiz...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="light"></div>
      <div className="quiz-content">
        <h1>{quizData.quizTitle}</h1>
        <p>{quizData.quizSynopsis}</p>
        <Quiz 
          quiz={quizData}
          showDefaultResult={false}
          onComplete={handleQuizFinish}
        />
        <div className="score">Current Score: {score}</div>
      </div>
    </div>
  );
}

export default QuizApp;