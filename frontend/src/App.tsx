import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import AlphabetPage from './pages/AlphabetPage'
import WordsPage from './pages/WordsPage'
import PhrasesPage from './pages/PhrasesPage'
import { LanguageProvider } from './useLanguage'
import SideNav from './components/SideNav'
import './index.css'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex min-h-screen">
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-red-500 text-white p-4">TEST</div>
        </div>
          <SideNav />
          <div className="flex-1 ml-64">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/alphabet" element={<AlphabetPage />} />
              <Route path="/words" element={<WordsPage />} />
              <Route path="/phrases" element={<PhrasesPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
