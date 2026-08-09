import React from 'react'
import { SiJavascript, SiNodedotjs, SiHtml5, SiCss3 } from 'react-icons/si'

const stack = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 }
]

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="mt-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
        <div>
          <span className="text-xs tracking-[0.4em] uppercase text-neonblue">Stack</span>
          <h2 className="mt-3 text-4xl font-bold">Мої технології</h2>
          <p className="mt-4 max-w-xl text-slate-300">Я працюю тільки з тим, що дійсно потрібно для якісних frontend і backend рішень. Мій стек сфокусований на верифікованих web-технологіях.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stack.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.name} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition hover:border-neonpurple/40 hover:bg-[#11101f]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f1020] text-2xl text-neonblue shadow-[0_0_25px_rgba(0,229,255,0.15)]">
                  <Icon />
                </span>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack
