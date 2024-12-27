import React, { useRef } from 'react';

const ImageTransition = ({ afterimg, beforeimg }) => {
    const firstImageRef = useRef(null);
    const secondImageRef = useRef(null);

    const handleMouseDown = () => {
        if (secondImageRef.current) {
            secondImageRef.current.style.opacity = '1';
        }
    };

    const handleMouseUp = () => {
        if (secondImageRef.current) {
            secondImageRef.current.style.opacity = '0';
        }
    };

    return (
        <div
            className="flex flex-col justify-center items-center relative w-full"
        >

            <div className='absolute top-0 left-0 w-full h-full z-50'
                        onMouseDown={handleOnmouseDown}
                        onMouseUp={handleOnmouseUp}
                        onTouchStart={handleOnmouseDown}
                        onTouchEnd={handleOnmouseUp}

            ></div>

            {/* After Image */}
            <img
                className="transition-all rounded-xl duration-500 w-full"
                ref={firstImageRef}
                src={afterimg}
                alt="After"
            />

            {/* Before Image */}
            <img
                className="absolute rounded-xl transition-all duration-500 w-full opacity-0 z-30"
                ref={secondImageRef}
                src={beforeimg}
                alt="Before"
            />
        </div>
    );
};

export default ImageTransition;
