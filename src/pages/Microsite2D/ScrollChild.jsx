import React, { useEffect, useRef, useState } from 'react';

const ScrollChild = ({ slideContent, callBackChild, style, isWheel }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // Use state for currentIndex
    const debounceTimeout = useRef(null); // Ref to store the debounce timeout
    const boxRef = useRef(null);

    useEffect(() => {
        const stickyElement = boxRef.current;
        let touchStartY = 0;
        let touchEndY = 0;

        if (stickyElement && !isWheel) {
            stickyElement.onwheel = (event) => {
                event.preventDefault(); // Prevent default scrolling

                if (debounceTimeout.current) {
                    clearTimeout(debounceTimeout.current); // Clear previous timeout if it exists
                }

                debounceTimeout.current = setTimeout(() => {
                    if (event.deltaY > 0) {
                        // Scrolling down
                        if (currentIndex >= 0 && currentIndex < slideContent.slideImages.length - 1) {
                            setCurrentIndex((prevIndex) => (prevIndex + 1))
                        } else if (currentIndex === slideContent.slideImages.length - 1) {
                            callBackChild(Math.floor(Math.random() * 1000));
                        }
                        stickyElement.parentElement.scrollIntoView({ behavior: 'smooth' });

                        // setCurrentIndex((prevIndex) => (prevIndex < slideContent.length - 1 ? prevIndex + 1 : 0));
                    } else if (event.deltaY < 0) {
                        // Scrolling up
                        if (currentIndex > 0 && currentIndex < slideContent.slideImages.length) {
                            setCurrentIndex((prevIndex) => (prevIndex - 1));
                        } else if (currentIndex === 0) {
                            callBackChild(Math.floor(Math.random() * -1000));
                        }
                        console.log("parrent : ", stickyElement.parentElement)
                        stickyElement.parentElement.scrollIntoView({ behavior: 'smooth' });

                        // setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slideContent.slideImages.length - 1));
                    }
                    console.log("currentIndex : ", currentIndex);
                }, 500); // 5 seconds debounce
            };
        }

        const handleTouchStart = (event) => {
            touchStartY = event.touches[0].clientY;
            // alert("touchStartY : " + touchStartY);
        };

        const handleTouchMove = (event) => {
            touchEndY = event.touches[0].clientY;
            // alert("touchEndY : " + touchEndY);
        };

        const handleTouchEnd = () => {
            const deltaY = touchStartY - touchEndY;
            if (stickyElement && !isWheel) {
                document.body.style.touchAction = 'none'; // Enable scrolling on the body
                // alert("touch : " + deltaY + " overflow: " +  document.body.style.overflowY);

                if (debounceTimeout.current) {
                    clearTimeout(debounceTimeout.current); // Clear previous timeout if it exists
                }


                debounceTimeout.current = setTimeout(() => {
                    if (Math.abs(deltaY) > 50) { // Threshold to detect a swipe
                        if (deltaY > 0) {
                            // Swipe up
                            if (currentIndex >= 0 && currentIndex < slideContent.slideImages.length - 1) {
                                setCurrentIndex((prevIndex) => (prevIndex + 1))
                            } else if (currentIndex === slideContent.slideImages.length - 1) {
                                callBackChild(Math.floor(Math.random() * 1000));
                            }
                            stickyElement.parentElement.scrollIntoView({ behavior: 'smooth' });


                        } else {
                            // Swipe down

                            if (currentIndex > 0 && currentIndex < slideContent.slideImages.length) {
                                setCurrentIndex((prevIndex) => (prevIndex - 1));
                            } else if (currentIndex === 0) {
                                callBackChild(Math.floor(Math.random() * -1000));
                            }
                            console.log("parrent : ", stickyElement.parentElement)
                            stickyElement.parentElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }, 500); // 5 seconds debounce
            } 

        };
        // if (isWheel){
        //     document.body.style.touchAction = 'auto'; // Enable scrolling on the body
        // }
        if (stickyElement && !isWheel) {
            stickyElement.addEventListener("touchstart", handleTouchStart);
            stickyElement.addEventListener("touchmove", handleTouchMove);
            stickyElement.addEventListener("touchend", handleTouchEnd);
        }

        return () => {
            if (stickyElement) {
                stickyElement.onwheel = null;
            }

            if (stickyElement) {
                stickyElement.removeEventListener("touchstart", handleTouchStart);
                stickyElement.removeEventListener("touchmove", handleTouchMove);
                stickyElement.removeEventListener("touchend", handleTouchEnd);
            }

            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current); // Clear the timeout on cleanup
            }

        };
    }, [currentIndex, slideContent.slideImages.length, isWheel]);



    return (
        <div ref={boxRef}
            style={style}
            className='absolute transition-all duration-700 w-full h-full'
        >
            {/* {console.log("slideContent : ", slideContent.slideImages)} */}
            <div className='h-screen bg-[#FFFBE6] text-white font-bold text-[40px] flex flex-col justify-center items-center'>
                <div className='h-full w-full'>
                    <div className='h-1/2 flex flex-col-reverse md:flex-row'>
                        <div className=' w-full md:w-1/2 h-full'>
                            <div className='slider-wheel-container w-full h-full relative overflow-hidden'>
                                {slideContent && slideContent.slideImages.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{ zIndex: index }}
                                        className={`transition-transform duration-500 absolute w-full flex justify-center items-center h-full ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
                                    >
                                        <img className='max-h-full max-w-full absolute' src={item.after} alt={`Image ${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 h-auto md:h-full pt-3 md:p-0 flex justify-center items-center'>
                            <h2 className='text-black'>{slideContent?.title}</h2>
                        </div>
                    </div>
                    <div className='h-1/2 flex flex-col-reverse md:flex-row'>
                        <div className='w-full md:w-1/2 h-auto md:h-full flex justify-center items-center pb-7 md:pb-0'>
                            <p className='text-black text-base md:text-lg font-bold w-[80%]'>{slideContent?.content}</p>
                        </div>
                        <div className='w-full md:w-1/2 h-full'>
                            <div className='slider-wheel-container w-full h-full relative overflow-hidden'>
                                {slideContent && slideContent.slideImages.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{ zIndex: index }}
                                        className={`transition-transform duration-500 absolute w-full flex justify-center items-center h-full ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
                                    >
                                        <img className='max-h-full max-w-full absolute' src={item.before} alt={`Image`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ScrollChild;