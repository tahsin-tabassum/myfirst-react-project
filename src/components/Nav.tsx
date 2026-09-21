
import logo from "../assets/logo-text.png";

const Nav =() => {
   
    
return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">

    <div className=" relative flex items-center justify-between px-8 py-4 md:px-8">

{/* humburger */}
<button className="text-2xl md:hidden">
 ☰

</button>
{/* logo */}
<a href="#home" className="md:flex-1">
    <img src={logo} alt="" className="h-10" />
    
</a>
 {/* nav for pc */}
<div className="hidden gap-8 md:flex">
    <a href="#home" className="text-pink-500">Home</a>
    <a href="#technologies" className="text-black" >Technologies</a>
    <a href="#projects" className="text-black">Projects</a>
    <a href="#about" className="text-black">About</a>
    <a href="#contact" className="text-black">Contact</a>
</div>

 <div className="flex gap-2 md:flex-1 md:justify-end">
    <button className="text-black px-4 py-2 text-sm md:px-4">Sign In</button>
    <button className="rounded-full bg-pink-500 px-3 py-2 text-sm text-white md:px-5">Sign Up</button>
 </div>

</div>
    </nav>
)
};


export default Nav;