'use client'

import { useState, useEffect, useCallback } from 'react'
import { Save, Loader2, ExternalLink, ToggleLeft, ToggleRight } from 'lucide-react'

interface TicketTier {
  id: string
  title: string
  priceDisplay: string
  priceUSD: number
  caption: string
  isActive: boolean
  isFeatured: boolean
  megatixUrl: string
  features: string[]
}

interface TicketsConfig {
  megatixUrl: string
  tiers: TicketTier[]
}

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export default function TicketsAdminPage() {
  const [config, setConfig] = useState<TicketsConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const fetchConfig = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`${API}/api/tickets`)
    const data = await res.json()
    setConfig(data)
    setLoading(false)
  }, [])

  useEffect(() => { fetchConfig() }, [fetchConfig])

  const handleSave = async () => {
    if (!config) return
    setSaving(true)
    await fetch(`${API}/api/tickets`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(config),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const updateTier = (id: string, key: keyof TicketTier, val: string | boolean | number | string[]) => {
    setConfig(prev => prev ? {
      ...prev,
      tiers: prev.tiers.map(t => t.id === id ? { ...t, [key]: val } : t)
    } : prev)
  }

  const updateFeature = (tierId: string, idx: number, val: string) => {
    setConfig(prev => {
      if (!prev) return prev
      return {
        ...prev,
        tiers: prev.tiers.map(t => {
          if (t.id !== tierId) return t
          const features = [...t.features]
          features[idx] = val
          return { ...t, features }
        })
      }
    })
  }

  const addFeature = (tierId: string) => {
    setConfig(prev => prev ? {
      ...prev,
      tiers: prev.tiers.map(t => t.id === tierId ? { ...t, features: [...t.features, ''] } : t)
    } : prev)
  }

  const removeFeature = (tierId: string, idx: number) => {
    setConfig(prev => prev ? {
      ...prev,
      tiers: prev.tiers.map(t => t.id === tierId ? { ...t, features: t.features.filter((_, i) => i !== idx) } : t)
    } : prev)
  }

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <Loader2 className="w-6 h-6 text-orange-500 animate-spin" />
    </div>
  )

  if (!config) return null

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-1">Manage</div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">Tickets & Megatix</h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`flex items-center gap-2 px-5 py-2.5 font-black text-sm uppercase tracking-wider rounded-xl transition-all hover:-translate-y-0.5 disabled:opacity-50 ${
            saved ? 'bg-green-500 text-white' : 'bg-orange-500 hover:bg-orange-600 text-black'
          }`}
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? 'Saving...' : saved ? 'Saved ✓' : 'Save All'}
        </button>
      </div>

      {/* Global Megatix URL */}
      <div className="mb-6 p-5 bg-zinc-950/80 border border-orange-500/20 rounded-2xl">
        <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">Default Megatix URL</div>
        <p className="text-zinc-500 text-xs mb-3">Fallback URL used if a tier doesn't have its own Megatix URL</p>
        <div className="flex gap-3">
          <input
            type="url"
            value={config.megatixUrl}
            onChange={(e) => setConfig(prev => prev ? { ...prev, megatixUrl: e.target.value } : prev)}
            placeholder="https://megatix.co.id/event/..."
            className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors"
          />
          <a
            href={config.megatixUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border border-white/5 rounded-xl text-sm text-zinc-400 hover:text-orange-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Ticket Tiers */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">Ticket Tiers</h2>
        {config.tiers.map(tier => (
          <div key={tier.id} className={`bg-zinc-950/80 border rounded-2xl overflow-hidden transition-all ${tier.isFeatured ? 'border-orange-500/30' : 'border-white/5'}`}>
            {tier.isFeatured && (
              <div className="px-6 py-1.5 bg-orange-500/10 border-b border-orange-500/20">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Featured Tier</span>
              </div>
            )}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Tier Name</label>
                  <input type="text" value={tier.title} onChange={(e) => updateTier(tier.id, 'title', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Price Display</label>
                  <input type="text" value={tier.priceDisplay} onChange={(e) => updateTier(tier.id, 'priceDisplay', e.target.value)}
                    placeholder="e.g. IDR 500K or FREE"
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Caption</label>
                  <input type="text" value={tier.caption} onChange={(e) => updateTier(tier.id, 'caption', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Megatix URL (this tier)</label>
                  <div className="flex gap-2">
                    <input type="url" value={tier.megatixUrl} onChange={(e) => updateTier(tier.id, 'megatixUrl', e.target.value)}
                      placeholder="https://megatix.co.id/..."
                      className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                    />
                    <a href={tier.megatixUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2.5 bg-zinc-900 border border-white/5 rounded-xl text-zinc-400 hover:text-orange-500 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Toggles */}
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => updateTier(tier.id, 'isActive', !tier.isActive)}
                  className={`flex items-center gap-2 text-sm font-bold transition-colors ${tier.isActive ? 'text-green-400' : 'text-zinc-500'}`}
                >
                  {tier.isActive ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                  {tier.isActive ? 'Active' : 'Inactive'}
                </button>
                <button
                  onClick={() => updateTier(tier.id, 'isFeatured', !tier.isFeatured)}
                  className={`flex items-center gap-2 text-sm font-bold transition-colors ${tier.isFeatured ? 'text-orange-400' : 'text-zinc-500'}`}
                >
                  {tier.isFeatured ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                  Featured
                </button>
              </div>

              {/* Features */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Features</label>
                <div className="space-y-2">
                  {tier.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      <input
                        type="text"
                        value={f}
                        onChange={(e) => updateFeature(tier.id, idx, e.target.value)}
                        className="flex-1 bg-transparent border-b border-white/10 focus:border-orange-500 py-1 text-sm text-white outline-none transition-colors"
                      />
                      <button onClick={() => removeFeature(tier.id, idx)} className="text-zinc-700 hover:text-red-400 text-xs transition-colors">✕</button>
                    </div>
                  ))}
                  <button onClick={() => addFeature(tier.id)} className="text-xs text-orange-500 hover:text-orange-400 font-bold uppercase tracking-widest transition-colors mt-1">
                    + Add Feature
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
