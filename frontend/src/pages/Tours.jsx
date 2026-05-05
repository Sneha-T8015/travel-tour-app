import { useState } from 'react'
import SearchFilter from '../components/SearchFilter'
import TourCard from '../components/TourCard'
import { useTours } from '../hooks/useTours'

function Tours() {
  const { tours, loading, error } = useTours()
  const [filteredTours, setFilteredTours] = useState([])
  const [hasFiltered, setHasFiltered] = useState(false)

  const handleFilter = (filters) => {
    let result = tours

    if (filters.destination) {
      result = result.filter(tour =>
        tour.location.toLowerCase().includes(filters.destination.toLowerCase()) ||
        tour.title.toLowerCase().includes(filters.destination.toLowerCase())
      )
    }

    if (filters.priceRange) {
      try {
        const range = JSON.parse(filters.priceRange)
        result = result.filter(tour => tour.price >= range.min && tour.price <= range.max)
      } catch (e) {
        console.error('Error parsing price range:', e)
      }
    }

    if (filters.duration) {
      try {
        const range = JSON.parse(filters.duration)
        result = result.filter(tour => tour.days >= range.min && tour.days <= range.max)
      } catch (e) {
        console.error('Error parsing duration:', e)
      }
    }

    setFilteredTours(result)
    setHasFiltered(true)
  }

  const displayTours = hasFiltered ? filteredTours : tours

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading amazing tours...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Oops! Something went wrong</div>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Explore Our Tours</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover incredible destinations and create unforgettable memories with our carefully curated travel packages
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SearchFilter onFilter={handleFilter} />

        {displayTours.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No tours found</h3>
            <p className="text-gray-600 text-lg">Try adjusting your search filters to find more options.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {hasFiltered ? `Found ${displayTours.length} tours` : 'All Available Tours'}
              </h2>
              <div className="text-gray-600">
                Showing {displayTours.length} of {tours.length} tours
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Tours