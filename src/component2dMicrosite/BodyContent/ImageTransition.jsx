import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const ImageTransition = ({ afterImg, beforeImg, width, height }) => {
    const firstImageRef = useRef(null);
    const secondImageRef = useRef(null);

    const handleMouseDown = () => {
        const secondImage = secondImageRef.current;
        if (secondImage) {
            secondImage.style.opacity = '1';
        }
    };

    const handleMouseUp = () => {
        const secondImage = secondImageRef.current;
        if (secondImage) {
            secondImage.style.opacity = '0';
        }
    };

    return (
        <div
            className="relative flex flex-col justify-center items-center"
            style={{ width: width || '100%', height: height || 'auto' }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full z-50 cursor-pointer"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            ></div>
            <img
                className="transition-all rounded-xl duration-500 w-full h-full object-cover"
                ref={firstImageRef}
                src={afterImg}
                alt="After"
                style={{ position: 'relative' }}
            />
            <img
                className="absolute rounded-xl transition-all duration-500 w-full h-full opacity-0 z-30 object-cover"
                ref={secondImageRef}
                src={beforeImg}
                alt="Before"
            />
        </div>
    );
};

// PropTypes for validation
ImageTransition.propTypes = {
    afterImg: PropTypes.string.isRequired,
    beforeImg: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
};

// Default Props
ImageTransition.defaultProps = {
    width: '100%',
    height: 'auto',
};

export default ImageTransition;
