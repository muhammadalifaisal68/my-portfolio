import { useState, useEffect } from 'react'

const defaultProjects = [
  { title: "Data Analysis with Python & Excel", description: "Performed basic data analysis using Python and Excel on small datasets to identify trends and patterns.", technologies: ["Python", "Excel"] },
  { title: "SQL Reporting", description: "Practiced SQL queries for data retrieval and reporting from structured databases.", technologies: ["SQL"] },
  { title: "Analysis Reports", description: "Created simple analysis reports and spreadsheets to present findings clearly.", technologies: ["Excel", "Python"] }
]

export default function Projects({ darkMode }) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('projects') || '[]')
    setProjects(data.length > 0 ? data : defaultProjects)
  }, [])

  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What I've Built</span>
        <h2 className="text-4xl font-bold mt-2">Projects</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-gray-50 border-gray-200 hover:border-blue-400'} border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10`}>
            <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">💼</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-400">{p.title}</h3>
            <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.technologies?.map(t => (
                <span key={t} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-950 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}