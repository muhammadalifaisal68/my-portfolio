import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Particles from './components/Particles'

// Lazy load below-fold components
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Internship = lazy(() => import('./components/Internship'))
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))

// Loading fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  </div>
)

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) return saved === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  
  // Loading state
  const [loading, setLoading] = useState(true)
  
  // Custom cursor state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isMobile, setIsMobile] = useState(false)
  
  // Scroll position
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Dark mode effect
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  // Loading timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Mouse tracking
  useEffect(() => {
    if (isMobile) return
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cursor handlers
  const cursorEnter = (variant = 'hover') => setCursorVariant(variant)
  const cursorLeave = () => setCursorVariant('default')

  // Cursor variants
  const cursorVariants = {
    default: { width: 32, height: 32, backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.4)' },
    hover: { width: 48, height: 48, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgba(59, 130, 246, 0.6)' },
    text: { width: 100, height: 100, backgroundColor: 'rgba(147, 51, 234, 0.15)', borderColor: 'rgba(147, 51, 234, 0.4)' }
  }

  // Loading screen
  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-950 to-purple-900/20" />
        
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/2 -left-1/2 w-full h-full"
          >
            <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-blue-500/20" />
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full border border-purple-500/10" />
          </motion.div>
        </div>

        <div className="text-center relative z-10">
          <motion.div className="relative w-28 h-28 mx-auto mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-3 border-4 border-purple-500 border-b-transparent rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-6 border-2 border-cyan-400 border-t-transparent rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-2xl font-bold mb-2"
          >
            Muhammad Ali Faisal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-blue-400 text-sm mb-6"
          >
            Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="w-48 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto"
          />
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} min-h-screen font-sans transition-colors duration-300 relative`}
      >
        {/* Particles */}
        {darkMode && <Particles />}

        {/* Custom cursor */}
        {!isMobile && (
          <>
            <motion.div
              className="fixed pointer-events-none z-50 rounded-full border hidden md:block"
              animate={{
                x: mousePos.x,
                y: mousePos.y,
                ...cursorVariants[cursorVariant]
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 28 }}
              style={{ translateX: '-50%', translateY: '-50%' }}
            />
            <motion.div
              className="fixed w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-50 hidden md:block"
              animate={{
                x: mousePos.x - 4,
                y: mousePos.y - 4,
                opacity: cursorVariant === 'hover' ? 0 : 1
              }}
              transition={{ type: 'spring', stiffness: 1000, damping: 35 }}
            />
          </>
        )}

        {/* Skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to content
        </a>

        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} cursorEnter={cursorEnter} cursorLeave={cursorLeave} />

        {/* Main content */}
        <div className="relative z-10" id="main-content">
          <Hero darkMode={darkMode} cursorEnter={cursorEnter} cursorLeave={cursorLeave} />

          <Suspense fallback={<SectionLoader />}>
            <About darkMode={darkMode} />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Skills darkMode={darkMode} />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Projects darkMode={darkMode} cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Internship darkMode={darkMode} />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Experience darkMode={darkMode} />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Contact darkMode={darkMode} />
          </Suspense>

          <Footer darkMode={darkMode} />
        </div>

        {/* Back to top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 z-40"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.main>
    </AnimatePresence>
  )
}

export default App
