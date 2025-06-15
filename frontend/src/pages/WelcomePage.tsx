import araratImg from '../assets/ararat.webp'
import { Link } from 'react-router-dom'
import { useLanguage } from '../useLanguage'

export default function WelcomePage() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img src={araratImg} alt="Mount Ararat" className="w-80 rounded" />
      <h1 className="text-2xl font-bold">{t('welcome_title')}</h1>
      <p className="text-center max-w-prose">{t('welcome_desc')}</p>
      <nav className="flex gap-4 mt-4">
        <Link className="text-emerald-600 underline" to="/alphabet">
          {t('nav_alphabet')}
        </Link>
        <Link className="text-emerald-600 underline" to="/words">
          {t('nav_words')}
        </Link>
        <Link className="text-emerald-600 underline" to="/phrases">
          {t('nav_phrases')}
        </Link>
      </nav>
    </div>
  )
}
