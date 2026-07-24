'use client'

import { useState, useEffect, useCallback } from 'react'
import { Save, Loader2, ExternalLink } from 'lucide-react'

interface EventDetails {
  name: string
  date: string
  dateDisplay: string
  venue: string
  description: string
  email: string
  instagram: string
  twitter: string
  telegram: string
  website: string
}

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export default function EventAdminPage() {
  const [event, setEvent] = useState<EventDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const fetchEvent = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`${API}/api/event`)
    const data = await res.json()
    setEvent(data)
    setLoading(false)
  }, [])

  useEffect(() => { fetchEvent() }, [fetchEvent])

  const handleSave = async () => {
    if (!event) return
    setSaving(true)
    await fetch(`${API}/api/event`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(event),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const update = (key: keyof EventDetails, val: string) =>
    setEvent(prev => prev ? { ...prev, [key]: val } : prev)

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <Loader2 className="w-6 h-6 text-orange-500 animate-spin" />
    </div>
  )

  if (!event) return null

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-1">Manage</div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">Event Details</h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`flex items-center gap-2 px-5 py-2.5 font-black text-sm uppercase tracking-wider rounded-xl transition-all hover:-translate-y-0.5 disabled:opacity-50 ${
            saved ? 'bg-green-500 text-white' : 'bg-orange-500 hover:bg-orange-600 text-black'
          }`}
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? 'Saving...' : saved ? 'Saved ✓' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-5">
        {/* Basic Info */}
        <div className="bg-zinc-950/80 border border-white/5 rounded-2xl p-6 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2">Basic Information</div>
          {([
            { key: 'name', label: 'Event Name', placeholder: 'Bali Blockchain Weeks' },
            { key: 'dateDisplay', label: 'Date Display', placeholder: '19 August, 2026' },
            { key: 'date', label: 'Date (ISO)', placeholder: '2026-08-19' },
            { key: 'venue', label: 'Venue', placeholder: 'Bali, Indonesia' },
          ] as { key: keyof EventDetails; label: string; placeholder: string }[]).map(f => (
            <div key={f.key}>
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">{f.label}</label>
              <input
                type="text"
                value={event[f.key]}
                onChange={(e) => update(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Description</label>
            <textarea
              value={event.description}
              onChange={(e) => update('description', e.target.value)}
              rows={4}
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors resize-none"
            />
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="bg-zinc-950/80 border border-white/5 rounded-2xl p-6 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2">Contact & Socials</div>
          {([
            { key: 'email', label: 'Email', placeholder: 'info@baliblockchainweeks.com' },
            { key: 'website', label: 'Website', placeholder: 'https://baliblockchainweeks.com' },
            { key: 'instagram', label: 'Instagram URL', placeholder: 'https://instagram.com/...' },
            { key: 'twitter', label: 'Twitter / X URL', placeholder: 'https://x.com/...' },
            { key: 'telegram', label: 'Telegram URL', placeholder: 'https://t.me/...' },
          ] as { key: keyof EventDetails; label: string; placeholder: string }[]).map(f => (
            <div key={f.key}>
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">{f.label}</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={event[f.key]}
                  onChange={(e) => update(f.key, e.target.value)}
                  placeholder={f.placeholder}
                  className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors"
                />
                {event[f.key]?.startsWith('http') && (
                  <a href={event[f.key]} target="_blank" rel="noopener noreferrer"
                    className="flex items-center px-3 bg-zinc-900 border border-white/5 rounded-xl text-zinc-500 hover:text-orange-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
