import { useLanguage } from '../useLanguage'

export default function InterestingNotes() {
  const { t } = useLanguage()
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{t('interesting_notes')}</h1>
      <p>{t('coming_soon')}</p>
    </div>
  )
}
