
import { Suspense, lazy } from "react";
import Heading from "../Heading/Heading";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import ShoeModel from "../ProductVisualization3d/Furniture/Model/ShoeModel";


const ShoeModel = lazy(() => import('../ProductVisualization3d/Furniture/Model/ShoeModel'));

const Model3D = () => {

  return (
    <div className=" ">
      <Heading
        className="md:pt-12 md:pb-7"
        titleClassName="w-[500px]"
        title="3D MODEL"
      />
      <div className="2xl:container 2xl:mx-auto">
        {/* <div className='flex justify-center'>
                    <img loading="lazy" className='w-[350px]' src='/img/3d/chair.png' />
                </div> */}

        <div className="flex justify-center">
          <div className='h-[320px] md:h-[500px] w-full md:w-[700px]'>
            {/* <ViewModel
              imgSample={"/model_image/w-Camera_frame01 copy.png"}
              imageList={showImageList}
            ></ViewModel> */}

            <Suspense fallback={<div className="flex justify-center items-center  ">
              {/* <img loading="lazy" className="md:mt-16 " src="/img/shoeLogo2.png" /> */}
              <LazyLoadImage
                className="md:mt-16 "
                 src="/img/shoeLogo2.webp"
                effect="blur" />
            </div>}>
              <ShoeModel />
            </Suspense>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Model3D;
