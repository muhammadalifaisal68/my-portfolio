import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const defaultProjects = [
  { title: "Data Analysis with Python & Excel", description: "Performed basic data analysis using Python and Excel on small datasets to identify trends and patterns.", technologies: ["Python", "Excel"] },
  { title: "SQL Reporting", description: "Practiced SQL queries for data retrieval and reporting from structured databases.", technologies: ["SQL"] },
  { title: "Analysis Reports", description: "Created simple analysis reports and spreadsheets to present findings clearly.", technologies: ["Excel", "Python"] }
]

export default function Projects({ darkMode }) {
  const [projects, setProjects] = useState([])
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('projects') || '[]')
    setProjects(data.length > 0 ? data : defaultProjects)
  }, [])

  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What I've Built</span>
        <h2 className="text-4xl font-bold mt-2">Projects</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59,130,246,0.15)' }}
            className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-2xl p-6 transition-all duration-300`}>
            <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">💼</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-400">{p.title}</h3>
            <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.technologies?.map(t => (
                <span key={t} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-950 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}