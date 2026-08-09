import React from 'react'
import { SiJavascript, SiNodedotjs, SiHtml5, SiCss3 } from 'react-icons/si'
import { FiDownload } from 'react-icons/fi'

const techs = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 }
]

const stats = [
  { label: 'Проєкти', value: '15+' },
  { label: 'Роки навчання', value: '2+' },
  { label: 'Рядків коду', value: '1000+' },
  { label: 'У розвитку', value: '24/7' }
]

const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block">
      <div className="space-y-6">
        {/* Technologies card */}
        <div className="rounded-[1.5rem] border border-white/8 bg-[#0b0b12]/70 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <span className="text-xs tracking-[0.4em] uppercase text-neonblue">Stack</span>
          <h3 className="mt-4 text-2xl font-bold">Мої технології</h3>
          <div className="mt-5 grid gap-4 grid-cols-2">
            {techs.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.name} className="flex items-center gap-3 rounded-xl border border-white/6 bg-[#071022]/60 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition hover:scale-[1.02]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#071826] text-2xl text-neonblue shadow-[0_8px_30px_rgba(127,217,255,0.06)]">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-sm text-slate-300">{t.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats card */}
        <div className="rounded-[1.5rem] border border-white/8 bg-[#0b0b12]/70 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-[#07101c]/60 p-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{s.label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About card with illustration */}
        <div className="rounded-[1.5rem] border border-white/8 bg-[#0b0b12]/70 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h4 className="text-lg font-semibold">Хто я?</h4>
              <p className="mt-3 text-sm text-slate-300">Я Fronzen548 — фронтенд і бекенд розробник. Створюю сучасні веб-застосунки з увагою до деталей і продуктивності.</p>
              <a href="/Fronzen548_Resume.pdf" download className="mt-4 inline-flex items-center gap-2 rounded-full bg-neonpurple px-4 py-2 text-sm font-semibold text-black transition hover:brightness-105">
                Завантажити CV
                <FiDownload />
              </a>
            </div>
            <div className="w-28 flex-shrink-0">
              {/* External cyberpunk hooded illustration (replaceable) */}
              <div className="overflow-hidden rounded-xl border border-white/6 bg-gradient-to-br from-[#0a0720] to-[#140a28] p-1">
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c8f3c9f0d7a0b6f3a6b2f0a6e6a3a8a" alt="cyberpunk" className="h-24 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact quick links */}
        <div className="rounded-[1.5rem] border border-white/8 bg-[#0b0b12]/70 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <h5 className="text-sm font-semibold text-slate-300">Контакти</h5>
          <div className="mt-4 grid gap-3">
            <a href="mailto:fronzen548@gmail.com" className="flex items-center gap-3 rounded-lg border border-white/6 bg-[#071026]/60 px-4 py-3">
              <svg className="h-5 w-5 text-neonblue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5L12 13L21 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"></rect></svg>
              <span className="text-sm text-slate-300">fronzen548@gmail.com</span>
            </a>
            <a href="https://github.com/Fronzen548" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/6 bg-[#071026]/60 px-4 py-3">
              <svg className="h-5 w-5 text-neonpurple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7.8 2.1 1.2.1-1 .4-1.6.7-2-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 3 .9.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.1-1.2 3-.9 3-.9.6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.7-2.3 4.4-4.5 4.8.3.3.6.8.6 1.6v2.3c0 .3.2.6.7.5C19.1 20.1 22 16.4 22 12c0-5.5-4.5-10-10-10z" stroke="currentColor" strokeWidth="0" fill="currentColor"></path></svg>
              <span className="text-sm text-slate-300">GitHub / Fronzen548</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
