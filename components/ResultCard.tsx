// components/ResultCard.tsx
'use client'
import type { DiagnosisResult } from '@/types'

type Props = {
  result: DiagnosisResult
}

export default function ResultCard({ result }: Props) {
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const shareText = `私のシラベスギー度は${result.score}%でした。\n${result.cause}が原因らしい。\n\n#シラベスギー\n${shareUrl}`
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-md w-full">
      <p className="text-app-muted text-sm mb-2 text-center">あなたのシラベスギー度</p>

      {/* スコア */}
      <div className="flex flex-col items-center mb-6">
        <span className="text-7xl font-bold text-navy leading-none">
          {result.score}
          <span className="text-3xl">%</span>
        </span>
        <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
          <div
            className="bg-navy h-2 rounded-full transition-all duration-700"
            style={{ width: `${result.score}%` }}
          />
        </div>
      </div>

      {/* 原因 */}
      <div className="bg-app-bg rounded-lg px-4 py-3 mb-4">
        <p className="text-xs text-app-muted mb-1">原因</p>
        <p className="text-base font-semibold text-navy">{result.cause}</p>
      </div>

      {/* 診断文 */}
      <p className="text-sm text-app-text mb-4 leading-relaxed">{result.diagnosis}</p>

      {/* 推奨アクション */}
      <div className="border-l-4 border-navy pl-3 mb-6">
        <p className="text-xs text-app-muted mb-1">推奨アクション</p>
        <p className="text-sm text-app-text">{result.action}</p>
      </div>

      {/* ボタン */}
      <div className="flex gap-3">
        <a
          href="/"
          className="flex-1 text-center px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-app-text hover:bg-gray-50 transition-colors"
        >
          もう一度診断する
        </a>
        <a
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2.5 rounded-lg bg-navy text-white text-sm hover:bg-navy-light transition-colors"
        >
          Xでシェア
        </a>
      </div>
    </div>
  )
}
