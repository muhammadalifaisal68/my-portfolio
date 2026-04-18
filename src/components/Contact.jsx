import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_bv3mv27'
const TEMPLATE_ID = 'gnodjtj'
const PUBLIC_KEY = 'ZFWM6VmxJQlAG2qJh'

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields!')
      return
    }
    setSending(true)
    setError('')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Muhammad Ali Faisal',
      }, PUBLIC_KEY)
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
      contacts.push({ ...formData, date: new Date().toISOString(), read: false })
      localStorage.setItem('contacts', JSON.stringify(contacts))
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setError('Failed to send message. Please try again!')
    }
    setSending(false)
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Get In Touch</span>
        <h2 className="text-4xl font-bold mt-2">Contact Me</h2>
        <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Feel free to reach out for internship or job opportunities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6">
          <h3 className="text-xl font-semibold">Let's talk!</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            I'm currently looking for new opportunities. Whether you have a question,
            a project in mind, or just want to say hi — my inbox is always open!
          </p>
          <div className="space-y-4">
            {[
              { icon: '📧', label: 'Email', value: 'muhammadalifaisal68@gmail.com', href: 'mailto:muhammadalifaisal68@gmail.com' },
              { icon: '📞', label: 'Phone', value: '0317-6185763', href: null },
              { icon: '📍', label: 'Location', value: 'Peshawar, Pakistan', href: null },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ x: 6 }} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">{item.icon}</div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-blue-400 hover:underline">{item.value}</a>
                  ) : (
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            {[
              { href: "https://www.linkedin.com/in/muhammad-ali-faisal", bg: "bg-blue-600 hover:bg-blue-700", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
              { href: "https://www.instagram.com/_ali.faisal9?igsh=MWJqank1dGVvZXdnYQ%3D%3D&utm_source=qr", bg: "bg-gradient-to-br from-pink-500 to-purple-600", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
              { href: "https://www.facebook.com/share/1BaXRKi95J/?mibextid=wwXIfr", bg: "bg-blue-800 hover:bg-blue-900", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
            ].map((social, i) => (
              <motion.a key={i} href={social.href} target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 ${social.bg} rounded-full flex items-center justify-center text-white transition`}>
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}
          className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-2xl p-6`}>
          {submitted ? (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12">
              <motion.p animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5 }} className="text-4xl mb-4">🎉</motion.p>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>
                Thanks for reaching out! I'll get back to you soon. Check your email for confirmation!
              </p>
              <button onClick={() => setSubmitted(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition text-sm">
                Send Another
              </button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {error && <p className="text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-xl">{error}</p>}
              {[
                { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Muhammad Ali' },
                { label: 'Your Email', key: 'email', type: 'email', placeholder: 'example@email.com' },
              ].map((field, i) => (
                <div key={i}>
                  <label className={`text-sm mb-1 block ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{field.label}</label>
                  <input type={field.type} value={formData[field.key]}
                    onChange={e => setFormData({...formData, [field.key]: e.target.value})}
                    className={`w-full ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition`}
                    placeholder={field.placeholder} />
                </div>
              ))}
              <div>
                <label className={`text-sm mb-1 block ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Message</label>
                <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className={`w-full ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition resize-none`}
                  placeholder="Hi, I'd like to hire you..." rows={5} />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={handleSubmit} disabled={sending}
                className={`w-full ${sending ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 rounded-xl font-medium transition shadow-lg shadow-blue-500/20`}>
                {sending ? 'Sending... ⏳' : 'Send Message 🚀'}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}