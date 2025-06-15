import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import AlphabetPage from './pages/AlphabetPage'
import WordsPage from './pages/WordsPage'
import PhrasesPage from './pages/PhrasesPage'
import { LanguageProvider } from './useLanguage'
import NavBar from './components/NavBar'
import './index.css'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/alphabet" element={<AlphabetPage />} />
          <Route path="/words" element={<WordsPage />} />
          <Route path="/phrases" element={<PhrasesPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
