import { motion } from 'framer-motion'

const getStoredData = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue
  } catch {
    return defaultValue
  }
}

const defaultInternships = [
  {
    id: 1,
    company: 'Zypher Enterprises',
    role: 'Software Development Intern',
    duration: 'Ongoing',
    description: 'Currently working on backend development, QA testing, and implementing advanced website features.',
    skills: ['Backend Development', 'QA Testing', 'Web Development'],
    logo: '🚀',
    status: 'current'
  },
  {
    id: 2,
    company: 'Tareenity',
    role: 'Software Engineering Intern',
    duration: '6 Weeks',
    description: 'Gained hands-on industry experience in software engineering and data-related tasks.',
    skills: ['Python', 'Data Analysis', 'Teamwork'],
    logo: '💼',
    status: 'completed'
  }
]

export default function Internship({ darkMode }) {
  const internships = getStoredData('portfolio_internships', defaultInternships)

  return (
    <section id="internship" className={`py-20 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
            Work Experience
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Internships</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Internship Cards */}
        <div className="max-w-3xl mx-auto space-y-8">
          {internships.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 md:p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} hover:shadow-xl transition-shadow`}
            >
              {item.status === 'current' && (
                <div className="absolute -top-3 right-4">
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full border border-green-500/20">Current</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl shrink-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  {item.logo || '💼'}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.duration}</span>
                  </div>
                  <p className="text-blue-500 font-medium mb-3">{item.company}</p>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span key={skill} className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
