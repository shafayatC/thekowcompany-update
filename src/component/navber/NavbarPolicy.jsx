import { GoHomeFill } from "react-icons/go";
import logo from "../../images/logo3.png";
import logoWhite from "../../images/logo2.png";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import MegaNavbar from "../MegaNavbar/MegaNavbar";
import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";
import "./navbar.css";
import HeadlineModal from "./HeadlineModal";

const NavbarPolicy = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { handleTranslate } = GoogleTranslate();
  const [showModal, setShowModal] = useState(false);
  const [headlineText, setHeadlineText] = useState('');
  const [headline, setHeadline] = useState('');

  const selectLanguage = (lang) => {
    handleTranslate(lang);
    setDropdownOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000); // Adjust the delay to ensure the language change is fully applied
  };
  const [getMenuBool, setMenuBool] = useState(false);
//   const [screenLeft, setScreenLeft] = useState(false);

  useEffect(() => {
    // Function to check if an element is out of the viewport
    function isElementOutOfViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.bottom < 0 ||
        rect.right < 0 ||
        rect.left > window.innerWidth ||
        rect.top > window.innerHeight
      );
    }

    // Function to handle the scroll event
    function handleScroll() {
      var myElement = document.getElementById("videoElement");

      if (isElementOutOfViewport(myElement)) {
        console.log("Element has left the screen.");
        setScreenLeft(true);
      } else {
        console.log("Element is still visible on the screen.");
        setScreenLeft(false);
      }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Optionally, you might want to also check the initial state
    window.addEventListener("load", handleScroll);
  }, []);

  const handleHeadlineSubmit = () => {
    setHeadline(headlineText);
    setShowModal(false);
  };

  return (
    <>
      <div
        className=
           "bg-[#DEE2E2] fixed text-black w-full top-0 z-[999]  shadow-xl md:shadow-none">
        <div className="container mx-auto bg-[#DEE2E2] md:bg-transparent py-1">
          <div className="hidden lg:flex items-center justify-between gap-3">
            <Link aria-label="home" to={"/"}>
              <img
                loading="lazy"
                src={logo}
                width={80}
                height={40}
                alt="logo"
              />
            </Link>
            {/* --------------------------------------For Large Screen------------------------------------------ */}
            <HashLink
              aria-label="2D"
              to="/2d"
              className=" text-xs lg:text-sm font-semibold 
                
                  text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
                  
              
            >
              IMAGES
            </HashLink>
            <HashLink
              aria-label="3D"
              to="/3d"
              className=" text-xs lg:text-sm font-semibold 
                
                  text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
            >
              3D
            </HashLink>
            <HashLink
              aria-label="AI"
              to="/#ai"
              className=" text-xs lg:text-sm font-semibold 
                
              text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
            >
              AI
            </HashLink>
            <HashLink
              aria-label="integration"
              to="/#integration"
              className=" text-xs lg:text-sm font-semibold 
                
                  text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
            >
              INTEGRATIONS
            </HashLink>
            <HashLink
              aria-label="trends"
              to="/#trends"
              className=" text-xs lg:text-sm font-semibold 
                
              text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
            >
              INDUSTRY TRENDS
            </HashLink>
            <Link
              aria-label="trends"
              to="/career"
              target="_blank"
              className=" text-xs lg:text-sm font-semibold 
                
                  text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
            >
              CAREER
            </Link>
            <Link
              aria-label="trends"
              to="/onboarding"
              target="_blank"
              className=" text-xs lg:text-sm font-semibold 
                
                  text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
            >
              ONBOARDING
            </Link>
            <a
              aria-label="sign up"
              href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F"
              target="_blank"
              className=" text-xs lg:text-sm font-semibold 
                
                  text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
              rel="noreferrer"
            >
              SIGN UP
            </a>
            <Link
              aria-label="book a call"
              to="/book-a-call"
              className="text-xs lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-semibold 
            text-gray-800 "
              
            >
              Book A Call
            </Link>
            {/* {!showModal && !headline && (
              <button
                className={`text-xs lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-semibold ${
                  screenLeft ? "text-gray-800 " : " text-white"
                }`}
                onClick={() => setShowModal(true)}
              >
                Show Headline
              </button>
            )} */}
            <div
              id="google_translate_element"
              style={{ display: "none" }}
            ></div>
            <div className="relative inline-block text-center notranslate">
              <div>
                <button
                  type="button"
                  className="flex justify-center text-base  text-gray-800 border-b-2 border-[#7C9C30] items-center gap-2 w-40 rounded-3xl border shadow-sm px-2 py-1 font-medium focus:outline-none"
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <IoLanguage className="text-xl" />
                  Language
                  <IoMdArrowDropdown className="text-xl" />
                </button>
              </div>

              {dropdownOpen && (
                <div
                  className="origin-top-right absolute bg-white right-0 mt-2 w-40 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <button
                      onClick={() => selectLanguage("en")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                      <img
                        className="h-7 w-7"
                        src="/img/flags/united-kingdom.png"
                        alt="English"
                      />
                      English
                    </button>
                    <button
                      onClick={() => selectLanguage("es")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                      <img
                        className="h-7 w-7"
                        src="/img/flags/spain.png"
                        alt="Spanish"
                      />
                      Spanish
                    </button>
                    <button
                      onClick={() => selectLanguage("fr")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                      <img
                        className="h-7 w-7"
                        src="/img/flags/france.png"
                        alt="French"
                      />
                      French
                    </button>
                    <button
                      onClick={() => selectLanguage("de")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                      <img
                        className="h-7 w-7"
                        src="/img/flags/germany.png"
                        alt="German"
                      />
                      German
                    </button>
                    <button
                      onClick={() => selectLanguage("nl")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                      <img
                        className="h-7 w-7"
                        src="/img/flags/netherlands.png"
                        alt="Dutch"
                      />
                      Dutch
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between lg:hidden">
            <Link aria-label="logo" to={"/"}>
              <img
                loading="lazy"
                src={logo}
                width={80}
                height={40}
                alt="logo"
              />
            </Link>
            <CgMenuGridO
              onClick={() => setMenuBool(!getMenuBool)}
              className="text-[32px]  cursor-pointer"
            />
          </div>
        </div>
        {/* -----------------------------------For Mobile--------------------------------------- */}
        {getMenuBool && (
          <div className="block lg:hidden bg-[#DEE2E2] pt-2 ">
            <div className="container mx-auto ">
              <div className="flex flex-col text-center gap-4">
                <HashLink
                  aria-label="2D"
                  onClick={() => setMenuBool(false)}
                  to="/2d"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  IMAGES
                </HashLink>
                <HashLink
                  aria-label="3D"
                  onClick={() => setMenuBool(false)}
                  to="/3d"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  3D
                </HashLink>
                <HashLink
                  aria-label="AI"
                  onClick={() => setMenuBool(false)}
                  to="/#ai"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  AI
                </HashLink>
                <HashLink
                  aria-label="integration"
                  onClick={() => setMenuBool(false)}
                  to="/#integration"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  INTEGRATIONS
                </HashLink>
                <HashLink
                  aria-label="trends"
                  onClick={() => setMenuBool(false)}
                  to="/#trends"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  INDUSTRY TRENDS
                </HashLink>
                <a
                  aria-label="subscribe"
                  onClick={() => setMenuBool(false)}
                  href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F"
                  target="_blank"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                  rel="noreferrer"
                >
                  SUBSCRIBE
                </a>
                <Link
                  onClick={() => setMenuBool(false)}
                  to="/book-a-call"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  Book A Call
                </Link>
                <Link
                  onClick={() => setMenuBool(false)}
                  to="/career"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  CAREER
                </Link>
                <Link
                  onClick={() => setMenuBool(false)}
                  to="/onboarding"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  ONBOARDING
                </Link>
                {/* {!showModal && !headline && (
                  <button
                    type="button"
                    className={`flex justify-center text-base ${
                      screenLeft
                        ? "text-gray-800 border-b-2 border-[#7C9C30]"
                        : "text-black border-b-2 border-[#7C9C30]"
                    } items-center gap-2 w-40 rounded-3xl border shadow-sm px-2 py-1 font-medium focus:outline-none`}
                    onClick={() => setShowModal(true)}
                  >
                    Show Headline
                  </button>
                )} */}
                <div className="flex justify-center mb-2">
                  <button
                    type="button"
                    className={`flex justify-center text-base ${
                      screenLeft
                        ? "text-gray-800 border-b-2 border-[#7C9C30]"
                        : "text-black border-b-2 border-[#7C9C30]"
                    } items-center gap-2 w-40 rounded-3xl border shadow-sm px-2 py-1 font-medium focus:outline-none`}
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <IoLanguage className="text-xl" />
                    Language
                    <IoMdArrowDropdown className="text-xl" />
                  </button>
                </div>
                {dropdownOpen && (
                  <div
                    className="top-[62%] absolute bg-white right-[30%]  mt-2 w-40 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      <button
                        onClick={() => selectLanguage("en")}
                        className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                        role="menuitem"
                      >
                        <img
                          className="h-7 w-7"
                          src="/img/flags/united-kingdom.png"
                          alt="English"
                        />
                        English
                      </button>
                      <button
                        onClick={() => selectLanguage("es")}
                        className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text.center"
                        role="menuitem"
                      >
                        <img
                          className="h-7 w-7"
                          src="/img/flags/spain.png"
                          alt="Spanish"
                        />
                        Spanish
                      </button>
                      <button
                        onClick={() => selectLanguage("fr")}
                        className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text.center"
                        role="menuitem"
                      >
                        <img
                          className="h-7 w-7"
                          src="/img/flags/france.png"
                          alt="French"
                        />
                        French
                      </button>
                      <button
                        onClick={() => selectLanguage("de")}
                        className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text.center"
                        role="menuitem"
                      >
                        <img
                          className="h-7 w-7"
                          src="/img/flags/germany.png"
                          alt="German"
                        />
                        German
                      </button>
                      <button
                        onClick={() => selectLanguage("nl")}
                        className="flex justify.start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text.center"
                        role="menuitem"
                      >
                        <img
                          className="h-7 w-7"
                          src="/img/flags/netherlands.png"
                          alt="Dutch"
                        />
                        Dutch
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    {/* -----------------------------------For Headline Input----------------------------------- */}
    {/* -----------------------------------For Headline----------------------------------- */}
    <HeadlineModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleHeadlineSubmit}
        headlineText={headlineText}
        setHeadlineText={setHeadlineText}
      />
      {headline && (
        <div className="bg-gray-800 text-white text-center pt-10 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <h1 className="text-2xl font-bold inline-block">{headline}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarPolicy;
