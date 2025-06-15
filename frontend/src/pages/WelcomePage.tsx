import araratImg from '../assets/ararat.webp'
import boarImg from '../assets/little-boar400x600.webp'
import { useLanguage } from '../useLanguage'

export default function WelcomePage() {
  const { t } = useLanguage()
  return (
    <div className="relative flex flex-col items-center gap-4 p-4">
      <img src={araratImg} alt="Mount Ararat" className="w-320 rounded" />
      <img
        src={boarImg}
        alt="Little boar"
        className="fixed right-4 bottom-4 w-40"
      />
      <h1 className="text-4xl font-bold">{t('welcome_title')}</h1>
      <p className="text-2xl text-left max-w-prose">{t('welcome_desc')}</p>
    </div>
  )
}
