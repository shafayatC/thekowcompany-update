import React from 'react';

const AboutUs = () => {
    return (
      <div className='container mx-auto mt-9 '>
          <div className='bg-white pb-9 pt-[72px]'>
            <div className='flex justify-center items-end gap-7  '>
                <div>
                    <img src='/img/2D-Microsite/images/Image 1.webp'/>
                </div>
                <div>
                    <img src='/img/2D-Microsite/images/Image 2.webp'/>
                </div>
                <div>
                    <img src='/img/2D-Microsite/images/Image 3.webp'/>
                </div>
            </div>
            <div className='flex justify-center items-center gap-12 mt-6'>
                <div className='w-[696px] flex flex-col gap-7'>
                    <h1 className='text-[36px] font-bold leading-10 text-[#737373]'>About Us</h1>
                    <p className='text-[20px] font-medium leading-7 text-[#737373]'>At The KOW Company, we excel in Ecommerce and Studio Image Post-Production, transforming visual concepts into captivating realities. With a keen eye for detail and creativity, our talented team elevates product images through precise editing and enhancement. From background removal to sophisticated retouching, we deliver impeccable visuals that make your products shine. We don’t just meet expectations – we surpass them, empowering your brand to stand out in the competitive market.</p>
                </div>
                <div>
                    <img src='/img/2D-Microsite/images/Gallery 2.webp'/>
                </div>
            </div>
        </div>
      </div>
    );
};

export default AboutUs;