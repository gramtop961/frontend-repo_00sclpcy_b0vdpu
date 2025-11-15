import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b0b14]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,128,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.2),transparent_40%)]" />
      </div>

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[120vh] w-[120vw] max-w-none pointer-events-auto">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10">AIML • Portfolio • Anime vibes</p>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-300 via-fuchsia-200 to-indigo-200 drop-shadow-[0_2px_24px_rgba(255,64,160,0.25)]">
            Building Intelligent Systems with Style
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-xl">
            I craft machine learning models, deploy end-to-end AI pipelines, and design delightful, interactive experiences inspired by anime and futuristic tech.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 text-white font-semibold px-5 py-3 rounded-md shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition">View Projects</a>
            <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-white/10 text-white font-semibold px-5 py-3 rounded-md border border-white/10 hover:bg-white/15 transition">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
