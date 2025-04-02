import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import CardComponent from './components/CardComponent';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage.js';

// Wrapper to add navigation to CardComponent
const CardComponentWrapper = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/second-page');
  };

  return <CardComponent onNavigate={handleNavigate} />;
};

// Wrapper to add navigation to SecondPage
const SecondPageWrapper = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/third-page');
  };

  return <SecondPage onNavigate={handleNavigate} />;
};

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<CardComponentWrapper />} />
          <Route path="/second-page" element={<SecondPageWrapper />} />
          <Route path="/third-page" element={<ThirdPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;