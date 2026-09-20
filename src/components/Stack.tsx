
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

interface StackProps {
    stack: Technology[];
    onRemove: (technology : Technology) => void;
    onRemoveAll:()=> void;

}
const Stack = ({stack, onRemove, onRemoveAll}: StackProps)=> {
    return(
        <div className=" border border-gray-200 bg-white p-5 shadow-sm">

    <h2 className="text-xl font-semibold text-gray-900">Your Stack</h2>

<p className="mt-2 text-sm text-gray-500">
    {stack.length ===0?
    "No technologies selected yet."
:`${stack.length} ${stack.length ===1 ? "Technology"
    : "Technologies"
} Selected`} 
</p>

{stack.length===0 ?(
    <div className="mt-5 flex h-[84x] items-center justify-center rounded-xl border border-dashed border-[#D0D5DD]">
<p className="mt-8 text-center text-sm text-gray-500"> Your stack is empty.</p></div>
 ): (
    <>
    <div className="mt-5 space-y-2">
         {stack.map((technology)=>(
        <div key={technology.id}
        className="flex items-center gap-3 rounded-lg border border-[#EAECF0] p-3">
            <img src={technology.icon} alt={technology.name}
            className="h-7 w-7 object-contain"/>

        <div className="min-w-0 flex-1">
<h3 className="truncate text-sm font-semibold text-gray-900">{technology.name}</h3>
<p className="text-xs text-gray-500">{technology.category}</p>
        </div>

        {/* remove */}
        <button onClick={()=> onRemove(technology)} className="text-lg text-gray-400 hover:text-[#D92D20]">
         ✕   
        </button>
        </div>

       
    ))}
        </div>
        {/* remove all */}
        <button onClick={onRemoveAll} className="mt-5 w-full rounded-lg border border-red-200 px-4 py-2 text-sm text-red-500 hover:bg-red-50">
Remove All
        </button>
        
        </>

)}


        </div>
    );
};
export default Stack;