import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import CardComponent from './components/CardComponent';

// Temporary Second Page Component
const SecondPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        p: 4,
      }}
    >
      <Typography variant="h6" sx={{ color: '#333' }}>
        Second Page
      </Typography>
      <Typography variant="body1" sx={{ color: '#666' }}>
        This is the second page. We’ll build it next!
      </Typography>
    </Box>
  );
};

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
        {/* Toolbar at the top */}
        <AppBar position="static" color="default" elevation={1}>
          <Toolbar>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
              Add a component
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Main content area */}
        <Container
          maxWidth="sm"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Top-align the card
            alignItems: 'center',
            bgcolor: '#f5f5f5',
            pt: 2, // Small padding-top to create minimal space below the toolbar
            pb: 4, // Keep some padding-bottom for spacing at the bottom
          }}
        >
          <Routes>
            <Route path="/" element={<CardComponentWrapper />} />
            <Route path="/second-page" element={<SecondPage />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;