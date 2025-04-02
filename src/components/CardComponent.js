import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CardComponent = ({ onNavigate }) => {
  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: '#fff',
        '&:hover': { transform: 'scale(1.02)', transition: 'transform 0.2s ease' },
      }}
      onClick={onNavigate}
    >
      <CardContent
        sx={{
          padding: { xs: 1, sm: 1.2 },
          '&:last-child': { paddingBottom: { xs: 1, sm: 1.2 } },
        }}
      >
        {/* First Line: Icon, Title, and Arrow */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            px: 1, 
            py: 0.5,
          }}
        >
          <ViewAgendaOutlinedIcon
            sx={{
              fontSize: { xs: 32, sm: 32 },
              color: '#666',
              mr: 1,
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
                fontSize: { xs: '1.3rem', sm: '1.3rem' },
                pt: '10px',
                mr: '15px',
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
            mt: 0.2,
            ml: 2, // Align with the icon's left edge (accounting for Box padding)
          }}
        >
          Interactive animated slider with navigation
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;