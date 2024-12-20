import React, { useRef } from 'react';

const ImageTransition = ({afterimg, beforeimg}) => {
    let firstImageRef = useRef();
    let secondImageRef = useRef();

    const handleOnmouseDown = (e) => {
        // const firstImage = firstImageRef.current;
        const secondImage = secondImageRef.current;
        // firstImage.style.opacity = "0";
        secondImage.style.opacity = "1";
    }
    const handleOnmouseUp = (e) => {
        // const firstImage = firstImageRef.current;
        const secondImage = secondImageRef.current;
        // firstImage.style.opacity = "1";
        secondImage.style.opacity = "0";
    }
    return (
        <div
            className='flex flex-col justify-center items-center relative w-full'
            onMouseDown={handleOnmouseDown}
            onMouseUp={handleOnmouseUp}
        >
            <img className='transition-all duration-500 w-full' ref={firstImageRef} src={afterimg} />
            <img className='absolute transition-all duration-500 w-full opacity-0 z-30' ref={secondImageRef} src={beforeimg} />
        </div>
    );
};

export default ImageTransition;