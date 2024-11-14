import React from "react";
import HeaderOne from "../microComponent/HeaderOne";
import ParagraphOne from "../microComponent/ParagraphOne";

const SectionTwo = () => {
  return (
    <div className="w-[671px] ml-[52px]  flex flex-col ">
      <HeaderOne>1. Retouched.ai API Resources</HeaderOne>
      <ParagraphOne>
        Welcome to the Retouched.AI API documentation. Through this set of APIs,
        users can easily integrate professional image editing services into
        their applications. Users can sign up, verify their accounts, reset
        passwords, and submit images for services such as background removal,
        color correction, and retouching etc. Additionally, users can include
        notes and file attachments for relevant information.
      </ParagraphOne>
    </div>
  );
};

export default SectionTwo;
