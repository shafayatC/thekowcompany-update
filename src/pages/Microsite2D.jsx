import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar2dMicrosite from "../component2dMicrosite/Navbar2DMicrosite/Navbar2dMicrosite";
import "./Microsite2D.css";

const Microsite2D = () => {
  const headerRef = useRef(null);

  const [scale, setScale] = useState(1); // Initial scale
  const [backgroundPositionY, setBackgroundPositionY] = useState("center");

  // Set up intersection observer for different sections
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
  const { ref: ref31, inView: inView31 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref32, inView: inView32 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref33, inView: inView33 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref34, inView: inView34 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref35, inView: inView35 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref36, inView: inView36 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref37, inView: inView37 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref38, inView: inView38 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref39, inView: inView39 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref40, inView: inView40 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref41, inView: inView41 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref42, inView: inView42 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref43, inView: inView43 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref44, inView: inView44 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref45, inView: inView45 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref46, inView: inView46 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref47, inView: inView47 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref48, inView: inView48 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref49, inView: inView49 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref50, inView: inView50 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref51, inView: inView51 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref52, inView: inView52 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref53, inView: inView53 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref54, inView: inView54 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref55, inView: inView55 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref56, inView: inView56 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref57, inView: inView57 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref58, inView: inView58 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref59, inView: inView59 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref60, inView: inView60 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref61, inView: inView61 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref62, inView: inView62 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref63, inView: inView63 } = useInView({
    threshold: 0.2,
  });

  // Scroll effect for scaling the header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScale = Math.max(0.9, 1 - scrollTop / 1000); // Adjust the scale based on scroll
      const newPositionY = `${scrollTop * 0.5}px`; // Parallax effect
      setScale(newScale);
      setBackgroundPositionY(newPositionY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="font-satoshi" className="bg-[#FFFBE6] h-full overflow-hidden">
      <Navbar2dMicrosite />
      <div className="container mx-auto">
        {/* -----------1st section------------ */}
        <div className="h-screen">
          <h1
            ref={headerRef}
            className="font-bold h-full text-[160px] flex justify-center items-center header-text-background"
            style={{
              transform: `scale(${scale})`, // Apply zoom effect
              transition: "transform 0.3s ease-out", // Smooth transition
              backgroundPosition: `center ${backgroundPositionY}`, // Parallax effect
            }}
          >
            2D Portfolio
          </h1>
        </div>

        {/* -------------------------2nd Section----------------------- */}

        <div className="h-full">
          <div className="flex flex-col gap-10">
            {/* First div: About Us */}
            <div
              ref={ref1}
              className={`flex flex-col items-start ml-12 transition-all duration-1000  ${
                inView1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <h1 className="text-[50px] font-semibold">About Us</h1>
              <p className="text-[17px] w-[800px]">
                At The KOW Company, we excel in Ecommerce and Studio Image
                Post-Production, transforming visual concepts into captivating
                realities. With a keen eye for detail and creativity, our
                talented team elevates product images through precise editing
                and enhancement. From background removal to sophisticated
                retouching, we deliver impeccable visuals that make your
                products shine. We don’t just meet expectations – we surpass
                them, empowering your brand to stand out in the competitive
                market.
              </p>
            </div>

            {/* Second div: Services */}
            <div className="w-full">
              <div
                ref={ref2}
                className={`flex justify-end items-end gap-5 mr-12 transition-all duration-1000  ${
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <h1 className="text-[50px] font-semibold -mb-3">SERVICES</h1>
                <p className="text-[17px] w-[200px]">
                  Model Retouch Background Removal Image Enhancement Ghost
                  Mannequin Clipping Path
                </p>
              </div>
            </div>

            {/* Third div: Retouching */}
            <div
              ref={ref3}
              className={`flex flex-col items-start ml-12 transition-all duration-1000  ${
                inView3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <h1 className="text-[50px] font-semibold">Retouching</h1>
              <p className="text-[17px] w-[800px]">
                Enhance and perfect images for a professional finish.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------3rd Section: Details-----------------*/}
        <div className="py-20">
          <h1 className="text-[36px] font-semibold text-center">Details</h1>
        </div>

        {/* ----------------4th Section-----------------*/}
        <div className="flex flex-col gap-10 pb-20">
          {/* 1st div of this section */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref4}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView4
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Model/before-model-1.webp"
                    alt="Before Model Image"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref5}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView5
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    On Model
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref6}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView6
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Retouching to Perfection: From flawless color brilliance and
                    wrinkle-free magic to precise alignment, background
                    refinement, and reduced flyaway hair—experience the art of
                    perfection in every detail.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref7}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView7
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Model/after-model-1v.webp"
                    alt="After Model Image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Div: Model 2 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref8}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView8
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Model/before-model-2.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref9}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView9
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    On Model
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref10}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView10
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Retouching to Perfection: From flawless color brilliance and
                    wrinkle-free magic to precise alignment, background
                    refinement, and reduced flyaway hair—experience the art of
                    perfection in every detail.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref11}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView11
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Model/after-model-2.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Third Div: Model 3 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref12}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView12
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Model/before-model-3.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref13}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView13
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    On Model
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref14}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView14
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Retouching to Perfection: From flawless color brilliance and
                    wrinkle-free magic to precise alignment, background
                    refinement, and reduced flyaway hair—experience the art of
                    perfection in every detail.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref15}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView15
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Model/after-model-3.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------5th Section-----------------*/}
        <div className="flex flex-col gap-10 pb-20">
          {/* 1st div of this section */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref16}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView16
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Mannequin/before-Mq-1.webp"
                    alt="Before Model Image"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref17}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView17
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Ghost Mannequin
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref18}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView18
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Mannequin Services: From seamless mannequin removal and
                    sleeve preservation to flawless dust and scratch removal and
                    wrinkle-free magic, we perfect every detail to showcase your
                    products at their best.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref19}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView19
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Mannequin/after-Mq-1.webp"
                    alt="After Model Image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Div: MQ 2 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref20}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView20
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Mannequin/before-Mq-2.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref21}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView21
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Ghost Mannequin
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref22}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView22
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Mannequin Services: From seamless mannequin removal and
                    sleeve preservation to flawless dust and scratch removal and
                    wrinkle-free magic, we perfect every detail to showcase your
                    products at their best.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref23}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView23
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Mannequin/after-Mq-2.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Third Div: MQ 3 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref24}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView24
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Mannequin/before-Mq-3.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref25}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView25
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Ghost Mannequin
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref26}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView26
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Mannequin Services: From seamless mannequin removal and
                    sleeve preservation to flawless dust and scratch removal and
                    wrinkle-free magic, we perfect every detail to showcase your
                    products at their best.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref27}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView27
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Mannequin/after-Mq-3.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------6th Section-----------------*/}
        <div className="flex flex-col gap-10 pb-20">
          {/* 1st div of this section */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref28}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView28
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Shoe/before-shoe-1.webp"
                    alt="Before Model Image"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref29}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView29
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Shoe Retouching
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref30}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView30
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Shoe Retouching to Perfection: From enhancing shape with
                    precise image manipulation to adding natural shadows,
                    removing imperfections, and perfecting the background, we
                    ensure every pair stands out in flawless detail.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref31}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView31
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Shoe/after-shoe-1.webp"
                    alt="After Model Image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Div: Shoe 2 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref32}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView32
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Shoe/before-shoe-2.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref33}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView33
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Shoe Retouching
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref34}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView34
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Shoe Retouching to Perfection: From enhancing shape with
                    precise image manipulation to adding natural shadows,
                    removing imperfections, and perfecting the background, we
                    ensure every pair stands out in flawless detail.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref35}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView35
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Shoe/after-shoe-2.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Third Div: Shoe 3 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref36}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView36
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Shoe/before-shoe-3.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref37}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView37
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Shoe Retouching
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref38}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView38
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Shoe Retouching to Perfection: From enhancing shape with
                    precise image manipulation to adding natural shadows,
                    removing imperfections, and perfecting the background, we
                    ensure every pair stands out in flawless detail.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref39}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView39
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Shoe/after-shoe-3.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------7th Section-----------------*/}
        <div className="flex flex-col gap-10 pb-20">
          {/* 1st div of this section */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref40}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView40
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Jewelry/before-jew-1v.webp"
                    alt="Before Model Image"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref41}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView41
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Jewelry
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref42}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView42
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Jewelry Retouching at Its Finest: Achieve perfect alignment,
                    vibrant color brilliance, and flawless detail with expert
                    dust and scratch removal, shadow addition, background plate
                    refinement, and precise tag number and imperfection removal.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref43}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView43
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Jewelry/after-jew-1.webp"
                    alt="After Model Image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Div: Shoe 2 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref44}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView44
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-full"
                    src="/img/2D-Microsite/Jewelry/before-jew-2.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref45}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView45
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Jewelry
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref46}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView46
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Jewelry Retouching at Its Finest: Achieve perfect alignment,
                    vibrant color brilliance, and flawless detail with expert
                    dust and scratch removal, shadow addition, background plate
                    refinement, and precise tag number and imperfection removal.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref47}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView47
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Jewelry/after-jew-2.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Third Div: Shoe 3 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref48}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView48
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Jewelry/before-jew-3v.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref49}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView49
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Jewelry
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref50}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView50
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Jewelry Retouching at Its Finest: Achieve perfect alignment,
                    vibrant color brilliance, and flawless detail with expert
                    dust and scratch removal, shadow addition, background plate
                    refinement, and precise tag number and imperfection removal.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref51}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView51
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Jewelry/after-jew-3.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------8th Section-----------------*/}
        <div className="flex flex-col gap-10 pb-20">
          {/* 1st div of this section */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref52}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView52
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Ambience/before-ambience-1.webp"
                    alt="Before Model Image"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref53}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView53
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Ambience
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref54}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView54
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Crafting Perfect Ambience: Through seamless background plate
                    addition, soft shadow enhancement, and meticulous tag number
                    and imperfection removal, we create an inviting atmosphere
                    that enhances every detail beautifully.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref55}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView55
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Ambience/after-ambience-1.webp"
                    alt="After Model Image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Div: Ambience 2 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref56}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView56
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Ambience/before-ambience-2.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref57}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView57
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Ambience
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref58}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView58
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Crafting Perfect Ambience: Through seamless background plate
                    addition, soft shadow enhancement, and meticulous tag number
                    and imperfection removal, we create an inviting atmosphere
                    that enhances every detail beautifully.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref59}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView59
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Ambience/after-ambience-2.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Third Div: Ambience 3 */}
          <div className="flex flex-col gap-5 justify-items-center items-center h-full">
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div
                  ref={ref60}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView60
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Ambience/before-ambience-3.webp"
                    alt="Before Model Image 2"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <h1
                    ref={ref61}
                    className={`text-[50px] font-bold transition-all duration-1000  ${
                      inView61
                        ? "opacity-100 -translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    Ambience
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-1/2">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    ref={ref62}
                    className={`w-[350px] text-[20px] font-semibold transition-all duration-1000  ${
                      inView62
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    Crafting Perfect Ambience: Through seamless background plate
                    addition, soft shadow enhancement, and meticulous tag number
                    and imperfection removal, we create an inviting atmosphere
                    that enhances every detail beautifully.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  ref={ref63}
                  className={`w-full flex justify-center items-center transition-all duration-1000  ${
                    inView63
                      ? "opacity-100 -translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  <img
                    className="w-[90%]"
                    src="/img/2D-Microsite/Ambience/after-ambience-3.webp"
                    alt="After Model Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------9th Section-----------------*/}
        <div>
        <h1 className="text-center text-[41px] font-semibold">Try the Ai powered background replacement </h1>
        <h1 className="text-center text-[41px] font-semibold">solution with Retouched.ai</h1>
    <div className="w-full flex justify-center items-center">
    <iframe
        src="https://retouched.ai/"
        width="80%"
        height="600px"
        title="Embedded Website"
        frameBorder="0"
        allowFullScreen
      />
    </div>
        </div>
      </div>
    </div>
  );
};

export default Microsite2D;
