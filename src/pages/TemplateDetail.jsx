import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function TemplateDetail() {
  const { slug } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/templates/${slug}`)
        if (!res.ok) throw new Error('Not found')
        const data = await res.json()
        setItem(data)
      } catch (e) {
        setItem(null)
      } finally {
        setLoading(false)
      }
    }
    fetchTemplate()
  }, [slug])

  const createOrder = async () => {
    if (!email) {
      setStatus({ type: 'error', message: 'Please enter your email.' })
      return
    }
    try {
      setStatus({ type: 'loading', message: 'Processing order...' })
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ template_slug: slug, customer_email: email, amount: item.price, status: 'paid' })
      })
      if (!res.ok) {
        const err = await res.json().catch(()=>({detail:'Order failed'}))
        throw new Error(err.detail || 'Order failed')
      }
      setStatus({ type: 'success', message: 'Order created! Check your email for the download link.' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    }
  }

  if (loading) {
    return <div className="min-h-[50vh] container mx-auto px-6 md:px-10 py-16">Loading...</div>
  }

  if (!item) {
    return (
      <div className="min-h-[50vh] container mx-auto px-6 md:px-10 py-16">
        <p className="text-slate-700">Template not found.</p>
        <Link to="/" className="text-pink-600 hover:underline">Back to marketplace</Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 md:px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-pink-100 via-blue-100 to-amber-100 shadow" />
        </div>
        <div className="lg:col-span-5">
          <h1 className="text-3xl font-extrabold text-slate-800">{item.title}</h1>
          <p className="mt-2 text-slate-600">{item.description}</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs rounded-full bg-white/80 text-slate-700 shadow">{item.category}</span>
            {item.tags?.slice(0,3).map(t => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-white/80 text-slate-700 shadow">#{t}</span>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-white/80 shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">One-time purchase</p>
              <p className="text-2xl font-bold text-slate-800">${item.price?.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" className="bg-white rounded-lg px-3 py-2 text-sm outline-none border border-slate-200" />
              <button onClick={createOrder} className="px-4 py-2 rounded-lg bg-pink-500/90 hover:bg-pink-500 text-white font-medium">Buy</button>
            </div>
          </div>
          {status && (
            <div className={`mt-3 text-sm ${status.type==='error'?'text-red-600':status.type==='success'?'text-green-700':'text-slate-600'}`}>{status.message}</div>
          )}
          <div className="mt-8">
            <h2 className="font-semibold text-slate-800">What’s included</h2>
            <ul className="mt-2 list-disc pl-6 text-slate-600 text-sm space-y-1">
              <li>Clean, accessible markup with Tailwind presets</li>
              <li>Responsive layouts and soft pastel design tokens</li>
              <li>MIT License for commercial use</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Link to="/" className="text-pink-600 hover:underline">← Back to marketplace</Link>
      </div>
    </div>
  )
}
