import { useState } from "react";

const RetouchingService = () => {
  const [activeDiv, setActiveDiv] = useState(1); // Default to the first div
  return (
    <div className="container mx-auto my-[36px]">
      <div className="flex justify-center items-center  bg-white rounded-lg border-2 border-[#155331] mb-9">
        <h1 className="w-[440px] text-[36px] font-bold leading-10 text-[#737373] py-[23px]">
          Retouching Services
        </h1>
        <h1 className="w-[730px] text-[24px] font-medium leading-8 text-[#737373] py-[23px]">
          Enhance and perfect images for a professional finish.
        </h1>
      </div>

      <div className="bg-white">
        <div>
          <div className="flex flex-col items-center  p-8">
            {/* Toggle Buttons */}
            <div className="flex justify-center gap-[18px] back px-6 py-2">
              <button
                className={`px-4 py-2   ${
                  activeDiv === 1
                    ? "bg-[#F5F7F7] text-[30px] text-[#0B2B23] px-9  rounded-xl border border-[#FFF] shadow-xl font-medium leading-9 "
                    : "text-[#9EA1A1] text-[30px] px-9 font-medium leading-9"
                }`}
                onClick={() => setActiveDiv(1)}
              >
                Models
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  activeDiv === 2
                    ? "bg-[#F5F7F7] text-[30px] text-[#0B2B23] px-9 rounded-xl border border-[#FFF] shadow-xl font-medium leading-9 "
                    : "text-[#9EA1A1] text-[30px] px-9 font-medium leading-9"
                }`}
                onClick={() => setActiveDiv(2)}
              >
                Shoes
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  activeDiv === 3
                    ? "bg-[#F5F7F7] text-[30px] text-[#0B2B23] px-9 rounded-xl border border-[#FFF] shadow-xl font-medium leading-9 "
                    : "text-[#9EA1A1] text-[30px] px-9 font-medium leading-9"
                }`}
                onClick={() => setActiveDiv(3)}
              >
                Jewelries
              </button>
            </div>

            {/* Div Sections */}
            <div className="w-full pt-8">
              {activeDiv === 1 && (
                <div className=" bg-white rounded  w-full  h-full">
                  <div className="flex justify-center items-center gap-20 p-10 border-2 border-gray-200 rounded-xl border-dashed">
                    <div className="w-[620px]">
                      <p className="text-[30px] text-[#737373] font-normal w-full leading-9">
                        From enhancing shape with precise image manipulation to
                        adding natural shadows, removing imperfections, and
                        perfecting the background, we ensure every pair stands
                        out in flawless detail.
                      </p>
                    </div>
                    <div className="group  relative h-[660px] w-[622px]" >
                      <div className="transition-all duration-500 border border-gray-300 rounded-xl absolute left-0 top-0 group-hover:opacity-100 group-hover:z-50 z-0 opacity-25">
                        <img src="/img/2D-Microsite/images/modelB.png" />
                      </div>
                      <div className="transition-all duration-500 border border-gray-300 rounded-xl absolute right-0 bottom-0 group-hover:opacity-25 group-hover:z-0 z-50 opacity-100">
                        <img src="/img/2D-Microsite/images/modelA.png" />
                      </div>
                      
                    </div>
                   
                  </div>
                  <h1 className="text-right text-[20px] font-medium leading-9 pt-10 text-[#afacac] italic">*Hover to change</h1>
                </div>
              )}
              {activeDiv === 2 && (
              <div className=" bg-white rounded  w-full  h-full">
              <div className="flex justify-center items-center gap-20 p-10 border-2  border-gray-200 rounded-xl border-dashed">
                <div className="w-[620px]">
                  <p className="text-[30px] text-[#737373] font-normal w-full leading-9">
                    From enhancing shape with precise image manipulation to
                    adding natural shadows, removing imperfections, and
                    perfecting the background, we ensure every pair stands
                    out in flawless detail.
                  </p>
                </div>
                <div className="group  relative h-[660px] w-[622px]" >
                  <div className="transition-all duration-500 border border-gray-300 rounded-xl absolute left-0 top-0 group-hover:opacity-100 group-hover:z-50 z-0 opacity-25">
                    <img  src="/img/2D-Microsite/images/shoeB.png" />
                  </div>
                  <div className="transition-all duration-500 border border-gray-300 rounded-xl absolute right-0 bottom-0 group-hover:opacity-25 group-hover:z-0 z-50 opacity-100">
                    <img src="/img/2D-Microsite/images/shoeA.png" />
                  </div>
                  
                </div>
               
              </div>
              <h1 className="text-right text-[20px] font-medium leading-9 pt-10 text-[#afacac] italic">*Hover to change</h1>
            </div>
              )}
              {activeDiv === 3 && (
              <div className=" bg-white rounded  w-full  h-full">
              <div className="flex justify-center items-center gap-20 p-10 border-2 border-gray-200 rounded-xl border-dashed">
                <div className="w-[620px]">
                  <p className="text-[30px] text-[#737373] font-normal w-full leading-9">
                    From enhancing shape with precise image manipulation to
                    adding natural shadows, removing imperfections, and
                    perfecting the background, we ensure every pair stands
                    out in flawless detail.
                  </p>
                </div>
                <div className="group  relative h-[660px] w-[622px]" >
                  <div className="transition-all duration-500 border border-gray-300 rounded-xl absolute left-0 top-0 group-hover:opacity-100 group-hover:z-50 z-0 opacity-25">
                    <img className="rounded-xl" src="/img/2D-Microsite/images/ringB.png" />
                  </div>
                  <div className="transition-all duration-500 border border-gray-300 rounded-xl absolute right-0 bottom-0 group-hover:opacity-25 group-hover:z-0 z-50 opacity-100">
                    <img className="rounded-xl" src="/img/2D-Microsite/images/ringA.png" />
                  </div>
                  
                </div>
               
              </div>
              <h1 className="text-right text-[20px] font-medium leading-9 pt-10 text-[#afacac] italic">*Hover to change</h1>
            </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetouchingService;
