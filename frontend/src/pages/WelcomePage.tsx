import araratImg from '../assets/ararat.webp'
import { useLanguage } from '../useLanguage'

export default function WelcomePage() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img src={araratImg} alt="Mount Ararat" className="w-320 rounded" />
      <h1 className="text-4xl font-bold">{t('welcome_title')}</h1>
      <p className="text-2xl text-left max-w-prose">{t('welcome_desc')}</p>
    </div>
  )
}
