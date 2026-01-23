import React, { useState } from "react";
import { assets } from "../assets/assets";
import { API_BASE_URL } from "../config/api";

export default function MedCodeCertificate() {
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const playlistLink = "https://www.youtube.com/@NexusCorporateTrainingCentre/videos";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- IMPLEMENTATION: Check if user is logged in ---
    // Yaha hum check kar rahe hain ki localStorage mein 'token' ya 'user' session maujood hai ya nahi
    const userToken = localStorage.getItem("token"); // Aap apne auth logic ke hisaab se key change kar sakte hain

    if (!userToken) {
      alert("Please login first to submit the form!");
      // Agar aap login page par bhejna chahte hain toh: window.location.href = "/login";
      return; 
    }
    // -------------------------------------------------

    const formData = { email, countryCode, phone };

    try {
      const response = await fetch(`${API_BASE_URL}/form/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      await response.json();

      setEmail("");
      setPhone("");
      const audio = new Audio("/sounds/pop.mp3");
      audio.play().catch(() => {}); // Audio error safety
      setShowPopup(true);
    } catch (error) {
      console.error(error);
      alert("Failed to submit!");
    }
  };

  return (
    <section className="w-full bg-[#2b2133] text-white overflow-hidden" id="targetdiv">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        
        {/* Left Text: Mobile pe center, Desktop pe left */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            medcode.tech<sup className="text-sm md:text-xl align-super">®</sup><br />
            Ranks #1 for <br />
            Medical Coding <br />
            Course in India
          </h1>
        </div>

        {/* Form Section: Mobile pe full width, Desktop pe fixed width */}
        <div className="w-full max-w-[450px]">
          <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-[#f3eaff]">
            <h3 className="text-center text-xl md:text-2xl font-semibold mb-6">
              Book A Demo Class, <br className="md:hidden" />
              <span className="text-red-500 italic">For 99$ Free !</span>
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4b2b78]"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  className="w-full sm:w-[130px] px-3 py-3 rounded-xl border border-gray-200 bg-white"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+91">India +91</option>
                  <option value="+1">USA +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+81">Japan +81</option>
                </select>

                <input
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4b2b78]"
                  type="tel"
                  placeholder="Phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button className="w-full bg-[#4b2b78] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#351e57] transition-all transform active:scale-95 cursor-pointer">
                SUBMIT »
              </button>
            </form>
          </div>
        </div>

        {/* Right Side Image: Hidden on mobile/tablet, Visible on large screens */}
        <div className="flex-1 hidden lg:flex justify-end">
          <div className="max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f3eaff] bg-white transform rotate-2">
            <img
              src={assets.certificate}
              alt="certificate"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Responsive Popup & Overlay */}
      {showPopup && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
            onClick={() => setShowPopup(false)}
          />

          {/* Success Popup Card */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[400px] bg-white text-gray-900 p-8 rounded-2xl border-b-8 border-[#4b2b78] z-[1000] flex flex-col items-center text-center shadow-2xl">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2">Submitted!</h2>
            <p className="text-gray-600 mb-4">Check out our specialized playlist below:</p>
            
            <a
              href={playlistLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-50 text-blue-600 p-3 rounded-lg border border-blue-100 underline mb-6 break-all text-sm"
            >
              {playlistLink}
            </a>

            <button
              className="w-full bg-[#4b2b78] text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
              onClick={() => setShowPopup(false)}
            >
              CLOSE
            </button>
          </div>
        </>
      )}
    </section>
  );
}