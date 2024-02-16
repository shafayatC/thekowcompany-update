import React from "react";
import { InlineWidget } from "react-calendly";
import Footer from "../footer/footer";
import NavbarOld from "../navber/navbar";
import ScrolTop from "../ScrolTop/ScrolTop";
function BookACall() {
  return (
    <>
    {/* <div className="w-full bg-[#dee2e2]">
    
    </div> */}
    <ScrolTop/>
    <NavbarOld/>
      <div className="h-full md:h-[800px]">
        <InlineWidget 
        url="https://calendly.com/talk2kow/"
        styles={{
          height: '700px'
        }}
         />
      </div>
      <Footer />
    </>

  );
}

export default BookACall;
