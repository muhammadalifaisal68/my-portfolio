const websites = [
  {
    title: "Nature Website",
    desc: "A beautiful nature-themed website built during internship at Tareenity.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Business Landing Page",
    desc: "A professional business landing page with modern design and responsive layout.",
    tech: ["React", "Tailwind CSS"]
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website designed to showcase skills and projects.",
    tech: ["React", "Vite", "Tailwind CSS"]
  },
  {
    title: "E-Commerce Page",
    desc: "A product showcase page with clean UI and interactive elements.",
    tech: ["HTML", "CSS", "JavaScript"]
  }
]

export default function Internship() {
  return (
    <section id="internship" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Tareenity Internship</span>
        <h2 className="text-4xl font-bold mt-2">Websites I Built</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          During my internship at Tareenity, I worked on multiple real-world web projects
          that sharpened my development skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {websites.map(site => (
          <div key={site.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 text-lg">
                🌐
              </div>
              <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">{site.title}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{site.desc}</p>
            <div className="flex flex-wrap gap-2">
              {site.tech.map(t => (
                <span key={t} className="bg-blue-950 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}