import React, { useState } from "react";
import { API_BASE_URL } from "../config/api";

const Login = ({ isOpen, onClose, onSwitchToRegister }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Modal check
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

      if (!response.ok) throw new Error("Invalid email or password");

      const user = await response.json();
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));
      window.dispatchEvent(new Event("authChanged"));

      alert("Login Successful!");
      onClose();
    } catch (error) {
      alert("Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md z-[9999] overflow-hidden">
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(0,200,255,0.4)] w-11/12 max-w-md px-8 py-10 rounded-3xl rounded-br-[60px]">
        <button onClick={onClose} className="absolute top-3 right-4 text-3xl font-bold text-white cursor-pointer">×</button>

        <h2 className="text-3xl font-extrabold text-center mb-7 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Login</h2>

        <form className="text-white" onSubmit={handleLogin}>
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-cyan-400/40 outline-none mt-1"
            placeholder="example@gmail.com" required
          />
          <input
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-purple-400/40 outline-none mt-5"
            placeholder="Enter password" required
          />

          <button type="submit" disabled={loading} className="w-full mt-6 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 cursor-pointer">
            {loading ? "LOGGING IN..." : "LOGIN"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-300">
          Don't have an account?{" "}
          <button 
  type="button" 
  onClick={() => {
    console.log("Button clicked, calling onSwitchToRegister");
    onSwitchToRegister(); // <--- Is function ko execute karna zaroori hai
  }} 
  className="text-cyan-400 font-bold hover:underline ml-1 cursor-pointer"
>
  Register Now
</button>
        </div>
      </div>
    </div>
  );
};

export default Login;