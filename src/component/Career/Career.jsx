import "./career.css";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";

const Career = () => {
    const submitCvFunc = () => {
        alert("Thank you for submitting your CV. We will get back to you soon!")
    }
  return (
    <div className="bg-[#F3F0F1] h-[100vh]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center ">
          <div className="w-[450px] mt-[100px]">
            <h1 className="text-[30px] font-bold text-[#57524B]">WE ARE</h1>
            <h1 className="text-[140px] font-bold leading-[110px] text-[#57524B] -ml-2">HIRING</h1>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[450px] mt-5  border-black border-l-2 pl-3">
            <div>
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
          </div>
        </div>

       <div className="flex justify-center mt-7">
       <div className="w-[450px]"> 
            <div className="flex flex-col items-start">
                <div className="flex justify-center items-center gap-2">
                    <SlCalender className="text-[#92988D]"/>
                <h1>APPLY BEFORE</h1>
                </div>
                <h1>31st July, 2024 </h1>
            </div>
            <div className="flex flex-col items-start">
            <div className="flex justify-center items-center gap-2">
            <MdOutlineEmail className="text-[#92988D]"/> 
            <h1>AT</h1>
            </div>
            <h1>career@thekowcompany.com</h1>
            </div>
        </div>

       </div>
      </div>
    </div>
  );
};

export default Career;
