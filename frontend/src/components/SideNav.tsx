import { Link } from 'react-router-dom'
import { useLanguage } from '../useLanguage'

export default function SideNav() {
  const { lang, setLang, t } = useLanguage()
  return (
    <nav className="w-48 bg-gray-100 min-h-screen p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-semibold">
          {t('welcome_title')}
        </Link>
        <select
          className="border px-2 py-1 text-sm"
          value={lang}
          onChange={(e) => setLang(e.target.value as 'en' | 'ru')}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      </div>
      <Link
        to="/alphabet"
        className="block bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-2 text-center"
      >
        {t('nav_alphabet')}
      </Link>
      <Link
        to="/words"
        className="block bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-2 text-center"
      >
        {t('nav_words')}
      </Link>
      <Link
        to="/phrases"
        className="block bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-2 text-center"
      >
        {t('nav_phrases')}
      </Link>
    </nav>
  )
}
