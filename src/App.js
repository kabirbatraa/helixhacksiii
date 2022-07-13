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
  Divider,
} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useRef } from "react";

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
      test: "#7a4a6d",
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

const faqData = [
  {
    question: "What is our goal?",
    answer: "Our goal is to inspire young programmers to take on the challenges in the world of coding. We hope to give all our participants a memorable and delightful experience so not only are they encouraged to attend more hackathons, but excited to explore the coding world for themselves.",
  },
  {
    question: "How much does it cost?",
    answer: "Absolutely NOTHING! It's free!",
  },
  {
    question: "Who should attend?",
    answer: "This hackathon is for everyone, grades 8 - 12.",
  },
  {
    question: "What will I need?",
    answer: "Fully charged laptop, good wifi connection, comfortable and safe place to work, working microphone and speaker on computer.",
  },
  {
    question: "How many people per team and what if I do not have a team yet?",
    answer: "Up to 4 people per team. If you wish to have a team of more than four, you may do so, but note that only 4 prizes will be given to each team. If you do not have a team, then don't worry, we will find you one. We encourage you to collaborate with your team from your own homes, but if you choose to meet up, we highly advise utilizing masks and remaining distant.",
  },
  {
    question: "Do I need any programming experience?",
    answer: "NO! We have well planned interactive workshops to educate you on almost all the topics you may need. If you have a special request for a workshop, please email us 2-3 weeks prior to the hackathon.",
  },
  {
    question: "What are the prizes?",
    answer: "They are very exciting and rewarding prizes. In last year's hackathon, Helix Hacks, we gave away prizes such as Airpods, Go Pros, Polaroid Cameras, Portable Mini Printers, NVIDIA's Developer Kits and so much more. Due to quarantine however, there are more limitations, but we will try our best to make this year's prizes just as appealing as last year. We are planning to mail them to your respective addresses.",
  },
  {
    question: "How will judging work?",
    answer: "Due to our wide range of participants in terms of grade and age, we are most likely going to have a beginners judging category and an advanced judging category. There many more additional categories with prizes. We will also being doing a raffle.",
  },
  {
    question: "How will an online hackathon work?",
    answer: "It will be very similar to a normal hackathon, with a few exceptions of course. Almost everything will be done via the internet. We still provide all the resources you may require - support, mentoring, guidance, workshops. We have also made this hackathon longer than typical due to the difficulties and challenges working over the internet may cause.",
  },
]


const teamData = [
  {
    name: "Kabir Batra",
    url: "https://helixycsp.org/boy.png",
    position: "Co-Founder, Website and Workshops",
  },
  {
    name: "human 2",
    url: "https://helixycsp.org/boy.png",
    position: "Co-Founder",
  },
  {
    name: "human 3",
    url: "https://helixycsp.org/boy.png",
    position: "Co-Founder",
  },
  {
    name: "human 4",
    url: "https://helixycsp.org/boy.png",
    position: "Co-Founder",
  },
  {
    name: "human 5",
    url: "https://helixycsp.org/boy.png",
    position: "Co-Founder",
  },
]


const mentorData = [
  {
    name: "human1",
    url: "https://helixycsp.org/boy.png",
  },
  {
    name: "human 2",
    url: "https://helixycsp.org/boy.png",
  },
  {
    name: "human 3",
    url: "https://helixycsp.org/boy.png",
  },
  {
    name: "human 4",
    url: "https://helixycsp.org/boy.png",
  },
  {
    name: "human 5",
    url: "https://helixycsp.org/boy.png",
  },
]


const judgeData = [
  {
    name: "human1",
    url: "https://helixycsp.org/boy.png",
  },
  {
    name: "human 2",
    url: "https://helixycsp.org/boy.png",
  },
  {
    name: "human 3",
    url: "https://helixycsp.org/boy.png",
  },
  {
    name: "human 4",
    url: "https://helixycsp.org/boy.png",
  },
  {
    name: "human 5",
    url: "https://helixycsp.org/boy.png",
  },
  {
    name: "human 6",
    url: "https://helixycsp.org/boy.png",
  },
]

function App() {

  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const teamRef = useRef(null);
  const mentorsRef = useRef(null);
  const scheduleRef = useRef(null);

  const pages = [
    {
      name: 'About',
      func: () => setTimeout(() => aboutRef.current.scrollIntoView({ behavior: "smooth" }), 0),
    },
    {
      name: 'FAQ',
      func: () => setTimeout(() => faqRef.current.scrollIntoView({ behavior: "smooth" }), 0),
    },
    {
      name: 'Team',
      func: () => setTimeout(() => teamRef.current.scrollIntoView({ behavior: "smooth" }), 0),
    },
    {
      name: 'Mentors and Judges',
      func: () => setTimeout(() => mentorsRef.current.scrollIntoView({ behavior: "smooth" }), 0),
    },
    {
      name: 'Schedule',
      func: () => setTimeout(() => scheduleRef.current.scrollIntoView({ behavior: "smooth" }), 0),
    }
  ]

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ background: theme.palette.backgroundGradient }}>


          <ResponsiveAppBar
            pagesAndScrollFuncs={pages}
          />

          <Header theme={theme} />

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
          <Box ref={aboutRef}/>
          <ContentCard color={theme.palette.logoColors.mediumPurple}>
            <Box display="flex" flexDirection="column" alignItems="center" >
              <Typography variant="h2" gutterBottom>About</Typography>
              <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>We love inspiring!</Typography>
              <Typography variant="body1" sx={{ marginY: 1, textAlign: "center" }}>
                Helix Hacks II is a hackathon designed to inspire and empower
                young coders to pursue and develop their programming skills. Over the course of 30 hours,
                teams up to 4 participants will work to develop a software project that helps to solve a
                real-world problem.
              </Typography>
              <Typography variant="body1" sx={{ marginY: 1, textAlign: "center" }}>
                Due to quarantine, we have converted to an online hackathon so that our
                participants still have the same opportunity to learn and explore.
                We guarantee the same amount of fun, experience, and opportunity
                despite the hackathon being virtual.
              </Typography>
            </Box>
          </ContentCard>

          {/* FAQ */}
          <Box ref={faqRef}/>
          <ContentCard color={theme.palette.detailColors.pearlyPurple}>
            <Box display="flex" flexDirection="column" alignItems="center" >
              <Typography variant="h2" gutterBottom>FAQ</Typography>
              <Typography variant="subtitle1">
                Feel free to email us if you still have any questions!
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column">
              {faqData.map(faqcard =>
                <FaqCard
                  key={faqcard.question}
                  question={faqcard.question}
                  answer={faqcard.answer}
                />
              )}
            </Box>
          </ContentCard>

          {/* TEAM */}
          <Box ref={teamRef}/>
          <ContentCard color={theme.palette.logoColors.darkPurple}>
            <Box display="flex" flexDirection="column" alignItems="center" >
              <Typography variant="h2" gutterBottom>Team</Typography>
            </Box>

            <Box display="flex" flexDirection="column" >
              <Grid container justifyContent="center" spacing={{ xs: 1, md: 3 }} columns={{ xs: 6, sm: 9, md: 12 }}>
                {teamData.map(person =>
                  <Grid item xs={3} key={person.name}>
                    <PersonCard
                      imageUrl={person.url}
                      name={person.name}
                      position={person.position}
                    />
                  </Grid>
                )}
              </Grid>
            </Box>
          </ContentCard>

          {/* Mentors and Judges */}
          <Box ref={mentorsRef}/>
          <ContentCard color={theme.palette.primary.main}>
            <Box display="flex" flexDirection="column" alignItems="center" 
            // pb={2} (add this back in once we have mentors and judges)
            >
              <Typography variant="h2" textAlign="center" gutterBottom>Mentors and Judges</Typography>
              <Typography variant="h5">Coming soon!</Typography>
            </Box>

          </ContentCard>



          {/* Schedule */}
          <Box ref={scheduleRef}/>
          <ContentCard color={theme.palette.detailColors.test}>
            <Box display="flex" flexDirection="column" alignItems="center" >
              <Typography variant="h2" gutterBottom>Schedule</Typography>
              <Typography variant="h5">Coming soon!</Typography>
            </Box>
          </ContentCard>


          {/* Sponsors */}




          {/* Footer */}
          <Box sx={{ background: theme.palette.primary.main, p:4 }} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" textAlign="center">Have any questions, comments, or concerns? Drop a message! We will get back to you in 1-2 buisness days.</Typography>
            <Box display="flex" flexDirection="row" sx={{ p: 2 }}>
              <InstagramIcon fontSize="large" sx={{ color: "white", height: "100%", mx: 1, cursor: 'pointer' }}
                onClick={() => window.open("https://www.instagram.com/helixhacksiii/")}
              />
              <EmailOutlinedIcon fontSize="large" sx={{ color: "white", height: "100%", mx: 1, cursor: 'pointer' }}
                onClick={() => window.open("#")}
              />
            </Box>
            <Typography variant="h6">HelixHacksIII</Typography>
          </Box>

          {/* Email: HelixYCSP@gmail.com */}

        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
