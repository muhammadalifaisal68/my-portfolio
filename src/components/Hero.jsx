import { motion } from 'framer-motion'

const getStoredData = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue
  } catch {
    return defaultValue
  }
}

const defaultProfile = {
  name: 'Muhammad Ali Faisal',
  title: 'Computer Science Student',
  tagline: 'CS Student | AI & Data Science Enthusiast',
  bio: 'Dedicated Computer Science student with a strong academic background and Diploma in Information Technology (DIT). Passionate about artificial intelligence, data science, and emerging technologies.',
  location: 'Hayatabad, Peshawar, Pakistan',
  email: 'alifaisal68@icloud.com',
  phone: '+92 317-6185763'
}

const defaultSocials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-ali-faisal-65a6593aa', icon: 'linkedin' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1BaXRKi95J/', icon: 'facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/_ali.faisal9', icon: 'instagram' },
  { name: 'GitHub', url: 'https://github.com', icon: 'github' }
]

const SocialIcon = ({ type, className = "w-5 h-5" }) => {
  const icons = {
    linkedin: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    facebook: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    instagram: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    github: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  }
  return icons[type] || icons.github
}

export default function Hero({ darkMode, cursorEnter, cursorLeave }) {
  const profile = getStoredData('portfolio_profile', defaultProfile)
  const socials = getStoredData('portfolio_socials', defaultSocials)

  const nameParts = (profile.name || 'Muhammad Ali Faisal').split(' ')
  const firstName = nameParts[0] || 'Muhammad'
  const lastName = nameParts.slice(1).join(' ') || 'Ali Faisal'

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className={`absolute inset-0 ${darkMode ? 'opacity-100' : 'opacity-50'}`}>
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(${darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
            {/* Status Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {firstName}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className={`text-2xl sm:text-3xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {profile.title || 'Computer Science Student'}
            </motion.h2>

            {/* Bio */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className={`text-lg mb-8 max-w-xl mx-auto lg:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {profile.bio || 'Dedicated Computer Science student passionate about AI, Data Science, and emerging technologies.'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                onMouseEnter={() => cursorEnter?.('hover')}
                onMouseLeave={cursorLeave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => cursorEnter?.('hover')}
                onMouseLeave={cursorLeave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 font-semibold rounded-full border-2 transition-colors ${
                  darkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              {(socials.length > 0 ? socials : defaultSocials).map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => cursorEnter?.('hover')}
                  onMouseLeave={cursorLeave}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className={`p-2 rounded-lg transition-colors ${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
                  title={social.name}
                >
                  <SocialIcon type={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Code Block */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:flex justify-center">
            <div className="relative">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 w-80 h-80 rounded-full border border-dashed border-blue-500/30" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute inset-4 w-72 h-72 rounded-full border border-dashed border-purple-500/30" />

              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }} className={`relative w-72 h-80 rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-200'}`}>
                <div className={`flex items-center gap-2 px-4 py-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className={`ml-2 text-xs font-mono ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>developer.js</span>
                </div>
                <div className="p-4 font-mono text-xs leading-relaxed">
                  <div><span className="text-purple-500">const</span> <span className="text-blue-400">developer</span> <span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>=</span> <span className="text-yellow-500">{'{'}</span></div>
                  <div className="ml-4"><span className="text-cyan-400">name</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>:</span> <span className="text-green-400">"{firstName}"</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>,</span></div>
                  <div className="ml-4"><span className="text-cyan-400">title</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>:</span> <span className="text-green-400">"CS Student"</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>,</span></div>
                  <div className="ml-4"><span className="text-cyan-400">skills</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>:</span> <span className="text-yellow-500">[</span></div>
                  <div className="ml-8"><span className="text-green-400">"Python"</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>,</span> <span className="text-green-400">"SQL"</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>,</span></div>
                  <div className="ml-8"><span className="text-green-400">"Data Analytics"</span></div>
                  <div className="ml-4"><span className="text-yellow-500">]</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>,</span></div>
                  <div className="ml-4"><span className="text-cyan-400">ielts</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>:</span> <span className="text-green-400">"6.5 Band"</span></div>
                  <div><span className="text-yellow-500">{'}'}</span><span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>;</span></div>
                </div>
                <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="absolute bottom-4 right-4 w-2 h-4 bg-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
            <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Scroll Down</span>
            <svg className={`w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
