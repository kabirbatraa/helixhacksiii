
import {
  Box, Typography, Button, 
} from '@mui/material';


export default function Header(props) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" 
      sx={{
        height: "60vh", 
        // background: "#00000011"
      }}
    >
      <Box textAlign='center'>
        <Typography variant='h1' sx={{
          background: props.theme.palette.gradientText,
          backgroundClip: "text",
          color: "transparent",
        }}>HelixHacksIII</Typography>
        {/* <Typography variant='h1' >HelixHacksIII</Typography> */}
        <Typography variant='h5'>July 24 - Aug 1, 2022</Typography>
        <Typography variant='h6' gutterBottom>Register to be...</Typography>
      </Box>
      <Box display="flex" justifyContent="center" >
        <Button variant="contained" sx={{m: 1, fontSize: "1em"}} color="secondary" onClick={() => window.open("https://forms.gle/uMecarmWPtMeLJpF6")}>
          Participant
        </Button>
        <Button variant="contained" sx={{m: 1, fontSize: "1em"}} color="secondary" onClick={() => window.open("https://forms.gle/idLXU9ikzgWv581C7")}>
          Mentor
        </Button>
        <Button variant="contained" sx={{m: 1, fontSize: "1em"}} color="secondary" onClick={() => window.open("https://forms.gle/BxH4RGrNnPxZF4dh6")}> 
          Judge
        </Button>
      </Box>
    </Box>
  )
}