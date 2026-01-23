import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const ADMIN_CREDENTIALS = { email: "root@gmail.com", pass: "root" };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.pass) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "admin");
      alert("Admin Access Granted");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form onSubmit={handleAdminLogin} className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">ADMIN PANEL LOGIN</h2>
        <input 
          type="email" placeholder="Admin Email" required
          className="w-full p-3 mb-4 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Password" required
          className="w-full p-3 mb-6 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
          LOGIN AS ADMIN
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;