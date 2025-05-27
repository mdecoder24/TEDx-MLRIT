import { useRef, useState } from "react";

export default function Promo() {

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlay = () => {
        if (!videoRef.current) return; // Safe check for ref

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(!isPlaying); // Toggle state
    };

    return (
        <>
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="relative w-full h-[600px] rounded-lg overflow-hidden group cursor-pointer">
                        <video
                            src="/promo.mp4"
                            className="w-full h-full object-cover"
                            autoPlay={true}
                            muted={true}
                            ref={videoRef}
                            controls={isPlaying}
                            onEnded={() => setIsPlaying(false)}
                            onPause={() => setIsPlaying(false)}
                        ></video>
                        {!isPlaying && <>
                            <div
                                className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <div onClick={handlePlay}
                                    className="w-20 h-20 bg-[#E50914]/90 rounded-full flex items-center justify-center">
                                    <i className="ri-play-fill text-4xl text-white"></i>
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
            </section>
        </>
    )
}
