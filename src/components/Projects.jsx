import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const defaultProjects = [
  { title: "Data Analysis with Python & Excel", description: "Performed basic data analysis using Python and Excel on small datasets to identify trends and patterns.", technologies: ["Python", "Excel"], featured: true },
  { title: "SQL Reporting Dashboard", description: "Practiced SQL queries for data retrieval and reporting from structured databases.", technologies: ["SQL", "Database"] },
  { title: "Analysis Reports", description: "Created simple analysis reports and spreadsheets to present findings clearly.", technologies: ["Excel", "Python"] }
]

export default function Projects({ darkMode }) {
  const [projects, setProjects] = useState(defaultProjects)
  const [filter, setFilter] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('projects') || '[]')
    if (data.length > 0) setProjects(data)
  }, [])

  const allTech = ['All', ...new Set(projects.flatMap(p => p.technologies || []))]
  const filtered = filter === 'All' ? projects : projects.filter(p => p.technologies?.includes(filter))
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <section id="projects" aria-label="Projects section" className="py-20 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What I've Built</span>
        <h2 className={`text-4xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
        <p className={`mt-4 max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          A collection of projects I've worked on, showcasing my skills in data analysis and web development.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
        className="flex gap-2 justify-center flex-wrap mb-8">
        {allTech.map(tech => (
          <motion.button key={tech} onClick={() => setFilter(tech)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === tech
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {tech}
          </motion.button>
        ))}
      </motion.div>

      {/* Featured project */}
      {featured && (
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ y: -4 }}
          className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'} border-2 rounded-2xl p-8 mb-6 transition-all duration-300 relative overflow-hidden`}>
          <div className="absolute top-4 right-4">
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">⭐ Featured</span>
          </div>
          <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 text-2xl">💼</div>
          <h3 className="text-2xl font-bold mb-3 text-blue-400">{featured.title}</h3>
          <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{featured.description}</p>
          <div className="flex flex-wrap gap-2">
            {featured.technologies?.map(t => (
              <span key={t} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-950 text-blue-300 border border-blue-800' : 'bg-blue-100 text-blue-700'}`}>{t}</span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Rest of projects */}
      <div className="grid md:grid-cols-2 gap-6">
        {rest.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 + 0.4, duration: 0.5 }} whileHover={{ y: -6 }}
            className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} border rounded-2xl p-6 transition-all duration-300 shadow-sm`}>
            <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 text-xl">💻</div>
            <h3 className="text-lg font-bold mb-2 text-blue-400">{p.title}</h3>
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