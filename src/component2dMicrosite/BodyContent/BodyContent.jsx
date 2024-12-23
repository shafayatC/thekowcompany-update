import React from 'react';
import TopPart2dPortfolio from './TopPart2dPortfolio';
import AboutUs from './AboutUs';

import OurService2DPortfolio from './OurService2DPortfolio';
import ImageTransition from './ImageTransition';
import RetouchingService from './RetouchingService';
import AmbienceEnhance from './AmbienceEnhance';
import GhostMannequin from './GhostMannequin';
import Retouched from './Retouched';


const BodyContent = () => {
    return (
        <div className="flex flex-col ">
            <TopPart2dPortfolio />
            <OurService2DPortfolio />
            <AboutUs/>
            <RetouchingService/>
            <AmbienceEnhance/>
            <GhostMannequin/>
            <Retouched/>
           

        </div>
    );
};

export default BodyContent;