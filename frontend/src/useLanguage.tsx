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
    alphabet_title: 'Armenian Alphabet',
    words_title: 'Simple Words',
    phrases_title: 'Frequent Phrases',
    coming_soon: 'Content coming soon',
    letter: 'Letter',
    latin: 'Latin',
    russian: 'Russian phonetic',
    lowercase: 'Lowercase',
  },
  ru: {
    welcome_title: 'Добро пожаловать в тренажеры армянского языка',
    welcome_desc: 'Этот сервис помогает начинающим изучать армянский язык на русском и английском.',
    nav_alphabet: 'Тренажер алфавита',
    nav_words: 'Тренажер слов',
    nav_phrases: 'Тренажер фраз',
    alphabet_title: 'Армянский алфавит',
    words_title: 'Простые слова',
    phrases_title: 'Частые фразы',
    coming_soon: 'Содержимое скоро появится',
    letter: 'Буква',
    latin: 'Латиница',
    russian: 'Русская фонетика',
    lowercase: 'строчная',
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
