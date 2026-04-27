import { useState, useEffect } from 'react'

const ADMIN_USER = 'admin'
const ADMIN_PASS = 'admin123'

const defaultProfile = {
  name: 'Muhammad Ali Faisal',
  title: 'Software Engineer & Data Analytics Student',
  bio: 'Motivated Computer Science student with a Diploma in Information Technology, seeking opportunities in software development, data analytics, and IT support. Recently completed internships at Tareenity and Zypher Enterprises.',
  location: 'Hayatabad, Peshawar, Pakistan',
  phone: '+92 317-6185763',
  email: 'muhammadalifaisal68@gmail.com',
  ielts: '6.5',
}

const defaultExperience = [
  { title: "Software Engineering Intern", company: "Zypher Enterprises", duration: "Ongoing", type: "work", description: "Currently working on real-world IT tasks improving skills in technical support and workflow handling." },
  { title: "Software Engineering Intern", company: "Tareenity", duration: "6 Weeks — Completed", type: "work", description: "Gained hands-on experience in IT and technical tasks. Built multiple real-world websites." },
  { title: "F.Sc (Computer Science)", company: "Punjab Group of Colleges", duration: "2023 – 2025 | 847/1200 (70.58%)", type: "education", description: "Studied Computer Science with focus on programming fundamentals, mathematics, and physics." },
  { title: "Diploma in Information Technology (DIT)", company: "Brains Institute, Peshawar", duration: "2023 – 2024", type: "education", description: "Comprehensive diploma covering IT fundamentals, networking, and software development basics." },
  { title: "Matriculation (Science)", company: "Saint Francis High School, Hayatabad", duration: "2013 – 2023 | 875/1100 (79.54%)", type: "education", description: "Completed matriculation with Science subjects with strong foundation in Mathematics and Physics." },
]

const defaultSkills = [
  { title: 'Python Programming', level: 75 },
  { title: 'Data Analysis with Python', level: 70 },
  { title: 'SQL for Data Science', level: 72 },
  { title: 'Microsoft Excel', level: 85 },
  { title: 'Cloud Computing', level: 60 },
  { title: 'Operating Systems', level: 65 },
  { title: 'Technical Support', level: 78 },
  { title: 'Data Analytics Fundamentals', level: 73 },
]

const defaultProjects = [
  { title: "Data Analysis with Python & Excel", description: "Performed basic data analysis using Python and Excel on small datasets to identify trends and patterns.", technologies: ["Python", "Excel"] },
  { title: "SQL Reporting Dashboard", description: "Practiced SQL queries for data retrieval and reporting from structured databases.", technologies: ["SQL", "Database"] },
  { title: "Analysis Reports", description: "Created simple analysis reports and spreadsheets to present findings clearly.", technologies: ["Excel", "Python"] },
]

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem('adminLoggedIn') === 'true')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [contentTab, setContentTab] = useState('profile')
  const [saveMsg, setSaveMsg] = useState('')

  const [projects, setProjects] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('projects') || '[]')
    return saved.length > 0 ? saved : defaultProjects
  })
  const [skills, setSkills] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('skills') || '[]')
    return saved.length > 0 ? saved : defaultSkills
  })
  const [experience, setExperience] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('experience') || '[]')
    return saved.length > 0 ? saved : defaultExperience
  })
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts') || '[]'))
  const [social, setSocial] = useState(() => JSON.parse(localStorage.getItem('social') || JSON.stringify({ linkedin: 'https://www.linkedin.com/in/muhammad-ali-faisal', instagram: 'https://www.instagram.com/_ali.faisal9', facebook: 'https://www.facebook.com/share/1BaXRKi95J' })))
  const [profile, setProfile] = useState(() => JSON.parse(localStorage.getItem('profile') || JSON.stringify(defaultProfile)))

  const [newProject, setNewProject] = useState({ title: '', description: '', technologies: '' })
  const [newSkill, setNewSkill] = useState('')
  const [newSkillLevel, setNewSkillLevel] = useState(75)
  const [newExp, setNewExp] = useState({ title: '', company: '', duration: '', type: 'work', description: '' })

  useEffect(() => { localStorage.setItem('projects', JSON.stringify(projects)) }, [projects])
  useEffect(() => { localStorage.setItem('skills', JSON.stringify(skills)) }, [skills])
  useEffect(() => { localStorage.setItem('experience', JSON.stringify(experience)) }, [experience])
  useEffect(() => { localStorage.setItem('social', JSON.stringify(social)) }, [social])
  useEffect(() => { localStorage.setItem('profile', JSON.stringify(profile)) }, [profile])

  function handleLogin(e) {
    e.preventDefault()
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true)
      localStorage.setItem('adminLoggedIn', 'true')
    } else {
      setError('Wrong username or password!')
    }
  }

  function showSave(msg = 'Saved successfully! Refresh portfolio to see changes.') {
    setSaveMsg(msg)
    setTimeout(() => setSaveMsg(''), 3000)
  }

  function addProject() {
    if (!newProject.title) return
    setProjects([...projects, { ...newProject, technologies: newProject.technologies.split(',').map(t => t.trim()) }])
    setNewProject({ title: '', description: '', technologies: '' })
    showSave('Project added!')
  }

  function addSkill() {
    if (!newSkill) return
    setSkills([...skills, { title: newSkill, level: parseInt(newSkillLevel) || 75 }])
    setNewSkill('')
    setNewSkillLevel(75)
    showSave('Skill added!')
  }

  function updateSkillLevel(i, level) {
    const updated = [...skills]
    updated[i] = { ...updated[i], level: parseInt(level) }
    setSkills(updated)
  }

  function addExp() {
    if (!newExp.title) return
    setExperience([...experience, newExp])
    setNewExp({ title: '', company: '', duration: '', type: 'work', description: '' })
    showSave('Experience added!')
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'content', label: 'Content Editor', icon: '✏️' },
    { id: 'contacts', label: 'Contacts', icon: '📧' },
    { id: 'social', label: 'Social Media', icon: '🔗' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
  ]

  const s = (style) => style

  if (!loggedIn) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ background: '#111', border: '1px solid #222', borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '420px' }}>
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
                placeholder="Enter password" onKeyDown={e => e.key === 'Enter' && handleLogin(e)} />
            </div>
            <button onClick={handleLogin}
              style={{ width: '100%', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '12px', padding: '14px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
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
      <div style={{ width: '240px', background: '#111', borderRight: '1px solid #222', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <div style={{ padding: '24px 20px', borderBottom: '1px solid #222' }}>
          <h1 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', margin: '0 0 4px' }}>CMS Admin</h1>
          <p style={{ color: '#555', fontSize: '12px', margin: 0 }}>Portfolio Management</p>
        </div>
        <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{ width: '100%', textAlign: 'left', padding: '12px 16px', borderRadius: '10px', border: 'none', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer', background: activeTab === tab.id ? '#3b82f6' : 'transparent', color: activeTab === tab.id ? '#fff' : '#888', fontWeight: activeTab === tab.id ? '600' : '400', transition: 'all 0.2s' }}>
              <span>{tab.icon}</span>{tab.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: '16px 20px', borderTop: '1px solid #222' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '36px', height: '36px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: '700' }}>A</div>
            <div>
              <p style={{ color: '#fff', fontSize: '14px', fontWeight: '500', margin: 0 }}>Admin</p>
              <p style={{ color: '#555', fontSize: '12px', margin: 0 }}>Administrator</p>
            </div>
          </div>
          <button onClick={() => { setLoggedIn(false); localStorage.removeItem('adminLoggedIn') }}
            style={{ background: 'transparent', border: 'none', color: '#ff4444', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
            🚪 Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: '240px', overflow: 'auto' }}>
        {/* Header */}
        <div style={{ background: '#111', borderBottom: '1px solid #222', padding: '20px 32px', position: 'sticky', top: 0, zIndex: 10 }}>
          <h2 style={{ color: '#fff', fontSize: '22px', fontWeight: '700', margin: '0 0 2px' }}>
            {tabs.find(t => t.id === activeTab)?.label}
          </h2>
          <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>Manage your portfolio content</p>
        </div>

        {/* Save notification */}
        {saveMsg && (
          <div style={{ background: '#0a2a0a', border: '1px solid #22c55e', color: '#22c55e', padding: '12px 32px', fontSize: '14px', fontWeight: '500' }}>
            ✅ {saveMsg}
          </div>
        )}

        <div style={{ padding: '32px' }}>

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '24px' }}>
                {[
                  { label: 'Total Projects', value: projects.length, icon: '💼', color: '#3b82f6' },
                  { label: 'Total Skills', value: skills.length, icon: '🛠️', color: '#8b5cf6' },
                  { label: 'Experience', value: experience.length, icon: '🎓', color: '#22c55e' },
                  { label: 'Total Contacts', value: contacts.length, icon: '📧', color: '#f97316' },
                ].map(stat => (
                  <div key={stat.label} style={{ background: '#111', border: `1px solid ${stat.color}22`, borderRadius: '16px', padding: '24px', borderTop: `3px solid ${stat.color}` }}>
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
                    { label: 'Projects', value: projects.length },
                    { label: 'Skills', value: skills.length },
                    { label: 'Experience', value: experience.length },
                    { label: 'Contacts', value: contacts.length },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #1a1a1a' }}>
                      <span style={{ color: '#888', fontSize: '14px' }}>{item.label}</span>
                      <span style={{ color: '#3b82f6', fontWeight: '600', fontSize: '14px' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
                  <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Quick Actions</h3>
                  {[
                    { label: 'Edit Profile Info', icon: '👤', tab: 'content', sub: 'profile' },
                    { label: 'Manage Projects', icon: '💼', tab: 'content', sub: 'projects' },
                    { label: 'Update Skills', icon: '🛠️', tab: 'content', sub: 'skills' },
                    { label: 'Update Experience', icon: '🎓', tab: 'content', sub: 'experience' },
                  ].map(action => (
                    <button key={action.label} onClick={() => { setActiveTab(action.tab); setContentTab(action.sub) }}
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
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                {[
                  { id: 'profile', label: 'Profile' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'experience', label: 'Experience' },
                ].map(tab => (
                  <button key={tab.id} onClick={() => setContentTab(tab.id)}
                    style={{ padding: '10px 20px', background: contentTab === tab.id ? '#3b82f6' : '#1a1a1a', border: '1px solid #333', borderRadius: '10px', color: contentTab === tab.id ? '#fff' : '#888', fontSize: '14px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s' }}>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Profile */}
              {contentTab === 'profile' && (
                <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px' }}>
                  <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Edit Profile Information</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {[
                      { key: 'name', label: 'Full Name', placeholder: 'Muhammad Ali Faisal' },
                      { key: 'title', label: 'Professional Title', placeholder: 'Software Engineer...' },
                      { key: 'location', label: 'Location', placeholder: 'Hayatabad, Peshawar' },
                      { key: 'phone', label: 'Phone', placeholder: '+92 317-6185763' },
                      { key: 'email', label: 'Email', placeholder: 'email@gmail.com' },
                      { key: 'ielts', label: 'IELTS Score', placeholder: '6.5' },
                    ].map(field => (
                      <div key={field.key}>
                        <label style={{ color: '#888', fontSize: '13px', display: 'block', marginBottom: '6px' }}>{field.label}</label>
                        <input value={profile[field.key] || ''} onChange={e => setProfile({...profile, [field.key]: e.target.value})}
                          style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          placeholder={field.placeholder} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '16px' }}>
                    <label style={{ color: '#888', fontSize: '13px', display: 'block', marginBottom: '6px' }}>Bio / Description</label>
                    <textarea value={profile.bio || ''} onChange={e => setProfile({...profile, bio: e.target.value})}
                      style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                      placeholder="Your bio description" rows={4} />
                  </div>
                  <button onClick={() => showSave('Profile saved! Refresh portfolio to see changes.')}
                    style={{ marginTop: '16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                    Save Profile
                  </button>
                </div>
              )}

              {/* Projects */}
              {contentTab === 'projects' && (
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
                        style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', alignSelf: 'flex-start' }}>
                        Add Project
                      </button>
                    </div>
                  </div>
                  {projects.map((p, i) => (
                    <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '20px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ color: '#3b82f6', fontWeight: '600', margin: '0 0 6px' }}>{p.title}</h3>
                        <p style={{ color: '#666', fontSize: '14px', margin: '0 0 10px' }}>{p.description}</p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          {p.technologies?.map(t => <span key={t} style={{ background: '#1a2a4a', color: '#60a5fa', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', border: '1px solid #1e3a5f' }}>{t}</span>)}
                        </div>
                      </div>
                      <button onClick={() => setProjects(projects.filter((_, idx) => idx !== i))}
                        style={{ background: '#1a0000', color: '#ff4444', border: '1px solid #330000', borderRadius: '8px', padding: '6px 14px', fontSize: '13px', cursor: 'pointer', marginLeft: '16px' }}>Delete</button>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {contentTab === 'skills' && (
                <div>
                  <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
                    <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Add New Skill</h3>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <input value={newSkill} onChange={e => setNewSkill(e.target.value)}
                        style={{ flex: 1, minWidth: '200px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                        placeholder="Skill name" />
                      <input value={newSkillLevel} onChange={e => setNewSkillLevel(e.target.value)}
                        type="number" min="1" max="100"
                        style={{ width: '100px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                        placeholder="%" />
                      <button onClick={addSkill}
                        style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>Add</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {skills.map((s, i) => (
                      <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: '14px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ color: '#fff', fontSize: '14px', flex: 1, fontWeight: '500' }}>{s.title}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <input type="number" min="1" max="100" value={s.level || 75}
                            onChange={e => updateSkillLevel(i, e.target.value)}
                            style={{ width: '70px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '6px 10px', color: '#3b82f6', fontSize: '14px', outline: 'none', fontWeight: '600', textAlign: 'center' }} />
                          <span style={{ color: '#555', fontSize: '12px' }}>%</span>
                          <div style={{ width: '120px', height: '6px', background: '#1a1a1a', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ width: `${s.level || 75}%`, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '4px', transition: 'width 0.3s' }} />
                          </div>
                        </div>
                        <button onClick={() => setSkills(skills.filter((_, idx) => idx !== i))}
                          style={{ background: '#1a0000', color: '#ff4444', border: '1px solid #330000', borderRadius: '8px', padding: '6px 12px', fontSize: '13px', cursor: 'pointer' }}>Delete</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience */}
              {contentTab === 'experience' && (
                <div>
                  <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
                    <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Add Experience / Education</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <input value={newExp.title} onChange={e => setNewExp({...newExp, title: e.target.value})}
                          style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                          placeholder="Job title / Degree" />
                        <input value={newExp.company} onChange={e => setNewExp({...newExp, company: e.target.value})}
                          style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                          placeholder="Company / Institution" />
                        <input value={newExp.duration} onChange={e => setNewExp({...newExp, duration: e.target.value})}
                          style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                          placeholder="Duration (e.g. 2024 - Present)" />
                        <select value={newExp.type} onChange={e => setNewExp({...newExp, type: e.target.value})}
                          style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}>
                          <option value="work">Work Experience</option>
                          <option value="education">Education</option>
                        </select>
                      </div>
                      <textarea value={newExp.description} onChange={e => setNewExp({...newExp, description: e.target.value})}
                        style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                        placeholder="Description" rows={3} />
                      <button onClick={addExp}
                        style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', alignSelf: 'flex-start' }}>
                        Add Entry
                      </button>
                    </div>
                  </div>
                  {experience.map((exp, i) => (
                    <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '20px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <h3 style={{ color: '#3b82f6', fontWeight: '600', margin: 0 }}>{exp.title}</h3>
                          <span style={{ background: exp.type === 'work' ? '#1a2a4a' : '#1a1a3a', color: exp.type === 'work' ? '#60a5fa' : '#a78bfa', fontSize: '11px', padding: '2px 8px', borderRadius: '10px' }}>
                            {exp.type === 'work' ? 'Work' : 'Education'}
                          </span>
                        </div>
                        <p style={{ color: '#888', fontSize: '14px', margin: '0 0 2px' }}>{exp.company}</p>
                        <p style={{ color: '#555', fontSize: '13px', margin: '0 0 8px' }}>{exp.duration}</p>
                        <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>{exp.description}</p>
                      </div>
                      <button onClick={() => setExperience(experience.filter((_, idx) => idx !== i))}
                        style={{ background: '#1a0000', color: '#ff4444', border: '1px solid #330000', borderRadius: '8px', padding: '6px 14px', fontSize: '13px', cursor: 'pointer', marginLeft: '16px' }}>Delete</button>
                    </div>
                  ))}
                </div>
              )}
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
                <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Messages Received</h3>
                {contacts.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '48px' }}>
                    <p style={{ fontSize: '40px', marginBottom: '12px' }}>📭</p>
                    <p style={{ color: '#555', fontSize: '14px' }}>No contacts yet</p>
                  </div>
                ) : contacts.map((c, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: '#1a1a1a', borderRadius: '12px', marginBottom: '10px', borderLeft: '3px solid #3b82f6' }}>
                    <div>
                      <p style={{ color: '#fff', fontWeight: '600', margin: '0 0 4px' }}>{c.name}</p>
                      <p style={{ color: '#3b82f6', fontSize: '13px', margin: '0 0 6px' }}>{c.email}</p>
                      <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>{c.message}</p>
                      <p style={{ color: '#444', fontSize: '12px', margin: '4px 0 0' }}>{new Date(c.date).toLocaleDateString()}</p>
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
                {[
                  { key: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/in/username' },
                  { key: 'instagram', label: 'Instagram', placeholder: 'https://instagram.com/username' },
                  { key: 'facebook', label: 'Facebook', placeholder: 'https://facebook.com/username' },
                ].map(s => (
                  <div key={s.key}>
                    <label style={{ color: '#888', fontSize: '13px', display: 'block', marginBottom: '6px' }}>{s.label}</label>
                    <input value={social[s.key] || ''} onChange={e => setSocial({...social, [s.key]: e.target.value})}
                      style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                      placeholder={s.placeholder} />
                  </div>
                ))}
                <button onClick={() => showSave('Social links saved!')}
                  style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '10px', padding: '14px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', alignSelf: 'flex-start' }}>
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
                  { label: 'Skills', value: skills.length, max: 20, color: '#8b5cf6' },
                  { label: 'Experience', value: experience.length, max: 10, color: '#22c55e' },
                  { label: 'Contacts', value: contacts.length, max: 50, color: '#f97316' },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ color: '#888', fontSize: '14px' }}>{item.label}</span>
                      <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>{item.value}</span>
                    </div>
                    <div style={{ background: '#1a1a1a', borderRadius: '4px', height: '8px' }}>
                      <div style={{ background: item.color, height: '8px', borderRadius: '4px', width: `${Math.min((item.value / item.max) * 100, 100)}%`, transition: 'width 0.5s' }} />
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