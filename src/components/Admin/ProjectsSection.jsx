import { useState } from 'react'
import { motion } from 'framer-motion'

const defaultProjects = [
  {
    id: 1,
    title: 'Data Analysis with Python & Excel',
    description: 'Performed basic data analysis using Python and Excel on small datasets to identify trends and patterns.',
    tags: ['Python', 'Excel', 'Data Analysis'],
    category: 'Data Analytics',
    icon: '📊'
  },
  {
    id: 2,
    title: 'SQL Reporting',
    description: 'Practiced SQL queries for data retrieval and reporting from structured databases.',
    tags: ['SQL', 'Database', 'Reporting'],
    category: 'Database',
    icon: '🗄️'
  },
  {
    id: 3,
    title: 'Analysis Reports',
    description: 'Created simple analysis reports and spreadsheets to present findings clearly.',
    tags: ['Excel', 'Python', 'Reporting'],
    category: 'Data Analytics',
    icon: '📈'
  }
]

const categories = ['Data Analytics', 'Database', 'Frontend', 'Backend', 'Full Stack', 'Mobile']

export default function ProjectsSection({ onSave }) {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('portfolio_projects')
    return saved ? JSON.parse(saved) : defaultProjects
  })

  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({})

  const darkMode = localStorage.getItem('darkMode') === 'true'

  const startEditing = (project) => {
    setEditingId(project.id)
    setEditForm({ ...project, tags: project.tags.join(', ') })
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditForm({})
  }

  const saveEdit = () => {
    setProjects(prev => prev.map(p => 
      p.id === editingId 
        ? { ...editForm, tags: editForm.tags.split(',').map(t => t.trim()).filter(Boolean) }
        : p
    ))
    setEditingId(null)
    setEditForm({})
    localStorage.setItem('portfolio_projects', JSON.stringify(projects.map(p => 
      p.id === editingId 
        ? { ...editForm, tags: editForm.tags.split(',').map(t => t.trim()).filter(Boolean) }
        : p
    )))
    onSave('Project updated!')
  }

  const addNewProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'New Project',
      description: 'Project description...',
      tags: ['Tag1', 'Tag2'],
      category: 'Data Analytics',
      icon: '🚀'
    }
    setProjects(prev => [...prev, newProject])
    localStorage.setItem('portfolio_projects', JSON.stringify([...projects, newProject]))
    onSave('Project added!')
  }

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id))
    localStorage.setItem('portfolio_projects', JSON.stringify(projects.filter(p => p.id !== id)))
    onSave('Project deleted!')
  }

  const handleSaveAll = () => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects))
    onSave('All projects saved!')
  }

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-6`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="flex gap-2">
          <button
            onClick={addNewProject}
            className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            + Add Project
          </button>
          <button
            onClick={handleSaveAll}
            className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90"
          >
            Save All
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border ${darkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}
          >
            {editingId === project.id ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      value={editForm.category}
                      onChange={(e) => setEditForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
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
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={editForm.tags}
                      onChange={(e) => setEditForm(prev => ({ ...prev, tags: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Icon (emoji)</label>
                    <input
                      type="text"
                      value={editForm.icon}
                      onChange={(e) => setEditForm(prev => ({ ...prev, icon: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>
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
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{project.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                        {project.category}
                      </span>
                    </div>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map(tag => (
                        <span key={tag} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEditing(project)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteProject(project.id)}
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
