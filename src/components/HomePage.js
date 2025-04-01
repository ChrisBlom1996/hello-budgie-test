import React from 'react';
import './HomePage.css';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-page">
      {/* Toolbar */}
      <div className="toolbar">
        <h1>Add a component</h1>
      </div>

      {/* Card */}
      <div className="card" onClick={onNavigate}>
        <div className="card-content">
          <span className="card-icon">📋</span>
          <div className="card-text">
            <h2>Card</h2>
            <p>Interactive animated slider with navigation</p>
          </div>
          <span className="arrow">➡️</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;