import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Experience() {
  return (
    <Box
      id="experiencia"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        justifyContent: 'center',
        height: '100dvh',
      }}
      className="full-height"
    >
      <Typography variant="h3">Mi Experiencia</Typography>
      <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="images.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Desarrollador en proyectos de imuko"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Developer-Backend
                </Typography>
                {
                  ' - Colabore para la generacion de cuentas de cobro, creacion de metodos y funciones, mantenimientos y construccion de servicios REST.'
                }
                <div>
                  <Link
                    href="https://app.imuko.co/#/login"
                    target="_black"
                    rel="noopener"
                  >
                    Link del proyecto
                  </Link>
                </div>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider
          variant="inset"
          component="li"
        />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="logo_talent_fest.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Desarrollador en proyecto Talent-Talks"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Developer-Backend
                </Typography>
                {
                  ' — Colabore en la creacion y modificacion de migraciones para bases de datos, modelos y controladores, Generacion de servicios REST y Modificaciones esteticas de la pagina'
                }
                <div>
                  <Link
                    href="https://www.talent-fest.com/"
                    target="_black"
                    rel="noopener"
                  >
                    Link del proyecto
                  </Link>
                </div>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
export default Experience;
