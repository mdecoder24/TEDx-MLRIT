import { sponsors } from '@/data/sponsors'

export default function Sponsors() {
    return (
        <>
            <section className="py-28 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet Our Sponsors</h2>
                    <div className="text-center my-6">
                        <a href='/newsponsor'
                            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
                            Become a Sponsor
                        </a>
                    </div>
                    <div className="overflow-x-auto relative">
                        <div id="sponsorsContainer" className="grid grid-cols-1 md:grid-cols-4 gap-4 space-x-6 pb-8 transition-transform duration-300">
                            {sponsors.map((sponsor) => (
                                <div
                                    key={sponsor.id}
                                    className="p-6 bg-black rounded-lg mx-auto hover:bg-[#E50914]/10 transition-colors cursor-pointer border border-white/10 w-72"
                                >
                                    <img
                                        src={sponsor.imageUrl}
                                        alt={sponsor.altText}
                                        className="sponsor-logo w-full max-w-[200px] mx-auto border-2 border-white/20 rounded p-4"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
