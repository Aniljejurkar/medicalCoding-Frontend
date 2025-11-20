import React, { useState } from "react";

const faqs = [
  {
    q: "What is the Scope & Modules are covered in the Online Medical Coding Course?",
    a: "The scope of Online Medical Coding Course at Henry Harvin consists of 15 module courses that include an introduction, coding manuals, medical terminology with an introduction to the coding process, detailed explanation, exploring the topics and much more. They also include 2 complimentary modules on soft skill development and resume writing.",
  },
  {
    q: "How long does it take to become a Medical Coder?",
    a: "It usually depends on the course you choose and your learning pace.",
  },
  {
    q: "Medical Coding Training After 12th with fees at Henry Harvin.",
    a: "You can join medical coding training after 12th. Fees vary depending on the course.",
  },
];

const AccordionHH = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="bg-[#FFF9F0] min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">

        {faqs.map((item, i) => (
          <div key={i} className="border-b border-[#e4dfd4] py-6 cursor-pointer">
            
            {/* Question Row */}
            <div
              className="flex justify-between items-center"
              onClick={() => toggle(i)}
            >
              <h2 className="text-xl font-semibold text-[#2d2d2d]">
                {item.q}
              </h2>

              {/* plus / minus icon */}
              <span className="
                w-10 h-10 flex items-center justify-center rounded-full 
                border-2 border-[#d7d2c5] text-[#4a4a4a] text-xl hover:border-blue-400 hover:text-blue-400
              ">
                {openIndex === i ? "–" : "+"}
              </span>
            </div>

            {/* Answer */}
            {openIndex === i && (
              <p className="mt-4 text-[#4a4a4a] leading-relaxed text-[17px]">
                {item.a}
              </p>
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

export default AccordionHH;
