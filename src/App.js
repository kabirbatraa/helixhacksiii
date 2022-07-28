import ResponsiveAppBar from "./ResponsiveAppBar";
import FaqCard from "./FaqCard";
import PersonCard from "./PersonCard";
import Header from "./Header";
import ContentCard from './ContentCard';

import Sophie from './peopleImages/SophieLin.JPEG';
import Aaditya from './peopleImages/AadityaRaj.jpg';
import Anya from './peopleImages/AnyaAgrawal.jpeg';
import Armaan from './peopleImages/ArmaanG.png';
import Kabir from './peopleImages/kabir.jpg';
import Karen from './peopleImages/KarenZhang.jpeg';
import Tarini from './peopleImages/TariniMaram.jpeg';
import Tanmayi from './peopleImages/TanmayiSattenapalli.jpg';

import { ReactComponent as DiscordIcon } from "./Discord-Logo-White.svg";

import {
  Box, Typography, Card, CardActionArea,
  ThemeProvider, createTheme, responsiveFontSizes,
  Grid,
  SvgIcon,
} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useRef } from "react";
import Sponsors from "./Sponsors";


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
    action: {
      disabledBackground: '#aaaaaa77',
      disabled: 'black'
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

const faqData = [
  {
    question: "What is a Hackathon?",
    answer: "A hackathon is a competition where teams of creators come together to build and present a tech-based prototype in front of judges. Throughout the hackathon, there will be many workshops and fun events, as well as access to a discord server to ask questions and talk to college student mentors. At the end, the creators of the best projects receive prizes! ",
  },
  {
    question: "What is our goal?",
    answer: "Our goal is to inspire young programmers to take on the challenges in the world of coding. We hope to give all our participants a memorable and delightful experience so not only are they encouraged to attend more hackathons, but excited to explore the coding world for themselves.",
  },
  {
    question: "How much does it cost to attend? (trick question)",
    answer: "Absolutely NOTHING! It's free!",
  },
  {
    question: "What age group can attend?",
    answer: "This hackathon is for rising 7th to 12th grade students.",
  },
  {
    question: "What will I need?",
    answer: "A computer, good wifi connection, comfortable and safe place to work, and a working microphone and speaker to communicate with your team and judges.",
  },
  {
    question: "How many people per team and what if I do not have a team yet?",
    answer: "You may have up to 4 people per team. If you wish to have a team of more than four, you may do so, but note that only 4 prizes will be given to each team. If you do not have a team, then don't worry, we will find you one at the start of the hackathon.",
  },
  {
    question: "Do I need any programming experience?",
    answer: "NO! We have well planned interactive workshops to educate you on a variety of topics, more than enough to get you started! ",
  },
  {
    question: "What are the prizes?",
    answer: "There are very exciting and rewarding prizes. In the past two years, prizes included Airpods, Go Pros, Polaroid Cameras, Portable Mini Printers, NVIDIA's Developer Kits and so much more. Prizes will be mailed to your respective addresses.",
  },
  {
    question: "How will judging work?",
    answer: "Due to our wide range of participants in terms of grade and age, we will most likely have a beginners judging category and an advanced judging category. There are many more additional categories with prizes too. There will also be a raffle!",
  },
  {
    question: "How will an online hackathon work?",
    answer: "It will be very similar to a normal hackathon, with a few exceptions of course. Almost everything will be done via discord and video calls. We still provide all the resources you may require - support, mentoring, guidance, workshops. We have also made this hackathon longer than typical due to the difficulties and challenges working over the internet may cause.",
  },
  {
    question: "What if I have another question?",
    answer: "Feel free to ask questions at any time! Send us an email at helixhacksiii at gmail.com",
  },
  
]


const teamData = [
  {
    name: "Anya Agrawal",
    url: Anya,
    position: "Co-Founder, Director",
  },
  {
    name: "Kabir Batra",
    url: Kabir,
    position: "Co-Founder, Web Designer and Workshops",
  },
  {
    name: "Sophie Lin",
    url: Sophie,
    position: "Co-Founder, Financial Director",
  },
  {
    name: "Tarini Maram",
    url: Tarini,
    position: "Co-Founder, Workshops Director",
  },
  {
    name: "Karen Zhang",
    url: Karen,
    position: "Financial/ Marketing Team",
  },
  {
    name: "Armaan Gomes",
    url: Armaan,
    position: "Financial/ Marketing Team",
  },
  {
    name: "Aaditya Raj",
    url: Aaditya,
    position: "Outreach/ Financial Team",
  },
  {
    name: "Tanmayi Sattenapalli",
    url: Tanmayi,
    position: "Outreach/ Financial Team",
  },
]


// const mentorData = [
//   {
//     name: "human1",
//     url: "https://helixycsp.org/boy.png",
//   },
//   {
//     name: "human 2",
//     url: "https://helixycsp.org/boy.png",
//   },
//   {
//     name: "human 3",
//     url: "https://helixycsp.org/boy.png",
//   },
//   {
//     name: "human 4",
//     url: "https://helixycsp.org/boy.png",
//   },
//   {
//     name: "human 5",
//     url: "https://helixycsp.org/boy.png",
//   },
// ]


// const judgeData = [
//   {
//     name: "human1",
//     url: "https://helixycsp.org/boy.png",
//   },
//   {
//     name: "human 2",
//     url: "https://helixycsp.org/boy.png",
//   },
//   {
//     name: "human 3",
//     url: "https://helixycsp.org/boy.png",
//   },
//   {
//     name: "human 4",
//     url: "https://helixycsp.org/boy.png",
//   },
//   {
//     name: "human 5",
//     url: "https://helixycsp.org/boy.png",
//   },
//   {
//     name: "human 6",
//     url: "https://helixycsp.org/boy.png",
//   },
// ]

function App() {

  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const teamRef = useRef(null);
  // const mentorsRef = useRef(null);
  const scheduleRef = useRef(null);
  const sponsorsRef = useRef(null);

  // const refs = [
  //   aboutRef, faqRef, teamRef, mentorsRef, scheduleRef
  // ];

  // function scrollToRef(ref) {
  //   setTimeout(() => {
  //     ref.current.scrollIntoView({ behavior: "smooth" })
  //   }, 0);
  // }

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
    // {
    //   name: 'Mentors and Judges',
    //   func: () => setTimeout(() => mentorsRef.current.scrollIntoView({ behavior: "smooth" }), 0),
    // },
    {
      name: 'Schedule',
      func: () => setTimeout(() => scheduleRef.current.scrollIntoView({ behavior: "smooth" }), 0),
    },
    {
      name: 'Sponsors',
      func: () => setTimeout(() => sponsorsRef.current.scrollIntoView({ behavior: "smooth" }), 0),
    }
  ]

  // console.log(theme.breakpoints.up('sm'))

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ background: theme.palette.backgroundGradient }}>


          <ResponsiveAppBar
            pagesAndScrollFuncs={pages}
            // refList={refs}
            // scrollFunction={scrollToRef}
          />

          <Header theme={theme} />


          {/* ABOUT */}
          <Box ref={aboutRef}/>
          <ContentCard color={theme.palette.logoColors.mediumPurple}>
            <Box display="flex" flexDirection="column" alignItems="center" >
              <Typography variant="h2" gutterBottom>About</Typography>
              <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>We love inspiring!</Typography>
              <Typography variant="body1" sx={{ marginY: 1, textAlign: "center" }}>
                Helix Hacks III is a hackathon designed to inspire and empower young coders 
                to pursue and develop their programming skills. Over the course of two days, teams 
                of up to 4 participants will work to develop a software project that helps to solve a 
                real-world problem.
              </Typography>
              <Typography variant="body1" sx={{ marginY: 1, textAlign: "center" }}>
                Participants will consist of Middle and High Schoolers (Rising 7th to 12th graders). 
              </Typography>
              <Typography variant="body1" sx={{ marginY: 1, textAlign: "center" }}>
                As opposed to an in-person hackathon, Helix Hacks III 
                will be online so that more participants have the same opportunity 
                to learn and explore. We guarantee the same amount of fun, experience, and opportunity 
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
          {/* <Box ref={mentorsRef}/>
          <ContentCard color={theme.palette.primary.main}>
            <Box display="flex" flexDirection="column" alignItems="center" 
            // pb={2} (add this back in once we have mentors and judges)
            >
              <Typography variant="h2" textAlign="center" gutterBottom>Mentors and Judges</Typography>
              <Typography variant="h5">Coming soon!</Typography>
            </Box>

          </ContentCard> */}



          {/* Schedule */}
          <Box ref={scheduleRef}/>
          <ContentCard color={theme.palette.detailColors.test}>
            <Box display="flex" flexDirection="column" alignItems="center" >
              <Typography variant="h2" gutterBottom>Schedule</Typography>
              

              <Card
                sx={{
                  background: '#ffffff22',
                }}
                onClick={() => window.open('https://calendar.google.com/calendar/u/5?cid=ZGJhaXAyOXBxMWFwdnFkdW5kbDdudmdsZm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ')}
              >
                <CardActionArea sx={{p: 2}}>
                  <Typography >
                    Check out our Google Calendar here!
                  </Typography>
                </CardActionArea>
              </Card>
              
              {/* <Button
                variant="contained"
                color="secondary"
                onClick={() => window.open('https://calendar.google.com/calendar/u/5?cid=ZGJhaXAyOXBxMWFwdnFkdW5kbDdudmdsZm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ')}
                // sx={{color: 'white'}}
                sx={{
                  m: 1, fontSize: "1em", color: 'white',
                  background: '#ffffff44'
                }}
              >
                Check out our Google Calendar here!
              </Button> */}
              {/* <Typography variant="h5">Coming soon!</Typography> */}
            </Box>
          </ContentCard>


          {/* Sponsors */}
          <Box ref={sponsorsRef}/>
          <ContentCard color={theme.palette.logoColors.mediumPurple}>
            <Sponsors/>
          </ContentCard>


          {/* Footer */}
          <Box sx={{ background: theme.palette.primary.main, p:4 }} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" textAlign="center">Have any questions, comments, or concerns? Drop a message! We will get back to you in 1-2 business days.</Typography>
            <Box display="flex" flexDirection="row" sx={{ p: 2 }} alignItems="center">
              <InstagramIcon fontSize="large" sx={{ color: "white", height: "100%", mx: 1, cursor: 'pointer' }}
                onClick={() => window.open("https://www.instagram.com/helixhacksiii/")}
              />
              {/* <a href="mailto:helixhacksiii@gmail.com"> */}
                <EmailOutlinedIcon fontSize="large" sx={{ color: "white", height: "100%", mx: 1, cursor: 'pointer' }}
                  onClick={() => window.open("mailto:helixhacksiii@gmail.com")}
                />
              {/* </a> */}
              <SvgIcon component={DiscordIcon} inheritViewBox 
                fontSize="large" sx={{ color: "white", height: "100%", mx: 1, cursor: 'pointer' }}
                onClick={() => window.open("https://discord.gg/UJCKSH9SvP")}
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
