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
        <div className="flex flex-col gap-10">
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
        <div className="flex flex-col gap-10">
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
      </div>
    </div>
  );
};

export default Microsite2D;
