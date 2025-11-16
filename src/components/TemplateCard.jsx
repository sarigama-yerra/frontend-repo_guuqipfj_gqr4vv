import { useState } from 'react'
import { Star } from 'lucide-react'
import PreviewModal from './PreviewModal'

export default function TemplateCard({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="group rounded-2xl bg-white/80 backdrop-blur hover:bg-white transition shadow-sm ring-1 ring-white/50 overflow-hidden">
      <div className="aspect-[16/10] bg-gradient-to-br from-pink-100 via-blue-100 to-amber-100"/>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-slate-800 group-hover:text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600 mt-1 line-clamp-2">{item.description}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-amber-400" />
            <span className="text-xs font-medium text-slate-700">{item.rating ?? 4.8}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-slate-800 font-semibold">${item.price.toFixed(2)}</span>
          <div className="flex items-center gap-2">
            <button onClick={()=>setOpen(true)} className="text-sm px-3 py-1.5 rounded-lg bg-pink-500/90 hover:bg-pink-500 text-white font-medium">Preview</button>
            <button className="text-sm px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-900 text-white font-medium">Buy</button>
          </div>
        </div>
      </div>
      <PreviewModal open={open} onOpenChange={setOpen} item={item} />
    </div>
  )
}
