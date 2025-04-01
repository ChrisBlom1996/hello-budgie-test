import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

// Temporary Second Page Component
const SecondPage = () => {
  return (
    <div className="second-page">
      <h1>Second Page</h1>
      <p>This is the second page. We’ll build it next!</p>
    </div>
  );
};

// Wrapper to use useNavigate in HomePage
const HomePageWrapper = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/second-page');
  };

  return <HomePage onNavigate={handleNavigate} />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;