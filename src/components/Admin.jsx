import { useState, useEffect } from 'react'

const ADMIN_USER = 'admin'
const ADMIN_PASS = 'admin123'

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')

  const [projects, setProjects] = useState(() => JSON.parse(localStorage.getItem('projects') || '[]'))
  const [skills, setSkills] = useState(() => JSON.parse(localStorage.getItem('skills') || '[]'))
  const [experience, setExperience] = useState(() => JSON.parse(localStorage.getItem('experience') || '[]'))
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts') || '[]'))
  const [social, setSocial] = useState(() => JSON.parse(localStorage.getItem('social') || JSON.stringify({ github: '', linkedin: '', twitter: '', instagram: '' })))

  const [newProject, setNewProject] = useState({ title: '', description: '', technologies: '' })
  const [newSkill, setNewSkill] = useState('')
  const [newExp, setNewExp] = useState({ title: '', company: '', duration: '', description: '' })

  useEffect(() => { localStorage.setItem('projects', JSON.stringify(projects)) }, [projects])
  useEffect(() => { localStorage.setItem('skills', JSON.stringify(skills)) }, [skills])
  useEffect(() => { localStorage.setItem('experience', JSON.stringify(experience)) }, [experience])
  useEffect(() => { localStorage.setItem('social', JSON.stringify(social)) }, [social])

  function handleLogin(e) {
    e.preventDefault()
    if (username === ADMIN_USER && password === ADMIN_PASS) setLoggedIn(true)
    else setError('Wrong username or password!')
  }

  function addProject() {
    if (!newProject.title) return
    setProjects([...projects, { ...newProject, technologies: newProject.technologies.split(',').map(t => t.trim()) }])
    setNewProject({ title: '', description: '', technologies: '' })
  }

  function addSkill() {
    if (!newSkill) return
    setSkills([...skills, { title: newSkill }])
    setNewSkill('')
  }

  function addExp() {
    if (!newExp.title) return
    setExperience([...experience, newExp])
    setNewExp({ title: '', company: '', duration: '', description: '' })
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'content', label: 'Content Editor', icon: '✏️' },
    { id: 'contacts', label: 'Contact Management', icon: '📧' },
    { id: 'social', label: 'Social Media', icon: '🔗' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
  ]

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">🔐</div>
            <h1 className="text-2xl font-bold text-white">CMS Admin</h1>
            <p className="text-gray-400 text-sm mt-1">Portfolio Management System</p>
          </div>
          {error && <p className="text-red-400 text-sm text-center mb-4 bg-red-400/10 py-2 rounded-xl">{error}</p>}
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
              Login to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-6 border-b border-blue-600">
          <h1 className="text-xl font-bold">CMS Admin</h1>
          <p className="text-blue-200 text-xs mt-1">Portfolio Management</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm transition ${activeTab === tab.id ? 'bg-white text-blue-700 font-medium' : 'text-blue-100 hover:bg-blue-600'}`}>
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-blue-600">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">A</div>
            <div>
              <p className="text-sm font-medium">Admin</p>
              <p className="text-blue-200 text-xs">Administrator</p>
            </div>
          </div>
          <button onClick={() => setLoggedIn(false)}
            className="w-full text-left text-red-300 hover:text-red-200 text-sm flex items-center gap-2">
            🚪 Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b px-8 py-4">
          <h2 className="text-2xl font-bold text-gray-800 capitalize">
            {tabs.find(t => t.id === activeTab)?.label}
          </h2>
          <p className="text-gray-500 text-sm">Welcome back! Here's what's happening with your portfolio.</p>
        </div>

        <div className="p-8">

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <div className="grid grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Total Projects', value: projects.length, icon: '💼', color: 'blue' },
                  { label: 'Total Skills', value: skills.length, icon: '🛠️', color: 'green' },
                  { label: 'Experience', value: experience.length, icon: '🎓', color: 'purple' },
                  { label: 'Total Contacts', value: contacts.length, icon: '📧', color: 'orange' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Content Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">✏️ Content Sections</span>
                      <span className="font-semibold text-gray-800">3</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">💼 Projects</span>
                      <span className="font-semibold text-gray-800">{projects.length}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">🛠️ Skills</span>
                      <span className="font-semibold text-gray-800">{skills.length}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">🎓 Experience</span>
                      <span className="font-semibold text-gray-800">{experience.length}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Edit Content', icon: '✏️', tab: 'content' },
                      { label: 'Update Social Links', icon: '🔗', tab: 'social' },
                      { label: 'View Analytics', icon: '📊', tab: 'analytics' },
                      { label: 'Manage Contacts', icon: '📧', tab: 'contacts' },
                    ].map(action => (
                      <button key={action.label} onClick={() => setActiveTab(action.tab)}
                        className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-sm transition flex items-center gap-2">
                        {action.icon} {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Content Editor */}
          {activeTab === 'content' && (
            <div>
              <div className="flex gap-4 mb-6">
                {['projects', 'skills', 'experience'].map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab === 'projects' ? 'content_projects' : tab === 'skills' ? 'content_skills' : 'content_experience')}
                    className="px-6 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition capitalize">
                    {tab}
                  </button>
                ))}
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-500 text-center py-8">👆 Select a section above to edit content</p>
              </div>
            </div>
          )}

          {/* Projects */}
          {activeTab === 'content_projects' && (
            <div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Project</h3>
                <div className="space-y-3">
                  <input value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                    placeholder="Project title" />
                  <textarea value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                    placeholder="Project description" rows={3} />
                  <input value={newProject.technologies} onChange={e => setNewProject({...newProject, technologies: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                    placeholder="Technologies (comma separated: React, Python)" />
                  <button onClick={addProject} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">Add Project</button>
                </div>
              </div>
              <div className="space-y-4">
                {projects.map((p, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-blue-600">{p.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{p.description}</p>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {p.technologies?.map(t => <span key={t} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">{t}</span>)}
                      </div>
                    </div>
                    <button onClick={() => setProjects(projects.filter((_, idx) => idx !== i))}
                      className="text-red-400 hover:text-red-600 text-sm ml-4 bg-red-50 px-3 py-1 rounded-lg">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {activeTab === 'content_skills' && (
            <div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Skill</h3>
                <div className="flex gap-3">
                  <input value={newSkill} onChange={e => setNewSkill(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                    placeholder="Skill name" />
                  <button onClick={addSkill} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">Add</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((s, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center gap-2">
                    <span className="text-gray-700 text-sm">{s.title}</span>
                    <button onClick={() => setSkills(skills.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-600 text-xs">✕</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {activeTab === 'content_experience' && (
            <div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Experience</h3>
                <div className="space-y-3">
                  <input value={newExp.title} onChange={e => setNewExp({...newExp, title: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                    placeholder="Job title" />
                  <input value={newExp.company} onChange={e => setNewExp({...newExp, company: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                    placeholder="Company name" />
                  <input value={newExp.duration} onChange={e => setNewExp({...newExp, duration: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                    placeholder="Duration (e.g. 2024 - Present)" />
                  <textarea value={newExp.description} onChange={e => setNewExp({...newExp, description: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                    placeholder="Description" rows={3} />
                  <button onClick={addExp} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">Add Experience</button>
                </div>
              </div>
              <div className="space-y-4">
                {experience.map((exp, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-blue-600">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.duration}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.description}</p>
                    </div>
                    <button onClick={() => setExperience(experience.filter((_, idx) => idx !== i))}
                      className="text-red-400 hover:text-red-600 text-sm ml-4 bg-red-50 px-3 py-1 rounded-lg">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contacts */}
          {activeTab === 'contacts' && (
            <div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { label: 'Total Contacts', value: contacts.length, icon: '📧' },
                  { label: 'This Week', value: contacts.filter(c => { const d = new Date(c.date); const now = new Date(); return (now - d) / 86400000 <= 7 }).length, icon: '📅' },
                  { label: 'Unread', value: contacts.filter(c => !c.read).length, icon: '🔔' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-200">
                    <span className="text-2xl">{stat.icon}</span>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Contacts</h3>
                {contacts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-4xl mb-4">📭</p>
                    <p className="text-gray-500">No contacts yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contacts.map((c, i) => (
                      <div key={i} className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-800">{c.name}</p>
                          <p className="text-gray-500 text-sm">{c.email}</p>
                          <p className="text-gray-600 text-sm mt-1">{c.message}</p>
                        </div>
                        <button onClick={() => setContacts(contacts.filter((_, idx) => idx !== i))}
                          className="text-red-400 text-sm bg-red-50 px-3 py-1 rounded-lg">Delete</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Social Media */}
          {activeTab === 'social' && (
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Social Media Links</h3>
              <div className="space-y-4">
                {[
                  { key: 'github', label: 'GitHub', icon: '💻', placeholder: 'https://github.com/username' },
                  { key: 'linkedin', label: 'LinkedIn', icon: '💼', placeholder: 'https://linkedin.com/in/username' },
                  { key: 'twitter', label: 'Twitter', icon: '🐦', placeholder: 'https://twitter.com/username' },
                  { key: 'instagram', label: 'Instagram', icon: '📸', placeholder: 'https://instagram.com/username' },
                ].map(s => (
                  <div key={s.key}>
                    <label className="text-gray-600 text-sm mb-1 block">{s.icon} {s.label}</label>
                    <input value={social[s.key]} onChange={e => setSocial({...social, [s.key]: e.target.value})}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
                      placeholder={s.placeholder} />
                  </div>
                ))}
                <button onClick={() => alert('Social links saved!')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition font-medium">
                  Save Social Links
                </button>
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeTab === 'analytics' && (
            <div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { label: 'Total Projects', value: projects.length, icon: '💼' },
                  { label: 'Total Skills', value: skills.length, icon: '🛠️' },
                  { label: 'Experience Items', value: experience.length, icon: '🎓' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-200">
                    <span className="text-2xl">{stat.icon}</span>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Portfolio Overview</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Projects', value: projects.length, max: 10, color: 'bg-blue-500' },
                    { label: 'Skills', value: skills.length, max: 20, color: 'bg-green-500' },
                    { label: 'Experience', value: experience.length, max: 10, color: 'bg-purple-500' },
                    { label: 'Contacts', value: contacts.length, max: 50, color: 'bg-orange-500' },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full transition-all`}
                          style={{ width: `${Math.min((item.value / item.max) * 100, 100)}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}