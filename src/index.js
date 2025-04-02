import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme with Figtree as the default font
const theme = createTheme({
  typography: {
    fontFamily: '"Figtree", sans-serif',
    h6: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 400,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);