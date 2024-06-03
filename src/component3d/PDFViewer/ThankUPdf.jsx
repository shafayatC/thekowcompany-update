import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { redirect, useNavigate } from "react-router-dom";

const ThankUPdf = () => {

    let navigate = useNavigate();

    function redirectAfterSubmit() {
        navigate('/')
      }

      useEffect(()=>{

        setTimeout(()=>{
            redirectAfterSubmit()
        },20000)

      },[])
      
    return (
        <div className="postphoto" style={{ backgroundColor: "#c5da9c" }}>
            <Helmet>
                <style>{'body { background-color: #c5da9c; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>
            <div className='container'>

                <div class="row">
                    <p style={{ fontWeight: "700", fontSize: "100px", marginTop: "4%", color: "black", textAlign: "center" }}>Thank You</p>
                    <div class="text-center" style={{ fontSize: "25px", color: "black", padding: "0 60px" }}><p>Thank you for downloading our Service Profile! A download link has been sent to your email.
Contact us to know more about our services! </p>
                        <br></br>
                        <p style={{ fontSize: "15px" }}>Sincerely,<br />
                            Team The KOW company</p>
                    </div>
                    <Link to="/" style={{textAlign: "center", fontSize: "18px", textDecoration: "none"}}>Continue to website <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                </div>

            </div>

        </div>
    );
};

export default ThankUPdf;