import ResponsiveAppBar from "./ResponsiveAppBar";
import FaqCard from "./FaqCard";
import PersonCard from "./PersonCard";

import {
  Box, Typography, Button, Card, Collapse,
  ThemeProvider, createTheme, responsiveFontSizes,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Grid,
} from '@mui/material';

import {green} from '@mui/material/colors';

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
    text: {
      // primary: theme.palette.primary.main,
    },
    // background: '#040C18',
    background: '#040C18',
    gradientBar: 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
    gradientText: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
    thirdGradient: 'radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
    mainGradient: "linear-gradient(to right, tomato, cyan)",
    cardColor: "white",
  },
  // typography: {

  // },
})
theme = createTheme(theme, {
  palette: {
    text: {
      primary: theme.palette.primary.main,
    }
  }
})
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
        <Box sx={{background: theme.palette.gradientBar}}>


          <ResponsiveAppBar/>


          <Box textAlign='center'>
            <Typography variant='h1' sx={{color: 'white'}} >HELIX HACKS III</Typography>
            <Typography variant='h3' >ONLINE HACKATHON</Typography>
            <Typography variant='h6'>sign up to be ...</Typography>
          </Box>

          
          <Box display="flex" justifyContent="center" >
            <Button variant="outlined" sx={{margin: "15px"}}>Participant</Button>
            <Button variant="outlined" sx={{margin: "15px"}}>Mentor</Button>
            <Button variant="outlined" sx={{margin: "15px"}}>Judge</Button>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" >
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
          </Box>



          <Box display="flex" flexDirection="column" alignItems="center" >
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
          </Box>


          <Box display="flex" flexDirection="column" alignItems="center" >
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
            
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" >
            <Card sx={{backgroundColor: theme.palette.cardColor, width: "fit-content", paddingY: "15px", paddingX: "25px"}}>
              <Typography variant="h2">FAQ</Typography>
            </Card>
            <Typography variant="subtitle1" sx={{marginTop: "15px"}}>
              Feel free to email us if you still have any questions!
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column"  sx={{marginX: "20%"}}>
            <FaqCard
              question="this is the question"
              answer="this is the text that is the answer to the question"
            />
          </Box>

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

          Footer
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
