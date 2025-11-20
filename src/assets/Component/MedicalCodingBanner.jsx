import React from "react";
import { assets } from "../src/assets/assets";

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

  const starFilledIcon = [assets.starIcon * 3];

  return (
    <section className="bg-[#0B0C2A] text-white w-full min-h-screen flex flex-col items-center py-12 md:px-20 mt-10">
      {/* Main Container */}
      <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 ">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Medical Coding Course
          </h2>

          <ul className=" text-lg text-gray-200">
            <li>• 90 Hrs Medical Coding Training (60 Hrs Lecture + 30 Hrs Project Sessions)</li>
            <li>• AAPC CPC Exam Assistance</li>
            <li>• Earn the prestigious ICD-10 CM Coding Certification</li>
          </ul>

          <div className="md:flex mt-5">
            <h1 className="text-xl font-playfair font-bold">Forbes</h1>
            <p className="mt-1">features Henry Harvin
            4.8/5</p>
          </div>

          <div className="mt-8">
            <p className="font-semibold text-yellow-400 text-lg">
              4.9 (1251 Ratings) • 6210 Learners
            </p>
            <p className="text-sm text-gray-300 mt-1">
              Forbes features Henry Harvin • 4.8 / 5
            </p>
          </div>
        </div>

        {/* Right Form — shifted slightly right */}
        <div className="bg-white text-gray-900 rounded-xl shadow-xl p-8 max-w-sm mx-auto w-full md:ml-10 ">
          <h3 className="text-xl font-semibold mb-4 text-center text-[#0B0C2A]">
            Download Course Brochure
          </h3>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter email here"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required
            />
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md px-3 py-2 w-1/2 text-sm text-gray-500">
                <option>(India +91)</option>
                <option>(USA +1)</option>
                <option>(Uk +44)</option>
                <option>(Pakistan +92)</option>
                <option>+91 (India)</option>
                <option>+91 (India)</option>
                <option>+91 (India)</option>
                <option>+91 (India)</option>
                <option>+91 (India)</option>
              </select>
              <input
                type="number"
                placeholder="Phone"
                className="border border-gray-300 rounded-md px-3 py-2 w-2/3" required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2E3192] text-white py-2 rounded-md font-medium hover:bg-[#1c1f73] transition"
            >
              Send Me Brochure »
            </button>
          </form>

          {/* Gov Logos */}
          <div className="flex justify-center mt-6">
            <img
              src={assets.govImg}
              alt="Gov-Image"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>

    
     {/* Full-Width Sliding Logo Row */}
        <div className="w-full bg-[#10122E] mt-16 py-6 overflow-hidden">
            <div className="flex animate-slide gap-6">
              {logoes.concat(logoes).map((logo, i) => (
                <div key={i} className="flex justify-center items-center">
                  <img
                    src={logo}
                    alt={`logo-${i}`}
                    className="w-28 md:w-32 h-auto object-contain"
                  />
                </div>
              ))}
            </div>
        </div>

    </section>
  );
};

export default MedicalCodingBanner;
