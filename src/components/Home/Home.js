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
          sx={{ my: { xs: 2, md: 4 }, maxWidth: '30ch' }}
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
