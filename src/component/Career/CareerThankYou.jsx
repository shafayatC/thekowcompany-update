import { useNavigate } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";

function CareerThankYou() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 5000);
  // })

  return (
    <>
      <div className="my-20 container mx-auto">
        <div className="">
          <p
            style={{ 
              fontWeight: "700",
              fontSize: "100px",
              marginTop: "4%",
              color: "black",
              textAlign: "center",
            }}
          >
            Thank You
          </p>
          <p
            className="text-center md:px-40"
            style={{ fontSize: "25px", color: "black" }}
          >
            Thank you for sending your resume. We appreciate your interest in
            joining our team and will carefully review your qualifications.
            Should your skills align with our current needs, we will be in touch
            soon.
           
            <br />
            <u>career@thekowcompany.com</u>
          </p>
          <button
            onClick={() => navigate("/")}
            className="bgButtonAnim m-auto mt-4 bg-[#7c9c30] flex px-8 py-3 items-center rounded-full text-white"
          >
            <span className="flex items-center gap-1">
              <IoCaretBackSharp /> Go Back
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CareerThankYou;
