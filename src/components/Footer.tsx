import footerimg from "../assets/logo-text.png";

const Footer = () => {
    return(
        <footer className=" pt-16 border-t border-[#EAECF0] bg-white px-14">
<div className="mx-auto max-w-6xl">
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">

<div className="col-span-1">
    <div className="flex items-center gap-2">
<img src={footerimg} alt="footer" className="h-7 w-auto"/>
    </div >

    <p className="text-left py-1 text-sm leading-4 text-[#8f8f90]">
 Curated tools, technologies, and resources for developers building modern software.
    </p>
    <div className="mt-5 flex gap-4 text-sm text-[#475467]">
        <a href="#" >GitHub</a>
         <a href="#" >Twitter</a>
          <a href="#">LinkedIn</a>
    </div>
</div>


<div className="text-left pl-15">
    <h3 className="text-sm font-semibold uppercase text-[#344054]">Product</h3>
    <div className="mt-3 flex flex-col gap-2 text-sm text-[#667085]">
<a href="#home">
     Home
</a>
<a href="#technologies">
    Technologies
</a>
<a href="#projects">
    Projects
</a>
    </div>
</div>
{/* company  */}

<div className="text-justify px-21">
    <h3 className="text-sm font-semibold uppercase text-[#344054]">Company</h3>
    <div className="mt-3 flex flex-col gap-2 text-sm text-[#667085]">
<a href="#about">
    About 
</a>
<a href="#contact">
    Contact 
</a>
<a href="#">
    Careers
</a>
    </div>
</div>

{/* legal */}
<div className=" text-justify px-4">
    <h3 className="text-sm font-semibold uppercase text-[#344054]">Legal</h3>
    <div className="mt-3 flex flex-col gap-2 text-sm text-[#667085]">
         <a href="#" className="">
    Privacy Policy
</a>
<a href="#" className="">
   Terms of Service
</a>
</div> </div> </div>

<div className="mt-10 flex items-center justify-between border-t border-[#EAECF0] pt-5 ">
<p className="text-sm text-[#98A2B3]"> © 2026 Dev Stack. All rights reserved.</p>
<div className="flex gap-6 text-sm text-[#98A2B3]">
<a href="#" className="">
   Privacy
</a>
<a href="#" className="">
   Terms
</a>
</div>
</div>

</div>
        </footer>
    );
};
export default Footer;