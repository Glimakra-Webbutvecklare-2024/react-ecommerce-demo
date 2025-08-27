function HeroSection() {
  return (
    <section className="h-screen w-screen bg-[url(https://celebrateurbanbirds.org/wp-content/uploads/2016/09/stock-photo-garden-in-urban-at-sukumwit-bangkok-360954980-1920x1235.jpg)] flex flex-col p-24 justify-end bg-cover bg-center">
      <h1 className="text-3xl font-semibold uppercase mb-2">Urban Gardening</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos totam sequi.</p>
      <div className="flex gap-4">
        <a href="#about" className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Learn More</a>
        <a href="#contact" className="mt-6 px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition">Contact Us</a>
      </div>
    </section>
  )
}

export default HeroSection