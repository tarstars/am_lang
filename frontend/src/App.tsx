import LetterCard from './components/LetterCard'
import './index.css'

function App() {
  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold mb-4">Armenian Alphabet Demo</h1>
      <LetterCard symbol="Ա" nameEn="Ayb" nameRu="Айб" audioURL="/audio/ayb.mp3" />
    </div>
  )
}

export default App
