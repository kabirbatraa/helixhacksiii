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

// import { ReactComponent as DiscordIcon } from "./Discord-Logo-White.svg";
import DiscordIcon from "./Discord-Logo-White.svg";

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


function App() {

  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const teamRef = useRef(null);
  // const mentorsRef = useRef(null);
  const scheduleRef = useRef(null);
  const sponsorsRef = useRef(null);


  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ background: theme.palette.backgroundGradient }}>

          {/* responsive app bar */}
          <ResponsiveAppBar pagesAndScrollFuncs={[]} />

          <Header theme={theme} />


        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
