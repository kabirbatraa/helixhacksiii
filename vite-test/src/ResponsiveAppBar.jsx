import React, { useState } from 'react';

import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu,
  Container, Button, MenuItem,
  SwipeableDrawer, List, ListItem, ListItemButton, ListItemText,
} from '@mui/material'

// import MenuIcon from '@mui/icons-material/Menu';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import Icon from '@mui/material/Icon';
import logo from './HelixLogo.svg';
import IconTest from './IconTest';

export default function ResponsiveAppBar({ pagesAndScrollFuncs }) {

  const [navMenuOpen, setNavMenuOpen] = useState(false)

  const handleOpenNavMenu = () => {
    setNavMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setNavMenuOpen(false);
  };



  return <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Icon fontSize="large"
            sx={{
              textAlign: "center",
              cursor: "pointer",
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                // display: { xs: 'none', md: 'flex' },
                mr: 1,
              }}
              alt="logo"
              src={logo}
            />
          </Icon>
          <Button
            variant="text"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontSize: '24px',
              fontWeight: "bold",
              color: 'white',
            }}
          >
            HelixHacksIII
          </Button>

          {/* <AccessAlarm /> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}

              {/* <IconTest/> */}
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  </>
}