import conf from './conferences/2023-12.json'
import Conference from './Conference'

function App() {
  return (
    <div>
      <header>
        <h1>Клуб разработчиков</h1>
      </header>
      <Conference value={conf} />
    </div>
  )
}

export default App
