import React from "react";

const features = [
  { title: "Certified & Experienced Instructors", icon: "📄", bg: "bg-indigo-100" },
  { title: "Gold Membership & Post Training Follow-ups", icon: "🏆", bg: "bg-emerald-100" },
  { title: "Tailor Made Training", icon: "🎓", bg: "bg-rose-100" },
  { title: "Flexible Schedule", icon: "⏰", bg: "bg-pink-200" },
  { title: "Access to the Recorded Sessions", icon: "💼", bg: "bg-teal-200" },
  { title: "10 in 1 Program", icon: "📣", bg: "bg-yellow-200" },
  { title: "Masterclasses By Henry Harvin®", icon: "📊", bg: "bg-lime-200" },
  { title: "One-to-One Training", icon: "👤", bg: "bg-purple-200" },
];

const FeaturesGrid = () => {
  return (
    <div className="py-8 px-4 md:px-10">
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {features.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center 
              rounded-xl md:rounded-2xl 
              p-3 md:p-6 
              shadow-md hover:shadow-xl 
              transition-all duration-300 
              ${item.bg}`}
          >
            {/* ICON SIZE DIFFERENT FOR MOBILE + DESKTOP */}
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">
              {item.icon}
            </div>

            {/* TITLE SIZE DIFFERENT FOR MOBILE + DESKTOP */}
            <h3 className="text-xs sm:text-sm md:text-lg 
              font-semibold text-gray-800 text-center leading-tight">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FeaturesGrid;
