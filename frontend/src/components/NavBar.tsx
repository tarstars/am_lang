import { Link } from 'react-router-dom'
import { useLanguage } from '../useLanguage'

export default function NavBar() {
  const { lang, setLang, t } = useLanguage()
  return (
    <header className="p-4 flex gap-4 items-center bg-gray-100">
      <nav className="flex gap-4 flex-1">
        <Link to="/" className="font-semibold">
          {t('welcome_title')}
        </Link>
        <Link to="/alphabet">{t('nav_alphabet')}</Link>
        <Link to="/words">{t('nav_words')}</Link>
        <Link to="/phrases">{t('nav_phrases')}</Link>
      </nav>
      <select
        className="border px-2 py-1"
        value={lang}
        onChange={(e) => setLang(e.target.value as 'en' | 'ru')}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </header>
  )
}
