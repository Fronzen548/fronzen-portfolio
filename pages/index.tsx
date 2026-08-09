import Head from 'next/head'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fronzen548 · Portfolio</title>
        <meta name="description" content="Cyberpunk-style portfolio of Fronzen" />
        <meta property="og:title" content="Fronzen548 — Portfolio" />
      </Head>
      <main className="min-h-screen bg-cyberbg text-white">
        <div className="container mx-auto px-6 py-12">
          <Hero />
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-6">Мої роботи</h2>
            <Projects />
          </section>
        </div>
      </main>
    </>
  )
}
