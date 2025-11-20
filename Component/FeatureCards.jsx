import React, { useEffect } from "react";

const features = [
  {
    title: "Become specialized in important aspects",
    desc: "Become specialized in important aspects of Medical Coding such as ICD-10_CM, CPT, and HCPCS",
    color: "from-red-300 to-pink-300",
  },
  {
    title: "In-depth knowledge of ICD-10 CM",
    desc: "In-depth knowledge of ICD-10 CM, coding system, and V codes, E codes",
    color: "from-gray-300 to-gray-200",
  },
  {
    title: "AAPC curriculum",
    desc: "AAPC curriculum with 15 essential learning modules.",
    color: "from-sky-300 to-indigo-300",
  },
  {
    title: "Access T.P.I.C.P.E.B.H.M feature",
    desc: "Access the T.P.I.C.P.E.B.H.M feature of Medical Coder",
    color: "from-lime-300 to-green-300",
  },
  {
    title: "1-Year Gold Membership",
    desc: "Get a 1-Year Gold Membership of Medical Academy",
    color: "from-purple-300 to-fuchsia-300",
  },
  {
    title: "100% Money-back Guarantee",
    desc: "100% Money-back Guarantee program*",
    color: "from-cyan-300 to-blue-300",
  },
];

const FeatureCards = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          } else {
            entry.target.classList.remove("animate-show");
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-200 flex flex-col items-center py-16">
      <h1 className="text-3xl font-extrabold mb-12 text-gray-800 tracking-wide">
        Henry Harvin Exclusive Course Offering
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {features.map((item, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`
              feature-card opacity-0 translate-y-6
              bg-white/40 backdrop-blur-xl border border-white/60 
              rounded-3xl p-7 shadow-lg 
              hover:shadow-2xl transition-all duration-300 
              hover:-translate-y-3 cursor-pointer
              bg-linear-to-br ${item.color}
            `}
          >
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              {item.title}
            </h2>
            <p className="text-gray-800 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          .animate-show {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}
      </style>
    </div>
  );
};

export default FeatureCards;
