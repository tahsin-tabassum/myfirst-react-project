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
interface TechnoCardProps {
technology: Technology;
onAdd: (technology: Technology) => void;
isAdded: boolean;
}


const TechCard =({technology, onAdd, isAdded,}:TechnoCardProps) => {
   
    
return (
    <div className="flex flex-col h-75 w-full rounded-lg border border-[#EAECF0]  p-4 shadow-sm">
        {/* top */}
        <div className="flex items-start justify-between">
{/* icon */}
<img src={technology.icon} alt={technology.name} className="h-7 w-7 object-contain"/>

{/* badge */}
<span className="rounded-full bg-[#F0F8FF] px-4 py-1 text-sm font-medium text-[#0086D1]">{technology.badge}</span>
        </div>

        {/* name */}
        <h3 className="mt-3 text-xl text-justify font-semibold text-black">{technology.name}</h3>
        {/* des */}
        <p className=" mt-1 text-justify text-[18px] text-[#667085]">{technology.description}</p>
{/* card */}

        <div className="mt-4 flex items-center gap-2">
            
<span className="rounded-full bg-gray-100 px-3 py-2 text-xs text-gray-600">{technology.category}</span>

<span className="text-xs text-gray-500">{technology.difficulty}</span>
        
        {/* rating */}
<span className="text-[#667085]">
            <span className="text-yellow-400">★</span>
        {" "}
            {technology.rating}</span>
        </div>
        
        {/* button */}
        <button

        onClick={()=> onAdd(technology)}
        disabled={isAdded}
         className={`mt-2 w-full rounded-md py-2 text-[8px] font-medium text-white transition"
            ${isAdded
            ? 'cursor-not-allowed bg-[#98A2B3]'
            : "bg-[#080D1A] hover:bg-[#1D2939]"}`}>
       {isAdded?"✓ Add to Stack": "Add to Stack" } </button>
        
    </div>
  
);
};


export default TechCard;