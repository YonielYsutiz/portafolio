import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { baseContainerStyles } from '../../vendor';

export default function Home() {
  return (
    <Box
      id="inicio"
      sx={{
        ...baseContainerStyles,
        marginTop: { xs: '35px', lg: '0' },
        gap: { sm: '0', lg: '8%' },
      }}
    >
      <Box mt="5%">
        <h5 className="greeting">Hola, Yo soy</h5>
        <h2 className="heading">YONIEL YSTURIZ</h2>
        <Typography
          variant="body1"
          sx={{ my: { xs: 2, md: 4 }, maxWidth: '40ch' }}
        >
          <b>
          Soy un desarrollador web con habilidades en PHP, Laravel, Python, Vuejs, React,
          MySql, JavaScript y git
          buscando oportunidades para continuar aprendiendo y creciendo en un
          entorno de trabajo dinámico y colaborativo.
          </b>
        </Typography>
        <Button
          variant="contained"
          href="https://drive.google.com/file/d/1sIvf1NkE8krO5Al1oRsyVrz5ob8pFqer/view?usp=sharing"
          target="_black"
          disableElevation
        >
          Descargar CV
        </Button>
      </Box>
      <Box>
        <Avatar
          alt="Yoniel Ysturiz"
          src="imageHome.jpeg"
          sx={{ width: 200, height: 200 }}
        />
      </Box>
    </Box>
  );
}
