'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { DiagnosisResult } from '@/types'
import ResultCard from '@/components/ResultCard'

export default function ResultPage() {
  const router = useRouter()
  const [result, setResult] = useState<DiagnosisResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('shirabsugee_answers')
    if (!raw) {
      router.replace('/')
      return
    }

    const answers = JSON.parse(raw)

    fetch('/api/diagnose', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('API error')
        return res.json()
      })
      .then((data: DiagnosisResult) => setResult(data))
      .catch(() => setError('診断中にエラーが発生しました。もう一度お試しください。'))
  }, [router])

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <p className="text-app-muted mb-4">{error}</p>
        <a href="/" className="text-navy underline text-sm">
          トップに戻る
        </a>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <p className="text-app-muted animate-pulse">診断中...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-center py-8 px-4">
        <h1 className="text-3xl font-bold text-navy">シラベスギー</h1>
        <p className="text-app-muted mt-1 text-sm">調べすぎて、決められていませんか？</p>
      </header>

      <main className="flex-1 flex justify-center items-start px-4 pb-12">
        <ResultCard result={result} />
      </main>
    </div>
  )
}
