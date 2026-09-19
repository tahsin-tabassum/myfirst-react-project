import TechCard from "./TechCard"; 
import technologies from "../public/technologies";

interface Technology {
    id: number;
    name: string;
    category: string; 
    description: string;
    icon: string;
rating : number;
difficulty: string;
badge: string;
}

interface TechnoProps {
    stack: Technology[];
    onAdd: (technology: Technology) => void;

}


const Technologies = ({ stack, onAdd,} : TechnoProps)=> {
    return(
        <section id="technologies" className="px-8 py-16">
<div className="mb-10 text-center">
    <h2 className="text-4xl font-bold text-gray-900">
Explore the Technologies
    </h2>
    <p className="mt-3 text-gray-500">Pick one technology per category to build your ideal stack.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {technologies.map((technology)=>(
        <TechCard
        key={technology.id}
        technology={technology}
        onAdd={onAdd}
        isAdded={stack.some((item)=> item.id === technology.id)}
        />
    ))}
</div>
        </section>
    );
};
export default Technologies;