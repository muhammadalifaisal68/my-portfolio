import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const websites = [
  { title: "Nature Explorer", desc: "A beautiful nature-themed website with search functionality and dark mode built during internship at Tareenity.", tech: ["HTML", "CSS", "JavaScript"], image: "/images/nature.png", live: true },
  { title: "Cricket Dashboard", desc: "A cricket stats dashboard showing team squads, player stats and live scorecards for multiple countries.", tech: ["HTML", "CSS", "JavaScript", "API"], image: "/images/cricket.png", live: true },
  { title: "Pokédex Viewer", desc: "A Pokémon search app using the PokéAPI to display detailed information about any Pokémon.", tech: ["HTML", "CSS", "JavaScript", "API"], image: "/images/pokemon.png", live: true },
  { title: "Portfolio Website", desc: "A personal portfolio website built with React, Vite and Tailwind CSS with CMS integration.", tech: ["React", "Vite", "Tailwind CSS"], image: null, link: "https://my-portfolio-zzcr.vercel.app", live: true }
]

export default function Internship({ darkMode }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="internship" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Tareenity Internship</span>
        <h2 className={`text-4xl md:text-5xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Websites I Built</h2>
        <p className={`mt-4 max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          During my internship at Tareenity, I worked on multiple real-world web projects that sharpened my development skills.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {websites.map((site, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }} whileHover={{ y: -6 }}
            className={`${darkMode ? 'bg-gray-900 border-gray-800 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group`}>
            <div className="relative overflow-hidden cursor-pointer h-56" onClick={() => site.image && setSelectedImage(site.image)}>
              {site.image ? (
                <motion.img src={site.image} alt={site.title} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center gap-2">
                  <span className="text-white text-4xl">🌐</span>
                  <span className="text-white text-sm font-medium">Muhammad Ali Faisal</span>
                  <span className="text-blue-200 text-xs">Portfolio Website</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white text-sm font-medium bg-blue-600 px-4 py-2 rounded-full">View Image 🔍</span>
                {site.live && (
                  <span className="flex items-center gap-1.5 text-white text-xs font-medium bg-green-500 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Live
                  </span>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 text-lg">🌐</div>
                <div>
                  <h3 className={`text-lg font-semibold group-hover:text-blue-400 transition ${darkMode ? 'text-white' : 'text-gray-900'}`}>{site.title}</h3>
                </div>
              </div>
              <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{site.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {site.tech.map(t => (
                  <span key={t} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-950 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>{t}</span>
                ))}
              </div>
              {site.link && (
                <a href={site.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition font-medium">
                  Visit Site →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <motion.div initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} className="relative max-w-4xl w-full">
            <img src={selectedImage} alt="Preview" className="w-full rounded-2xl shadow-2xl" />
            <button onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white text-xl transition backdrop-blur-md">✕</button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
