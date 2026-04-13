import { useState } from 'react'

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
    contacts.push({ ...formData, date: new Date().toISOString(), read: false })
    localStorage.setItem('contacts', JSON.stringify(contacts))
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Get In Touch</span>
        <h2 className="text-4xl font-bold mt-2">Contact Me</h2>
        <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Feel free to reach out for internship or job opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Let's talk!</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            I'm currently looking for new opportunities. Whether you have a question,
            a project in mind, or just want to say hi — my inbox is always open!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">📧</div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Email</p>
                <a href="mailto:alifaisal68@icloud.com" className="text-blue-400 hover:underline">alifaisal68@icloud.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">📞</div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Phone</p>
                <p>0317-6185763</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">📍</div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Location</p>
                <p>Peshawar, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 pt-4">
            <a href="https://www.linkedin.com/in/muhammad-ali-faisal" target="_blank" rel="noreferrer"
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition font-bold text-sm">in</a>
            <a href="https://www.instagram.com/_ali.faisal9?igsh=MWJqank1dGVvZXdnYQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"
              className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white transition font-bold text-sm">IG</a>
            <a href="https://www.facebook.com/share/1BaXRKi95J/?mibextid=wwXIfr" target="_blank" rel="noreferrer"
              className="w-10 h-10 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center text-white transition font-bold text-sm">FB</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-2xl p-6`}>
          {submitted ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-4">🎉</p>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>Thanks for reaching out! I'll get back to you soon.</p>
              <button onClick={() => setSubmitted(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition text-sm">
                Send Another
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className={`text-sm mb-1 block ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your Name</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className={`w-full ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition`}
                  placeholder="Muhammad Ali" />
              </div>
              <div>
                <label className={`text-sm mb-1 block ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your Email</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className={`w-full ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition`}
                  placeholder="example@email.com" />
              </div>
              <div>
                <label className={`text-sm mb-1 block ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Message</label>
                <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className={`w-full ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition resize-none`}
                  placeholder="Hi, I'd like to hire you..." rows={5} />
              </div>
              <button onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition">
                Send Message 🚀
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}