import { speakers } from "@/data/speakers";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SpeakerCard } from "./SpeakerCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function Speakers() {
  return (
    <>
      <section id="speakers" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Speakers</h2>
          <Carousel responsive={responsive} swipeable={true}
            draggable={true}
            showDots={false}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={100}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px p-2">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </Carousel>
          <div className="overflow-x-auto relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#E50914]/80 text-white rounded-full flex items-center justify-center hover:bg-[#E50914] transition-colors"
            // onclick="slideSpeakers('left')"
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#E50914]/80 text-white rounded-full flex items-center justify-center hover:bg-[#E50914] transition-colors"
            // onclick="slideSpeakers('right')"
            >
              <i className="ri-arrow-right-s-line text-2xl"></i>
            </button>
          </div>
          <div className="text-center mt-12 inline-flex gap-2 justify-center w-full">
            <a href="/speakers"
              className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
              View All Speakers
            </a>
            <a href="/newspeaker"
              className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
              Become a Speaker
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
