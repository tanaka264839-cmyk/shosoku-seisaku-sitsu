// app/api/diagnose/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import type { Answers, DiagnosisResult } from '@/types'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  let answers: Answers
  try {
    const body = await req.json()
    // result/page.tsx sends { answers: {...} }, unwrap if wrapped
    answers = body.answers ?? body
  } catch {
    return NextResponse.json({ error: 'リクエストの解析に失敗しました' }, { status: 400 })
  }

  const prompt = `あなたは意思決定の専門家です。以下のユーザーの回答を分析し、「シラベスギー度（調べすぎ度）」を診断してください。

【ユーザーの回答】
- テーマ：${answers.theme}
- 調べた時間：${answers.researchTime}
- 保存・比較数：${answers.comparisonCount}
- 期限：${answers.deadline}
- 不安な理由：${answers.anxietyReason}
- 今の気持ち：${answers.currentFeeling}
- 取り消し可否：${answers.reversible}

以下のJSON形式のみで返答してください（他のテキスト・マークダウン不可）：
{
  "score": 0〜100の整数,
  "cause": "原因分類（10文字以内）",
  "diagnosis": "一言診断文（40文字以内）",
  "action": "推奨アクション（60文字以内）"
}`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    })

    const raw = completion.choices[0].message.content?.trim() ?? ''

    let result: DiagnosisResult
    try {
      result = JSON.parse(raw)
    } catch {
      const match = raw.match(/\{[\s\S]*\}/)
      if (!match) {
        return NextResponse.json({ error: '診断結果の解析に失敗しました' }, { status: 500 })
      }
      result = JSON.parse(match[0])
    }

    result.score = Math.min(100, Math.max(0, Number(result.score)))

    return NextResponse.json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : '診断中にエラーが発生しました'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
