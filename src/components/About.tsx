import CountUpOnVisible from "./NumCountUp";

export default function About() {

  return (
    <>
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">About TED & TEDx</h2>
              <p className="text-gray-300 mb-6">TED is a global platform dedicated to inspiring ideas and impactful
                storytelling. What began as a four-day conference in California over 30 years ago has now
                evolved into a movement that fuels innovation, learning, and change across the world.</p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-[#E50914] mb-2" data-count="1500">
                    <span className="inline-flex items-center gap-1"><CountUpOnVisible end={1500} duration={1} /> +</span>
                  </span>
                  <span className="text-gray-300 text-2xl">Global Events</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold text-[#E50914] mb-2" data-count="50000">
                    <span className="inline-flex gap-1"><CountUpOnVisible end={50000} duration={2} /> +</span>
                  </span>
                  <span className="text-gray-300 text-2xl">Speakers</span>
                </div>
              </div>
              <button
                className="bg-[#E50914] text-white px-6 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
                Learn More
              </button>
            </div>
            <div className="relative">
              <img src="https://public.readdy.ai/ai/img_res/6b853368afc35d2ba071fc6ff9df1903.jpg" alt="TED Talk"
                className="rounded-lg shadow-xl mb-8" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
