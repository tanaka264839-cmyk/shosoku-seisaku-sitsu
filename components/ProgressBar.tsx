// components/ProgressBar.tsx
type Props = {
  current: number  // 1-indexed（現在のステップ番号）
  total: number
}

export default function ProgressBar({ current, total }: Props) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i < current ? 'bg-navy' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-app-muted">{current} / {total}</span>
    </div>
  )
}
