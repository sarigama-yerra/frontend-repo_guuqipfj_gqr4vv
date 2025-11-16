import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marketplace from './components/Marketplace'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-amber-50 text-slate-800">
      <Navbar />
      <Hero />
      <Marketplace />
      <Footer />
    </div>
  )
}

export default App
