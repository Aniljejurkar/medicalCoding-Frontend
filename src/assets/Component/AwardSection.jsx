import React from "react";
import { assets } from "../src/assets/assets";

const awards = [
  { img: assets.award1 },
  { img: assets.award2 },
  { img: assets.award3 },
  { img: assets.award4 },
];

const AwardsSection = () => {
  return (
    <div className="py-8 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-white p-4 w-full md:w-64 flex flex-col items-center rounded-lg shadow-md"
          >
            <img
              src={award.img}
              alt={`award-${index}`}
              className="w-full h-40 object-contain mb-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
