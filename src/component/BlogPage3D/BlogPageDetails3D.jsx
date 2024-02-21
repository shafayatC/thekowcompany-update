import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LocalDataFor3D } from "../../localData/localData";

const BlogPageDetails3D = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    setBlogData(LocalDataFor3D);
    console.log(blogData);
  }, []);
  return (
    <div className="bg-white pt-28">
      <div className="bg-[#DEE2E2]">
        <div className="container mx-auto">
          <div className="pt-40 pb-5 sm:pb-20 flex flex-col gap-40">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:justify-items-center justify-center items-end gap-12 px-2 md:px-0">
              <div>
                {/* <h1 className='text-[24px] leading-3 font-semibold text-end'>Easy Product</h1> */}
                <h1 className="text-[24px] font-semibold text-end border-b-2 border-[#7C9C30]">
                  {blogData && blogData[0].title}
                </h1>
                <h1 className="text-[16px] font-semibold text-end pt-5">
                  {blogData && blogData[0].date}
                </h1>

                <p className="text-xs text-justify pt-10 ">
                  {blogData && blogData[0].metaDescription}.......
                </p>

                <div className="flex justify-end pt-4 ">
                  <Link
                    to={`/3d/industry-trends-details/${
                      blogData && blogData[0].id
                    }`}
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
              <div>
                <img
                  loading="lazy"
                  src={blogData && blogData[0].thumb}
                  alt="trends photo"
                  className="shadow-xl shadow-slate-400 w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:justify-items-center justify-center items-end gap-12 px-2 md:px-0">
              <div>
                <img
                  loading="lazy"
                  src={blogData && blogData[1].thumb}
                  width={1200}
                  alt="trends photo"
                  className="shadow-xl shadow-slate-400"
                />
              </div>
              <div>
                {/* <h1 className='text-[24px] leading-3 font-semibold text-start'>Top 8</h1> */}
                <h1 className="text-[24px] font-semibold text-start border-b-2 border-[#7C9C30]">
                  {blogData && blogData[1].title}
                </h1>
                <h1 className="text-[16px] font-semibold text-start pt-5">
                  {blogData && blogData[1].date}
                </h1>

                <p className="text-xs text-justify pt-10 ">
                  {blogData && blogData[1].metaDescription}.......
                </p>

                <div className="flex justify-start pt-4 ">
                  <Link
                    to={`/3d/industry-trends-details/${
                      blogData && blogData[1].id
                    }`}
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
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:justify-items-center justify-center items-end gap-12 px-2 md:px-0">
              <div>
                {/* <h1 className='text-[24px] leading-3 font-semibold text-end'>5 Important</h1> */}
                <h1 className="text-[24px] font-semibold text-end border-b-2 border-[#7C9C30]">
                  {blogData && blogData[2].title}
                </h1>
                <h1 className="text-[16px] font-semibold text-end pt-5">
                  {blogData && blogData[2].date}
                </h1>

                <p className="text-xs text-justify pt-10 ">
                  {blogData && blogData[2].metaDescription}.......
                </p>

                <div className="flex justify-end pt-4 ">
                  <Link
                    to={`/3d/industry-trends-details/${
                      blogData && blogData[2].id
                    }`}
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
              <div>
                <img
                  loading="lazy"
                  src={blogData && blogData[2].thumb}
                  width={1200}
                  alt="trends photo"
                  className="shadow-xl shadow-slate-400"
                />
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:justify-items-center justify-center items-end gap-12 px-2 md:px-0">
              <div>
                <img
                  loading="lazy"
                  src={blogData && blogData[3].thumb}
                  width={1200}
                  alt="trends photo"
                  className="shadow-xl shadow-slate-400"
                />
              </div>
              <div>
                {/* <h1 className='text-[24px] leading-3 font-semibold text-start'>Top 8</h1> */}
                <h1 className="text-[24px] font-semibold text-start border-b-2 border-[#7C9C30]">
                  {blogData && blogData[3].title}
                </h1>
                <h1 className="text-[16px] font-semibold text-start pt-5">
                  {blogData && blogData[3].date}
                </h1>

                <p className="text-xs text-justify pt-10 ">
                  {blogData && blogData[3].metaDescription}.......
                </p>

                <div className="flex justify-start pt-4 ">
                  <Link
                    to={`/3d/industry-trends-details/${
                      blogData && blogData[3].id
                    }`}
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
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:justify-items-center justify-center items-end gap-12 px-2 md:px-0">
              <div>
                {/* <h1 className='text-[24px] leading-3 font-semibold text-end'>Easy Product</h1> */}
                <h1 className="text-[24px] font-semibold text-end border-b-2 border-[#7C9C30]">
                  {blogData && blogData[4].title}
                </h1>
                <h1 className="text-[16px] font-semibold text-end pt-5">
                  {blogData && blogData[4].date}
                </h1>

                <p className="text-xs text-justify pt-10 ">
                  {blogData && blogData[4].metaDescription}.......
                </p>

                <div className="flex justify-end pt-4 ">
                  <Link
                    to={`/3d/industry-trends-details/${
                      blogData && blogData[4].id
                    }`}
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
              <div>
                <img
                  loading="lazy"
                  src={blogData && blogData[4].thumb}
                  alt="trends photo"
                  className="shadow-xl shadow-slate-400 w-full h-full"
                />
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 md:justify-items-center justify-center items-end gap-12 px-2 md:px-0">
              <div>
                <img
                  loading="lazy"
                  src={blogData && blogData[5].thumb}
                  width={1200}
                  alt="trends photo"
                  className="shadow-xl shadow-slate-400"
                />
              </div>
              <div>
                {/* <h1 className='text-[24px] leading-3 font-semibold text-start'>Top 8</h1> */}
                <h1 className="text-[24px] font-semibold text-start border-b-2 border-[#7C9C30]">
                  {blogData && blogData[5].title}
                </h1>
                <h1 className="text-[16px] font-semibold text-start pt-5">
                  {blogData && blogData[5].date}
                </h1>

                <p className="text-xs text-justify pt-10 ">
                  {blogData && blogData[5].metaDescription}.......
                </p>

                <div className="flex justify-start pt-4 ">
                  <Link
                    to={`/3d/industry-trends-details/${
                      blogData && blogData[5].id
                    }`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageDetails3D;
