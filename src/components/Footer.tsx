const Footer = () => {
    return(
        <footer className="mt-20 border-t border-[#EAECF0] bg-white">
<div className="mx-auto max-w-205 px-6 py-10">
    <div className="grid grid-cols-4 gap-10">

<div className="col-span-1">
    <div className="flex items-center gap-2">
<img src="../assets/banner-stack.png" alt="" className="h-7 w-auto"/>
    </div >

    <p className="mt-4 text-sm leading-4 text-[#98A2B3]">
 Curated tools, technologies, and resources for developers building
              modern software.
    </p>
    <div className="mt-5 flex gap-4 text-sm text-[#475467]">
        <a href="#" className="">GitHub</a>
         <a href="#" className="">Twitter</a>
          <a href="#" className="">LinkedIn</a>
    </div>
</div>


<div>
    <h3 className="text-sm font-semibold uppercase text-[#344054]">Product</h3>
    <div className="mt-4 flex flex-col gap-3 text-sm text-[#667085]">
<a href="#home" className="">
     Home
</a>
<a href="#technologies" className="">
    Technologies
</a>
<a href="#projects" className="">
    Projects
</a>
    </div>
</div>

<div>
    <h3 className="text-sm font-semibold uppercase text-[#344054]">Company</h3>
    <div className="mt-4 flex flex-col gap-3 text-sm text-[#667085]">
<a href="#about" className="">
    About 
</a>
<a href="#contact" className="">
    Contact 
</a>
<a href="#" className="">
    Careers
</a>
    </div>
</div>

{/* legal */}
<div>
    <h3 className="text-sm font-semibold uppercase text-[#344054]">Legal</h3>
    <div className="mt-4 flex flex-col gap-3 text-sm text-[#667085]">
         <a href="#" className="">
    Privacy Policy
</a>
<a href="#" className="">
   Terms of Service
</a>
</div> </div> </div>

<div className="mt-10 flex items-center justify-between border border-t border-[#EAECF0] pt-5 ">
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