import WelcomePage from '../welcomePage/welcomePage'
import DivSliderParrent from '../slider/divSliderParrent'
import Record from '../record/record'
import Retouched from '../Retouched/Retouched'
import Integration from '../Integration/Integration'
import BluePrint from '../BluePrint/BluePrint'
import IndustryTrends from '../IndustryTrends/IndustryTrends'
import GetUpdate from '../GetUpdate/GetUpdate'
import Footer from '../footer/footer'
import Slider3D from '../slider/Slider3D'
import ScrolTop from '../ScrolTop/ScrolTop'
import ThreeDModelContainer from '../ThreeDModelContainer/ThreeDModelContainer'
import NavbarHome from '../navber/navbarHome'
import ProductVideoLatestMother from '../ProductVideo/ProductVideoLatestMother'
import { ScrollEffect } from '../scrollEffect/ScrollEffect'
import { HeadProvider, Meta, Title } from 'react-head'

function HomeContainer() {

    const tagList = ["Retouching", "Recoloring", "Editing", "3D Modeling", "Texture Creation"];


    return (
        <>
        <HeadProvider>
            <Title>The KOW Company</Title>
            <Meta name="description" content="Discover excellence in Ecommerce and Studio Image & 3D Post-Production at The KOW Company. Our creative prowess and cutting-edge AI integration redefine product image enhancement. Elevate your brand with captivating visuals that surpass expectations and leave a lasting impression."/>
        </HeadProvider>
            <ScrolTop />
            <NavbarHome />
            <div className="bg-[#DEE2E2] bgImage pb-3 flex flex-col relative">
                <ProductVideoLatestMother
                    videoUrl="/video/The Kow Company_video.mp4"
                    loadingImg="/video/loading-image.webp"
                    tagList={tagList} />
                <ScrollEffect offset={100}>
                    <WelcomePage />
                </ScrollEffect>
                <ScrollEffect offset={100}>
                    <ThreeDModelContainer />
                </ScrollEffect>
                <DivSliderParrent />
                <Slider3D />
                <Record />
                <Retouched />
                <Integration />
                <BluePrint />
                <IndustryTrends />
                <GetUpdate />
            </div>
            <Footer />

        </>
    )
}

export default HomeContainer
