import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./portfolioM.css";

const PortfolioTab = () => {
  const section6 = [
    "/img/3d/3d_portfolio_tab/e1.jpg",
    "/img/3d/3d_portfolio_tab/e2.jpg",
    "/img/3d/3d_portfolio_tab/e3.jpg",
  ];
  const section7 = [
    "/img/3d/3d_portfolio_tab/i1.jpg",
    "/img/3d/3d_portfolio_tab/i2.jpg",
    "/img/3d/3d_portfolio_tab/i3.jpg",
    "/img/3d/3d_portfolio_tab/i4.jpg",
    "/img/3d/3d_portfolio_tab/i5.jpg",
    "/img/3d/3d_portfolio_tab/i6.jpg",
  ];
  const section9 = [
    "/img/3d/3d_portfolio_tab/f1.jpg",
    "/img/3d/3d_portfolio_tab/f2.jpg",
    "/img/3d/3d_portfolio_tab/f3.jpg",
    "/img/3d/3d_portfolio_tab/f4.jpg",
    "/img/3d/3d_portfolio_tab/f5.jpg",
    "/img/3d/3d_portfolio_tab/f6.jpg",
    "/img/3d/3d_portfolio_tab/f7.jpg",
  ];
  const section10 = [
    "/img/3d/3d_portfolio_tab/p1.jpg",
    "/img/3d/3d_portfolio_tab/p2.jpg",
    "/img/3d/3d_portfolio_tab/p3.jpg",
    "/img/3d/3d_portfolio_tab/p4.jpg",
    "/img/3d/3d_portfolio_tab/p5.jpg",
    "/img/3d/3d_portfolio_tab/p6.jpg",
    "/img/3d/3d_portfolio_tab/p7.jpg",
    "/img/3d/3d_portfolio_tab/p8.jpg",
    "/img/3d/3d_portfolio_tab/p9.jpg",
    "/img/3d/3d_portfolio_tab/p10.jpg",
    "/img/3d/3d_portfolio_tab/p11.jpg",
  ];
  const section11 = [
    "/img/3d/3d_portfolio_tab/a1.jpg",
    "/img/3d/3d_portfolio_tab/a2.jpg",
    "/img/3d/3d_portfolio_tab/a3.jpg",
    "/img/3d/3d_portfolio_tab/a4.jpg",
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById("productVideo");
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    const videoElement = document.getElementById("productVideo");
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      setIsPlaying(false);
      const videoElement = document.getElementById("productVideo");
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref6, inView: inView6 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref7, inView: inView7 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref8, inView: inView8 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref9, inView: inView9 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref10, inView: inView10 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref11, inView: inView11 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref12, inView: inView12 } = useInView({
    threshold: 0.2,
  });

  const [currentIndexSec6, setCurrentIndexSec6] = useState(0);
  const [currentIndexSec7, setCurrentIndexSec7] = useState(0);
  const [currentIndexSec9, setCurrentIndexSec9] = useState(0);
  const [currentIndexSec10, setCurrentIndexSec10] = useState(0);
  const [currentIndexSec11, setCurrentIndexSec11] = useState(0);
  // -----------------------------section 6--------------------------
  const handleNextClickSec6 = () => {
    setCurrentIndexSec6((prevIndex) => {
      if (prevIndex < section6.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex; // Do nothing if at the last image
    });
  };

  const handlePrevClickSec6 = () => {
    setCurrentIndexSec6((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex; // Do nothing if at the first image
    });
  };
  // --------------------------------section 7-------------------------------------

  const handleNextClickSec7 = () => {
    setCurrentIndexSec7((prevIndex) => {
      if (prevIndex < section7.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex; // Do nothing if at the last image
    });
  };

  const handlePrevClickSec7 = () => {
    setCurrentIndexSec7((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex; // Do nothing if at the first image
    });
  };
  // ------------------------------------------section 9--------------------------------
  const handleNextClickSec9 = () => {
    setCurrentIndexSec9((prevIndex) => {
      if (prevIndex < section9.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex; // Do nothing if at the last image
    });
  };

  const handlePrevClickSec9 = () => {
    setCurrentIndexSec9((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex; // Do nothing if at the first image
    });
  };
  // --------------------------------------------section 10--------------------------------
  const handleNextClickSec10 = () => {
    setCurrentIndexSec10((prevIndex) => {
      if (prevIndex < section10.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex; // Do nothing if at the last image
    });
  };

  const handlePrevClickSec10 = () => {
    setCurrentIndexSec10((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex; // Do nothing if at the first image
    });
  };
  // --------------------------------------------section 11--------------------------------
  const handleNextClickSec11 = () => {
    setCurrentIndexSec11((prevIndex) => {
      if (prevIndex < section11.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex; // Do nothing if at the last image
    });
  };

  const handlePrevClickSec11 = () => {
    setCurrentIndexSec11((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex; // Do nothing if at the first image
    });
  };
  return (
    <>
      <div className="overflow-hidden">
        {/* ---------------------------------section 01 start-------------------------------- */}
        <div className="se-1-bg mb-[1px]">
          <div ref={ref1} className=" relative">
            <div className="flex justify-center ">
              <div className="h-[100px] w-[280px]  mt-[51px] mb-[72px] text-white border-r border-white ">
                <h1
                  className={`transition-all duration-1000 text-[27px] poppins-regular text-center ${
                    inView1
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
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
            <div className="flex justify-center mt-10 relative z-20">
              <h1
                className={`transition-all duration-1000 poppins-light text-[225px] text-white rotate-90 ${
                  inView1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                CGI
              </h1>
            </div>
            <div className="absolute top-0 right-[68px]">
              <img src="/img/3d/3d_portfolio_m/Ellipse 9.png" />
            </div>
            <div className="absolute top-[179px] left-[68px] z-30">
              <img src="/img/3d/3d_portfolio_m/Ellipse 3.png" />
            </div>
            <div className="absolute top-[159px] left-[58px]">
              <img src="/img/3d/3d_portfolio_m/Ellipse 8.png" />
            </div>
            <div className="absolute top-[159px] left-[58px]">
              <img src="/img/3d/3d_portfolio_m/Ellipse 8.png" />
            </div>
            <div className="absolute bottom-[-77px] right-0 opacity-70 z-10">
              <img src="/img/3d/3d_portfolio_m/Glass Effects_02.png" />
            </div>
          </div>
        </div>
        {/* ---------------------------------section 01 end-------------------------------- */}
        {/* ----------------------------------section 02 start------------------------------- */}
        <div className="se-2-bg mb-[1px] relative">
          <div ref={ref2} className="">
            <div className="flex justify-center">
              <div className=" h-full w-full mx-[76px] mt-[150px]">
             <div className=" flex flex-col gap-10  items-center"> 
             <div className="flex justify-center gap-10">
                  <div
                    className={`transition-all duration-1000   ${
                      inView2
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    <div className="h-[100px] w-[142px]">
                      <h1 className="poppins-semibold border-b border-white w-[53px]  text-[50px] ">
                        01
                      </h1>
                      <h1 className="poppins-regular text-white text-[12px] pt-2">
                        Architectural Visualization
                      </h1>
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-1000   ${
                      inView2
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-20"
                    }`}
                  >
                    <div className="h-[100px] w-[142px] ">
                      <h1 className="poppins-semibold border-b border-white w-[53px]  text-[50px]">
                        02
                      </h1>
                      <h1 className="poppins-regular text-white text-[12px] pt-2">
                        Fashion Retail
                      </h1>
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-1000   ${
                      inView2
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    <div className="h-[100px] w-[142px]">
                      <h1 className="poppins-semibold border-b border-white w-[53px]  text-[50px]">
                        03
                      </h1>
                      <h1 className="poppins-regular text-white text-[12px] pt-2">
                        Packaging
                      </h1>
                    </div>
                  </div>
                </div>
              <div className="flex justify-center gap-10 ">
              <div
                  className={`transition-all duration-1000   ${
                    inView2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                >
                  <div className="h-[100px] w-[142px] ">
                    <h1 className="poppins-semibold border-b border-white w-[53px]  text-[50px]">
                      04
                    </h1>
                    <h1 className="poppins-regular text-white  text-[12px] pt-2">
                      Automotive
                    </h1>
                  </div>
                </div>
                <div
                  className={`transition-all duration-1000  ${
                    inView2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                >
                  <div className="h-[100px] w-[142px]">
                    <h1 className="poppins-semibold border-b border-white w-[53px]  text-[50px]">
                      05
                    </h1>
                    <h1 className="poppins-regular text-white text-[12px] pt-2">
                      Product Animation
                    </h1>
                  </div>
                </div>
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
            <div className="absolute bottom-0 right-0 opacity-50">
              <img src="/img/3d/3d_portfolio_m/Glass Effects_02_s2.png" />
            </div>
          </div>
        </div>
        {/* ----------------------------------section 02 end------------------------------- */}
        {/* -----------------------------------section 03 start------------------------------ */}
        <div className="se-3-bg mb-[1px]">
          <div ref={ref4} className="container mx-auto">
            <div
              className={`transition-all duration-1000 flex justify-center  ${
                inView4
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-20"
              }`}
            >
              <img
                className="mt-[100px] mb-[60px]"
                src="/img/3d/3d_portfolio_m/KOW-Logo_-Gray 1.png "
              />
            </div>
            <p
              className={`transition-all duration-1000 w-full px-2 text-justify poppins-regular text-[14px]  ${
                inView4
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
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
          <div ref={ref5}>
            <div
              className={`transition-all duration-1000 flex justify-center relative  ${
                inView5
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <img src="/img/3d/3d_portfolio_m/s4.webp" />
              <div className="absolute left-0 bottom-0">
                <img src="/img/3d/3d_portfolio_m/A.png" />
              </div>
            </div>
            <div
              className={`transition-all duration-1000 flex flex-col items-center mt-[107px]   ${
                inView5
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <h1 className="text-white poppins-regular text-[38px] leading-6">
                Architectural
              </h1>
              <h1 className="text-[#A5A5A5] poppins-extralight text-[38px]">
                Visualization
              </h1>
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <img src="/img/3d/3d_portfolio_m/V.png" />
          </div>
        </div>
        {/* ------------------------------------section 04 end----------------------------- */}
        {/* -------------------------------------section 05 start------------------------------- */}
        <div className=" h-screen">
          <div ref={ref3} className="relative">
            <img className="" src="/img/3d/3d_portfolio_m/s5_2.jpg" />
            <div
              className={`transition-all duration-1000 absolute right-4 bottom-[-30px] z-50  ${
                inView3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <img src="/img/3d/3d_portfolio_m/s5_1.png" />
            </div>
            <div className="absolute bottom-[-180px] right-4">
              <img
                className="w-[320px]"
                src="/img/3d/3d_portfolio_m/s5_6.png"
              />
            </div>
            <div
              className={`transition-all duration-1000 absolute bottom-[-270px] right-4  ${
                inView3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <img
                className="w-[130px]"
                src="/img/3d/3d_portfolio_m/s5_5.webp"
              />
            </div>
            <div
              className={`transition-all duration-1000 absolute bottom-[-249px] right-[148px]  ${
                inView3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <img
                className="w-[130px]"
                src="/img/3d/3d_portfolio_m/s5_4.jpg"
              />
            </div>
            <div
              className={`transition-all duration-1000 absolute bottom-[-140px] right-[148px]  ${
                inView3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <img
                className="w-[220px]"
                src="/img/3d/3d_portfolio_m/s5_3.jpg"
              />
            </div>
            <div
              className={`transition-all duration-1000 absolute bottom-[-270px] right-[278px]  ${
                inView3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <img className="w-[40px]" src="/img/3d/3d_portfolio_m/s5_7.png" />
            </div>
          </div>
        </div>
        {/* -------------------------------------section 05 end------------------------------- */}

        {/* --------------------------------------section 06 start-------------------------------*/}
        <div className="se-6-bg mb-[1px]">
          <div ref={ref6}>
            <div
              className={`transition-all duration-1000 relative ${
                inView6
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <img
                src={section6[currentIndexSec6]}
                alt="Exterior Visualization"
              />
              {currentIndexSec6 < section6.length - 1 && (
                <div
                  className="absolute right-2 top-[50%] cursor-pointer"
                  onClick={handleNextClickSec6}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Next"
                  />
                </div>
              )}
              {currentIndexSec6 > 0 && (
                <div
                  className="absolute left-2 top-[50%] rotate-180 cursor-pointer"
                  onClick={handlePrevClickSec6}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Previous"
                  />
                </div>
              )}
            </div>
            <div
              className={`transition-all duration-1000 flex flex-col items-center mt-[107px] ${
                inView6
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <h1 className="text-white poppins-regular text-[38px] leading-6">
                Exterior
              </h1>
              <h1 className="text-[#A5A5A5] poppins-extralight text-[38px]">
                Visualization
              </h1>
            </div>
          </div>
        </div>
        {/* --------------------------------------section 06 end-------------------------------*/}
        {/* --------------------------------------section 07 start-------------------------------*/}
        <div className="se-6-bg mb-[1px]">
          <div ref={ref7}>
            <div
              className={`transition-all duration-1000 relative   ${
                inView7
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <img
                src={section7[currentIndexSec7]}
                alt="Exterior Visualization"
              />
              {currentIndexSec7 < section7.length - 1 && (
                <div
                  className="absolute right-2 top-[50%] cursor-pointer"
                  onClick={handleNextClickSec7}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Next"
                  />
                </div>
              )}
              {currentIndexSec7 > 0 && (
                <div
                  className="absolute left-2 top-[50%] rotate-180 cursor-pointer"
                  onClick={handlePrevClickSec7}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Next"
                  />
                </div>
              )}
            </div>
            <div
              className={`transition-all duration-1000 flex flex-col items-center mt-[107px]  ${
                inView7
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <h1 className="text-white poppins-regular text-[38px] leading-6">
                Interior
              </h1>
              <h1 className="text-[#A5A5A5] poppins-extralight text-[38px]">
                Visualization
              </h1>
            </div>
          </div>
        </div>
        {/* --------------------------------------section 07 end-------------------------------*/}
        {/* -----------------------------------section 08 start------------------------------ */}
        <div className="se-8-bg mb-[1px] ">
          <div ref={ref8} className="container mx-auto ">
            <div
              className={`transition-all duration-1000 flex flex-col items-center   ${
                inView8
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-20"
              }`}
            >
              <h1 className="text-white poppins-regular text-[35px] mt-[100px]  leading-6">
                Architectural
              </h1>
              <h1 className="text-[#A5A5A5] poppins-extralight text-[35px]">
                Visualization
              </h1>
            </div>
            <p
              className={`transition-all duration-1000 w-full px-2 text-justify text-white poppins-regular text-[14px] mt-[52px]  ${
                inView8
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
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
        {/* --------------------------------------section 09 start-------------------------------*/}
        <div className="se-1-bg mb-[1px]">
          <div ref={ref9}>
            <div
              className={`transition-all duration-1000 relative   ${
                inView9
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <img
                src={section9[currentIndexSec9]}
                alt="Exterior Visualization"
              />
              {currentIndexSec9 < section9.length - 1 && (
                <div
                  className="absolute right-2 top-[50%] cursor-pointer"
                  onClick={handleNextClickSec9}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Next"
                  />
                </div>
              )}
              {currentIndexSec9 > 0 && (
                <div
                  className="absolute left-2 top-[50%] rotate-180 cursor-pointer"
                  onClick={handlePrevClickSec9}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Next"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col items-center ">
              <h1
                className={`transition-all duration-1000 text-white poppins-regular text-[30px] mt-6   ${
                  inView9
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                }`}
              >
                Fashion <span className="text-[#A5A5A5]">Retail</span>
              </h1>

              <div className="w-full ">
                <h1 className="h-[1px] bg-white w-full ml-[23%]"></h1>
              </div>

              <p
                className={`transition-all duration-1000 text-white mt-6 px-4 text-[12px] text-justify poppins-regular  ${
                  inView9
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                {`Imagine showcasing your entire fashion line without a single
              stitch sewn. Our 3D asset production revolutionizes fashion and
              retail. We craft hyper-realistic digital garments – from flowing
              silks to textured knits. But it's not just about the look, our
              expertise captures movement and drape, allowing virtual try-ons
              and real-time design iterations. We empower retailers to create
              interactive online experiences, and give customers the freedom to
              experiment before purchasing. We are here to weave your fashion
              vision into a digital reality that drives sales.`}
              </p>
            </div>
          </div>
        </div>
        {/* --------------------------------------section 09 end-------------------------------*/}
        {/* -----------------------------------section 10 start------------------------------ */}
        {/* <div className="se-1-bg mb-[1px]">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center ">
            <h1 className="text-white poppins-regular text-[35px] mt-[88px] ">
              Fashion Retail
            </h1>
          </div>
          <p className="w-full px-2 text-justify text-white poppins-regular text-[16px] mt-[52px]">
            Imagine showcasing your entire fashion line without a single stitch
            sewn. Our 3D asset production revolutionizes fashion and retail. We
            craft hyper-realistic digital garments – from flowing silks to
            textured knits. But it`s not just about the look, our expertise
            captures movement and drape, allowing virtual try-ons and real-time
            design iterations. We empower retailers to create interactive online
            experiences, and give customers the freedom to experiment before
            purchasing. We are here to weave your fashion vision into a digital
            reality that drives sales.
          </p>
        </div>
      </div> */}
        {/* -----------------------------------section 10 end------------------------------ */}
        {/* --------------------------------------section 11 start-------------------------------*/}
        <div className="se-13-bg mb-[1px]">
          <div ref={ref10}>
            <div
              className={`transition-all duration-1000 relative   ${
                inView10
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <img
                src={section10[currentIndexSec10]}
                alt="Exterior Visualization"
              />
              {currentIndexSec10 < section10.length - 1 && (
                <div
                  className="absolute right-2 top-[50%] cursor-pointer"
                  onClick={handleNextClickSec10}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Next"
                  />
                </div>
              )}
              {currentIndexSec10 > 0 && (
                <div
                  className="absolute left-2 top-[50%] rotate-180 cursor-pointer"
                  onClick={handlePrevClickSec10}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Next"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col items-center ">
              <h1
                className={`transition-all duration-1000 text-white poppins-regular text-[30px] mt-6   ${
                  inView10
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                }`}
              >
                Product
              </h1>

              <div className="w-full ">
                <h1 className="h-[1px] bg-white w-full ml-[35%]"></h1>
              </div>

              <p
                className={`transition-all duration-1000 text-white mt-6 px-4 text-[12px] text-justify poppins-regular   ${
                  inView10
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                {`Our 3D asset production breathes life into architectural visions,
              crafting meticulously detailed elements – from intricate moldings
              to lifelike foliage. We don't just create objects, we create
              atmospheres. You can showcase the warmth of wood grain or the
              shimmer of glass in stunning interior and exterior visualizations.
              This translates to clear communication with clients, powerful
              marketing materials, and the ability to identify design tweaks–
              all thanks to the power of storytelling through stunning 3D
              assets. Bring your architectural dreams to vivid reality with us.`}
              </p>
            </div>
          </div>
        </div>
        {/* --------------------------------------section 11 end-------------------------------*/}
        {/* -----------------------------------section 12 start------------------------------ */}
        {/* <div className="se-1-bg mb-[1px]">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center ">
            <h1 className="text-white poppins-regular text-[35px] mt-[88px]  leading-6">
              Architectural
            </h1>
            <h1 className="text-[#A5A5A5] poppins-regular text-[35px]">
              Visualization
            </h1>
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
      </div> */}
        {/* -----------------------------------section 12 end------------------------------ */}
        {/* --------------------------------------section 13 start-------------------------------*/}
        <div className="se-6-bg mb-[1px]">
          <div ref={ref11}>
            <div
              className={`transition-all duration-1000 relative   ${
                inView11
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <img
                src={section11[currentIndexSec11]}
                alt="Exterior Visualization"
              />
              {currentIndexSec11 < section11.length - 1 && (
                <div
                  className="absolute right-2 top-[50%] cursor-pointer"
                  onClick={handleNextClickSec11}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Next"
                  />
                </div>
              )}
              {currentIndexSec11 > 0 && (
                <div
                  className="absolute left-2 top-[50%] rotate-180 cursor-pointer"
                  onClick={handlePrevClickSec11}
                >
                  <img
                    src="/img/3d/3d_portfolio_m/Next Vector.png"
                    alt="Next"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col items-center ">
              <h1
                className={`transition-all duration-1000 text-white poppins-regular text-[30px] mt-6  ${
                  inView11
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                }`}
              >
                Automotive
              </h1>

              <div className="w-full ">
                <h1 className="h-[1px] bg-white w-full ml-[27%]"></h1>
              </div>

              <p
                className={`transition-all duration-1000 text-white mt-6 px-4 text-[12px] text-justify poppins-regular  ${
                  inView11
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                {`Imagine sculpting a car not with clay, but with code. Our 3D asset
              production studio throws open the garage doors to a new era of
              automotive design. We don't just create digital models, we craft
              living, breathing simulations. This isn't just about aesthetics.
              We empower you to push the boundaries of design. It's like having
              a racetrack, a factory floor, and a design studio all condensed
              into a single, powerful software suite. The benefits? Faster
              design cycles, slashed prototyping costs, and the ability to
              showcase your vision with stunningly interactive 3D models. Let's
              shift your automotive design into high gear. Let's sculpt speed
              and refine reality with the power of 3D asset production.`}
              </p>
            </div>
          </div>
        </div>
        {/* --------------------------------------section 13 end-------------------------------*/}
        {/* -----------------------------------section 1 start------------------------------ */}
        {/* <div className="se-1-bg mb-[1px]">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center ">
            <h1 className="text-white poppins-regular text-[35px] mt-[88px]  leading-6">
              Architectural
            </h1>
            <h1 className="text-[#A5A5A5] poppins-regular text-[35px]">
              Visualization
            </h1>
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
      </div> */}
        {/* -----------------------------------section 14 end------------------------------ */}
        {/* -----------------------------------section 15 start------------------------------ */}
        <div ref={sectionRef} className="se-1-bg mb-1 relative">
          <div className="relative w-full h-[400px]">
            {" "}
            {/* Adjust the height as needed */}
            {!isPlaying && (
              <>
                <img
                  className="w-full h-full object-cover absolute inset-0 m-auto"
                  src="/img/3d/3d_portfolio_m/s15.webp"
                  alt="Video Placeholder"
                />
                <img
                  className="cursor-pointer w-12 h-12 absolute inset-0 m-auto"
                  src="/img/3d/3d_portfolio_m/s15.png" // Path to your play button image
                  onClick={handlePlayClick}
                  alt="Play"
                />
              </>
            )}
            {isPlaying && (
              <video
                id="productVideo"
                className="w-full h-[350px] object-cover  absolute top-0"
                onEnded={handleVideoEnd}
                controls={false}
                autoPlay
              >
                <source src="/video/3d_Website.webm" type="video/webm" />
              </video>
            )}
          </div>

          <div
            ref={ref12}
            className={`transition-all duration-1000 flex flex-col items-center mt-[107px]  ${
              inView12
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h1 className="text-white poppins-extralight text-[38px] leading-6">
              Product
            </h1>
            <h1 className="text-[#A5A5A5] poppins-extralight text-[38px]">
              Animation
            </h1>
          </div>
        </div>

        {/* -----------------------------------section 15 end------------------------------ */}
      </div>
    </>
  );
};

export default PortfolioTab;
