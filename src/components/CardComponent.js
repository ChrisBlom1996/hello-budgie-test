import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  IconButton,
} from '@mui/material';
import CardIcon from '../assets/card-icon.svg';
import ForwardArrow from '../assets/forward-arrow.svg';

const CardComponent = ({ onNavigate }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: '#fff',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#222', fontSize: '16px' }}>
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
          justifyContent: 'flex-start',
          alignItems: 'center',
          bgcolor: '#f5f5f5',
          pt: 2,
          pb: 4,
        }}
      >
        <Card
          sx={{
            width: '100%',
            borderRadius: 2,
            border: '1px solid rgba(0, 0, 0, 0.12)',
            boxShadow: 1,
            backgroundColor: '#fff',
            '&:hover': { transform: 'scale(1.02)', transition: 'transform 0.2s ease' },
          }}
          onClick={onNavigate}
        >
          <CardContent
            sx={{
              padding: 2,
              '&:last-child': { paddingBottom: 2 },
            }}
          >
            {/* First Line: Icon, Title, and Arrow */}
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <img
                src={CardIcon}
                alt="Card Icon"
                style={{
                  width: 42,
                  height: 42,
                  marginRight: 10,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '18px', sm: '18px' },
                  fontWeight: 500,
                  color: '#222',
                  flex: 1,
                }}
              >
                Card
              </Typography>
              <IconButton sx={{ p: 0, mr: 0.5 }} onClick={onNavigate}>
                <img
                  src={ForwardArrow}
                  alt="Forward Arrow"
                  style={{
                    width: 22,
                    height: 22,
                  }}
                />
              </IconButton>
            </Box>

            {/* Second Line: Description */}
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '14px', sm: '14px' },
                color: '#666',
                mt: 1.25,
                ml: 0,
              }}
            >
              Interactive animated slider with navigation
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default CardComponent;