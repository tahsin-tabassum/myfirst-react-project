import { useEffect, useState  } from "react";
import TechCard from "./TechCard"; 


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
    const [technologies, setTechnologies] = useState<Technology []>([]);

    useEffect(()=>
    {
        fetch("/public/technologies.json")
        .then((response)=> response.json())
        .then((data)=> setTechnologies(data));
    },[]);
    
    
    return(

        <section id="technologies" className="bg-white px-8 py-10">
<div className="mb-10 text-center">
    <h2>
<span className="text-5xl font-bold text-black">Explore the{" "} </span> <span className="text-5xl font-bold bg-linear-to-r from-[#EC4899] via-[#E44AA0] to-[#8B5CF6]  bg-clip-text  text-transparent">Technologies</span>
    </h2>
    <p className="mt-1 text-[11px] text-[#667085]">Pick one technology per category to build your ideal stack.</p>
</div>
<div className="grid grid-cols-1 gap-y-5 gap-x-15  sm:grid-cols-2 lg:grid-cols-3">

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