import { useState, useEffect } from 'react'

const defaultSkills = [
  "Python", "Data Analysis with Python", "SQL for Data Science",
  "Microsoft Excel", "Cloud Computing", "Operating Systems",
  "Technical Support", "Data Analytics Fundamentals"
]

export default function Skills({ darkMode }) {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('skills') || '[]')
    setSkills(data.length > 0 ? data.map(s => s.title) : defaultSkills)
  }, [])

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What I Know</span>
        <h2 className="text-4xl font-bold mt-2">Technical Skills</h2>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, i) => (
          <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium border transition hover:border-blue-400 hover:text-blue-400 ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}