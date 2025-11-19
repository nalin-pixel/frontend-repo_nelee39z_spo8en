import { Bell, Search, ChevronDown } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800/60 bg-slate-900/60 backdrop-blur flex items-center justify-between px-4 sticky top-0 z-20">
      <div className="relative w-full max-w-md">
        <input
          placeholder="Search..."
          className="w-full bg-slate-800/60 border border-slate-700/60 rounded-lg py-2 pl-10 pr-3 text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-slate-800/60 text-slate-300">
          <Bell size={18} />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-lg px-2 py-1">
          <img src="https://i.pravatar.cc/32" alt="avatar" className="w-7 h-7 rounded-md" />
          <span className="text-slate-200 text-sm hidden sm:block">Alex</span>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>
    </header>
  )
}
