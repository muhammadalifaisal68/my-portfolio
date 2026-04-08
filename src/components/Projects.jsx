const projects = [
  {
    title: "Data Analysis with Python & Excel",
    desc: "Performed basic data analysis using Python and Excel on small datasets to identify trends and patterns."
  },
  {
    title: "SQL Reporting",
    desc: "Practiced SQL queries for data retrieval and reporting from structured databases."
  },
  {
    title: "Analysis Reports",
    desc: "Created simple analysis reports and spreadsheets to present findings clearly."
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.title} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">{p.title}</h3>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}