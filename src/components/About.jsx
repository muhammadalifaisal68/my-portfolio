import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const cards = [
    { icon: '🎯', title: 'Mission', desc: 'To build impactful software solutions and grow as a professional engineer.' },
    { icon: '💡', title: 'Approach', desc: 'I tackle problems with curiosity, breaking them into small manageable steps.' },
    { icon: '🚀', title: 'Goal', desc: 'Land a full-time role where I can contribute, learn and grow with a great team.' },
  ]

  return (
    <section id="about" aria-label="About section" className="py-20 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Who I Am</span>
        <h2 className={`text-4xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4">
          <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Hi! I'm <span className="text-blue-400 font-semibold">Muhammad Ali Faisal</span>, a passionate Software Engineer and Data Analytics student based in <span className="text-blue-400 font-semibold">Peshawar, Pakistan</span>.
          </p>
          <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I recently completed an internship at <span className="text-blue-400 font-semibold">Tareenity</span>, where I built multiple real-world websites and gained hands-on experience in software engineering.
          </p>
          <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My passion lies in turning data into insights and building clean, functional web applications. I'm constantly learning and improving my skills through online courses and real projects.
          </p>
          <div className="flex gap-4 pt-4 flex-wrap">
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition shadow-lg shadow-blue-500/20">
              Let's Work Together 🤝
            </motion.a>
            <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 border rounded-full font-medium transition ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}>
              See My Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}
          className="grid gap-4">
          {cards.map((card, i) => (
            <motion.div key={i} whileHover={{ x: 6, scale: 1.02 }}
              className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-gray-50 border-gray-200 hover:border-blue-400'} border rounded-2xl p-5 flex items-start gap-4 transition-all duration-300`}>
              <span className="text-3xl">{card.icon}</span>
              <div>
                <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{card.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fun facts */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }}
        className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
        {[
          { icon: '📍', label: 'Location', value: 'Peshawar, Pakistan' },
          { icon: '🎓', label: 'Education', value: 'DIT Graduate' },
          { icon: '💼', label: 'Status', value: 'Open to Work' },
          { icon: '🌐', label: 'Languages', value: 'Urdu, English' },
        ].map((fact, i) => (
          <motion.div key={i} whileHover={{ y: -4 }}
            className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-2xl p-4 text-center transition-all duration-300`}>
            <span className="text-2xl mb-2 block">{fact.icon}</span>
            <p className={`text-xs font-medium mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{fact.label}</p>
            <p className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{fact.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}