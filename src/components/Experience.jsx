import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

export default function Experience() {
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "experience"]{
      title,
      company,
      duration,
      description
    }`).then(data => setExperiences(data))
  }, [])

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">Experience & Education</h2>
      {experiences.length === 0 ? (
        <p className="text-center text-gray-400">No experience yet. Add them in Sanity CMS!</p>
      ) : (
        <div className="space-y-6">
          {experiences.map(exp => (
            <div key={exp.title} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
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