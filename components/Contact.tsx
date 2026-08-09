import React, { useState } from 'react'
import { FiMail, FiSend, FiGithub, FiMessageSquare, FiArrowRight } from 'react-icons/fi'

const contactLinks = [
  { label: 'Email', value: 'fronzen548@gmail.com', icon: FiMail, href: 'mailto:fronzen548@gmail.com' },
  { label: 'Telegram', value: '@fronzen548', icon: FiMessageSquare, href: 'https://t.me/fronzen548' },
  { label: 'GitHub', value: 'Fronzen548', icon: FiGithub, href: 'https://github.com/Fronzen548' }
]

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Відправка...')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (response.ok) {
        setStatus('Повідомлення надіслано!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Помилка відправки. Спробуйте пізніше.')
      }
    } catch (error) {
      setStatus('Помилка відправки. Спробуйте пізніше.')
    }
  }

  return (
    <section id="contact" className="mt-24 rounded-[2rem] border border-white/10 bg-[#0b0915]/90 p-8 shadow-[0_45px_90px_rgba(0,0,0,0.2)]">
      <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
        <div>
          <span className="text-xs tracking-[0.4em] uppercase text-neonblue">Контакти</span>
          <h2 className="mt-3 text-4xl font-bold">Зв'язатися зі мною</h2>
          <p className="mt-4 max-w-xl text-slate-300">Маю бажання працювати над новими проєктами. Напишіть, якщо потрібен чистий фронтенд, складний бекенд або інтерактивна 3D візуалізація.</p>
          <div className="mt-10 grid gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-[#0a0814]/80 p-5 transition hover:border-neonblue/30 hover:bg-[#100e1f]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14122a] text-2xl text-neonpurple transition group-hover:scale-105">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="text-sm text-slate-400">{item.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-[#11101f]/90 p-8 shadow-[0_35px_70px_rgba(0,0,0,0.15)]">
          <div className="grid gap-5">
            <label className="block">
              <span className="text-sm text-slate-400">Ім'я</span>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-3xl border border-white/10 bg-[#0a0915]/90 px-4 py-3 text-white outline-none transition focus:border-neonpurple/60" placeholder="Ваше ім'я" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-400">Email</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-3xl border border-white/10 bg-[#0a0915]/90 px-4 py-3 text-white outline-none transition focus:border-neonpurple/60" placeholder="example@mail.com" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-400">Повідомлення</span>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="mt-2 w-full rounded-3xl border border-white/10 bg-[#0a0915]/90 px-4 py-3 text-white outline-none transition focus:border-neonpurple/60" placeholder="Розкажіть про ваш проєкт"></textarea>
            </label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-neonblue px-6 py-3 font-semibold text-black transition hover:brightness-110">
              Відправити
              <FiSend />
            </button>
            {status && <p className="text-sm text-slate-300">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
