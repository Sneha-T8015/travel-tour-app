import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import BookingForm from '../components/BookingForm'
import Testimonials from '../components/Testimonials'
import { useTours } from '../hooks/useTours'
import TourCard from '../components/TourCard'

function Home() {
  const { tours } = useTours()
  const featuredTours = tours.slice(0, 3)

  return (
    <div>
      <Hero />

      {/* Quick Booking Section */}
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Quick Tour Booking</h2>
        <BookingForm />
      </div>

      {/* Featured Tours Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Tours</h2>
            <Link to="/tours" className="text-blue-600 hover:text-blue-800 font-semibold">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TravelGo?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Diverse Destinations</h3>
              <p className="text-gray-600">Explore amazing destinations across India with carefully curated tour packages.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
              <p className="text-gray-600">Best value for money with flexible payment options and seasonal discounts.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Peace of Mind</h3>
              <p className="text-gray-600">24/7 customer support and travel insurance included in all packages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

export default Home