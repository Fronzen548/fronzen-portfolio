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
        {/* Technologies card (refined spacing and visual) */}
        <div className="rounded-[1.75rem] border border-white/6 bg-[rgba(10,9,18,0.6)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-neonpurple/90 shadow-[0_0_12px_rgba(124,77,255,0.45)]" />
                <span className="text-xs tracking-[0.35em] uppercase text-slate-300">Stack</span>
              </div>
              <h3 className="mt-3 text-2xl font-extrabold text-white leading-tight">Мої технології</h3>
            </div>
            <div className="text-sm text-slate-400">4</div>
          </div>

          <div className="mt-6 grid gap-4 grid-cols-2">
            {techs.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.name} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-4 py-3 transition transform hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(124,77,255,0.06)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#071826] text-2xl text-neonblue shadow-[0_10px_40px_rgba(0,229,255,0.06)]">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats card (larger numbers, closer to design) */}
        <div className="rounded-[1.75rem] border border-white/6 bg-[rgba(10,9,18,0.6)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-lg">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-[rgba(7,16,28,0.55)] p-4 text-center border border-white/4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">{s.label}</p>
                <p className="mt-2 text-2xl font-extrabold text-white">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About card with illustration (refined visuals) */}
        <div className="rounded-[1.75rem] border border-white/6 bg-[rgba(10,9,18,0.6)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-lg">
          <div className="flex items-center gap-4">
            <div className="w-28 flex-shrink-0">
              <div className="overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-br from-[#0a0720] to-[#140a28] p-1">
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c8f3c9f0d7a0b6f3a6b2f0a6e6a3a8a" alt="cyberpunk" className="h-28 w-28 object-cover" />
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">Хто я?</h4>
              <p className="mt-2 text-sm text-slate-300">Fronzen548 — фронтенд/бекенд розробник. Роблю чисті інтерфейси та надійну серверну логіку, з фокусом на продуктивність і UX.</p>

              <div className="mt-4 flex items-center gap-3">
                <a href="/Fronzen548_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-neonpurple px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(124,77,255,0.18)] transition hover:brightness-105">
                  Завантажити CV
                  <FiDownload />
                </a>
                <div className="ml-auto text-xs text-slate-400">Focus <span className="font-semibold text-white">100%</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact quick links */}
        <div className="rounded-[1.75rem] border border-white/6 bg-[rgba(10,9,18,0.6)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-lg">
          <h5 className="text-sm font-semibold text-slate-300">Контакти</h5>
          <div className="mt-4 grid gap-3">
            <a href="mailto:fronzen548@gmail.com" className="flex items-center gap-3 rounded-lg border border-white/6 bg-[rgba(7,16,38,0.55)] px-4 py-3 transition hover:bg-[rgba(11,18,40,0.7)]">
              <svg className="h-5 w-5 text-neonblue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5L12 13L21 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"></rect></svg>
              <span className="text-sm text-slate-300">fronzen548@gmail.com</span>
            </a>
            <a href="https://github.com/Fronzen548" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/6 bg-[rgba(7,16,38,0.55)] px-4 py-3 transition hover:bg-[rgba(11,18,40,0.7)]">
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
