import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const aboutPoints = [
  'Чистий та підтримуваний код',
  'Люблю нові технології',
  'Увага до деталей',
  'Постійний розвиток'
]

const About: React.FC = () => {
  return (
    <section id="about" className="mt-24 lg:grid lg:grid-cols-[0.95fr,1.05fr] lg:items-center lg:gap-16">
      <div className="rounded-[2rem] border border-white/10 bg-[#101125]/90 p-8 shadow-[0_35px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <span className="text-xs tracking-[0.4em] uppercase text-neonblue">Про мене</span>
        <h2 className="mt-4 text-4xl font-bold">Хто я?</h2>
        <p className="mt-4 text-slate-300 leading-8">Я розробник, який захоплюється створенням сучасних веб-застосунків. Постійно вчу нове, експериментую та працюю над власними проєктами, аби підтримувати високий рівень якості та креативу.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {aboutPoints.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-[#080712]/80 p-4">
              <FiCheckCircle className="mt-1 text-neonpurple" />
              <p className="text-slate-300">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-neonpurple px-6 py-3 font-semibold text-black shadow-[0_20px_60px_rgba(124,77,255,0.2)] transition hover:brightness-110">
            Завантажити CV
          </a>
        </div>
      </div>

      <div className="mt-10 lg:mt-0 relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0d0b18] via-[#0f0d1e] to-[#09050d] p-6 shadow-[0_35px_80px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-neonblue via-neonpurple to-neonblue opacity-60 blur-2xl" />
        <div className="rounded-[1.75rem] bg-[#090912] p-8 text-center">
          <div className="mx-auto mb-6 h-60 w-60 rounded-[2rem] bg-gradient-to-br from-[#0a0830] to-[#130f37] shadow-[0_30px_80px_rgba(124,77,255,0.18)]" />
          <h3 className="text-2xl font-semibold">F548</h3>
          <p className="mt-3 text-slate-400">Developer & Designer</p>
          <div className="mt-6 grid gap-4 text-left text-slate-300">
            <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#0c0b16]/80 p-4">
              <span>Focus</span>
              <span className="font-semibold text-white">100%</span>
            </div>
            <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#0c0b16]/80 p-4">
              <span>Experience</span>
              <span className="font-semibold text-white">Mid / Senior</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
