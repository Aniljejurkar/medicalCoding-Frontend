import React from "react";

const stats = [
  { number: "460,000+", text: "Trained", color: "bg-yellow-100 text-orange-600" },
  { number: "6,700+", text: "Reviews with 4.5/5 rating", color: "bg-red-100 text-red-600" },
  { number: "7,000+", text: "Live Classes Every Month", color: "bg-blue-100 text-blue-700" },
  { number: "210+", text: "Corporate Partners", color: "bg-purple-100 text-purple-600" },
  { number: "180+", text: "College Partners", color: "bg-green-100 text-green-600" },
  { number: "93%", text: "Reported Career Benefits", color: "bg-sky-100 text-sky-700" },
];

const WhyHenryHarvin = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Why Henry Harvin<span className="text-purple-600">®</span>?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Henry Harvin<span className="text-purple-600">®</span> ranks amongst the Top 500 Global
          EdTech Companies with 4,60,000+ Alumni, 900+ B2B Clients, 500+ Award Winning Trainers,
          and 1200+ Courses.
        </p>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 flex flex-col items-center rounded-xl shadow-sm"
            >
              <div
                className={`w-24 h-24 flex items-center justify-center rounded-full mb-4 ${item.color}`}
              >
                <span className="text-2xl font-bold">{item.number}</span>
              </div>
              <p className="text-gray-700 font-medium text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyHenryHarvin;
