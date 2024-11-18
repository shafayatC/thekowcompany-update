import { Link } from "react-router-dom";


const NavbarAPI = () => {
    return (
        <div className="">
            <div className="hidden lg:block bg-white h-[93px] border-b border-[#000]">
                <nav className=" w-full flex relative justify-start items-center gap-[77px]  pl-[117px] mx-auto ">
                    {/* Logo */}
                    <div className=" flex justify-center items-center mt-[22.5px] gap-[8px]">
                        <img className="w-[117px] h-[48px] " src="/img/API-Docx/kow_green_logo.svg" />
                        <h1 className="text-[34px] leading-[24px] font-bold font-anek-latin text-[#255646]">Resources</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-[21px]">
                        <ul className="flex justify-center items-center gap-[56px] text-[20px] leading-[24px] h-[24px] font-ibm-plex  font-normal   text-[#000]">
                            <Link to={"/api-documentation/retouched"} className="cursor-pointer hover:text-[#009665] hover:font-semibold">Retouched.ai</Link>
                            <Link to={"#"} className="cursor-pointer hover:text-[#009665] hover:font-semibold">Kow To Mate</Link>
                            <Link to={"#"} className="cursor-pointer hover:text-[#009665] hover:font-semibold">Holosnap</Link>
                        </ul>
                    </div>

                </nav>
            </div>
            <div className="">
                <div className="flex flex-col gap-4 lg:hidden">
                    <div className="flex justify-center items-center pt-[51px]">
                        <img className="w-[117px] h-[48px] " src="/img/API-Docx/kow_green_logo.svg" />
                        <h1 className="text-[34px] leading-[24px] font-bold font-anek-latin text-[#255646]">Resources</h1>
                    </div>
                    <div>
                        <div className="border-y border-[#000] px-6">
                            <ul className="flex items-center py-[10px] gap-[23px] text-base font-normal font-ibm-plex text-black">
                                <Link to={"/api-documentation/retouched"} className="cursor-pointer flex-shrink-0  hover:text-[#009665] hover:font-bold">Retouched.ai</Link>
                                <Link to={"#"} className="cursor-pointer flex-shrink-0  hover:text-[#009665] hover:font-bold">Kow To Mate</Link>
                                <Link to={"#"} className="cursor-pointer flex-shrink-0  hover:text-[#009665] hover:font-bold">Holosnap</Link>
                            </ul>
                        </div>
                        <div className="border-b border-[#000] px-6">
                            <ul className="anek-latin-font flex items-center font-ibm-plex text-base font-normal gap-8 py-[10px]">
                                <li><Link to="#" className="text-[#009665] font-[700] hover:font-[700] hover:text-[#009665]">API</Link></li>
                                <li><Link to="#" className="font-[400] hover:font-[700] hover:text-[#009665]">SDK</Link></li>
                                <li><Link to="#" className="font-[400] hover:font-[700] hover:text-[#009665]">UI Component</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarAPI;