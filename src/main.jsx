import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
const theme = createTheme({

  palette: {
    mode: 'light',
    primary: {
      main: '#AADDF8',
    },
    secondary: {
      main: '#546e7a',
    },
    text: {
      primary: '#E07E33',
    },
    divider: '#6E3816',
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
   <App />

    </ThemeProvider>
 
  </React.StrictMode>,
)
