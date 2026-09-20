
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
        
        <div className=" bg-white py-44">
        <div className="flex flex-col w-41  px-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-md">

    <span className="text-2xl font-semibold text-black">Your Stack</span>



{stack.length===0 ?(
    <>
    <p className="mt-1 text-sm text-slate-500 py-2">
                  No technologies selected yet.
                </p>
    <div className="mt-5 flex h-13 w-36 items-center justify-center rounded-xl border border-dashed border-[#D0D5DD]">
<p className="mt-8 text-center text-sm text-gray-500"> Your stack is empty.</p></div></>
 ): (
    <>
    <div className="mt-4 space-y-2">
         {stack.map((technology)=>(
        <div key={technology.id}
        className="flex items-center gap-2 rounded-lg border border-[#EAECF0] p-3">
            <img src={technology.icon} alt={technology.name}
            className="h-7 w-7 object-contain"/>

        <div className="min-w-0 flex-1">
<h4 className="truncate text-sm font-semibold text-gray-900">{technology.name}</h4>
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
        <button onClick={onRemoveAll} className="mt-5 w-full rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50">
Remove All
        </button>
        
        </>

)}


        </div>

        </div>
    );
};
export default Stack;