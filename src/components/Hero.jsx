export default function Hero({ darkMode }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-blue-950 via-gray-950 to-gray-950' : 'bg-gradient-to-br from-blue-50 via-white to-white'} z-0`} />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Picture */}
        <div className="mb-8 relative">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-500/20">
            <img src="/images/profile.jpeg" alt="Muhammad Ali Faisal"
              className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        </div>

        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 block">
          Welcome to my portfolio
        </span>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Muhammad Ali Faisal
        </h1>
        <p className={`text-xl mb-6 font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          Software Engineer & Data Analytics Student
        </p>
        <p className={`max-w-2xl mx-auto leading-relaxed mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Motivated Software Engineer and Data Analytics student with hands-on experience in Python,
          SQL, Excel, and cloud computing. Recently completed an internship at
          <span className="text-blue-400 font-medium"> Tareenity</span> where I built
          multiple real-world websites. Seeking opportunities to grow professionally.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition font-medium text-white">
            Hire Me
          </a>
          <a href="#projects" className="border border-blue-600 hover:bg-blue-600/20 px-8 py-3 rounded-full transition font-medium">
            View My Work
          </a>
          <a href="#internship" className={`border px-8 py-3 rounded-full transition font-medium ${darkMode ? 'border-gray-600 hover:bg-gray-800 text-gray-300' : 'border-gray-300 hover:bg-gray-100 text-gray-600'}`}>
            Internship Work
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 mb-12">
          <a href="https://www.linkedin.com/in/muhammad-ali-faisal" target="_blank" rel="noreferrer"
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition font-bold text-sm">
            in
          </a>
          <a href="https://www.instagram.com/_ali.faisal9?igsh=MWJqank1dGVvZXdnYQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 hover:opacity-80 rounded-full flex items-center justify-center text-white transition text-sm font-bold">
            IG
          </a>
          <a href="https://www.facebook.com/share/1BaXRKi95J/?mibextid=wwXIfr" target="_blank" rel="noreferrer"
            className="w-10 h-10 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center text-white transition text-sm font-bold">
            FB
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">5+</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Websites Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">8+</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Certifications</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">1</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Internship</p>
          </div>
        </div>
      </div>
    </section>
  )
}