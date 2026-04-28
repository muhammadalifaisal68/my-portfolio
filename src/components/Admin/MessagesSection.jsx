import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MessagesSection() {
  const [messages, setMessages] = useState([])
  const darkMode = localStorage.getItem('darkMode') === 'true'

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_messages')
    if (saved) {
      setMessages(JSON.parse(saved))
    }
  }, [])

  const deleteMessage = (index) => {
    const updated = messages.filter((_, i) => i !== index)
    setMessages(updated)
    localStorage.setItem('portfolio_messages', JSON.stringify(updated))
  }

  const clearAll = () => {
    if (confirm('Are you sure you want to delete all messages?')) {
      setMessages([])
      localStorage.removeItem('portfolio_messages')
    }
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-6`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Contact Messages</h2>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Messages sent through your portfolio contact form
          </p>
        </div>
        {messages.length > 0 && (
          <button
            onClick={clearAll}
            className="px-4 py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500/10"
          >
            Clear All
          </button>
        )}
      </div>

      {messages.length === 0 ? (
        <div className={`text-center py-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          <div className="text-4xl mb-4">📭</div>
          <p>No messages yet</p>
          <p className="text-sm mt-2">When someone sends you a message through the contact form, it will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg border ${darkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold">{msg.name}</h3>
                  <p className="text-sm text-blue-500">{msg.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {formatDate(msg.timestamp)}
                  </span>
                  <button
                    onClick={() => deleteMessage(index)}
                    className="p-1 text-red-500 hover:bg-red-500/10 rounded"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Subject: {msg.subject}
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {msg.message}
              </p>
              <div className="mt-3 flex gap-2">
                <a
                  href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                  className="px-3 py-1 text-xs bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500/20"
                >
                  Reply
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
