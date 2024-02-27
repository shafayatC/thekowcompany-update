import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LocalDataFor3D } from '../../localData/localData';
import ScrolTop from '../../component/ScrolTop/ScrolTop';
import Navbar3D from '../Navbar3D/Navbar3D';
import Footer3D from '../Footer3D/Footer3D';
import Page7 from '../Trends3D/Page7';
import { HeadProvider, Meta, Title } from 'react-head';
import { freshContent } from '../../comonFunc/comonFunc';

const Blog3D = () => {
    const [blogData, setBlogData] = useState([]);
    const param = useParams();

    useEffect(() => {
        const blogData = LocalDataFor3D.filter((item) => item.id == param.id)[0];
        setBlogData(blogData);
        console.log(blogData)
    }, [])
    return (
        <>
            {
                blogData &&
                <HeadProvider>
                    <Title>{blogData.title}</Title>
                    <Meta name="description" content={blogData.metaDescription} />
                    <Meta property='og:title' content={blogData.title} />
                    <Meta property='og:image' content={window.location.href + blogData.thumb} />
                    <Meta property='og:description' content={blogData.metaDescription} />
                    <Meta property='og:url' content={window.location.href} />
                </HeadProvider>
            }

            <ScrolTop />
            <Navbar3D />
            <div className='bg-[#DEE2E2]'>
                <div className="pb-40 overflow-hidden ">
                    <div className="w-full pt-24 relative">
                        <div
                            className="absolute top-0 left-0 w-full h-[90%] opacity-60 bg-no-repeat bg-bottom  bg-[length:130%_170%]"
                            style={{
                                backgroundImage: `url(${blogData.thumb})`,
                            }}
                        ></div>
                        <div className="container mx-auto relative z-20">
                            <div className="w-full h-full relative">
                                <div className="w-full h-full">
                                    <img
                                        className="w-4/5 shadow-kow-shadow-sm"
                                        src={blogData.thumb}
                                        alt=""
                                    />
                                </div>
                                <div className="absolute bottom-0 -right-[100px] -z-10 w-[400px] h-[400px] opacity-60">
                                    <img
                                        src="/img/Blog-Images/circle.webp"
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="bg-[#7c9c30] w-full md:w-[590px] shadow-kow-shadow-sm py-10 pl-10 absolute -bottom-20 right-0 flex flex-col gap-3">
                                    <h1 className="text-white text-3xl pb-1 font-bold pr-10 border-b-[1px] border-[#6f8a0e]">
                                        {blogData.title}
                                    </h1>
                                    <span className="text-lg">{blogData.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className='blogDetail' dangerouslySetInnerHTML={{ __html: blogData.description }} />
                </div>

                <Page7 />
            </div>
            <Footer3D />
        </>
    );
};

export default Blog3D;