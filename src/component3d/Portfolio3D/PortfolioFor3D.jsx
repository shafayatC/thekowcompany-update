import Portfolio3D from "./Portfolio3D";
import Portfolio3DTest from "./Portfolio3DTest";
import PortfolioTab from "./PortfolioTab";


const PortfolioFor3D = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <Portfolio3D/>
            </div>
            <div className="hidden sm:block lg:hidden">
               <PortfolioTab/> 
            </div>
            <div className="block sm:hidden">
                <Portfolio3DTest/>
            </div>
        </div>
    );
};

export default PortfolioFor3D;