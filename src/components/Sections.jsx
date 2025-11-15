export function About() {
  return (
    <section id="about" className="relative bg-[#0b0b14] text-white py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-200 to-indigo-200">About Me</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I’m an AI/ML developer focused on building production-ready models and systems. My toolkit spans deep learning, classical ML, and MLOps. When not optimizing loss curves, I’m drawing inspiration from anime aesthetics to design playful, futuristic interfaces.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-white/10 p-4 bg-white/5">LLMs & NLP</div>
              <div className="rounded-lg border border-white/10 p-4 bg-white/5">Computer Vision</div>
              <div className="rounded-lg border border-white/10 p-4 bg-white/5">MLOps & Deployment</div>
              <div className="rounded-lg border border-white/10 p-4 bg-white/5">Data Engineering</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-indigo-500/20" />
            <p className="mt-3 text-xs text-white/60">Anime-inspired visuals meet cutting-edge AI.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    {
      title: 'LLM Chat Assistant',
      desc: 'Conversational agent with retrieval augmented generation and tool use.',
      tech: ['Python', 'FastAPI', 'LangChain', 'Pinecone'],
    },
    {
      title: 'Vision Model Deployment',
      desc: 'Real-time detection pipeline served with Triton Inference Server.',
      tech: ['PyTorch', 'Docker', 'Triton', 'Kafka'],
    },
    {
      title: 'MLOps Platform',
      desc: 'CI/CD for ML with feature store and experiment tracking.',
      tech: ['MLflow', 'Feast', 'Airflow', 'Kubernetes'],
    },
  ]

  return (
    <section id="projects" className="relative bg-[#0b0b14] text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-200 to-indigo-200">Featured Projects</h2>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Need something like this?</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-pink-500/10 to-indigo-500/10" />
              <h3 className="relative text-xl font-semibold">{p.title}</h3>
              <p className="relative mt-2 text-white/80 text-sm">{p.desc}</p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    'PyTorch', 'TensorFlow', 'scikit-learn', 'LangChain', 'OpenAI APIs', 'FastAPI', 'Airflow', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis'
  ]
  return (
    <section id="skills" className="relative bg-[#0b0b14] text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-200 to-indigo-200">Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((s) => (
            <div key={s} className="text-sm px-3 py-2 rounded-md border border-white/10 bg-white/5 text-white/90">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0b14] text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-200 to-indigo-200">Let’s collaborate</h2>
            <p className="mt-4 text-white/80">Have an idea or role that needs strong AI/ML foundations and end-to-end delivery? I’d love to chat.</p>
          </div>
          <form className="space-y-4">
            <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/50" placeholder="Your name" />
            <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/50" placeholder="Email" />
            <textarea rows="5" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/50" placeholder="Tell me about your project" />
            <button type="button" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 text-white font-semibold px-5 py-3 rounded-md shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
