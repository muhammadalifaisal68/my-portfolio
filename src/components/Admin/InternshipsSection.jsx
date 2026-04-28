import { useState } from 'react'
import { motion } from 'framer-motion'

const defaultInternships = [
  {
    id: 1,
    company: 'Zypher Enterprises',
    role: 'Software Development Intern',
    duration: 'Ongoing',
    description: 'Currently working on backend development, QA testing, and implementing advanced website features.',
    skills: ['Backend Development', 'QA Testing', 'Web Development'],
    status: 'current'
  },
  {
    id: 2,
    company: 'Tareenity',
    role: 'Software Engineering Intern',
    duration: '6 Weeks',
    description: 'Gained hands-on industry experience in software engineering and data-related tasks.',
    skills: ['Python', 'Data Analysis', 'Teamwork'],
    status: 'completed'
  }
]

export default function InternshipsSection({ onSave }) {
  const [internships, setInternships] = useState(() => {
    const saved = localStorage.getItem('portfolio_internships')
    return saved ? JSON.parse(saved) : defaultInternships
  })

  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({})

  const darkMode = localStorage.getItem('darkMode') === 'true'

  const startEditing = (item) => {
    setEditingId(item.id)
    setEditForm({ ...item, skills: item.skills.join(', ') })
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditForm({})
  }

  const saveEdit = () => {
    const updated = internships.map(i => 
      i.id === editingId 
        ? { ...editForm, skills: editForm.skills.split(',').map(s => s.trim()).filter(Boolean) }
        : i
    )
    setInternships(updated)
    localStorage.setItem('portfolio_internships', JSON.stringify(updated))
    setEditingId(null)
    setEditForm({})
    onSave('Internship updated!')
  }

  const addNew = () => {
    const newInternship = {
      id: Date.now(),
      company: 'New Company',
      role: 'Position',
      duration: 'Duration',
      description: 'Description...',
      skills: ['Skill1', 'Skill2'],
      status: 'completed'
    }
    setInternships(prev => [...prev, newInternship])
    localStorage.setItem('portfolio_internships', JSON.stringify([...internships, newInternship]))
    onSave('Internship added!')
  }

  const deleteItem = (id) => {
    const updated = internships.filter(i => i.id !== id)
    setInternships(updated)
    localStorage.setItem('portfolio_internships', JSON.stringify(updated))
    onSave('Internship deleted!')
  }

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-6`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Internships</h2>
        <div className="flex gap-2">
          <button
            onClick={addNew}
            className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            + Add Internship
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {internships.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border ${darkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}
          >
            {editingId === item.id ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <input
                      type="text"
                      value={editForm.company}
                      onChange={(e) => setEditForm(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <input
                      type="text"
                      value={editForm.role}
                      onChange={(e) => setEditForm(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <input
                      type="text"
                      value={editForm.duration}
                      onChange={(e) => setEditForm(prev => ({ ...prev, duration: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                      value={editForm.status}
                      onChange={(e) => setEditForm(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    >
                      <option value="current">Current</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
                  <input
                    type="text"
                    value={editForm.skills}
                    onChange={(e) => setEditForm(prev => ({ ...prev, skills: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
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
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{item.role}</h3>
                    {item.status === 'current' && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-500">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-blue-500 text-sm">{item.company}</p>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.duration}</p>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.skills.map(skill => (
                      <span key={skill} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEditing(item)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
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
