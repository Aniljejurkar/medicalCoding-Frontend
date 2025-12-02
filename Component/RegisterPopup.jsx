import React, { useState } from "react";

const RegisterPopup = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (!fullName || !email || !mobile) {
      alert("Please fill out all fields!");
      return;
    }

    alert(`Registered Successfully!\nName: ${fullName}\nEmail: ${email}\nMobile: ${countryCode} ${mobile}`);
    // Reset form or close popup
    setFullName("");
    setEmail("");
    setMobile("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center 
                    bg-black/60 backdrop-blur-md z-50 overflow-hidden">

      {/* CYBERPUNK NEON BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[450px] h-[450px] bg-purple-600/40 blur-[150px] rounded-full animate-pulse -top-32 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/40 blur-[160px] rounded-full animate-ping top-40 -right-32"></div>
        <div className="absolute w-[350px] h-[350px] bg-cyan-400/30 blur-[120px] rounded-full animate-pulse bottom-10 left-1/3"></div>
      </div>

      {/* MAIN CARD */}
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
                       bg-linear-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Register Now
        </h2>

        {/* FORM */}
        <form className="text-white" onSubmit={handleSubmit}>

          <label className="block mt-3 text-sm font-semibold neon-label">FULL NAME</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-cyan-400/40 text-white outline-none mt-1 neon-input"
            placeholder="Enter full name"
            required
          />

          <label className="block mt-5 text-sm font-semibold neon-label">EMAIL (GMAIL)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-purple-400/40 text-white outline-none mt-1 neon-input"
            placeholder="example@gmail.com"
            required
          />

          <label className="block mt-5 text-sm font-semibold neon-label">MOBILE NUMBER</label>
          <div className="flex gap-2 mt-1">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="p-3 rounded-xl bg-white/10 border border-cyan-400/40 text-white outline-none neon-input"
            >
              <option className="bg-amber-950" value="+91">+91</option>
              <option className="bg-amber-950" value="+1">+1</option>
              <option className="bg-amber-950" value="+44">+44</option>
              <option className="bg-amber-950" value="+61">+61</option>
            </select>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="flex-1 p-3 rounded-xl bg-white/10 border border-cyan-400/40 text-white outline-none neon-input"
              placeholder="1234567890"
              required
            />
          </div>

          {/* REGISTER BUTTON */}
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-full font-semibold
                       bg-linear-to-r from-purple-500 to-cyan-500
                       shadow-[0_0_15px_rgba(170,50,255,0.8)]
                       hover:shadow-[0_0_25px_rgba(0,200,255,0.9)]
                       transition-all neon-button cursor-pointer"
          >
            REGISTER NOW
          </button>

        </form>
      </div>

      {/* ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes popupShow {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .neon-input:hover { box-shadow: 0 0 12px rgba(0, 200, 255,0.5); }
        .neon-label { text-shadow: 0 0 6px rgba(0, 200, 255,0.6); }
        .neon-button:hover { transform: translateY(-2px); }
      `}</style>
    </div>
  );
};

export default RegisterPopup;
