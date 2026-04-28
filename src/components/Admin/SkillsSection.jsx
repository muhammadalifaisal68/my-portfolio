import { useState } from 'react'
import { motion } from 'framer-motion'

const defaultSkills = {
  programming: [
    { name: 'Python', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'HTML/CSS', level: 85 }
  ],
  data: [
    { name: 'Data Analysis', level: 85 },
    { name: 'Excel', level: 90 },
    { name: 'Data Visualization', level: 75 },
    { name: 'Reporting', level: 80 }
  ],
  tools: [
    { name: 'Cloud Computing', level: 70 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'VS Code', level: 85 },
    { name: 'Microsoft Office', level: 90 }
  ]
}

const defaultCourses = [
  'Python',
  'Data Analysis with Python',
  'Cloud Computing',
  'Data Analytics',
  'Excel Skills for Business',
  'DIT',
  'SQL for Data Science',
  'Technical Support Fundamentals',
  'Operating Systems'
]

export default function SkillsSection({ onSave }) {
  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('portfolio_skills')
    return saved ? JSON.parse(saved) : defaultSkills
  })

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('portfolio_courses')
    return saved ? JSON.parse(saved) : defaultCourses
  })

  const [newCourse, setNewCourse] = useState('')
  const [newSkill, setNewSkill] = useState({ category: 'programming', name: '', level: 50 })

  const handleSkillChange = (category, index, field, value) => {
    setSkills(prev => {
      const updated = { ...prev }
      updated[category][index][field] = field === 'level' ? parseInt(value) : value
      return updated
    })
  }

  const addSkill = () => {
    if (!newSkill.name) return
    setSkills(prev => ({
      ...prev,
      [newSkill.category]: [...prev[newSkill.category], { name: newSkill.name, level: newSkill.level }]
    }))
    setNewSkill({ category: 'programming', name: '', level: 50 })
  }

  const removeSkill = (category, index) => {
    setSkills(prev => {
      const updated = { ...prev }
      updated[category] = updated[category].filter((_, i) => i !== index)
      return updated
    })
  }

  const addCourse = () => {
    if (!newCourse) return
    setCourses(prev => [...prev, newCourse])
    setNewCourse('')
  }

  const removeCourse = (index) => {
    setCourses(prev => prev.filter((_, i) => i !== index))
  }

  const handleSave = () => {
    localStorage.setItem('portfolio_skills', JSON.stringify(skills))
    localStorage.setItem('portfolio_courses', JSON.stringify(courses))
    onSave('Skills & Courses saved!')
  }

  const darkMode = localStorage.getItem('darkMode') === 'true'

  return (
    <div className="space-y-6">
      {/* Skills Section */}
      <div className={`rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Skills</h2>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90"
          >
            Save All Changes
          </button>
        </div>

        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-8 last:mb-0">
            <h3 className="text-lg font-semibold capitalize mb-4">{category} Skills</h3>
            <div className="space-y-4">
              {skillList.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(category, index, 'name', e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    onChange={(e) => handleSkillChange(category, index, 'level', e.target.value)}
                    className="w-32"
                  />
                  <span className="w-12 text-sm">{skill.level}%</span>
                  <button
                    onClick={() => removeSkill(category, index)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Add New Skill */}
        <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <h3 className="text-lg font-semibold mb-4">Add New Skill</h3>
          <div className="flex flex-wrap gap-4">
            <select
              value={newSkill.category}
              onChange={(e) => setNewSkill(prev => ({ ...prev, category: e.target.value }))}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <option value="programming">Programming</option>
              <option value="data">Data & Analytics</option>
              <option value="tools">Tools</option>
            </select>
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Skill name"
              className="flex-1 min-w-[200px] px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={newSkill.level}
              onChange={(e) => setNewSkill(prev => ({ ...prev, level: parseInt(e.target.value) }))}
              placeholder="Level %"
              className="w-24 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            <button
              onClick={addSkill}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className={`rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-6`}>
        <h2 className="text-xl font-bold mb-6">Courses</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              <span>{course}</span>
              <button
                onClick={() => removeCourse(index)}
                className="text-red-500 hover:text-red-600"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Add new course"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            onKeyPress={(e) => e.key === 'Enter' && addCourse()}
          />
          <button
            onClick={addCourse}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90"
          >
            Add Course
          </button>
        </div>
      </div>
    </div>
  )
}
