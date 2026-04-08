import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Internship />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App