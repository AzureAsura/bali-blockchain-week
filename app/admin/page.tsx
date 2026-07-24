'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        setError('Invalid password. Please try again.')
      }
    } catch {
      setError('Failed to connect to server. Make sure backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent animate-[scanline_4s_linear_infinite]"
          style={{ animation: 'scanline 4s linear infinite' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo & header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 mb-6">
            <img src="/logo.png" alt="BBW" className="w-10 h-10 object-contain" />
          </div>
          <div className="text-[10px] tracking-[0.5em] uppercase text-orange-500 font-bold mb-2">
            Admin Portal
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">
            Bali Blockchain<br />
            <span className="text-orange-500">Weeks</span>
          </h1>
          <p className="text-zinc-500 text-sm mt-3 font-medium">
            Content Management System
          </p>
        </div>

        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/20 to-orange-400/10 rounded-2xl blur" />
            <div className="relative bg-zinc-950 border border-white/10 rounded-2xl p-6 space-y-4">

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                  className="w-full bg-black border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors text-sm font-medium"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <span>⚠</span>
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-black font-black uppercase tracking-widest text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Authenticating...
                  </span>
                ) : (
                  'Access Dashboard →'
                )}
              </button>
            </div>
          </div>
        </form>

        <p className="text-center text-zinc-700 text-xs mt-6 font-medium">
          © 2026 Bali Blockchain Weeks. Admin access only.
        </p>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  )
}
