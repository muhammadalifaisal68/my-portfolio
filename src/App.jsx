import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
        <div className="text-center">
          <motion.div className="relative w-24 h-24 mx-auto mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 border-4 border-purple-500 border-b-transparent rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">👨‍💻</div>
          </motion.div>
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-xl font-bold mb-2">
            Muhammad Ali Faisal
          </motion.h2>
          <motion.p
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            className="text-blue-400 text-sm">
            Loading Portfolio...
          </motion.p>
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} min-h-screen font-sans scroll-smooth transition-colors duration-300 relative`}>

        {/* Particles background */}
        {darkMode && <Particles />}

        {/* Custom cursor glow */}
        <motion.div
          className="fixed w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 pointer-events-none z-50 mix-blend-screen"
          animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
        <motion.div
          className="fixed w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-50"
          animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
          transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
        />

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="relative z-10">
          <Hero darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Internship darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 z-40 text-xl">
          ↑
        </motion.button>
      </motion.main>
    </AnimatePresence>
  )
}

export default App