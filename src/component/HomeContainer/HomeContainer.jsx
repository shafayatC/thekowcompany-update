

import { Route } from 'react-router-dom'
import Navbar from '../navber/navbar'
import ProductVideo from '../ProductVideo/ProductVideo'
import WelcomePage from '../welcomePage/welcomePage'
import DivSliderParrent from '../slider/divSliderParrent'
import Record from '../record/record'
import Retouched from '../Retouched/Retouched'
import Integration from '../Integration/Integration'
import TheSquad from '../TheSquad/TheSquad'
import BluePrint from '../BluePrint/BluePrint'
import IndustryTrends from '../IndustryTrends/IndustryTrends'
import GetUpdate from '../GetUpdate/GetUpdate'
import Footer from '../footer/footer'
import Slider3D from '../slider/Slider3D'
// import TheSquadSlide from '../TheSquad/TheSquadSlide'
import VirtualTour from '../VirtualTour/VirtualTour'
import ScrolTop from '../ScrolTop/ScrolTop'
import ProductVideoLatest from '../ProductVideo/ProductVideoLatest'
import ThreeDModelContainer from '../ThreeDModelContainer/ThreeDModelContainer'
import NavbarHome from '../navber/navbarHome'
import ProductVisualSlider from '../../component3d/Product/ProductVisualSlider'
import ProductVideoLatestMother from '../ProductVideo/ProductVideoLatestMother'
import GetUpdateOld from '../GetUpdate/GetUpdateOld'
import { ScrollEffect } from '../scrollEffect/ScrollEffect'

function HomeContainer() {

    const tagList = ["Retouching", "Recoloring", "Editing", "3D Modeling", "Texture Creation"];


    return (
        <>
            <ScrolTop />
            {/* <Navbar /> */}
            <NavbarHome />
            <div className="bg-[#DEE2E2] bgImage pb-3 flex flex-col relative">
                {/* <img loading="lazy" src='/circle-bg.svg' /> */}
                <ProductVideoLatestMother
                    videoUrl="/video/The Kow Company_video.mp4"
                    loadingImg="/video/loading-image.png"
                    tagList={tagList} />
                <ScrollEffect offset={100}>
                    <WelcomePage />
                </ScrollEffect>
                <ScrollEffect offset={100}>
                    <ThreeDModelContainer />
                </ScrollEffect>
                <ScrollEffect offset={100}>
                    <DivSliderParrent />
                </ScrollEffect>
                <ScrollEffect offset={100}>
                    <Slider3D />
                </ScrollEffect>
                {/* <ProductVisualSlider/> */}
                <ScrollEffect offset={100}>
                    <Record />
                </ScrollEffect>
                    <Retouched />
                <ScrollEffect id="integration" offset={100}>
                    <Integration />
                </ScrollEffect>
                {/* <TheSquadSlide /> */}
                {/* <TheSquad /> */}
                <ScrollEffect offset={100}>
                    <BluePrint />
                </ScrollEffect>
                <ScrollEffect id="trends" offset={100}>
                    <IndustryTrends />
                </ScrollEffect>
                {/* <VirtualTour /> */}
                <ScrollEffect offset={100}>
                    <GetUpdate />
                </ScrollEffect>
                {/* <GetUpdateOld/> */}
            </div>
            <Footer />

        </>
    )
}

export default HomeContainer
