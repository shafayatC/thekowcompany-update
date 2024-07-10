import { useInView } from "react-intersection-observer";
import "./portfolio.css";
import { useEffect, useRef, useState } from "react";
const Portfolio3D = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      setIsPlaying(false);
      const videoElement = videoRef.current;
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
  const { ref: ref13, inView: inView13 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref14, inView: inView14 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref15, inView: inView15 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref16, inView: inView16 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref17, inView: inView17 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref18, inView: inView18 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref19, inView: inView19 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref20, inView: inView20 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref21, inView: inView21 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref22, inView: inView22 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref23, inView: inView23 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref24, inView: inView24 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref25, inView: inView25 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref26, inView: inView26 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref27, inView: inView27 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref28, inView: inView28 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref29, inView: inView29 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref30, inView: inView30 } = useInView({
    threshold: 0.2,
  });
  // const { ref: ref27, inView: inView27 } = useInView({
  //   threshold: 0.2,
  // });
  // const { ref: ref27, inView: inView27 } = useInView({
  //   threshold: 0.2,
  // });
  return (
    <div>
      <div className="2xl:container mx-auto overflow-hidden">
        {/* ----------------------------------------------Section 1 Start---------------------------------------------- */}
        <div className="section-1-bg h-screen 2xl:h-[90vh] mb-1 relative">
          <div className="absolute bottom-10 right-32  ">
            <div className="flex justify-center items-center h-[150px] w-[700px]">
              <div
                ref={ref1}
                className={`transition-all duration-1000 flex flex-col justify-between  pr-7 ${inView1
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
                className={`transition-all duration-1000 ${inView1
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
        <div className="section-2-bg h-[100vh] 2xl:h-[90vh] mb-1 relative">
          <div className="flex justify-center items-center h-[100vh] 2xl:h-[90vh] gap-16">
            <div
              ref={ref2}
              className={`flex flex-col items-end transition-all duration-1000 ${inView2
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
              className={`flex flex-col mt-40 items-end transition-all duration-1000 ${inView2
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
              className={`flex flex-col items-end transition-all duration-1000 ${inView2
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
              className={`flex flex-col items-end mt-40 transition-all duration-1000 ${inView2
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
              className={`flex flex-col items-end transition-all duration-1000 ${inView2
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
        <div className="section-3-bg  h-[100vh] 2xl:h-[90vh]  mb-1">
          <div className="flex justify-center items-center gap-5 h-[100vh] 2xl:h-[90vh] px-40">
            <div ref={ref3} className="w-full">
              <img
                className={`max-w-[330px] transition-all duration-1000 ${inView3
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                  }`}
                src={"/img/3d/3d_portfolio/kow_logo_lg.png"}
              />
            </div>
            <div className="bg-black w-[1px] h-[140px]  mr-10 "></div>
            <div ref={ref3}>
              <p
                className={`text-[14px] text-justify transition-all duration-1000 ${inView3
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                  }`}
              >
                We are a specialized company in 3D modeling and CGI, producing
                high-quality 3D models, imagery and animations in collaboration
                with top 3D designers. Along with creating realistic 3D models,
                we also offer high quality product image rendering tailored to
                retail industries, enabling clients to catch the customers
                attention with stunning product rendered outputs. Our commitment
                to delivering exceptional visual experiences not only satisfies
                our clients but also attracts more business opportunities.
              </p>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------Section 3 End----------------------------------------------- */}
        {/* ---------------------------------------------------Section 4 Start---------------------------------------------------- */}
        <div className="section-4-bg h-screen 2xl:h-[90vh] mb-1">
          <div className="flex  justify-center h-screen 2xl:h-[90vh]  ">
            <div ref={ref4} className="h-full w-3/4">
              <img
                className={`w-full h-full object-fill duration-1000 transition-all ${inView4
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                  }`}
                src={"/img/3d/3d_portfolio/s4.jpg"}
              />
            </div>
            <div ref={ref4} className="relative h-full w-1.5/4">
              <div
                className={`duration-1000 transition-all h-full w-full ${inView4
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                  }`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={"/img/3d/3d_portfolio/S4_AV-Cover_2.jpg"}
                />
                <div className="absolute top-[50%] left-[27%] transform -translate-y-1/2">
                  <h1 className="text-white text-[45px]">Architectural</h1>
                  <h1 className="text-[#949494] text-[45px] leading-3">
                    Visualization
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 4 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 5 Start---------------------------------------------------- */}
        <div className="bg-white h-[115vh] xl:h-[105vh] 2xl:h-[90vh] mb-1">
          <div
            ref={ref27}
            className="flex justify-between items-center h-[115vh] xl:h-[105vh] 2xl:h-[90vh]"
          >
            <div className="h-full w-1/2 xl:w-[52%]  2xl:w-[60%] relative">
              <img
                src={"/img/3d/3d_portfolio/s5_2.jpg"}
                className={`w-full h-full object-fill duration-1000 transition-all ${inView27
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                  }`}
              />
              <div className="h-[450px] w-[238px] absolute top-[50%] -translate-y-[50%] right-[-50px]">
                <img
                  src={"/img/3d/3d_portfolio/s5.png"}
                  className={`w-full h-full duration-1000 transition-all ${inView27
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                    }`}
                />
              </div>
            </div>
            <div className="h-[450px] w-[480px] xl:w-[580px]  relative">
              <img
                src={"/img/3d/3d_portfolio/s5_6_n.png"}
                className={`w-full h-full duration-1000 transition-all ${inView27
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                  }`}
              />
              <div className="h-[221px] w-[238px] absolute bottom-[-90px] right-0">
                <img
                  src={"/img/3d/3d_portfolio/s5_5.png"}
                  className={`w-full h-full duration-1000 transition-all ${inView27
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20"
                    }`}
                />
              </div>
              <div className="h-[180px] w-[200px] absolute bottom-[-50px] right-[240px]">
                <img
                  src={"/img/3d/3d_portfolio/s5_4.jpg"}
                  className={`w-full h-full duration-1000 transition-all ${inView27
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                    }`}
                />
              </div>
              <div className="h-[260px] w-[380px] absolute top-[55px] right-[240px]">
                <img
                  src={"/img/3d/3d_portfolio/s5_3.jpg"}
                  className={`w-full h-full duration-1000 transition-all ${inView27
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-20"
                    }`}
                />
              </div>
              <div className="h-[70px] w-[90px] absolute bottom-[-95px] right-[440px]">
                <img
                  src={"/img/3d/3d_portfolio/s5_7.png"}
                  className={`w-full h-full duration-1000 transition-all ${inView27
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                    }`}
                />
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 5 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 6 Start---------------------------------------------------- */}
        <div className="bg-[#333333] h-screen 2xl:h-[90vh] mb-1">
          <div className="flex justify-between items-center h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref5}
              className={`flex justify-end w-3/4 items-center ml-10  duration-1000 transition-all  ${inView5
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <h1 className="text-white text-[50px] text-center ">
                Exterior
                <span className="text-[#858580] pl-2 text-[40px] poppins-light">
                  Visualization
                </span>
              </h1>
            </div>
            <div
              ref={ref5}
              className={`h-full flex justify-end items-center w-full duration-1000 transition-all  ${inView5
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                src="/img/3d/3d_portfolio/s6.jpg"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------Section 6 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 7 Start---------------------------------------------------- */}
        <div className="bg-[#333333] h-screen 2xl:h-[90vh] mb-1">
          <div className="flex justify-center items-center  h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref6}
              className={`h-full w-full flex justify-start duration-1000 transition-all  ${inView6
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img
                className="max-h-full max-w-full "
                src="/img/3d/3d_portfolio/s7.jpg"
              />
            </div>
            <div
              ref={ref6}
              className={` duration-1000 transition-all  ${inView6
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img className="" src="/img/3d/3d_portfolio/s7_2.jpg" />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 7 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 8 Start---------------------------------------------------- */}
        <div className="bg-[#333333] h-screen 2xl:h-[90vh] mb-1">
          <div className="flex justify-between items-center h-full 2xl:h-[90vh]">
            <div
              ref={ref7}
              className={`flex justify-end w-3/4 items-center ml-10  duration-1000 transition-all  ${inView7
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <h1 className="text-white text-[50px] text-center ">
                Interior
                <span className="text-[#858580] pl-2 text-[40px] poppins-light">
                  Visualization
                </span>
              </h1>
            </div>
            <div
              ref={ref7}
              className={`h-full flex justify-end  w-full duration-1000 transition-all  ${inView7
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                src="/img/3d/3d_portfolio/s8.jpg"
                className="max-h-full max-w-full "
              />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 8 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 9 Start---------------------------------------------------- */}
        <div className="bg-[#333333] h-screen 2xl:h-[90vh] mb-1">
          <div className="flex justify-center gap-5  h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref8}
              className={` duration-1000 transition-all  ${inView8
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
                }`}
            >
              <img src="/img/3d/3d_portfolio/s9_2.jpg" />
            </div>
            <div
              ref={ref8}
              className={` flex items-end duration-1000 transition-all  ${inView8
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-20"
                }`}
            >
              <img src="/img/3d/3d_portfolio/s9.jpg" />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 9 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 10 start---------------------------------------------------- */}
        <div className="bg-[#333333] h-[100vh] 2xl:h-[90vh]  mb-1">
          <div className="flex justify-center items-center xl:gap-5 h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref9}
              className={` duration-1000 transition-all 2xl:ml-20  ${inView9
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img
                className="max-w-[300px] ml-16"
                src="/img/3d/3d_portfolio/s10.jpg"
              />
            </div>
            <div
              ref={ref9}
              className={`h-full w-full flex justify-end duration-1000 transition-all  ${inView9
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                className="max-h-full max-w-full py-5"
                src="/img/3d/3d_portfolio/s10_2.jpg"
              />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 10 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 11 start---------------------------------------------------- */}
        <div className="bg-[#DFDEDD] mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className=" gap-5  relative h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref10}
              className={` absolute top-0 left-0 duration-1000 transition-all  ${inView10
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img
                src="/img/3d/3d_portfolio/s11.jpg"
                className="max-w-[840px] 2xl:max-w-[1040px]"
              />
            </div>
            <div
              ref={ref10}
              className={`absolute bottom-0 right-0  duration-1000 transition-all  ${inView10
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                src="/img/3d/3d_portfolio/s11_2.jpg"
                className="max-w-[650px]  2xl:max-w-[840px]"
              />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 11 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 11.2 start---------------------------------------------------- */}

        <div className="bg-[#333333] h-[100vh] 2xl:h-[90vh]  mb-1">
          <div className="flex justify-center items-center xl:gap-5 h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref29}
              className={` duration-1000 transition-all 2xl:ml-20  ${inView29
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img
                className="max-w-[300px] ml-16"
                src="/img/3d/3d_portfolio/11_3.jpg"
              />
            </div>
            <div
              ref={ref29}
              className={`h-full w-full flex justify-end duration-1000 transition-all  ${inView29
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                className="max-h-full max-w-full py-5"
                src="/img/3d/3d_portfolio/11_3.webp"
              />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 11.2 end---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 11.3 start---------------------------------------------------- */}
        <div className="section-11-bg-2  mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex  justify-center items-center  h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref28}
              className={`h-full transition-all duration-1000 ${inView28
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img className="w-full h-full" src="/img/3d/3d_portfolio/Chair.png" />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 11.3 end---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 12 start---------------------------------------------------- */}
        <div className="bg-[#333333] mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex flex-col justify-center items-center gap-5 h-[100vh] 2xl:h-[90vh]">
            <div ref={ref11}>
              <h1
                className={` text-white text-[55px]  border-b border-white poppins-light duration-1000 transition-all  ${inView11
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                  }`}
              >
                Architectural Visualization
              </h1>
            </div>
            {/* <div className="h-[1px] w-full bg-white mb-5 -mt-5"></div> */}
            <div ref={ref11}>
              <p
                className={`text-white text-[14px] 2xl:text-[17px]  poppins-light w-[700px] text-justify  poppins-light duration-1000 transition-all  ${inView11
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                  }`}
              >{`Our 3D asset production breathes life into architectural visions, crafting meticulously
detailed elements – from intricate moldings to lifelike foliage. We don't just create objects,
we create atmospheres. You can showcase the warmth of wood grain or the shimmer of
glass in stunning interior and exterior visualizations. This translates to clear communication
with clients, powerful marketing materials, and the ability to identify design tweaks– all
thanks to the power of storytelling through stunning 3D assets. Bring your architectural
dreams to vivid reality with us.`}</p>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------Section 12 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 13 start---------------------------------------------------- */}
        <div className="section-13-bg mb-1 h-[100vh] 2xl:h-[90vh]">
          <div
            ref={ref12}
            className={`flex justify-center items-center duration-1000 transition-all h-[100vh] 2xl:h-[90vh] ${inView12
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
              }`}
          >
            <h1 className="text-[#D5D3D6] text-[130px] poppins-semibold">
              Fashion <span className="poppins-light text-[100px]">Retail</span>
            </h1>
          </div>
        </div>
        {/* ---------------------------------------------------Section 13 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 14 start---------------------------------------------------- */}
        <div className="bg-[#333333] mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex  justify-center items-center  h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref13}
              className={`h-full transition-all duration-1000 ${inView13
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img className="h-full" src="/img/3d/3d_portfolio/s14.png" />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 14 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 15 start---------------------------------------------------- */}
        <div className="section-15-bg mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex  justify-center items-center  h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref14}
              className={`h-full transition-all duration-1000 ${inView14
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img className="h-full" src="/img/3d/3d_portfolio/s15_n.png" />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 15 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 15.2 start---------------------------------------------------- */}
        <div className="section-15-bg-2 mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex  justify-center items-center  h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref30}
              className={`h-full transition-all duration-1000 ${inView30
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img className="h-full" src="/img/3d/3d_portfolio/s15_1.png" />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 15.2 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 15.3 start---------------------------------------------------- */}
        {/* <div className="section-15-bg-3 mb-1 h-[100vh] 2xl:h-[90vh]"> */}
        <div id="test" className="section-15-bg-3 mb-1 h-[600px] 2xl:h-[800px]">
          <div className="flex  justify-center items-center h-full">
            <div className="h-full w-[550px] 2xl:w-[700px] relative">
              <img className="h-full w-full" src="/img/3d/3d_portfolio/Boot1.png" />

              <img className="absolute w-[320px] h-[320px] 2xl:w-[400px] 2xl:h-[400px] top-1/4 right-[-70px]" src="/img/3d/3d_portfolio/Boot2.png" />
              <img className="absolute w-[250px] h-[290px] 2xl:w-[300px] 2xl:h-[400px] top-[20px] left-[-20%]" src="/img/3d/3d_portfolio/Boot4.png" />
              <img className="absolute w-[250px] h-[290px] 2xl:w-[300px] 2xl:h-[400px] bottom-[20px] left-[-20%]" src="/img/3d/3d_portfolio/Boot3.png" />

            </div>

          </div>
        </div>
        {/* ---------------------------------------------------Section 15.3 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 15.4 start---------------------------------------------------- */}
        <div className="section-15-bg-4 mb-1 h-[100vh] 2xl:min-h-[90vh]">
          <div className="h-full">
            {/* <div className="flex flex-col justify-items-center items-center"> */}
            <div className="grid grid-cols-2 grid-rows-2 h-full">
              <div className="bg-slate-200"> <img className="max-h-full" src="/img/3d/3d_portfolio/pant1.png" /></div>
              <div className="bg-orange-400"><img className="max-h-full" src="/img/3d/3d_portfolio/pant2.png" /></div>
              <div className="bg-green-400"><img className="max-h-full" src="/img/3d/3d_portfolio/pant3.png" /></div>
              <div className="bg-pink-400"><img className="max-h-full" src="/img/3d/3d_portfolio/pant4.png" /></div>
              {/* <div className="flex justify-center items-center">
                  <div>
                      <img className="" src="/img/3d/3d_portfolio/pant1.png" />
                  </div>
                  <div>
                      <img className="" src="/img/3d/3d_portfolio/pant2.png" />
                  </div>
              </div>
              <div className="flex justify-center items-center">
                  <div>
                      <img className="" src="/img/3d/3d_portfolio/pant3.png" />
                  </div>
                  <div>
                      <img className="" src="/img/3d/3d_portfolio/pant4.png" />
                  </div> 
              </div>
            */}
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 15.4 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 16 start---------------------------------------------------- */}
        <div className="bg-[#F12B35] mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex  justify-center items-center  h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref15}
              className="flex justify-start items-end h-full w-full"
            >
              <img
                className={`max-w-full max-h-full transition-all duration-1000 ${inView15
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                  }`}
                src="/img/3d/3d_portfolio/S16_FR_Image1.png"
              />
            </div>
            <div ref={ref15} className="w-1/2">
              <h1
                className={`text-white text-[50px] poppins-regular transition-all duration-1000 ${inView15
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                  }`}
              >
                Fashion <span className="text-[#FF9999]">Retail</span>
              </h1>
              <h1 className="bg-white w-full h-[1px]"></h1>
              <p
                className={`poppins-light text-white text-[14px] transition-all duration-1000 pt-5 text-justify pr-16 ${inView15
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                  }`}
              >{`Imagine showcasing your entire fashion line
without a single stitch sewn. Our 3D asset
production revolutionizes fashion and retail.
We craft hyper-realistic digital garments –
from flowing silks to textured knits. But it's not
just about the look, our expertise captures
movement and drape, allowing virtual
try-ons and real-time design iterations. We
empower retailers to create interactive
online experiences, and give customers the
freedom to experiment before purchasing.
We are here to weave your fashion vision
into a digital reality that drives sales.`}</p>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------Section 16 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 17 start---------------------------------------------------- */}
        <div className="section-17-bg h-screen 2xl:h-[90vh] mb-1">
          <div
            ref={ref16}
            className="flex justify-center items-center h-[100vh] 2xl:h-[90vh]"
          >
            <h1
              className={`poppins-thin text-white text-[130px] duration-1000 transition-all ${inView16
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              Packaging
            </h1>
          </div>
        </div>
        {/* ---------------------------------------------------Section 17 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 18 start---------------------------------------------------- */}
        <div className="section-18-bg mb-1 h-[100vh] 2xl:h-[90vh] overflow-hidden">
          <div ref={ref17} className="h-[100vh] 2xl:h-[90vh] flex gap-1">
            <div
              className={`h-full duration-1000 transition-all ${inView17
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img
                className="max-h-full max-w-full"
                src="/img/3d/3d_portfolio/s18_2.jpg"
              />
            </div>
            <div className="flex flex-col gap-1 items-start ">
              <div
                className={`h-1/2 duration-1000 transition-all ${inView17
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                  }`}
              >
                <img
                  className="max-h-full max-w-full"
                  src="/img/3d/3d_portfolio/s18.jpg"
                />
              </div>
              <div className="flex h-1/2 gap-1">
                <div
                  className={`h-full duration-1000 transition-all ${inView17
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                    }`}
                >
                  <img
                    className="h-full max-w-full"
                    src="/img/3d/3d_portfolio/s18_4.jpg"
                  />
                </div>
                <div
                  className={` duration-1000 transition-all ${inView17
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20"
                    }`}
                >
                  <img
                    className="max-h-[200px] 2xl:max-h-[300px] max-w-full"
                    src="/img/3d/3d_portfolio/s18_3.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------Section 18 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 19 start---------------------------------------------------- */}
        <div className="section-19-bg mb-1 h-[100vh] 2xl:h-[90vh]">
          <div ref={ref18} className=" h-[100vh] 2xl:h-[90vh]">
            <div
              className={`h-full w-full flex justify-end items-end duration-1000 transition-all ${inView18
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                className="max-h-full max-w-full"
                src="/img/3d/3d_portfolio/s19.jpg"
              />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 19 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 20 start---------------------------------------------------- */}
        <div className="section-20-bg mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex justify-end items-center xl:gap-5 h-[100vh] 2xl:h-[90vh]">
            <div
              ref={ref19}
              className={` duration-1000 transition-all  ${inView19
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img
                className="max-w-[300px] 2xl:max-w-[400px] "
                src="/img/3d/3d_portfolio/s20.jpg"
              />
            </div>
            <div
              ref={ref19}
              className={`h-full  flex justify-end duration-1000 transition-all  ${inView19
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                className="max-h-full max-w-full "
                src="/img/3d/3d_portfolio/s20_2.jpg"
              />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 20 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 21 start---------------------------------------------------- */}
        <div className=" mb-1 h-[100vh] 2xl:h-[90vh]">
          <div
            ref={ref20}
            className="flex justify-center items-center gap-1 h-[100vh] 2xl:h-[90vh]  overflow-hidden"
          >
            <div
              className={`h-full w-full duration-1000 transition-all ${inView20
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img
                className="h-full w-full object-cover"
                src="/img/3d/3d_portfolio/s21.jpg"
                alt="Portfolio Image 1"
              />
            </div>
            <div
              className={`h-full w-full duration-1000 transition-all ${inView20
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                className="h-full w-full object-cover"
                src="/img/3d/3d_portfolio/s21_2.jpg"
                alt="Portfolio Image 2"
              />
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------Section 21 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 22 start---------------------------------------------------- */}
        <div className=" mb-1 h-[100vh] 2xl:h-[90vh]">
          <div
            ref={ref21}
            className="flex justify-center items-center gap-1 h-[100vh] 2xl:h-[90vh]"
          >
            <div
              className={`h-full  w-full duration-1000 transition-all  ${inView21
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img
                className=" h-full w-full object-cover "
                src="/img/3d/3d_portfolio/s22.jpg"
              />
            </div>
            <div
              className={`h-full  w-full duration-1000 transition-all  ${inView21
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                className=" h-full w-full object-cover"
                src="/img/3d/3d_portfolio/s22_2.jpg"
              />
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------Section 22 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 23 start---------------------------------------------------- */}
        <div className="section-23-bg mb-1 h-[100vh] 2xl:h-[90vh]"></div>
        {/* -----------------------------------------------------Section 23 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 24 start---------------------------------------------------- */}
        <div className="bg-[#849C8C] mb-1 h-[100vh] 2xl:h-[90vh]">
          <div ref={ref22} className=" h-[100vh] 2xl:h-[90vh]">
            <div
              className={`h-full w-full flex justify-end items-end duration-1000 transition-all ${inView22
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                className="max-h-full max-w-full"
                src="/img/3d/3d_portfolio/s24.jpg"
              />
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------Section 24 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 25 start---------------------------------------------------- */}
        <div className="section-25-bg mb-1 h-[100vh] 2xl:h-[90vh]"></div>
        {/* -------------------------------------------------------Section 25 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 26 start---------------------------------------------------- */}
        <div className="section-26-bg mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex flex-col justify-center items-center gap-5 h-[100vh] 2xl:h-[90vh]">
            <div ref={ref23} className="w-[700px]">
              <h1
                className={` text-white border-b border-white  text-[55px] poppins-light duration-1000 transition-all  ${inView23
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                  }`}
              >
                Packaging
              </h1>
            </div>
            {/* <div className="h-[1px] w-full bg-white mb-5 -mt-5"></div> */}
            <div ref={ref23}>
              <p
                className={`text-white text-[14px]  poppins-light w-[700px] text-justify  poppins-light duration-1000 transition-all  ${inView23
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                  }`}
              >{`Unbox the future of packaging design with us. Our 3D asset production studio crafts
hyper-realistic digital mockups of your packaging concepts. From sleek glass bottles to
eco-friendly cardboard boxes, we meticulously model every detail using industry-leading
software. But it's not just about aesthetics; we simulate real-world materials and interactions.
This translates to faster design iterations, reduced physical prototyping costs, and the ability
to showcase photorealistic packaging mockups for enhanced brand communication and
marketing – all before a single box is printed. Let's bring your packaging vision to life in the
digital realm, saving resources and accelerating your time to market.`}</p>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------Section 26 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 27 start---------------------------------------------------- */}
        <div className="bg-[#333333] h-screen 2xl:h-[90vh] mb-1">
          <div className="flex justify-between items-center h-full 2xl:h-[90vh]">
            <div
              ref={ref24}
              className={`flex justify-center w-3/4 items-center ml-10  duration-1000 transition-all  ${inView24
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <h1 className="text-white  text-[50px] text-center ">
                Automotive
              </h1>
            </div>
            <div
              ref={ref24}
              className={`h-full flex justify-end  w-full duration-1000 transition-all  ${inView24
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img
                src="/img/3d/3d_portfolio/car3.jpg"
                className="max-h-full max-w-full "
              />
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------Section 27 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 28 start---------------------------------------------------- */}
        <div className="bg-[#DBDAD9] mb-1 h-[100vh] 2xl:h-[90vh]">
          <div
            ref={ref25}
            className="flex justify-center items-center gap-1 h-[100vh] 2xl:h-[90vh]"
          >
            <div
              className={`duration-1000 transition-all ${inView25
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              <img src="/img/3d/3d_portfolio/car1.jpg" />
            </div>
            <div
              className={`duration-1000 transition-all ${inView25
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
                }`}
            >
              <img src="/img/3d/3d_portfolio/car_body.jpg" />
            </div>
            <div
              className={`duration-1000 transition-all ${inView25
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                }`}
            >
              <img src="/img/3d/3d_portfolio/car2.jpg" />
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------Section 28 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 29 start---------------------------------------------------- */}
        <div className="bg-[#333333] mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex flex-col justify-center items-center gap-5 h-[100vh] 2xl:h-[90vh]">
            <div ref={ref26} className="w-[700px]">
              <h1
                className={` text-white text-[55px] border-b border-white poppins-light duration-1000 transition-all  ${inView26
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                  }`}
              >
                Automotive
              </h1>
            </div>
            {/* <div className="h-[1px] w-full bg-white mb-5 -mt-5"></div> */}
            <div ref={ref26}>
              <p
                className={`text-white text-[14px]  poppins-light w-[700px] text-justify  poppins-light duration-1000 transition-all  ${inView26
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                  }`}
              >{`Imagine sculpting a car not with clay, but with code. Our 3D asset production studio
throws open the garage doors to a new era of automotive design. We don't just create
digital models, we craft living, breathing simulations.
This isn't just about aesthetics. We empower you to push the boundaries of design. It's
like having a racetrack, a factory floor, and a design studio all condensed into a single,
powerful software suite. The benefits? Faster design cycles, slashed prototyping costs,
and the ability to showcase your vision with stunningly interactive 3D models. Let's shift
your automotive design into high gear. Let's sculpt speed and refine reality with the
power of 3D asset production.`}</p>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------Section 29 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 30 start---------------------------------------------------- */}
        <div
          ref={sectionRef}
          className="section-30-bg mb-1 h-[100vh] 2xl:h-[90vh] relative"
        >
          <div className="h-[100vh] 2xl:h-[90vh]">
            <div className="flex h-full justify-center items-center">
              {!isPlaying && (
                <img
                  className="max-w-[100px] cursor-pointer"
                  src="/img/3d/3d_portfolio/s30.png"
                  onClick={handlePlayClick}
                  alt="Play"
                />
              )}
            </div>

            <div className="flex justify-center items-end gap-5 -mt-32">
              <div>
                <h1 className="w-[400px] h-[1px] -mt-5 bg-white"></h1>
              </div>
              <div>
                <h1 className="text-white text-[60px] w-[560px] poppins-regular">
                  Product Animation
                </h1>
              </div>
              <div>
                <h1 className="w-[400px] h-[1px] -mt-5 bg-white"></h1>
              </div>
            </div>
          </div>

          {isPlaying && (
            <div className="absolute inset-0 flex justify-center items-center">
              <video
                ref={videoRef}
                id="productVideo"
                className="w-full h-full object-cover"
                onEnded={handleVideoEnd}
                controls={false}
                autoPlay
                preload="auto"
              >
                <source src="/video/For Website.webm" type="video/webm" />
              </video>
            </div>
          )}
        </div>
        {/* -------------------------------------------------------Section 30 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 31 start---------------------------------------------------- */}
        <div className="section-31-bg mb-1 h-[100vh] 2xl:h-[90vh]">
          <div className="flex flex-col justify-center items-center h-[100vh] 2xl:h-[90vh] ">
            <div className="flex justify-start items-end w-[1000px] gap-16">
              <img
                className="max-w-[350px]"
                src="/img/3d/3d_portfolio/kow_logo_lg_w.png"
              />
              <div>
                <h1 className="w-[600px] h-[1px] -mt-10 bg-white"></h1>
              </div>
            </div>
            <div className="w-[1000px]">
              <a
                className="text-white text-[24px] -mt-5 poppins-light flex justify-end"
                href="https://thekowcompany.com"
                target="_blank"
                rel="noreferrer"
              >
                https://thekowcompany.com
              </a>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------Section 31 End---------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Portfolio3D;
