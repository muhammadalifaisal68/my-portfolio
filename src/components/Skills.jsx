import { useState, useEffect } from 'react'

export default function Skills() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('skills') || '[]')
    setSkills(data)
  }, [])

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
      {skills.length === 0 ? (
        <p className="text-center text-gray-400">No skills yet. Add them in Admin panel!</p>
      ) : (
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((s, i) => (
            <span key={i} className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm">{s.title}</span>
          ))}
        </div>
      )}
    </section>
  )
}