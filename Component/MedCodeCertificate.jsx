import React, { useState } from "react";
import { assets } from "../src/assets/assets";
import { API_BASE_URL } from "../src/config/api";

export default function MedCodeCertificate() {
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const playlistLink = "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, countryCode, phone };

    try {
      const response = await fetch(`${API_BASE_URL}/form/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      await response.json();

      // Clear form
      setEmail("");
      setPhone("");

      // Optional: play sound
      const audio = new Audio("/sounds/pop.mp3");
      audio.play();

      // Show popup
      setShowPopup(true);

    } catch (error) {
      console.error(error);
      alert("Failed to submit!");
    }
  };

  return (
    <section className="w-full bg-[#2b2133] text-white" id="targetdiv">
      <div className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-6">
        {/* Left Text */}
        <div className="flex-1 flex justify-center md:justify-start">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            medcode.tech<sup className="align-super">®</sup><br />
            Ranks #1 for <br />
            Medical Coding <br />
            Course in India
          </h1>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[420px]">
          <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl border-4 border-[#f3eaff]">
            <h3 className="text-center text-xl font-semibold mb-4">
              Book A Demo Class, <span className="text-red-500">For 99$ Free !</span>
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-200"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flex gap-3 flex-wrap">
                <select
                  className="min-w-[110px] px-3 py-3 rounded-lg border border-gray-200"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+91">India +91</option>
                  <option value="+1">USA +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+81">Japan +81</option>
                </select>

                <input
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200"
                  type="tel"
                  placeholder="Phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button className="w-full bg-[#4b2b78] text-white py-3 rounded-lg font-semibold hover:bg-blue-900">
                SUBMIT »
              </button>
            </form>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 hidden md:flex justify-start">
          <div className="w-[420px] rounded-lg overflow-hidden shadow-lg border-4 border-[#f3eaff] bg-white">
            <img
              src={assets.certificate}
              alt="certificate"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        />
      )}

      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            color: "#000",
            padding: "30px",
            borderRadius: "12px",
            border: "3px solid #4b2b78",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2>🎉 Form Submitted Successfully!</h2>
          <p>Check out this playlist:</p>
          <a
            href={playlistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
            style={{ margin: "10px 0", textAlign: "center" }}
          >
            {playlistLink}
          </a>
          <button
            className="bg-[#4b2b78] text-white px-4 py-2 rounded-lg hover:bg-blue-900 mt-3"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}
