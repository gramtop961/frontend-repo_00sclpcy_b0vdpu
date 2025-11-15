import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/50 bg-black/30 border-b border-white/10"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded-md bg-gradient-to-br from-pink-400 via-violet-400 to-blue-400 shadow-lg shadow-pink-500/30" />
            <span className="font-bold tracking-tight text-white">AIML Developer</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition"><Linkedin size={18} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-md shadow shadow-fuchsia-500/30">
              <Mail size={16} /> Hire Me
            </a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden text-white/90">{open ? <X /> : <Menu />}</button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 px-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition"><Linkedin size={18} /></a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
