import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marketplace from './components/Marketplace'
import Footer from './components/Footer'
import TemplateDetail from './pages/TemplateDetail'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-amber-50 text-slate-800">
      <Navbar />
      <Routes>
        <Route index element={<>
          <Hero />
          <Marketplace />
        </>} />
        <Route path="/t/:slug" element={<TemplateDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
