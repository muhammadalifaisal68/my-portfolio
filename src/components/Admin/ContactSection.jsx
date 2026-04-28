import { useState } from 'react'

const defaultContact = {
  email: 'muhammadalifaisal68@gmail.com',
  phone: '+92 317-6185763',
  location: 'Peshawar, Pakistan',
  availability: 'Available for opportunities'
}

export default function ContactSection({ onSave }) {
  const [contact, setContact] = useState(() => {
    const saved = localStorage.getItem('portfolio_contact')
    return saved ? JSON.parse(saved) : defaultContact
  })

  const darkMode = localStorage.getItem('darkMode') === 'true'

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    localStorage.setItem('portfolio_contact', JSON.stringify(contact))
    onSave('Contact info saved!')
  }

  const handleReset = () => {
    setContact(defaultContact)
    localStorage.setItem('portfolio_contact', JSON.stringify(defaultContact))
    onSave('Contact reset to default!')
  }

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-6`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Contact Information</h2>
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
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            placeholder="+92 XXX XXX XXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={contact.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            placeholder="City, Country"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Availability Status</label>
          <input
            type="text"
            name="availability"
            value={contact.availability}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            placeholder="e.g., Available for opportunities"
          />
        </div>
      </div>

      <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h3 className="font-semibold mb-2">Preview</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>{contact.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📱</span>
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{contact.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
