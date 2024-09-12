import { HeadProvider, Meta } from "react-head";
import ScrolTop from "../../component/ScrolTop/ScrolTop";
import Contact3D from "../Contact3D/Contact3D";
import Footer3D from "../Footer3D/Footer3D";
import Navbar3D from "../Navbar3D/Navbar3D";
import StartPage from "./StartPage/StartPage";
import TEPage1 from "./TEPage1/TEPage1";


const TechEquipments = () => {
    return (
        <>
            <HeadProvider>
                <Meta name="robots" content="noindex" />
            </HeadProvider>
            <div>
                <ScrolTop />
                <Navbar3D />
                <StartPage />
                <TEPage1 />
                <Contact3D />
                <Footer3D />
            </div>
        </>
    );
};

export default TechEquipments;