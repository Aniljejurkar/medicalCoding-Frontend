import React, { useState } from "react";
import { API_BASE_URL } from "../config/api";

const RegisterPopup = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [selectedService, setSelectedService] = useState("");

  if (!isOpen) return null;

  // ✅ BACKEND API INTEGRATION
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !mobile || !password) {
      alert("Please fill out all fields!");
      return;
    }

    if (mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }

    const userData = {
      fullName,
      email,
      countryCode,
      mobile,
      password,
      serviceRequested: selectedService,
    };

    try {
      const response = await fetch("http://localhost:8181/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const savedUser = await response.json();
      alert("Registered Successfully!");

      setFullName("");
      setEmail("");
      setCountryCode("+91");
      setMobile("");
      setPassword("");
      setSelectedService("");

      if (typeof window !== "undefined") {
        localStorage.setItem("isRegistered", "true");
      }

      onClose();
    } catch (error) {
      console.error("API Error:", error);
      alert("Server error. Please try again!");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md z-50 overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[450px] h-[450px] bg-purple-600/40 blur-[150px] rounded-full animate-pulse -top-32 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/40 blur-[160px] rounded-full animate-ping top-40 -right-32"></div>
        <div className="absolute w-[350px] h-[350px] bg-cyan-400/30 blur-[120px] rounded-full animate-pulse bottom-10 left-1/3"></div>
      </div>

      {/* CARD */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 
                      shadow-[0_0_40px_rgba(0,200,255,0.4)] 
                      w-11/12 max-w-md px-8 py-10 rounded-3xl rounded-bl-[60px]
                      animate-[popupShow_0.6s_ease]">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-3xl font-bold text-white hover:text-pink-400 transition cursor-pointer"
        >
          ×
        </button>

        {/* TITLE */}
        <h2 className="text-3xl font-extrabold text-center mb-7 
                       bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Register Now
        </h2>

        {/* FORM */}
        <form className="text-white" onSubmit={handleSubmit}>

          <label className="block mt-3 text-sm font-semibold neon-label">FULL NAME</label>
          <input
            type="text" value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-cyan-400/40 outline-none mt-1 neon-input"
            placeholder="Enter full name" required
          />

          <label className="block mt-5 text-sm font-semibold neon-label">EMAIL</label>
          <input
            type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-purple-400/40 outline-none mt-1 neon-input"
            placeholder="example@gmail.com" required
          />

          <label className="block mt-5 text-sm font-semibold neon-label">PASSWORD</label>
          <input
            type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-pink-400/40 outline-none mt-1 neon-input"
            placeholder="Enter password" required
          />

          <label className="block mt-5 text-sm font-semibold neon-label">MOBILE NUMBER</label>
          <div className="flex gap-2 mt-1">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="p-3 rounded-xl bg-white/10 border border-cyan-400/40 outline-none neon-input text-white"
            >
              <option className="bg-slate-900" value="+91">+91</option>
              <option className="bg-slate-900" value="+1">+1</option>
              <option className="bg-slate-900" value="+44">+44</option>
            </select>

            <input
              type="tel" value={mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) setMobile(value);
              }}
              className="flex-1 p-3 rounded-xl bg-white/10 border border-cyan-400/40 outline-none neon-input"
              placeholder="1234567890" required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-full font-semibold
                       bg-gradient-to-r from-purple-500 to-cyan-500
                       shadow-[0_0_15px_rgba(170,50,255,0.8)]
                       hover:shadow-[0_0_25px_rgba(0,200,255,0.9)]
                       transition-all neon-button cursor-pointer"
          >
            REGISTER NOW
          </button>
        </form>

        {/* --- Implementation: Login Link --- */}
        <div className="mt-6 text-center text-sm text-slate-300">
          Already have an account?{" "}
          <button 
            type="button"
            onClick={onSwitchToLogin} 
            className="text-purple-400 font-bold hover:underline ml-1 cursor-pointer"
          >
            Login Here
          </button>
        </div>

      </div>

      <style>{`
        @keyframes popupShow {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .neon-input:hover { box-shadow: 0 0 12px rgba(0,200,255,0.5); }
        .neon-label { text-shadow: 0 0 6px rgba(0,200,255,0.6); }
        .neon-button:hover { transform: translateY(-2px); }
      `}</style>
    </div>
  );
};

export default RegisterPopup;