import { Users, Building2, HelpCircle, Ticket, CalendarDays, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const API_URL = process.env.ADMIN_API_URL || 'http://localhost:3001'

async function getStats() {
  try {
    const [speakers, sponsors, faq, tickets, event] = await Promise.all([
      fetch(`${API_URL}/api/speakers`, { cache: 'no-store' }).then(r => r.json()),
      fetch(`${API_URL}/api/sponsors`, { cache: 'no-store' }).then(r => r.json()),
      fetch(`${API_URL}/api/faq`, { cache: 'no-store' }).then(r => r.json()),
      fetch(`${API_URL}/api/tickets`, { cache: 'no-store' }).then(r => r.json()),
      fetch(`${API_URL}/api/event`, { cache: 'no-store' }).then(r => r.json()),
    ])
    return { speakers, sponsors, faq, tickets, event }
  } catch {
    return { speakers: [], sponsors: [], faq: [], tickets: { tiers: [] }, event: {} }
  }
}

export default async function DashboardPage() {
  const { speakers, sponsors, faq, tickets, event } = await getStats()

  const stats = [
    {
      label: 'Speakers',
      value: speakers.length,
      icon: Users,
      href: '/admin/dashboard/speakers',
      color: 'orange'
    },
    {
      label: 'Sponsors',
      value: sponsors.length,
      icon: Building2,
      href: '/admin/dashboard/sponsors',
      color: 'orange'
    },
    {
      label: 'FAQ Categories',
      value: faq.length,
      icon: HelpCircle,
      href: '/admin/dashboard/faq',
      color: 'orange'
    },
    {
      label: 'Ticket Tiers',
      value: tickets.tiers?.length || 0,
      icon: Ticket,
      href: '/admin/dashboard/tickets',
      color: 'orange'
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-2">
          Content Management System
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tighter text-white">
          Dashboard
        </h1>
        <p className="text-zinc-500 text-sm mt-1 font-medium">
          Manage all website content from here
        </p>
      </div>

      {/* Event Info Banner */}
      {event.name && (
        <div className="mb-8 p-5 rounded-2xl bg-orange-500/5 border border-orange-500/20 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-1">Current Event</div>
            <div className="text-white font-black text-lg uppercase tracking-tighter">{event.name}</div>
            <div className="text-zinc-400 text-sm font-medium mt-0.5">
              {event.dateDisplay} · {event.venue}
            </div>
          </div>
          <Link
            href="/admin/dashboard/event"
            className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold uppercase tracking-wider rounded-xl transition-all"
          >
            Edit <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group p-5 bg-zinc-950/80 border border-white/5 hover:border-orange-500/30 rounded-2xl transition-all duration-300 hover:bg-zinc-900/80"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-4 h-4 text-orange-500" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-orange-500 transition-colors" />
              </div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{stat.label}</div>
            </Link>
          )
        })}
      </div>

      {/* Quick links */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Manage Speakers', desc: 'Add, edit, or remove event speakers', href: '/admin/dashboard/speakers', icon: Users },
            { label: 'Manage Tickets', desc: 'Update Megatix URLs and ticket tiers', href: '/admin/dashboard/tickets', icon: Ticket },
            { label: 'Manage Sponsors', desc: 'Add or update sponsor logos and tiers', href: '/admin/dashboard/sponsors', icon: Building2 },
            { label: 'Edit FAQ', desc: 'Update frequently asked questions', href: '/admin/dashboard/faq', icon: HelpCircle },
          ].map(item => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-4 p-4 bg-zinc-950/60 border border-white/5 hover:border-orange-500/20 rounded-xl transition-all duration-200 hover:bg-zinc-900/60"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center transition-all">
                  <Icon className="w-5 h-5 text-zinc-500 group-hover:text-orange-500 transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{item.label}</div>
                  <div className="text-xs text-zinc-600">{item.desc}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-orange-500 transition-colors" />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
