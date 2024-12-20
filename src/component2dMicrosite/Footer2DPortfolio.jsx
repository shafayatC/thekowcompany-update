import React from 'react';
import { Link } from 'react-router-dom';

const Footer2DPortfolio = () => {
    return (
        <div className='bg-[#4AD991] px-16 py-[26px] rounded-t-[12px]'>
            <div className='2xl:container 2xl:mx-auto'>
                <div className='flex justify-between'>
                    <Link to={'/contact-us'} className='text-4xl font-bold text-black'>Contact Us</Link>
                    <div></div>
                </div>
            </div>
        </div>

    );
};

export default Footer2DPortfolio;