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
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', fontSize: '16px' }}>
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
            borderRadius: 2, // 8px
            border: '1px solid rgba(0, 0, 0, 0.12)', // 1px border
            boxShadow: 1,
            backgroundColor: '#fff',
            '&:hover': { transform: 'scale(1.02)', transition: 'transform 0.2s ease' },
          }}
          onClick={onNavigate}
        >
          <CardContent
            sx={{
              padding: 2, // 16px
              '&:last-child': { paddingBottom: 2 }, // Ensure consistent padding
            }}
          >
            {/* First Line: Icon, Title, and Arrow */}
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <ViewAgendaOutlinedIcon
                sx={{
                  fontSize: { xs: 32, sm: 32 },
                  color: '#666',
                  mr: 1.25, // 10px
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '16px', sm: '16px' },
                  fontWeight: 500,
                  color: '#333',
                  flex: 1,
                }}
              >
                Card
              </Typography>
              <IconButton sx={{ p: 0, mr: 0.5 }} onClick={onNavigate}>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    color: '#42a5f5',
                  }}
                />
              </IconButton>
            </Box>

            {/* Second Line: Description */}
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                color: '#666',
                mt: 1.25, // 10px
                ml: 0, // Align with the icon (no extra margin since CardContent handles padding)
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