// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import CenterTex from "./components/CenterTex";
import Experience from "./components/Experience";
import EducationText from "./components/EducationText";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      <Box  sx={{ flexGrow: 1}}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={4}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            <CenterTex />
            <Experience />
            <EducationText />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
export default App;