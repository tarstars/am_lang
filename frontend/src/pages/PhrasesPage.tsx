import { useLanguage } from '../useLanguage'

export default function PhrasesPage() {
  const { t } = useLanguage()
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{t('phrases_title')}</h1>
      <p>{t('coming_soon')}</p>
    </div>
  )
}
