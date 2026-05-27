export type Answers = {
  theme: string
  researchTime: string
  comparisonCount: string
  deadline: string
  anxietyReason: string
  currentFeeling: string
  reversible: string
}

export type DiagnosisResult = {
  score: number
  cause: string
  diagnosis: string
  action: string
}

export type Question =
  | { id: keyof Answers; text: string; type: 'text' }
  | { id: keyof Answers; text: string; type: 'select'; options: string[] }
