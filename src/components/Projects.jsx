import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const getStoredData = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue
  } catch {
    return defaultValue
  }
}

const defaultProjects = [
  {
    id: 1,
    title: 'Data Analysis with Python & Excel',
    description: 'Performed data analysis using Python and Excel on datasets to identify trends and patterns. Created visualizations and reports to present findings.',
    tags: ['Python', 'Excel', 'Data Analysis'],
    category: 'Data Analytics',
    icon: '📊'
  },
  {
    id: 2,
    title: 'SQL Reporting',
    description: 'Practiced SQL queries for data retrieval and reporting from structured databases. Created complex joins, subqueries, and aggregations.',
    tags: ['SQL', 'Database', 'Reporting'],
    category: 'Database',
    icon: '🗄️'
  },
  {
    id: 3,
    title: 'Analysis Reports',
    description: 'Created analysis reports and spreadsheets to present findings clearly using Excel functions and charts.',
    tags: ['Excel', 'Data Analysis', 'Reporting'],
    category: 'Data Analytics',
    icon: '📈'
  }
]

const categories = ['All', 'Data Analytics', 'Database', 'Frontend', 'Backend', 'Full Stack']

export default function Projects({ darkMode, cursorEnter, cursorLeave }) {
  const [filter, setFilter] = useState('All')
  const projects = getStoredData('portfolio_projects', defaultProjects)

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
            My Work
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === category ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-600 hover:text-gray-900'}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => cursorEnter?.('hover')}
                onMouseLeave={cursorLeave}
                className={`group rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}
              >
                {/* Project Icon */}
                <div className="relative h-40 overflow-hidden">
                  <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-50">{project.icon || '🚀'}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
