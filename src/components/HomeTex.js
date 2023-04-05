import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function HomeTex() {
  return (
    <Box
      id="inicio"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        textAlign: { xs: 'center', lg: 'left' },
        height: { xs: 'calc(100dvh - 55px)' },
        marginTop: { xs: '55px', lg: '0' },
        padding: { xs: '0 0.8rem', md: '0' },
        // background: { xs: 'red', sm: 'green', md: 'blue' },
        gap: { sm: '0', lg: '8%' },
      }}
    >
      <Box mt="5%">
        <h5 className="greeting">Hola, Yo soy</h5>
        <h2 className="heading">YONIEL YSTURIZ</h2>
        <Typography
          variant="body1"
          sx={{ my: { xs: 2, md: 4 }, maxWidth: '60ch' }}
        >
          <b>
            Soy un desarrollador backend con habilidades en PHP y Python,
            buscando oportunidades para continuar aprendiendo y creciendo en un
            entorno de trabajo dinámico y colaborativo.
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
      </Box>
      <Box>
        <Avatar
          alt="Yoniel Ysturiz"
          src="imagen.jpg"
          sx={{ width: 250, height: 250 }}
        />
      </Box>
    </Box>
  );
}

export default HomeTex;
