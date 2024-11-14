import HeaderOne from "../../componentAPI/microComponent/HeaderOne";
import ParagraphOne from "../../componentAPI/microComponent/ParagraphOne";
import NavbarAPI from "../../componentAPI/NavbarAPI";
import './style.css'

const APIDocs = () => {
    return (
        <>
            <div>
                <div>
                    <div className="sticky top-0 h-">

                    </div>
                    <NavbarAPI />
                    <section>

                        {/* sidebar */}
                        <div className="sticky top-0 ">
                            <div className="w-[308px]">
                                
                            <ParagraphOne>In this section, you will find the following detailed information</ParagraphOne> 
                            <div className=""></div>
                            </div>

                        </div>

                        {/* main content*/}
                        <div>
                            
                        </div>
                    </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="h-screen bg-slate-200"></div>
                    <div className="h-screen bg-slate-500"></div>
                </div>
            </div>
        </>
    );
};

export default APIDocs;