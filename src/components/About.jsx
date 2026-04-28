import { motion } from 'framer-motion'

const getStoredData = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue
  } catch {
    return defaultValue
  }
}

const defaultProfile = {
  name: 'Muhammad Ali Faisal',
  title: 'Computer Science Student',
  bio: 'Dedicated Computer Science student with a strong academic background and Diploma in Information Technology (DIT). Passionate about artificial intelligence, data science, and emerging technologies.',
  stats: [
    { label: 'IELTS Band', value: '6.5' },
    { label: 'Matric', value: '79.5%' },
    { label: 'F.Sc', value: '70.6%' },
    { label: 'Certifications', value: '8+' }
  ]
}

const defaultEducation = [
  {
    year: '2023-25',
    title: 'F.Sc. (Computer Science)',
    description: 'Punjab Group of Colleges - Score: 847/1200 (70.58%)',
    icon: '🎓'
  },
  {
    year: '2023-24',
    title: 'Diploma in IT (DIT)',
    description: 'Brains Institute - Comprehensive IT training including programming, databases, and networking.',
    icon: '💻'
  },
  {
    year: '2013-23',
    title: 'Matriculation (Science)',
    description: 'Saint Francis High School - Score: 875/1100 (79.54%)',
    icon: '📘'
  }
]

const certifications = [
  'Python Programming',
  'Data Analysis with Python',
  'Data Analytics Fundamentals',
  'SQL for Data Science',
  'Cloud Computing Basics',
  'Operating Systems Fundamentals',
  'Technical Support Fundamentals',
  'Microsoft Excel for Business'
]

const languages = [
  { name: 'Pashto', level: 'Native' },
  { name: 'Urdu', level: 'Fluent' },
  { name: 'English', level: 'Proficient (IELTS 6.5)' }
]

export default function About({ darkMode }) {
  const profile = getStoredData('portfolio_profile', defaultProfile)
  const education = getStoredData('portfolio_education', defaultEducation)
  const stats = profile.stats || defaultProfile.stats

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
            Get to know me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative z-10">
              <div className={`w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
                <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👨‍💻</div>
                    <p className={`text-lg font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{profile.name || 'Muhammad Ali Faisal'}</p>
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>CS Student | Data Enthusiast</p>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>IELTS: 6.5 Band</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-4">A passionate learner on a journey</h3>
            
            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {profile.bio || "I'm Muhammad Ali Faisal, a dedicated Computer Science student from Peshawar, Pakistan. With a strong academic background and hands-on experience in Information Technology, I'm passionate about artificial intelligence, data science, and emerging technologies."}
            </p>

            <p className={`mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              My journey includes completing various international certifications in Python, Data Analytics, Cloud Computing, and more. I'm constantly learning and exploring new technologies to stay at the forefront of the tech industry.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`p-4 rounded-xl text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{stat.value}</div>
                  <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-3">International Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <motion.span key={cert} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    {cert}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-3">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <div key={lang.name} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
                    <span className="font-medium">{lang.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Education</h4>
              {education.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">{item.year}</div>
                    {index < education.length - 1 && <div className={`w-0.5 h-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
