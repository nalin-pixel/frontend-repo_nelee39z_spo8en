import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <div className="relative w-full min-h-[360px] md:min-h-[420px] lg:min-h-[480px] overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900">
      <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/80" />
    </div>
  )
}
