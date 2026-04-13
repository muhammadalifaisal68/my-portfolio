import { useState } from 'react'

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'} backdrop-blur-md border-b transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-400">MAF.</span>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#skills" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition`}>Skills</a>
          <a href="#projects" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition`}>Projects</a>
          <a href="#internship" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition`}>Internship</a>
          <a href="#experience" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition`}>Experience</a>
          <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition`}>Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <a href="#contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white transition">
            Hire Me
          </a>
          <button className={`md:hidden ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
      {open && (
        <div className={`md:hidden px-6 pb-4 flex flex-col gap-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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