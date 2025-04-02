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
  Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share'; // Added for share button
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const ThirdPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/second-page');
  };

  const handleClose = () => {
    navigate('/');
  };

  const handleNextPage = () => {
    console.log('Navigate to the next page');
    // Add navigation to the next page here if needed
  };

  const handleSave = () => {
    console.log('Save button clicked');
    // Add save functionality here if needed
  };

  const handleShare = () => {
    console.log('Share button clicked');
    // Add share functionality here if needed
  };

  const handleSettings = () => {
    console.log('Settings button clicked');
    // Add settings functionality here if needed
  };

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
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleBack} sx={{ p: 0, mr: 1 }}>
              <ArrowBackIosIcon sx={{ color: '#333', fontSize: '1.2rem' }} />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 500, color: '#333', fontSize: '16px' }}>
              Image Cards
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleShare} sx={{ p: 0, mr: 1 }}>
              <ShareIcon sx={{ color: '#42a5f5', fontSize: '1.2rem' }} />
            </IconButton>
            <IconButton onClick={handleSettings} sx={{ p: 0 }}>
              <SettingsIcon sx={{ color: '#42a5f5', fontSize: '1.2rem' }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Card */}
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
            mb: 1,
          }}
        >
          {/* Top Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 1,
              borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{ p: 0, mr: 1 }}>
                <SettingsIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
              </IconButton>
              <IconButton sx={{ p: 0, mr: 1 }}>
                <ContentCopyIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <DeleteIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
              </IconButton>
            </Box>
            <IconButton sx={{ p: 0 }}>
              <MoreVertIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
            </IconButton>
          </Box>

          {/* Image Upload Section */}
          <Box
            sx={{
              backgroundColor: '#f5f5f5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              py: 4,
            }}
          >
            <IconButton>
              <CameraAltIcon sx={{ fontSize: '3rem', color: '#666' }} />
            </IconButton>
          </Box>

          {/* Content Section */}
          <CardContent
            sx={{
              padding: 2,
              '&:last-child': { paddingBottom: 2 },
              position: 'relative',
            }}
          >
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.7rem',
                color: '#666',
                fontWeight: 500,
                display: 'block',
              }}
            >
              REPREHENDERIT
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#333',
                mt: 0.5,
              }}
            >
              Quis autem vel
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.8rem',
                color: '#666',
                mt: 0.5,
              }}
            >
              lure reprehenderit qui in ea voluptate
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.8rem',
                color: '#666',
                mt: 0.5,
              }}
            >
              velit esse quam nihil molestiae consequatur
            </Typography>
            <IconButton
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
              }}
              onClick={handleNextPage}
            >
              <ArrowForwardIosIcon sx={{ fontSize: '0.9rem', color: '#42a5f5' }} />
            </IconButton>
          </CardContent>
        </Card>
      </Container>

      {/* Bottom Bar */}
      <Box
        sx={{
          backgroundColor: '#fff',
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          px: 2,
          py: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#42a5f5',
            color: '#fff',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            fontWeight: 500,
            px: 3,
            py: 1,
            '&:hover': { backgroundColor: '#2196f3' },
          }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ThirdPage;