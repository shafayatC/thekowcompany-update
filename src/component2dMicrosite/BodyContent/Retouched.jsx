import React from 'react';

const Retouched = () => {
    return (
        <div className='container mx-auto bg-white mt-9'>
             <div className="  bg-white py-[36px]">
        <h1 className="w-full text-center text-[36px] font-bold leading-10 text-[#000] py-[23px]">
        Try the Ai powered background replacement solution with Retouched.ai
        </h1>
        
      </div>

      <div>
      <div className="pb-10">
          
          <div className="w-full flex justify-center items-center ">
            <iframe
              className="bg-white 2xl:h-[720px] h-[650px] w-[90%] border-4 border-[#255646] rounded-xl"
              src="https://www.retouched.ai"
              title="Embedded Website"
              frameBorder="0"
            
              allowFullScreen
            />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Retouched;