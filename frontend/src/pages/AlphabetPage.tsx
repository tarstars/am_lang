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
import bullImg from '../assets/alphabet/bull.webp'
import cheeseImg from '../assets/alphabet/cheese.webp'
import robotImg from '../assets/alphabet/robot.webp'
import roseImg from '../assets/alphabet/rose.webp'
import snakeImg from '../assets/alphabet/snake.webp'
import stoneImg from '../assets/alphabet/stone.webp'
import waterImg from '../assets/alphabet/water.webp'
import LetterModal from '../components/LetterModal'
import type { WordInfo } from '../components/LetterModal'

const wordInfoMap: Record<string, WordInfo> = {
  Բ: {
    image: polarOwl,
    wordUpper: ['Բ', 'ՈՒ'],
    wordLower: ['բ', 'ու'],
    soundRu: ['Б', 'У'],
    soundEn: ['b', 'oo'],
  },
    Ա: {
    image: appleImg,
    wordUpper: ["Խ", "Ն", "Ձ", "Ո", "Ր"],
    wordLower: ["խ", "ն", "ձ", "ո", "ր"],
    soundRu: ["Хе", "Ну", "Дза", "Во", "Ре"],
    soundEn: ["Kh", "N", "Dz", "Vo", "R"],
  },
    Գ: {
    image: apricotImg,
    wordUpper: ["Ծ", "Ի", "Ր", "Ա", "Ն"],
    wordLower: ["ծ", "ի", "ր", "ա", "ն"],
    soundRu: ["Цо", "Ини", "Ре", "Айб", "Ну"],
    soundEn: ["Ts", "I", "R", "A", "N"],
  },
    Դ: {
    image: bookImg,
    wordUpper: ["Գ", "Ի", "Ր", "Ք"],
    wordLower: ["գ", "ի", "ր", "ք"],
    soundRu: ["Гим", "Ини", "Ре", "Кʼе"],
    soundEn: ["G", "I", "R", "Kʿ"],
  },
    Ե: {
    image: bugImg,
    wordUpper: ["Բ", "Զ", "Ե", "Զ"],
    wordLower: ["բ", "զ", "ե", "զ"],
    soundRu: ["Бен", "За", "Еч", "За"],
    soundEn: ["B", "Z", "Ye", "Z"],
  },
    Զ: {
    image: catImg,
    wordUpper: ["Կ", "Ա", "Տ", "ՈՒ"],
    wordLower: ["կ", "ա", "տ", "ու"],
    soundRu: ["Кен", "Айб", "Тюн", "У"],
    soundEn: ["K", "A", "T", "U"],
  },
    Է: {
    image: doorImg,
    wordUpper: ["Դ", "ՈՒ", "Ռ"],
    wordLower: ["դ", "ու", "ռ"],
    soundRu: ["Да", "У", "Ра"],
    soundEn: ["D", "U", "Rr"],
  },
    Ը: {
    image: earthImg,
    wordUpper: ["Ե", "Ր", "Կ", "Ի", "Ր"],
    wordLower: ["ե", "ր", "կ", "ի", "ր"],
    soundRu: ["Еч", "Ре", "Кен", "Ини", "Ре"],
    soundEn: ["Ye", "R", "K", "I", "R"],
  },
    Թ: {
    image: electricCurrentImg,
    wordUpper: ["Հ", "Ո", "Ս", "Ա", "Ն", "Ք"],
    wordLower: ["հ", "ո", "ս", "ա", "ն", "ք"],
    soundRu: ["Хо", "Во", "Се", "Айб", "Ну", "Кʼе"],
    soundEn: ["H", "Vo", "S", "A", "N", "Kʿ"],
  },
    Ժ: {
    image: girafImg,
    wordUpper: ["Ը", "Ն", "Ձ", "ՈՒ", "Ղ", "Տ"],
    wordLower: ["ը", "ն", "ձ", "ու", "ղ", "տ"],
    soundRu: ["Эт", "Ну", "Дза", "У", "Гат", "Тюн"],
    soundEn: ["Ə", "N", "Dz", "U", "Gh", "T"],
  },
    Ի: {
    image: houseImg,
    wordUpper: ["Տ", "ՈՒ", "Ն"],
    wordLower: ["տ", "ու", "ն"],
    soundRu: ["Тюн", "У", "Ну"],
    soundEn: ["T", "U", "N"],
  },
    Լ: {
    image: incubatorImg,
    wordUpper: ["Ի", "Ն", "Կ", "ՈՒ", "Բ", "Ա", "Տ", "Ո", "Ր"],
    wordLower: ["ի", "ն", "կ", "ու", "բ", "ա", "տ", "ո", "ր"],
    soundRu: ["Ини", "Ну", "Кен", "У", "Бен", "Айб", "Тюн", "Во", "Ре"],
    soundEn: ["I", "N", "K", "U", "B", "A", "T", "Vo", "R"],
  },
    Խ: {
    image: jewelryImg,
    wordUpper: ["Զ", "Ա", "Ր", "Դ"],
    wordLower: ["զ", "ա", "ր", "դ"],
    soundRu: ["За", "Айб", "Ре", "Да"],
    soundEn: ["Z", "A", "R", "D"],
  },
    Ծ: {
    image: lightImg,
    wordUpper: ["Լ", "ՈՒ", "Յ", "Ս"],
    wordLower: ["լ", "ու", "յ", "ս"],
    soundRu: ["Люн", "У", "Йи", "Се"],
    soundEn: ["L", "U", "Y", "S"],
  },
    Կ: {
    image: lunchImg,
    wordUpper: ["Ճ", "Ա", "Շ"],
    wordLower: ["ճ", "ա", "շ"],
    soundRu: ["Че", "Айб", "Ша"],
    soundEn: ["Ch", "A", "Sh"],
  },
    Հ: {
    image: parrotImg,
    wordUpper: ["Թ", "ՈՒ", "Թ", "Ա", "Կ"],
    wordLower: ["թ", "ու", "թ", "ա", "կ"],
    soundRu: ["Тхо", "У", "Тхо", "Айб", "Кен"],
    soundEn: ["Tʿ", "U", "Tʿ", "A", "K"],
  },
    Ձ: {
    image: pourImg,
    wordUpper: ["Լ", "Ց", "Ն", "Ե", "Լ"],
    wordLower: ["լ", "ց", "ն", "ե", "լ"],
    soundRu: ["Люн", "Цо", "Ну", "Еч", "Люн"],
    soundEn: ["L", "Tsʿ", "N", "Ye", "L"],
  },
    Ղ: {
    image: raisinImg,
    wordUpper: ["Չ", "Ա", "Մ", "Ի", "Չ"],
    wordLower: ["չ", "ա", "մ", "ի", "չ"],
    soundRu: ["Ча", "Айб", "Мен", "Ини", "Ча"],
    soundEn: ["Chʿ", "A", "M", "I", "Chʿ"],
  },
    Ճ: {
    image: steeringWheelImg,
    wordUpper: ["Ղ", "Ե", "Կ"],
    wordLower: ["ղ", "ե", "կ"],
    soundRu: ["Гат", "Еч", "Кен"],
    soundEn: ["Gh", "Ye", "K"],
  },
    Պ: {
    image: cheeseImg,
    wordUpper: ["Պ", "Ա", "Ն", "Ի", "Ր"],
    wordLower: ["պ", "ա", "ն", "ի", "ր"],
    soundRu: ["Пе", "Айб", "Ну", "Ини", "Ре"],
    soundEn: ["P", "A", "N", "I", "R"],
  },
    Ց: {
    image: bullImg,
    wordUpper: ["Ց", "ՈՒ", "Լ"],
    wordLower: ["ց", "ու", "լ"],
    soundRu: ["Цо", "У", "Люн"],
    soundEn: ["Tsʿ", "U", "L"],
  },
    Ջ: {
    image: waterImg,
    wordUpper: ["Ջ", "ՈՒ", "Ր"],
    wordLower: ["ջ", "ու", "ր"],
    soundRu: ["Дже", "У", "Ре"],
    soundEn: ["J", "U", "R"],
  },
    Ռ: {
    image: robotImg,
    wordUpper: ["Ռ", "Ո", "Բ", "Ո", "Տ"],
    wordLower: ["ռ", "ո", "բ", "ո", "տ"],
    soundRu: ["Ра", "Во", "Бен", "Во", "Тюн"],
    soundEn: ["Rr", "Vo", "B", "Vo", "T"],
  },
    Վ: {
    image: roseImg,
    wordUpper: ["Վ", "Ա", "Ր", "Դ"],
    wordLower: ["վ", "ա", "ր", "դ"],
    soundRu: ["Вев", "Айб", "Ре", "Да"],
    soundEn: ["V", "A", "R", "D"],
  },
    Ք: {
    image: stoneImg,
    wordUpper: ["Ք", "Ա", "Ր"],
    wordLower: ["ք", "ա", "ր"],
    soundRu: ["Кʼе", "Айб", "Ре"],
    soundEn: ["Kʿ", "A", "R"],
  },
    Օ: {
    image: snakeImg,
    wordUpper: ["Օ", "Ձ"],
    wordLower: ["օ", "ձ"],
    soundRu: ["О", "Дза"],
    soundEn: ["O", "Dz"],
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
  const [active, setActive] = useState<WordInfo | null>(null)

  const openInfo = (letter: string) => {
    const info = wordInfoMap[letter]
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
