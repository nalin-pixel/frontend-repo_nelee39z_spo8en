import { Home, BarChart3, Users2, Settings, LogOut, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  const nav = [
    { icon: Home, label: 'Overview' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users2, label: 'Teams' },
    { icon: Settings, label: 'Settings' },
  ]

  return (
    <aside className={`${open ? 'w-64' : 'w-20'} transition-all duration-300 bg-slate-900/60 backdrop-blur border-r border-slate-800/60 h-screen sticky top-0 hidden md:flex flex-col`}> 
      <div className="flex items-center gap-3 px-4 h-16 border-b border-slate-800/60">
        <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-slate-800/60 text-slate-300">
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-md shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
          {open && <span className="text-slate-100 font-semibold tracking-wide">Nebula Dash</span>}
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {nav.map((item) => (
          <a key={item.label} href="#" className="group flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60">
            <item.icon size={18} className="text-slate-400 group-hover:text-slate-200" />
            {open && <span>{item.label}</span>}
          </a>
        ))}
      </nav>

      <div className="p-3 border-t border-slate-800/60">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60">
          <LogOut size={18} className="text-slate-400" />
          {open && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}
