export default function Footer() {
  return (
    <footer className="bg-white/80 border-t border-white/60">
      <div className="container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-slate-800">Pastella</p>
          <p className="text-slate-600 text-sm">Soft pastel template marketplace</p>
        </div>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Pastella, Inc.</p>
      </div>
    </footer>
  )
}
