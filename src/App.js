import ResponsiveAppBar from "./ResponsiveAppBar";
import FaqCard from "./FaqCard";
import PersonCard from "./PersonCard";
import Header from "./Header";
import ContentCard from './ContentCard';

import {
  Box, Typography, Card,
  ThemeProvider, createTheme, responsiveFontSizes,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Grid,
} from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#5f43b2',
    },
    secondary: {
      main: "#b2beff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b2beff",
    },

    logoColors: {
      darkPurple: "#59496e",
      lightPurple: "#c1a6d1",
      mediumPurple: "#9770b1"
    },

    detailColors: {
      pearlyPurple: '#ae6a9b',
      tan: '#ceb79a',
    },

    backgroundGradient: 'linear-gradient(180deg, rgba(58,49,83,1) 0%, rgba(4,12,24,1) 100%);',

    // background: '#040C18',
    background: '#3a3153',
    gradientBar: 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
    gradientText: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
    thirdGradient: 'radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
    mainGradient: "linear-gradient(to right, tomato, cyan)",
    cardColor: "black",
  },
  typography: {
    fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
      color: "white",
    },
    button: {
      textTransform: 'none',
      fontWeight: "medium",
      minWidth: "0px",
      minPadding: "0px",
    },
  },
  
})
// theme = createTheme(theme, {
//   palette: {
//     text: {
//       primary: theme.palette.primary.main,
//     }
//   }
// })
theme = responsiveFontSizes(theme);




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];




function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{background: theme.palette.backgroundGradient}}>


          <ResponsiveAppBar/>

          <Header theme={theme}/>

          {/* <Box display="flex" flexDirection="column" alignItems="center" >
            <Card sx={{backgroundColor: theme.palette.cardColor, width: "fit-content", paddingY: "15px", paddingX: "25px"}}>
              <Typography variant="h2">About</Typography>
            </Card>
            <Typography variant="subtitle1" sx={{marginY: "15px"}}>We love inspiring!</Typography>
            <Typography variant="body1" sx={{width: "60%", marginY: "15px", textAlign: "center"}}>
              Helix Hacks II is a hackathon designed to inspire and empower 
              young coders to pursue and develop their programming skills. Over the course of 30 hours, 
              teams up to 4 participants will work to develop a software project that helps to solve a 
              real-world problem.
            </Typography>
            <Typography variant="body1" sx={{width: "60%", marginY: "15px", textAlign: "center"}}>
              Due to quarantine, we have converted to an online hackathon so that our 
              participants still have the same opportunity to learn and explore. 
              We guarantee the same amount of fun, experience, and opportunity 
              despite the hackathon being virtual.
            </Typography>
          </Box> */}



          {/* <Box display="flex" flexDirection="column" alignItems="center" >
            <Card sx={{backgroundColor: theme.palette.cardColor, width: "fit-content", paddingY: "15px", paddingX: "25px"}}>
              <Typography variant="h2">Themes</Typography>
            </Card>
            <Typography variant="subtitle1" sx={{marginTop: "15px"}}>
              Here are some inspirational categories to focus your project on.
            </Typography>
            <Typography variant="body1" sx={{width: "60%", marginBottom: "15px", textAlign: "center"}}>
              These themes are not required and we will not be 
              judging based on them, they are here soley to inspire 
              you and provide you with ideas.
            </Typography>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="center">
            <Card>some text</Card>
            <Card>some text</Card>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <Card>some text</Card>
            <Card>some text</Card>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <Card>some text</Card>
            <Card>some text</Card>
          </Box> */}


          {/* <Box display="flex" flexDirection="column" alignItems="center" >
            <Card sx={{backgroundColor: theme.palette.cardColor, width: "fit-content", paddingY: "15px", paddingX: "25px"}}>
              <Typography variant="h2">Schedule</Typography>
            </Card>
            <Typography variant="subtitle1" sx={{marginTop: "15px"}}>
              All time based on Pacific Time
            </Typography>


            <TableContainer component={Paper} sx={{width: "60%"}}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
          </Box> */}
          
          {/* ABOUT */}
          <ContentCard color={theme.palette.primary.main}>
            <Box display="flex" flexDirection="column" alignItems="center" pb={1}>
              <Typography variant="h2">About</Typography>
              <Typography variant="subtitle1" sx={{mt: 1, fontStyle: 'italic'}}>We love inspiring!</Typography>
              <Typography variant="body1" sx={{marginY: 1, textAlign: "center"}}>
                Helix Hacks II is a hackathon designed to inspire and empower 
                young coders to pursue and develop their programming skills. Over the course of 30 hours, 
                teams up to 4 participants will work to develop a software project that helps to solve a 
                real-world problem.
              </Typography>
              <Typography variant="body1" sx={{marginY: 1, textAlign: "center"}}>
                Due to quarantine, we have converted to an online hackathon so that our 
                participants still have the same opportunity to learn and explore. 
                We guarantee the same amount of fun, experience, and opportunity 
                despite the hackathon being virtual.
              </Typography>
            </Box>

          </ContentCard>

          {/* FAQ */}
          <ContentCard color={theme.palette.detailColors.pearlyPurple}>
            <Box display="flex" flexDirection="column" alignItems="center" pb={1}>
              <Typography variant="h2">FAQ</Typography>
              <Typography variant="subtitle1" sx={{mt: 1}}>
                Feel free to email us if you still have any questions!
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column">
              <FaqCard
                question="this is the question"
                answer="this is the text that is the answer to the question"
              />
              <FaqCard
                question="this is the question"
                answer="this is the text that is the answer to the question"
              />
              <FaqCard
                question="this is the question"
                answer="this is the text that is the answer to the question"
              />
            </Box>
          </ContentCard>

          

          <Box display="flex" flexDirection="column" alignItems="center" >
            <Card sx={{backgroundColor: theme.palette.cardColor, width: "fit-content", paddingY: "15px", paddingX: "25px"}}>
              <Typography variant="h2">Team</Typography>
            </Card>
          </Box>

          <Box display="flex" flexDirection="column" sx={{marginX: "20%"}}>
            <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4}>
                <PersonCard/>
              </Grid>
              <Grid item xs={4}>
                <PersonCard/>
              </Grid>
              <Grid item xs={4}>
                <PersonCard/>
              </Grid>
              <Grid item xs={4}>
                <PersonCard/>
              </Grid>

            </Grid>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" >
            <Typography variant="h3">Mentors and Judges</Typography>
          </Box>
          <Box display="flex" flexDirection="column" sx={{marginX: "20%"}}>
            <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4}>
                <PersonCard/>
              </Grid>
              <Grid item xs={4}>
                <PersonCard/>
              </Grid>
              <Grid item xs={4}>
                <PersonCard/>
              </Grid>
              <Grid item xs={4}>
                <PersonCard/>
              </Grid>

            </Grid>
          </Box>



          <Box display="flex" flexDirection="column" alignItems="center" >
            <Card sx={{backgroundColor: theme.palette.cardColor, width: "fit-content", paddingY: "15px", paddingX: "25px"}}>
              <Typography variant="h2">Sponsors</Typography>
            </Card>
          </Box>




          <Box display="flex" flexDirection="column" alignItems="center" >
            <Card sx={{backgroundColor: theme.palette.cardColor, width: "fit-content", paddingY: "15px", paddingX: "25px"}}>
              <Typography variant="h2">Sign Up</Typography>
            </Card>
            <Typography variant="subtitle1" sx={{marginTop: "15px"}}>
              Sign up fast so the spots don't fill up!
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" >
            <Card sx={{backgroundColor: theme.palette.cardColor, width: "fit-content", paddingY: "15px", paddingX: "25px"}}>
              <Typography variant="h2">Contact</Typography>
            </Card>
            <Typography variant="subtitle1" sx={{marginTop: "15px"}}>
              Have any questions, comments, or concerns? Drop a message! We will get back to you in 1-2 buisness days.
            </Typography>
            <Typography variant="subtitle1" sx={{marginTop: "15px"}}>
              Email: HelixYCSP@gmail.com
            </Typography>
            
            
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" >
            <Typography variant="subtitle1" sx={{marginTop: "15px"}}>
              Footer
            </Typography>
          </Box>


        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
