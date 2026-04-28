import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AdminNav from './admin/AdminNav'
import ProfileSection from './admin/ProfileSection'
import SkillsSection from './admin/SkillsSection'
import ProjectsSection from './admin/ProjectsSection'
import InternshipsSection from './admin/InternshipsSection'
import SocialSection from './admin/SocialSection'
import ContactSection from './admin/ContactSection'
import MessagesSection from './admin/MessagesSection'
import EducationSection from './admin/EducationSection'
import ExportImport from './admin/ExportImport'

const sections = [
  { id: 'profile', name: 'Profile', icon: '👤' },
  { id: 'education', name: 'Education', icon: '🎓' },
  { id: 'skills', name: 'Skills & Courses', icon: '💡' },
  { id: 'projects', name: 'Projects', icon: '🚀' },
  { id: 'internships', name: 'Internships', icon: '💼' },
  { id: 'social', name: 'Social Links', icon: '🔗' },
  { id: 'contact', name: 'Contact', icon: '📧' },
  { id: 'messages', name: 'Messages', icon: '💬' },
  { id: 'export', name: 'Export/Import', icon: '💾' }
]

// Admin credentials (in production, use proper auth)
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'maf123'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [activeSection, setActiveSection] = useState('profile')
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? saved === 'true' : true
  })
  const [savedMessage, setSavedMessage] = useState('')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  // Check if already logged in
  useEffect(() => {
    const loggedIn = sessionStorage.getItem('adminLoggedIn')
    if (loggedIn === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (loginForm.username === ADMIN_USERNAME && loginForm.password === ADMIN_PASSWORD) {
      setIsLoggedIn(true)
      sessionStorage.setItem('adminLoggedIn', 'true')
      setLoginError('')
    } else {
      setLoginError('Invalid username or password')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    sessionStorage.removeItem('adminLoggedIn')
  }

  const showSavedMessage = (message = 'Changes saved!') => {
    setSavedMessage(message)
    setTimeout(() => setSavedMessage(''), 2000)
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection onSave={showSavedMessage} />
      case 'education':
        return <EducationSection onSave={showSavedMessage} />
      case 'skills':
        return <SkillsSection onSave={showSavedMessage} />
      case 'projects':
        return <ProjectsSection onSave={showSavedMessage} />
      case 'internships':
        return <InternshipsSection onSave={showSavedMessage} />
      case 'social':
        return <SocialSection onSave={showSavedMessage} />
      case 'contact':
        return <ContactSection onSave={showSavedMessage} />
      case 'messages':
        return <MessagesSection />
      case 'export':
        return <ExportImport onSave={showSavedMessage} />
      default:
        return <ProfileSection onSave={showSavedMessage} />
    }
  }

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`w-full max-w-md p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        >
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🔐</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Admin Login
            </h1>
            <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Enter your credentials to access the admin panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Username
              </label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 outline-none`}
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 outline-none`}
                placeholder="Enter password"
                required
              />
            </div>

            {loginError && (
              <p className="text-red-500 text-sm text-center">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Login
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <a
              href="/"
              className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              ← Back to Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} border-b backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Portfolio Admin
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Logout
            </button>
            <a
              href="/"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:opacity-90"
            >
              View Site
            </a>
          </div>
        </div>
      </header>

      {/* Saved Message */}
      <AnimatePresence>
        {savedMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 z-50 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg"
          >
            ✅ {savedMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <AdminNav
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            darkMode={darkMode}
          />

          {/* Main Content */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  )
}
