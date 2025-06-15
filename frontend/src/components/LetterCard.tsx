import { useRef } from 'react'

export interface LetterCardProps {
  symbol: string
  nameEn: string
  nameRu: string
}

export default function LetterCard({ symbol, nameEn, nameRu }: LetterCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const playAudio = async () => {
    const res = await fetch(`/tts?text=${encodeURIComponent(symbol)}`)
    if (!res.ok) return
    const data = await res.json()
    if (audioRef.current) {
      audioRef.current.src = 'data:audio/mp3;base64,' + data.audioContent
      audioRef.current.play()
    }
  }

  return (
    <div className="rounded-xl shadow p-4 flex flex-col items-center">
      <div className="text-5xl mb-2">{symbol}</div>
      <div className="text-lg mb-1">{nameEn}</div>
      <div className="text-sm text-gray-500 mb-2">{nameRu}</div>
      <button
        onClick={playAudio}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
      >
        Play
      </button>
      <audio ref={audioRef} />
    </div>
  )
}
