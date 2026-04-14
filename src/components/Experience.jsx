import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const defaultExperience = [
  { title: "Software Engineering Intern", company: "Tareenity", duration: "Internship — Recently Completed", description: "Gained hands-on industry experience in software engineering and data-related tasks under experienced mentors." },
  { title: "Diploma in Information Technology (DIT)", company: "Brains Institute, Peshawar", duration: "2023", description: "Completed Diploma in Information Technology." },
  { title: "FSC", company: "Punjab Group of Colleges", duration: "2022", description: "Completed FSC from Punjab Group of Colleges." },
  { title: "Matric", company: "St Francis High School, Hayatabad", duration: "2020", description: "Completed Matric from St Francis High School." }
]

export default function Experience({ darkMode }) {
  const [experience, setExperience] = useState([])
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('experience') || '[]')
    setExperience(data.length > 0 ? data : defaultExperience)
  }, [])

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">My Journey</span>
        <h2 className="text-4xl font-bold mt-2">Experience & Education</h2>
      </motion.div>
      <div className="space-y-6 relative">
        {/* Timeline line */}
        <div className={`absolute left-5 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
        {experience.map((exp, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ x: 6 }}
            className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-gray-50 border-gray-200 hover:border-blue-400'} border rounded-2xl p-6 ml-12 transition-all duration-300 relative`}>
            {/* Timeline dot */}
            <div className="absolute -left-9 top-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-blue-300" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mt-1 shrink-0">🎓</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400">{exp.title}</h3>
                <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.company}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{exp.duration}</p>
                <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}