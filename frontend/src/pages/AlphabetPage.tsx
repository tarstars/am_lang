import { useState } from 'react'
import { useLanguage } from '../useLanguage'
import polarOwl from '../assets/polar_owl.webp'
import LetterModal from '../components/LetterModal'
import type { LetterInfo } from '../components/LetterModal'

const letterInfoMap: Record<string, LetterInfo> = {
  Բ: {
    image: polarOwl,
    wordUpper: ['Բ', 'ՈՒ'],
    wordLower: ['բ', 'ու'],
    soundRu: ['Б', 'У'],
    soundEn: ['b', 'oo'],
  },
}

const letters = [
  ['Ա', 'ա', 'A', 'Айб'],
  ['Բ', 'բ', 'B', 'Бен'],
  ['Գ', 'գ', 'G', 'Гим'],
  ['Դ', 'դ', 'D', 'Да'],
  ['Ե', 'ե', 'Ye', 'Еч'],
  ['Զ', 'զ', 'Z', 'За'],
  ['Է', 'է', 'E', 'Э'],
  ['Ը', 'ը', 'Ə', 'Эт'],
  ['Թ', 'թ', 'Tʿ', 'Тхо'],
  ['Ժ', 'ժ', 'Zh', 'Же'],
  ['Ի', 'ի', 'I', 'Ини'],
  ['Լ', 'լ', 'L', 'Люн'],
  ['Խ', 'խ', 'Kh', 'Хе'],
  ['Ծ', 'ծ', 'Ts', 'Цо'],
  ['Կ', 'կ', 'K', 'Кен'],
  ['Հ', 'հ', 'H', 'Хо'],
  ['Ձ', 'ձ', 'Dz', 'Дза'],
  ['Ղ', 'ղ', 'Gh', 'Гат'],
  ['Ճ', 'ճ', 'Ch', 'Че'],
  ['Մ', 'մ', 'M', 'Мен'],
  ['Յ', 'յ', 'Y', 'Йи'],
  ['Ն', 'ն', 'N', 'Ну'],
  ['Շ', 'շ', 'Sh', 'Ша'],
  ['Ո', 'ո', 'Vo', 'Во'],
  ['Չ', 'չ', 'Chʿ', 'Ча'],
  ['Պ', 'պ', 'P', 'Пе'],
  ['Ջ', 'ջ', 'J', 'Дже'],
  ['Ռ', 'ռ', 'Rr', 'Ра'],
  ['Ս', 'ս', 'S', 'Се'],
  ['Վ', 'վ', 'V', 'Вев'],
  ['Տ', 'տ', 'T', 'Тюн'],
  ['Ր', 'ր', 'R', 'Ре'],
  ['Ց', 'ց', 'Tsʿ', 'Цо'],
  ['Ու', 'ու', 'U', 'У'],
  ['Փ', 'փ', 'Pʿ', 'Пюр'],
  ['Ք', 'ք', 'Kʿ', 'Кʼе'],
  ['ԵՎ', 'և', 'Yev', 'Ев'],
  ['Օ', 'օ', 'O', 'О'],
  ['Ֆ', 'ֆ', 'F', 'Фе'],
]

export default function AlphabetPage() {
  const { t } = useLanguage()
  const [active, setActive] = useState<LetterInfo | null>(null)

  const openInfo = (letter: string) => {
    const info = letterInfoMap[letter]
    if (info) setActive(info)
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('alphabet_title')}</h1>
      <table className="table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-2">{t('letter')}</th>
            <th className="border px-2">{t('lowercase')}</th>
            <th className="border px-2">{t('latin')}</th>
            <th className="border px-2">{t('russian')}</th>
          </tr>
        </thead>
        <tbody>
          {letters.map(([armUpper, armLower, en, ru]) => (
            <tr key={armUpper}>
              <td
                className="border px-2 text-center text-2xl cursor-pointer hover:bg-sky-100"
                onClick={() => openInfo(armUpper)}
              >
                {armUpper}
              </td>
              <td className="border px-2 text-center text-2xl">{armLower}</td>
              <td className="border px-2">{en}</td>
              <td className="border px-2">{ru}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {active && (
        <LetterModal info={active} onClose={() => setActive(null)} />
      )}
    </div>
  )
}
