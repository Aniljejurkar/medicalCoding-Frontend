
// import React, { useEffect, useState } from "react";
// import { assets } from "../src/assets/assets";

// const MedicalCodingBanner = () => {
//   const logoes = [
//     assets.logoImg1,
//     assets.logoImg2,
//     assets.logoImg3,
//     assets.logoImg4,
//     assets.logoImg5,
//     assets.logoImg6,
//     assets.logoImg7,
//     assets.logoImg8
//   ];

//   // 🔥 Background Auto Change Logic
//   const bgImages = [
//     assets.AI_robot,
//     assets.Market_trend,
//     assets.coding_Img
//   ];

//   const [currentBg, setCurrentBg] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBg((prev) => (prev + 1) % bgImages.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="bg-[#0B0C2A] text-black w-full min-h-screen flex flex-col items-center py-12 md:px-20 mt-16"
//       style={{
//         backgroundImage: `url(${bgImages[currentBg]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         transition: "background-image 1s ease"
//       }}
//     >
//       {/* Main Container */}
//       <div className="max-w-7xl w-full px-6 grid md:grid-cols-2">
        
//         {/* Left Content */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Medical Coding Course
//           </h2>

//           <ul className="text-lg text-black">
//             <li>• 90 Hrs Medical Coding Training (60 Hrs Lecture + 30 Hrs Project Sessions)</li>
//             <li>• AAPC CPC Exam Assistance</li>
//             <li>• Earn the prestigious ICD-10 CM Coding Certification</li>
//           </ul>

//           <div className="mt-8">
//             <p className="font-semibold text-yellow-600 text-lg">
//               ★ ★ ★ ★ ★ <span className="text-black">4.9</span> (1251 Ratings){" "}
//               <span className="text-black">• 6210 Learners</span>
//             </p>
//           </div>
//         </div>

//         {/* Right Form */}
//         <div className="bg-white text-gray-900 rounded-xl shadow-xl p-8 max-w-sm mx-auto w-full md:ml-10">
//           <h3 className="text-xl font-semibold mb-4 text-center text-[#0B0C2A]">
//             Download Course Brochure
//           </h3>

//           <form className="space-y-4">
//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Enter email here"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             {/* Mobile Number */}
//             <div className="flex gap-2">
//               <select className="border border-gray-300 rounded-md px-3 py-2 w-1/2 text-sm text-gray-500">
//                 <option value="+91">India +91</option>
//                 <option value="+1">USA +1</option>
//                 <option value="+44">UK +44</option>
//                 <option value="+92">Pakistan +92</option>
//                 <option value="+61">Australia +61</option>
//                 <option value="+81">Japan +81</option>
//                 <option value="+49">Germany +49</option>
//               </select>

//               <input
//                 type="tel"
//                 placeholder="Mobile Number"
//                 maxLength={10}
//                 pattern="[0-9]{10}"
//                 inputMode="numeric"
//                 onInput={(e) => {
//                   e.target.value = e.target.value.replace(/[^0-9]/g, "");
//                 }}
//                 className="border border-gray-300 rounded-md px-3 py-2 w-2/3 appearance-none"
//                 required
//               />
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-[#2E3192] text-white py-2 rounded-md font-medium hover:bg-[#1c1f73] transition cursor-pointer"
//             >
//               Send Me Brochure »
//             </button>
//           </form>

//           {/* Govt Logos */}
//           <div className="flex justify-center mt-6">
//             <img
//               src={assets.govImg}
//               alt="Gov-Image"
//               className="w-full h-auto rounded-md"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Sliding Logos */}
//       <div className="w-full mt-16 py-6 overflow-hidden px-6">
//         <div className="flex animate-slide gap-6">
//           {logoes.concat(logoes).map((logo, i) => (
//             <div key={i} className="flex justify-center items-center">
//               <img
//                 src={logo}
//                 alt={`logo-${i}`}
//                 className="w-28 md:w-32 h-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MedicalCodingBanner;


import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { API_BASE_URL } from "../config/api";

const MedicalCodingBanner = () => {
  const logoes = [
    assets.logoImg1,
    assets.logoImg2,
    assets.logoImg3,
    assets.logoImg4,
    assets.logoImg5,
    assets.logoImg6,
    assets.logoImg7,
    assets.logoImg8
  ];

  // 🔥 Background Auto Change Logic
  const bgImages = [
    assets.AI_robot,
    assets.Market_trend,
    assets.coding_Img
  ];

  const [currentBg, setCurrentBg] = useState(0);

  // 🔥 Form States
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };
    checkLogin();
    window.addEventListener("authChanged", checkLogin);
    return () => window.removeEventListener("authChanged", checkLogin);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🔥 API Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    if (!isLoggedIn) {
      alert("Please login first to download brochure!");
      return;
    }

    if (!email || !mobile) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/brochure/download`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams({
            email: email,
            phone: `${countryCode}${mobile}`
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to download brochure");
      }

      // 🔥 Convert response to blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // 🔥 Auto download
      const a = document.createElement("a");
      a.href = url;
      a.download = "course-brochure.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);

      alert("Brochure downloaded successfully!");

      // Reset form
      setEmail("");
      setMobile("");
      setCountryCode("+91");

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-[#0B0C2A] text-black w-full min-h-screen flex flex-col items-center py-12 md:px-20 mt-16"
      style={{
        backgroundImage: `url(${bgImages[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease"
      }}
    >
      {/* Main Container */}
      <div className="max-w-7xl w-full px-6 grid md:grid-cols-2">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Medical Coding Course
          </h2>

          <ul className="text-lg text-black">
            <li>• 90 Hrs Medical Coding Training</li>
            <li>• AAPC CPC Exam Assistance</li>
            <li>• ICD-10 CM Certification</li>
          </ul>

          <div className="mt-8">
            <p className="font-semibold text-yellow-600 text-lg">
              ★ ★ ★ ★ ★ <span className="text-black">4.9</span> (1251 Ratings)
              <span className="text-black"> • 6210 Learners</span>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white text-gray-900 rounded-xl shadow-xl p-8 max-w-sm mx-auto w-full md:ml-10">
          <h3 className="text-xl font-semibold mb-4 text-center text-[#0B0C2A] ">
            Download Course Brochure
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <input
              type="email"
              placeholder="Enter email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />

            {/* Mobile */}
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-1/2 text-sm"
              >
                <option value="+91">India +91</option>
                <option value="+1">USA +1</option>
                <option value="+44">UK +44</option>
                <option value="+92">Pakistan +92</option>
                <option value="+61">Australia +61</option>
                <option value="+81">Japan +81</option>
                <option value="+49">Germany +49</option>
              </select>

              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                maxLength={10}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/[^0-9]/g, ""))
                }
                className="border border-gray-300 rounded-md px-3 py-2 w-2/3"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2E3192] text-white py-2 rounded-md font-medium hover:bg-[#1c1f73] cursor-pointer"
            >
              {loading ? "Downloading..." : "Send Me Brochure »"}
            </button>
          </form>

          {/* Govt Logos */}
          <div className="flex justify-center mt-6">
            <img src={assets.govImg} alt="Gov" />
          </div>
        </div>
      </div>

      {/* Sliding Logos */}
      <div className="w-full mt-16 py-6 overflow-hidden px-6">
        <div className="flex animate-slide gap-6">
          {logoes.concat(logoes).map((logo, i) => (
            <img key={i} src={logo} className="w-28 md:w-32" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalCodingBanner;
