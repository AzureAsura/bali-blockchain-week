'use client'

import { useState, useEffect, useCallback } from 'react'
import { Plus, Pencil, Trash2, X, Save, Loader2 } from 'lucide-react'

interface Sponsor {
  id: string
  name: string
  logo: string
  website: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'community'
  order: number
}

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
const TIERS = ['platinum', 'gold', 'silver', 'bronze', 'community']
const EMPTY: Omit<Sponsor, 'id'> = { name: '', logo: '/logo.png', website: '', tier: 'gold', order: 99 }
const TIER_COLOR: Record<string, string> = {
  platinum: 'text-blue-300 border-blue-500/30',
  gold: 'text-yellow-400 border-yellow-500/30',
  silver: 'text-zinc-300 border-zinc-500/30',
  bronze: 'text-orange-400 border-orange-500/30',
  community: 'text-purple-400 border-purple-500/30',
}

export default function SponsorsAdminPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState<{ open: boolean; mode: 'add' | 'edit'; data: Partial<Sponsor> }>({
    open: false, mode: 'add', data: EMPTY
  })
  const [saving, setSaving] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const fetchSponsors = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`${API}/api/sponsors`)
    const data = await res.json()
    setSponsors(data)
    setLoading(false)
  }, [])

  useEffect(() => { fetchSponsors() }, [fetchSponsors])

  const openAdd = () => setModal({ open: true, mode: 'add', data: { ...EMPTY } })
  const openEdit = (s: Sponsor) => setModal({ open: true, mode: 'edit', data: { ...s } })
  const closeModal = () => setModal(m => ({ ...m, open: false }))

  const handleSave = async () => {
    setSaving(true)
    try {
      if (modal.mode === 'add') {
        await fetch(`${API}/api/sponsors`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(modal.data),
        })
      } else {
        await fetch(`${API}/api/sponsors/${modal.data.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(modal.data),
        })
      }
      closeModal(); fetchSponsors()
    } finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => {
    setDeleteId(id)
    await fetch(`${API}/api/sponsors/${id}`, { method: 'DELETE', credentials: 'include' })
    setDeleteId(null); fetchSponsors()
  }

  const updateField = (key: keyof Sponsor, val: string | number) =>
    setModal(m => ({ ...m, data: { ...m.data, [key]: val } }))

  const grouped = TIERS.reduce((acc, tier) => ({
    ...acc,
    [tier]: sponsors.filter(s => s.tier === tier)
  }), {} as Record<string, Sponsor[]>)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-1">Manage</div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">Sponsors</h1>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-black font-black text-sm uppercase tracking-wider rounded-xl transition-all hover:-translate-y-0.5"
        >
          <Plus className="w-4 h-4" /> Add Sponsor
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-6 h-6 text-orange-500 animate-spin" />
        </div>
      ) : (
        <div className="space-y-6">
          {TIERS.map(tier => {
            const group = grouped[tier] || []
            if (group.length === 0) return null
            return (
              <div key={tier}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest mb-4 ${TIER_COLOR[tier]}`}>
                  {tier}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {group.map(s => (
                    <div key={s.id} className="group relative bg-zinc-950/80 border border-white/5 rounded-xl p-4 hover:border-orange-500/20 transition-all">
                      <div className="flex items-center justify-center h-16 mb-3">
                        <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain"
                          onError={(e) => { (e.target as HTMLImageElement).src = '/logo.png' }} />
                      </div>
                      <div className="text-xs font-bold text-white text-center truncate">{s.name}</div>
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => openEdit(s)} className="p-1.5 bg-zinc-900 border border-white/10 rounded-lg hover:text-orange-500 transition-colors">
                          <Pencil className="w-3 h-3" />
                        </button>
                        <button onClick={() => handleDelete(s.id)} disabled={deleteId === s.id} className="p-1.5 bg-zinc-900 border border-white/10 rounded-lg hover:text-red-400 transition-colors disabled:opacity-50">
                          {deleteId === s.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Trash2 className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
          {sponsors.length === 0 && (
            <div className="text-center py-20 text-zinc-600">
              <div className="text-4xl mb-3">🏢</div>
              <p className="font-semibold">No sponsors yet</p>
              <button onClick={openAdd} className="mt-4 text-orange-500 text-sm hover:underline">Add first sponsor</button>
            </div>
          )}
        </div>
      )}

      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <h2 className="text-lg font-black uppercase tracking-tighter text-white">
                {modal.mode === 'add' ? 'Add Sponsor' : 'Edit Sponsor'}
              </h2>
              <button onClick={closeModal} className="p-1.5 hover:text-orange-500 transition-colors"><X className="w-5 h-5" /></button>
            </div>
            <div className="px-6 py-5 space-y-4">
              {([
                { key: 'name', label: 'Company Name', placeholder: 'e.g. Binance' },
                { key: 'logo', label: 'Logo URL', placeholder: '/sponsors/binance.png or https://...' },
                { key: 'website', label: 'Website', placeholder: 'https://binance.com' },
              ] as { key: keyof Sponsor; label: string; placeholder: string }[]).map(f => (
                <div key={f.key}>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">{f.label}</label>
                  <input type="text" value={(modal.data[f.key] as string) || ''} onChange={(e) => updateField(f.key, e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1.5">Tier</label>
                <select value={modal.data.tier || 'gold'} onChange={(e) => updateField('tier', e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors capitalize">
                  {TIERS.map(t => <option key={t} value={t} className="capitalize">{t}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-white/5">
              <button onClick={closeModal} className="flex-1 py-2.5 border border-white/10 rounded-xl text-sm font-bold text-zinc-400 hover:text-white transition-all">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-orange-500 hover:bg-orange-600 text-black font-black text-sm uppercase tracking-wider rounded-xl transition-all disabled:opacity-50">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
