import React, { useState } from "react";
import { assets } from "../src/assets/assets";
import PopupForm from "./PopupForm";

const TopBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("targetdiv");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* POPUP */}
      <PopupForm 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />

      <div className="w-full bg-white border-b fixed top-0 left-0 z-40 shadow-sm">
        
        {/* MAIN CONTAINER */}
        <div className="max-w-6xl mx-auto flex justify-between md:grid flex-nowrap 
                        items-center px-2 md:px-4 py-2 
                        md:grid-cols-[auto_1fr_auto] 
                        gap-2 md:gap-3">

          {/* LEFT */}
          <div
            className="flex items-center md:gap-3 shrink-0 cursor-pointer"
            onClick={handleScroll}
          >
            <img
              src={assets.logo}
              alt="Logo"
              className="h-15 w-auto object-contain"
            />

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

          {/* CENTER (Desktop Only) */}
          <div className="hidden md:flex flex-col items-center justify-center text-center justify-self-center font-medium">

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[13px] text-gray-700">
              <span>41,000+ Trained</span>
              <span>|</span>
              <span>5,600+ Reviews</span>
              <span>|</span>
              <span>4,000+ Live Classes Every Month</span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[13px] text-gray-700 leading-tight mt-1">
              <span>302+ Corporate Partners</span>
              <span>|</span>
              <span>180+ College Partners</span>
              <span>|</span>
              <span>96% Reported Career Benefits</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 justify-end shrink-0">
            <button
              className="bg-[#4C34A5] text-white px-3 md:px-4 py-2 text-[12px] md:text-[13px] 
                         rounded-md hover:bg-[#3a268a] shadow-sm cursor-pointer"
              onClick={handleScroll}
            >
              Book Free Demo
            </button>

            <button
              className="hidden md:block bg-[#4C34A5] text-white px-4 py-2 text-[13px] 
                         rounded-md hover:bg-[#3a268a] cursor-pointer"
              onClick={() => setIsPopupOpen(true)}
            >
              Get Quick Call Back
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default TopBar;
