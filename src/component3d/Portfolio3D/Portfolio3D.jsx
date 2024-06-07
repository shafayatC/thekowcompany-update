import { useInView } from "react-intersection-observer";
import "./portfolio.css";
const Portfolio3D = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
  });
  return (
    <div>
      <div className="container mx-auto ">
        {/* ----------------------------------------------Section 1 Start---------------------------------------------- */}
        <div className="section-1-bg h-screen mb-1 relative">
          <div className="absolute bottom-10 right-32  ">
            <div className="flex justify-center items-center h-[150px] w-[700px]">
              <div
                ref={ref1}
                className={`transition-all duration-1000 flex flex-col justify-between  pr-7 ${
                  inView1
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <h1 className="text-[40px] text-white tracking-widest poppins-thin font-normal">
                  Digital Content
                </h1>
                <h1 className="uppercase text-[80px] poppins-thin  leading-[90px] text-white">
                  Portfolio
                </h1>
              </div>
              <div>
                <h1 className="h-[120px] w-[1px] bg-white "></h1>
              </div>
              <div
                ref={ref1}
                className={`transition-all duration-1000 ${
                  inView1
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <h1 className="text-[150px] poppins-light text-white pl-5">
                  CGI
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------Section 1 End----------------------------------------------- */}
        {/* ----------------------------------------------Section 2 Start---------------------------------------------- */}
        <div className="section-2-bg h-screen mb-1 relative">
          <div className="flex justify-center items-center h-[100vh] gap-16">
           
              <div
                ref={ref2}
                className={`flex flex-col items-end transition-all duration-1000 ${
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <h1 className="text-[90px] poppins-semibold text-[#191919]">
                  01
                </h1>
                <h1 className="h-[90px] w-[1px] -mt-[30px] mr-[7px]  bg-white"></h1>
                <h1 className="text-white text-[30px] poppins-light mt-2">
                  Architectural{" "}
                </h1>
                <h1 className="text-white text-[30px] poppins-light leading-4">
                  Visualisation
                </h1>
              </div>
            
              <div
                ref={ref2}
                className={`flex flex-col mt-40 items-end transition-all duration-1000 ${
                  inView2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
              <h1 className="text-[90px] poppins-semibold text-[#191919]">
                02
              </h1>
              <h1 className="h-[90px] w-[1px] -mt-[30px] mr-[7px]  bg-white"></h1>
              <h1 className="text-white text-[30px] poppins-light mt-2">
                Fashion Retail
              </h1>
            </div>
            <div
                ref={ref2}
                className={`flex flex-col items-end transition-all duration-1000 ${
                  inView2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                }`}
              >
              <h1 className="text-[90px] poppins-semibold text-[#191919]">
                03
              </h1>
              <h1 className="h-[90px] w-[1px] -mt-[30px] mr-[7px]  bg-white"></h1>
              <h1 className="text-white text-[30px] poppins-light mt-2">
                Packaging
              </h1>
            </div>
            <div
                ref={ref2}
                className={`flex flex-col items-end mt-40 transition-all duration-1000 ${
                  inView2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
              <h1 className="text-[90px] poppins-semibold text-[#191919]">
                04
              </h1>
              <h1 className="h-[90px] w-[1px] -mt-[30px] mr-[7px]  bg-white"></h1>
              <h1 className="text-white text-[30px] poppins-light mt-2">
                Automotive
              </h1>
            </div>
            <div
                ref={ref2}
                className={`flex flex-col items-end transition-all duration-1000 ${
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
              >
              <h1 className="text-[90px] poppins-semibold text-[#191919]">
                05
              </h1>
              <h1 className="h-[90px] w-[1px] -mt-[30px] mr-[7px]  bg-white"></h1>
              <h1 className="text-white text-[30px] poppins-light mt-2">
                Product
              </h1>
              <h1 className="text-white text-[30px] poppins-light leading-4">
                Animation
              </h1>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------Section 2 End----------------------------------------------- */}
        {/* ----------------------------------------------Section 3 Start----------------------------------------------*/}
        <div className="section-3-bg h-screen">

        </div>
        {/* -----------------------------------------------Section 3 End----------------------------------------------- */}
        
      </div>
    </div>
  );
};

export default Portfolio3D;
