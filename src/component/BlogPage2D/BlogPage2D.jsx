

import { useEffect, useState } from "react";
import ScrolTop from "../ScrolTop/ScrolTop";
import Footer from "../footer/footer";
import Navbar from "../navber/navbar";
import { Link } from "react-router-dom";
import BlogPageDetails2D from "./BlogPageDetails2D"
import { HeadProvider, Meta, Title } from "react-head";
import { LocalDataFor2D } from "../../localData/localData2D";


const BlogPage2D = () => {

    const [blogData2d, setBlogData2d] = useState(null);
    
    useEffect(() => {
        setBlogData2d(LocalDataFor2D);
        console.log(window.location.origin);
    }, [])
    return (
        <>
            <HeadProvider>
                <Title> CREATIVE INDUSTRY TRENDS!</Title>
                <Meta name="description" content={`${blogData2d && blogData2d[0].title}`} />
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
                            console.log(blogData2d)
                        }
                        <div className='flex flex-col md:grid md:grid-cols-3 justify-center items-center gap-3 pt-3'>
                            {
                                blogData2d && blogData2d.map((item, index) =>
                                    index < 3 &&
                                    <Link to={"/2d/industry-trends-details/" + item.id + ""} key={index} className='' aria-label="industry trends details">
                                        <div className="md:h-[180px] lg:h-[230px] xl:h-[300px] flex flex-col justify-center overflow-hidden">
                                            <img
                                                className="w-full h-[230px]  xl:h-[300px] "
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
                <BlogPageDetails2D/>
            </div>
            <Footer />
        </>
    );
};

export default BlogPage2D;