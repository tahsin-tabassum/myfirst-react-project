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
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        {/* top */}
        <div className="flex items-start justify-between">
{/* icon */}
<img src={technology.icon} alt={technology.name} className="h-12 w-12 object-contain"/>
{/* badge */}
<span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">{technology.badge}</span>
        </div>

        {/* name */}
        <h3 className="mt-5 text-xl font-semibold text-gray-900">{technology.name}</h3>
        {/* des */}
        <p className="mt-2 text-sm leading-6  text-gray-500">{technology.description}</p>

        <div className="mt-4 flex items-center gap-2">
<span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">{technology.category}</span>

<span className="text-xs text-gray-500">{technology.difficulty}</span>
        </div>
        {/* rating */}
        <div className="mt-4 flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-medium text-gray-700">
            {technology.rating}</span>
        </div>
        {/* button */}
        <button

        onClick={()=> onAdd(technology)}
        disabled={isAdded}
         className={`mt-5 w-full rounded-full bg-linear-to-r from-[#F97316] to-[#EC4899] px-4 py-3 text-sm font-medium text-white"${isAdded
            ? 'cursor-not-allowed bg-gray-400'
            : "bg-linear-to-r from-[#F97316] to-[#EC4899]"}`}>
       {isAdded?"✓ Add to Stack": "Add to Stack" } </button>
        
    </div>
);
};


export default TechCard;