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
   
    const badgeColors: Record<string, string> = {
  Popular: "bg-[#EFF8FF] text-[#0086D1]",
  Versatile: "bg-[#ECFDF3] text-[#039855]",
  Fast: "bg-[#FFF4ED] text-[#F04438]",

  "SSR / Edge": "bg-[#EFF8FF] text-[#175CD3]",
  Standard: "bg-[#ECFDF3] text-[#12B76A]",
  "Top SQL": "bg-[#EFF8FF] text-[#175CD3]",

  Cache: "bg-[#FEF3F2] text-[#D92D20] ",
  Ubiquitous: "bg-[#FFFAEB] text-[#B54708]",
  Essential: "bg-[#EFF8FF] text-[#0086D1]",

  Robust: "bg-[#EFF8FF] text-[#0086D1]",
  Modern: "bg-[#ECFEFF] text-[#0891B2]",
  Containers: "bg-[#EFF8FF] text-[#0086D1]",

  Automation: "bg-[#F4F3FF] text-[#6941C6]",
  "Developer Tool": "bg-[#FFF4ED] text-[#F04438]",
};
return (
    <div className="flex flex-col w-63  rounded-xl border border-[#EAECF0] bg-white p-4 shadow-md">
        {/* top */}
        <div className="flex items-start justify-between">
{/* icon */}
<img src={technology.icon} alt={technology.name} className="h-12 w-8 object-contain"/>

{/* badge */}
<span className={`inline-block rounded-full border-1  px-4 py-1 text-sm font-medium  ${badgeColors[technology.badge] || "bg-gray-100 text-gray-600"} `}>{technology.badge}</span>
        </div>

        {/* name */}
        <h3 className="mt-3 text-xl text-justify  font-semibold text-black">{technology.name}</h3>
        {/* des */}
        <p className=" text-sm text-left text-gray-500">{technology.description}</p>
{/* card */}
<div className="mt-3 border-t border-[#f4f5f6] pt-1">
        <div className="mt-3 flex items-center justify-between gap-1">
<span className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-600">{technology.category}</span>

<span className="text-xs text-gray-700">{technology.difficulty}</span>
        
        {/* rating */}
<span className="text-[#3b3f47]">
            <span className="text-yellow-400">★</span>
        {" "}
            {technology.rating}</span>
        </div>
        
        {/* button */}
        <button

        onClick={()=> onAdd(technology)}
        disabled={isAdded}
         className={`mt-2 w-full rounded-md py-2 text-[8px] font-medium text-white transition
            ${isAdded
            ? 'cursor-not-allowed bg-[#98A2B3]'
            : "bg-[#080D1A] hover:bg-[#1D2939]"}`}>
       {isAdded?"✓ Add to Stack": "Add to Stack" } </button>
        
    </div>
    </div>
);
};


export default TechCard;