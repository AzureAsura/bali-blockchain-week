'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  Building2,
  HelpCircle,
  Ticket,
  CalendarDays,
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/dashboard/speakers', label: 'Speakers', icon: Users },
  { href: '/admin/dashboard/sponsors', label: 'Sponsors', icon: Building2 },
  { href: '/admin/dashboard/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/admin/dashboard/tickets', label: 'Tickets', icon: Ticket },
  { href: '/admin/dashboard/event', label: 'Event Details', icon: CalendarDays },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })
    router.push('/admin')
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/5">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
            <img src="/logo.png" alt="BBW" className="w-6 h-6 object-contain" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold leading-none">
              Admin
            </div>
            <div className="text-sm font-black uppercase tracking-tight text-white leading-none mt-0.5">
              BBW CMS
            </div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400'
                  : 'text-zinc-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-orange-500' : 'group-hover:text-orange-500 transition-colors'}`} />
              <span className="text-sm font-semibold">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-white/5 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-white hover:bg-white/5 transition-all text-sm font-semibold"
        >
          <span className="text-orange-500">↗</span>
          View Website
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-red-400 hover:bg-red-500/5 transition-all text-sm font-semibold"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          Logout
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-60 bg-zinc-950/90 backdrop-blur-sm border-r border-white/5 min-h-screen fixed left-0 top-0 z-40">
        <SidebarContent />
      </aside>

      {/* Mobile toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 bg-zinc-950 border border-white/10 rounded-xl text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-zinc-950 border-r border-white/5">
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  )
}
