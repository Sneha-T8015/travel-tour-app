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
    return <div className="px-6 py-10 text-center">Loading tours...</div>
  }

  if (error) {
    return <div className="px-6 py-10 text-center text-red-500">Error: {error}</div>
  }

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Available Tours</h2>
      <SearchFilter onFilter={handleFilter} />
      
      {displayTours.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No tours found. Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Tours