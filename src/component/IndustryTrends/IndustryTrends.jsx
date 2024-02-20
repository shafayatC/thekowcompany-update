import { Link } from "react-router-dom";
import { LocalDataFor3D } from "../../localData/localData";

// import { MdOutlineArrowForwardIos,MdOutlineArrowBackIos  } from "react-icons/md";

const IndustryTrends = () => {
  return (
    <div id="trends">
      <div className="flex justify-center gap-7 mb-5">
        <h1 className="w-[50px] sm:w-[400px] border-b border-[#7C9C30]"></h1>
        <h1 className="text-[28px] md:text-[40px] -mb-2 md:-mb-4 text-center font-bold">
          INDUSTRY TRENDS
        </h1>
        <h1 className="w-[50px] sm:w-[400px] border-b border-[#7C9C30]"></h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:px-28 md:grid md:grid-cols-2  justify-items-center justify-center gap-3 pt-10 md:pt-20 ">
          <Link to={"/2d/industry-trends"}>
          <div className="relative">
          <div className="w-full md:h-[232px] lg:h-[315px] relative">
            <img className="w-full md:w-auto md:h-full lg:w-full lg:h-auto h-auto" loading="lazy" src={"/img/2d.webp"}  alt="trends photo" />
            
            <div className="absolute flex gap-2 items-end right-0 bottom-0">
              <h1 className="text-white text-[26px]">2D</h1>
              <h1 className="w-[110px]  border-b border-white mb-[10px]"></h1>
            </div>
            </div>
            <div className="flex flex-col justify-items-center pt-5 gap-3">
              <div className="flex flex-row md:flex-col lg:flex-row  justify-center items-center gap-3 ">
                <h1 className="text-xs  md:text-base">
                  Easy Product Photography Solutions for Small Business
                </h1>
                <h1 className="text-xs w-[90px]"> <span className="hidden lg:block">|</span>  01 JAN, 2023</h1>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  to="/2d/industry-trends"
                  className="text-xs font-medium text-white px-12 py-1 bg-[#7C9C30] rounded-3xl"
                >
                  See More
                </Link>
              </div>
            </div>
            {/* <MdOutlineArrowBackIos className='absolute left-0 font-semibold bottom-20 text-white text-2xl'/> */}
          </div>
          </Link>
          <Link to={"/3d/industry-trends"}>
          <div className="relative ">
          <div className="w-full md:h-[232px] lg:h-[315px] relative">
            <img className="w-full md:w-auto md:h-full lg:w-full lg:h-auto h-auto" loading="lazy" src={LocalDataFor3D[0].thumb}  alt="trends photo" />
          
           <div className="absolute flex gap-2 items-end right-0 bottom-0">
              <h1 className="text-white text-[26px]">3D</h1>
              <h1 className="w-[110px]  border-b border-white mb-[12px] "></h1>
            </div>
           </div>

            {/* <MdOutlineArrowForwardIos className='absolute right-0 font-semibold bottom-20 text-white text-2xl' /> */}
            <div className="flex flex-col justify-items-center pt-5 gap-3">
              <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center gap-3 ">
                <h1 className="text-xs md:text-base">
                  {LocalDataFor3D[0].title}
                </h1>
                <h1 className="text-xs w-[90px]"> <span className="hidden lg:block">|</span> {LocalDataFor3D[0].date}</h1>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  to="/3d/industry-trends"
                  className="text-xs font-medium text-white px-12 py-1 bg-[#7C9C30] rounded-3xl"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryTrends;
