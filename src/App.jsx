import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Hero3D from './components/Hero3D'
import Stats from './components/Stats'
import ChartPanel from './components/ChartPanel'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.12),transparent)]" />
      </div>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Topbar />
          <div className="px-4 md:px-6 lg:px-8 py-6 space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Dashboard</h1>
                  <p className="text-slate-400 text-sm">Dark, futuristic, and minimal — a perfect starting point for your analytics.</p>
                </div>
                <Hero3D />
                <Stats />
                <ChartPanel />
              </div>

              <aside className="space-y-4">
                <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-5">
                  <h3 className="font-semibold mb-3">Recent Activity</h3>
                  <ul className="space-y-3">
                    {[
                      { t: 'New signup', s: '2m ago', c: 'from-blue-500 to-cyan-400' },
                      { t: 'Invoice paid', s: '15m ago', c: 'from-emerald-500 to-teal-400' },
                      { t: 'Server deploy', s: '1h ago', c: 'from-purple-500 to-pink-500' },
                      { t: 'Usage spike', s: '3h ago', c: 'from-orange-500 to-amber-400' },
                    ].map((a, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-tr ${a.c} shadow-[0_0_10px_rgba(59,130,246,0.6)]`} />
                        <div className="flex-1">
                          <p className="text-sm">{a.t}</p>
                          <p className="text-xs text-slate-400">{a.s}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-5">
                  <h3 className="font-semibold mb-3">Team</h3>
                  <div className="space-y-3">
                    {[1,2,3].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <img className="w-9 h-9 rounded-md" src={`https://i.pravatar.cc/40?img=${i+10}`} alt="avatar" />
                        <div className="flex-1">
                          <p className="text-sm">Member {i}</p>
                          <p className="text-xs text-slate-400">Online</p>
                        </div>
                        <button className="text-xs px-2 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300 hover:bg-slate-800">View</button>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-800/60 flex items-center justify-between">
                <h3 className="font-semibold">Top Pages</h3>
                <span className="text-xs text-slate-400">Last 7 days</span>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-400">
                      <th className="px-5 py-3 font-medium">Page</th>
                      <th className="px-5 py-3 font-medium">Views</th>
                      <th className="px-5 py-3 font-medium">Bounce</th>
                      <th className="px-5 py-3 font-medium">Avg. Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { page: '/home', views: '58,203', bounce: '31%', time: '2m 12s' },
                      { page: '/pricing', views: '24,910', bounce: '22%', time: '3m 03s' },
                      { page: '/docs', views: '18,342', bounce: '18%', time: '4m 44s' },
                      { page: '/blog', views: '12,505', bounce: '27%', time: '2m 57s' },
                    ].map((r, i) => (
                      <tr key={i} className="even:bg-slate-900/40">
                        <td className="px-5 py-3 text-slate-200">{r.page}</td>
                        <td className="px-5 py-3">{r.views}</td>
                        <td className="px-5 py-3 text-emerald-400">{r.bounce}</td>
                        <td className="px-5 py-3 text-slate-300">{r.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <footer className="py-6 text-center text-xs text-slate-500">
              Made with a modern dark aesthetic and a glowing 3D accent.
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
