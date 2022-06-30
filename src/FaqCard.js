
import {
  Card, CardActionArea, Collapse, Box,
  Typography,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export default function FaqCard(props) {

  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <Card
        sx={{
          background: '#ffffff22',
          cursor: 'pointer',
          my: 1,
        }}
        onClick={() => setDropDown((prevState) => !prevState)}
      >
        <CardActionArea>
          <Box display="flex" flexDirection="row" sx={{ p: 2 }}>
            <Typography color="white" sx={{fontWeight: 'bold'}}>{props.question}</Typography>
            <Box marginLeft="auto" >
              {/* {dropDown ? <ExpandLess /> : <ExpandMore />} */}
              <ExpandLess
                sx={{
                  transition: 'transform 0.5s ease',
                  // transform: dropDown ? "scaleY(-1)" : "scaleY(1)",
                  transform: dropDown ? "rotate(0deg)" : "rotate(180deg)",
                }}
              />
            </Box>
          </Box>
          <Collapse in={dropDown}>
            <Box sx={{ p: 2, px: 6, pt: 0 }}>
              <Typography>{props.answer}</Typography>
            </Box>
          </Collapse>
        </CardActionArea>
      </Card>

    </>
  )
}