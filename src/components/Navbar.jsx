import { Menu, Search, ShoppingCart, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-6 md:px-10 py-5">
        <div className="flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur shadow-sm px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg hover:bg-white/70 transition" aria-label="Menu">
              <Menu className="h-5 w-5 text-slate-700" />
            </button>
            <a href="/" className="font-extrabold text-slate-800 text-lg">Pastella</a>
          </div>
          <div className="hidden md:flex items-center gap-2 flex-1 mx-6 max-w-xl">
            <div className="flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2 w-full shadow-sm">
              <Search className="h-4 w-4 text-slate-500" />
              <input placeholder="Search templates, categories..." className="bg-transparent outline-none text-sm flex-1 text-slate-700 placeholder-slate-400" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex text-sm px-3 py-2 rounded-lg bg-white/80 hover:bg-white text-slate-700 font-medium">Sell</button>
            <button className="p-2 rounded-lg hover:bg-white/70 transition" aria-label="Cart">
              <ShoppingCart className="h-5 w-5 text-slate-700" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/70 transition" aria-label="Account">
              <User className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
