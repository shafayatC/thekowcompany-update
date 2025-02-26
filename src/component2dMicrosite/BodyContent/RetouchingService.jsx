import { useEffect, useRef, useState } from "react";

const RetouchingService = () => {
  const [activeDiv, setActiveDiv] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const upperImageRef = useRef(null);
  const lowerImageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const upperImage = upperImageRef.current;
    const lowerImage = lowerImageRef.current;

    if (!upperImage || !lowerImage) return; // Prevents errors in case refs are null

    const handleUpperImageAction = () => {
      upperImage.style.opacity = "1";
      upperImage.style.zIndex = "50";
      lowerImage.style.opacity = "0.25";
      lowerImage.style.zIndex = "0";
    };

    const handleLowerImageAction = () => {
      upperImage.style.opacity = "0.25";
      upperImage.style.zIndex = "0";
      lowerImage.style.opacity = "1";
      lowerImage.style.zIndex = "50";
    };

    if (!isMobile) {
      upperImage.addEventListener("mouseenter", handleUpperImageAction);
      lowerImage.addEventListener("mouseenter", handleLowerImageAction);
    } else {
      upperImage.addEventListener("click", handleUpperImageAction);
      lowerImage.addEventListener("click", handleLowerImageAction);
    }

    return () => {
      upperImage.removeEventListener("mouseenter", handleUpperImageAction);
      lowerImage.removeEventListener("mouseenter", handleLowerImageAction);
      upperImage.removeEventListener("click", handleUpperImageAction);
      lowerImage.removeEventListener("click", handleLowerImageAction);
    };
  }, [isMobile, activeDiv]);

  return (
    <div id="retouching" className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-center items-center  bg-white rounded-lg border-2 border-[#155331] my-9 py-[23px]">
        <h1 className="lg:w-[440px] text-[22px] lg:text-[36px] font-bold leading-10 text-[#737373] ">
          Retouching Services
        </h1>
        <h1 className="w-full lg:w-[730px] text-[16px] lg:text-[24px] text-center lg:text-left font-medium lg:leading-8 text-[#737373] px-2 lg:px-0 ">
          Enhance and perfect images for a professional finish.
        </h1>
      </div>

      <div className="bg-white rounded-xl">
        <div>
          <div className="flex flex-col items-center  p-8">
            {/* Toggle Buttons */}
            <div className="flex justify-center lg:gap-[18px] back px-2 lg:px-6 py-2 relative">
              <div
                className="absolute  duration-500 ease-in-out bg-[#F5F7F7] rounded-xl shadow-xl border border-[#FFF] w-[calc(39.3333%-30px)]  md:w-[calc(33.3333%-10px)] lg:w-[calc(33.3333%-24px)] h-[calc(100%-18px)] transition-transform"
                style={{
                  transform:
                    activeDiv === 1
                      ? "translateX(calc(-108%))"
                      : `translateX(calc(${(activeDiv - 2) * 100}%))`,
                }}
              ></div>
              <button
                className={`px-2 py-2 z-10 lg:text-[30px] font-medium w-[100px] md:w-[160px] ${
                  activeDiv === 1 ? "text-[#0B2B23]" : "text-[#9EA1A1]"
                }`}
                onClick={() => setActiveDiv(1)}
              >
                Models
              </button>
              <button
                className={`px-2 py-2 z-10 lg:text-[30px] font-medium w-[100px] md:w-[160px]  ${
                  activeDiv === 2 ? "text-[#0B2B23]" : "text-[#9EA1A1]"
                }`}
                onClick={() => setActiveDiv(2)}
              >
                Shoes
              </button>
              <button
                className={`pr-3 md:pr-5 py-2 z-10 lg:text-[30px] font-medium w-[100px] md:w-[160px] ${
                  activeDiv === 3 ? "text-[#0B2B23]" : "text-[#9EA1A1]"
                }`}
                onClick={() => setActiveDiv(3)}
              >
                Jewelries
              </button>
            </div>

            {isMobile ? (
              <div className="w-full">
                <h1 className="flex justify-end text-[12px] md:text-[16px] font-medium pt-5 text-[#afacac] italic">
                *Tap to change
                </h1>
              </div>
            ) : (
              <div className="w-full">
                <h1 className="flex justify-end text-[20px] font-medium leading-9 pt-10 text-[#afacac] italic">
                  *Hover to change
                </h1>
              </div>
            )}

            {/* Div Sections */}
            <div className="w-full pt-8">
              {activeDiv === 1 && (
                <div className=" bg-white rounded  w-full  h-full">
                  <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-20 p-2 lg:p-10 ">
                    <div className="w-full lg:w-[620px]">
                      <p className="text-[16px] lg:text-[30px] text-[#737373] font-normal w-full lg:leading-9">
                        From enhancing shape with precise image manipulation to
                        adding natural shadows, removing imperfections, and
                        perfecting the background, we ensure every pair stands
                        out in flawless detail.
                      </p>
                    </div>
                    <div className="group relative h-[400px] w-[305px] sm:h-[385px] sm:w-[380px] md:h-[660px] md:w-[600px] lg:h-[700px] lg:w-[1350px] xl:h-[660px] xl:w-[700px] 2xl:h-[660px] 2xl:w-[622px]">
                      {/* Upper Image */}
                      <div
                        ref={upperImageRef}
                        className="transition-all duration-500 border border-gray-300 rounded-xl absolute left-0 top-0 z-0 opacity-25 upper-image"
                      >
                        <div className="relative">
                          <img
                            className="w-[200px] md:w-full rounded-xl"
                            src="/img/2D-Microsite/images/modelB.webp"
                          />
                          <h1 className="text-[#AADE8A] text-[12px] md:text-[20px] font-medium leading-7 absolute top-0 p-2 md:p-4">
                            Before
                          </h1>
                        </div>
                      </div>

                      {/* Lower Image */}
                      <div
                        ref={lowerImageRef}
                        className="transition-all duration-500 border border-gray-300 rounded-xl absolute right-0 bottom-0 z-50 opacity-100 lower-image"
                      >
                        <div className="relative">
                          <img
                            className="w-[200px] md:w-full rounded-xl"
                            src="/img/2D-Microsite/images/modelA.webp"
                          />

                          <h1 className="text-[#155331] text-[12px] md:text-[20px] font-medium leading-7 absolute top-0 p-2 md:p-4">
                            After
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeDiv === 2 && (
                <div className=" bg-white rounded  w-full  h-full">
                  <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-20 p-2 lg:p-10 ">
                    <div className="w-full lg:w-[620px]">
                      <p className="text-[16px] lg:text-[30px] text-[#737373] font-normal w-full lg:leading-9">
                        From enhancing shape with precise image manipulation to
                        adding natural shadows, removing imperfections, and
                        perfecting the background, we ensure every pair stands
                        out in flawless detail.
                      </p>
                    </div>
                    <div className="group relative h-[250px] w-[305px] sm:h-[385px] sm:w-[380px] md:h-[660px] md:w-[600px] lg:h-[700px] lg:w-[1350px] xl:h-[660px] xl:w-[700px] 2xl:h-[660px] 2xl:w-[622px]">
                      {/* Upper Image */}
                      <div
                        ref={upperImageRef}
                        className="transition-all duration-500 border border-gray-300 rounded-xl absolute left-0 top-0 z-0 opacity-25 upper-image"
                      >
                        <div className="relative">
                          <img
                            className="w-[200px] md:w-full rounded-xl"
                            src="/img/2D-Microsite/images/shoeB.webp"
                          />
                          <h1 className="text-[#AADE8A] text-[12px] md:text-[20px] font-medium leading-7 absolute top-0 p-2 md:p-4">
                            Before
                          </h1>
                        </div>
                      </div>

                      {/* Lower Image */}
                      <div
                        ref={lowerImageRef}
                        className="transition-all duration-500 border border-gray-300 rounded-xl absolute right-0 bottom-0 z-50 opacity-100 lower-image"
                      >
                        <div className="relative">
                          <img
                            className="w-[200px] md:w-full rounded-xl"
                            src="/img/2D-Microsite/images/shoeA.webp"
                          />
                          <h1 className="text-[#155331] text-[12px] md:text-[20px] font-medium leading-7 absolute top-0 p-2 md:p-4">
                            After
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeDiv === 3 && (
                <div className=" bg-white rounded  w-full  h-full">
                  <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-20 p-2 lg:p-10 ">
                    <div className="w-full lg:w-[620px]">
                      <p className="text-[16px] lg:text-[30px] text-[#737373] font-normal w-full lg:leading-9">
                        From enhancing shape with precise image manipulation to
                        adding natural shadows, removing imperfections, and
                        perfecting the background, we ensure every pair stands
                        out in flawless detail.
                      </p>
                    </div>
                    <div className="group relative h-[250px] w-[305px] sm:h-[385px] sm:w-[380px] md:h-[660px] md:w-[600px] lg:h-[700px] lg:w-[1350px] xl:h-[660px] xl:w-[700px] 2xl:h-[660px] 2xl:w-[622px]">
                      {/* Upper Image */}
                      <div
                        ref={upperImageRef}
                        className="transition-all duration-500 border border-gray-300 rounded-xl absolute left-0 top-0 z-0 opacity-25 upper-image"
                      >
                        <div className="relative">
                          <img
                            className="w-[200px] md:w-full rounded-xl"
                            src="/img/2D-Microsite/images/ringB.webp"
                          />
                          <h1 className="text-[#AADE8A] text-[12px] md:text-[20px] font-medium leading-7 absolute top-0 p-2 md:p-4">
                            Before
                          </h1>
                        </div>
                      </div>

                      {/* Lower Image */}
                      <div
                        ref={lowerImageRef}
                        className="transition-all duration-500 border border-gray-300 rounded-xl absolute right-0 bottom-0 z-50 opacity-100 lower-image"
                      >
                        <div className="relative">
                          <img
                            className="w-[200px] md:w-full rounded-xl"
                            src="/img/2D-Microsite/images/ringA.webp"
                          />
                          <h1 className="text-[#155331] text-[12px] md:text-[20px] font-medium leading-7 absolute top-0 p-2 md:p-4">
                            After
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='w-full pb-7 pr-2 md:pr-10'>
            <a href='https://thekowcompany.com/2D_Portfolio.pdf' target='_blank' className="flex justify-end text-[12px] md:text-[16px] lg:text-[20px] font-medium leading-9 cursor-pointer underline ">
                    Download for more
                </a>
            </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default RetouchingService;