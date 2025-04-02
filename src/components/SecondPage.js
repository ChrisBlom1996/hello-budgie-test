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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import PanoramaHorizontalIcon from '@mui/icons-material/PanoramaHorizontal';
import PortraitIcon from '@mui/icons-material/Portrait';

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
      // Fallback navigation in case onNavigate is not defined
      navigate('/third-page');
    }
  };

  const cards = [
    { name: 'Full Page Landscape', icon: <PanoramaHorizontalIcon /> },
    { name: 'Half Page Landscape', icon: <ViewAgendaOutlinedIcon /> },
    { name: 'Half Page Portrait', icon: <PortraitIcon /> },
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
            <ArrowBackIosIcon sx={{ color: '#333', fontSize: '1.2rem' }} />
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
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    color: '#42a5f5',
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