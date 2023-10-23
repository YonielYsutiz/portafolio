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
import { baseContainerStyles } from '../../vendor';

export default function Experience() {
  return (
    <Box
      id="experiencia"
      sx={{ ...baseContainerStyles, marginTop: { xs: '15%', md: 0 } }}
    >
      <Box
        width={{ xs: '100%', lg: '60%' }}
        display="flex"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        alignItems="center"
        flexWrap="wrap"
      >
        <h2 className="heading">Mi Experiencia</h2>
        <List
          sx={{
            width: { xs: '100%', lg: '70%' },
            bgcolor: 'background.paper',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
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
                    ' - Colaboré para la generación de cuentas de cobro, creación de métodos y funciones, creación y modificación de migraciones para bases de datos, mantenimientos y construcción de servicios REST y modificaciones estéticas de la página.'
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
                    ' — Colaboré en la creación y modificación de migraciones para bases de datos, modelos y controladores, generación de servicios REST y modificaciones estéticas de la página.'
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
    </Box>
  );
}
