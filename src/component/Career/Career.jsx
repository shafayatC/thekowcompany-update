import "./career.css";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import CareerMail from "./careerMail";

const Career = () => {
    const [jobCircular] = useState([
        {
            id: 1,
            title: "Sales Executive",
            description: `<div class="job-des">
    <h1>We are Hiring</h1>
    <h4>Sales Executive for Marketing Team</h4>
    <p>The Sales Executive will be responsible for generating new business opportunities by identifying and qualifying potential leads, conducting cold outreach through emails and calls, and nurturing relationships to convert prospects into clients. This role requires a proactive and results-driven individual with excellent communication and interpersonal skills.</p>
    <h3>Key Responsibilities:</h3>
    <ul>
        <li><b>Lead Generation:</b> Identify potential leads through various channels, including online research, social media, networking events, and industry databases.</li>
        <li><b>Cold Outreach:</b> Conduct cold emails and calls to prospective clients to introduce The KOW Company’s 2D, 3D, and CGI Processing Services and identify their needs.</li>
        <li><b>Client Engagement:</b> Build and maintain relationships with prospects, providing them with relevant information and answering their queries to move them through the sales pipeline.</li>
        <li><b>Pipeline Management:</b> Track and manage leads in the CRM system, ensuring timely follow-up and accurate record-keeping.</li>
        <li><b>Market Research:</b> Stay informed about industry trends, competitor activities, and market conditions to identify new business opportunities.</li>
        <li><b>Collaboration:</b> Work closely with the marketing team and other departments to develop and implement effective sales strategies.</li>
        <li><b>Reporting:</b> Provide regular updates and reports on lead generation activities, sales progress, and results to the Sales Manager.</li>
    </ul>
    <h3>Qualifications:</h3>
    <ul>
        <li>Bachelor’s degree in Business, Marketing, or a related field.</li>
        <li>1+ years of experience in sales, lead generation, or business development.</li>
        <li>Freshers are also encouraged to apply. Flexible for extraordinary candidates.</li>
        <li>Excellent communication and interpersonal skills.</li>
        <li>Strong ability to conduct cold outreach and engage potential clients.</li>
        <li>Self-motivated, proactive, and results oriented.</li>
        <li>Ability to work independently and as part of a team.</li>
        <li>Strong organizational and time management skills.</li>
    </ul>
    <h3>Preferred Qualifications:</h3>
    <ul>
        <li>Experience in the image post-production sector.</li>
        <li>Familiarity with lead generation tools and techniques.</li>
        <li>Proficiency in CRM software and Microsoft Office Suite.</li>
        <li>Knowledge of digital marketing strategies and tools.</li>
    </ul>
    <h3>What We Offer:</h3>
    <ul>
        <li>Competitive salary and commission structure.</li>
        <li>Comprehensive benefits package.</li>
        <li>Opportunities for professional growth and career advancement.</li>
        <li>Supportive and collaborative work environment.</li>
        <li>Intensive training and development programs during the first 3 months.</li>
    </ul>
	</div>`,
            date: "31st July, 2024"
        },
        {
            id: 2,
            title: "UI/UX Designer",
            description: '',
            date: "31st July, 2024"
        },
        {
            id: 3,
            title: "Image Editor",
            description: '',
            date: "31st July, 2024"
        },
        {
            id: 4,
            title: ".NET Developer",
            description: '',
            date: "31st July, 2024"
        }
    ])
    const [isOpen, setIsOpen] = useState(false);
    const [cvData, setCvData] = useState({});
    const submitCvFunc = (data) => {
        setCvData(data);
        setIsOpen(true);
    }

    const onClose = () => {
        console.log("closed");
        setIsOpen(false);
    }

    const compareCurrentDate = (date) => {
        const currentDate = new Date();
        const selectedDate = new Date("July 31, 2024");
        console.log("currentDate", currentDate, selectedDate)
        return currentDate.getTime() < selectedDate.getTime();

    }
    return (
        <>
            <div className="career-bg h-[100vh]">

                <div className="container mx-auto">

                {/* <div dangerouslySetInnerHTML={{ __html: jobCircular[0].description }} /> */}

                    <div className="flex flex-col items-center ">
                        <div className="w-full md:w-[450px] mt-[100px] text-center md:text-left">
                            <h1 className="text-[30px] font-bold text-[#57524B]">WE ARE</h1>
                            <h1 className="text-[90px] md:text-[140px] font-bold leading-[80px] md:leading-[110px] text-[#57524B] -ml-2">HIRING</h1>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className=" md:w-[450px] mt-5  border-black border-l-2 pl-3">

                            {
                                jobCircular.map((item, index) =>
                                    <div key={index}>
                                        <button onClick={() => submitCvFunc(item)} className="bg-gray-200 px-4 py-1 mb-2 text-left rounded-md w-[140px]">
                                            {item.title}
                                            {compareCurrentDate(item.date)}
                                        </button>
                                    </div>
                                )

                            }
                            {/* <div>
                                <button onClick={() => submitCvFunc()} className="bg-gray-200 px-4 py-1 mb-2 text-left rounded-md w-[140px]">
                                    Sales Executive
                                </button>
                            </div>
                            <div>
                                <button onClick={() => submitCvFunc()} className="bg-gray-200 px-4 py-1 mb-2 text-left  rounded-md w-[140px]">
                                    UI/UX Designer
                                </button>
                            </div>
                            <div>
                                <button onClick={() => submitCvFunc()} className="bg-gray-200 px-4 py-1 mb-2 text-left  rounded-md w-[140px]">
                                    Image Editor
                                </button>
                            </div>
                            <div>
                                <button onClick={() => submitCvFunc()} className="bg-gray-200 px-4 py-1 text-left  rounded-md w-[140px]">
                                    .NET Developer
                                </button> 
                        </div>
                        */}
                        </div>
                    </div>

                    <div className="flex justify-center mt-7">
              
                        <div className="md:w-[450px]">
                            <div className="flex flex-col justify-center items-center md:items-start ">
                                <div className="flex justify-center items-center gap-2">
                                    <SlCalender className="text-green-800" />
                                    <h1>APPLY BEFORE</h1>
                                </div>
                                <h1 className="text-xs md:pl-5">31st July, 2024 </h1>
                            </div>
                            <div className="flex flex-col justify-center items-center md:items-start pt-5 md:pt-0 ">
                                <div className="flex justify-center items-center gap-2">
                                    <MdOutlineEmail className="text-green-800 text-xl" />
                                    <h1>AT</h1>
                                </div>
                                <h1 className="text-xs md:pl-5">career@thekowcompany.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CareerMail cvData={cvData} isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Career;
