import {
  Card,
} from '@mui/material'
import React from 'react'

export default function ContentCard(props) {
  return (
    <Card sx={{
      background: props.color,
      mx: { xs: 2, md: '20%' },
      p: 4,
      mb: 10,
    }}>
      {props.children}
    </Card>
  )
}

// convert to class based component so refs work... they still dont work :/
// export default class ContentCard extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state?
//   }
//   render() {

//     return (
//       <Card sx={{
//         background: this.props.color,
//         mx: { xs: 2, md: '20%' },
//         p: 4,
//         mb: 10,
//       }}>
//         {this.props.children}
//       </Card>
//     )

//   }
  
// }

