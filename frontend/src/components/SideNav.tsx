import { Link } from 'react-router-dom'
import { useLanguage } from '../useLanguage'

export default function SideNav() {
  const { t } = useLanguage()
  return (
    <nav className="w-48 bg-gray-100 min-h-screen p-4 flex flex-col gap-2">
      <Link to="/" className="font-semibold">
        {t('welcome_title')}
      </Link>
      <Link to="/alphabet" className="hover:underline">
        {t('nav_alphabet')}
      </Link>
      <Link to="/words" className="hover:underline">
        {t('nav_words')}
      </Link>
      <Link to="/phrases" className="hover:underline">
        {t('nav_phrases')}
      </Link>
    </nav>
  )
}
