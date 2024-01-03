import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'

function PlanItem({ children }) {
  return (
    <CardHeader
      avatar={
        <Avatar sx={{ width: 100, height: 100 }}>
          {children}
        </Avatar>
      }
    />
  )
}

export default PlanItem
