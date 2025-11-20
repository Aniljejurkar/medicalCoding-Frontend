import React from "react";

const features = [
  {
    title: "Become specialized in important aspects",
    desc: "Become specialized in important aspects of Medical Coding such as ICD-10_CM, CPT, and HCPCS",
    color: "bg-red-200",
  },
  {
    title: "In-depth knowledge of ICD-10 CM",
    desc: "In-depth knowledge of ICD-10 CM, coding system, and V codes, E codes",
    color: "bg-gray-300",
  },
  {
    title: "AAPC curriculum",
    desc: "AAPC curriculum with 15 essential learning modules.",
    color: "bg-sky-200",
  },
  {
    title: "Access the T.P.I.C.P.E.B.H.M feature",
    desc: "Access the T.P.I.C.P.E.B.H.M feature of Medical Coder",
    color: "bg-lime-200",
  },
  {
    title: "Get a 1- Year",
    desc: "Get a 1- Year Gold Membership of Medical Academy",
    color: "bg-purple-200",
  },
  {
    title: "100% Money-back",
    desc: "100% Money-back Guarantee program*",
    color: "bg-cyan-200",
  },
];

const FeatureCards = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10 text-center">
      
      {/* Title */}
      <h1 className="text-2xl font-bold mb-10">
        Henry Harvin Exclusive Course Offering
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`${item.color} rounded-2xl p-6 shadow-md transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:brightness-110`}
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
