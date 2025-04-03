import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BackArrow from '../assets/back-arrow.svg';
import FullPageLandscape from '../assets/full-page-landscape.svg';
import HalfPageLandscape from '../assets/half-page-landscape.svg';
import HalfPagePortrait from '../assets/half-page-portrait.svg';
import ForwardArrow from '../assets/forward-arrow.svg';

const SecondPage = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleClose = () => {
    navigate('/');
  };

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate();
    } else {
      navigate('/third-page');
    }
  };

  const cards = [
    { name: 'Full Page Landscape', icon: <img src={FullPageLandscape} alt="Full Page Landscape Icon" style={{ width: 32, height: 32 }} /> },
    { name: 'Half Page Landscape', icon: <img src={HalfPageLandscape} alt="Half Page Landscape Icon" style={{ width: 32, height: 32 }} /> },
    { name: 'Half Page Portrait', icon: <img src={HalfPagePortrait} alt="Half Page Portrait Icon" style={{ width: 32, height: 32 }} /> },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#3C8DA9',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff', fontSize: '16px', fontWeight: '700' }}>
            New Section
          </Typography>
          <IconButton onClick={handleClose} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Secondary Toolbar */}
      <Box
        sx={{
          backgroundColor: '#fff',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          px: 2,
          py: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleBack} sx={{ p: 0, mr: 1 }}>
            <img
              src={BackArrow}
              alt="Back Arrow"
              style={{
                width: 19.2, // 1.2rem (19.2px at 16px root font size)
                height: 19.2,
                marginRight: 10, // Add 10px margin right
              }}
            />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 500, color: '#333', fontSize: '16px' }}>
            Cards
          </Typography>
        </Box>
      </Box>

      {/* Cards */}
      <Container
        maxWidth="sm"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          bgcolor: '#efefef',
          pt: 2,
          pb: 4,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: '100%',
              borderRadius: 2,
              border: '1px solid rgba(0, 0, 0, 0.12)',
              boxShadow: 1,
              backgroundColor: '#fff',
              mb: 1,
              '&:hover': { transform: 'scale(1.02)', transition: 'transform 0.2s ease' },
            }}
            onClick={handleCardClick}
          >
            <CardContent
              sx={{
                padding: 2,
                '&:last-child': { paddingBottom: 2 },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {React.cloneElement(card.icon, {
                sx: { fontSize: { xs: 32, sm: 32 }, color: '#666', mr: 1.25 },
                style: { marginRight: 10 }, 
              })}
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '16px', sm: '16px' },
                  fontWeight: 500,
                  color: '#333',
                  flex: 1,
                }}
              >
                {card.name}
              </Typography>
              <IconButton
                sx={{ p: 0, mr: 0.5 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
              >
                <img
                  src={ForwardArrow}
                  alt="Forward Arrow"
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 10, 
                  }}
                />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default SecondPage;