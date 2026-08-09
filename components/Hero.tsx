import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi'

const OrbitalSphere = dynamic(() => import('./OrbitalSphere'), {
  ssr: false,
  loading: () => <div className="w-full h-full rounded-3xl bg-[#08101a]" />
})

const Hero: React.FC = () => {
  return (
    <section className="grid gap-10 xl:grid-cols-[1.05fr,0.95fr] items-center">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-[#1d1b34] px-4 py-2 text-sm text-neonblue shadow-[0_0_30px_rgba(0,229,255,0.16)]">
            <span className="h-2 w-2 rounded-full bg-green-400" /> Available for work
          </p>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Привіт, я <span className="text-neonpurple">Fronzen548</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">Я full-stack розробник, який фокусуються на frontend та backend рішеннях. Створюю ефективні вебзастосунки, API та чисті інтерфейси з реальним результатом.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-neonpurple px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110">
              Переглянути проєкти
              <FiArrowRight />
            </a>
            <a href="/Fronzen548_Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-neonblue/30 hover:bg-[#131021]">
              Завантажити CV
              <FiDownload />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="grid grid-cols-2 gap-4">
          {[
            { label: 'JavaScript', value: 'Продуктивний' },
            { label: 'Node.js', value: 'Серверний' },
            { label: 'HTML5', value: 'Семантичний' },
            { label: 'CSS3', value: 'Сучасний' }
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-[#10102a]/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition hover:border-neonpurple/40">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
              <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-slate-400">
          <a href="https://github.com/Fronzen548" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0914]/90 px-4 py-3 transition hover:border-neonblue/30">
            <FiGithub /> GitHub
          </a>
          <a href="mailto:fronzen548@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0914]/90 px-4 py-3 transition hover:border-neonpurple/30">
            <FiMail /> Email
          </a>
          <a href="https://www.linkedin.com/in/fronzen548" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0914]/90 px-4 py-3 transition hover:border-neonblue/30">
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080713]/80 p-4 shadow-[0_40px_90px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,77,255,0.25),_transparent_35%)]" />
        <div className="relative h-[520px] rounded-[1.75rem] overflow-hidden border border-white/10 bg-[#060510]">
          <OrbitalSphere />
        </div>
        <div className="pointer-events-none absolute left-6 bottom-6 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur-xl">
          8K Planet render
        </div>
      </div>
    </section>
  )
}

export default Hero
