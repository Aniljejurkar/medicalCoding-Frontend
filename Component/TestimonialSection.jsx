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
    text: `"This course was extraordinary for assisting me with choosing if I needed to be a medical coder. Thanks to Henry Harvin"`,
    role: "Developer",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  // Pick 3 visible items
  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section className="bg-[#F8FAFF] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-3xl font-bold mb-12">
          Join Henry Harvin® Community of 4,60,000+ Professionals
        </h1>

        <div className="flex justify-center gap-6 overflow-hidden">

          {visible.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden w-80 shrink-0 
              transform hover:scale-105 transition-all duration-500 
              opacity-0 animate-fade-slide"
            >
              {/* IMAGE */}
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-40 object-cover"
              />

              {/* TEXT BOX */}
              <div className="bg-[#FFF4D6] p-5 flex flex-col justify-between min-h-40">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {t.text}
                </p>
                <p className="text-[#C94E00] font-bold text-lg">- {t.name}</p>
              </div>

              {/* ROLE */}
              <div className="bg-[#A6A16D] text-white py-3 font-medium">
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          .animate-fade-slide {
            animation: fadeSlide 0.6s ease-in-out forwards;
          }
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialSlider;
