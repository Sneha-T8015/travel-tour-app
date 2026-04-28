import { useState, useEffect } from 'react'
import { tourService } from '../services/api'

export const useTours = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true)
        const data = await tourService.getAllTours()
        setTours(data)
        setError(null)
      } catch (err) {
        setError(err.message || 'Failed to fetch tours')
        setTours([])
      } finally {
        setLoading(false)
      }
    }

    fetchTours()
  }, [])

  return { tours, loading, error }
}

export const useBookTour = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const bookTour = async (bookingData) => {
    try {
      setLoading(true)
      setError(null)
      const response = await tourService.bookTour(bookingData)
      setSuccess(true)
      return response
    } catch (err) {
      setError(err.message || 'Failed to book tour')
      setSuccess(false)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { bookTour, loading, error, success }
}
