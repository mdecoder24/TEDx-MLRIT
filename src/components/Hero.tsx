import { config } from "@/data/config";
import { Link } from "react-router";

export default function Hero() {
    return (
        <>
            <section className="relative min-h-screen flex items-center bg-[url('https://public.readdy.ai/ai/img_res/845b6a06d103e787ab65037b0342dc95.jpg')] bg-cover"
                style={{ backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl text-white mx-auto text-center">
                        <h1 className="text-6xl font-bold mb-6">The future is merely the past, echoed forward.</h1>
                        <p className="text-xl mb-8">Every idea leaves a mark. Every voice shapes what’s next. Be part of a journey
                            that explores the future through bold ideas and fresh perspectives.</p>
                        <p className="text-2xl font-bold mb-8">THEME: Echoes Of Tomorrow</p>
                        <Link to={"https://unifest.in/fests/55?fest=tedxmlrit"}
                            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors text-lg whitespace-nowrap mt-4">
                            Purchase Tickets
                        </Link>
                    </div>
                </div>
                <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
                    <a href={config.YT_LINK} target="_blank"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 !rounded-full flex items-center justify-center backdrop-blur-sm">
                        <i className="ri-youtube-fill text-white"></i>
                    </a>
                    <a href={config.IG_LINK} target="_blank"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 !rounded-full flex items-center justify-center backdrop-blur-sm">
                        <i className="ri-instagram-fill text-white"></i>
                    </a>
                </div>
            </section>
        </>
    )
}
