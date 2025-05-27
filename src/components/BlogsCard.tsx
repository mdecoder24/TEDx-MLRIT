import { BlogProps } from "@/data/types";

export const BlogCard: React.FC<BlogProps> = ({ title, category, date, image, url }) => {
    return (
      <a href={url} className="bg-black border border-white/10 rounded-lg overflow-hidden group hover:border-[#E50914]/50 transition-colors">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-[#E50914] text-white px-3 py-1 rounded-full text-sm">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E50914] transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">{date}</span>
          </div>
        </div>
      </a>
    );
  };