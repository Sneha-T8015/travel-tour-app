import { useState } from 'react'
import { PRICE_RANGES, DURATION_OPTIONS } from '../utils/constants'

function SearchFilter({ onFilter }) {
  const [filters, setFilters] = useState({
    destination: '',
    priceRange: '',
    duration: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    onFilter(filters)
  }

  const handleReset = () => {
    setFilters({ destination: '', priceRange: '', duration: '' })
    onFilter({ destination: '', priceRange: '', duration: '' })
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl mb-8 border border-gray-100">
      <h3 className="text-xl font-bold mb-4">Search & Filter Tours</h3>
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Search destination..."
            value={filters.destination}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Prices</option>
            {PRICE_RANGES.map((range, idx) => (
              <option key={idx} value={JSON.stringify(range)}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Duration</label>
          <select
            name="duration"
            value={filters.duration}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Duration</option>
            {DURATION_OPTIONS.map((option, idx) => (
              <option key={idx} value={JSON.stringify(option)}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 items-end">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Search
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 bg-gray-200 text-gray-700 p-3 rounded font-semibold hover:bg-gray-300 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchFilter
