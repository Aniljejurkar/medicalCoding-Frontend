import React, { useEffect, useState } from "react";
import { assets } from "../src/assets/assets";
import RegisterPopup from "./RegisterPopup";
import LoginPopup from "./Login";
import PopupForm from "./PopupForm";

const TopBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ CHECK LOGIN STATUS ON LOAD + EVENT
  useEffect(() => {
    const checkLogin = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };

    checkLogin(); // on page load
    window.addEventListener("authChanged", checkLogin);

    return () => {
      window.removeEventListener("authChanged", checkLogin);
    };
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("targetdiv");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    // notify UI
    window.dispatchEvent(new Event("authChanged"));
  };

  return (
    <>
      {/* POPUPS */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <RegisterPopup
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
      <LoginPopup
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* TOP BAR */}
      <div className="w-full bg-white border-b fixed top-0 left-0 z-40 shadow-sm">
        <div
          className="max-w-6xl mx-auto flex justify-between md:grid flex-nowrap
                     items-center px-2 md:px-4 py-2
                     md:grid-cols-[auto_1fr_auto]
                     gap-2 md:gap-3"
        >
          {/* LEFT */}
          <div
            className="flex items-center gap-6 md:gap-3 shrink-0 cursor-pointer"
            onClick={handleScroll}
          >
            <img src={assets.logo} alt="Logo" className="h-15 w-auto" />
            <div className="w-0.5 h-10 bg-[#4C34A5]" />
            <div className="leading-tight text-center">
              <p className="text-xl md:text-3xl font-semibold text-[#4C34A5]">
                12
              </p>
              <p className="text-[10px] md:text-[11px] text-[#4C34A5]">
                Years
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="hidden md:flex flex-col items-center text-center font-medium">
            <div className="flex gap-3 text-[13px] text-gray-700">
              <span>41,000+ Trained</span> | <span>5,600+ Reviews</span> |{" "}
              <span>4,000+ Live Classes Every Month</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 justify-end">
            <button
              className="bg-[#4C34A5] text-white px-3 py-2 rounded-md"
              onClick={handleScroll}
            >
              Book Free Demo
            </button>

            <button
              className="hidden md:block bg-[#4C34A5] text-white px-4 py-2 rounded-md"
              onClick={() => setIsPopupOpen(true)}
            >
              Get Quick Call Back
            </button>

            {/* 🔥 CONDITIONAL AUTH BUTTONS */}
            {!isLoggedIn ? (
              <>
                <button
                  className="bg-[#4C34A5] text-white px-3 py-2 rounded-md"
                  onClick={() => setIsRegisterOpen(true)}
                >
                  Register Now
                </button>

                <button
                  className="bg-[#4C34A5] text-white px-3 py-2 rounded-md"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Login
                </button>
              </>
            ) : (
              <button
                className="bg-red-500 text-white px-3 py-2 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
