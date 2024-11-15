import React from 'react';
import HeaderOne from '../microComponent/HeaderOne';
import ParagraphOne from '../microComponent/ParagraphOne';

const SectionFive = () => {
    return (
        <div className=" flex flex-col ">
      <HeaderOne>4. Conclusion</HeaderOne>
      <ParagraphOne className="mb-[28px]">
      This documentation provides a foundational understanding for integrating with the Retouched.AI
      services. For further assistance, please email our technical support team at <span className='text-[#009665] font-bold'>info@thekowcompany.com</span>
      </ParagraphOne>
      <p className='text-[#9F9F9F] text-[12px] leading-6 font-anek-latin'>© 2024 The Kow Company Ltd. All rights reserved. Digital Asset Management</p>

    </div>
    );
};

export default SectionFive;