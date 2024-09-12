import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';
import { ContextProvider } from './hooks/useStateContext';

/*
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography:{
    fontFamily:'"Roboto"'
  }
})
  */

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0d47a1', // Dark blue primary color
    },
    background: {
      default: '#0d47a1', // Dark blue background color
      paper: '#222222', // Dark blue paper color (for cards, etc.)
    },
    text: {
      primary: '#ffffff', // White text for better contrast
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
