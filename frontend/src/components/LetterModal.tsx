
export interface LetterInfo {
  image: string
  wordUpper: string[]
  wordLower: string[]
  soundRu: string[]
  soundEn: string[]
}

interface LetterModalProps {
  info: LetterInfo
  onClose: () => void
}

export default function LetterModal({ info, onClose }: LetterModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div
        className="bg-white rounded p-4 max-w-sm w-full shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="float-right" onClick={onClose}>
          ✕
        </button>
        <img src={info.image} alt="" className="w-full h-auto mb-4" />
        <table className="table-auto border-collapse w-full text-center">
          <tbody>
            <tr>
              {info.wordUpper.map((l, i) => (
                <td key={`u${i}`} className="border px-2 py-1 text-2xl">
                  {l}
                </td>
              ))}
            </tr>
            <tr>
              {info.wordLower.map((l, i) => (
                <td key={`l${i}`} className="border px-2 py-1 text-2xl">
                  {l}
                </td>
              ))}
            </tr>
            <tr>
              {info.soundRu.map((s, i) => (
                <td key={`r${i}`} className="border px-2 py-1">
                  {s}
                </td>
              ))}
            </tr>
            <tr>
              {info.soundEn.map((s, i) => (
                <td key={`e${i}`} className="border px-2 py-1">
                  {s}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
