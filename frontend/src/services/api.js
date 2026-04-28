import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:5000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const tourService = {
  // Get all tours
  getAllTours: async () => {
    try {
      const response = await apiClient.get('/tours')
      return response.data
    } catch (error) {
      console.error('Error fetching tours:', error)
      throw error
    }
  },

  // Create a new tour (admin)
  createTour: async (tourData) => {
    try {
      const response = await apiClient.post('/tours', tourData)
      return response.data
    } catch (error) {
      console.error('Error creating tour:', error)
      throw error
    }
  },

  // Book a tour
  bookTour: async (bookingData) => {
    try {
      const response = await apiClient.post('/book', bookingData)
      return response.data
    } catch (error) {
      console.error('Error booking tour:', error)
      throw error
    }
  }
}

export default apiClient
