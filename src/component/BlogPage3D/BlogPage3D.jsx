

import { useEffect, useState } from "react";
import { LocalDataFor3D } from "../../localData/localData";
import ScrolTop from "../ScrolTop/ScrolTop";
import Footer from "../footer/footer";
import Navbar from "../navber/navbar";
import BlogPageDetails from "./BlogPageDetails3D";
import { Link } from "react-router-dom";
import { HeadProvider, Meta, Title } from "react-head";


const BlogPage3D = () => {

    const [blogData, setBlogData] = useState(null);
    
    useEffect(() => {
        setBlogData(LocalDataFor3D);
        console.log(window.location.origin);
    }, [])
    return (
        <>
            <HeadProvider>
                <Title> CREATIVE INDUSTRY TRENDS!</Title>
                <Meta name="description" content={`${blogData && blogData[0].title}`} />
            </HeadProvider>
            <ScrolTop />
            <Navbar />
            <div className='bg bg-white'>
                <div className='container mx-auto'>
                    <div className="flex justify-center">
                        <h1 className='text-[40px] w-[610px] pt-28 font-bold border-b-2 border-[#7C9C30] '>
                            CREATIVE INDUSTRY TRENDS!
                        </h1>
                    </div>

                    <div className='pt-20'>
                        <h1 className='text-center text-2xl text-[#696666]'>RECENT POSTS</h1>
                        {
                            console.log(blogData)
                        }
                        <div className='flex flex-col md:grid md:grid-cols-3 justify-center items-center gap-3 pt-3'>
                            {
                                blogData && blogData.map((item, index) =>
                                    index < 3 &&
                                    <Link to={"/3d/industry-trends-details/" + item.id + ""} key={index} className='' aria-label="industry trends details">
                                        <div className="md:h-[180px] lg:h-[230px] xl:h-[260px]">
                                            <img
                                                className="w-full h-full"
                                                loading="lazy"
                                                src={item.thumb}
                                                width={350}
                                                alt='trends photo'
                                            />
                                        </div>

                                        <h1 className='text-center pt-3 font-semibold'>{item.title}</h1>
                                    </Link>

                                )
                            }

                        </div>
                    </div>


                </div>
                <BlogPageDetails />
            </div>
            <Footer />
        </>
    );
};

export default BlogPage3D;