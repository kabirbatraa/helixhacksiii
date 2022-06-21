import ResponsiveAppBar from "./ResponsiveAppBar";

import {
  Box, Typography, 
  ThemeProvider, createTheme, responsiveFontSizes
} from '@mui/material';

import {purple, green} from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      // main: purple[500],
      // main: '#5f43b2',
      main: '#5f43b2',
    },
    secondary: {
      main: green[500],
    },
    // text: {
    //   primary: '#0000aa',
    // },
  },
  typography: {
  },
})
theme = createTheme(theme, {
  palette: {
    text: {
      primary: theme.palette.primary.main,
    }
  }
})
theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar/>
        <Box textAlign='center'>
          <Typography variant='h1' color='textPrimary' >HELIX HACKS III</Typography>
          <Typography variant='h3' >ONLINE HACKATHON</Typography>
          <Typography variant='h6'>sign up to be ...</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
