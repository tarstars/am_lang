import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../useLanguage'

export default function SideNav() {
  const { lang, setLang, t } = useLanguage()
  const location = useLocation()

  const items = [
    { to: '/alphabet', label: t('nav_alphabet') },
    { to: '/words', label: t('nav_words') },
    { to: '/phrases', label: t('nav_phrases') },
    { to: '/interesting_notes', label: t('nav_interesting_notes') },
  ]

  return (
    <nav className="fixed w-64 min-h-screen bg-sky-200 text-blue-900 p-6 flex flex-col justify-between text-sm sm:text-base">
      <div>
        <Link to="/" className="block uppercase font-bold mb-4">
          {t('welcome_title')}
        </Link>
        <select
          className="mb-6 bg-sky-100 border rounded px-2 py-1 text-sm w-full"
          value={lang}
          onChange={(e) => setLang(e.target.value as 'en' | 'ru')}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
        <ul className="space-y-2">
          {items.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`block px-3 py-2 rounded uppercase ${active ? 'bg-blue-300 text-white' : 'hover:bg-sky-300'}`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <Link
        to="/alphabet"
        className="mt-6 block text-center bg-white text-blue-800 font-bold border border-blue-800 rounded py-3 hover:bg-blue-50"
      >
        Start Learning
      </Link>
    </nav>
  )
}
