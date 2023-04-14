import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Rubik, sans-serif',
    h1: {
      fontFamily: 'Rubik, sans-serif',
    },
  },
});

function App() {
  useEffect(()=>{
    document.title = "Portafolio"
  }, [])
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <NavBar />
        <Home />
        <Experience />
        <Education />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}
export default App;
