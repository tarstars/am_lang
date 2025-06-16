// Utility functions to transliterate Armenian text to English or Russian phonetics

export type TranslitLang = 'en' | 'ru'

// Mapping table of Armenian letters to their sounds (lowercase versions)
// The uppercase forms will automatically use capitalized transliterations
const baseMap: [string, string, string][] = [
  ['Ա', 'a', 'а'],
  ['Բ', 'b', 'б'],
  ['Գ', 'g', 'г'],
  ['Դ', 'd', 'д'],
  ['Ե', 'ye', 'е'],
  ['Զ', 'z', 'з'],
  ['Է', 'e', 'э'],
  ['Ը', 'ə', 'э'],
  ['Թ', "t'", 'т'],
  ['Ժ', 'zh', 'ж'],
  ['Ի', 'i', 'и'],
  ['Լ', 'l', 'л'],
  ['Խ', 'kh', 'х'],
  ['Ծ', 'ts', 'ц'],
  ['Կ', 'k', 'к'],
  ['Հ', 'h', 'х'],
  ['Ձ', 'dz', 'дз'],
  ['Ղ', 'gh', 'г'],
  ['Ճ', 'ch', 'ч'],
  ['Մ', 'm', 'м'],
  ['Յ', 'y', 'й'],
  ['Ն', 'n', 'н'],
  ['Շ', 'sh', 'ш'],
  ['Ո', 'vo', 'о'],
  ['Չ', "ch'", 'ч'],
  ['Պ', 'p', 'п'],
  ['Ջ', 'j', 'дж'],
  ['Ռ', 'rr', 'р'],
  ['Ս', 's', 'с'],
  ['Վ', 'v', 'в'],
  ['Տ', 't', 'т'],
  ['Ր', 'r', 'р'],
  ['Ց', "ts'", 'ц'],
  ['Ու', 'oo', 'у'],
  ['Փ', "p'", 'п'],
  ['Ք', "k'", 'к'],
  ['ԵՎ', 'yev', 'ев'],
  ['Օ', 'o', 'о'],
  ['Ֆ', 'f', 'ф'],
]

const letterMap: Record<string, { en: string; ru: string }> = {}
for (const [upper, en, ru] of baseMap) {
  const lower = upper.toLowerCase()
  letterMap[upper] = { en: en.toUpperCase(), ru: ru.toUpperCase() }
  letterMap[lower] = { en, ru }
}

const digraphs = ['Ու', 'ու', 'ԵՎ', 'և']

export function transliterate(text: string, lang: TranslitLang): string {
  let result = ''
  for (let i = 0; i < text.length; ) {
    // handle digraphs first
    let matched = false
    for (const d of digraphs) {
      if (text.startsWith(d, i)) {
        result += letterMap[d][lang]
        i += d.length
        matched = true
        break
      }
    }
    if (matched) continue
    const ch = text[i]
    const entry = letterMap[ch]
    result += entry ? entry[lang] : ch
    i++
  }
  return result
}
