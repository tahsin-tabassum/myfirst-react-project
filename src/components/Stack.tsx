
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
        <aside className="rounded-2xl border border-gray-200 bg-white p-6">


<div className="flex items-center justify-between">
    <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
<span className="text-sm text-gray-500">
    {stack.length}No Technology Selected
</span>
</div>

{stack.length===0 ?(
<p className="mt-8 text-center text-sm text-gray-500"> Your stack is empty.</p>
 ): (
    <>
    <div className="mt-6 space-y-3">
         {stack.map((technology)=>(
        <div key={technology.id}
        className="flex items-center gap-3 rounded-xl border border-gray-200 p-3">
            <img src={technology.icon} alt={technology.name}
            className="h-10 w-10 object-contain"/>

        <div className="min-w-0 flex-1">
<h3 className="truncate text-sm font-semibold text-gray-900">{technology.name}</h3>
<p className="text-xs text-gray-500">{technology.category}</p>
        </div>

        {/* remove */}
        <button onClick={()=> onRemove(technology)} className="text-lg text-gray-400 hover:text-red-500">
         ✕   
        </button>
        </div>

       
    ))}
        </div>
        {/* remove all */}
        <button onClick={onRemoveAll} className="mt-5 w-full rounded-full border border-red-200 px-4 py-2 text-sm text-red-500 hover:bg-red-50">
Remove All
        </button>
        
        </>

)}


        </aside>
    );
};
export default Stack;