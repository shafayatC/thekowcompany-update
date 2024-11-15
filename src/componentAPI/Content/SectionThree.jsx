import HeaderFive from "../microComponent/HeaderFive";
import HeaderOne from "../microComponent/HeaderOne";


const SectionThree = () => {
    return (
        <div className=" flex flex-col ">
            <HeaderOne>2. API Endpoints Overview</HeaderOne>
            <HeaderFive className="ml-2 mb-2 mt-2">2.1 Authentication and User Account Management</HeaderFive>
            <ul className="list-disc pl-8 font-anek-latin ">
                <li>System Sign-Up (POST): Registers a new user account.</li>
                <li>Set Password (POST): Allows the user to set or reset their password.</li>
                <li>System Sign-In (POST): Authenticates the user and provides a session token.</li>
                <li>Reset Password Request (POST): Initiates a password reset process.</li>
                <li>Reset Password (POST): Completes the password reset process.</li>
            </ul>
            <HeaderFive className="ml-2 mb-2 mt-7">2.2 Image Processing</HeaderFive>
            <ul className="list-disc pl-8 font-anek-latin">
                <li>Upload Image (POST): Submits one or multiple images for processing. Each image in the
                bulk can have add-on services like background removal, retouching, or color correction, etc.</li>
                <li>Send Processed Images via FTP/SFTP (POST): Sends the processed images back to the
                user through FTP or SFTP</li>
                
            </ul>
        </div>
    );
};

export default SectionThree;