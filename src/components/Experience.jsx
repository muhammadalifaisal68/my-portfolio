import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const defaultExperience = [
  {
    title: "Software Engineering Intern",
    company: "Zypher Enterprises",
    duration: "Ongoing",
    type: "work",
    description: "Currently working on real-world IT tasks. Improving skills in communication, technical support, and workflow handling. Gaining exposure to industry tools and professional practices."
  },
  {
    title: "Software Engineering Intern",
    company: "Tareenity",
    duration: "6 Weeks — Completed",
    type: "work",
    description: "Gained hands-on experience in basic IT and technical tasks. Learned practical problem-solving and teamwork in a professional environment. Built multiple real-world websites."
  },
  {
    title: "F.Sc (Computer Science)",
    company: "Punjab Group of Colleges",
    duration: "2023 – 2025 | 847/1200 (70.58%)",
    type: "education",
    description: "Studied Computer Science with focus on programming fundamentals, mathematics, and physics."
  },
  {
    title: "Diploma in Information Technology (DIT)",
    company: "Brains Institute, Peshawar",
    duration: "2023 – 2024",
    type: "education",
    description: "Comprehensive diploma covering IT fundamentals, networking, software development basics, and practical computer skills."
  },
  {
    title: "Matriculation (Science)",
    company: "Saint Francis High School, Hayatabad",
    duration: "2013 – 2023 | 875/1100 (79.54%)",
    type: "education",
    description: "Completed matriculation with Science subjects. Strong foundation in Mathematics, Physics, and Chemistry."
  },
]

export default function Experience({ darkMode }) {
  const [experience, setExperience] = useState(defaultExperience)
  const [filter, setFilter] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('experience') || '[]')
    if (data.length > 0) setExperience(data)
  }, [])

  const filtered = filter === 'all' ? experience : experience.filter(e => e.type === filter)

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">My Journey</span>
        <h2 className={`text-4xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Experience & Education</h2>
      </motion.div>

      <div className="flex gap-3 justify-center mb-8">
        {[
          { id: 'all', label: 'All' },
          { id: 'work', label: 'Work' },
          { id: 'education', label: 'Education' },
        ].map(tab => (
          <motion.button key={tab.id} onClick={() => setFilter(tab.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${filter === tab.id
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {tab.label}
          </motion.button>
        ))}
      </div>

      <div className="space-y-6 relative">
        <div className={`absolute left-5 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
        {filtered.map((exp, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5 }} whileHover={{ x: 6 }}
            className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} border rounded-2xl p-6 ml-12 transition-all duration-300 relative shadow-sm`}>
            <div className={`absolute -left-9 top-6 w-4 h-4 rounded-full border-2 ${exp.type === 'work' ? 'bg-blue-500 border-blue-300' : 'bg-purple-500 border-purple-300'}`} />
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mt-1 shrink-0 ${exp.type === 'work' ? 'bg-blue-600/20 text-blue-400' : 'bg-purple-600/20 text-purple-400'}`}>
                  {exp.type === 'work' ? '💼' : '🎓'}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-lg font-bold text-blue-400">{exp.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${exp.type === 'work' ? 'bg-blue-600/20 text-blue-400' : 'bg-purple-600/20 text-purple-400'}`}>
                      {exp.type === 'work' ? 'Work' : 'Education'}
                    </span>
                  </div>
                  <p className={`font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{exp.company}</p>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{exp.duration}</p>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}