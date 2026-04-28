import { useState } from 'react'

export default function ExportImport({ onSave }) {
  const darkMode = localStorage.getItem('darkMode') === 'true'

  const exportData = () => {
    const data = {
      profile: JSON.parse(localStorage.getItem('portfolio_profile') || '{}'),
      skills: JSON.parse(localStorage.getItem('portfolio_skills') || '{}'),
      courses: JSON.parse(localStorage.getItem('portfolio_courses') || '[]'),
      projects: JSON.parse(localStorage.getItem('portfolio_projects') || '[]'),
      internships: JSON.parse(localStorage.getItem('portfolio_internships') || '[]'),
      socials: JSON.parse(localStorage.getItem('portfolio_socials') || '[]'),
      contact: JSON.parse(localStorage.getItem('portfolio_contact') || '{}'),
      exportedAt: new Date().toISOString()
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `portfolio-backup-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
    onSave('Data exported successfully!')
  }

  const importData = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result)
        
        if (data.profile) localStorage.setItem('portfolio_profile', JSON.stringify(data.profile))
        if (data.skills) localStorage.setItem('portfolio_skills', JSON.stringify(data.skills))
        if (data.courses) localStorage.setItem('portfolio_courses', JSON.stringify(data.courses))
        if (data.projects) localStorage.setItem('portfolio_projects', JSON.stringify(data.projects))
        if (data.internships) localStorage.setItem('portfolio_internships', JSON.stringify(data.internships))
        if (data.socials) localStorage.setItem('portfolio_socials', JSON.stringify(data.socials))
        if (data.contact) localStorage.setItem('portfolio_contact', JSON.stringify(data.contact))
        
        onSave('Data imported successfully! Refresh to see changes.')
        setTimeout(() => window.location.reload(), 1500)
      } catch (error) {
        alert('Error importing data. Please check the file format.')
      }
    }
    reader.readAsText(file)
  }

  const resetAll = () => {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      localStorage.removeItem('portfolio_profile')
      localStorage.removeItem('portfolio_skills')
      localStorage.removeItem('portfolio_courses')
      localStorage.removeItem('portfolio_projects')
      localStorage.removeItem('portfolio_internships')
      localStorage.removeItem('portfolio_socials')
      localStorage.removeItem('portfolio_contact')
      onSave('All data reset! Refreshing...')
      setTimeout(() => window.location.reload(), 1500)
    }
  }

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-6`}>
      <h2 className="text-xl font-bold mb-6">Export & Import Data</h2>

      <div className="space-y-6">
        {/* Export */}
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className="font-semibold mb-2">📤 Export Data</h3>
          <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Download a backup of all your portfolio data as a JSON file.
          </p>
          <button
            onClick={exportData}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90"
          >
            Export All Data
          </button>
        </div>

        {/* Import */}
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className="font-semibold mb-2">📥 Import Data</h3>
          <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Restore your portfolio data from a previously exported backup file.
          </p>
          <label className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
            <input
              type="file"
              accept=".json"
              onChange={importData}
              className="hidden"
            />
            Choose File to Import
          </label>
        </div>

        {/* Reset */}
        <div className={`p-4 rounded-lg border-2 border-red-500/20 ${darkMode ? 'bg-red-500/10' : 'bg-red-50'}`}>
          <h3 className="font-semibold mb-2 text-red-500">⚠️ Reset All Data</h3>
          <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            This will delete all your portfolio data and reset to defaults. This action cannot be undone.
          </p>
          <button
            onClick={resetAll}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Reset All Data
          </button>
        </div>
      </div>
    </div>
  )
}
