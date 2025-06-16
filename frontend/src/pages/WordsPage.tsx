import { useLanguage } from '../useLanguage'
import appleImg from '../assets/alphabet/apple.webp'
import apricotImg from '../assets/alphabet/apricot.webp'
import bookImg from '../assets/alphabet/book.webp'
import bugImg from '../assets/alphabet/bug.webp'
import bullImg from '../assets/alphabet/bull.webp'
import catImg from '../assets/alphabet/cat.webp'
import cheeseImg from '../assets/alphabet/cheese.webp'
import doorImg from '../assets/alphabet/door.webp'
import earthImg from '../assets/alphabet/earth.webp'
import electricCurrentImg from '../assets/alphabet/electric_current.webp'
import girafImg from '../assets/alphabet/giraf.webp'
import houseImg from '../assets/alphabet/house.webp'
import incubatorImg from '../assets/alphabet/incubator.webp'
import jewelryImg from '../assets/alphabet/jewelry.webp'
import lampImg from '../assets/alphabet/lamp.webp'
import lightImg from '../assets/alphabet/light.webp'
import lunchImg from '../assets/alphabet/lunch.webp'
import parrotImg from '../assets/alphabet/parrot.webp'
import pourImg from '../assets/alphabet/pour.webp'
import raisinImg from '../assets/alphabet/raisin.webp'
import robotImg from '../assets/alphabet/robot.webp'
import roseImg from '../assets/alphabet/rose.webp'
import skirtImg from '../assets/alphabet/skirt.webp'
import snakeImg from '../assets/alphabet/snake.webp'
import steeringWheelImg from '../assets/alphabet/steering_wheel.webp'
import stoneImg from '../assets/alphabet/stone.webp'
import waterImg from '../assets/alphabet/water.webp'

interface Word {
  image: string
  hy: string
  en: string
  ru: string
}

const words: Word[] = [
  { image: appleImg, hy: 'խնձոր', en: 'apple', ru: 'яблоко' },
  { image: apricotImg, hy: 'ծիրան', en: 'apricot', ru: 'абрикос' },
  { image: bookImg, hy: 'գիրք', en: 'book', ru: 'книга' },
  { image: bugImg, hy: 'բզեզ', en: 'bug', ru: 'жук' },
  { image: bullImg, hy: 'ցուլ', en: 'bull', ru: 'бык' },
  { image: catImg, hy: 'կատու', en: 'cat', ru: 'кот' },
  { image: cheeseImg, hy: 'պանիր', en: 'cheese', ru: 'сыр' },
  { image: doorImg, hy: 'դուռ', en: 'door', ru: 'дверь' },
  { image: earthImg, hy: 'երկիր', en: 'earth', ru: 'земля' },
  { image: electricCurrentImg, hy: 'հոսանք', en: 'electric current', ru: 'ток' },
  { image: girafImg, hy: 'ընձուղտ', en: 'giraffe', ru: 'жираф' },
  { image: houseImg, hy: 'տուն', en: 'house', ru: 'дом' },
  { image: incubatorImg, hy: 'ինկուբատոր', en: 'incubator', ru: 'инкубатор' },
  { image: jewelryImg, hy: 'զարդ', en: 'jewelry', ru: 'украшения' },
  { image: lampImg, hy: 'լամպ', en: 'lamp', ru: 'лампа' },
  { image: lightImg, hy: 'լույս', en: 'light', ru: 'свет' },
  { image: lunchImg, hy: 'ճաշ', en: 'lunch', ru: 'обед' },
  { image: parrotImg, hy: 'թութակ', en: 'parrot', ru: 'попугай' },
  { image: pourImg, hy: 'լցնել', en: 'pour', ru: 'наливать' },
  { image: raisinImg, hy: 'չամիչ', en: 'raisin', ru: 'изюм' },
  { image: robotImg, hy: 'ռոբոտ', en: 'robot', ru: 'робот' },
  { image: roseImg, hy: 'վարդ', en: 'rose', ru: 'роза' },
  { image: steeringWheelImg, hy: 'ղեկ', en: 'steering wheel', ru: 'руль' },
  { image: skirtImg, hy: 'զգեստ', en: 'skirt', ru: 'юбка' },
  { image: snakeImg, hy: 'օձ', en: 'snake', ru: 'змея' },
  { image: stoneImg, hy: 'քար', en: 'stone', ru: 'камень' },
  { image: waterImg, hy: 'ջուր', en: 'water', ru: 'вода' },
]

export default function WordsPage() {
  const { t } = useLanguage()
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('words_title')}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {words.map((w) => (
          <div key={w.hy} className="flex flex-col items-center gap-2">
            <img src={w.image} alt={w.en} className="w-40 h-auto" />
            <table className="table-auto border-collapse">
              <tbody>
                <tr>
                  <td className="border px-2 py-1 text-xl text-center">
                    {w.hy.toUpperCase()}
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-xl text-center">{w.hy}</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">{w.ru}</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-center">{w.en}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  )
}
