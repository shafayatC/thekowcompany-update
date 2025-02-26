import { HeadProvider, Meta, Title } from "react-head";
import ScrolTop from "../../component/ScrolTop/ScrolTop";
import { ScrollEffect } from "../../component/scrollEffect/ScrollEffect";
import Integrations from "../Apps&Integration/Apps&Integrations";
import Blog2D from "../Blog2D/Blog2D";
import ChoosePlan from "../ChoosePlan/ChoosePlan";
import Footer2D from "../Footer2D/Footer2D";
import ImageSlider from "../ImageSlider/ImageSlider";
import Navbar2D from "../Navbar2D/Navbar2D";
import OrderGuide from "../OrderGuide/OrderGuide";
import Record2d from "../Record/Record2d";
import StartPage from "../StartPage/StartPage";
import VideoSliderNew from "../VideoSlider/VideoSliderNew";
import VideoSlider from "../VideoSlider/VideoSlider";


const Container2D = () => {
    return (
        <>
         <HeadProvider>
            <Title>The KOW Company 2D</Title>
            <Meta name="description" content="Transform your media with expert image & video editing services. Elevate your content and captivate your audience with stunning visuals."/>
        </HeadProvider>
            <ScrolTop />
            <Navbar2D />
            <div className="bg-[#DEE2E2] bgImage">
                <StartPage />
                {/* <ScrollEffect offset={100}> */}
                    <Record2d />
                {/* </ScrollEffect> */}
                {/* <ScrollEffect id="services" offset={100}> */}
                    <ImageSlider />
                {/* </ScrollEffect> */}
                {/* <VideoSlider /> */}
                {/* <ScrollEffect offset={100}> */}
                    <VideoSliderNew />
                {/* </ScrollEffect> */}
                {/* <ScrollEffect id="apps" offset={100}> */}
                    <Integrations />
                {/* </ScrollEffect> */}
                {/* <ScrollEffect id="price" offset={100}> */}
                    <ChoosePlan />
                {/* </ScrollEffect> */}
                {/* <LetsTalk /> */}
                {/* <ScrollEffect id="order-guide" offset={100}> */}
                    <OrderGuide />
                {/* </ScrollEffect> */}
                {/* <ScrollEffect id="2d-trends" offset={100}> */}
                    <Blog2D />
                {/* </ScrollEffect> */}
                <Footer2D />
            </div>
        </>
    );
};

export default Container2D;