import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const defaultExperience = [
  { title: "Software Engineering Intern", company: "Tareenity", duration: "Internship — Recently Completed", description: "Gained hands-on industry experience in software engineering and data-related tasks under experienced mentors.", type: 'work' },
  { title: "Diploma in Information Technology (DIT)", company: "Brains Institute, Peshawar", duration: "2023", description: "Completed Diploma in Information Technology.", type: 'education' },
  { title: "FSC", company: "Punjab Group of Colleges", duration: "2022", description: "Completed FSC from Punjab Group of Colleges.", type: 'education' },
  { title: "Matric", company: "St Francis High School, Hayatabad", duration: "2020", description: "Completed Matric from St Francis High School.", type: 'education' }
]

export default function Experience({ darkMode }) {
  const [experience, setExperience] = useState(defaultExperience)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('experience') || '[]')
    if (data.length > 0) setExperience(data.map(e => ({ ...e, type: e.type || 'work' })))
  }, [])

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-20" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-16">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">My Journey</span>
        <h2 className={`text-4xl md:text-5xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Experience & Education</h2>
        <p className={`mt-4 max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          My professional and academic milestones so far.
        </p>
      </motion.div>

      <div className="relative">
        <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} md:-translate-x-px`} />

        {experience.map((exp, i) => {
          const isLeft = i % 2 === 0
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-blue-300 z-10 md:-translate-x-2" />

              <div className={`ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg group`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${exp.type === 'work' ? 'bg-blue-600/20 text-blue-400' : 'bg-purple-600/20 text-purple-400'}`}>
                      {exp.type === 'work' ? '💼' : '🎓'}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition">{exp.title}</h3>
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.company}</p>
                    </div>
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                    {exp.duration}
                  </div>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
