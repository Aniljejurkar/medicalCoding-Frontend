// PopupForm.jsx
import React from "react";
import { assets } from "../src/assets/assets";

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-white w-11/12 max-w-lg p-8 rounded-2xl shadow-2xl relative scale-100 animate-popup rounded-bl-[60px]">

        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-3xl font-bold cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>

        {/* FORM START */}
        <form
          onSubmit={(e) => e.preventDefault()}  // for now prevent submit
        >
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={assets.formLogo} alt="logo" className="h-12" />
          </div>

          <p className="text-center text-gray-700 mb-5 text-xs">
            <span className="text-3xl">👋</span> Hi, Do you want to take 10 Minutes Counselling worth <del>$25</del> for FREE?
          </p>

          {/* EMAIL FLOATING LABEL */}
          <div className="relative mb-4 ">
            <input
              type="email"
              id="email"
              required
              className="peer w-full border px-4 py-3 rounded-md 
                         placeholder-transparent focus:border-[#4C34A5] outline-none"
              placeholder="Email"
            />

            <label
              htmlFor="email"
              className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all
                         peer-focus:-top-3 peer-focus:text-sm
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
            >
              Email
            </label>
          </div>

          {/* PHONE FLOATING LABEL */}
          <div className="flex gap-3 mb-4">
            <select className="border px-4 py-3 rounded-md w-1/3" required>
              <option value="">Select</option>
              <option value="91">India (+91)</option>
            </select>

            <div className="relative w-2/3">
              <input
                type="text"
                id="phone"
                required
                className="peer w-full border px-4 py-3 rounded-md 
                           placeholder-transparent focus:border-[#4C34A5] outline-none"
                placeholder="Phone"
              />

              <label
                htmlFor="phone"
                className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all
                           peer-focus:-top-3 peer-focus:text-sm
                           peer-placeholder-shown:top-3 peer-placeholder-shown:text-base "
              >
                Phone
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-5 w-full bg-[#4C34A5] text-white py-3 rounded-full text-lg cursor-pointer"
          >
            SUBMIT
          </button>

          <p className="text-center mt-3 text-gray-600 text-xs">
            Our Career Advisor will give you a call shortly
          </p>
        </form>
        {/* FORM END */}

      </div>
    </div>
  );
};

export default PopupForm;
