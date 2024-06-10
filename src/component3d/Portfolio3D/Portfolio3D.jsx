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
  return (
    <div>
      <div className="container mx-auto overflow-hidden">
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
        <div className="section-3-bg h-screen mb-1">
          <div className="flex justify-center items-center gap-5 h-[100vh] px-40">
            <div ref={ref3} className="w-full">
              <img
                className={`max-w-[330px] transition-all duration-1000 ${
                  inView3
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                src={"/img/3d/3d_portfolio/kow_logo_lg.png"}
              />
            </div>
            <div className="bg-black w-[1px] h-[140px]  mr-10 "></div>
            <div ref={ref3}>
              <p
                className={`text-[14px] text-justify transition-all duration-1000 ${
                  inView3
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
        <div className="section-4-bg h-screen mb-1">
          <div className="flex  justify-center h-screen ">
            <div ref={ref4} className="h-full w-3/4">
              <img
                className={`w-full h-full object-cover duration-1000 transition-all ${
                  inView4
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                src={"/img/3d/3d_portfolio/s4.jpg"}
              />
            </div>
            <div ref={ref4} className="relative h-full w-1.5/4">
              <div
                className={`duration-1000 transition-all h-full w-full ${
                  inView4
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
        {/* <div className="bg-white h-screen mb-1"></div> */}
        {/* ---------------------------------------------------Section 5 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 6 Start---------------------------------------------------- */}
        <div className="bg-[#333333] h-screen mb-1">
          <div className="flex justify-between items-center h-[100vh]">
            <div
              ref={ref5}
              className={`flex justify-end w-3/4 items-center ml-10  duration-1000 transition-all  ${
                inView5
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
              className={`h-full flex justify-end items-center w-full duration-1000 transition-all  ${
                inView5
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
        <div className="bg-[#333333] h-screen mb-1">
          <div className="flex justify-center items-center  h-[100vh]">
            <div
              ref={ref6}
              className={`h-full w-full flex justify-start duration-1000 transition-all  ${
                inView6
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
              className={` duration-1000 transition-all  ${
                inView6
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
        <div className="bg-[#333333] h-screen mb-1">
          <div className="flex justify-between items-center h-full">
            <div
              ref={ref7}
              className={`flex justify-end w-3/4 items-center ml-10  duration-1000 transition-all  ${
                inView7
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
              ref={ref7}
              className={`h-full flex justify-end  w-full duration-1000 transition-all  ${
                inView7
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
        <div className="bg-[#333333] h-screen mb-1">
          <div className="flex justify-center gap-5  h-[100vh]">
            <div
              ref={ref8}
              className={` duration-1000 transition-all  ${
                inView8
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <img src="/img/3d/3d_portfolio/s9_2.jpg" />
            </div>
            <div
              ref={ref8}
              className={` flex items-end duration-1000 transition-all  ${
                inView8
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
        <div className="bg-[#333333]  mb-1">
          <div className="flex justify-center items-center xl:gap-5 h-[100vh]">
            <div
              ref={ref9}
              className={` duration-1000 transition-all  ${
                inView9
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
              className={`h-full w-full flex justify-end duration-1000 transition-all  ${
                inView9
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
        <div className="bg-[#DFDEDD] mb-1 h-[100vh]">
          <div className=" gap-5  relative h-[100vh]">
            <div
              ref={ref10}
              className={` absolute top-0 left-0 duration-1000 transition-all  ${
                inView10
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
              className={`absolute bottom-0 right-0  duration-1000 transition-all  ${
                inView10
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
        {/* ---------------------------------------------------Section 12 start---------------------------------------------------- */}
        <div className="bg-[#333333] mb-1 h-[100vh]">
          <div className="flex flex-col justify-center items-center gap-5 h-[100vh]">
            <div ref={ref11}>
              <h1
                className={` text-white text-[55px] poppins-light duration-1000 transition-all  ${
                  inView11
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                }`}
              >
                Architectural Visualization
              </h1>
            </div>
            <div className="h-[1px] w-full bg-white mb-5 -mt-5"></div>
            <div ref={ref11}>
              <p
                className={`text-white text-[14px]  poppins-light w-[700px] text-justify  poppins-light duration-1000 transition-all  ${
                  inView11
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
        <div className="section-13-bg mb-1 h-[100vh]">
          <div
            ref={ref12}
            className={`flex justify-center items-center duration-1000 transition-all h-[100vh] ${
              inView12
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
        <div className="bg-[#333333] mb-1 h-[100vh]">
          <div className="flex  justify-center items-center  h-[100vh]">
            <div
              ref={ref13}
              className={`h-full transition-all duration-1000 ${
                inView13
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
        <div className="section-15-bg mb-1 h-[100vh]">
          <div className="flex  justify-center items-center  h-[100vh]">
            <div
              ref={ref14}
              className={`h-full transition-all duration-1000 ${
                inView14
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <img className="h-full" src="/img/3d/3d_portfolio/s15.png" />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------Section 15 End---------------------------------------------------- */}
        {/* ---------------------------------------------------Section 16 start---------------------------------------------------- */}
        <div className="bg-[#F12B35] mb-1 h-[100vh]">
          <div className="flex  justify-center items-center  h-[100vh]">
            <div ref={ref15} className="flex justify-start items-end h-full w-full">
              <img
                className={`max-w-full max-h-full transition-all duration-1000 ${
                  inView15 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
                src="/img/3d/3d_portfolio/S16_FR_Image1.png"
              />
            </div>
            <div ref={ref15} className="w-1/2">
              <h1  className={`text-white text-[50px] poppins-regular transition-all duration-1000 ${inView15 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}>Fashion <span className="text-[#FF9999]">Retail</span></h1>
              <h1 className="bg-white w-full h-[1px]"></h1>
              <p className={`poppins-light text-white text-[14px] transition-all duration-1000 pt-5 text-justify pr-16 ${inView15 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>{`Imagine showcasing your entire fashion line
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
        <div className="section-17-bg h-screen mb-1">
          <div ref={ref16} className="flex justify-center items-center h-[100vh]">
            <h1  className={`poppins-thin text-white text-[130px] duration-1000 transition-all ${inView16 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>Packaging</h1>
          </div>

        </div>
        {/* ---------------------------------------------------Section 17 End---------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Portfolio3D;
