import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, Users, MessageSquare, Download,
  MousePointer2, LogOut, Clock, TrendingUp,
  Calendar
} from 'lucide-react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [activeView, setActiveView] = useState('dashboard');

  /* ================= SECURITY ================= */
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userRole = localStorage.getItem("userRole");

    if (!isLoggedIn || userRole !== "admin") {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin");
  };

  /* ================= USERS API ================= */
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [userIdSearch, setUserIdSearch] = useState("");

  useEffect(() => {
    if (activeView === "registrations") {
      fetchAllUsers();
    }
  }, [activeView]);

  const fetchAllUsers = async () => {
    try {
      setLoadingUsers(true);

      const res = await fetch("https://medical-backend-4-uv0o.onrender.com/api/users");

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err.message);
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchUserById = async () => {
    if (!userIdSearch.trim()) return;

    try {
      setLoadingUsers(true);

      const res = await fetch(
        `https://medical-backend-4-uv0o.onrender.com/api/users/${userIdSearch}`
      );

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUsers([data]);
    } catch (err) {
      alert("User not found");
    } finally {
      setLoadingUsers(false);
    }
  };

  const filteredUsers = users.filter(u =>
    u.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.mobile?.includes(searchTerm)
  );

  /* ================= INQUIRIES API ================= */
  const [inquiries, setInquiries] = useState([]);
  const [loadingInquiries, setLoadingInquiries] = useState(false);

  useEffect(() => {
    if (activeView === "inquiries") {
      fetchAllInquiries();
    }
  }, [activeView]);

  const fetchAllInquiries = async () => {
    try {
      setLoadingInquiries(true);

      const res = await fetch("https://medical-backend-4-uv0o.onrender.com/api/inquiry/all");

      if (!res.ok) {
        throw new Error("Failed to fetch inquiries");
      }

      const data = await res.json();
      setInquiries(data);
    } catch (err) {
      console.error("Error fetching inquiries:", err.message);
    } finally {
      setLoadingInquiries(false);
    }
  };

  /* ================= DASHBOARD STATS ================= */
  const processStats = [
    { id: 1, label: "Today's Process", count: "18", icon: <Clock size={20}/> },
    { id: 2, label: "Weekly Process", count: "124", icon: <TrendingUp size={20}/> },
    { id: 3, label: "Monthly Process", count: "542", icon: <Calendar size={20}/> },
  ];

  return (
    <div className="flex min-h-screen bg-[#f3f4f9]">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-[#27a861] text-white hidden lg:block">
        <div className="p-6 text-center">
          <img src={assets.logo} alt="logo" className="h-14 mx-auto" />
        </div>

        <nav className="p-4 space-y-2">
          <SidebarItem icon={<LayoutDashboard size={18}/>} label="Dashboard"
            active={activeView==="dashboard"}
            onClick={()=>setActiveView("dashboard")}
          />
          <SidebarItem icon={<Users size={18}/>} label="New Registrations"
            active={activeView==="registrations"}
            onClick={()=>setActiveView("registrations")}
          />
          <SidebarItem icon={<MessageSquare size={18}/>} label="Recent Inquiries"
            active={activeView==="inquiries"}
            onClick={()=>setActiveView("inquiries")}
          />
          <SidebarItem icon={<Download size={18}/>} label="Brochure Downloads" />
          <SidebarItem icon={<MousePointer2 size={18}/>} label="Demo Requests" />
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1">
        <header className="h-16 bg-white flex justify-end px-6 items-center border-b">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md flex gap-2"
          >
            <LogOut size={16}/> Logout
          </button>
        </header>

        <div className="p-6">
          <div className="bg-white rounded-xl border min-h-[450px]">

            {/* ========== DASHBOARD VIEW ========== */}
            {activeView === "dashboard" && (
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {processStats.map(stat => (
                  <div key={stat.id} className="p-6 border rounded-xl">
                    {stat.icon}
                    <h3 className="text-3xl font-bold mt-3">{stat.count}</h3>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* ========== USERS VIEW ========== */}
            {activeView === "registrations" && (
              <>
                <TableTitle
                  title="Registered Users"
                  onBack={()=>setActiveView("dashboard")}
                />

                <div className="p-4 flex gap-3">
                  <input
                    className="border px-3 py-2 rounded w-1/3"
                    placeholder="Search name / email / mobile"
                    value={searchTerm}
                    onChange={e=>setSearchTerm(e.target.value)}
                  />
                  <input
                    className="border px-3 py-2 rounded w-1/3"
                    placeholder="Search by User ID"
                    value={userIdSearch}
                    onChange={e=>setUserIdSearch(e.target.value)}
                  />
                  <button
                    onClick={fetchUserById}
                    className="bg-blue-600 text-white px-4 rounded"
                  >
                    Search
                  </button>
                </div>

                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-3">Name</th>
                      <th className="p-3">Mobile</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">User ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadingUsers ? (
                      <tr>
                        <td colSpan="4" className="text-center p-6">
                          Loading...
                        </td>
                      </tr>
                    ) : filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center p-6">
                          No users found
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map(user => (
                        <tr key={user.id} className="border-t hover:bg-slate-50">
                          <td className="p-3">{user.fullName}</td>
                          <td className="p-3">{user.mobile}</td>
                          <td className="p-3">{user.email}</td>
                          <td className="p-3">{user.id}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </>
            )}

            {/* ========== INQUIRIES VIEW ========== */}
            {activeView === "inquiries" && (
              <>
                <TableTitle
                  title="Recent Inquiries"
                  onBack={()=>setActiveView("dashboard")}
                />

                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-3">Name</th>
                      <th className="p-3">Phone</th>
                      <th className="p-3">Inquiry Type</th>
                      <th className="p-3">Message</th>
                      <th className="p-3">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadingInquiries ? (
                      <tr>
                        <td colSpan="5" className="text-center p-6">
                          Loading...
                        </td>
                      </tr>
                    ) : inquiries.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center p-6">
                          No inquiries found
                        </td>
                      </tr>
                    ) : (
                      inquiries.map(inquiry => (
                        <tr key={inquiry.id} className="border-t hover:bg-slate-50">
                          <td className="p-3">{inquiry.name}</td>
                          <td className="p-3">{inquiry.phone}</td>
                          <td className="p-3">{inquiry.inquiryType}</td>
                          <td className="p-3">{inquiry.message}</td>
                          <td className="p-3">{new Date(inquiry.createdAt).toLocaleString()}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

/* ================= HELPERS ================= */
const SidebarItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex gap-3 px-4 py-3 rounded-lg ${
      active ? 'bg-black/20 font-bold' : 'hover:bg-white/10'
    }`}
  >
    {icon} {label}
  </button>
);

const TableTitle = ({ title, onBack }) => (
  <div className="px-6 py-4 border-b flex justify-between">
    <h3 className="font-bold uppercase text-sm">{title}</h3>
    <button
      onClick={onBack}
      className="text-xs border px-3 py-1 rounded"
    >
      Back
    </button>
  </div>
);

export default AdminDashboard;
