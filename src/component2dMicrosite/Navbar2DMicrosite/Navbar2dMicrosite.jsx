import { Link } from "react-router-dom";


const Navbar2dMicrosite = () => {
    return (
        <div className="bg-white">
            <nav className="container  w-full flex relative justify-between items-center mx-auto px-16 py-2">
      {/* Logo */}
      <div className="">
     <img className="w-20" src="/img/logoBlack.webp"/>
      </div>

      {/* Search Bar */}
      <div className="">
       <ul className="flex justify-center items-center gap-4 text-[17px]">
        <Link to={"/"} className="cursor-pointer hover:text-[#71AF50]">The KOW Company</Link>
        <Link to={"/2d/industry-trends"} className="cursor-pointer hover:text-[#71AF50]">Blog</Link>
       </ul>
      </div>

      {/* Login */}
      <div className="">
        <div>
            <button className="rounded-md border border-[#71AF50] py-1 px-4 text-[17px]">Book a call</button>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar2dMicrosite;