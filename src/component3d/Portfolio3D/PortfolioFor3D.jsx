import Portfolio3D from "./Portfolio3D";
import Portfolio3DTest from "./Portfolio3DTest";


const PortfolioFor3D = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <Portfolio3D/>
            </div>
            <div className="block lg:hidden">
                <Portfolio3DTest/>
            </div>
        </div>
    );
};

export default PortfolioFor3D;