import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Header() {
    return (
        <>
            <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
                <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <a className="flex items-center" href="/">
                        <img src="https://static.readdy.ai/image/a696ab19619978717fdfb934fe9d06a8/ae5b39aba11747580e8242bc8edbc1f1.png"
                            alt="TEDx Logo" className="h-16" />
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-white hover:text-[#E50914] transition-colors">Home</a>
                        <a href="/#about" className="text-white hover:text-[#E50914] transition-colors">About</a>
                        <a href="/#past-editions" className="text-white hover:text-[#E50914] transition-colors">Past Editions</a>
                        <a href="/speakers" className="text-white hover:text-[#E50914] transition-colors">Speakers</a>
                        <a href="/sponsors" className="text-white hover:text-[#E50914] transition-colors">Sponsors</a>
                        <a href="/team" className="text-white hover:text-[#E50914] transition-colors">Team</a>
                        {/* <a href="#gallery" className="text-white hover:text-[#E50914] transition-colors">Gallery</a> */}
                        <a href="/#blogs" className="text-white hover:text-[#E50914] transition-colors">Blogs</a>
                        <a href="https://unifest.in/fests/55?fest=tedxmlrit"
                            className="bg-[#E50914] text-white px-6 py-2 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
                            Get Tickets
                        </a>
                    </div>
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger><i className="ri-menu-line text-2xl text-white"></i></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem><a href="/">Home</a></DropdownMenuItem>
                                <DropdownMenuItem><a href="/#about" className="text-white hover:text-[#E50914] transition-colors">About</a></DropdownMenuItem>
                                <DropdownMenuItem><a href="/#past-editions" className="text-white hover:text-[#E50914] transition-colors">Past Editions</a></DropdownMenuItem>
                                <DropdownMenuItem><a href="/speakers" className="text-white hover:text-[#E50914] transition-colors">Speakers</a></DropdownMenuItem>
                                <DropdownMenuItem><a href="/sponsors" className="text-white hover:text-[#E50914] transition-colors">Sponsors</a></DropdownMenuItem>
                                <DropdownMenuItem><a href="/team" className="text-white hover:text-[#E50914] transition-colors">Team</a></DropdownMenuItem>
                                <DropdownMenuItem><a href="/#blogs" className="text-white hover:text-[#E50914] transition-colors">Blogs</a></DropdownMenuItem>
                                <DropdownMenuItem><a href="https://unifest.in/fests/55?fest=tedxmlrit"
                                className="bg-[#E50914] text-white px-6 py-2 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
                                Get Tickets
                            </a></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* <button className="md:hidden w-10 h-10 flex items-center justify-center">
                        <i className="ri-menu-line text-2xl text-white"></i>
                    </button> */}
                </nav>
            </header>
        </>
    )
}
