"use client";

import { useState } from "react";
const FaqHero = () => {
  const minusIcon = "-";
  const plusIcon = "+";

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <div>
      {" "}
      <div className="relative">
        <div className="p-10 md:p-20 flex flex-col gap-5  items-center bg-[#D6F7FF]">
          <img src="/Images/faq/faqHero.png" alt="faq" />
          <h1 className="font-recoleta relative  text-center  text-[24px] lg:text-[36px]  xl:text-[40px] xll:text-[48px] 2xl:text-[52px] text-[#0F143A]">
            Frequently Asked Questions
          </h1>
          <p
            className={` text-[#0F143A] max-w-[600px] font-mazzardMedium opacity-80 text-center text-[14px] md:text-[24px]  font-normal`}
          >
            Dont worry, youre not alone! Here are some of the top questions we
            get asked all of the time.
          </p>
        </div>
        <>
          <div
            className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white"
            onClick={toggleExpanded}
          >
            <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
              <h5 className="flex-1">{"title"}</h5>
              <div className="flex-none pl-2">
                {expanded ? minusIcon : plusIcon}
              </div>
            </div>
            <div
              className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
                expanded ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="pb-4 text-left">{"content"}</p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default FaqHero;
