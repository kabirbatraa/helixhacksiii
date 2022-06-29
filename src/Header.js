
import {
  Box, Typography, Button, 
} from '@mui/material';


export default function Header(props) {
  console.log(props.gradient);
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" sx={{height: "80vh",}}>
      <Box textAlign='center'>
        <Typography variant='h1' sx={{
          background: props.gradient,
          backgroundClip: "text",
          color: "transparent",
        }}>HelixHacksIII</Typography>
        {/* <Typography variant='h1' >HelixHacksIII</Typography> */}
        <Typography variant='h5'>July 24-31, 2022</Typography>
        <Typography variant='h6'>Register to be...</Typography>
      </Box>
      <Box display="flex" justifyContent="center" >
        <Button variant="contained" sx={{m: 1, fontSize: "1em"}} color="secondary">Participant</Button>
        <Button variant="contained" sx={{m: 1, fontSize: "1em"}} color="secondary">Mentor</Button>
        <Button variant="contained" sx={{m: 1, fontSize: "1em"}} color="secondary">Judge</Button>
      </Box>
    </Box>
  )
}