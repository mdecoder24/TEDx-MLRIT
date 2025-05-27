import { hometeam } from "@/data/team";
import { MemberCard } from "./MemberCard";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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

export default function Team() {
  return (
    <>
      <section id="team" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Team</h2>
          <div className="overflow-x-auto relative">
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
              {hometeam.sort((x,y) => x.order - y.order).map((speaker, index) => (
                <MemberCard key={index} order={speaker.order} name={speaker.name} title={speaker.title} image={speaker.image} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href={"/team"}
            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
            Meet Full Team
          </a>
        </div>

      </section>
    </>
  )
}
