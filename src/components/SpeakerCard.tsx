import { Speaker } from "@/data/types";

export const SpeakerCard: React.FC<Speaker> = ({ name, description,image,title }) => {
    return (
        <div className="relative mx-auto group overflow-hidden rounded-lg shadow-lg">
            <img
                src={image}
                alt={name}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{name}</h3>
                    <p className="text-gray-300 mb-2">{title}</p>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};