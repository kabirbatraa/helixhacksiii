
import {
  Box, Typography, Button, Card, CardMedia, CardContent,
  ThemeProvider, createTheme, responsiveFontSizes,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@mui/material';

export default function PersonCard() {
  return <>
    <Card>
      <CardMedia
        component="img"
        height="200"
        image="https://helixycsp.org/boy.png"
        alt="person's name here"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  </>
}