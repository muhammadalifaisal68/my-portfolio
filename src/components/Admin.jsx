import { useState, useEffect } from 'react'

const ADMIN_USER = 'admin'
const ADMIN_PASS = 'admin123'

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('projects')

  const [projects, setProjects] = useState(() => JSON.parse(localStorage.getItem('projects') || '[]'))
  const [skills, setSkills] = useState(() => JSON.parse(localStorage.getItem('skills') || '[]'))
  const [experience, setExperience] = useState(() => JSON.parse(localStorage.getItem('experience') || '[]'))

  const [newProject, setNewProject] = useState({ title: '', description: '', technologies: '' })
  const [newSkill, setNewSkill] = useState('')
  const [newExp, setNewExp] = useState({ title: '', company: '', duration: '', description: '' })

  useEffect(() => { localStorage.setItem('projects', JSON.stringify(projects)) }, [projects])
  useEffect(() => { localStorage.setItem('skills', JSON.stringify(skills)) }, [skills])
  useEffect(() => { localStorage.setItem('experience', JSON.stringify(experience)) }, [experience])

  function handleLogin(e) {
    e.preventDefault()
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true)
    } else {
      setError('Wrong username or password!')
    }
  }

  function addProject() {
    if (!newProject.title) return
    setProjects([...projects, { ...newProject, technologies: newProject.technologies.split(',').map(t => t.trim()) }])
    setNewProject({ title: '', description: '', technologies: '' })
  }

  function deleteProject(i) { setProjects(projects.filter((_, idx) => idx !== i)) }

  function addSkill() {
    if (!newSkill) return
    setSkills([...skills, { title: newSkill }])
    setNewSkill('')
  }

  function deleteSkill(i) { setSkills(skills.filter((_, idx) => idx !== i)) }

  function addExp() {
    if (!newExp.title) return
    setExperience([...experience, newExp])
    setNewExp({ title: '', company: '', duration: '', description: '' })
  }

  function deleteExp(i) { setExperience(experience.filter((_, idx) => idx !== i)) }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-white mb-2">Admin Login</h1>
          <p className="text-gray-400 text-center text-sm mb-8">Portfolio CMS Dashboard</p>
          {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Username</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter username" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter password" />
            </div>
            <button onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition">
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Portfolio Admin</h1>
        <button onClick={() => setLoggedIn(false)} className="text-gray-400 hover:text-red-400 transition text-sm">Logout</button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex gap-4 mb-8">
          {['projects', 'skills', 'experience'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition capitalize ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'projects' && (
          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Add Project</h2>
              <div className="space-y-3">
                <input value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Project title" />
                <textarea value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Project description" rows={3} />
                <input value={newProject.technologies} onChange={e => setNewProject({...newProject, technologies: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Technologies (comma separated: React, Python)" />
                <button onClick={addProject} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl transition">Add Project</button>
              </div>
            </div>
            <div className="space-y-4">
              {projects.map((p, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-blue-400">{p.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{p.description}</p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {p.technologies?.map(t => <span key={t} className="bg-blue-950 text-blue-300 px-3 py-1 rounded-full text-xs">{t}</span>)}
                    </div>
                  </div>
                  <button onClick={() => deleteProject(i)} className="text-red-400 hover:text-red-300 text-sm ml-4">Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Add Skill</h2>
              <div className="flex gap-3">
                <input value={newSkill} onChange={e => setNewSkill(e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Skill name" />
                <button onClick={addSkill} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl transition">Add</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="text-blue-300 text-sm">{s.title}</span>
                  <button onClick={() => deleteSkill(i)} className="text-red-400 hover:text-red-300 text-xs">✕</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Add Experience</h2>
              <div className="space-y-3">
                <input value={newExp.title} onChange={e => setNewExp({...newExp, title: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Job title" />
                <input value={newExp.company} onChange={e => setNewExp({...newExp, company: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Company name" />
                <input value={newExp.duration} onChange={e => setNewExp({...newExp, duration: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Duration (e.g. 2024 - Present)" />
                <textarea value={newExp.description} onChange={e => setNewExp({...newExp, description: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Description" rows={3} />
                <button onClick={addExp} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl transition">Add Experience</button>
              </div>
            </div>
            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-blue-400">{exp.title}</h3>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                    <p className="text-gray-400 text-sm mt-1">{exp.description}</p>
                  </div>
                  <button onClick={() => deleteExp(i)} className="text-red-400 hover:text-red-300 text-sm ml-4">Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}