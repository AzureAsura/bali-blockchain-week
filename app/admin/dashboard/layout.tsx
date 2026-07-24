import AdminSidebar from '@/components/admin/AdminSidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <AdminSidebar />
      <main className="flex-1 md:ml-60 p-6 md:p-8 min-h-screen">
        {children}
      </main>
    </div>
  )
}
