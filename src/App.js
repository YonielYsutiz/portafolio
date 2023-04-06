import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import './App.css';
import ContractTex from './components/ContactTex';
import Education from './components/Education/Education';
import Experience from './components/Experience';
import HomeTex from './components/HomeTex';
import NavBar from './components/NavBar';

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
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <NavBar />
        <HomeTex />
        <Experience />
        <Education />
        <ContractTex />
      </Box>
    </ThemeProvider>
  );
}
export default App;
