import ProgramItem from './ProgramItem'

import Typography from '@mui/material/Typography'

function Program({ values: programList }) {

  return (
    <>
      <Typography>Программа</Typography>
      {programList.map((item, index) => <ProgramItem key={index} value={item} />)}
    </>
  )
}

export default Program
