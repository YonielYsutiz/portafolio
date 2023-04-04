import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function HomeTex() {
  return (
    <Box
      className="full-height"
      id="inicio"
    >
      <div>
        <Grid
          container
          spacing={10}
          direction="row"
          alignItems="center"
        >
          <Grid
            item
            xs={7}
          >
            <Typography variant="h5">Hola, Yo soy</Typography>
            <Typography variant="h2">YONIEL YSTURIZ</Typography>
            <Typography
              variant="body1"
              sx={{ my: 4 }}
            >
              <b>
                Soy un desarrollador backend con habilidades en PHP y Python,
                buscando oportunidades para continuar aprendiendo y creciendo en
                un entorno de trabajo dinámico y colaborativo.
              </b>
            </Typography>
            <Button
              variant="contained"
              href="https://drive.google.com/file/d/1H2MUJonJfSddd2TVVFPscuDWkLMsojDf/view?usp=share_link"
              target="_black"
              disableElevation
            >
              Descargar CV
            </Button>
          </Grid>
          <Grid
            item
            xs
          >
            <Avatar
              alt="Yoniel Ysturiz"
              src="imagen.jpg"
              sx={{ width: 250, height: 250 }}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default HomeTex;
