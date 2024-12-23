import React, { useState } from 'react';
import ImageTransition from './ImageTransition';

const AmbienceEnhance = () => {
    const [activeDivSection, setActiveDivSection] = useState(1); // Default to the first div
    return (
        <div id='ambience' className="container mx-auto ">
             <div className="flex justify-center items-center  bg-white rounded-lg border-2 border-[#155331] my-9">
        <h1 className="w-[440px] text-[36px] font-bold leading-10 text-[#737373] py-[23px]">
        Ambience Enhance
        </h1>
        <p className="w-[730px] text-[24px] font-medium leading-8 text-[#737373] py-[23px]">
        Through seamless background plate addition, soft shadow enhancement, and meticulous tag number and imperfection removal, we create an inviting atmosphere that enhances every detail beautifully
        </p>
      </div>

      <div className="">
        <div>
          <div className="flex flex-col items-center  ">
            {/* Toggle Buttons */}
           

            {/* Div Sections */}
            <div className="w-full pt-8">
              {activeDivSection === 1 && (
                <div className="rounded  w-full  h-full">
                  <ImageTransition
                  afterimg={"./img/2D-Microsite/images/test1.webp"} 
                  beforeimg={"./img/2D-Microsite/images/test2.webp"}
                 
                  
                  />
                </div>
              )}
              {activeDivSection === 2 && (
               <div className=" rounded  w-full  h-full">
               <ImageTransition 
               afterimg={"./img/2D-Microsite/images/test3.webp"} 
               beforeimg={"./img/2D-Microsite/images/test4.webp"}
               
               />
             </div>
              )}
              {activeDivSection === 3 && (
               <div className=" rounded  w-full  h-full">
               <ImageTransition
               afterimg={"./img/2D-Microsite/images/test5.webp"} 
               beforeimg={"./img/2D-Microsite/images/test6.webp"}
               
               />
             </div>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center gap-[18px]  px-6 pt-10">
              <button
                className={` rounded-2xl   ${
                    activeDivSection === 1
                    ? "  bg-[#15803D] h-[6px] w-[40px]"
                    : " bg-[#9EA1A1] h-[6px] w-[20px]"
                }`}
                onClick={() => setActiveDivSection(1)}
              >
                
              </button>
              <button
               className={` rounded-2xl   ${
                activeDivSection === 2
                ? "  bg-[#15803D] h-[6px] w-[40px]"
                : " bg-[#9EA1A1] h-[6px] w-[20px]"
            }`}
                onClick={() => setActiveDivSection(2)}
              >
                
              </button>
              <button
               className={` rounded-2xl   ${
                activeDivSection === 3
                ? "  bg-[#15803D] h-[6px] w-[40px]"
                : " bg-[#9EA1A1] h-[6px] w-[20px]"
            }`}
                onClick={() => setActiveDivSection(3)}
              >
               
              </button>
            </div>
            <h1 className="text-center text-[20px] font-medium leading-9 pt-4 text-[#afacac] italic">*Press & Hold to compare</h1>
        </div>
      </div>
        </div>
    );
};

export default AmbienceEnhance;