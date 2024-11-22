import React, { useState, useEffect, useRef } from "react";
import ScrollChild from "./ScrollChild";
import Navbar2dMicrosite from "../../component2dMicrosite/Navbar2DMicrosite/Navbar2dMicrosite";
import "./microsite2d.css";
import { useInView } from "react-intersection-observer";

const Microsite2DTest = () => {
  const sliderParent = useRef(null);
  const afterElement = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isScrollComplete, setIsScrollComplete] = useState(false);
  const [isWheel, setIsWheel] = useState(false);
  const [resetChildIndex, setResetChildIndex] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const headerRef = useRef(null);

  const [scale, setScale] = useState(1); // Initial scale
  const [backgroundPositionY, setBackgroundPositionY] = useState("center");

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
  });

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

  // const handleButtonClick = (index) => {
  //     const parrentSlide = sliderParent.current;
  //     const prevIndex = currentIndex;

  //     // previndex = 2
  //     // parrentLength = 3
  //     // index = 3

  //     const currentIndexChange = (changeIndex) => {
  //         setTimeout(() => {

  //             setCurrentIndex(changeIndex);
  //             console.log("changeIndex ", changeIndex , " index: ",index, " currentIndex : " + currentIndex + " length : " + parrentSlide.children.length);
  //         }, 1000);
  //     }

  //     for (let i = 0; i < parrentSlide.children.length; i++) {
  //         if(prevIndex > index && i >= 0){
  //             currentIndexChange(prevIndex - i)
  //         }else if(prevIndex < index && i >= parrentSlide.children.length - 1){
  //             currentIndexChange(prevIndex + i)
  //         }
  //     }
  // };

  const handleButtonClick = (index) => {
    const parentSlide = sliderParent.current;
    const prevIndex = currentIndex;

    // Check if prevIndex is greater than index and update setResetChildIndex
    if (prevIndex < index) {
      setResetChildIndex(true);
    } else {
      setResetChildIndex(false);
    }
    // Helper function to update currentIndex safely
    const currentIndexChange = (changeIndex, delay) => {
      setTimeout(() => {
        setCurrentIndex((prev) => {
          console.log(
            "Updated to changeIndex:",
            changeIndex,
            "index:",
            index,
            "previous:",
            prev
          );
          return changeIndex;
        });
      }, delay);
    };

    if (prevIndex !== index) {
      let step = prevIndex < index ? 1 : -1; // Determine direction
      let delay = 0; // Initial delay set to 0

      for (let i = prevIndex; i !== index; i += step) {
        currentIndexChange(i, delay);
        delay += 700; // Increment delay by 1 second for each loop iteration
      }

      // Ensure the final index is set after the loop completes
      currentIndexChange(index, delay);
    }
  };

  const buttonData = [
    {
      id: 0,
      title: "Model",
    },
    {
      id: 1,
      title: "Ghost Mannequin",
    },
    {
      id: 2,
      title: "Shoe Retouching",
    },
    {
      id: 3,
      title: "Jewelry",
    },
    {
      id: 4,
      title: "Ambience",
    },
  ];

  const slideContent = [
    {
      title: "On Model",
      content:
        "Retouching to Perfection: From flawless color brilliance and wrinkle-free magic to precise alignment, background refinement, and reduced flyaway hair—experience the art of perfection in every detail.",
      slideImages: [
        {
          after: "./img/2D-Microsite/Model/before-model-1.webp",
          before: "./img/2D-Microsite/Model/after-model-1.webp",
        },

        {
          after: "./img/2D-Microsite/Model/before-model-2.webp",
          before: "./img/2D-Microsite/Model/after-model-2.webp",
        },

        {
          after: "./img/2D-Microsite/Model/before-model-3.webp",
          before: "./img/2D-Microsite/Model/after-model-3.webp",
        },
      ],
    },
    {
      title: "Ghost Mannequin",
      content:
        "Mannequin Services: From seamless mannequin removal and sleeve preservation to flawless dust and scratch removal and wrinkle-free magic, we perfect every detail to showcase your products at their best.",
      slideImages: [
        {
          after: "./img/2D-Microsite/Mannequin/before-Mq-1.webp",
          before: "./img/2D-Microsite/Mannequin/after-Mq-1.webp",
        },

        {
          after: "./img/2D-Microsite/Mannequin/before-Mq-2.webp",
          before: "./img/2D-Microsite/Mannequin/after-Mq-2.webp",
        },

        {
          after: "./img/2D-Microsite/Mannequin/before-Mq-3.webp",
          before: "./img/2D-Microsite/Mannequin/after-Mq-3.webp",
        },
      ],
    },
    {
      title: "Shoe Retouching",
      content:
        "Shoe Retouching to Perfection: From enhancing shape with precise image manipulation to adding natural shadows, removing imperfections, and perfecting the background, we ensure every pair stands out in flawless detail.",
      slideImages: [
        {
          after: "./img/2D-Microsite/Shoe/before-shoe-1.webp",
          before: "./img/2D-Microsite/Shoe/after-shoe-1.webp",
        },
        {
          after: "./img/2D-Microsite/Shoe/before-shoe-2.webp",
          before: "./img/2D-Microsite/Shoe/after-shoe-2.webp",
        },
        {
          after: "./img/2D-Microsite/Shoe/before-shoe-3.webp",
          before: "./img/2D-Microsite/Shoe/after-shoe-3.webp",
        },
      ],
    },
    {
      title: "Jewelry",
      content:
        "Jewelry Retouching at Its Finest: Achieve perfect alignment, vibrant color brilliance, and flawless detail with expert dust and scratch removal, shadow addition, background plate refinement, and precise tag number and imperfection removal.",
      slideImages: [
        {
          after: "./img/2D-Microsite/Jewelry/before-jew-1.webp",
          before: "./img/2D-Microsite/Jewelry/after-jew-1.webp",
        },
        {
          after: "./img/2D-Microsite/Jewelry/before-jew-2.webp",
          before: "./img/2D-Microsite/Jewelry/after-jew-2.webp",
        },
        {
          after: "./img/2D-Microsite/Jewelry/before-jew-3.webp",
          before: "./img/2D-Microsite/Jewelry/after-jew-3.webp",
        },
      ],
    },
    {
      title: "Ambience",
      content:
        "Crafting Perfect Ambience: Through seamless background plate addition, soft shadow enhancement, and meticulous tag number and imperfection removal, we create an inviting atmosphere that enhances every detail beautifully.",
      slideImages: [
        {
          after: "./img/2D-Microsite/Ambience/before-ambience-1.webp",
          before: "./img/2D-Microsite/Ambience/after-ambience-1.webp",
        },
        {
          after: "./img/2D-Microsite/Ambience/before-ambience-2.webp",
          before: "./img/2D-Microsite/Ambience/after-ambience-2.webp",
        },
        {
          after: "./img/2D-Microsite/Ambience/before-ambience-3.webp",
          before: "./img/2D-Microsite/Ambience/after-ambience-3.webp",
        },
      ],
    },
  ];
  const prevScrollY = useRef(0);

  useEffect(() => {
    // const stickyElement = document.querySelector('.my-sticky-element');
    const stickyElement = sliderParent.current;
    // Use ref to store the previous scroll position
    const checkElementPosition = () => {
      const rect = stickyElement.getBoundingClientRect();
      const currentScrollY = window.scrollY;

      // Check if the top of the div (relative to the viewport) is at the top of the viewport
      if (rect.top <= 0 && rect.top >= -200) {
        console.log("rect.top : " + rect.top, " scrolY : ", window.scrollY);
        // window.scrollTo({ top: window.scrollY + rect.top, behavior: 'smooth' });
        console.log(
          "currentScroll : ",
          currentScrollY,
          " prevScroll : ",
          prevScrollY.current,
          " iswheel :",
          isWheel,
          " currentIndex : ",
          currentIndex
        );
        if (currentScrollY > prevScrollY.current) {
          if (isWheel && currentIndex == 0) {
            setIsWheel(false);
          }
        }
      }
      if (afterElement.current != null) {
        const rectAfterElemnt = afterElement.current.getBoundingClientRect();

        // Check if the top of the div (relative to the viewport) is at the top of the viewport
        if (
          rectAfterElemnt.top < afterElement.current.clientHeight &&
          rectAfterElemnt.top >= afterElement.current.clientHeight - 300
        ) {
          console.log("Tesing Brother");

          // Determine if the scroll is up or down
          if (currentScrollY > prevScrollY.current) {
            console.log("Scrolling down");
          } else if (currentScrollY < prevScrollY.current) {
            if (sliderParent.current) {
              sliderParent.current.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => {
                setIsScrollComplete(false);
                setIsWheel(false);
              }, 300);
            }
          }
        }
      }

      // Update the previous scroll position
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", checkElementPosition);
    checkElementPosition();

    return () => {
      window.removeEventListener("scroll", checkElementPosition);
    };
  }, [isWheel]);

  useEffect(() => {
    const parrentSlide = sliderParent.current;

    if (parrentSlide) {
      if (
        prevIndex < currentIndex &&
        currentIndex < parrentSlide.children.length
      ) {
        setPrevIndex(currentIndex);

        parrentSlide.children[currentIndex].style.transform = `translateY(0px)`;
      } else if (
        prevIndex !== 0 &&
        prevIndex > currentIndex &&
        currentIndex < parrentSlide.children.length
      ) {
        // parrentSlide.children[prevIndex].style.transform = `translateX(100%)`;

        parrentSlide.children[prevIndex].style.transform = `translateY(${
          parrentSlide.children[prevIndex].clientHeight + "px"
        })`;
        setPrevIndex(currentIndex);
      }
    }
  }, [currentIndex]);

  const callBackChild = (index) => {
    console.log(
      "currentIndex : " +
        currentIndex +
        " length : " +
        sliderParent.current.children.length
    );

    index > -1
      ? currentIndex < sliderParent.current.children.length - 1 &&
        setCurrentIndex((prev) => prev + 1)
      : currentIndex > 0 && setCurrentIndex((prev) => prev - 1);

    if (
      index > -1 &&
      currentIndex + 1 === sliderParent.current.children.length
    ) {
      setIsScrollComplete(true);
      setIsWheel(true);
      setTimeout(() => {
        document.body.style.touchAction = "auto"; // Enable scrolling on the body
        afterElement.current.scrollIntoView({ behavior: "smooth" });
      }, 600);
      console.log(
        "scrollHeight : ",
        document.body.scrollHeight,
        " scrollY : ",
        window.scrollY
      );
    }

    if (index < 0 && currentIndex === 0) {
      setIsWheel(true);
      document.body.style.touchAction = "auto"; // Enable scrolling on the body
      window.scrollTo({ top: window.scrollY - 200, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col bg-[#FFFBE6] relative">
      <Navbar2dMicrosite />
      <div className="container mx-auto overflow-hidden">
        {/* -----------1st section------------ */}
        <div className="h-[40vh] md:h-screen">
          <h1
            ref={headerRef}
            className="font-bold  h-full text-[68px] md:text-[160px] flex justify-center items-center header-text-background"
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
              }
              `}
            >
              <h1 className="text-[30px] md:text-[50px] font-semibold">
                About Us
              </h1>
              <p className="text-[12px] md:text-[17px] w-full lg:w-[800px]">
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
                className={`flex justify-end items-end gap-5 md:mr-12 transition-all duration-1000  ${
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <h1 className="text-[30px] md:text-[50px] font-semibold -mb-3">
                  SERVICES
                </h1>
                <p className="text-[12px] md:text-[17px] w-[120px] md:w-[200px]">
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
              <h1 className="text-[30px] md:text-[50px] font-semibold">
                Retouching
              </h1>
              <p className=" text-[12px] md:text-[17px] w-full lg:w-[800px]">
                Enhance and perfect images for a professional finish.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------3rd Section: Details-----------------*/}
        <div className="py-20 hidden md:block">
          <h1 className="text-[36px] font-semibold text-center">Details</h1>
        </div>
      </div>

      {/* <div className='h-screen bg-slate-600 text-white font-bold text-[40px] flex flex-col justify-center items-center'>
                <span>1</span>
            </div>
            <div className='h-screen bg-green-600 text-white font-bold text-[40px] flex flex-col justify-center items-center'>
                <span>2</span>
            </div> */}
      <div className="relative overflow-hidden">
        <div ref={sliderParent} className="relative h-screen overflow-hidden">
          {slideContent.map((item, index) => (
            <>
              {index == 0 ? (
                <ScrollChild
                  key={index}
                  style={{ transform: `translateY(0px)` }}
                  slideContent={item}
                  isWheel={isWheel}
                  resetChildIndex={resetChildIndex}
                  callBackChild={callBackChild}
                />
              ) : (
                <ScrollChild
                  key={index}
                  style={{ transform: `translateY(${window.innerHeight}px)` }} // Use window.innerHeight for visible height
                  slideContent={item}
                  isWheel={isWheel}
                  resetChildIndex={resetChildIndex}
                  callBackChild={callBackChild}
                />
              )}
            </>
          ))}
        </div>

        <div className="absolute right-0 top-[10px] z-[999] w-[92px] md:w-auto">
          <div className="flex flex-col">
            {buttonData.map((buttonLabel) => (
              <button
                key={buttonLabel?.id}
                onClick={() => handleButtonClick(buttonLabel?.id)}
                className={`px-3 py-2 text-xs text-white rounded-l-xl microsite-button transition-all duration-150
${
  currentIndex === buttonLabel.id
    ? "bg-[#AADE8A] scale-105 -ml-2"
    : "bg-[#53C292]"
}`}
              >
                {buttonLabel?.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      {isScrollComplete && (
        <div ref={afterElement} className="pb-10 h-screen">
          <div className="py-10">
            <h1 className="text-center text-[41px] font-semibold">
              Try the Ai powered background replacement{" "}
            </h1>
            <h1 className="text-center text-[41px] font-semibold">
              solution with Retouched.ai
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <iframe
              className="bg-white 2xl:h-[800px] h-[650px]"
              src="https://retouched.ai/"
              width="100%"
              height=""
              title="Embedded Website"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Microsite2DTest;
