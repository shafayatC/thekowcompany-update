import { Link } from "react-router-dom";


const NavbarAPI = () => {
    return (
        <div className="">
            <div className="bg-white h-[93px] border-b border-[#000]">
                <nav className=" w-full flex relative justify-start items-center gap-[77px]  pl-[117px] mx-auto ">
                    {/* Logo */}
                    <div className=" flex justify-center items-center mt-[22.5px] gap-[8px]">
                        <img className="w-[117px] h-[48px] " src="/img/API-Docx/kow_green_logo.svg" />
                        <h1 className="text-[34px] leading-[24px] font-bold text-[#255646]">Resources</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-[21px]">
                        <ul className="flex justify-center items-center gap-[56px] text-[20px] leading-[24px] h-[24px]  font-normal text-[#000]">
                            <Link to={"/"} className="cursor-pointer hover:text-[#009665]">Retouched.ai</Link>
                            <Link to={"/"} className="cursor-pointer hover:text-[#009665]">Kow To Mate</Link>
                            <Link to={"/"} className="cursor-pointer hover:text-[#009665]">Holosnap</Link>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default NavbarAPI;