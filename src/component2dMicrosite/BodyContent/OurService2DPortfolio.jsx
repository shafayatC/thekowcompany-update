import React from 'react';

const OurService2DPortfolio = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-white px-12 py-9 flex flex-col gap-8 items-center rounded-xl'>
                <h2 className='text-5xl font-bold text-[#737373]'>Our Services</h2>
                <div className='grid grid-cols-3 gap-[38px]'>
                    <a href='#' className='group relative flex justify-center items-center'>
                        <img src="./img/2D-Microsite/ourservices/ourservices.webp"/>
                        <div className='transition-all duration-500 bg-white opacity-0 group-hover:opacity-55 absolute w-full h-full'></div>
                        <h3 className='transition-all duration-500 absolute text-6xl font-bold text-white group-hover:text-black w-full text-center'>Retouching Services</h3>
                    </a>
                
                    <a href='#' className='group relative flex justify-center items-center'>
                        <img src="./img/2D-Microsite/ourservices/ourservices2.webp"/>
                        <div className='transition-all duration-500 bg-white opacity-0 group-hover:opacity-55 absolute w-full h-full'></div>
                        <h3 className='transition-all duration-500 absolute text-6xl font-bold text-white group-hover:text-black w-full text-center'>Retouching Services</h3>
                    </a>
                    
                    <a href='#' className='group relative flex justify-center items-center'>
                        <img src="./img/2D-Microsite/ourservices/ourservices3.webp"/>
                        <div className='transition-all duration-500 bg-white opacity-0 group-hover:opacity-55 absolute w-full h-full'></div>
                        <h3 className='transition-all duration-500 absolute text-6xl font-bold text-white group-hover:text-black w-full text-center'>Retouching Services</h3>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurService2DPortfolio;