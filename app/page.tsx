'use client'
import { useRouter } from 'next/navigation'
import type { Answers } from '@/types'
import { QUESTIONS } from '@/data/questions'
import StepForm from '@/components/StepForm'
import ResearchMockUI from '@/components/ResearchMockUI'

export default function HomePage() {
  const router = useRouter()

  const handleComplete = (answers: Answers) => {
    localStorage.setItem('shirabsugee_answers', JSON.stringify(answers))
    router.push('/result')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-navy tracking-tight">シラベスギー</h1>
        <p className="text-app-muted mt-2 text-sm">調べすぎて、決められていませんか？</p>
      </header>

      <main className="flex-1 flex justify-center items-start px-6 pb-16">
        <div className="flex items-start gap-10 w-full max-w-3xl">
          <ResearchMockUI />

          <div className="flex-1 bg-app-card rounded-2xl shadow-sm border border-gray-100 p-10">
            <StepForm questions={QUESTIONS} onComplete={handleComplete} />
          </div>
        </div>
      </main>
    </div>
  )
}
