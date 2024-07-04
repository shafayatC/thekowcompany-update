import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const CareerMail = ({ cvData, isOpen, onClose }) => {

    const [getLoader, setLoader] = useState(false);

    const navigate = useNavigate();
    function sendEmail(e) {
        e.preventDefault();
        setLoader(true);
        emailjs.sendForm(
            "service_1zfatsb",
            "template_4tpkyc7",
            e.target,
            "user_3TcS4pRKMgpo7fArsKmSf"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    navigate(`/career-thank-you`);
                    // window.location.href = "./thank-you/" + p;
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute bg-gray-600 bg-opacity-50 inset-0" onClick={() => onClose()}></div>
                    <div className="relative bg-white p-10 rounded-lg w-96 border-l-4 border-[#B1CC40]">
                        {/* Close button */}
                        <div className="absolute top-0 right-0 m-2">
                            <button
                                className=""
                                onClick={() => onClose()}
                            >
                                < IoIosCloseCircleOutline className="h-5 w-5 font-bold text-red-500" />
                            </button>
                        </div>
                        <div className="text-sm text-center font-semibold">
                            <div>
                                <form onSubmit={sendEmail} enctype="multipart/form-data" method="post">
                                    {/* <label></label> */}
                                    {/* <input type="file" name="my_file" /> */}

                                    <div className='text-left pb-4'>
                                        <label name="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Name</label>
                                        <input required placeholder="Please input your name" name="name" className="block p-1 w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="text" />
                                    </div>
                                    <div className='text-left pb-4'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                        <input required name="my_file" accept=".doc, .docx, .pdf" className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">DOC, DOCX, PDF</p>
                                    </div>
                                    <input
                                        type="hidden"
                                        className="py-2 px-2 rounded-sm "
                                        name="position"
                                        value={cvData.title}
                                    />

                                    <input
                                        type="hidden"
                                        className="py-2 px-2 rounded-sm"
                                        name="deadline"
                                        value={cvData.date}
                                    />

                                    <input type="submit" value="Submit" className='bg-teal-600 px-5 py-2  text-white rounded-md' />
                                </form>

                            </div>
                        </div>
                        {
                            getLoader &&

                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50" fill="#000">
                                    <circle cx="50" cy="50" r="35" stroke="#000" stroke-width="10" fill="none" stroke-dasharray="164.93361431346415 56.97787143782138">
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            repeatCount="indefinite"
                                            dur="1s"
                                            values="0 50 50;360 50 50"
                                            keyTimes="0;1"
                                        />
                                    </circle>
                                </svg>
                            </div>
                        }

                    </div>
                </div>
            )}




        </>
    );
};

export default CareerMail;