import React from "react";
import { assets } from "../src/assets/assets";

export default function MedicalCoddingCertificate() {
  return (
    <section className="w-full bg-[#2b2133] text-white" id="targetdiv">

      {/* Top banner container */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-6">

        {/* Left: Heading */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Henry Harvin<sup className="align-super">®</sup>
            <br />
            Ranks #1 for
            <br />
            Medical Coding
            <br />
            Course in India
            <br />
            <span className="text-xl md:text-2xl font-medium">
              by The Tribune
            </span>
          </h1>
        </div>

        {/* Center: Demo form */}
        <div className="w-full md:w-[420px]" >
          <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl border-4 border-[#f3eaff]">
            <h3 className="text-center text-xl font-semibold mb-4">
              Book A Demo Class,{" "}
              <span className="text-red-500">For 99$ Free !</span>
            </h3>

            <form className="space-y-4">
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-200 placeholder-gray-400"
                type="email"
                placeholder="Email" required
              />

              <div className="flex gap-3 flex-wrap">
                <select className="min-w-[110px] px-3 py-3 rounded-lg border border-gray-200">
                  <option>India (+91)</option>
                  <option>USA (+1)</option>
                </select>

                <input
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 placeholder-gray-400"
                  type="tel"
                  placeholder="Phone" required
                />
              </div>

              <button className="w-full bg-[#4b2b78] text-white py-3 rounded-lg font-semibold hover:bg-blue-400 cursor-pointer">
                SUBMIT »
              </button>
            </form>
          </div>
        </div>

        {/* Right: Certificate (Desktop Only) */}
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

      {/* Mobile Certificate (Below Form) */}
      <div className="md:hidden flex justify-center mt-6 px-4">
        <div className="w-[90%] max-w-[350px] rounded-lg overflow-hidden shadow-lg border-4 border-[#f3eaff] bg-white">
          <img
            src={assets.certificate}
            alt="certificate"
            className="w-full object-contain"
          />
        </div>
      </div>

    </section>
  );
}
