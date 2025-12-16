import React, { useState } from "react";
import { API_BASE_URL } from "../src/config/api";

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const user = await response.json();
      console.log("Logged in user:", user);

      alert("Login Successful!");

      // ✅ SAVE LOGIN STATE
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));

      // 🔥 IMPORTANT: Notify TopBar immediately
      window.dispatchEvent(new Event("authChanged"));

      // reset form
      setEmail("");
      setPassword("");
      onClose();
    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center 
                    bg-black/60 backdrop-blur-md z-50 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[450px] h-[450px] bg-blue-500/40 blur-[150px] rounded-full animate-pulse -top-32 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-600/40 blur-[160px] rounded-full animate-ping top-40 -right-32"></div>
      </div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 
                      shadow-[0_0_40px_rgba(0,200,255,0.4)] 
                      w-11/12 max-w-md px-8 py-10 rounded-3xl rounded-br-[60px]
                      animate-[popupShow_0.6s_ease]">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-3xl font-bold text-white hover:text-red-400"
        >
          ×
        </button>

        <h2 className="text-3xl font-extrabold text-center mb-7 
                       bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Login
        </h2>

        <form className="text-white" onSubmit={handleLogin}>
          <label className="block mt-3 text-sm font-semibold neon-label">
            EMAIL (GMAIL)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-cyan-400/40 outline-none mt-1 neon-input"
            placeholder="example@gmail.com"
            required
          />

          <label className="block mt-5 text-sm font-semibold neon-label">
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-purple-400/40 outline-none mt-1 neon-input"
            placeholder="Enter password"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-3 rounded-full font-semibold
                       bg-linear-to-r from-cyan-500 to-purple-500
                       shadow-[0_0_15px_rgba(0,200,255,0.8)]
                       hover:shadow-[0_0_25px_rgba(170,50,255,0.9)]
                       transition-all neon-button disabled:opacity-50"
          >
            {loading ? "LOGGING IN..." : "LOGIN"}
          </button>
        </form>
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

export default Login;
