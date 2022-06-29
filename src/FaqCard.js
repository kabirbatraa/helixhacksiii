
import {
  Card, Collapse,
} from '@mui/material';
import { useState } from 'react';

export default function FaqCard(props) {

  const [dropDown, setDropDown] = useState(false);

  return <>
    <Card onClick={() => setDropDown((prevState) => !prevState)}>
      {props.question}
    </Card>
    <Collapse in={dropDown}>
      <Card>
        {props.answer}
      </Card>
    </Collapse>
  </>
}