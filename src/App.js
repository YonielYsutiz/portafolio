// import logo from './logo.svg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import CenterTex from './components/CenterTex';
import EducationText from './components/EducationText';
import Experience from './components/Experience';
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

/* 
  const skills = [
    {year: 2019, title: 'test', platform: 'codigo facilito', description: 'test', content: ['vairables'], link: 'https://www.youtube.com/watch?v=9Q6ZQY1n_7c&list=PLPl81lqbj-4Jp7J0KtZwX9XZ8XqB0xK2r&index=1'},
  ];
*/

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
            <CenterTex />
            <Experience />
            <EducationText />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
export default App;
