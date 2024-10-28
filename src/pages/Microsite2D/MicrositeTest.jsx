import React, { useState, useEffect, useRef } from 'react';
import ScrollChild from './ScrollChild';
import Navbar2dMicrosite from '../../component2dMicrosite/Navbar2DMicrosite/Navbar2dMicrosite';

const Microsite2DTest = () => {
    const sliderParent = useRef(null);
    const afterElement = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [isScrollComplete, setIsScrollComplete] = useState(false);
    const [isWheel, setIsWheel] = useState(false);

    const slideContent = [
        {
            title: "On Model",
            content: "Retouching to Perfection: From flawless color brilliance and wrinkle-free magic to precise alignment, background refinement, and reduced flyaway hair—experience the art of perfection in every detail.",
            slideImages: [
                {
                    after: "./img/2D-Microsite/Model/before-model-3.webp",
                    before: "./img/2D-Microsite/Model/after-model-3.webp"
                },
                
                {
                    after: "./img/2D-Microsite/Mannequin/before-Mq-1.webp",
                    before: "./img/2D-Microsite/Mannequin/after-Mq-1.webp"
                },
                
                {
                    after: "./img/2D-Microsite/Model/before-model-2.webp",
                    before: "./img/2D-Microsite/Model/after-model-2.webp"
                },
            ]
        },
        {
            title: "Ghost Mannequin",
            content: "Mannequin Services: From seamless mannequin removal and sleeve preservation to flawless dust and scratch removal and wrinkle-free magic, we perfect every detail to showcase your products at their best.",
            slideImages: [
                {
                    after: "./img/2D-Microsite/Mannequin/before-Mq-1.webp",
                    before: "./img/2D-Microsite/Mannequin/after-Mq-1.webp"
                },
                {
                    after: "./img/2D-Microsite/Mannequin/before-Mq-2.webp",
                    before: "./img/2D-Microsite/Mannequin/after-Mq-2.webp"
                },
                {
                    after: "./img/2D-Microsite/Mannequin/before-Mq-3.webp",
                    before: "./img/2D-Microsite/Mannequin/after-Mq-3.webp"
                }
            ]
        },
        {
            title: "Shoe Retouching",
            content: "Shoe Retouching to Perfection: From enhancing shape with precise image manipulation to adding natural shadows, removing imperfections, and perfecting the background, we ensure every pair stands out in flawless detail.",
            slideImages: [
                {
                    after: "./img/2D-Microsite/Shoe/before-shoe-1.webp",
                    before: "./img/2D-Microsite/Shoe/after-shoe-1.webp"
                },
                {
                    after: "./img/2D-Microsite/Shoe/before-shoe-2.webp",
                    before: "./img/2D-Microsite/Shoe/after-shoe-2.webp"
                },
                {
                    after: "./img/2D-Microsite/Shoe/before-shoe-3.webp",
                    before: "./img/2D-Microsite/Shoe/after-shoe-3.webp"
                }
            ]
        }
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
                console.log("currentScroll : ", currentScrollY, " prevScroll : ", prevScrollY.current, " iswheel :", isWheel, " currentIndex : ", currentIndex);
                if (currentScrollY > prevScrollY.current) {
                    if (isWheel && currentIndex == 0) {
                        setIsWheel(false);
                    }
                }
            }
            if (afterElement.current != null) {

                const rectAfterElemnt = afterElement.current.getBoundingClientRect();

                // Check if the top of the div (relative to the viewport) is at the top of the viewport
                if (rectAfterElemnt.top < afterElement.current.clientHeight && rectAfterElemnt.top >= (afterElement.current.clientHeight - 300)) {
                    console.log("Tesing Brother");

                    // Determine if the scroll is up or down
                    if (currentScrollY > prevScrollY.current) {
                        console.log("Scrolling down");
                    } else if(currentScrollY < prevScrollY.current) {
                        if (sliderParent.current) {
                            sliderParent.current.scrollIntoView({ behavior: 'smooth' });
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
        window.addEventListener('scroll', checkElementPosition);
        checkElementPosition();

        return () => {
            window.removeEventListener('scroll', checkElementPosition);
        };
    }, [isWheel]);

    useEffect(() => {
        const parrentSlide = sliderParent.current;

        if (parrentSlide) {
            if (prevIndex < currentIndex && currentIndex < parrentSlide.children.length) {
                setPrevIndex(currentIndex);
                parrentSlide.children[currentIndex].style.transform = `translateY(0px)`;
            } else if (prevIndex !== 0 && prevIndex > currentIndex && currentIndex < parrentSlide.children.length) {
                // parrentSlide.children[prevIndex].style.transform = `translateX(100%)`;
                parrentSlide.children[prevIndex].style.transform = `translateY(${parrentSlide.children[prevIndex].clientHeight + "px"})`;
                setPrevIndex(currentIndex);
            }
        }
    }, [currentIndex])

    const callBackChild = (index) => {
        // console.log("currentIndex : " + currentIndex + " length : " + sliderParent.current.children.length);

        index > -1 ?
            currentIndex < (sliderParent.current.children.length - 1) && setCurrentIndex(prev => prev + 1)
            : currentIndex > 0 && setCurrentIndex(prev => prev - 1);

        if (index > -1 && currentIndex + 1 === (sliderParent.current.children.length)) {
            setIsScrollComplete(true);
            setIsWheel(true);
            setTimeout(() => {
                afterElement.current.scrollIntoView({ behavior: 'smooth' });
            }, 600);
            console.log("scrollHeight : ", document.body.scrollHeight, " scrollY : ", window.scrollY);
        }

        if (index < 0 && currentIndex === 0) {
            setIsWheel(true);
            window.scrollTo({ top: window.scrollY - 200, behavior: 'smooth' });
        }

    }


    return (
        <div className='flex flex-col bg-[#FFFBE6]'>

            <Navbar2dMicrosite />
            <div className="container mx-auto">
                {/* -----------1st section------------ */}
                <div className="h-screen">
                    <h1
                        // ref={headerRef}
                        className="font-bold h-full text-[160px] flex justify-center items-center header-text-background"
                    // style={{
                    //   transform: `scale(${scale})`, // Apply zoom effect
                    //   transition: "transform 0.3s ease-out", // Smooth transition
                    //   backgroundPosition: `center ${backgroundPositionY}`, // Parallax effect
                    // }}
                    >
                        2D Portfolio
                    </h1>
                </div>

                {/* -------------------------2nd Section----------------------- */}

                <div className="h-full">
                    <div className="flex flex-col gap-10">
                        {/* First div: About Us */}
                        <div
                            //   ref={ref1}
                            className={`flex flex-col items-start ml-12 transition-all duration-1000  ${null
                                // inView1
                                //   ? "opacity-100 translate-x-0"
                                //   : "opacity-0 -translate-x-20"
                                }
              `}
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
                                // ref={ref2}
                                className={`flex justify-end items-end gap-5 mr-12 transition-all duration-1000  ${null
                                    //   inView2
                                    //     ? "opacity-100 translate-x-0"
                                    //     : "opacity-0 translate-x-20"
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
                            //   ref={ref3}
                            className={`flex flex-col items-start ml-12 transition-all duration-1000  ${null
                                // inView3
                                //   ? "opacity-100 translate-x-0"
                                //   : "opacity-0 -translate-x-20"
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

            </div>


            {/* <div className='h-screen bg-slate-600 text-white font-bold text-[40px] flex flex-col justify-center items-center'>
                <span>1</span>
            </div>
            <div className='h-screen bg-green-600 text-white font-bold text-[40px] flex flex-col justify-center items-center'>
                <span>2</span>
            </div> */}
            <div ref={sliderParent} className='relative h-screen overflow-hidden'>

                {
                    slideContent.map((item, index) =>
                        <>
                            {index == 0 ?
                                <ScrollChild
                                    key={index}
                                    style={{ transform: `translateY(0px)` }}
                                    slideContent={item}
                                    isWheel={isWheel}
                                    callBackChild={callBackChild} />
                                :
                                <ScrollChild
                                    key={index}
                                    style={{ transform: `translateY(${window.innerHeight}px)` }} // Use window.innerHeight for visible height
                                    slideContent={item}
                                    isWheel={isWheel}
                                    callBackChild={callBackChild} />
                            }
                        </>

                    )
                }


            </div>

            {
                isScrollComplete &&
                <div ref={afterElement} className="pb-10 h-screen">
                    <div className="py-10">
                        <h1 className="text-center text-[41px] font-semibold">Try the Ai powered background replacement </h1>
                        <h1 className="text-center text-[41px] font-semibold">solution with Retouched.ai</h1>
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
            }
        </div>
    );
};



export default Microsite2DTest;
