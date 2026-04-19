import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const defaultSkills = [
  { name: "Python", level: 75 },
  { name: "Data Analysis with Python", level: 70 },
  { name: "SQL for Data Science", level: 72 },
  { name: "Microsoft Excel", level: 85 },
  { name: "Cloud Computing", level: 60 },
  { name: "Operating Systems", level: 65 },
  { name: "Technical Support", level: 78 },
  { name: "Data Analytics Fundamentals", level: 73 },
]

export default function Skills({ darkMode }) {
  const [skills, setSkills] = useState(defaultSkills)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('skills') || '[]')
    if (data.length > 0) {
      setSkills(data.map((s, i) => ({ name: s.title || s.name, level: s.level || 70 })))
    }
  }, [])

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What I Know</span>
        <h2 className={`text-4xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} border rounded-xl p-4 transition-all duration-300 shadow-sm`}>
                <div className="flex justify-between mb-2">
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                  <span className="text-sm text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className={`w-full h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: i * 0.08 + 0.3, duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  )
}