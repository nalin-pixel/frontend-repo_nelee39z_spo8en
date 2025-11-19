export default function Stats() {
  const cards = [
    { label: 'Active Users', value: '12,431', trend: '+8.2%', accent: 'from-blue-500 to-cyan-400' },
    { label: 'Revenue', value: '$84,920', trend: '+3.1%', accent: 'from-purple-500 to-pink-500' },
    { label: 'Sessions', value: '237,810', trend: '+12.4%', accent: 'from-green-500 to-emerald-400' },
    { label: 'Conversion', value: '4.12%', trend: '+0.6%', accent: 'from-orange-500 to-amber-400' },
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div key={c.label} className="group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/60 p-5">
          <div className={`absolute -inset-0.5 bg-gradient-to-tr ${c.accent} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity`} />
          <div className="relative">
            <p className="text-slate-400 text-sm">{c.label}</p>
            <div className="mt-2 flex items-end justify-between">
              <h3 className="text-2xl font-semibold text-slate-100">{c.value}</h3>
              <span className="text-emerald-400 text-xs bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">{c.trend}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
