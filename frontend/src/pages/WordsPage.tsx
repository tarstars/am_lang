import { useLanguage } from '../useLanguage'

export default function WordsPage() {
  const { t } = useLanguage()
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{t('words_title')}</h1>
      <p>{t('coming_soon')}</p>
    </div>
  )
}
