import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

export default function ChartPanel() {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Traffic',
        data: labels.map(() => Math.round(Math.random() * 1000) + 200),
        borderColor: '#60a5fa',
        backgroundColor: 'rgba(96,165,250,0.15)',
        tension: 0.35,
        pointRadius: 0,
      },
    ],
  }
  const options = {
    responsive: true,
    scales: {
      x: { grid: { color: 'rgba(148,163,184,0.1)' }, ticks: { color: '#94a3b8' } },
      y: { grid: { color: 'rgba(148,163,184,0.1)' }, ticks: { color: '#94a3b8' } },
    },
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
  }

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-100 font-semibold">Weekly Traffic</h3>
        <span className="text-xs text-slate-400">Live</span>
      </div>
      <Line data={data} options={options} />
    </div>
  )
}
