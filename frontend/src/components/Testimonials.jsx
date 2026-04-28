function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Amazing experience with TravelGo! The Goa package was perfect and the service was excellent.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Best tour company ever. The Manali trip was unforgettable. Highly recommended!'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Pune',
      rating: 4,
      text: 'Great tour packages at affordable prices. Will definitely book again for the next vacation.'
    }
  ]

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
