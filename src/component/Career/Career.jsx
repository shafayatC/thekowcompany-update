import "./career.css";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import CareerMail from "./careerMail";

const Career = () => {
    const [jobCircular] = useState([
        {
            id: 1,
            title: "Sales Executive",
            date: "31st July, 2024"
        },
        {
            id: 2,
            title: "UI/UX Designer",
            date: "31st July, 2024"
        },
        {
            id: 3,
            title: "Image Editor",
            date: "31st July, 2024"
        },
        {
            id: 4,
            title: ".NET Developer",
            date: "31st July, 2024"
        }
    ])
    const [isOpen, setIsOpen] = useState(false);
    const [cvData, setCvData] = useState({});
    const submitCvFunc = (data) => {
        setCvData(data);
        setIsOpen(true); 
    }

    const onClose = () => {
        console.log("closed");
        setIsOpen(false);
    }

    return (
        <>
            <div className="career-bg h-[100vh]">

                <div className="container mx-auto">
                    <div className="flex flex-col items-center ">
                        <div className="w-full md:w-[450px] mt-[100px] text-center md:text-left">
                            <h1 className="text-[30px] font-bold text-[#57524B]">WE ARE</h1>
                            <h1 className="text-[90px] md:text-[140px] font-bold leading-[80px] md:leading-[110px] text-[#57524B] -ml-2">HIRING</h1>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className=" md:w-[450px] mt-5  border-black border-l-2 pl-3">

                            {
                                jobCircular.map((item, index) =>
                                    <div key={index}>
                                        <button onClick={() => submitCvFunc(item)} className="bg-gray-200 px-4 py-1 mb-2 text-left rounded-md w-[140px]">
                                           {item.title}
                                        </button>
                                    </div>
                                )

                            }
                            {/* <div>
                                <button onClick={() => submitCvFunc()} className="bg-gray-200 px-4 py-1 mb-2 text-left rounded-md w-[140px]">
                                    Sales Executive
                                </button>
                            </div>
                            <div>
                                <button onClick={() => submitCvFunc()} className="bg-gray-200 px-4 py-1 mb-2 text-left  rounded-md w-[140px]">
                                    UI/UX Designer
                                </button>
                            </div>
                            <div>
                                <button onClick={() => submitCvFunc()} className="bg-gray-200 px-4 py-1 mb-2 text-left  rounded-md w-[140px]">
                                    Image Editor
                                </button>
                            </div>
                            <div>
                                <button onClick={() => submitCvFunc()} className="bg-gray-200 px-4 py-1 text-left  rounded-md w-[140px]">
                                    .NET Developer
                                </button> 
                        </div>
                        */}
                        </div>
                    </div>

                    <div className="flex justify-center mt-7">
                        <div className="md:w-[450px]">
                            <div className="flex flex-col justify-center items-center md:items-start ">
                                <div className="flex justify-center items-center gap-2">
                                    <SlCalender className="text-green-800" />
                                    <h1>APPLY BEFORE</h1>
                                </div>
                                <h1 className="text-xs md:pl-5">31st July, 2024 </h1>
                            </div>
                            <div className="flex flex-col justify-center items-center md:items-start pt-5 md:pt-0 ">
                                <div className="flex justify-center items-center gap-2">
                                    <MdOutlineEmail className="text-green-800 text-xl" />
                                    <h1>AT</h1>
                                </div>
                                <h1 className="text-xs md:pl-5">career@thekowcompany.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CareerMail cvData={cvData} isOpen={isOpen} onClose={onClose}/>
        </>
    );
};

export default Career;
