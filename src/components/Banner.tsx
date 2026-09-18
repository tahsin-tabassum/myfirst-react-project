

const Banner = () =>{
return (
    <section id="home" className="px-5 py-16 md:px-10 bg-white">
<div className="mx-auto flex max-w-7xl items-center justify-between">
{/* left */}
<div className="w-full md:w-1/2">

    <h1 className="text-4xl font-bold leading-tight md:text-6xl">
    Build Your Ideal 
    <br />

    <span className="bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent" >Development Stack</span>
    </h1>
    <p className="mt-6 max-w-xl text-gray-600">
Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
    </p>

{/* button */}
<div className="mt-8 flex gap-4">
    <button className="rounded-full bg-linear-to-r from-orange-400 to-pink-500 px-6 py-3 font-medium text-white">
Explore Technologies 
</button>
<button className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700">Learn More</button>
</div>
</div>

{/* right */}
<div className="hidden md:block md:w-1/2">
    <img src="../assets/banner-stack.png" alt="Banner" className="mx-auto w-full max-w-lg" />
</div>
</div>
    </section>
)
};
export default Banner;