import { config } from "@/data/config";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <img src="https://static.readdy.ai/image/a696ab19619978717fdfb934fe9d06a8/ae5b39aba11747580e8242bc8edbc1f1.png"
                alt="TEDx Logo" className="h-16 mb-6 mx-auto md:mx-0" />
              <p className="text-gray-400">TEDxMLRIT is a stage where visionaries, innovators, and change makers unite
                to challenge perspectives and spark conversations. Independently organized under the TED banner,
                we bring ideas that shape the future to the forefront.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex justify-center items-center space-x-6 mb-6">
                <a href={config.IG_LINK}
                  className="hover:text-[#E50914] text-2xl flex items-center gap-2">
                  <i className="ri-instagram-fill"></i>
                  <span className="text-base">@tedxmlrit</span>
                </a>
                <a href={config.YT_LINK}
                  className="hover:text-[#E50914] text-2xl flex items-center gap-2">
                  <i className="ri-youtube-fill"></i>
                  <span className="text-base">@TEDxMLRIT</span>
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-2">Contact Us</h4>
                <p className="mb-2">Email: {config.EMAIL}</p>
                <p>Phone: {config.PHONE}</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-6">Location</h3>
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1744261147364!2d78.43861427414626!3d17.594450196809095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b8eae5cd739%3A0x2aa927e931d97eee!2sMLR%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1743153982796!5m2!1sen!2sin" width="400" height="300" allowFullScreen={true} loading="lazy" ></iframe>
              </div>
              <p className="text-sm">MLRIT Campus, Dundigal,<br />Hyderabad, Telangana 500043</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p>&copy; 2025 TEDx MLRIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
