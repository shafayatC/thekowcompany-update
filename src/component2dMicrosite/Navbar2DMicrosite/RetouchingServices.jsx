import { useState } from "react";


const RetouchingServices = () => {
    const [activeDiv, setActiveDiv] = useState(1); // Default to the first div
    return (
        <div className="container mx-auto my-[36px]">
            <div className="flex justify-center items-center  bg-white rounded-lg border-2 border-[#155331]">
                <h1 className="w-[440px] text-[36px] font-bold leading-10 text-[#737373] py-[23px]">Retouching Services</h1>
                <h1 className="w-[730px] text-[24px] font-medium leading-8 text-[#737373] py-[23px]">Enhance and perfect images for a professional finish.</h1>
            </div>

            <div className="bg-white">
                <div>
                <div className="flex flex-col items-center space-y-4 p-8">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-[18px] bg-[#EDF5F3] px-6 py-2">
        <button
          className={`px-4 py-2 rounded-xl border border-[#FFF] shadow-xl ${
            activeDiv === 1 ? "bg-[#F5F7F7] text-[30px] text-[#0B2B23] px-9 font-medium leading-9 " : "text-[#9EA1A1] text-[30px] px-9 font-medium leading-9"
          }`}
          onClick={() => setActiveDiv(1)}
        >
          Toggle 1
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeDiv === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveDiv(2)}
        >
          Toggle 2
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeDiv === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveDiv(3)}
        >
          Toggle 3
        </button>
      </div>

      {/* Div Sections */}
      <div className="w-full max-w-md">
        {activeDiv === 1 && (
          <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-bold">Section 1</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Section 1"
              className="mt-4 w-full rounded"
            />
            <p className="mt-2 text-gray-600">This is the content for Section 1.</p>
          </div>
        )}
        {activeDiv === 2 && (
          <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-bold">Section 2</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Section 2"
              className="mt-4 w-full rounded"
            />
            <p className="mt-2 text-gray-600">This is the content for Section 2.</p>
          </div>
        )}
        {activeDiv === 3 && (
          <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-bold">Section 3</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Section 3"
              className="mt-4 w-full rounded"
            />
            <p className="mt-2 text-gray-600">This is the content for Section 3.</p>
          </div>
        )}
      </div>
    </div>
                </div>
            </div>
        </div>
    );
};

export default RetouchingServices;