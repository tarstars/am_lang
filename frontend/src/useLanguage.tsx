import { createContext, useContext, useState } from 'react'

type Lang = 'en' | 'ru'
interface I18n {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const strings: Record<Lang, Record<string, string>> = {
  en: {
    welcome_title: 'Welcome to Armenian Language Tools',
    welcome_desc: 'This service helps Russian and English speakers start learning the Armenian language.',
    nav_alphabet: 'Alphabet trainer',
    nav_words: 'Word trainer',
    nav_phrases: 'Phrase trainer',
    nav_interesting_notes: 'Interesting notes',
    alphabet_title: 'Armenian Alphabet',
    words_title: 'Simple Words',
    phrases_title: 'Frequent Phrases',
    coming_soon: 'Content coming soon',
    interesting_notes_intro:
      'Here one can find interesting notes about Yerevan, Armenia, language and life.',
    letter: 'Letter',
    latin: 'Latin',
    russian: 'Russian phonetic',
    lowercase: 'Lowercase',
    interesting_notes_title: 'Interesting notes',
    note_2025_06_17_date: '17 Jun 2025',
    note_2025_06_17_title: "It's impossible to pronounce",
    note_2025_06_17_alt: 'Alexander Tamanian',
    note_2025_06_17_p1:
      'At the foot of the majestic Cascade stands a monument dedicated to Alexander Tamanian\u2014a great man with a troubled life. He was the visionary behind the master plan of Yerevan, the very layout we see today.',
    note_2025_06_17_p2:
      'During the day, winds from the Ararat Valley dominate. But in the evening, a fresh and clean mountain breeze sweeps down in the opposite direction. Tamanian designed Yerevan\u2019s streets like a one-way aerodynamic valve: heat and dust gradually permeate the city during the day, but are quickly flushed out in the evening.',
    note_2025_06_17_p3:
      'Now, let\u2019s take a closer look at the inscription on the monument. The letters spell "\u0543\u0531\u0550\u053F\u0531\u0550\u053A\u0535\u054F". A rough transliteration would be \u201cts-ar-t-ar-ar-pet.\u201d But be careful: the initial \u201cts\u201d sound is unique to the Armenian language and can be very difficult to pronounce correctly. If you want to master it, it\u2019s best to hear it from an Armenian friend\u2014or even take a few lessons.'
  },
  ru: {
    welcome_title: 'Добро пожаловать в тренажеры армянского языка',
    welcome_desc: 'Этот сервис помогает начинающим изучать армянский язык на русском и английском.',
    nav_alphabet: 'Тренажер алфавита',
    nav_words: 'Тренажер слов',
    nav_phrases: 'Тренажер фраз',
    nav_interesting_notes: 'любопытные заметки',
    alphabet_title: 'Армянский алфавит',
    words_title: 'Простые слова',
    phrases_title: 'Частые фразы',
    coming_soon: 'Содержимое скоро появится',
    interesting_notes_intro:
      'Здесь можно найти любопытные заметки о Ереване, Армении, языке и жизни.',
    letter: 'Буква',
    latin: 'Латиница',
    russian: 'Русская фонетика',
    lowercase: 'строчная',
    interesting_notes_title: 'любопытные заметки',
    note_2025_06_17_date: '17 июня 2025',
    note_2025_06_17_title: 'Невозможно произнести',
    note_2025_06_17_alt: 'Александр Таманян',
    note_2025_06_17_p1:
      'У подножия величественного Каскада стоит памятник Александру Таманяну — великому человеку с непростой судьбой. Именно он придумал генеральный план Еревана, по которому город выглядит таким, каким мы видим его сегодня.',
    note_2025_06_17_p2:
      'Днем преобладают ветры из Араратской долины. Но вечером с гор спускается свежий ветерок в обратном направлении. Таманян спроектировал улицы Еревана как односторонний аэродинамический клапан: жара и пыль постепенно наполняют город днем, но быстро выветриваются вечером.',
    note_2025_06_17_p3:
      'Теперь давайте приглядимся к надписи на памятнике. Буквы складываются в слово «ՃԱՐՏԱՐԱՊԵՏ». Приблизительная транслитерация — «ц-ар-т-ар-ар-пет». Но будьте осторожны: начальный звук «ц» уникален для армянского языка и его трудно произнести правильно. Если хотите освоить его, лучше услышать от армянского друга или даже взять пару уроков.'
  },
}

const LanguageContext = createContext<I18n | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = (key: string) => strings[lang][key] || key
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within provider')
  return ctx
}
