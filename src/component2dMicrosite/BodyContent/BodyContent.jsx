import React from 'react';
import TopPart2dPortfolio from './TopPart2dPortfolio';
import AboutUs from './AboutUs';

import OurService2DPortfolio from './OurService2DPortfolio';
import ImageTransition from './ImageTransition';
import RetouchingService from './RetouchingService';


const BodyContent = () => {
    return (
        <div className="flex flex-col gap-9">
            <TopPart2dPortfolio />
            <OurService2DPortfolio />
            <AboutUs/>
            <RetouchingService/>
            {/*start === for testing after before testing */}
            <div className="py-[60px] px-32">
                <ImageTransition 
                    afterimg={"./img/2D-Microsite/transitionImage/after-BB480LBB_260.webp"} 
                    beforeimg={"./img/2D-Microsite/transitionImage/before-BB480LBB_260.webp"} />
            </div>
            {/* end === for testing after before testing*/}

        </div>
    );
};

export default BodyContent;