import { useLanguage } from '../useLanguage'

const letters = [
  ['Ա', 'A', 'Айб'],
  ['Բ', 'B', 'Ben'],
  ['Գ', 'G', 'Gim'],
  ['Դ', 'D', 'Да'],
  ['Ե', 'Ye', 'Еч'],
  ['Զ', 'Z', 'За'],
  ['Է', 'E', 'Э'],
  ['Ը', 'Ə', 'Ət'],
  ['Թ', 'Tʿ', 'Тхо'],
  ['Ժ', 'Zh', 'Же'],
  // ... add rest if needed
]

export default function AlphabetPage() {
  const { t } = useLanguage()
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('alphabet_title')}</h1>
      <table className="table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-2">{t('letter')}</th>
            <th className="border px-2">{t('latin')}</th>
            <th className="border px-2">{t('russian')}</th>
          </tr>
        </thead>
        <tbody>
          {letters.map(([arm, en, ru]) => (
            <tr key={arm}>
              <td className="border px-2 text-center text-2xl">{arm}</td>
              <td className="border px-2">{en}</td>
              <td className="border px-2">{ru}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
