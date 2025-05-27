import { useLocation } from "react-router"
import About from "./../components/About"
import Blogs from "./../components/Blogs"
import Events from "./../components/Events"
import Hero from "./../components/Hero"
import Promo from "./../components/Promo"
import Speakers from "./../components/Speakers"
import Team from "./../components/Team"
import { useEffect } from "react"

export default function Home() {

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    return (
        <>
            <Hero />
            <About />
            <Events />
            <Speakers />
            <Promo />
            <Team />
            <Blogs />
            {/* <Sponsors /> */}
        </>
    )
}
