import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="inline-block bg-green-600 text-black text-sm px-3 py-1 rounded-full">Available for work</p>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight">Привіт, я <span className="text-neonpurple">Fronzen548</span> 👋</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">Node.js Developer & Full-Stack Enthusiast. Створюю сучасні веб-додатки, API та інтерактивні інтерфейси. Люблю чистий код і красивий дизайн.</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-3 bg-neonpurple rounded-md font-medium">Переглянути проєкти</a>
            <a href="#contact" className="px-5 py-3 border border-slate-700 rounded-md">Зв'язатися</a>
          </div>
        </motion.div>
      </div>

      <div>
        <div className="w-full h-80 rounded-xl bg-gradient-to-br from-slate-900 via-[#0b1220] to-[#08101a] border border-slate-800 p-4">
          {/* Здесь можно вставить Canvas Three.js или Lottie-анимацию */}
          <div className="w-full h-full flex items-center justify-center text-slate-400">3D Canvas / Lottie placeholder</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
