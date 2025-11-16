import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TemplateCard from './TemplateCard'

export default function Marketplace() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL('/api/templates', baseUrl)
        if (query) url.searchParams.set('q', query)
        const res = await fetch(url.toString())
        const data = await res.json()
        setItems(data.length ? data : getSeed())
      } catch (e) {
        setItems(getSeed())
      } finally {
        setLoading(false)
      }
    }
    fetchTemplates()
  }, [query])

  const getSeed = () => [
    { title: 'Pastel Landing', slug: 'pastel-landing', description: 'Soft gradient hero, modern sections', category: 'Landing', price: 29, tags: ['landing','saas'], rating: 4.9 },
    { title: 'Haze Dashboard', slug: 'haze-dashboard', description: 'Elegant analytics dashboard', category: 'Dashboard', price: 39, tags: ['dashboard'], rating: 4.8 },
    { title: 'Bloom Portfolio', slug: 'bloom-portfolio', description: 'Creative portfolio with pastel bloom', category: 'Portfolio', price: 24, tags: ['portfolio'], rating: 4.7 },
    { title: 'Minty Shop', slug: 'minty-shop', description: 'Minimal e-commerce starter', category: 'Ecommerce', price: 49, tags: ['shop'], rating: 4.8 },
  ]

  return (
    <section id="templates" className="relative py-14 md:py-20 bg-gradient-to-b from-white to-purple-50/40">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Featured templates</h2>
            <p className="text-slate-600 mt-1">Handpicked designs with a soft pastel aesthetic.</p>
          </div>
          <div className="flex items-center gap-2">
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search templates..." className="bg-white/80 rounded-xl px-4 py-2 shadow-sm outline-none text-slate-700 placeholder-slate-400" />
            <button onClick={()=>setQuery('')} className="text-sm px-3 py-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 font-medium shadow-sm">Clear</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8 md:mt-10">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-56 rounded-2xl bg-white/60 animate-pulse" />
            ))
          ) : (
            items.map(item => (
              <Link key={item.slug} to={`/t/${item.slug}`} className="block">
                <TemplateCard item={item} />
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
