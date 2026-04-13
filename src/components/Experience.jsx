import { useState, useEffect } from 'react'

const defaultExperience = [
  { title: "Software Engineering Intern", company: "Tareenity", duration: "Internship — Recently Completed", description: "Gained hands-on industry experience in software engineering and data-related tasks under experienced mentors." },
  { title: "Diploma in Information Technology (DIT)", company: "Brains Institute, Peshawar", duration: "2023", description: "Completed Diploma in Information Technology." },
  { title: "FSC", company: "Punjab Group of Colleges", duration: "2022", description: "Completed FSC from Punjab Group of Colleges." },
  { title: "Matric", company: "St Francis High School, Hayatabad", duration: "2020", description: "Completed Matric from St Francis High School." }
]

export default function Experience({ darkMode }) {
  const [experience, setExperience] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('experience') || '[]')
    setExperience(data.length > 0 ? data : defaultExperience)
  }, [])

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
      <div className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">My Journey</span>
        <h2 className="text-4xl font-bold mt-2">Experience & Education</h2>
      </div>
      <div className="space-y-6">
        {experience.map((exp, i) => (
          <div key={i} className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-gray-50 border-gray-200 hover:border-blue-400'} border rounded-2xl p-6 transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mt-1">🎓</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400">{exp.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{exp.company}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{exp.duration}</p>
                <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}