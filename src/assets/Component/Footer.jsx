import React from "react";


const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800">

      {/* =============== TOP OFFICE SECTION =============== */}
      <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* America */}
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-2">
            🇺🇸 Henry Harvin America Head Office
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            8 The Green, #19614 Dover,
            <br /> DE 19901, United States
            <br />
            <span className="text-blue-600 font-medium">
              Contact +1 209-382-3469
            </span>
          </p>
        </div>

        {/* United Kingdom */}
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-2">
            🇬🇧 Henry Harvin United Kingdom Head Office
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            Office No: 71–75 Shelton Street,
            <br /> Covent Garden London WC2H 9JQ
          </p>
        </div>

        {/* Middle East */}
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-2">
            🇦🇪 Henry Harvin Middle East Head Office
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            2703, Blue Matrix, 27th floor,
            <br /> The Prime Tower, Business Bay, Dubai, UAE
          </p>
        </div>

        {/* Asia Pacific */}
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-2">
            🇮🇳 Henry Harvin Asia Pacific Head Office
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            Henry Harvin House,
            <br /> B-12 Sector-6 Noida (UP)-201301
          </p>
        </div>

      </div>

      {/* =============== ISO BUTTONS =============== */}
      <div className="flex flex-wrap justify-center gap-6 pb-8">
        <button className="bg-[#5A1BBF] text-white px-8 py-3 rounded-full font-semibold">
          ISO 9001:2015
        </button>

        <button className="bg-[#5A1BBF] text-white px-8 py-3 rounded-full font-semibold">
          ISO/IEC 27001:2013
        </button>
      </div>

      {/* =============== COPYRIGHT =============== */}
      <div className="text-center text-sm text-gray-700 pb-15">
        © 2013–2025 – Henry Harvin® Education. All Rights Reserved.
      </div>

     {/* =============== BOTTOM STICKY BAR =============== */}
<div className="fixed bottom-0 left-0 w-full z-50">
  <div className="flex flex-row w-full">

    {/* Left (Green Section) */}
    <div className="bg-green-600 text-white flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium border border-black">
      +91 9899577620
    </div>

    {/* Right (Yellow Section) */}
    <div className="bg-yellow-400 text-black flex-1 flex items-center justify-center py-3 text-sms font-semibold border border-black">
      📘 Free 1st Class
    </div>

  </div>
</div>

    </footer>
  );
};

export default Footer;
