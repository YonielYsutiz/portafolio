import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function EducationText() {
  return (
<React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
    <Box sx={{ alignItems: 'column', bgcolor: '#000000', height: '100vh' }}>
            <Typography variant="h5" align="auto">
                <b>Bachiller (2017-2021)</b> 
            </Typography>
            <Typography variant="body1" align = "auto">
                <b>Unidad Educativa Carmen Ruiz</b>
            </Typography>
            <Divider />
            <Typography variant="h5" align = "auto">
                <b>Curso Basico de programacion (2022)</b>
            </Typography>
            <Typography variant="body1" align = "auto">
                <b>Platzi(2022)</b>
            </Typography>
            <Divider />
            <Typography variant="h5" align = "auto">
                <b>Fundamentos de Python</b>
            </Typography>
            <Typography variant="body1" align = "auto">
                <b>Crehana (2022)</b>
            </Typography>
            <Divider />
            <Typography variant="h5" align = "auto">
                <b>Curso Profesional de php</b>
            </Typography>
            <Typography variant="body1" align = "auto">
                <b>Codigo Facilito(2022)</b>
            </Typography>
            <Divider />
            <Typography variant="h5" align = "auto">
                <b>Pruebas unitarias con php</b>
            </Typography>
            <Typography variant="body1" align = "auto">
                <b>Codigo Facilito (2023)</b>
            </Typography>
            <Divider /> 
            <Typography variant="h5" align = "auto">
                <b>Creacion de Apis con Laravel</b>
            </Typography>
            <Typography variant="body1" align = "auto">
                <b>Codigo Facilito (2023)</b>
            </Typography>
            <Divider /> 
            <Typography variant="h5" align = "auto">
                <b>Curso Laravel</b>
            </Typography>
            <Typography variant="body1" align = "auto">
                <b>Codigo Facilito (2023)</b>
            </Typography>
        </Box>
    </Container>
</React.Fragment>
  );
}

export default EducationText;