import { useState } from 'react'
import { useBookTour } from '../hooks/useTours'

function BookingForm() {
  const { bookTour, loading, error, success } = useBookTour()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    people: 1,
    date: ''
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await bookTour(formData)
      setMessage('✓ Booking submitted successfully! Check your email for confirmation.')
      setFormData({ name: '', email: '', phone: '', destination: '', people: 1, date: '' })
      setTimeout(() => setMessage(''), 5000)
    } catch (error) {
      setMessage('✗ Booking failed. Please try again.')
      setTimeout(() => setMessage(''), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">Plan Your Journey</h2>

      {message && (
        <div className={`p-3 rounded mb-4 ${success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}
      {error && <div className="p-3 rounded mb-4 bg-red-100 text-red-700">{error}</div>}

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination (Optional)"
          value={formData.destination}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Number of People</label>
          <input
            type="number"
            name="people"
            min="1"
            max="10"
            value={formData.people}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Preferred Travel Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
      >
        {loading ? 'Submitting...' : 'Submit Booking Inquiry'}
      </button>

      <p className="text-xs text-gray-500 text-center mt-3">
        We'll get back to you within 24 hours with tour recommendations
      </p>
    </form>
  )
}

export default BookingForm