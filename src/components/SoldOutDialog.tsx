import { useEffect } from "react"
import { createPortal } from "react-dom"
import { config } from "@/data/config"

export function SoldOutDialog({ open, onClose }: { open: boolean, onClose: () => void }) {
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    // Portal to <body> so the fixed overlay isn't trapped by the header's backdrop-blur
    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
            onClick={onClose}>
            <div role="dialog" aria-modal="true" aria-labelledby="sold-out-title"
                className="relative w-full max-w-md overflow-hidden rounded-2xl bg-black text-white border border-white/10 shadow-2xl shadow-[#E50914]/20 animate-in fade-in zoom-in-95"
                onClick={(e) => e.stopPropagation()}>
                <div className="h-1.5 bg-[#E50914]" />
                <button onClick={onClose} aria-label="Close" autoFocus
                    className="absolute right-4 top-5 w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    <i className="ri-close-line text-2xl"></i>
                </button>
                <div className="flex flex-col items-center text-center px-6 py-10 md:px-10">
                    <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-[#E50914]/15 ring-1 ring-[#E50914]/40">
                        <i className="ri-coupon-3-line text-4xl text-[#E50914]"></i>
                    </div>
                    <h2 id="sold-out-title" className="text-4xl font-bold tracking-wide mb-2">
                        SOLD <span className="text-[#E50914]">OUT</span>
                    </h2>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
                        TEDxMLRIT · Echoes Of Tomorrow
                    </p>
                    <p className="text-white/80 mb-8">
                        All tickets have been claimed. Thank you for the overwhelming response!
                        Follow us for updates on the event and future editions.
                    </p>
                    <div className="flex items-center gap-4 mb-8">
                        <a href={config.IG_LINK} target="_blank" aria-label="Instagram"
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E50914] transition-colors">
                            <i className="ri-instagram-fill text-xl"></i>
                        </a>
                        <a href={config.YT_LINK} target="_blank" aria-label="YouTube"
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E50914] transition-colors">
                            <i className="ri-youtube-fill text-xl"></i>
                        </a>
                    </div>
                    <button onClick={onClose}
                        className="w-full bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors text-lg">
                        Got it
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}
