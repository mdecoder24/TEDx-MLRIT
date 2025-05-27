import { MemberCard } from '@/components/MemberCard';
import { team } from '@/data/team';

function groupBy(array: any[], key: string): { [key: string]: any[] } {
    return array.reduce((result, currentValue) => {
    const group = currentValue[key];
    if (!result[group]) {
    result[group] = [];
    }
    result[group].push(currentValue);
    return result;
    }, {});
    }

let data = groupBy(team.sort((x,y) => x.order - y.order), 'title')


export default function TeamsPage() {
    

    return (
        <>
            <section className="py-28 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Team</h2>
                    {Object.keys(data).map(x => <>
                        <h4 className='text-2xl font-bold text-center mb-6 text-white'>{x}</h4>
                        <div className="overflow-x-auto relative">
                        <div className="grid grid-cols-1 md:grid md:grid-cols-4 space-x-6 pb-8 transition-transform duration-300">
                                {data[x].map((speaker, index) => (
                                    <MemberCard key={index} order={speaker.order} name={speaker.name} title={speaker.title} image={speaker.image} />
                                ))}
                            </div>
                        </div>
                    </>)}
                </div>
            </section>
        </>
    )
}



