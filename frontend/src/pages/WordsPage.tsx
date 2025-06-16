import { useLanguage } from '../useLanguage'
import bullImg from '../assets/alphabet/bull.webp'
import cheeseImg from '../assets/alphabet/cheese.webp'
import dressImg from '../assets/alphabet/dress.webp'
import lampImg from '../assets/alphabet/lamp.webp'
import robotImg from '../assets/alphabet/robot.webp'
import roseImg from '../assets/alphabet/rose.webp'
import snakeImg from '../assets/alphabet/snake.webp'
import stoneImg from '../assets/alphabet/stone.webp'
import waterImg from '../assets/alphabet/water.webp'

interface Word {
  image: string
  hy: string
  en: string
  ru: string
}

const words: Word[] = [
  { image: bullImg, hy: 'ցուլ', en: 'bull', ru: 'бык' },
  { image: cheeseImg, hy: 'պանիր', en: 'cheese', ru: 'сыр' },
  { image: dressImg, hy: 'զգեստ', en: 'dress', ru: 'платье' },
  { image: lampImg, hy: 'լամպ', en: 'lamp', ru: 'лампа' },
  { image: robotImg, hy: 'ռոբոտ', en: 'robot', ru: 'робот' },
  { image: roseImg, hy: 'վարդ', en: 'rose', ru: 'роза' },
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
