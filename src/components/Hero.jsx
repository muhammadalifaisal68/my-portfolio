import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const titles = [
  'Software Engineer',
  'Data Analytics Student', 
  'Web Developer',
  'Problem Solver'
]

export default function Hero({ darkMode }) {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    const current = titles[titleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1500)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setTitleIndex((titleIndex + 1) % titles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, titleIndex])

  useEffect(() => {
    const interval1 = setInterval(() => setCount1(c => c < 5 ? c + 1 : 5), 200)
    const interval2 = setInterval(() => setCount2(c => c < 8 ? c + 1 : 8), 150)
    return () => { clearInterval(interval1); clearInterval(interval2) }
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-blue-950 via-gray-950 to-gray-950' : 'bg-gradient-to-br from-blue-50 via-white to-white'} z-0`} />
      
      {/* Animated background circles */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Picture */}
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, type: 'spring' }}
          className="mb-8 relative">
          <motion.div whileHover={{ scale: 1.05 }} className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-500/30">
            <img src="/images/profile.jpeg" alt="Muhammad Ali Faisal" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
        </motion.div>

        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 block">
          Welcome to my portfolio
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className={`text-5xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Muhammad Ali Faisal
        </motion.h1>

        {/* Typing Animation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="h-8 mb-6">
          <p className="text-xl font-medium text-blue-400">
            {displayed}<span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className={`max-w-2xl mx-auto leading-relaxed mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Motivated Software Engineer and Data Analytics student with hands-on experience in Python,
          SQL, Excel, and cloud computing. Recently completed an internship at
          <span className="text-blue-400 font-medium"> Tareenity</span> where I built
          multiple real-world websites. Seeking opportunities to grow professionally.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="flex gap-4 justify-center flex-wrap mb-8">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition font-medium text-white shadow-lg shadow-blue-500/30">
            Hire Me
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href="#projects" className={`border border-blue-600 hover:bg-blue-600/20 px-8 py-3 rounded-full transition font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            View My Work
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href="#internship" className={`border px-8 py-3 rounded-full transition font-medium ${darkMode ? 'border-gray-600 hover:bg-gray-800 text-gray-300' : 'border-gray-300 hover:bg-gray-100 text-gray-600'}`}>
            Internship Work
          </motion.a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="flex gap-4 mb-12">
          {[
            { href: "https://www.linkedin.com/in/muhammad-ali-faisal", bg: "bg-blue-600 hover:bg-blue-700", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
            { href: "https://www.instagram.com/_ali.faisal9?igsh=MWJqank1dGVvZXdnYQ%3D%3D&utm_source=qr", bg: "bg-gradient-to-br from-pink-500 to-purple-600 hover:opacity-80", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
            { href: "https://www.facebook.com/share/1BaXRKi95J/?mibextid=wwXIfr", bg: "bg-blue-800 hover:bg-blue-900", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
          ].map((social, i) => (
            <motion.a key={i} href={social.href} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 ${social.bg} rounded-full flex items-center justify-center text-white transition`}>
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Animated Counters */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">{count1}+</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Websites Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">{count2}+</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Certifications</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">1</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Internship</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}