import { Grid, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import * as React from 'react';

// const Content_first = ()=>{
//   return 
//   <p>
//     . Variables y tipos.<br />
//     . Operadores.<br />
//     . Condiciones y ciclos.<br />
//     . Arreglos.<br />
//     . Funciones.<br />
//     . Programacion Orientada a objetos.<br />
//     . Base de datos.<br />
//     . MVC.
//   </p>
// }

// const Content_second = ()=>{
//   return 
//   <p>
//     . Asserts. <br />
//     . Creacion de helpers. <br />
//     . Setup and teardown. <br />
//     . Base de datos. <br />
//     . Pruebas con excepciones. <br />
//     . Salta tests. <br />
//     . SetupBeforeClass. <br />
//     . After y Before. <br />
//     . Generar reportes. <br />
//   </p>
// }

// const Content_third = ()=>{
//   return 
//   <p>
//     . Modelo y controlador. <br />
//     . Revetir migraciones y Guardar registros. <br />
//     . Traducir validaciones. <br />
//     . Mostrar, crear y eliminar registros. <br />
//     . Api resources. <br />
//     . Laravel Sanctum. <br />
//     . Test api. <br />
//     . Tablas relacionadas . <br />
//   </p>
// }

// const Content_fourth = ()=>{
//   <p>
//     . Conceptos basicos. <br />
//     . Estructuras de control. <br />
//     . Estructuras de datos. <br />
//     . Funciones. <br />
//   </p>
// }
// const skills = [
//     {year: 2023, title: 'Curso profesional de PHP', platform: 'codigo facilito', content: [<Content_first />], link: "https://codigofacilito.com/cursos/php-profesional"},
//     {year: 2023, title: 'Pruebas Unitarias con PHP',platform: 'Codigo facilito', content: [<Content_second />], link:"https://codigofacilito.com/cursos/php-testing"},
//     {year: 2022, title: 'Creacion de apis en laravel',platform: 'Platzi', content: [<Content_third />], link:"https://platzi.com/cursos/laravel-api/"},
//     {year: 2022, title: 'Fundamentos de Python',platform: 'Crehana', content: [<Content_fourth />], link:"https://www.crehana.com/cursos-online-diseno-web/fundamentos-de-python/?source_page=Search%20Landing&source_detail=Search%20Landing&source=search&model_used=SEARCH_ENGINE_V2.2&product_name=Fundamentos%20de%20Python&product_id=12080&keyword=fundamentos%20de%20python&item_type=course&position_selected=0"},

// ]

export default function EducationTex() {
  return (
    <>
      <Typography
        variant="h3"
        align="auto"
      >
        
        Mis estudios
      </Typography>

      <Grid
        id="educacion"
        rows={2}
        columns={2}
        container
      >
        <CssBaseline />
        <Grid
          mt={5}
          item
        >
          <Container maxWidth="md">
            <Card sx={{ minWidth: 100, borderRadius: '14px', padding: '10px' }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  2023
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                >
                  Curso Profesional de PHP
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
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
                <Button
                  size="small"
                  href="https://codigofacilito.com/cursos/php-profesional"
                  target="_black"
                >
                  Link del curso
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Grid>
        <Grid
          mt={5}
          item
        >
          <Container maxWidth="md">
            <Card sx={{ minWidth: 100, borderRadius: '14px', padding: '10px'}}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  2023
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                >
                  Pruebas Unitarias con PHP
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
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
                <Button
                  size="small"
                  href="https://codigofacilito.com/cursos/php-testing"
                  target="_black"
                >
                  Link del curso
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Grid>
        <Grid
          mt={5}
          item
        >
          <Container maxWidth="md">
            <Card sx={{ minWidth: 100, borderRadius: '14px', padding: '10px' }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  2022
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                >
                  Creacion de Apis en Laravel
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  Platzi
                </Typography>
                <Typography variant="body2">
                  . Modelo y controlador. <br />
                  . Revetir migraciones y Guardar registros. <br />
                  . Traducir validaciones. <br />
                  . Mostrar, crear y eliminar registros. <br />
                  . Api resources. <br />
                  . Laravel Sanctum. <br />
                  . Test api. <br />
                  . Tablas relacionadas . <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://platzi.com/cursos/laravel-api/"
                  target="_black"
                >
                  Link del curso
                </Button>
              </CardActions>
                </Card>
          </Container>
        </Grid>

        <Grid
          mt={5}
          item
          mb={5}
        >
          <Container maxWidth="md">
            <Card sx={{ minWidth: 100, borderRadius: '14px', padding: '10px'}}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  2022
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                >
                  Fundamentos de Python
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  Crehana
                </Typography>
                <Typography variant="body2">
                  . Conceptos basicos. <br />
                  . Estructuras de control. <br />
                  . Estructuras de datos. <br />
                  . Funciones. <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://www.crehana.com/cursos-online-diseno-web/fundamentos-de-python/?source_page=Search%20Landing&source_detail=Search%20Landing&source=search&model_used=SEARCH_ENGINE_V2.2&product_name=Fundamentos%20de%20Python&product_id=12080&keyword=fundamentos%20de%20python&item_type=course&position_selected=0"
                  target="_black"
                >
                  Link del curso
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
