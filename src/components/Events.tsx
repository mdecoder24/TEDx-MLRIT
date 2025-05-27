import { tedxEvents } from "@/data/events";

export default function Events() {
  return (
    <div id="past-editions" className="bg-gray-900 py-12 mt-12">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-white mb-8">TEDx Editions : Past & Upcoming</h3>
        <div className="space-y-8">
          {tedxEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-8 group relative hover:bg-black/20 p-4 rounded-lg transition-all cursor-pointer border-b border-[#E50914]"
            >
              <div className="w-48 text-right">
                <h3 className="text-2xl font-bold text-[#E50914]">{event.date}</h3>
                <p className="text-white">{event.monthYear}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300">Theme: {event.theme}</p>
              </div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white px-6 py-2 rounded-lg border-2 border-[#E50914] hover:bg-[#E50914] transition-all duration-300 whitespace-nowrap"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
