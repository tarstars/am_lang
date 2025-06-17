import polarOwl from '../assets/polar_owl.webp'
import yesImg from '../assets/phrases/yes.webp'
import noImg from '../assets/phrases/no.webp'
import thankYouImg from '../assets/phrases/thank_you_hands_pressed.webp'
import plasticBagImg from '../assets/phrases/plastic_bag.webp'
import needPlasticBagImg from '../assets/phrases/do_you_need_plastic_bag.webp'
import { useLanguage } from '../useLanguage'

interface Phrase {
  image?: string
  hy: string
  enPron: string
  ruPron: string
  en: string
  ru: string
}

const phrases: Phrase[] = [
  { hy: 'Այո', enPron: 'Ayo', ruPron: 'Аё', en: 'Yes', ru: 'Да' },
  { hy: 'Ոչ', enPron: 'Voch', ruPron: 'Воч', en: 'No', ru: 'Нет' },
  {
    hy: 'Շնորհակալություն',
    enPron: 'Shnorhakalutyun',
    ruPron: 'Шнорhакалутюн',
    en: 'Thank you',
    ru: 'Спасибо',
  },
  {
    hy: 'Խնդրեմ',
    enPron: 'Khndrem',
    ruPron: 'Хндрем',
    en: "You're welcome / Please",
    ru: 'Пожалуйста',
  },
  { hy: 'Բարեւ', enPron: 'Barev', ruPron: 'Барев', en: 'Hello', ru: 'Привет' },
  {
    hy: 'Ցտեսություն',
    enPron: 'Tstesutyun',
    ruPron: 'Цтесуцюн',
    en: 'Goodbye',
    ru: 'До свидания',
  },
  {
    hy: 'Որտեղ է զուգարանը',
    enPron: 'Vortegh e zugarany',
    ruPron: 'Вортех э зугараны',
    en: 'Where is the toilet?',
    ru: 'Где туалет?',
  },
  {
    hy: 'Ես ուզում եմ սա',
    enPron: 'Yes uzum em sa',
    ruPron: 'Йес узум эм са',
    en: 'I want this',
    ru: 'Я хочу это',
  },
  {
    hy: 'Չեմ հասկանում',
    enPron: 'Chem haskanum',
    ruPron: 'Чем hасканум',
    en: 'I don’t understand',
    ru: 'Я не понимаю',
  },
  {
    hy: 'Այդքան էլ լավ չէ',
    enPron: "Aydk’an el lav ch’e",
    ruPron: 'Айткан эл лав чэ',
    en: 'Not so good',
    ru: 'Не очень хорошо',
  },
  { hy: 'Լավ է', enPron: 'Lav e', ruPron: 'Лав э', en: 'It’s good', ru: 'Хорошо' },
  {
    hy: 'Որքա՞ն արժի',
    enPron: "Vork’an arji?",
    ruPron: 'Ворк’ан аржи?',
    en: 'How much is it?',
    ru: 'Сколько это стоит?',
  },
  {
    hy: 'Որտե՞ղ է մետրոն',
    enPron: 'Vortegh e metron?',
    ruPron: 'Вортех э метрон?',
    en: 'Where is the metro?',
    ru: 'Где метро?',
  },
  {
    hy: 'Տոպրակ է պետք?',
    enPron: "Toprak e petk'?",
    ruPron: "Топрак э петк'?",
    en: 'Do you need a plastic bag?',
    ru: 'Нужен пакет?',
  },
  {
    hy: 'Ես հայ չեմ',
    enPron: 'Yes hay chem',
    ruPron: 'Йес хай чем',
    en: 'I am not Armenian',
    ru: 'Я не армянин',
  },
  {
    hy: 'Խաղաղություն',
    enPron: 'Khaghaghutyun',
    ruPron: 'Хаhаhуцюн',
    en: 'Peace',
    ru: 'Мир',
  },
  {
    hy: 'Հաճելի օր',
    enPron: 'Hacheli or',
    ruPron: 'Хачели ор',
    en: 'Have a nice day',
    ru: 'Хорошего дня',
  },
  {
    hy: 'Բարի գիշեր',
    enPron: 'Bari gisher',
    ruPron: 'Бари гишер',
    en: 'Good night',
    ru: 'Спокойной ночи',
  },
  {
    hy: 'Ի՞նչ է դա',
    enPron: 'Inch e da?',
    ruPron: 'Инч э да?',
    en: 'What is that?',
    ru: 'Что это?',
  },
  {
    hy: 'Իմ անունն է ...',
    enPron: 'Im anunn e ...',
    ruPron: 'Им анунн э ...',
    en: 'My name is ...',
    ru: 'Меня зовут ...',
  },
]

export default function PhrasesPage() {
  const { t } = useLanguage()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{t('phrases_title')}</h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
        {phrases.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded shadow overflow-hidden w-fit"
          >
            <img
              src={[yesImg, noImg, thankYouImg, plasticBagImg, needPlasticBagImg][
                i % 5
              ] || polarOwl}
              alt="phrase illustration"
              className="object-cover w-full h-auto"
            />
            <div className="p-4 flex flex-col justify-center">
              <div className="font-bold text-2xl mb-1">{p.hy}</div>
              <div className="text-lg">{p.enPron}</div>
              <div className="text-lg mb-2">{p.ruPron}</div>
              <div>{p.en}</div>
              <div>{p.ru}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
