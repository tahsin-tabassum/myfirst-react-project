import bannerimg from "../assets/banner-stack.png";

const Banner = () =>{
return (
    <section id="home" className="px-5 py-16 md:px-10 bg-white">
<div className="mx-auto flex max-w-7xl items-center justify-between">
{/* left */}
<div className="w-full md:w-1/2">

    <h1 className="text-5xl font-bold leading-[1.1]">
   <span className="text-black">Build Your Ideal </span> 
    <br />

    <span className=" block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent" >Development Stack</span>
    </h1>
    <p className="mt-8 max-w-190 text-left text-l leading-7 text-gray-600 ">
Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
    </p>

{/* button */}
<div className="mt-8 flex gap-4">
    <button className="rounded-xl bg-linear-to-r  from-[#F97316] to-[#EC4899] px-6 py-3 font-semibold text-white">
Explore Technologies 
</button>
<button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700">Learn More</button>
</div>
</div>

{/* right */}
<div className="hidden md:block md:w-1/2">
    <img src={bannerimg} alt="Banner" className="mx-auto w-full max-w-lg" />
</div>
</div>
    </section>
)
};
export default Banner;