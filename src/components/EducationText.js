import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
    return (
    <React.Fragment>
        <CssBaseline />
        <Typography variant="h3" align="auto"> Mis estudios </Typography>
        
        <Box mt={5}>
            <Container maxWidth="md">
                <Card sx={{ minWidth: 100 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        2023
                        </Typography>
                        <Typography variant="h5" component="div">
                            Curso Profesional de PHP
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Codigo Facilito
                        </Typography>
                            <Typography variant="body2">
                                . Variables y tipos.<br />
                                . Operadores.<br />
                                . Condiciones y ciclos.<br />
                                . Arreglos.<br />
                                . Funciones.<br />
                                . Programacion Orientada a objetos.<br />
                                . Base de datos.<br />
                                . MVC.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="https://codigofacilito.com/cursos/php-profesional" target="_black">Link del curso</Button>
                    </CardActions>
                </Card>
            </Container>
        </Box>
        <Box mt={5}>
            <Container maxWidth="md">
                <Card sx={{ minWidth: 100 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        2023
                        </Typography>
                        <Typography variant="h5" component="div">
                            Pruebas Unitarias con PHP
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Codigo Facilito
                        </Typography>
                            <Typography variant="body2">
                            . Asserts. <br />
                                . Creacion de helpers. <br />
                                . Setup and teardown. <br /> 
                                . Base de datos. <br />
                                . Pruebas con excepciones. <br />
                                . Salta tests. <br />
                                . SetupBeforeClass. <br />
                                . After y Before. <br />
                                . Generar reportes. <br /> 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="https://codigofacilito.com/cursos/php-testing" target="_black">Link del curso</Button>
                    </CardActions>
                </Card>
            </Container>
        </Box>
        <Box mt={5}>
            <Container maxWidth="md">
                <Card sx={{ minWidth: 100 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        2022
                        </Typography>
                        <Typography variant="h5" component="div">
                            Creacion de Apis en Laravel
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Platzi
                        </Typography>
                            <Typography variant="body2">
                                . Modelo y controlador. <br /> 
                                . Revetir migraciones y Guardar registros. <br />
                                . Traducir validaciones. <br/> 
                                . Mostrar, crear y eliminar registros. <br /> 
                                . Api resources. <br/>
                                . Laravel Sanctum. <br /> 
                                . Test api. <br /> 
                                . Tablas relacionadas . <br/>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="https://platzi.com/cursos/laravel-api/" target="_black">Link del curso</Button>
                    </CardActions>
                </Card>
            </Container>
        </Box>
            
        <Box mt={5} mb={5}>
            <Container maxWidth="md">
                <Card sx={{ minWidth: 100 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        2022
                        </Typography>
                        <Typography variant="h5" component="div">
                            Fundamentos de Python
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Crehana
                        </Typography>
                            <Typography variant="body2">
                                . Conceptos basicos. <br/>
                                . Estructuras de control. <br/>
                                . Estructuras de datos. <br />
                                . Funciones. <br/>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"  href="https://www.crehana.com/cursos-online-diseno-web/fundamentos-de-python/?source_page=Search%20Landing&source_detail=Search%20Landing&source=search&model_used=SEARCH_ENGINE_V2.2&product_name=Fundamentos%20de%20Python&product_id=12080&keyword=fundamentos%20de%20python&item_type=course&position_selected=0" target="_black">Link del curso</Button>
                    </CardActions>
                </Card>
            </Container>
        </Box>
        
            
    </React.Fragment>  

    );
}

// function EducationText() {
//   return (
// <React.Fragment>
//     <CssBaseline />
//     <Container maxWidth="sm">
//     <Box sx={{ alignItems: 'column', bgcolor: '#000000', height: '100vh' }}>
//             <Typography variant="h5" align="auto">
//                 <b>Bachiller (2017-2021)</b> 
//             </Typography>
//             <Typography variant="body1" align = "auto">
//                 <b>Unidad Educativa Carmen Ruiz</b>
//             </Typography>
//             <Divider />
//             <Typography variant="h5" align = "auto">
//                 <b>Curso Basico de programacion (2022)</b>
//             </Typography>
//             <Typography variant="body1" align = "auto">
//                 <b>Platzi(2022)</b>
//             </Typography>
//             <Divider />
//             <Typography variant="h5" align = "auto">
//                 <b>Fundamentos de Python</b>
//             </Typography>
//             <Typography variant="body1" align = "auto">
//                 <b>Crehana (2022)</b>
//             </Typography>
//             <Divider />
//             <Typography variant="h5" align = "auto">
//                 <b>Curso Profesional de php</b>
//             </Typography>
//             <Typography variant="body1" align = "auto">
//                 <b>Codigo Facilito(2022)</b>
//             </Typography>
//             <Divider />
//             <Typography variant="h5" align = "auto">
//                 <b>Pruebas unitarias con php</b>
//             </Typography>
//             <Typography variant="body1" align = "auto">
//                 <b>Codigo Facilito (2023)</b>
//             </Typography>
//             <Divider /> 
//             <Typography variant="h5" align = "auto">
//                 <b>Creacion de Apis con Laravel</b>
//             </Typography>
//             <Typography variant="body1" align = "auto">
//                 <b>Codigo Facilito (2023)</b>
//             </Typography>
//             <Divider /> 
//             <Typography variant="h5" align = "auto">
//                 <b>Curso Laravel</b>
//             </Typography>
//             <Typography variant="body1" align = "auto">
//                 <b>Codigo Facilito (2023)</b>
//             </Typography>
//         </Box>
//     </Container>
// </React.Fragment>
//   );
// }

// export default EducationText;