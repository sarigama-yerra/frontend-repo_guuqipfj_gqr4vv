import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/QblYNXAoH6zf7SHu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">Soft Pastel • Marketplace</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-slate-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
              Discover beautiful pastel-themed templates
            </h1>
            <p className="mt-4 md:mt-6 text-slate-700/90 text-lg md:text-xl">
              A modern marketplace for web templates with a soft pastel vibe. Browse, preview, and launch faster.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#templates" className="inline-flex justify-center rounded-lg bg-pink-500/90 hover:bg-pink-500 text-white px-5 py-3 font-medium shadow-sm transition">Explore templates</a>
              <a href="#sell" className="inline-flex justify-center rounded-lg bg-white/80 hover:bg-white text-slate-800 px-5 py-3 font-medium shadow-sm transition">Sell your template</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white"></div>
    </section>
  )
}
