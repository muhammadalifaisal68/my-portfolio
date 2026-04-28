import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const defaultProfile = {
  name: 'Muhammad Ali Faisal',
  title: 'Software Engineer & Data Analyst',
  tagline: 'Computer Science Student passionate about building software solutions.',
  bio: 'Motivated Software Engineer, Data Analytics & Computer Science student with hands-on experience in Python, SQL, Excel, and Cloud Computing.',
  location: 'Peshawar, Pakistan',
  email: 'muhammadalifaisal68@gmail.com',
  phone: '+92 317-6185763'
}

export default function ProfileSection({ onSave }) {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('portfolio_profile')
    return saved ? JSON.parse(saved) : defaultProfile
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    localStorage.setItem('portfolio_profile', JSON.stringify(profile))
    onSave('Profile saved successfully!')
  }

  const handleReset = () => {
    setProfile(defaultProfile)
    localStorage.setItem('portfolio_profile', JSON.stringify(defaultProfile))
    onSave('Profile reset to default!')
  }

  return (
    <div className={`rounded-xl ${darkMode => 'bg-gray-900'} border border-gray-200 dark:border-gray-800 p-6`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Profile Information</h2>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Reset
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Title/Role</label>
          <input
            type="text"
            name="title"
            value={profile.title}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="e.g., Software Engineer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tagline</label>
          <input
            type="text"
            name="tagline"
            value={profile.tagline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Short tagline"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="City, Country"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="+92 XXX XXX XXXX"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            placeholder="Tell visitors about yourself..."
          />
        </div>
      </div>
    </div>
  )

  function darkMode() {
    return localStorage.getItem('darkMode') === 'true'
  }
}
