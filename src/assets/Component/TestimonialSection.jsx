import React, { useState, useEffect } from "react";
import { assets } from "../src/assets/assets";

const testimonials = [
  {
    img: assets.Srikanth,
    name: "Srikanth",
    text: `"I am happy to say that I am hooked when I become a successful medical coder. This course would have been helpful in reconsideration."`,
    role: "Medical Codes Developer",
  },
  {
    img: assets.Anamika,
    name: "Anamika",
    text: `"This course would have been helpful in reconsideration. I am happy to say that I am hooked when I become a successful medical coder."`,
    role: "Medical Codes Developer",
  },
  {
    img: assets.Pal,
    name: "Pal",
    text: `"It really is an honor to receive my certification, once I completed the course from Henry Harvin® institute."`,
    role: "Medical Coder",
  },
  {
    img: assets.Divya,
    name: "Divya",
    text: `"This course was extraordinary for assisting me with choosing if I needed to be a medical coder. Thanks to Henry Hervin`,
    role: "Developer",
  },
];

const TestimonialSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // Number of testimonials to show

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  // Get current visible testimonials
  const currentTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    currentTestimonials.push(testimonials[(startIndex + i) % testimonials.length]);
  }

  return (
    <section className="bg-[#F8FAFF] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-12">
          Join Henry Harvin® Community of 4,60,000+ Professionals
        </h1>

        <div className="flex justify-center gap-6 overflow-hidden">
          {currentTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden w-85 flex-shrink-0 transition-transform duration-500 flex flex-col"
            >
              {/* Fixed image height */}
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-35 object-cover px-20 flex-shrink-0"
              />

              {/* Fixed testimonial text height */}
              <div className="bg-[#F2E38B] text-gray-800 px-6 py-4 text-center flex-1 flex flex-col justify-center">
                <p className="text-sm mb-2 font-semibold text-gray-500">{t.text}</p>
                <p className="text-[#C94E00] font-semibold mt-auto">- {t.name}</p>
              </div>

              {/* Fixed role bar */}
              <div className="bg-[#A6A16D] text-white py-2 text-center font-semibold flex-shrink-0">
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
