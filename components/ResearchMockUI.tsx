export default function ResearchMockUI() {
  return (
    <div className="hidden md:flex flex-col gap-4 justify-start w-72 shrink-0 select-none pt-1">

      {/* ブラウザ風：複数タブが開いている様子 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* タブバー */}
        <div className="bg-gray-100 px-2 pt-2 flex gap-1 border-b border-gray-200 overflow-hidden">
          {[
            { label: 'PC比較2024', active: true },
            { label: 'レビュー', active: false },
            { label: 'おすすめ10選', active: false },
            { label: '価格.c…', active: false },
            { label: '+', active: false },
          ].map((tab) => (
            <div
              key={tab.label}
              className={`px-2 py-1 rounded-t-md text-[10px] truncate shrink-0 ${
                tab.active
                  ? 'bg-white text-navy font-semibold shadow-sm max-w-[80px]'
                  : 'text-app-muted max-w-[54px]'
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* 比較表コンテンツ */}
        <div className="px-4 py-3">
          <p className="text-[10px] text-app-muted mb-2">ノートPC比較 — 最新版</p>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-app-muted font-normal pb-1.5 pr-2">機種</th>
                <th className="text-center text-app-muted font-normal pb-1.5 px-1">価格</th>
                <th className="text-center text-app-muted font-normal pb-1.5">評価</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'A社 Pro', price: '¥89,800', stars: '★★★★☆', highlight: false },
                { name: 'B社 Ultra', price: '¥112,000', stars: '★★★★★', highlight: true },
                { name: 'C社 Think', price: '¥76,500', stars: '★★★☆☆', highlight: false },
              ].map((row) => (
                <tr
                  key={row.name}
                  className={`border-b border-gray-50 last:border-0 ${
                    row.highlight ? 'bg-blue-50/60' : ''
                  }`}
                >
                  <td className="py-1.5 pr-2 text-app-text font-medium">{row.name}</td>
                  <td className="py-1.5 px-1 text-center text-app-muted">{row.price}</td>
                  <td className="py-1.5 text-center text-yellow-500 text-[10px]">{row.stars}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 保存済み記事リスト */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-[10px] font-semibold text-app-muted uppercase tracking-wide">
            🔖 保存済み記事
          </p>
          <span className="text-xs font-bold text-navy">23件</span>
        </div>
        <div className="flex flex-col gap-0">
          {[
            '「絶対失敗しない」PC選び完全ガイド',
            '2024年最新モデル比較レビュー',
            'スペック解説 — CPUとGPUの違い',
            'コスパ最強ランキング TOP10',
            'バッテリー持ち徹底比較まとめ',
          ].map((title, i) => (
            <div key={i} className="flex items-start gap-2 py-1.5 border-b border-gray-50 last:border-0">
              <span className="text-gray-300 text-[10px] mt-0.5 shrink-0">●</span>
              <p className="text-xs text-app-text leading-snug">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 付箋メモ */}
      <div className="flex gap-3 ml-3">
        <div className="bg-yellow-100 rounded-lg shadow-sm p-3 w-[120px] rotate-[-2deg]">
          <p className="text-xs text-yellow-800 leading-relaxed font-medium">
            もっと調べた<br />方がいい？🤔
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg shadow-sm p-3 w-[100px] rotate-[1.5deg]">
          <p className="text-xs text-blue-800 leading-relaxed">
            予算内で<br />収まる？
          </p>
        </div>
      </div>

    </div>
  )
}
