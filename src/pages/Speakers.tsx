import { SpeakerCard } from '@/components/SpeakerCard';
import { speakers } from '@/data/speakers';

export default function SpeakersPage() {
    return (
        <>
            <section className="py-28 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet Our Speakers</h2>
                    <div className="text-center my-12">
                        <a href='/newspeaker'
                            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
                            Become a Speaker
                        </a>
                    </div>
                    <div className="overflow-x-auto relative">
                        <div id="speakersContainer" className="grid grid-cols-1 md:grid-cols-4 gap-4 space-x-6 pb-8 transition-transform duration-300">
                            {speakers.map((speaker, index) => (
                                <SpeakerCard key={index} {...speaker} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
