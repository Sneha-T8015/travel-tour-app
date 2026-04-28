import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-700 text-slate-50 px-6 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-sm border-b border-slate-800">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">TravelGo</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-slate-200 hover:text-emerald-200 transition-colors duration-200">Home</Link>
          <Link to="/tours" className="text-slate-200 hover:text-emerald-200 transition-colors duration-200">Tours</Link>
          <Link to="/contact" className="text-slate-200 hover:text-emerald-200 transition-colors duration-200">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-slate-200 hover:text-emerald-200 transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/tours" className="text-slate-200 hover:text-emerald-200 transition-colors duration-200" onClick={() => setIsOpen(false)}>Tours</Link>
            <Link to="/contact" className="text-slate-200 hover:text-emerald-200 transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar