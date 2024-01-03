import conf from './conferences/2023-12.json'

import Conference from './components/Conference'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <header>
          <h1>Клуб разработчиков</h1>
        </header>
        <Conference value={conf} />
        <footer>Copyright (c) 2023 Developers club</footer>
      </Box>
    </Container>
  )
}

export default App
