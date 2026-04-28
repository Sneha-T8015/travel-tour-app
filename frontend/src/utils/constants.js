export const API_BASE_URL = 'http://127.0.0.1:5000/api'

export const TOUR_CATEGORIES = [
  'Beach',
  'Mountain',
  'Hill Station',
  'Adventure',
  'Cultural',
  'Religious'
]

export const PRICE_RANGES = [
  { label: 'Under ₹5000', min: 0, max: 5000 },
  { label: '₹5000 - ₹10000', min: 5000, max: 10000 },
  { label: '₹10000 - ₹20000', min: 10000, max: 20000 },
  { label: 'Above ₹20000', min: 20000, max: Infinity }
]

export const DURATION_OPTIONS = [
  { label: '1-2 days', min: 1, max: 2 },
  { label: '3-5 days', min: 3, max: 5 },
  { label: '6-10 days', min: 6, max: 10 },
  { label: '10+ days', min: 10, max: Infinity }
]
