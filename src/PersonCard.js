
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
        sx={{
          objectPosition: "center center"
        }}
      />
      {/* fixed height might look best (weird to have different offset heights) */}
      <CardContent sx={{height: "85px"}}> 
        <Typography gutterBottom variant="h6" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {props.position}
        </Typography>
      </CardContent>
    </Card>
  </>
}