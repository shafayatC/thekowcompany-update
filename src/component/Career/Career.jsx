import "./career.css";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import CareerMail from "./careerMail";

const Career = () => {
    const [jobCircular] = useState([
        {
            id: 1,
            title: "Creative Designer",
            description: `<div class="job-des">
<h1>Creative Designer for Marketing Team (Vacancy 02)</h1>
    <p>We strongly encourage you to read the whole circular prior to applying</p>
    
    <h3>Key Responsibilities:</h3>
    <ul>
        <li><b>Design Creation:</b> Develop and produce creative designs for various mediums including print, digital, and social media.</li>
        <li><b>Brand Consistency:</b> Ensure all designs align with the company’s brand guidelines and visual identity.</li>
        <li><b>Collaborative Projects:</b> Work closely with the marketing, product development, and sales teams to understand project requirements and deliver effective design solutions.</li>
        <li><b>Concept Development:</b> Brainstorm and develop innovative concepts for marketing campaigns, product launches, and promotional events.</li>
        <li><b>Revisions and Feedback:</b> Revise and improve designs based on feedback from stakeholders and team members.</li>
        <li><b>Software Proficiency:</b> Utilize design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, etc. to create high-quality designs.</li>
        <li><b>Trend Awareness:</b> Stay updated on the latest design trends, tools, and technologies to ensure the company’s visuals remain fresh and relevant.</li>
        <li><b>Project Management:</b> Manage multiple design projects simultaneously, ensuring timely delivery and high-quality output.</li>
    </ul>
    
    <h3>Qualifications:</h3>
    <ul>
        <li>Bachelor's degree in Graphic Design, Visual Arts, or a related field.</li>
        <li>1+ years of experience in graphic design or a related role.</li>
        <li>Strong portfolio showcasing a range of design projects and creative solutions.</li>
        <li>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>
        <li>Excellent visual design skills with a strong understanding of layout, typography, and color theory.</li>
        <li>Strong communication and collaboration skills.</li>
        <li>Ability to manage multiple projects and meet deadlines in a fast-paced environment.</li>
        <li>Attention to detail and a keen eye for aesthetics.</li>
    </ul>
    
    <h3>Preferred Qualifications:</h3>
    <ul>
        <li>Experience in the [industry/field] sector.</li>
        <li>Familiarity with web design and multimedia content development.</li>
        <li>Knowledge of HTML/CSS and web design principles.</li>
    </ul>
    
    <h3>What We Offer:</h3>
    <ul>
        <li>Competitive salary and benefits package.</li>
        <li>Opportunity to work with a dynamic and innovative team.</li>
        <li>Career growth and development opportunities.</li>
        <li>Creative and collaborative work environment.</li>
        <li>Access to the latest design tools and technologies.</li>
    </ul>
    
    <h3>Job Location:</h3>
    <p>Dhaka</p>
    
    <h3>Employment Status:</h3>
    <p>Full-time</p>
    
    <p><strong>Email at:</strong> <a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a></p>
    <p><strong>Email Before:</strong> 31st July 2024</p>
	</div>

`,
            date: "31 July, 2024",
        },
        {
            id: 2,
            title: "UI/UX Designer",
            description: `<div class="job-des">
  <h1>UI/UX Designer</h1>
    <p>The KOW Company Ltd is looking for a brilliant UI/UX designer to join our dynamic team and be the creative force behind our cutting-edge projects. As a UI/UX designer with 1-3 years of hands-on experience, you will craft seamless, visually stunning user experiences that leave a lasting impact.</p>
    
    <h3>Responsibilities:</h3>
    <ul>
        <li>Gather and evaluate user and client requirements in collaboration with product managers and developers.</li>
        <li>Illustrate design ideas using storyboards, process flows, wireframes, and sitemaps.</li>
        <li>Design graphic user interfaces and other creatives.</li>
        <li>Ideation in the Design System.</li>
        <li>Prepare and present rough drafts to internal teams and key stakeholders.</li>
        <li>Identify and troubleshoot UX problems.</li>
        <li>Conduct layout adjustments and responsive friendly UI Design.</li>
        <li>Knowing about requirement engineering.</li>
    </ul>
    
    <h3>Qualifications:</h3>
    <ul>
        <li>Proven work experience of 1 - 3 years.</li>
        <li>Knowledge of Design tools (e.g., Figma, Photoshop, Illustrator).</li>
        <li>Up-to-date knowledge of trendy designs.</li>
        <li>Team spirit and strong communication skills to collaborate with various stakeholders.</li>
        <li>Good time-management skills.</li>
        <li>BSc in Design, Computer Science, or a relevant field (Not needed if you are really good).</li>
    </ul>
    
    <p>If you think creatively and analytically sound, apply via the email address: <a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a> and specify in the subject line that you are “applying for a UI/UX hiring position.”</p> 
    <p><b>Email at:</b> <a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a></p>
    <p><b> Email Before:</b> 31st July 2024</p>

	</div>

`,
            date: "31 July, 2024",
        },
        {
            id: 3,
            title: "Strategy and Risk Analyst",
            description: `  <div class="job-des">
   <h1>Strategy and Risk Analyst for Marketing Team (Vacancy 01)</h1>
    <p><strong>We strongly encourage you to read the whole circular prior to applying</strong></p>

    <h3>Key Responsibilities:</h3>
    <ul>
        <li><strong>Market and Risk Analysis:</strong> Conduct market research to identify trends, opportunities, and threats. Analyze competitor strategies and assess risks in marketing campaigns, developing mitigation plans.</li>
        <li><strong>Data-Driven Insights:</strong> Collect and analyze marketing data to measure campaign effectiveness and provide actionable insights for performance improvement.</li>
        <li><strong>Strategic Collaboration:</strong> Work with the marketing team to refine strategies based on data analysis and market research. Ensure alignment with sales, product development, and finance teams.</li>
        <li><strong>Reporting and Improvement:</strong> Prepare detailed reports on market trends, risks, and marketing performance. Stay updated on industry trends and implement best practices for continuous improvement.</li>
    </ul>

    <h3>Qualifications:</h3>
    <ul>
        <li>Bachelor's degree in Marketing, Business Administration, Finance, or a related field. Master's degree preferred.</li>
        <li>3+ years of experience in a strategy, risk analysis, or marketing analytics role.</li>
        <li>Strong analytical skills with the ability to interpret complex data and make data-driven recommendations.</li>
        <li>Experience with market research, risk assessment, and strategic planning.</li>
        <li>Proficiency in data analysis tools and software (e.g., Excel, SQL, Tableau).</li>
        <li>Excellent communication and presentation skills.</li>
        <li>Strong attention to detail and problem-solving abilities.</li>
        <li>Ability to work independently and as part of a team in a fast-paced environment.</li>
    </ul>

    <h3>Preferred Qualifications:</h3>
    <ul>
        <li>Experience in the image post-production sector.</li>
        <li>Familiarity with digital marketing tools and platforms (e.g., Google Analytics, social media analytics).</li>
        <li>Project management experience.</li>
    </ul>

    <h3>What We Offer:</h3>
    <ul>
        <li>Competitive salary and benefits package.</li>
        <li>Opportunity to work with a dynamic and innovative team.</li>
        <li>Career growth and development opportunities.</li>
        <li>Flexible work environment.</li>
    </ul>

    <h3>Job Location:</h3>
    <p>Dhaka</p>

    <h3>Employment Status:</h3>
    <p>Full-time</p>

     <p><strong>Email at: </strong><a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a></p>
        <p><strong>Email Before:</strong> 31st July 2024</p>
</div>`,
            date: "31 July, 2024",
        },
        {
            id: 4,
            title: ".NET Developer",
            description: `  <div class="job-des">
 <h1>Software Engineer (.Net)</h1>
	<h4>Vacancy</h4>
	<p>1</p>
    <h3>Job Context</h3>
    <p>We are looking for an enthusiastic Software Engineer (.Net) to join our software development team.</p>
    <h3>Job Responsibilities</h3>
    <ul>
        <li>Minimum 2 years of coding experience in developing web applications with .NET Core Framework, C#.Net, Entity Framework, MVC, and MSSQL Server at a software company.</li>
        <li>Good knowledge and understanding of ASP.NET Web Services, Restful Web APIs, OData, Entity Framework, Asynchronous Programming in C#, LINQ, Lambdas, Func, Action, Routing, Model Binding, MSSQL, etc.</li>
        <li>Solid knowledge and experience in implementing Restful Web services using Web API.</li>
        <li>Deep knowledge of Object-Oriented design and implementation.</li>
        <li>Knowledge of Responsive Web Design (HTML5 & CSS3) with Cross-Browser Compatibility; Bootstrap Preferred.</li>
        <li>Good Knowledge on Javascript, JQuery, ReactJS.</li>
        <li>Excellent analytical, problem-solving, and decision-making skills.</li>
        <li>Must be capable of writing complex SQL queries, Stored procedures, SQL functions, and Triggers in an efficient way.</li>
    </ul>
    <h3>Employment Status</h3>
    <p>Full-time</p>
    <h3>Workplace</h3>
    <p>Work at office</p>
    <h3>Educational Requirements</h3>
    <p>Bachelor's degree in any discipline. Preference will be given to graduates in CSE, Mathematics, and IT related subjects.</p>
    <h3>Additional Requirements</h3>
    <ul>
        <li>Age 24 to 34 years</li>
        <li>Both males and females are allowed to apply</li>
        <li>Must be experienced in Software Development with .Net Core Framework, C# .Net Core, ASP.NET Core MVC, Entity Framework Core.</li>
        <li>Experience in ASP.Net Core Blazor, Dapper, React JS will be given preference.</li>
        <li>Knowledge on Software Development Architecture, Software Development Life Cycle, Design Patterns.</li>
        <li>Good knowledge of OAuth, Identity Server, Access Mechanism, ASP.NET Identity.</li>
        <li>Excellent knowledge and experience with test methodology, SQA process.</li>
        <li>Experience using Git, GitLab and GitHub/Others for source control.</li>
        <li>Ability to work on multiple projects by taking full responsibility and leadership roles.</li>
        <li>Quick learner & good problem-solving skills, capable of working under a tight schedule.</li>
    </ul>
    <h3>Job Location</h3>
    <p>Dhaka</p>
    <h3>Salary</h3>
    <p>Negotiable</p>
    <p><strong>Email at:</strong> <a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a></p>
    <p><strong>Email Before:</strong> 31st July 2024</p>
</div>`,
            date: "31 July, 2024",
        },
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const [cvData, setCvData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (data) => {
        setCvData(data);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const submitCvFunc = () => {
        setIsOpen(true);
        setIsModalOpen(false);
    };

    const onClose = () => {
        console.log("closed");
        setIsOpen(false);
    };

    const compareCurrentDate = (d) => {
        const currentDate = new Date();
        const selectedDate = new Date(d);
        // console.log("currentDate",  currentDate.getTime() < selectedDate.getTime());
        return currentDate.getTime() < selectedDate.getTime();
    };
    return (
        <>
            {/* <div className="career-bg h-[100vh]"> */}
            <div className="bg-gradient-to-t from-[#ebebeb] to-[#cdcbcc] ">
                <div className="container mx-auto relative min-h-screen">
                    {/* <div dangerouslySetInnerHTML={{ __html: jobCircular[0].description }} /> */}

                    <div className="flex flex-col items-center ">
                        <div className="w-full md:w-[450px] mt-[140px] md:mt-[120px]  text-center md:text-left">
                            <h1 className="text-[24px] font-bold text-[#57524B]">WE ARE</h1>
                            <h1 className="text-[90px] md:text-[120px] font-bold leading-[80px] md:leading-[100px] text-[#57524B] -ml-2">
                                HIRING
                            </h1>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-full  md:w-[450px] ">
                            <h1 className=" text-center md:text-left text-[12px] text-green-700 font-semibold">
                                Note : Please select a position and submit your curriculum vitae
                                at your earliest convenience.
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className=" md:w-[450px] mt-5  border-black border-l-2 pl-3">
                            {jobCircular.map((item, index) => (
                                <>
                                    {
                                        compareCurrentDate(item.date) &&
                                        <div className="flex  items-center gap-2" key={index}>
                                            <button
                                                onClick={() => openModal(item)}
                                                className="bg-gray-300 border-green-700 px-4 hover:bg-green-600 hover:text-white py-1 mb-2 text-left rounded-md w-[195px]"
                                            >
                                                {item.title}
                                            </button>
                                            <div>
                                                <h1 className="text-xs ">
                                                    Deadline :{" "}
                                                    <span className="text-red-700 underline">
                                                        {item.date}
                                                    </span>
                                                </h1>
                                            </div>
                                        </div>
                                    }

                                </>
                            ))}
                        </div>
                    </div>

                    <div class="flex justify-center mt-7">
                        <div class="md:w-[450px]">
                            <div class="flex flex-col justify-center items-center md:items-start ">

                                <div class="flex flex-col justify-center items-center md:items-start pt-5 md:pt-0 ">
                                    <div class="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-green-800 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                                        <h1 class="text-sm  font-bold">career@thekowcompany.com</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*                     
                    <div className="absolute bottom-5 right-5">
                        <div className="flex justify-center items-center gap-1">
                            <MdOutlineEmail className="text-green-800 text-xl" />
                            <h1 className="text-[14px] font-semibold">
                                career@thekowcompany.com
                            </h1>
                        </div>
                    </div> */}

                    <div className="career-top-bg absolute top-0 left-[50%] md:left-[37%] -translate-x-[50%] md:-translate-x-[37%] w-20 h-32"></div>
                    <div className="flex flex-col justify-end items-end w-full md:w-[450px] mx-auto pt-5 md:pt-0">
                        <div className="career-bottom-bg w-[230px] h-[186px] "></div>
                    </div>
                </div>
                {/* ------------------------------------main modal ----------------------------------- */}

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="absolute bg-gray-800 bg-opacity-50 inset-0" onClick={closeModal}></div>
                        <div className="bg-white rounded-lg mx-10 md:mx-0  h-[500px] overflow-y-auto shadow-xl transform transition-all w-full md:w-[700px] p-6">
                            <div className="flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-lg leading-6 font-medium text-gray-900">
                                    {cvData.title}
                                </h2>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: cvData.description,
                                    }}
                                />

                                <div className="flex justify-center">
                                    <button
                                        onClick={() => submitCvFunc()}
                                        className="bg-teal-600 px-5 py-2 font-semibold text-white rounded-md"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <CareerMail cvData={cvData} isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Career;
