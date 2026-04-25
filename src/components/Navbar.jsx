import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav role="navigation" aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? darkMode ? 'bg-gray-950/95 border-gray-800 shadow-lg shadow-black/20' : 'bg-white/95 border-gray-200 shadow-lg'
        : darkMode ? 'bg-transparent border-transparent' : 'bg-transparent border-transparent'} backdrop-blur-md border-b`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a href="#" whileHover={{ scale: 1.05 }} className="text-xl font-bold text-blue-400 no-underline">MAF.</motion.a>
        <div className="hidden md:flex gap-8 text-sm" role="menubar">
          {navItems.map(item => (
            <motion.a key={item} href={`#${item}`} role="menuitem"
              whileHover={{ y: -2 }}
              onClick={() => setActive(item)}
              className={`transition capitalize font-medium ${active === item ? 'text-blue-400' : darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`}>
              {item}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode"
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
            {darkMode ? '☀️' : '🌙'}
          </motion.button>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white transition font-medium shadow-lg shadow-blue-500/20">
            Hire Me
          </motion.a>
          <button className={`md:hidden p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'} transition`}
            onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} className={`block h-0.5 w-full ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} transition-all`} />
              <motion.span animate={{ opacity: open ? 0 : 1 }} className={`block h-0.5 w-full ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} transition-all`} />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} className={`block h-0.5 w-full ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} transition-all`} />
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className={`md:hidden px-6 pb-4 flex flex-col gap-2 ${darkMode ? 'bg-gray-950/95' : 'bg-white/95'}`}>
            {navItems.map(item => (
              <a key={item} href={`#${item}`} onClick={() => setOpen(false)}
                className={`py-2 px-4 rounded-lg capitalize font-medium transition ${darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-400' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-500'}`}>
                {item}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-medium transition">
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}