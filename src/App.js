import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import CardComponent from './components/CardComponent';
import SecondPage from './components/SecondPage';

// Wrapper to add navigation to CardComponent
const CardComponentWrapper = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/second-page');
  };

  return <CardComponent onNavigate={handleNavigate} />;
};

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<CardComponentWrapper />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;