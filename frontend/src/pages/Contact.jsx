import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate submission
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 text-lg">Have questions? We'd love to hear from you!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-gray-600">support@travelgo.com</p>
          <p className="text-gray-600">info@travelgo.com</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-gray-600">+91 9876543210</p>
          <p className="text-gray-600">+91 9876543211</p>
          <p className="text-sm text-gray-500 mt-2">24/7 Support</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-xl font-bold mb-2">Address</h3>
          <p className="text-gray-600">123 Travel Street</p>
          <p className="text-gray-600">Bangalore, India 560001</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-md max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

        {submitted && (
          <div className="p-4 rounded mb-6 bg-green-100 text-green-700">
            ✓ Thank you for contacting us! We'll respond within 24 hours.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
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

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center\">Find Us</h3>
        <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
          <p className="text-gray-600">Map would be displayed here</p>
        </div>
      </div>
    </div>
  )
}

export default Contact

