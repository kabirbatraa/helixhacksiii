import React from 'react';

import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu,
  Container, Button, MenuItem, 
  
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

import Icon from '@mui/material/Icon';
import logo from './HelixLogo.svg';

const pages = ['About', 'Themes', 'Schedule', 'FAQ', 'Team', 'Sponsors', 'Sign-Up', 'Contact']

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
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
            variant="outlined"
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



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>

            
          </Box>


          {/* <Icon sx={{fontSize: 30, textAlign: "center", cursor: "pointer", display: { xs: 'flex', md: 'none' },}} >
            <Box
              component="img"
              sx={{
                height: "100%",
                // display: { xs: 'flex', md: 'none' }, 
              }}
              alt="logo"
              src={logo}
            />
          </Icon> */}
          <Button
            sx={{
              ml: -1,
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              fontSize: '20px',
              fontWeight: "bold",
              color: 'white',
            }}
          >
            <Icon sx={{fontSize: 30, textAlign: "center", cursor: "pointer", display: { xs: 'flex', md: 'none' },}} >
              <Box
                component="img"
                sx={{
                  height: "100%",
                  // display: { xs: 'flex', md: 'none' }, 
                }}
                alt="logo"
                src={logo}
              />
            </Icon>
            HelixHacksIII
          </Button>

          <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> </Box>




          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* box to take up space and push page buttons to the right */}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;