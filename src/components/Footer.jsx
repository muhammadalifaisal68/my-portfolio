export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6 text-center">
      <p className="text-blue-400 text-xl font-bold mb-2">MAF.</p>
      <p className="text-gray-400 text-sm mb-4">Muhammad Ali Faisal — Software Engineer & Data Analytics Student</p>
      <div className="flex justify-center gap-6 text-sm text-gray-500 mb-4">
        <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#internship" className="hover:text-blue-400 transition">Internship</a>
        <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </div>
      <p className="text-gray-600 text-xs">© 2025 Muhammad Ali Faisal. All rights reserved.</p>
    </footer>
  )
}