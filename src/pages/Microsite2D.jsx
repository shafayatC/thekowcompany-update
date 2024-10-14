import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar2dMicrosite from "../component2dMicrosite/Navbar2DMicrosite/Navbar2dMicrosite";
import "./Microsite2D.css";

const Microsite2D = () => {
  const headerRef = useRef(null);

  const [scale, setScale] = useState(1); // Initial scale
  const [backgroundPositionY, setBackgroundPositionY] = useState("center");
  
  // Set up intersection observer for "About Us" section
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
  });


  // Scroll effect for scaling the header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScale = Math.max(0.90, 1 - scrollTop / 1000); // Adjust the scale based on scroll
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

        {/* -----------About Us section------------ */}
        <div className="h-screen">
          <div className="flex flex-col gap-10">
            <div
              ref={ref1} 
              className={`flex flex-col items-start ml-12 transition-all duration-1000  ${
                inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              <h1 className="text-[50px] font-semibold">About Us</h1>
              <p className="text-[17px] w-[800px]">
                At The KOW Company, we excel in Ecommerce and Studio Image
                Post-Production, transforming visual concepts into captivating
                realities. With a keen eye for detail and creativity, our talented
                team elevates product images through precise editing and
                enhancement. From background removal to sophisticated retouching,
                we deliver impeccable visuals that make your products shine. We
                don’t just meet expectations – we surpass them, empowering your
                brand to stand out in the competitive market.
              </p>
            </div>

            {/* -----------Services section------------ */}
            <div className="w-full  ">
              <div 
                  ref={ref2} 
               className={`flex justify-end items-end gap-5 mr-12 transition-all duration-1000  ${
                inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}>
                <h1 className="text-[50px] font-semibold -mb-3">SERVICES</h1>
                <p className="text-[17px] w-[200px]">
                  Model Retouch Background Removal Image Enhancement Ghost Mannequin
                  Clipping Path
                </p>
              </div>
            </div>

            {/* -----------Retouching section------------ */}
            <div ref={ref3} className={`flex flex-col items-start ml-12 transition-all duration-1000  ${
                inView3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}>
              <h1 className="text-[50px] font-semibold">Retouching</h1>
              <p className="text-[17px] w-[800px]">
                Enhance and perfect images for a professional finish.
              </p>
            </div>
          </div>
        </div>

        {/* Extra background section */}
        <div className="h-screen bg-[#FFFBE6]"></div>
      </div>
    </div>
  );
};

export default Microsite2D;
