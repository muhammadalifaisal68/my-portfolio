import { useState, useEffect } from 'react'

export default function Experience() {
  const [experience, setExperience] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('experience') || '[]')
    setExperience(data)
  }, [])

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">Experience & Education</h2>
      {experience.length === 0 ? (
        <p className="text-center text-gray-400">No experience yet. Add in Admin panel!</p>
      ) : (
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <h3 className="text-lg font-semibold text-blue-400">{exp.title}</h3>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
              <p className="text-gray-400 text-sm mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}