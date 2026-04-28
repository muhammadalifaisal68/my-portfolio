import { useState } from 'react'
import { motion } from 'framer-motion'

// Social icon options
const socialIconOptions = [
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'github', label: 'GitHub' },
  { value: 'twitter', label: 'Twitter/X' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'dribbble', label: 'Dribbble' },
  { value: 'behance', label: 'Behance' }
]

// Helper function
const getStoredData = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue
  } catch {
    return defaultValue
  }
}

// Default social links
const defaultSocials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-ali-faisal-65a6593aa', icon: 'linkedin' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1BaXRKi95J/', icon: 'facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/_ali.faisal9', icon: 'instagram' },
  { name: 'GitHub', url: 'https://github.com', icon: 'github' }
]

// Social Icon Component
const SocialIcon = ({ type }) => {
  const icons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    dribbble: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 0 0-.827-1.736c2.295-.994 4.205-2.205 5.731-3.628a9.913 9.913 0 0 1 2.199 5.437zm-3.37-6.467c-1.418 1.333-3.205 2.45-5.357 3.353a43.198 43.198 0 0 0-3.822-5.793 9.928 9.928 0 0 1 9.179 2.44zm-11.057-2.08c.108-.022.216-.044.324-.064a42.15 42.15 0 0 1 3.846 5.727c-2.988.819-6.114 1.23-9.377 1.23-.338 0-.673-.006-1.004-.018a9.93 9.93 0 0 1 6.211-5.875zM1.985 12.028c0-.076.002-.151.003-.227 3.39.094 6.615-.32 9.688-1.238.243.488.476.978.698 1.467-3.77 1.169-6.739 3.241-8.912 6.219a9.895 9.895 0 0 1-1.477-6.221zm2.916 7.905c2.023-2.787 4.773-4.708 8.262-5.758a41.52 41.52 0 0 1 2.168 7.283 9.915 9.915 0 0 1-10.43-1.525zm12.404.895a42.953 42.953 0 0 0-2.066-6.75c2.012-.263 4.167-.173 6.466.27a9.913 9.913 0 0 1-4.4 6.48z"/>
      </svg>
    ),
    behance: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.573.129 1.067.334 1.485.615.413.283.754.649.986 1.093.232.448.348.994.348 1.638 0 .699-.161 1.296-.469 1.791-.308.496-.767.9-1.377 1.214.827.251 1.44.683 1.837 1.291.396.613.595 1.355.595 2.23 0 .703-.132 1.325-.396 1.863-.262.539-.627.993-1.095 1.358-.469.365-1.011.641-1.632.825-.614.187-1.266.28-1.95.28H0V4.503h6.938zm-.159 5.439c.573 0 1.028-.136 1.362-.407.334-.271.501-.683.501-1.236 0-.311-.054-.563-.162-.759-.108-.196-.257-.349-.444-.46-.188-.109-.401-.186-.648-.229-.242-.043-.501-.065-.777-.065H3.217v3.156h3.562zm.202 5.669c.313 0 .614-.027.9-.088.287-.06.538-.161.758-.307.221-.144.4-.345.534-.6.133-.256.2-.59.2-1.001 0-.789-.229-1.35-.683-1.681-.455-.328-1.051-.492-1.79-.492H3.217v3.969h3.764zm8.503-7.08h5.951v1.456h-5.951V8.531zm6.108 6.543c-.396.548-.945.976-1.65 1.285-.703.309-1.549.462-2.531.462-.582 0-1.131-.056-1.646-.166-.513-.11-.967-.289-1.359-.537-.389-.249-.723-.577-.995-.983-.27-.407-.457-.917-.552-1.531h2.491c.073.367.236.658.487.875.25.217.589.326 1.015.326.371 0 .686-.08.944-.237.258-.157.388-.405.388-.744 0-.26-.086-.463-.256-.61-.17-.146-.394-.261-.67-.343-.276-.083-.591-.159-.944-.229-.65-.132-1.218-.286-1.705-.462-.487-.176-.88-.42-1.182-.736-.301-.316-.453-.759-.453-1.33 0-.473.099-.89.295-1.256.197-.365.475-.677.834-.935.36-.257.787-.453 1.281-.587.495-.135 1.043-.202 1.646-.202.559 0 1.081.059 1.565.176.483.116.908.303 1.272.556.365.253.657.584.876.991.22.406.35.899.386 1.475h-2.452c-.058-.35-.187-.616-.393-.796-.205-.181-.492-.27-.857-.27-.293 0-.541.063-.746.192-.205.128-.307.331-.307.61 0 .216.077.387.231.515.154.129.355.229.6.301.247.072.53.144.85.215.321.072.661.152 1.021.242.359.09.705.212 1.039.367.333.154.627.354.883.599.256.245.459.55.613.912.152.362.228.802.228 1.322-.002.66-.155 1.229-.457 1.713z"/>
      </svg>
    )
  }
  
  return icons[type] || icons.github
}

export default function SocialSection({ onSave }) {
  const [socials, setSocials] = useState(() => {
    const saved = localStorage.getItem('portfolio_socials')
    return saved ? JSON.parse(saved) : defaultSocials
  })

  const [newSocial, setNewSocial] = useState({ name: '', url: '', icon: 'github' })

  const darkMode = localStorage.getItem('darkMode') === 'true'

  const handleChange = (index, field, value) => {
    setSocials(prev => {
      const updated = [...prev]
      updated[index][field] = value
      return updated
    })
  }

  const addSocial = () => {
    if (!newSocial.name || !newSocial.url) return
    const updated = [...socials, newSocial]
    setSocials(updated)
    localStorage.setItem('portfolio_socials', JSON.stringify(updated))
    setNewSocial({ name: '', url: '', icon: 'github' })
    onSave('Social link added!')
  }

  const removeSocial = (index) => {
    const updated = socials.filter((_, i) => i !== index)
    setSocials(updated)
    localStorage.setItem('portfolio_socials', JSON.stringify(updated))
    onSave('Social link removed!')
  }

  const handleSave = () => {
    localStorage.setItem('portfolio_socials', JSON.stringify(socials))
    onSave('Social links saved!')
  }

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-6`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Social Links</h2>
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90"
        >
          Save Changes
        </button>
      </div>

      <div className="space-y-4 mb-6">
        {socials.map((social, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            {/* Icon Preview */}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}>
              <SocialIcon type={social.icon} />
            </div>

            {/* Icon Selector */}
            <select
              value={social.icon}
              onChange={(e) => handleChange(index, 'icon', e.target.value)}
              className={`px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} outline-none`}
            >
              {socialIconOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Name */}
            <input
              type="text"
              value={social.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              placeholder="Platform name"
              className={`flex-1 px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} outline-none`}
            />

            {/* URL */}
            <input
              type="url"
              value={social.url}
              onChange={(e) => handleChange(index, 'url', e.target.value)}
              placeholder="https://..."
              className={`flex-1 px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} outline-none`}
            />

            {/* Delete Button */}
            <button
              onClick={() => removeSocial(index)}
              className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Add New Social Link */}
      <div className={`pt-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <h3 className="font-semibold mb-4">Add New Social Link</h3>
        <div className="flex flex-wrap items-center gap-4">
          <select
            value={newSocial.icon}
            onChange={(e) => setNewSocial(prev => ({ ...prev, icon: e.target.value }))}
            className={`px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} outline-none`}
          >
            {socialIconOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={newSocial.name}
            onChange={(e) => setNewSocial(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Platform name"
            className={`flex-1 min-w-[150px] px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} outline-none`}
          />

          <input
            type="url"
            value={newSocial.url}
            onChange={(e) => setNewSocial(prev => ({ ...prev, url: e.target.value }))}
            placeholder="https://..."
            className={`flex-1 min-w-[200px] px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} outline-none`}
          />

          <button
            onClick={addSocial}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add
          </button>
        </div>
      </div>

      {/* Preview */}
      <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <h3 className="font-semibold mb-4">Preview</h3>
        <div className="flex flex-wrap gap-3">
          {socials.map((social, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              <SocialIcon type={social.icon} />
              <span className="text-sm">{social.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
