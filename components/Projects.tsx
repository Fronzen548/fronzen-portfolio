import React from 'react'

const mock = [
  { title: 'Chat Application', desc: 'Сучасний чат-додаток з авторизацією і реальним часом.' },
  { title: 'E-Commerce API', desc: 'REST API для інтернет-магазину з фільтрами та кошиком.' },
  { title: '3D Solar System', desc: 'Інтерактивна 3D модель сонячної системи на Three.js.' }
]

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {mock.map((p) => (
        <article key={p.title} className="bg-[#071023] rounded-xl p-5 border border-slate-800">
          <div className="h-40 bg-gradient-to-br from-[#061024] to-[#0b0812] rounded-md mb-4 flex items-center justify-center text-slate-500">Preview</div>
          <h3 className="font-semibold text-xl">{p.title}</h3>
          <p className="text-slate-300 mt-2 text-sm">{p.desc}</p>
          <div className="mt-4 flex gap-3">
            <a className="text-sm px-3 py-2 bg-neonblue text-black rounded-md">Live Demo</a>
            <a className="text-sm px-3 py-2 border border-slate-700 rounded-md">Code</a>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Projects
