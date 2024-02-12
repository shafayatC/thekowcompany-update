import React from 'react';
import Navbar3D from '../Navbar3D/Navbar3D';
import StartPage from '../StartPage/StartPage';
import About3D from '../About3D/About3D';
import Services3D from '../Services3D/Services3D';
import Visualization from '../Visualization/Visualization';
import VisualizationSlider from '../Visualization/VisualizationSlider';
import ProductVisualization from '../Product/ProductVisualization';
import ProductVisualSlider from '../Product/ProductVisualSlider';
import Model3D from '../Model3D/Model3D';
import Trends3D from '../Trends3D/Trends3D';
// import Contact3D from '../Contact3D/Contact3D';
import Footer3D from '../Footer3D/Footer3D';
import Video3D from '../Video3D/Video3D';
import ScrolTop from '../../component/ScrolTop/ScrolTop';
import ProductVideoLatest from '../../component/ProductVideo/ProductVideoLatest';
import VisualizationSliderStatic from '../Visualization/VisualizationSliderStatic';
import GetUpdate3D from '../GetUpdate3D/GetUpdate3D';
import { ScrollEffect } from '../../component/scrollEffect/ScrollEffect';


const Container3D = () => {
    return (
        <div>
            <ScrolTop />
            <Navbar3D />
            <ProductVideoLatest
                videoUrl="/video/3dVideoPresentation.mp4"
                loadingImg="/video/3dvideo_loading.png" />

            {/* <StartPage /> */}
            <ScrollEffect offset={100}>
                <About3D />
            </ScrollEffect>
            <ScrollEffect offset={100}>
                <Services3D />
            </ScrollEffect>
            {/* <Visualization /> */}
            {/* <VisualizationSlider /> */}
            <ScrollEffect offset={100}>
                <VisualizationSliderStatic />
            </ScrollEffect>
            <ScrollEffect offset={100}>
                <ProductVisualization />
            </ScrollEffect>
            <dov className="flex flex-col bg-[#f1f4ed] bgImage-2 ">
                <ScrollEffect offset={100}>
                    <ProductVisualSlider />
                </ScrollEffect>
                <ScrollEffect offset={100}>
                    <Model3D />
                </ScrollEffect>
                <ScrollEffect offset={100}>
                    <Trends3D />
                </ScrollEffect>
                <ScrollEffect offset={100}>
                    <Video3D />
                </ScrollEffect>
                <ScrollEffect offset={100}>
                    <GetUpdate3D />
                </ScrollEffect>
                {/* <Contact3D /> */}
            </dov>

            <Footer3D />
        </div>
    );
};

export default Container3D;