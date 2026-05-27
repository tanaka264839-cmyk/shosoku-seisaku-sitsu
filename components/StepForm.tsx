// components/StepForm.tsx
'use client'
import { useState } from 'react'
import type { Question, Answers } from '@/types'
import ProgressBar from './ProgressBar'

type Props = {
  questions: Question[]
  onComplete: (answers: Answers) => void
}

export default function StepForm({ questions, onComplete }: Props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<Answers>>({})
  const [textValue, setTextValue] = useState('')

  const question = questions[currentStep]
  const selectedOption = question.type === 'select' ? answers[question.id] : undefined
  const canProceed =
    question.type === 'text' ? textValue.trim().length > 0 : !!selectedOption

  const handleSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: option }))
  }

  const handleNext = () => {
    if (!canProceed) return

    const updatedAnswers: Partial<Answers> = {
      ...answers,
      [question.id]: question.type === 'text' ? textValue.trim() : selectedOption,
    }

    if (currentStep < questions.length - 1) {
      setAnswers(updatedAnswers)
      setCurrentStep((s) => s + 1)
      setTextValue('')
    } else {
      onComplete(updatedAnswers as Answers)
    }
  }

  const isLastStep = currentStep === questions.length - 1

  return (
    <div className="flex flex-col">
      <ProgressBar current={currentStep + 1} total={questions.length} />

      <h2 className="text-xl font-semibold text-app-text mb-6 leading-snug">
        {question.text}
      </h2>

      {question.type === 'text' ? (
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && canProceed && handleNext()}
          placeholder="例：ノートパソコンの購入"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-app-text placeholder-app-muted focus:outline-none focus:ring-2 focus:ring-navy/30 mb-6"
          autoFocus
        />
      ) : (
        <div className="flex flex-col gap-2 mb-6">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                selectedOption === option
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-app-text border-gray-200 hover:border-navy/50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={handleNext}
        disabled={!canProceed}
        className="self-end flex items-center gap-2 px-6 py-2.5 rounded-lg bg-navy text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-navy-light transition-colors"
      >
        {isLastStep ? '診断する' : '次へ →'}
      </button>
    </div>
  )
}
