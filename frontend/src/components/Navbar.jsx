import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              TravelGo
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              to="/tours"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
            >
              Tours
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-full hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/tours"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Tours
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-full hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 w-fit">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar