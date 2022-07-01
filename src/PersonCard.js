
import {
  Typography, Card, CardMedia, CardContent,
} from '@mui/material';

export default function PersonCard(props) {

  // props.
  
  // imageUrl
  // name
  // position

  // url
  // name
  // mentor/judge
  
  return <>
    <Card sx={{background: "#ffffff22"}}>
      <CardMedia
        component="img"
        height="150"
        image={props.imageUrl}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.position}
        </Typography>
      </CardContent>
    </Card>
  </>
}