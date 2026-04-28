import { useState } from 'react'
import { motion } from 'framer-motion'

const defaultEducation = [
  {
    year: '2024-2025',
    title: 'Online Courses via Coursera',
    description: 'Completed multiple certifications from top universities in Python, Data Analytics, and Cloud Computing.'
  },
  {
    year: '2023-2025',
    title: 'FSC - Punjab Group of Colleges',
    description: 'Pre-Engineering studies with strong foundation in mathematics and computer science.'
  },
  {
    year: '2013-2023',
    title: 'Matric - St Francis High School',
    description: 'Completed secondary education with focus on science and technology.'
  }
]

export default function EducationSection({ onSave }) {
  const [education, setEducation] = useState(() => {
    const saved = localStorage.getItem('portfolio_education')
    return saved ? JSON.parse(saved) : defaultEducation
  })

  const [editingIndex, setEditingIndex] = useState(null)
  const [editForm, setEditForm] = useState({})

  const darkMode = localStorage.getItem('darkMode') === 'true'

  const startEditing = (index) => {
    setEditingIndex(index)
    setEditForm({ ...education[index] })
  }

  const cancelEditing = () => {
    setEditingIndex(null)
    setEditForm({})
  }

  const saveEdit = () => {
    const updated = [...education]
    updated[editingIndex] = editForm
    setEducation(updated)
    localStorage.setItem('portfolio_education', JSON.stringify(updated))
    setEditingIndex(null)
    setEditForm({})
    onSave('Education updated!')
  }

  const addNew = () => {
    const newEducation = {
      year: '2024',
      title: 'New Education',
      description: 'Description...'
    }
    const updated = [...education, newEducation]
    setEducation(updated)
    localStorage.setItem('portfolio_education', JSON.stringify(updated))
    onSave('Education added!')
  }

  const deleteItem = (index) => {
    const updated = education.filter((_, i) => i !== index)
    setEducation(updated)
    localStorage.setItem('portfolio_education', JSON.stringify(updated))
    onSave('Education deleted!')
  }

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-6`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Education Timeline</h2>
        <button
          onClick={addNew}
          className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          + Add Education
        </button>
      </div>

      <div className="space-y-4">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border ${darkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}
          >
            {editingIndex === index ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Year</label>
                    <input
                      type="text"
                      value={editForm.year}
                      onChange={(e) => setEditForm(prev => ({ ...prev, year: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                      placeholder="e.g., 2024-2025"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                      placeholder="e.g., FSC - Punjab Group of Colleges"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    placeholder="Description..."
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={saveEdit}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:opacity-90"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0 text-center px-1">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEditing(index)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteItem(index)}
                    className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
