import React, { useEffect, useRef, useState } from 'react';

const ScrollChild = ({ slideContent, callBackChild, style,  isWheel }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // Use state for currentIndex
    const debounceTimeout = useRef(null); // Ref to store the debounce timeout
    const boxRef = useRef(null);

    useEffect(() => {
        const stickyElement = boxRef.current;

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
                        if(currentIndex > 0 && currentIndex < slideContent.slideImages.length){
                            setCurrentIndex((prevIndex) => (prevIndex - 1));
                        }else if(currentIndex === 0){
                            callBackChild(Math.floor(Math.random() * -1000));
                        }
                        console.log("parrent : ",  stickyElement.parentElement)
                            stickyElement.parentElement.scrollIntoView({ behavior: 'smooth' });

                        // setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slideContent.slideImages.length - 1));
                    }
                    console.log("currentIndex : ", currentIndex);
                }, 500); // 5 seconds debounce
            };
        }

        return () => {
            if (stickyElement) {
                stickyElement.onwheel = null;
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
                    <div className='h-1/2 flex'>
                        <div className=' w-1/2 h-full'>
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
                        <div className='w-1/2 h-full flex justify-center items-center'>
                            <h2 className='text-black'>{slideContent?.title}</h2>
                        </div>
                    </div>
                    <div className='h-1/2 flex'>
                        <div className='w-1/2 h-full flex justify-center items-center'>
                            <p className='text-black text-lg font-bold w-[80%]'>{slideContent?.content}</p>
                        </div>
                        <div className='w-1/2 h-full'>
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