import React, { useState, useEffect, useRef } from 'react';
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
  Modal,
  TextField,
  Menu,
  MenuItem,
  Backdrop,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ColorizeIcon from '@mui/icons-material/Colorize';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { SketchPicker } from 'react-color';
import BackArrow from '../assets/back-arrow.svg';
import ForwardArrow from '../assets/forward-arrow.svg';
import CameraIcon from '../assets/camera-icon.svg';
import CogIcon from '../assets/cog-icon.svg';
import DuplicateIcon from '../assets/duplicate-icon.svg';
import DeleteIcon from '../assets/delete-icon.svg';
import AddIcon from '../assets/add-icon.svg';

// Custom ImageCard component to manage each card and its editor
const ImageCard = ({ card, onDuplicate, onDelete, onTitleChange }) => {
  const [cogAnchorEl, setCogAnchorEl] = useState(null);
  const [ellipsisAnchorEl, setEllipsisAnchorEl] = useState(null);
  const [editingTitle, setEditingTitle] = useState(false);
  const editorRef = useRef(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: card.title,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onTitleChange(card.id, html);
    },
    editable: editingTitle,
  });

  // Focus the editor when entering edit mode
  useEffect(() => {
    if (editingTitle && editor && editorRef.current) {
      editor.chain().focus().run();
      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.focus();
        }
      }, 100);
    }
  }, [editingTitle, editor]);

  const handleCogClick = (event) => {
    setCogAnchorEl(event.currentTarget);
  };

  const handleCogClose = () => {
    setCogAnchorEl(null);
  };

  const handleEllipsisClick = (event) => {
    setEllipsisAnchorEl(event.currentTarget);
  };

  const handleEllipsisClose = () => {
    setEllipsisAnchorEl(null);
  };

  const handleTitleEdit = () => {
    setEditingTitle(true);
  };

  const handleTitleSave = () => {
    setEditingTitle(false);
  };

  return (
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
          bgcolor: '#000', 
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ p: 0, mr: 1 }} onClick={handleCogClick}>
            <img
              src={CogIcon}
              alt="Cog Icon"
              style={{
                width: 21, 
                height: 21,
              }}
            />
          </IconButton>
          <Menu
            anchorEl={cogAnchorEl}
            open={Boolean(cogAnchorEl)}
            onClose={handleCogClose}
          >
            <MenuItem onClick={handleCogClose}>Option 1</MenuItem>
            <MenuItem onClick={handleCogClose}>Option 2</MenuItem>
            <MenuItem onClick={handleCogClose}>Option 3</MenuItem>
          </Menu>
          <IconButton sx={{ p: 0, mr: 1 }} onClick={() => onDuplicate(card.id)}>
            <img
              src={DuplicateIcon}
              alt="Duplicate Icon"
              style={{
                width: 19.2,
                height: 19.2,
              }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} onClick={() => onDelete(card.id)}>
            <img
              src={DeleteIcon}
              alt="Delete Icon"
              style={{
                width: 19.2,
                height: 19.2,
              }}
            />
          </IconButton>
        </Box>
        <IconButton sx={{ p: 0 }} onClick={handleEllipsisClick}>
          <MoreVertIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
        </IconButton>
        <Menu
          anchorEl={ellipsisAnchorEl}
          open={Boolean(ellipsisAnchorEl)}
          onClose={handleEllipsisClose}
        >
          <MenuItem onClick={handleEllipsisClose}>Settings</MenuItem>
          <MenuItem onClick={() => onDuplicate(card.id)}>Duplicate</MenuItem>
          <MenuItem onClick={() => onDelete(card.id)}>Delete</MenuItem>
        </Menu>
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
          <img
            src={CameraIcon}
            alt="Camera Icon"
            style={{
              width: 48, 
              height: 48,
            }}
          />
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
          {card.subtitle}
        </Typography>
        {editingTitle ? (
          <Box sx={{ mb: 1 }}>
            <Box sx={{ border: '1px solid #ddd', borderRadius: 1, mb: 1 }}>
              <Box sx={{ borderBottom: '1px solid #ddd', p: 1 }}>
                <IconButton
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  sx={{ p: 0.5 }}
                >
                  <Typography variant="body2" sx={{ fontWeight: editor.isActive('bold') ? 'bold' : 'normal' }}>
                    B
                  </Typography>
                </IconButton>
                <IconButton
                  onClick={() => {
                    console.log('Toggling italic', editor);
                    editor.chain().focus().toggleItalic().run();
                  }}
                  sx={{ p: 0.5 }}
                >
                  <Typography variant="body2" sx={{ fontStyle: editor.isActive('italic') ? 'italic' : 'normal' }}>
                    I
                  </Typography>
                </IconButton>
                <IconButton
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  sx={{ p: 0.5 }}
                >
                  <Typography variant="body2" sx={{ textDecoration: editor.isActive('underline') ? 'underline' : 'none' }}>
                    U
                  </Typography>
                </IconButton>
              </Box>
              <EditorContent
                editor={editor}
                ref={editorRef}
                contentEditable={editingTitle}
                onFocus={() => console.log('Editor focused')}
              />
            </Box>
            <Button
              variant="contained"
              size="small"
              sx={{ mt: 1, backgroundColor: '#3C8DA9', color: '#fff' }}
              onClick={handleTitleSave}
            >
              Save
            </Button>
          </Box>
        ) : (
          <Typography
            variant="h6"
            sx={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#333',
              mt: 0.5,
              cursor: 'pointer',
            }}
            onClick={handleTitleEdit}
          >
            <span dangerouslySetInnerHTML={{ __html: card.title }} />
          </Typography>
        )}
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.8rem',
            color: '#666',
            mt: 0.5,
          }}
        >
          {card.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.8rem',
            color: '#666',
            mt: 0.5,
          }}
        >
          {card.text}
        </Typography>
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
          onClick={() => console.log('Navigate to the next page')}
        >
          <img
            src={ForwardArrow}
            alt="Forward Arrow"
            style={{
              width: 26,
              height: 26,
              marginRight: 10,
            }}
          />
        </IconButton>
      </CardContent>
    </Card>
  );
};

const ThirdPage = () => {
  const navigate = useNavigate();

  // State for cards
  const [cards, setCards] = useState([
    {
      id: 1,
      subtitle: 'REPREHENDERIT',
      title: 'Quis autem vel',
      description: 'lure reprehenderit qui in ea voluptate',
      text: 'velit esse quam nihil molestiae consequatur',
    },
  ]);

  // State for modal and settings
  const [modalOpen, setModalOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#6a1b9a');
  const [textColor, setTextColor] = useState('#000000');
  const [showBackgroundPicker, setShowBackgroundPicker] = useState(false);
  const [showTextPicker, setShowTextPicker] = useState(false);

  const handleBack = () => {
    navigate('/second-page');
  };

  const handleClose = () => {
    navigate('/');
  };

  const handleSave = () => {
    console.log('Save button clicked');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Image Cards',
        text: 'Check out my image cards!',
        url: window.location.href,
      })
        .then(() => console.log('Share successful'))
        .catch((error) => console.log('Share failed:', error));
    } else {
      console.log('Web Share API not supported');
    }
  };

  const handleSettings = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setShowBackgroundPicker(false);
    setShowTextPicker(false);
  };

  const handleCameraClick = () => {
    console.log('Camera button clicked - implement camera functionality here');
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
    setShowBackgroundPicker(false);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
    setShowTextPicker(false);
  };

  const handleDuplicate = (cardId) => {
    const cardToDuplicate = cards.find((card) => card.id === cardId);
    const newCard = { ...cardToDuplicate, id: cards.length + 1 };
    setCards([...cards, newCard]);
  };

  const handleDelete = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1,
      subtitle: 'REPREHENDERIT',
      title: 'Quis autem vel',
      description: 'lure reprehenderit qui in ea voluptate',
      text: 'velit esse quam nihil molestiae consequatur',
    };
    setCards([...cards, newCard]);
  };

  const handleTitleChange = (cardId, newTitle) => {
    setCards(
      cards.map((card) =>
        card.id === cardId ? { ...card, title: newTitle } : card
      )
    );
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
              <img
                src={BackArrow}
                alt="Back Arrow"
                style={{
                  width: 19.2,
                  height: 19.2,
                  marginRight: 10,
                }}
              />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 500, color: '#333', fontSize: '16px' }}>
              Image Cards
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleShare} sx={{ p: 0, mr: 1 }}>
              <ShareIcon sx={{ color: '#3C8DA9', fontSize: '1.2rem' }} />
            </IconButton>
            <IconButton onClick={handleSettings} sx={{ p: 0 }}>
              <SettingsIcon sx={{ color: '#3C8DA9', fontSize: '1.2rem' }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Modal for Cog Button */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: { backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '85%',
            maxWidth: 400,
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 24,
            p: 3,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: '700', color: '#333' }}>
              Content Banner Settings
            </Typography>
            <IconButton onClick={handleModalClose}>
              <CloseIcon sx={{ color: '#3C8DA9' }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: '#f5f5f5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mr: 2,
                borderRadius: 1,
              }}
            >
              <img
                src={CameraIcon}
                alt="Camera Icon"
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: '#333', flexGrow: 1 }}>
              hero-background.png
            </Typography>
            <IconButton sx={{ ml: 1 }}>
              <img
                src={DeleteIcon}
                alt="Delete Icon"
                style={{
                  width: 19.2,
                  height: 19.2,
                }}
              />
            </IconButton>
          </Box>
          <Typography variant="overline" sx={{ fontSize: '0.7rem', color: '#666', display: 'block', mb: 0 }}>
            IMAGE
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Select an image"
            InputProps={{
              startAdornment: (
                <Box
                  sx={{
                    bgcolor: '#000',
                    p: 1,
                    mr: 1,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '4px 0 0 4px',
                  }}
                >
                  <CameraAltIcon sx={{ color: '#fff', fontSize: '1rem' }} onClick={handleCameraClick} />
                </Box>
              ),
            }}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ width: '48%' }}>
              <Typography variant="overline" sx={{ fontSize: '0.7rem', color: '#666', display: 'block', mb: 0 }}>
                BACKGROUND COLOUR
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        bgcolor: backgroundColor,
                        mr: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ColorizeIcon
                        sx={{ color: '#fff', fontSize: '1rem', cursor: 'pointer' }}
                        onClick={() => setShowBackgroundPicker(!showBackgroundPicker)}
                      />
                    </Box>
                  ),
                }}
              />
              {showBackgroundPicker && (
                <Box sx={{ position: 'absolute', zIndex: 2 }}>
                  <SketchPicker
                    color={backgroundColor}
                    onChangeComplete={handleBackgroundColorChange}
                  />
                </Box>
              )}
            </Box>
            <Box sx={{ width: '48%' }}>
              <Typography variant="overline" sx={{ fontSize: '0.7rem', color: '#666', display: 'block', mb: 0 }}>
                TEXT COLOUR
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        bgcolor: textColor,
                        mr: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ColorizeIcon
                        sx={{ color: '#fff', fontSize: '1rem', cursor: 'pointer' }}
                        onClick={() => setShowTextPicker(!showTextPicker)}
                      />
                    </Box>
                  ),
                }}
              />
              {showTextPicker && (
                <Box sx={{ position: 'absolute', zIndex: 2 }}>
                  <SketchPicker
                    color={textColor}
                    onChangeComplete={handleTextColorChange}
                  />
                </Box>
              )}
            </Box>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#3C8DA9',
              color: '#fff',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              fontWeight: 500,
              py: 1,
              '&:hover': { backgroundColor: '#2196f3' },
            }}
            onClick={handleModalClose}
          >
            Done
          </Button>
        </Box>
      </Modal>

      {/* Cards */}
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
        {cards.length === 0 ? (
          <IconButton onClick={handleAddCard}>
            <img
              src={AddIcon}
              alt="Add Icon"
              style={{
                width: 32,
                height: 32,
              }}
            />
          </IconButton>
        ) : (
          cards.map((card) => (
            <ImageCard
              key={card.id}
              card={card}
              onDuplicate={handleDuplicate}
              onDelete={handleDelete}
              onTitleChange={handleTitleChange}
            />
          ))
        )}
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
            backgroundColor: '#3C8DA9',
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