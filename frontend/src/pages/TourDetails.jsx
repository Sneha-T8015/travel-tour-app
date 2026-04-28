import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTours, useBookTour } from '../hooks/useTours'

function TourDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { tours } = useTours()
  const { bookTour, loading } = useBookTour()
  
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    people: 1,
    date: ''
  })

  const tour = tours.find(t => t.id === parseInt(id))

  if (!tour) {
    return (
      <div className="px-6 py-10 max-w-6xl mx-auto">
        <p className="text-center text-gray-500">Tour not found</p>
        <button
          onClick={() => navigate('/tours')}
          className="mt-4 mx-auto block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Back to Tours
        </button>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setBookingData({ ...bookingData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await bookTour({ ...bookingData, tourId: tour.id })
      alert('Booking successful! Confirmation email sent.')
      setBookingData({ name: '', email: '', phone: '', people: 1, date: '' })
    } catch (error) {
      alert('Booking failed. Please try again.')
    }
  }

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <button
        onClick={() => navigate('/tours')}
        className="mb-6 text-blue-600 hover:text-blue-800 font-semibold"
      >
        ← Back to Tours
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tour Image and Info */}
        <div>
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-96 object-cover rounded-xl"
          />
          <div className="mt-6">
            <h1 className="text-3xl font-bold mb-2">{tour.title}</h1>
            <p className="text-lg text-gray-600 mb-2">📍 {tour.location}</p>
            <p className="text-lg text-gray-600 mb-4">⏳ Duration: {tour.days} Days</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">₹{tour.price}</p>
            <p className="text-gray-700 leading-relaxed">{tour.description}</p>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What's Included:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Accommodation</li>
                <li>Local transportation</li>
                <li>Guided tours</li>
                <li>Meals</li>
                <li>Adventure activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg sticky top-20">
            <h2 className="text-2xl font-bold mb-6">Book This Tour</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={bookingData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={bookingData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={bookingData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Number of People</label>
                <input
                  type="number"
                  name="people"
                  min="1"
                  max="10"
                  value={bookingData.people}
                  onChange={handleChange}
                  className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Travel Date</label>
                <input
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleChange}
                  className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded mb-4">
              <p className="text-sm text-gray-600">Total Cost:</p>
              <p className="text-2xl font-bold">₹{(tour.price * bookingData.people).toLocaleString()}</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {loading ? 'Processing...' : 'Book Now'}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By booking, you agree to our terms and conditions
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TourDetails
