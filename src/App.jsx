import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import RegisterPopup from "./Component/RegisterPopup";
import SocialIcons from "./Component/SocialIcons";
import InquiryPopup from "./Component/InquiryPopup";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";
import Login from "./Component/Login";
import AdminLogin from "./Component/AdminLogin";

// --- Protected Route: Admin Authentication Check ---
const ProtectedRoute = ({ children }) => { 
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole");
  if (!isLoggedIn || userRole !== "admin") return <Navigate to="/admin" replace />;
  return children;
};

// --- Helper Component to handle conditional UI ---
const LayoutWrapper = ({ 
  isRegisterOpen, handleRegisterClose, handleSwitchToLogin, 
  isLoginOpen, setIsLoginOpen, handleSwitchToRegister
}) => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/admin");

  return (
    <div className="relative min-h-screen">

      {/* ❌ Admin pages par popups hide */}
      {!isAdminPath && (
        <>
          {/* Register Popup */}
          <RegisterPopup 
            isOpen={isRegisterOpen} 
            onClose={handleRegisterClose} 
            onSwitchToLogin={handleSwitchToLogin} 
          />

          {/* Login Popup */}
          <Login
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            onSwitchToRegister={handleSwitchToRegister}
          />

          {/* ✅ InquiryPopup ALWAYS mounted */}
          <InquiryPopup />

          {/* Social Icons */}
          <div className="relative z-100">
            <SocialIcons />
          </div>
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const isAdminPath = window.location.pathname.startsWith("/admin");
    const userRole = localStorage.getItem("userRole");

    if (isAdminPath || userRole === "admin") {
      setIsRegisterOpen(false);
      setIsLoginOpen(false);
      return;
    }

    const isRegistered = localStorage.getItem("isRegistered") === "true";
    if (!isRegistered) {
      const timer = setTimeout(() => setIsRegisterOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setTimeout(() => setIsLoginOpen(true), 50);
  };

  const handleRegisterClose = () => {
    setIsRegisterOpen(false);
    localStorage.setItem("isRegistered", "true");
  };

  return (
    <Router>
      <LayoutWrapper 
        isRegisterOpen={isRegisterOpen}
        handleRegisterClose={handleRegisterClose}
        handleSwitchToLogin={handleSwitchToLogin}
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        handleSwitchToRegister={handleSwitchToRegister}
      />
    </Router>
  );
}

export default App;
