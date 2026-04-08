import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-400">MAF.</span>
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#internship" className="hover:text-blue-400 transition">Internship</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
        <a href="#contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm transition">
          Hire Me
        </a>
        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm text-gray-300">
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#internship" onClick={() => setOpen(false)}>Internship</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}