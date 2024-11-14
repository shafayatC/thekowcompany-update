import HeaderFive from "../microComponent/HeaderFive";
import HeaderOne from "../microComponent/HeaderOne";


const SectionThree = () => {
    return (
        <div className="w-[671px] ml-[52px]  flex flex-col ">
            <HeaderOne>2. API Endpoints Overview</HeaderOne>
            <HeaderFive className="ml-2">2.1 Authentication and User Account Management</HeaderFive>
            <ul className="list-disc pl-5 font-anek-latin ">
                <li>System Sign-Up (POST): Registers a new user account.</li>
                <li>Set Password (POST): Allows the user to set or reset their password.</li>
                <li>System Sign-In (POST): Authenticates the user and provides a session token.</li>
                <li>Reset Password Request (POST): Initiates a password reset process.</li>
                <li>Reset Password (POST): Completes the password reset process.</li>
            </ul>
        </div>
    );
};

export default SectionThree;