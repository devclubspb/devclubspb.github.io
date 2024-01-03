import { getSpeakerById } from '../utils/speakers'

import ReportItem from './ReportItem'
import PlanItem from './PlanItem'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import LocalCafeIcon from '@mui/icons-material/LocalCafe'
import LocalDiningIcon from '@mui/icons-material/LocalDining'

function ProgramItem({ value: { title, description, startAt, speakerId, logoId } }) {
  let Header
  if (speakerId) {
    const speaker = getSpeakerById(speakerId)
    Header = (
      <ReportItem value={speaker} />
    )
  } else {
    let Icon
    switch (logoId) {
      case 'lunch':
        Icon = <LocalDiningIcon/>
        break
      case 'coffee':
        Icon = <LocalCafeIcon/>
        break
      default:
        Icon = <></>
    }
    Header = (
      <PlanItem>
        {Icon}
      </PlanItem>
    )
  }
  return (
    <Card>
      {Header}
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProgramItem
