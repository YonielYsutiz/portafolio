import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SchoolIcon from '@mui/icons-material/School';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

const drawerWidth = 240;
const navLinks = [
  { label: 'Inicio', Icon: HomeIcon },
  { label: 'Experiencia', Icon: HomeRepairServiceIcon },
  { label: 'Educacion', Icon: SchoolIcon },
  { label: 'Contactame', Icon: ContactMailIcon },
];

function NavBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {navLinks.map(({ label, Icon }, index) => (
            <ListItem
              key={index}
              disablePadding
              component="a"
              href={`#${label.toLowerCase()}`}
              sx={{
                color: '#fff',
              }}
            >
              <ListItemButton>
                <ListItemIcon>{<Icon />}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
export default NavBar;
