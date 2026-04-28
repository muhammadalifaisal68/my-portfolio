import { motion } from 'framer-motion'

const defaultExperiences = [
  {
    title: 'International Certifications',
    company: 'Coursera & Various Platforms',
    period: '2023 - Present',
    description: 'Completed multiple professional certifications from top universities and platforms worldwide.',
    highlights: [
      'Python Programming',
      'Data Analysis with Python',
      'SQL for Data Science',
      'Cloud Computing Basics',
      'Microsoft Excel for Business'
    ],
    icon: '📚'
  },
  {
    title: 'Technical Skills',
    company: 'Self-Learning',
    period: 'Continuous',
    description: 'Continuously expanding technical skills through hands-on projects and online resources.',
    highlights: [
      'Data Analytics Fundamentals',
      'IT Support & Troubleshooting',
      'Problem Solving',
      'Operating Systems'
    ],
    icon: '🎯'
  },
  {
    title: 'Academic Excellence',
    company: 'Punjab Group of Colleges',
    period: '2023 - 2025',
    description: 'F.Sc. in Computer Science with strong foundation in programming and mathematics.',
    highlights: [
      'Score: 847/1200 (70.58%)',
      'Computer Science Focus',
      'Mathematics & Physics',
      'Programming Fundamentals'
    ],
    icon: '🎓'
  }
]

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
            My Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Experience & Learning</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {defaultExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} hover:shadow-xl transition-all`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 ${darkMode ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
                {exp.icon}
              </div>

              {/* Title & Company */}
              <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
              <p className="text-blue-500 text-sm font-medium mb-1">{exp.company}</p>
              <p className={`text-xs mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{exp.period}</p>

              {/* Description */}
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>

              {/* Highlights */}
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className={`w-4 h-4 mt-0.5 shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Resume Download */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg shadow-blue-500/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
