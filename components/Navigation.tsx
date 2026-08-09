import React from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Головна', href: '#home' },
  { label: 'Про мене', href: '#about' },
  { label: 'Проєкти', href: '#projects' },
  { label: 'Навички', href: '#stack' },
  { label: 'Контакти', href: '#contact' }
]

const Navigation: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[#08060f]/80"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 text-white font-semibold text-lg">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-neonpurple to-neonblue text-xl shadow-[0_0_30px_rgba(124,77,255,0.35)]">&lt;/&gt;</span>
          Fronzen548
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/Fronzen548_Resume.pdf" download className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-200 transition hover:bg-neonblue/10">
            CV
          </a>
          <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-200 transition hover:bg-neonpurple/10">
            UA
          </button>
          <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-200 transition hover:bg-neonblue/10">
            EN
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Navigation
