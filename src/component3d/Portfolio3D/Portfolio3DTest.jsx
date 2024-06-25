import { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./portfolioM.css";

const Portfolio3DTest = () => {
  const section6 = [
    "/img/3d/3d_portfolio_m/s6.png",
    "/img/3d/3d_portfolio_m/s6_2.jpg",
    "/img/3d/3d_portfolio_m/s6_3.jpg",
  ];
  const section7 = [
    "/img/3d/3d_portfolio_m/s7_n.jpg",
    "/img/3d/3d_portfolio_m/s7_2.jpg",
    "/img/3d/3d_portfolio_m/s7_3.jpg",
    "/img/3d/3d_portfolio_m/s7_4.jpg",
    "/img/3d/3d_portfolio_m/s7_5.jpg",
    "/img/3d/3d_portfolio_m/s7_6.jpg",
  ];

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
  });
  
  const [currentIndexSec6, setCurrentIndexSec6] = useState(0);
  const [currentIndexSec7, setCurrentIndexSec7] = useState(0);
// -----------------------------section 6--------------------------
    const handleNextClickSec6 = () => {
      setCurrentIndexSec6((prevIndex) => (prevIndex + 1) % section6.length);
    };
  
    const handlePrevClickSec6 = () => {
      setCurrentIndexSec6((prevIndex) => (prevIndex - 1 + section6.length) % section6.length);
    };
// --------------------------------section 7-------------------------------------

    const handleNextClickSec7 = () => {
      setCurrentIndexSec7((prevIndex) => (prevIndex + 1) % section7.length);
    };
  
    const handlePrevClickSec7 = () => {
      setCurrentIndexSec7((prevIndex) => (prevIndex - 1 + section7.length) % section7.length);
    };
  return (
    <div className="overflow-hidden">
      {/* ---------------------------------section 01 start-------------------------------- */}
      <div className="se-1-bg mb-[1px]">
        <div ref={ref1} className=" relative">
          <div className="flex justify-center ">
            <div className="h-[100px] w-[280px]  mt-[51px] mb-[72px] text-white border-r border-white ">
              <h1 className={`transition-all duration-1000 text-[27px] poppins-regular text-center ${
                  inView1
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`} >
                Digital Content
              </h1>
              <h1 
              className={`transition-all duration-1000 text-[54px] poppins-thin text-center leading-[60px] ${
                inView1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
              
      >
                PORTFOLIO
              </h1>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <h1  className={`transition-all duration-1000 poppins-light text-[225px] text-white rotate-90 ${
                inView1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`} >
              CGI
            </h1>
          </div>
          <div className="absolute top-0 right-[68px]">
            <img src="/img/3d/3d_portfolio_m/Ellipse 9.png" />
          </div>
          <div className="absolute top-[179px] left-[68px]">
            <img src="/img/3d/3d_portfolio_m/Ellipse 3.png" />
          </div>
          <div className="absolute top-[159px] left-[58px]">
            <img src="/img/3d/3d_portfolio_m/Ellipse 8.png" />
          </div>
          <div className="absolute top-[159px] left-[58px]">
            <img src="/img/3d/3d_portfolio_m/Ellipse 8.png" />
          </div>
          <div className="absolute bottom-[-77px] right-0 opacity-50">
            <img src="/img/3d/3d_portfolio_m/Glass Effects_02.png" />
          </div>
        </div>
      </div>
      {/* ---------------------------------section 01 end-------------------------------- */}
      {/* ----------------------------------section 02 start------------------------------- */}
      <div className="se-2-bg mb-[1px]">
        <div ref={ref2} className="relative">
          <div className="flex justify-center">
            <div className=" h-[705px] w-full mx-[76px] mt-[77px]">
              <div className={`transition-all duration-1000 flex  flex-col items-start  ${
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`} >
                <div  className="h-[140px] w-[142px]">
                  <h1 className="poppins-semibold border-b border-white w-[60px]  text-[52px] ">
                    01
                  </h1>
                  <h1 className="poppins-regular text-white text-[20.5px] pt-2">
                    Architectural Visualization
                  </h1>
                </div>
              </div>
              <div className={`transition-all duration-1000 flex  flex-col items-end  ${
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}>
                <div className="h-[140px] w-[142px]">
                  <h1 className="poppins-semibold border-b border-white w-[65px]  text-[52px]">
                    02
                  </h1>
                  <h1 className="poppins-regular text-white text-[20.5px] pt-2">
                    Fashion Retail
                  </h1>
                </div>
              </div>
              <div className={`transition-all duration-1000 flex  flex-col items-start  ${
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}>
                <div className="h-[140px] w-[142px]">
                  <h1 className="poppins-semibold border-b border-white w-[65px]  text-[52px]">
                    03
                  </h1>
                  <h1 className="poppins-regular text-white text-[20.5px] pt-2">
                    Packaging
                  </h1>
                </div>
              </div>
              <div className={`transition-all duration-1000 flex  flex-col items-end  ${
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}>
                <div className="h-[140px] w-[142px]">
                  <h1 className="poppins-semibold border-b border-white w-[65px]  text-[52px]">
                    04
                  </h1>
                  <h1 className="poppins-regular text-white  text-[20.5px] pt-2">
                    Automotive
                  </h1>
                </div>
              </div>
              <div className={`transition-all duration-1000 flex  flex-col items-start  ${
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}>
                <div className="h-[140px] w-[142px]">
                  <h1 className="poppins-semibold border-b border-white w-[65px]  text-[52px]">
                    05
                  </h1>
                  <h1 className="poppins-regular text-white text-[20.5px] pt-2">
                    Product Animation
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <img src="/img/3d/3d_portfolio_m/Ellipse_3_s2_v.png" />
          </div>
          <div className="absolute top-[14px] right-[79px]">
            <img src="/img/3d/3d_portfolio_m/Ellipse_8_s2.png" />
          </div>
          <div className="absolute top-[175px] left-0">
            <img src="/img/3d/3d_portfolio_m/Ellipse_9_s2.png" />
          </div>
          <div className="absolute bottom-[-60px] right-0 opacity-50">
            <img src="/img/3d/3d_portfolio_m/Glass Effects_02_s2.png" />
          </div>
        </div>
      </div>
      {/* ----------------------------------section 02 end------------------------------- */}
      {/* -----------------------------------section 03 start------------------------------ */}
      <div className="se-3-bg mb-[1px]">
        <div className="container mx-auto">
          <div className="flex justify-center ">
            <img
              className="mt-[76px] mb-[60px]"
              src="/img/3d/3d_portfolio_m/KOW-Logo_-Gray 1.png "
            />
          </div>
          <p className="w-full px-2 text-justify poppins-regular text-[16px]">
            We are a specialized company in 3D modeling & CGI, producing
            high-quality 3D models, imagery & animations in collaboration with
            top 3D designers. Along with creating realistic 3D models, we also
            offer high quality product image rendering tailored to retail
            industries, enabling clients to catch the customers attention with
            stunning product rendered outputs. Our commitment to delivering
            exceptional visual experiences not only satisfies our clients but
            also attracts more business opportunities.
          </p>
        </div>
      </div>
      {/* -----------------------------------section 03 end------------------------------ */}
      {/* ------------------------------------section 04 start----------------------------- */}
      <div className="se-4-bg relative">
        <div>
          <div className="relative">
            <img src="/img/3d/3d_portfolio_m/s4.png"/>
            <div className="absolute left-0 bottom-[7px]">
              <img src="/img/3d/3d_portfolio_m/A.png"/>
            </div>
          </div>
          <div className="flex flex-col items-center mt-[107px] ">
            <h1 className="text-white poppins-extralight text-[38px] leading-6">Architectural</h1>
            <h1 className="text-[#A5A5A5] poppins-extralight text-[38px]">Visualization</h1>
          </div>
          
        </div>
        <div className="absolute right-0 bottom-0">
        <img src="/img/3d/3d_portfolio_m/V.png"/>
        </div>
      </div>
      {/* ------------------------------------section 04 end----------------------------- */}
      {/* -------------------------------------section 05 start------------------------------- */}
      {/* -------------------------------------section 05 end------------------------------- */}

      {/* --------------------------------------section 06 start-------------------------------*/}
      <div className="se-6-bg mb-[1px]">
      <div>
        <div className="relative">
          <img src={section6[currentIndexSec6]} alt="Exterior Visualization"/>
          <div className="absolute right-0 top-[50%] cursor-pointer" onClick={handleNextClickSec6}>
            <img src="/img/3d/3d_portfolio_m/Next Vector.png" alt="Next"/>
          </div>
          <div className="absolute left-0 top-[50%] rotate-180 cursor-pointer" onClick={handlePrevClickSec6}>
            <img src="/img/3d/3d_portfolio_m/Next Vector.png" alt="Next"/>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[107px]">
          <h1 className="text-white poppins-extralight text-[38px] leading-6">Exterior</h1>
          <h1 className="text-[#A5A5A5] poppins-extralight text-[38px]">Visualization</h1>
        </div>
      </div>
    </div>
      {/* --------------------------------------section 06 end-------------------------------*/}
      {/* --------------------------------------section 07 start-------------------------------*/}
      <div className="se-6-bg mb-[1px]">
      <div>
        <div className="relative">
          <img src={section7[currentIndexSec7]} alt="Exterior Visualization"/>
          <div className="absolute right-0 top-[50%] cursor-pointer" onClick={handleNextClickSec7}>
            <img src="/img/3d/3d_portfolio_m/Next Vector.png" alt="Next"/>
          </div>
          <div className="absolute left-0 top-[50%] rotate-180 cursor-pointer" onClick={handlePrevClickSec7}>
            <img src="/img/3d/3d_portfolio_m/Next Vector.png" alt="Next"/>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[107px]">
          <h1 className="text-white poppins-extralight text-[38px] leading-6">Interior</h1>
          <h1 className="text-[#A5A5A5] poppins-extralight text-[38px]">Visualization</h1>
        </div>
      </div>
    </div>
      {/* --------------------------------------section 07 end-------------------------------*/}
      {/* -----------------------------------section 08 start------------------------------ */}
      <div className="se-1-bg mb-[1px]">
        <div className="container mx-auto ">
        <div className="flex flex-col items-center ">
          <h1 className="text-white poppins-regular text-[35px] mt-[88px]  leading-6">Architectural</h1>
          <h1 className="text-[#A5A5A5] poppins-regular text-[35px]">Visualization</h1>
        </div>
          <p className="w-full px-2 text-justify text-white poppins-regular text-[16px] mt-[52px]">
            We are a specialized company in 3D modeling & CGI, producing
            high-quality 3D models, imagery & animations in collaboration with
            top 3D designers. Along with creating realistic 3D models, we also
            offer high quality product image rendering tailored to retail
            industries, enabling clients to catch the customers attention with
            stunning product rendered outputs. Our commitment to delivering
            exceptional visual experiences not only satisfies our clients but
            also attracts more business opportunities.
          </p>
        </div>
      </div>
      {/* -----------------------------------section 08 end------------------------------ */}
    </div>
  );
};

export default Portfolio3DTest;
