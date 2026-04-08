const skills = [
  "Python", "Data Analysis with Python", "SQL for Data Science",
  "Microsoft Excel", "Cloud Computing", "Operating Systems",
  "Technical Support", "Data Analytics Fundamentals"
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map(skill => (
          <span key={skill} className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}