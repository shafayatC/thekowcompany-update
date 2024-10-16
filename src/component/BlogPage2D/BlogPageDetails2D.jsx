import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LocalDataFor2D } from "../../localData/localData2D";

const BlogPageDetails2D = () => {
  const [blogData2d, setBlogData2d] = useState(null);
  
  useEffect(() => {
    setBlogData2d(LocalDataFor2D);
    console.log(blogData2d);
  }, []);

  const isOdd = (num) => { return num % 2; }

  return (
    <div className="bg-white pt-28">
      <div className="bg-[#DEE2E2]">
        <div className="container mx-auto">
          <div className="pt-40 pb-5 sm:pb-20 flex flex-col gap-40">

            {
              blogData2d && blogData2d.map((item, index) =>
                <>
                  {
                    isOdd(index) ? 
                    
                    <div className="flex flex-col md:grid md:grid-cols-2 md:justify-items-center justify-center items-end gap-12 px-2 md:px-0">
                      <div className="max-h-[350px] xl:max-h-[450px]  flex flex-col justify-center overflow-hidden">
                        <img
                          loading="lazy"
                          src={item.thumb}
                          width={1200}
                          alt="trends photo"
                          className="shadow-xl shadow-slate-400"
                        />
                      </div>
                      <div>
                        <h1 className="text-[24px] font-semibold text-start border-b-2 border-[#7C9C30]">
                          {item.title}
                        </h1>
                        <h1 className="text-[16px] font-semibold text-start pt-5">
                          {item.date}
                        </h1>

                        <p className="text-xs text-justify pt-10 ">
                          {item.metaDescription}...
                        </p>

                        <div className="flex justify-start pt-4 ">
                          <Link
                            aria-label="Read more"
                            to={`/2d/industry-trends-details/${item.id}`}
                          >
                            <button
                              aria-label="readmore"
                              className="text-[11px]  font-semibold text-white px-8 py-1 bg-[#7C9C30] rounded-3xl"
                            >
                              Read More
                            </button>
                          </Link>

                        </div>
                      </div>
                    </div>
                    :
                      <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:justify-items-center justify-center items-end gap-12 px-2 md:px-0">
                        <div>
                          <h1 className="text-[24px] font-semibold text-end border-b-2 border-[#7C9C30]">
                            {item.title}
                          </h1>
                          <h1 className="text-[16px] font-semibold text-end pt-5">
                            {item.date}
                          </h1>

                          <p className="text-xs text-justify pt-10 ">
                            {item.metaDescription}...
                          </p>

                          <div className="flex justify-end pt-4 ">
                            <Link
                              aria-label="Read more"
                              to={`/2d/industry-trends-details/${item.id}`}
                            >
                              <button
                                aria-label="readmore"
                                className="text-[11px]  font-semibold text-white px-8 py-1 bg-[#7C9C30] rounded-3xl"
                              >
                                Read More
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="max-h-[350px] xl:max-h-[450px] flex flex-col justify-center overflow-hidden">
                          <img
                            loading="lazy"
                            src={item.thumb}
                            alt="trends photo"
                            className="shadow-xl shadow-slate-400 w-full h-full"
                          />
                        </div>
                      </div>
                  }
                </>
              )
            }

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageDetails2D;
