import { useRef } from 'react'

export interface LetterCardProps {
  symbol: string
  nameEn: string
  nameRu: string
  audioURL: string
}

export default function LetterCard({ symbol, nameEn, nameRu, audioURL }: LetterCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const playAudio = () => {
    audioRef.current?.play()
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
      <audio ref={audioRef} src={audioURL} />
    </div>
  )
}
