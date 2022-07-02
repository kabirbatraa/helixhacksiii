import React from 'react';

import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu,
  Container, Button, MenuItem, 
  SwipeableDrawer, List, ListItem, ListItemButton, ListItemText,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

import Icon from '@mui/material/Icon';
import logo from './HelixLogo.svg';


const ResponsiveAppBar = (props) => {

  const pages = props.pagesAndScrollFuncs;

  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [navMenuOpen, setNavMenuOpen] = React.useState(false);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleOpenNavMenu = () => {
    setNavMenuOpen(true);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseNavMenu = () => {
    setNavMenuOpen(false);
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



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <SwipeableDrawer
              anchor={'left'}
              open={navMenuOpen}
              onClose={handleCloseNavMenu}
              onOpen={handleOpenNavMenu}
            >
              <Box display="flex" flexDirection="column" justifyContent="top" alignItems="start" sx={{height: "100%", background: "#000000aa"}}> 
                <List>
                  {pages.map(page => (
                    <ListItem key={page.name} disablePadding>
                      <ListItemButton onClick={() => {handleCloseNavMenu(); page.func();}}>
                        <ListItemText primary={page.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                {/* {pages.map((page) => (
                  <Button
                    key={page.name}
                    variant="contained"
                    onClick={() => {handleCloseNavMenu(); page.func();}}
                    sx={{ m: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                ))} */}
              </Box>
            </SwipeableDrawer>




            {/* <Menu
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
                <MenuItem key={page.name} 
                  onClick={() => {handleCloseNavMenu(); page.func();}}
                >

                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu> */}

            
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
                key={page.name}
                onClick={() => {handleCloseNavMenu(); page.func();}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;