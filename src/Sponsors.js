import {
  Box, Typography, Card, CardActionArea, CardMedia,
  ImageList, ImageListItem,
  Grid
} from '@mui/material'

import WolframLogo from './sponsorsImages/wolframTransparent.png';
import StreamYard from './sponsorsImages/StreamYardLogo.png';
// import Magoosh from './sponsorsImages/magooshLogoNoBackground.png';
import Magoosh from './sponsorsImages/magoosh-logo.svg';
import Taskade from './sponsorsImages/taskade.png';
import EchoAR from './sponsorsImages/echoar.png';
import Replit from './sponsorsImages/replit.png';
import Balsamiq from './sponsorsImages/balsamiq.png';

export default function Sponsors() {

  const imageData = [
    {img: WolframLogo, url: "https://www.wolfram.com/"},
    {img: StreamYard, url: "https://streamyard.com/"},
    {img: Magoosh, url: "https://magoosh.com/"},
    {img: Taskade, url: "https://www.taskade.com/"},
    {img: EchoAR, url: "https://www.echo3d.co/"},
    {img: Replit, url: "https://replit.com/"},
    {img: Balsamiq, url: "https://balsamiq.com/"},
  ]

  const numCols = 2;

  return <>
    <Box display="flex" flexDirection="column" alignItems="center" >
      <Typography variant="h2" gutterBottom>Sponsors</Typography>
      {/* <Grid container spacing={2}>
        {imageData.map((image) => (
          <Grid item xs={12} md={6}>
            <Card>
              <CardActionArea sx={{ p: 2 }} onClick={() => window.open(image.url)}>
                <CardMedia
                  component="img"
                  src={image.img}
                // by not specifying height, height becomes responsive (mobile vs desktop)
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      <ImageList variant="masonry" cols={numCols} gap={20}>
        {imageData.map((image) => (
          <ImageListItem key={image.img} sx={{width: '100%'}}>
            <Card 
              sx={{
                background: '#ffffff22',
              }}
              onClick={() => window.open(image.url)}
            >
              <CardActionArea sx={{ p: 2 }} >
                <CardMedia
                  component="img"
                  src={image.img}
                />
              </CardActionArea>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  </>
}