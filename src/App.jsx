import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Projects, Skills, Contact } from './components/Sections'

function App() {
  return (
    <div className="bg-[#070711] text-white relative min-h-screen">
      {/* Soft anime neon gradient backdrop */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1200px_600px_at_-10%_-10%,#ff4fa3_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(900px_500px_at_110%_-10%,#6366f1_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(800px_500px_at_50%_110%,#38bdf8_0%,transparent_60%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-[#0b0b14]/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} AIML Developer — Crafted with anime vibes and cutting-edge tech.</p>
          <div className="text-xs text-white/50">Powered by React • Tailwind • Spline</div>
        </div>
      </footer>
    </div>
  )
}

export default App
