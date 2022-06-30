import {
  Card,
} from '@mui/material'

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

