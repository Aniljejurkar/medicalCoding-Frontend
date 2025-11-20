import React, { useState } from "react";

const Curriculum = () => {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (i) => {
    setOpenModule(openModule === i ? null : i);
  };

  const modules = [
    {
      title: "Module 1: Medical Terminology",
      desc:"This module will help the candidate to learn the Introduction to Medical Terminology Medical Terminology: Dividing and Combining Terms",
      topics: [
        "Introduction to Medical Words",
        "Prefixes, Suffixes, Root Words",
        "Medical Word Formation",
        "Special Terms (Eponyms, Acronyms)"
      ],
    },
    {
      title: "Module 2: Anatomy & Physiology",
      topics: [
        "Body Systems Overview",
        "Organs and Functions",
        "Diseases & Pathology",
        "Diagnostic Procedures"
      ],
    },
    {
      title: "Module 3: ICD-10-CM Coding",
      topics: [
        "Coding Guidelines",
        "Chapters & Sections",
        "Practicum Exercises",
        "Case Studies"
      ],
    },
  ];

  return (
    <div className="space-y-6 mt-4">
      {modules.map((module, index) => (
        <div key={index}>

          {/* Module Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {module.title}
            </h3>

            <button
              onClick={() => toggleModule(index)}
              className="px-4 py-1 text-sm font-medium bg-purple-900 text-white rounded-md"
            >
              Preview
            </button>
          </div>

          {/* Module Content */}
          {openModule === index && (
            <ul className="mt-3 list-disc ml-6 space-y-1 text-gray-700 text-[15px]">
              {module.topics.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          )}

        </div>
      ))}
    </div>
  );
};

export default Curriculum;
