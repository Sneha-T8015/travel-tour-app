import { Link } from 'react-router-dom'

function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
        <p className="text-gray-600 mb-1">📍 {tour.location}</p>
        <p className="text-gray-600 mb-1">⏳ {tour.days} Days</p>
        <p className="text-blue-600 font-semibold mb-3">₹{tour.price}</p>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{tour.description}</p>
        <Link
          to={`/tour/${tour.id}`}
          className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          View Details & Book
        </Link>
      </div>
    </div>
  )
}

export default TourCard