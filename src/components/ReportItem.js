import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

function ReportItem({ value: { name, place, position, avatar } }) {
  return (
    <CardHeader
      avatar={
        <Avatar alt="avatar" src={avatar} sx={{ width: 100, height: 100 }}>
          R
        </Avatar>
      }
      title={
        <Typography variant="h6">
          {name}
        </Typography>
      }
      subheader={
        <Typography>
          {`${position}, ${place}`}
        </Typography>}
    />
  )
}

export default ReportItem
