import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
import { HeadProvider } from "react-head";


function Thankyou() {

  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 5000);
  // })

  return (
    <>
      <HeadProvider>
        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-377893735/cGiZCNjHio8ZEOfmmLQB'});`}
        </script>
      </HeadProvider>

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
            className="text-center "
            style={{ fontSize: "25px", color: "black" }}
          >
            Thank you for getting in touch. One of our team members will reach
            <br /> out to you within the shortest possible time. If you need
            project
            <br /> assistance, you can contact us at:
            <br />
            <br />
            <u>info@thekowcompany.com</u>
          </p>
          <button onClick={() => navigate(-2)} className="bgButtonAnim m-auto mt-4 bg-[#7c9c30] flex px-8 py-3 items-center rounded-full text-white">
            <span className="flex items-center gap-1"><IoCaretBackSharp /> Go Back</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Thankyou;
