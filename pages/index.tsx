import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import Stats from '../components/Stats'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fronzen548 · Portfolio</title>
        <meta name="description" content="Cyberpunk-style portfolio of Fronzen with modern full-stack projects and 3D visuals." />
        <meta property="og:title" content="Fronzen548 — Portfolio" />
        <meta property="og:description" content="Full-Stack developer portfolio with engaging dark cyberpunk design, project showcase, tech stack and contact form." />
      </Head>
      <main className="min-h-screen bg-cyberbg text-white">
        <Navigation />
        <div className="container mx-auto px-6 py-8">
          <section id="home" className="pt-8">
            <Hero />
          </section>

          <section className="mt-20 rounded-[2rem] border border-white/10 bg-[#0c0b16]/75 p-8 shadow-[0_45px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <TechStack />
            <Stats />
          </section>

          <About />

          <section id="projects" className="mt-24">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-xs tracking-[0.4em] uppercase text-neonblue">Проєкти</span>
                <h2 className="mt-3 text-4xl font-bold">Мої роботи</h2>
              </div>
            </div>
            <Projects />
          </section>

          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
