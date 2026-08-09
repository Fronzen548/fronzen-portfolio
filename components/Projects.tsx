import { useMemo, useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const categories = ['All', 'Websites', 'Node.js', 'Frontend', 'Backend']

const projects = [
  {
    title: 'Fronzen Chat',
    category: 'Websites',
    description: 'Сучасний чат-додаток з авторизацією, каналами та реальним часом через Socket.io.',
    tech: ['JavaScript', 'Node.js', 'Socket.io'],
    github: 'https://github.com/Fronzen548/fronzen-chat',
    demo: '#'
  },
  {
    title: 'Fronzen Store API',
    category: 'Node.js',
    description: 'Масштабований REST API для інтернет-магазину з PostgreSQL, JWT та кешуванням.',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/Fronzen548/fstore-api',
    demo: '#'
  },
  {
    title: 'Control Panel',
    category: 'Frontend',
    description: 'Сучасний інтерфейс адміністративної панелі з адаптивним дизайном та інтерактивними картами.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Fronzen548/project-control',
    demo: '#'
  },
  {
    title: 'API Dashboard',
    category: 'Backend',
    description: 'Надійне рішення для моніторингу API, логування запитів та управління серверними сервісами.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Fronzen548/api-dashboard',
    demo: '#'
  }
]

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(
    () => (activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory]
  )

  return (
    <div className="mt-8">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm transition ${
              activeCategory === category
                ? 'bg-neonpurple text-black shadow-[0_0_40px_rgba(124,77,255,0.25)]'
                : 'border border-white/10 bg-white/5 text-slate-300 hover:border-neonblue/40'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#090814]/90 p-6 shadow-[0_40px_90px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-neonblue/30">
            <div className="flex items-center gap-3 text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-neonpurple" />
              <p className="text-sm uppercase tracking-[0.3em]">{project.category}</p>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
              <a href={project.demo} className="inline-flex items-center gap-2 rounded-full bg-neonblue px-4 py-3 text-black transition hover:brightness-110">
                Live Demo <FiExternalLink />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-neonpurple/30">
                Code <FiGithub />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
