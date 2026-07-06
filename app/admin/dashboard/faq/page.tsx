'use client'

import { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, Save, Loader2, ChevronDown, ChevronUp } from 'lucide-react'

interface FaqQuestion { id: string; q: string; a: string }
interface FaqCategory { id: string; category: string; questions: FaqQuestion[] }

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export default function FaqAdminPage() {
  const [faq, setFaq] = useState<FaqCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [newCategory, setNewCategory] = useState('')
  const [newQuestion, setNewQuestion] = useState<Record<string, { q: string; a: string }>>({})

  const fetchFaq = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`${API}/api/faq`)
    const data = await res.json()
    setFaq(data)
    setLoading(false)
  }, [])

  useEffect(() => { fetchFaq() }, [fetchFaq])

  const handleSaveAll = async () => {
    setSaving(true)
    await fetch(`${API}/api/faq`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(faq),
    })
    setSaving(false)
  }

  const addCategory = () => {
    if (!newCategory.trim()) return
    setFaq(prev => [...prev, { id: Date.now().toString(), category: newCategory.trim(), questions: [] }])
    setNewCategory('')
  }

  const deleteCategory = (id: string) => setFaq(prev => prev.filter(c => c.id !== id))

  const addQuestion = (categoryId: string) => {
    const q = newQuestion[categoryId]
    if (!q?.q?.trim() || !q?.a?.trim()) return
    setFaq(prev => prev.map(cat =>
      cat.id === categoryId
        ? { ...cat, questions: [...cat.questions, { id: `${categoryId}-${Date.now()}`, q: q.q.trim(), a: q.a.trim() }] }
        : cat
    ))
    setNewQuestion(prev => ({ ...prev, [categoryId]: { q: '', a: '' } }))
  }

  const deleteQuestion = (categoryId: string, questionId: string) => {
    setFaq(prev => prev.map(cat =>
      cat.id === categoryId ? { ...cat, questions: cat.questions.filter(q => q.id !== questionId) } : cat
    ))
  }

  const updateQuestion = (categoryId: string, questionId: string, key: 'q' | 'a', val: string) => {
    setFaq(prev => prev.map(cat =>
      cat.id === categoryId
        ? { ...cat, questions: cat.questions.map(q => q.id === questionId ? { ...q, [key]: val } : q) }
        : cat
    ))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-1">Manage</div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">FAQ</h1>
        </div>
        <button
          onClick={handleSaveAll}
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-black font-black text-sm uppercase tracking-wider rounded-xl transition-all hover:-translate-y-0.5"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? 'Saving...' : 'Save All'}
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 text-orange-500 animate-spin" /></div>
      ) : (
        <div className="space-y-4">
          {faq.map(cat => (
            <div key={cat.id} className="bg-zinc-950/80 border border-white/5 rounded-2xl overflow-hidden">
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                onClick={() => setExpanded(expanded === cat.id ? null : cat.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-orange-500 rounded-full" />
                  <span className="font-black text-white uppercase tracking-tighter">{cat.category}</span>
                  <span className="text-xs text-zinc-600 font-medium">({cat.questions.length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteCategory(cat.id) }}
                    className="p-1.5 text-zinc-600 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {expanded === cat.id ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </div>
              </div>

              {expanded === cat.id && (
                <div className="px-6 pb-6 space-y-4 border-t border-white/5 pt-4">
                  {cat.questions.map(q => (
                    <div key={q.id} className="group bg-zinc-900/50 border border-white/5 rounded-xl p-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="flex-1 space-y-2">
                          <input
                            value={q.q}
                            onChange={(e) => updateQuestion(cat.id, q.id, 'q', e.target.value)}
                            placeholder="Question"
                            className="w-full bg-transparent text-sm font-bold text-white border-b border-white/10 focus:border-orange-500 pb-1 outline-none transition-colors"
                          />
                          <textarea
                            value={q.a}
                            onChange={(e) => updateQuestion(cat.id, q.id, 'a', e.target.value)}
                            placeholder="Answer"
                            rows={2}
                            className="w-full bg-transparent text-sm text-zinc-400 border-b border-white/10 focus:border-orange-500 pb-1 outline-none transition-colors resize-none"
                          />
                        </div>
                        <button onClick={() => deleteQuestion(cat.id, q.id)} className="p-1.5 text-zinc-700 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Add question */}
                  <div className="bg-zinc-900/30 border border-dashed border-white/10 rounded-xl p-4 space-y-2">
                    <input
                      value={newQuestion[cat.id]?.q || ''}
                      onChange={(e) => setNewQuestion(prev => ({ ...prev, [cat.id]: { ...prev[cat.id], q: e.target.value } }))}
                      placeholder="New question..."
                      className="w-full bg-transparent text-sm font-bold text-white border-b border-white/10 focus:border-orange-500 pb-1 outline-none transition-colors"
                    />
                    <textarea
                      value={newQuestion[cat.id]?.a || ''}
                      onChange={(e) => setNewQuestion(prev => ({ ...prev, [cat.id]: { ...prev[cat.id], a: e.target.value } }))}
                      placeholder="Answer..."
                      rows={2}
                      className="w-full bg-transparent text-sm text-zinc-400 border-b border-white/10 focus:border-orange-500 pb-1 outline-none transition-colors resize-none"
                    />
                    <button
                      onClick={() => addQuestion(cat.id)}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 hover:text-orange-400 transition-colors"
                    >
                      <Plus className="w-3 h-3" /> Add Question
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Add category */}
          <div className="flex gap-3">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addCategory()}
              placeholder="New category name..."
              className="flex-1 bg-zinc-950/80 border border-white/5 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors"
            />
            <button
              onClick={addCategory}
              className="flex items-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-white text-sm font-bold rounded-xl transition-all"
            >
              <Plus className="w-4 h-4" /> Category
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
