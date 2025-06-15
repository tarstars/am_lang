import araratImg from '../assets/ararat.webp'
import { useLanguage } from '../useLanguage'

export default function WelcomePage() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img src={araratImg} alt="Mount Ararat" className="w-80 rounded" />
      <h1 className="text-2xl font-bold">{t('welcome_title')}</h1>
      <p className="text-center max-w-prose">{t('welcome_desc')}</p>
    </div>
  )
}
