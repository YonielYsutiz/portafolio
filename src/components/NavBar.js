import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import { AppBar, CssBaseline, IconButton, Toolbar } from '@mui/material';
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
  const homeRef = document.getElementById('inicio');
  const expRef = document.getElementById('experiencia');
  const eduRef = document.getElementById('educacion');
  const contactRef = document.getElementById('contactame');

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrollNav, setScrollNav] = React.useState(() => ({
    inicio: homeRef,
    experiencia: expRef,
    educacion: eduRef,
    contactame: contactRef,
  }));

  React.useLayoutEffect(() => {
    setScrollNav(current => ({
      ...current,
      inicio: homeRef,
      experiencia: expRef,
      educacion: eduRef,
      contactame: contactRef,
    }));
  }, [homeRef, expRef, eduRef, contactRef]);

  const scrollHandler = label => {
    scrollNav[label.toLowerCase()]?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {navLinks.map(({ label, Icon }, index) => (
          <ListItem
            key={index}
            disablePadding
            component="a"
            onClick={scrollHandler.bind(this, label)}
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
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default NavBar;
