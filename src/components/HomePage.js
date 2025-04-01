import React from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, Box, IconButton } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomePage = ({ onNavigate }) => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Toolbar */}
      <AppBar position="static" elevation={1} sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: '#333',
              fontWeight: 600,
              fontSize: { xs: '1.2rem', sm: '1.5rem' }, // Smaller on mobile
            }}
          >
            Add a component
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Card */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Card
          sx={{
            width: '90%',
            maxWidth: 600,
            borderRadius: 2,
            boxShadow: 1,
            '&:hover': { transform: 'scale(1.02)', transition: 'transform 0.2s ease' },
          }}
          onClick={onNavigate}
        >
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: { xs: 1.5, sm: 2 }, // Smaller padding on mobile
            }}
          >
            {/* Icon */}
            <ArticleOutlinedIcon
              sx={{
                fontSize: { xs: 30, sm: 40 }, // Smaller icon on mobile
                color: '#666',
                mr: { xs: 1, sm: 2 },
              }}
            />

            {/* Text */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  fontWeight: 500,
                  color: '#333',
                }}
              >
                Card
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  color: '#666',
                }}
              >
                Interactive animated slider with navigation
              </Typography>
            </Box>

            {/* Arrow */}
            <IconButton>
              <ArrowForwardIosIcon
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                  color: '#007bff',
                }}
              />
            </IconButton>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HomePage;