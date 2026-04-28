function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">TravelGo</h3>
          <p className="text-gray-300">Your trusted partner for unforgettable travel experiences.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-blue-400">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-blue-400 transition-colors duration-200">Home</a></li>
            <li><a href="/tours" className="hover:text-blue-400 transition-colors duration-200">Tours</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-blue-400">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-blue-400">Contact Info</h4>
          <p className="text-gray-300 mb-2">📧 support@travelgo.com</p>
          <p className="text-gray-300 mb-2">📱 +91 9876543210</p>
          <p className="text-gray-300">📍 Bangalore, India</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2024 TravelGo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
