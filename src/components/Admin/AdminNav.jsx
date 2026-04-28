import { motion } from 'framer-motion'

export default function AdminNav({ sections, activeSection, setActiveSection, darkMode }) {
  return (
    <nav className={`w-64 shrink-0 ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4 h-fit sticky top-24`}>
      <h2 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        SECTIONS
      </h2>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <motion.button
              onClick={() => setActiveSection(section.id)}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : darkMode
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span>{section.icon}</span>
              <span>{section.name}</span>
            </motion.button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
