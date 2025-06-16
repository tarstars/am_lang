import { useState } from 'react'
import { useLanguage } from '../useLanguage'
import polarOwl from '../assets/polar_owl.webp'
import appleImg from '../assets/alphabet/apple.webp'
import apricotImg from '../assets/alphabet/apricot.webp'
import bookImg from '../assets/alphabet/book.webp'
import bugImg from '../assets/alphabet/bug.webp'
import catImg from '../assets/alphabet/cat.webp'
import doorImg from '../assets/alphabet/door.webp'
import earthImg from '../assets/alphabet/earth.webp'
import electricCurrentImg from '../assets/alphabet/electric_current.webp'
import girafImg from '../assets/alphabet/giraf.webp'
import houseImg from '../assets/alphabet/house.webp'
import incubatorImg from '../assets/alphabet/incubator.webp'
import jewelryImg from '../assets/alphabet/jewelry.webp'
import lightImg from '../assets/alphabet/light.webp'
import lunchImg from '../assets/alphabet/lunch.webp'
import parrotImg from '../assets/alphabet/parrot.webp'
import pourImg from '../assets/alphabet/pour.webp'
import raisinImg from '../assets/alphabet/raisin.webp'
import steeringWheelImg from '../assets/alphabet/steering_wheel.webp'
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
  Ա: {
    image: appleImg,
    wordUpper: ['Ա'],
    wordLower: ['ա'],
    soundRu: ['Айб'],
    soundEn: ['A'],
  },
  Գ: {
    image: apricotImg,
    wordUpper: ['Գ'],
    wordLower: ['գ'],
    soundRu: ['Гим'],
    soundEn: ['G'],
  },
  Դ: {
    image: bookImg,
    wordUpper: ['Դ'],
    wordLower: ['դ'],
    soundRu: ['Да'],
    soundEn: ['D'],
  },
  Ե: {
    image: bugImg,
    wordUpper: ['Ե'],
    wordLower: ['ե'],
    soundRu: ['Еч'],
    soundEn: ['Ye'],
  },
  Զ: {
    image: catImg,
    wordUpper: ['Զ'],
    wordLower: ['զ'],
    soundRu: ['За'],
    soundEn: ['Z'],
  },
  Է: {
    image: doorImg,
    wordUpper: ['Է'],
    wordLower: ['է'],
    soundRu: ['Э'],
    soundEn: ['E'],
  },
  Ը: {
    image: earthImg,
    wordUpper: ['Ը'],
    wordLower: ['ը'],
    soundRu: ['Эт'],
    soundEn: ['Ə'],
  },
  Թ: {
    image: electricCurrentImg,
    wordUpper: ['Թ'],
    wordLower: ['թ'],
    soundRu: ['Тхо'],
    soundEn: ['Tʿ'],
  },
  Ժ: {
    image: girafImg,
    wordUpper: ['Ժ'],
    wordLower: ['ժ'],
    soundRu: ['Же'],
    soundEn: ['Zh'],
  },
  Ի: {
    image: houseImg,
    wordUpper: ['Ի'],
    wordLower: ['ի'],
    soundRu: ['Ини'],
    soundEn: ['I'],
  },
  Լ: {
    image: incubatorImg,
    wordUpper: ['Լ'],
    wordLower: ['լ'],
    soundRu: ['Լюн'],
    soundEn: ['L'],
  },
  Խ: {
    image: jewelryImg,
    wordUpper: ['Խ'],
    wordLower: ['խ'],
    soundRu: ['Хе'],
    soundEn: ['Kh'],
  },
  Ծ: {
    image: lightImg,
    wordUpper: ['Ծ'],
    wordLower: ['ծ'],
    soundRu: ['Цо'],
    soundEn: ['Ts'],
  },
  Կ: {
    image: lunchImg,
    wordUpper: ['Կ'],
    wordLower: ['կ'],
    soundRu: ['Кен'],
    soundEn: ['K'],
  },
  Հ: {
    image: parrotImg,
    wordUpper: ['Հ'],
    wordLower: ['հ'],
    soundRu: ['Хо'],
    soundEn: ['H'],
  },
  Ձ: {
    image: pourImg,
    wordUpper: ['Ձ'],
    wordLower: ['ձ'],
    soundRu: ['Дза'],
    soundEn: ['Dz'],
  },
  Ղ: {
    image: raisinImg,
    wordUpper: ['Ղ'],
    wordLower: ['ղ'],
    soundRu: ['Гат'],
    soundEn: ['Gh'],
  },
  Ճ: {
    image: steeringWheelImg,
    wordUpper: ['Ճ'],
    wordLower: ['ճ'],
    soundRu: ['Че'],
    soundEn: ['Ch'],
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
