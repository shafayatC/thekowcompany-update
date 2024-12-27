import React, { useState } from "react";

const GhostMannequin = () => {
  const [activeGMDivSection, setActiveGMDivSection] = useState(1); // Default to the first div

  return (
    <div id="mannequin" className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center bg-white rounded-lg border-2 border-[#155331] mt-9 lg:mb-9 py-[23px]">
        <h1 className="lg:w-[440px] text-[22px] lg:text-[36px] font-bold leading-10 text-[#737373]">
          Ghost Mannequin
        </h1>
        <p className="w-full lg:w-[730px] text-[16px] lg:text-[24px] text-center lg:text-left font-medium lg:leading-8 text-[#737373] px-2 lg:px-0">
          From seamless mannequin removal and sleeve preservation to flawless
          dust and scratch removal and wrinkle-free magic, we perfect every
          detail to showcase your products at their best.
        </p>
      </div>

      <div className="bg-white rounded-xl overflow-hidden">
        <div className="flex flex-col items-center p-8">
          {/* Div Sections */}
          <div
            className="w-full pt-8 transition-transform duration-[1200ms] ease-in-out"
            style={{
              transform: `translateX(-${(activeGMDivSection - 1) * 100}%)`,
              width: "300%", // Adjust to fit three sections
              display: "flex",
            }}
          >
            {/* Section 1 */}
            <div
              className="flex justify-center items-center gap-10 lg:gap-[160px] w-full flex-shrink-0"
              style={{ width: "100%" }}
            >
              <div>
                <img
                  className="w-full h-[200px] sm:h-[600px] transition-transform duration-700 "
                  src="./img/2D-Microsite/images/gm11B.webp"
                  alt="Before 1"
                />
              </div>
              <div>
                <img
                  className="w-full h-[200px] sm:h-[600px] transition-transform duration-700 "
                  src="./img/2D-Microsite/images/gm11A.webp"
                  alt="After 1"
                />
              </div>
            </div>

            {/* Section 2 */}
            <div
              className="flex justify-center items-center gap-10 lg:gap-[160px] w-full flex-shrink-0"
              style={{ width: "100%" }}
            >
              <div>
                <img
                  className="w-full h-[200px] sm:h-[600px] transition-transform duration-700 "
                  src="./img/2D-Microsite/images/gm22B.webp"
                  alt="Before 2"
                />
              </div>
              <div>
                <img
                  className="w-full h-[200px] sm:h-[600px] transition-transform duration-700 "
                  src="./img/2D-Microsite/images/gm22A.webp"
                  alt="After 2"
                />
              </div>
            </div>

            {/* Section 3 */}
            <div
              className="flex justify-center items-center gap-10 lg:gap-[160px] w-full flex-shrink-0"
              style={{ width: "100%" }}
            >
              <div>
                <img
                  className="w-full h-[200px] sm:h-[600px] transition-transform duration-700 "
                  src="./img/2D-Microsite/images/gm33B.webp"
                  alt="Before 3"
                />
              </div>
              <div>
                <img
                  className="w-full h-[200px] sm:h-[600px] transition-transform duration-700 "
                  src="./img/2D-Microsite/images/gm33A.webp"
                  alt="After 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-[18px] px-6 my-[36px]">
        {[1, 2, 3].map((section) => (
          <button
            key={section}
            className={`rounded-2xl transition-all duration-300 ${
              activeGMDivSection === section
                ? "bg-[#15803D] h-[6px] w-[40px]"
                : "bg-[#9EA1A1] h-[6px] w-[20px]"
            }`}
            onClick={() => setActiveGMDivSection(section)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default GhostMannequin;
