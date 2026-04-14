import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const defaultSkills = [
  "Python", "Data Analysis with Python", "SQL for Data Science",
  "Microsoft Excel", "Cloud Computing", "Operating Systems",
  "Technical Support", "Data Analytics Fundamentals"
]

export default function Skills({ darkMode }) {
  const [skills, setSkills] = useState([])
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('skills') || '[]')
    setSkills(data.length > 0 ? data.map(s => s.title) : defaultSkills)
  }, [])

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What I Know</span>
        <h2 className="text-4xl font-bold mt-2">Technical Skills</h2>
      </motion.div>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, i) => (
          <motion.span key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -3 }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition cursor-default ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-400' : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-500'}`}>
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  )
}