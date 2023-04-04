// import logo from './logo.svg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          columns={16}
        >
          <Grid
            item
            xs={4}
          >
            <NavBar />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <HomeTex />
            <Experience />
            <Education />
            <ContractTex />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
export default App;
