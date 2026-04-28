import { motion } from 'framer-motion'
import { useState } from 'react'

const getStoredData = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue
  } catch {
    return defaultValue
  }
}

const defaultSkillCategories = [
  {
    name: 'Programming',
    icon: '💻',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'JavaScript', level: 60 }
    ]
  },
  {
    name: 'Data & Analytics',
    icon: '📊',
    skills: [
      { name: 'Data Analytics', level: 80 },
      { name: 'Microsoft Excel', level: 85 },
      { name: 'Data Visualization', level: 65 },
      { name: 'Spreadsheet Analysis', level: 80 }
    ]
  },
  {
    name: 'Technical',
    icon: '🛠️',
    skills: [
      { name: 'IT Support', level: 75 },
      { name: 'Cloud Computing', level: 60 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Technical Support', level: 80 }
    ]
  }
]

const defaultCourses = [
  'Python Programming',
  'Data Analysis with Python',
  'Data Analytics Fundamentals',
  'SQL for Data Science',
  'Cloud Computing Basics',
  'Operating Systems Fundamentals',
  'Technical Support Fundamentals',
  'Microsoft Excel for Business'
]

export default function Skills({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState(0)
  const skillCategories = getStoredData('portfolio_skills', defaultSkillCategories)
  const courses = getStoredData('portfolio_courses', defaultCourses)

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
            What I Know
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8">International Certifications</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className={`relative p-4 rounded-xl text-center cursor-default group ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300`}
              >
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${activeCategory === index ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' : darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-600 hover:text-gray-900'}`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Progress */}
        <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl mx-auto">
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            {skillCategories[activeCategory]?.skills.map((skill, index) => (
              <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="mb-6 last:mb-0">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{skill.level}%</span>
                </div>
                <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.1 }} className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IELTS Badge */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
          <div className={`inline-flex items-center gap-4 px-6 py-4 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="text-4xl">🌍</div>
            <div className="text-left">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>English Proficiency</p>
              <p className="text-xl font-bold">IELTS Band: 6.5</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
