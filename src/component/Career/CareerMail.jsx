import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { IoIosCloseCircleOutline } from "react-icons/io";


const CareerMail = ({ jobTitle, deadLine, isOpen, onClose }) => {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_1zfatsb",
            "template_4tpkyc7",
            e.target,
            "user_3TcS4pRKMgpo7fArsKmSf"
        )
            .then(
                (result) => {
                    console.log(result.text);
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
                    <div className="absolute bg-gray-600 bg-opacity-50 inset-0"></div>
                    <div className="relative bg-white p-10 rounded-lg w-96 border-l-4 border-[#B1CC40]">
                        {/* Close button */}
                        <div className="absolute top-0 right-0 m-2">
                            <button
                                className=""
                                onClick={onClose}
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
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                        <input name="my_file" className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">DOC, DOCX, PDF</p>
                                    </div>
                                    <input
                                        type="hidden"
                                        className="py-2 px-2 rounded-sm "
                                        placeholder="Name"
                                        name="name"
                                        required
                                    />

                                    <input
                                        type="hidden"
                                        className="py-2 px-2 rounded-sm"
                                        placeholder="Subject"
                                        name="subject"
                                        required
                                    />
                                    <input type="submit" value="Submit" className='bg-teal-600 px-5 py-2  text-white rounded-md'/>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            )}




        </>
    );
};

export default CareerMail;