function Hero() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-center h-screen md:h-[80vh] flex items-center justify-center text-white">
      <div className="bg-black/60 p-6 md:p-8 rounded-xl text-center max-w-4xl mx-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Explore the World With Us</h2>
        <p className="text-base md:text-lg lg:text-xl">Best tour packages at affordable prices</p>
      </div>
    </div>
  )
}

export default Hero