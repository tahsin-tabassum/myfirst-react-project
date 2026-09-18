import bannerimg from "../assets/banner-stack.png";

const Banner = () =>{
return (
    <section id="home" className=" px-8 py-16 md:px-10 bg-white">
<div className="flex items-center justify-between ">
{/* left */}
<div className="w-full md:w-1/2">

    <h1>
   <span className="block text-5xl text-black leading-tight font-bold text-justify px-7">Build Your Ideal </span> 

    <span className=" bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-5xl font-bold text-justify px-6 text-transparent" >Development Stack</span>
    </h1>
    <p className="max-w-250 text-left px-6 pr-1 text-l text-gray-600 ">
Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your
next project.
    </p>

{/* button */}
<div className="mt-8 flex gap-4 px-6 py-2">
    <button className="rounded-xl bg-linear-to-r  from-[#F97316] to-[#EC4899] px-6 py-3 font-semibold text-white">
Explore Technologies 
</button>
<button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700">Learn More</button>
</div>
</div>

{/* right */}
<div className="max-w-full">
    <img src={bannerimg} alt="Banner" className="absolute right-30 top-1/2 w-125 -translate-y-1/2" />
</div>
</div>
    </section>
)
};
export default Banner;