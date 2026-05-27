// components/ResearchMockUI.tsx
export default function ResearchMockUI() {
  return (
    <div className="hidden md:flex flex-col gap-4 p-8 justify-center select-none w-72 shrink-0">
      {/* 比較表モックUI */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <p className="text-xs font-semibold text-app-muted mb-3 tracking-wide uppercase">
          比較リスト
        </p>
        {[
          { label: 'A社モデル', checked: true },
          { label: 'B社モデル', checked: true },
          { label: 'C社モデル', checked: false },
          { label: 'D社モデル', checked: true },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0"
          >
            <div
              className={`w-4 h-4 rounded flex items-center justify-center text-xs shrink-0 ${
                item.checked ? 'bg-navy text-white' : 'bg-gray-100'
              }`}
            >
              {item.checked ? '✓' : ''}
            </div>
            <span className="text-sm text-app-text">{item.label}</span>
          </div>
        ))}
      </div>

      {/* 付箋メモ */}
      <div className="flex gap-3 ml-4">
        <div className="bg-yellow-100 rounded-lg shadow-sm p-3 w-28 rotate-[-2deg]">
          <p className="text-xs text-yellow-800 leading-relaxed">
            価格重視？<br />スペック重視？
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg shadow-sm p-3 w-28 rotate-[1.5deg]">
          <p className="text-xs text-blue-800 leading-relaxed">
            あとでもう一度<br />確認する
          </p>
        </div>
      </div>

      {/* 保存済み件数 */}
      <div className="flex items-center gap-2 ml-2">
        <span className="text-app-muted text-sm">📎</span>
        <span className="text-app-muted text-sm">
          保存済み <span className="font-semibold text-navy">23件</span>
        </span>
      </div>
    </div>
  )
}
