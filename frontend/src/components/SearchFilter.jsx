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
    <div className="bg-white p-8 rounded-3xl shadow-2xl mb-12 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Your Perfect Tour</h3>
        <p className="text-gray-600">Search through our amazing collection of travel packages</p>
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Destination</label>
          <div className="relative">
            <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              name="destination"
              placeholder="Where do you want to go?"
              value={filters.destination}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Price Range</label>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">All Price Ranges</option>
            {PRICE_RANGES.map((range, idx) => (
              <option key={idx} value={JSON.stringify(range)}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Duration</label>
          <select
            name="duration"
            value={filters.duration}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Any Duration</option>
            {DURATION_OPTIONS.map((option, idx) => (
              <option key={idx} value={JSON.stringify(option)}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 items-end">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchFilter
