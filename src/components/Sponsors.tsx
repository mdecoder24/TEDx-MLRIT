import { sponsors } from "@/data/sponsors";
import Carousel from "react-multi-carousel";

export default function Sponsors() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <>
      <section id="sponsors">

        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Sponsors</h2>
        <div className="overflow-x-auto">
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
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="p-6 bg-black rounded-lg hover:bg-[#E50914]/10 transition-colors cursor-pointer border border-white/10 w-72"
              >
                <img
                  src={sponsor.imageUrl}
                  alt={sponsor.altText}
                  className="sponsor-logo w-full max-w-[200px] mx-auto border-2 border-white/20 rounded p-4"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="text-center mt-12">
          <button
            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
            Become a Sponsor
          </button>
        </div>
      </section>
    </>
  )
}
