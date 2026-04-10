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
  const [social, setSocial] = useState(() => JSON.parse(localStorage.getItem('social') || JSON.stringify({ linkedin: '' })))

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
      <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ background: '#111111', border: '1px solid #222', borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ width: '64px', height: '64px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', margin: '0 auto 16px' }}>🔐</div>
            <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: '700', margin: '0 0 4px' }}>CMS Admin</h1>
            <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Portfolio Management System</p>
          </div>
          {error && <p style={{ color: '#ff4444', fontSize: '14px', textAlign: 'center', background: '#1a0000', padding: '10px', borderRadius: '10px', marginBottom: '16px' }}>{error}</p>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ color: '#888', fontSize: '13px', display: 'block', marginBottom: '6px' }}>Username</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)}
                style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '12px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                placeholder="Enter username" />
            </div>
            <div>
              <label style={{ color: '#888', fontSize: '13px', display: 'block', marginBottom: '6px' }}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '12px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                placeholder="Enter password" />
            </div>
            <button onClick={handleLogin}
              style={{ width: '100%', background: '#fff', color: '#000', border: 'none', borderRadius: '12px', padding: '14px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
              Login to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: '240px', background: '#111', borderRight: '1px solid #222', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh' }}>
        <div style={{ padding: '24px 20px', borderBottom: '1px solid #222' }}>
          <h1 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', margin: '0 0 4px' }}>CMS Admin</h1>
          <p style={{ color: '#555', fontSize: '12px', margin: 0 }}>Portfolio Management</p>
        </div>
        <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{ width: '100%', textAlign: 'left', padding: '12px 16px', borderRadius: '10px', border: 'none', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer', background: activeTab === tab.id ? '#fff' : 'transparent', color: activeTab === tab.id ? '#000' : '#888', fontWeight: activeTab === tab.id ? '600' : '400', transition: 'all 0.2s' }}>
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: '16px 20px', borderTop: '1px solid #222' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '36px', height: '36px', background: '#222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: '700' }}>A</div>
            <div>
              <p style={{ color: '#fff', fontSize: '14px', fontWeight: '500', margin: 0 }}>Admin</p>
              <p style={{ color: '#555', fontSize: '12px', margin: 0 }}>Administrator</p>
            </div>
          </div>
          <button onClick={() => setLoggedIn(false)}
            style={{ background: 'transparent', border: 'none', color: '#ff4444', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
            🚪 Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: '240px', overflow: 'auto' }}>
        <div style={{ background: '#111', borderBottom: '1px solid #222', padding: '20px 32px' }}>
          <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: '700', margin: '0 0 4px' }}>
            {tabs.find(t => t.id === activeTab)?.label}
          </h2>
          <p style={{ color: '#555', fontSize: '14px', margin: 0 }}>Welcome back! Here's what's happening with your portfolio.</p>
        </div>

        <div style={{ padding: '32px' }}>

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '24px' }}>
                {[
                  { label: 'Total Projects', value: projects.length, icon: '💼' },
                  { label: 'Total Skills', value: skills.length, icon: '🛠️' },
                  { label: 'Experience', value: experience.length, icon: '🎓' },
                  { label: 'Total Contacts', value: contacts.length, icon: '📧' },
                ].map(stat => (
                  <div key={stat.label} style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
                    <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                    <p style={{ color: '#fff', fontSize: '32px', fontWeight: '700', margin: '12px 0 4px' }}>{stat.value}</p>
                    <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
                  <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Content Overview</h3>
                  {[
                    { label: '✏️ Content Sections', value: 3 },
                    { label: '💼 Projects', value: projects.length },
                    { label: '🛠️ Skills', value: skills.length },
                    { label: '🎓 Experience', value: experience.length },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #1a1a1a' }}>
                      <span style={{ color: '#888', fontSize: '14px' }}>{item.label}</span>
                      <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
                  <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Quick Actions</h3>
                  {[
                    { label: 'Edit Content', icon: '✏️', tab: 'content' },
                    { label: 'Update Social Links', icon: '🔗', tab: 'social' },
                    { label: 'View Analytics', icon: '📊', tab: 'analytics' },
                    { label: 'Manage Contacts', icon: '📧', tab: 'contacts' },
                  ].map(action => (
                    <button key={action.label} onClick={() => setActiveTab(action.tab)}
                      style={{ width: '100%', textAlign: 'left', padding: '12px 16px', background: '#1a1a1a', border: '1px solid #222', borderRadius: '10px', color: '#888', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', transition: 'all 0.2s' }}>
                      {action.icon} {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Content Editor */}
          {activeTab === 'content' && (
            <div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                {['Projects', 'Skills', 'Experience'].map((tab, i) => (
                  <button key={tab} onClick={() => setActiveTab(['content_projects', 'content_skills', 'content_experience'][i])}
                    style={{ padding: '10px 24px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', color: '#888', fontSize: '14px', cursor: 'pointer', fontWeight: '500' }}>
                    {tab}
                  </button>
                ))}
              </div>
              <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
                <p style={{ color: '#555', fontSize: '14px' }}>👆 Select a section above to edit content</p>
              </div>
            </div>
          )}

          {/* Projects */}
          {activeTab === 'content_projects' && (
            <div>
              <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Add New Project</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})}
                    style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    placeholder="Project title" />
                  <textarea value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})}
                    style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                    placeholder="Project description" rows={3} />
                  <input value={newProject.technologies} onChange={e => setNewProject({...newProject, technologies: e.target.value})}
                    style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    placeholder="Technologies (comma separated: React, Python)" />
                  <button onClick={addProject}
                    style={{ background: '#fff', color: '#000', border: 'none', borderRadius: '10px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', alignSelf: 'flex-start' }}>
                    Add Project
                  </button>
                </div>
              </div>
              {projects.map((p, i) => (
                <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '20px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ color: '#fff', fontWeight: '600', margin: '0 0 6px' }}>{p.title}</h3>
                    <p style={{ color: '#666', fontSize: '14px', margin: '0 0 10px' }}>{p.description}</p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {p.technologies?.map(t => <span key={t} style={{ background: '#1a1a1a', color: '#888', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', border: '1px solid #333' }}>{t}</span>)}
                    </div>
                  </div>
                  <button onClick={() => setProjects(projects.filter((_, idx) => idx !== i))}
                    style={{ background: '#1a0000', color: '#ff4444', border: '1px solid #330000', borderRadius: '8px', padding: '6px 14px', fontSize: '13px', cursor: 'pointer', height: 'fit-content' }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {activeTab === 'content_skills' && (
            <div>
              <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Add New Skill</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <input value={newSkill} onChange={e => setNewSkill(e.target.value)}
                    style={{ flex: 1, background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    placeholder="Skill name" />
                  <button onClick={addSkill}
                    style={{ background: '#fff', color: '#000', border: 'none', borderRadius: '10px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>Add</button>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.map((s, i) => (
                  <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: '20px', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#fff', fontSize: '14px' }}>{s.title}</span>
                    <button onClick={() => setSkills(skills.filter((_, idx) => idx !== i))}
                      style={{ background: 'transparent', border: 'none', color: '#ff4444', cursor: 'pointer', fontSize: '12px' }}>✕</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {activeTab === 'content_experience' && (
            <div>
              <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Add Experience</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input value={newExp.title} onChange={e => setNewExp({...newExp, title: e.target.value})}
                    style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    placeholder="Job title" />
                  <input value={newExp.company} onChange={e => setNewExp({...newExp, company: e.target.value})}
                    style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    placeholder="Company name" />
                  <input value={newExp.duration} onChange={e => setNewExp({...newExp, duration: e.target.value})}
                    style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    placeholder="Duration (e.g. 2024 - Present)" />
                  <textarea value={newExp.description} onChange={e => setNewExp({...newExp, description: e.target.value})}
                    style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                    placeholder="Description" rows={3} />
                  <button onClick={addExp}
                    style={{ background: '#fff', color: '#000', border: 'none', borderRadius: '10px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', alignSelf: 'flex-start' }}>
                    Add Experience
                  </button>
                </div>
              </div>
              {experience.map((exp, i) => (
                <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '20px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ color: '#fff', fontWeight: '600', margin: '0 0 4px' }}>{exp.title}</h3>
                    <p style={{ color: '#888', fontSize: '14px', margin: '0 0 2px' }}>{exp.company}</p>
                    <p style={{ color: '#555', fontSize: '13px', margin: '0 0 8px' }}>{exp.duration}</p>
                    <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>{exp.description}</p>
                  </div>
                  <button onClick={() => setExperience(experience.filter((_, idx) => idx !== i))}
                    style={{ background: '#1a0000', color: '#ff4444', border: '1px solid #330000', borderRadius: '8px', padding: '6px 14px', fontSize: '13px', cursor: 'pointer', height: 'fit-content' }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {/* Contacts */}
          {activeTab === 'contacts' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '24px' }}>
                {[
                  { label: 'Total Contacts', value: contacts.length, icon: '📧' },
                  { label: 'This Week', value: contacts.filter(c => { const d = new Date(c.date); const now = new Date(); return (now - d) / 86400000 <= 7 }).length, icon: '📅' },
                  { label: 'Unread', value: contacts.filter(c => !c.read).length, icon: '🔔' },
                ].map(stat => (
                  <div key={stat.label} style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
                    <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                    <p style={{ color: '#fff', fontSize: '32px', fontWeight: '700', margin: '12px 0 4px' }}>{stat.value}</p>
                    <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Recent Contacts</h3>
                {contacts.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '48px' }}>
                    <p style={{ fontSize: '40px', marginBottom: '12px' }}>📭</p>
                    <p style={{ color: '#555', fontSize: '14px' }}>No contacts yet</p>
                  </div>
                ) : contacts.map((c, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: '#1a1a1a', borderRadius: '12px', marginBottom: '10px' }}>
                    <div>
                      <p style={{ color: '#fff', fontWeight: '600', margin: '0 0 4px' }}>{c.name}</p>
                      <p style={{ color: '#666', fontSize: '13px', margin: '0 0 6px' }}>{c.email}</p>
                      <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>{c.message}</p>
                    </div>
                    <button onClick={() => setContacts(contacts.filter((_, idx) => idx !== i))}
                      style={{ background: '#1a0000', color: '#ff4444', border: '1px solid #330000', borderRadius: '8px', padding: '6px 14px', fontSize: '13px', cursor: 'pointer', height: 'fit-content' }}>Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Social Media */}
          {activeTab === 'social' && (
            <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '24px' }}>Social Media Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ color: '#888', fontSize: '13px', display: 'block', marginBottom: '6px' }}>💼 LinkedIn</label>
                  <input value={social.linkedin} onChange={e => setSocial({...social, linkedin: e.target.value})}
                    style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                    placeholder="https://linkedin.com/in/username" />
                </div>
                <button onClick={() => alert('Social links saved! ✅')}
                  style={{ background: '#fff', color: '#000', border: 'none', borderRadius: '10px', padding: '14px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', alignSelf: 'flex-start' }}>
                  Save Social Links
                </button>
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeTab === 'analytics' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '24px' }}>
                {[
                  { label: 'Total Projects', value: projects.length, icon: '💼' },
                  { label: 'Total Skills', value: skills.length, icon: '🛠️' },
                  { label: 'Experience Items', value: experience.length, icon: '🎓' },
                ].map(stat => (
                  <div key={stat.label} style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
                    <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                    <p style={{ color: '#fff', fontSize: '32px', fontWeight: '700', margin: '12px 0 4px' }}>{stat.value}</p>
                    <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Portfolio Overview</h3>
                {[
                  { label: 'Projects', value: projects.length, max: 10, color: '#3b82f6' },
                  { label: 'Skills', value: skills.length, max: 20, color: '#22c55e' },
                  { label: 'Experience', value: experience.length, max: 10, color: '#a855f7' },
                  { label: 'Contacts', value: contacts.length, max: 50, color: '#f97316' },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ color: '#888', fontSize: '14px' }}>{item.label}</span>
                      <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>{item.value}</span>
                    </div>
                    <div style={{ background: '#1a1a1a', borderRadius: '4px', height: '6px' }}>
                      <div style={{ background: item.color, height: '6px', borderRadius: '4px', width: `${Math.min((item.value / item.max) * 100, 100)}%`, transition: 'width 0.5s' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}