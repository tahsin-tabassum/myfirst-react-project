const Footer = () => {
    return(
        <footer className="mt-20 border-t border-[#EAECF0] bg-white">
<div className="mx-auto max-w-205 px-6 py-10">
<div className="col-span-1">
    <div className="flex items-center gap-2">
<img src="../assets/banner-stack.png" alt="" className="h-7 w-auto"/>
    </div >
    <p className="mt-4 text-sm leading-4 text-[#98A2B3]">
 Curated tools, technologies, and resources for developers building
              modern software.
    </p>
    <div className="mt-5 flex gap-4 text-sm text-[#475467]">
        <a href="#" className="hover:text-pink-500">GitHub</a>
         <a href="#" className="hover:text-pink-500">Twitter</a>
          <a href="#" className="hover:text-pink-500">LinkedIn</a>
    </div>
</div>
</div>

<div>
    <h3 className="text-sm font-semibold"></h3>
</div>


        </footer>
    );
};
export default Footer;