import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const cards = [
    { icon: '🎯', title: 'Mission', desc: 'To build impactful software solutions and grow as a professional engineer in software development and data analytics.' },
    { icon: '💡', title: 'Approach', desc: 'I tackle problems with curiosity, breaking them into manageable steps and applying the right tools.' },
    { icon: '🚀', title: 'Goal', desc: 'Land a full-time role where I can contribute, learn, and grow with an experienced team.' },
  ]

  const certifications = [
    'Python Programming',
    'Data Analysis with Python',
    'Data Analytics Fundamentals',
    'SQL for Data Science',
    'Cloud Computing Basics',
    'Operating Systems Fundamentals',
    'Technical Support Fundamentals',
    'Microsoft Excel for Business',
  ]

  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Who I Am</span>
        <h2 className={`text-4xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4">
          <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Hi! I'm <span className="text-blue-400 font-semibold">Muhammad Ali Faisal</span>, a passionate Software Engineer and Computer Science student based in <span className="text-blue-400 font-semibold">Hayatabad, Peshawar, Pakistan</span>.
          </p>
          <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I recently completed internships at <span className="text-blue-400 font-semibold">Tareenity</span> (6 weeks) and am currently interning at <span className="text-blue-400 font-semibold">Zypher Enterprises</span>, gaining hands-on experience in software development and IT.
          </p>
          <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I hold an IELTS score of <span className="text-blue-400 font-semibold">6.5</span> and am proficient in English, Urdu, and Pashto. My passion lies in building clean web applications and turning data into meaningful insights.
          </p>
          <div className="flex gap-4 pt-4 flex-wrap">
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition shadow-lg shadow-blue-500/20">
              Let's Work Together
            </motion.a>
            <motion.a href="/CV.pdf" download="Muhammad_Ali_Faisal_CV.pdf" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 border rounded-full font-medium transition ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}>
              Download CV
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

      {/* Info cards */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { icon: '📍', label: 'Location', value: 'Hayatabad, Peshawar' },
          { icon: '🎓', label: 'Education', value: 'F.Sc & DIT Graduate' },
          { icon: '💼', label: 'Status', value: 'Open to Work' },
          { icon: '🌐', label: 'IELTS Band', value: '6.5' },
        ].map((fact, i) => (
          <motion.div key={i} whileHover={{ y: -4 }}
            className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-2xl p-4 text-center transition-all duration-300`}>
            <span className="text-2xl mb-2 block">{fact.icon}</span>
            <p className={`text-xs font-medium mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{fact.label}</p>
            <p className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{fact.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }}>
        <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>International Certifications</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <motion.div key={i} whileHover={{ x: 4 }}
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.05 + 0.6 }}
              className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300`}>
              <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{cert}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}