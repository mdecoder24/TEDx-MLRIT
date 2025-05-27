import { MemberProps } from "@/data/types";

export const MemberCard: React.FC<MemberProps> = ({ name, title, image }) => {
    return (
        <div className="flex-none w-72 mx-auto">
            <div className="relative overflow-hidden rounded-lg mb-4">
                <img src={image} alt={name} className="w-full h-96 object-cover" />
            </div>
            <div className="bg-black/80 p-6 rounded-lg transform -translate-y-8 hover:-translate-y-9 transition-all hover:bg-[#E50914]/90">
                <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
                <p className="text-gray-300">{title}</p>
            </div>
        </div>
    );
};