import React, { Suspense, lazy } from "react";
// import ViewModel from '../ViewModel/ViewModel';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import ShoeModel from '../../component3d/ProductVisualization3d/Furniture/Model/ShoeModel';

const ShoeModel = lazy(() =>
  import("../../component3d/ProductVisualization3d/Furniture/Model/ShoeModel")
);

const ThreeDModelContainer = () => {
  return (
    <>
      <div className="py-10 w-full bg-gray-200 flex items-center">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col gap-1 items-center justify-center">
            <div className="flex flex-col gap-1 w-full  px-16">
              <div>
                <img
                  loading="lazy"
                  className="w-[160px] h-[70px]"
                  src="/img/Holosnap-Logo_H_Color.webp"
                />
              </div>

              <p className="text-black text-justify">
                Holosnap is an advanced AI-powered 3D asset creation tool that
                seamlessly converts 2D images into intricate 3D point clouds.
                Utilizing cutting-edge artificial intelligence algorithms, it
                automates the transformation of 2D images into 3D Models.
                Holosnap excels at analyzing 2D images to extrapolate depth
                information, facilitating the reconstruction of highly detailed
                and accurate 3D point clouds by identifying key features,
                textures, and contours.
              </p>
              <div className="flex justify-center mt-3 mb-5 md:mb-0">
                <Link aria-label="contact-us" to="/contact-us">
                  <button className="text-xs   md:text-sm font-semibold text-white px-6 py-2 bg-[#7C9C30] rounded-3xl">
                    Explore Holosnap
                  </button>
                </Link>
              </div>
            </div>
            {/* <div className='h-[320px] md:h-[500px] w-full md:w-[570px]'>
                            <Suspense fallback={<div className='flex justify-center  items-center'>
                               
                                <img loading="lazy" className='md:mt-16 md:ml-2' src='/img/shoeLogo.webp' />
                            </div>}>
                                <ShoeModel />
                            </Suspense>
                            
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeDModelContainer;
