export default function Footer({ darkMode }) {
  return (
    <footer className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} py-8 px-6 text-center`}>
      <p className="text-blue-400 text-xl font-bold mb-2">MAF.</p>
      <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Muhammad Ali Faisal — Software Engineer & Data Analytics Student</p>
      <div className={`flex justify-center gap-6 text-sm mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#internship" className="hover:text-blue-400 transition">Internship</a>
        <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </div>
      <div className="flex justify-center gap-3 mb-4">
        <a href="https://www.linkedin.com/in/muhammad-ali-faisal" target="_blank" rel="noreferrer"
          className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition font-bold text-xs">in</a>
        <a href="https://www.instagram.com/_ali.faisal9?igsh=MWJqank1dGVvZXdnYQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"
          className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white transition font-bold text-xs">IG</a>
        <a href="https://www.facebook.com/share/1BaXRKi95J/?mibextid=wwXIfr" target="_blank" rel="noreferrer"
          className="w-8 h-8 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center text-white transition font-bold text-xs">FB</a>
      </div>
      <p className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>© 2025 Muhammad Ali Faisal. All rights reserved.</p>
    </footer>
  )
}