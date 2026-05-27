import type { Question } from '@/types'

export const QUESTIONS: Question[] = [
  {
    id: 'theme',
    text: '何について調べていますか？',
    type: 'text',
  },
  {
    id: 'researchTime',
    text: 'どのくらい調べましたか？',
    type: 'select',
    options: ['1時間未満', '数時間', '10時間以上', 'もう何日も'],
  },
  {
    id: 'comparisonCount',
    text: '保存・比較した数はどのくらいですか？',
    type: 'select',
    options: ['数件', '10件前後', '20件以上', '数えていない'],
  },
  {
    id: 'deadline',
    text: '決める期限はありますか？',
    type: 'select',
    options: ['今日中', '今週中', '特にない', 'もうとっくに過ぎてる'],
  },
  {
    id: 'anxietyReason',
    text: 'まだ不安な理由は何ですか？',
    type: 'select',
    options: ['情報が足りない', '失敗が怖い', '比較が終わっていない', 'なんとなく'],
  },
  {
    id: 'currentFeeling',
    text: '今の気持ちは？',
    type: 'select',
    options: ['早く決めたい', 'もう少し調べたい', '正直疲れた', 'わからない'],
  },
  {
    id: 'reversible',
    text: '決めた後に取り消せますか？',
    type: 'select',
    options: ['できる', '難しい', 'わからない'],
  },
]
