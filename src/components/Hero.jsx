export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-950 to-gray-950 z-0" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 block">
          Welcome to my portfolio
        </span>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Muhammad Ali Faisal
        </h1>
        <p className="text-xl text-blue-400 mb-6 font-medium">
          Software Engineer & Data Analytics Student
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Motivated Software Engineer and Data Analytics student with hands-on experience 
          in Python, SQL, Excel, and cloud computing. Recently completed an internship at 
          <span className="text-blue-400 font-medium"> Tareenity</span> where I built 
          multiple real-world websites. Seeking opportunities to grow professionally.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition font-medium">
            Hire Me
          </a>
          <a href="#projects" className="border border-blue-600 hover:bg-blue-600/20 px-8 py-3 rounded-full transition font-medium">
            View My Work
          </a>
          <a href="#internship" className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-full transition font-medium text-gray-300">
            Internship Work
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">5+</p>
            <p className="text-gray-400 text-sm">Websites Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">8+</p>
            <p className="text-gray-400 text-sm">Certifications</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">1</p>
            <p className="text-gray-400 text-sm">Internship</p>
          </div>
        </div>
      </div>
    </section>
  )
}