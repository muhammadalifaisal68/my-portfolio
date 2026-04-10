import { useState, useEffect } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('projects') || '[]')
    setProjects(data)
  }, [])

  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      {projects.length === 0 ? (
        <p className="text-center text-gray-400">No projects yet. Add them in Admin panel!</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.technologies?.map(t => (
                  <span key={t} className="bg-blue-950 text-blue-300 px-3 py-1 rounded-full text-xs">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}