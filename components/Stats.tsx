import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const stats = [
  { value: '15+', label: 'Проєктів' },
  { value: '2+', label: 'Роки навчання' },
  { value: '1000+', label: 'Рядків коду' },
  { value: '24/7', label: 'У розвитку' }
]

const Stats: React.FC = () => {
  return (
    <section className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="group rounded-3xl border border-white/10 bg-[#0e0c19]/80 p-6 text-center transition hover:border-neonblue/40 hover:-translate-y-1">
          <p className="text-3xl font-semibold text-white">{item.value}</p>
          <p className="mt-3 text-sm text-slate-300 flex items-center justify-center gap-2">
            {item.label}
            <FiArrowUpRight className="text-neonpurple" />
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats
