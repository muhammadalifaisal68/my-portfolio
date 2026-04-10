import { useState } from 'react'

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    if (username === 'admin' && password === 'admin123') {
      setLoggedIn(true)
    } else {
      setError('Wrong username or password!')
    }
  }

  if (loggedIn) {
    window.location.href = 'https://alifaisal-portfolio.sanity.studio'
    return null
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-white mb-2">Admin Login</h1>
        <p className="text-gray-400 text-center text-sm mb-8">Portfolio CMS Dashboard</p>
        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}