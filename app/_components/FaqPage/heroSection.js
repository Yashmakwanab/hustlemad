"use client";

import { useState } from "react";
import ButtonPrimary from "../commonComponents/ButtonPrimary";
import "./style.css";

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className=" my-3 shadow-sm cursor-pointer bg-white  border-[1px] border-[#001636ac] rounded-[12px] flex flex-col	"
      onClick={toggleExpanded}
    >
      <div
        className={`${
          expanded ? "pb-4" : ""
        }  px-6 py-8 xl:px-10 text-left items-center select-none flex justify-between flex-row`}
      >
        <h5 className="flex-1 text-[#0F143A] font-recoleta w-full text-[16px]  md:text-[22px] nxl:text-[28px] xl:text-[28px]   max-w-[90%] ">
          {title}
        </h5>
        <div className="flex-none pl-2 ">
          {expanded ? (
            <img src="/Images/faq/cross.svg" alt="faq" className="w-[24px]" />
          ) : (
            <img src="/Images/faq/plus.svg" alt="faq" className="w-[24px]" />
          )}
        </div>
      </div>
      <div
        className={`px-6 xl:px-10 pt-0 overflow-hidden transition-[max-height] duration-500  max-w-[90%] ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-8 text-left font-mazzard leading:3 md:leading-7 nxl:leading-9 text-[12px] md:text-[20px] nxl:text-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
}

const FaqHero = () => {
  const handleClick = () => {
    console.log("btn clicked");
  };
  return (
    <div>
      {" "}
      <div className="relative">
        <div className="p-5 md:p-20 flex flex-col gap-2 items-center">
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
        <div className="max-w-[1000px] flex flex-col m-5 gap-10 mb-20">
          <div className=" flex flex-col   md:mt-[-50px]  ">
            <Accordion
              title="Alright, but what exactly do you do?"
              content={
                "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design."
              }
            />
            <Accordion
              title="I don't need a brand strategist, I need help executing an upcoming campaign. Can we still work together?"
              content={
                "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design."
              }
            />
            <Accordion
              title="I don't need a brand strategist, I need help executing an upcoming campaign. Can we still work together?"
              content={
                "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design."
              }
            />
            <Accordion
              title="Are your Rates competetive?"
              content={
                "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design."
              }
            />
          </div>
          <div className="faq_container pt-[25px]">
            <div className="faq_content items-center flex-col-reverse sm:flex-row  ">
              <div className="ctc_section w-full sm:w-[50%] items-center sm:items-start  ">
                <h2 className="font-recoleta text-center sm:text-left text-[24px] sm:text-[30px] md:text-[40px] font-[600] leading-[27px] sm:leading-[40px] xl:leading-[44px] text-[#0F143A] ">
                  Cant find what youre looking for?
                </h2>
                <p
                  className={`tagline font-mazzardMedium text-[12px] md:text-[16px] lg:text-[20px] 2xl:text-[24px] md:leading-[30px]   lg:text-left text-[#0F143A]  text-center sm:text-left `}
                >
                  You can post your question. Our team will reach out to you as
                  soon as possible!
                </p>

                <ButtonPrimary
                  className={"font-recoleta"}
                  handleClick={handleClick}
                  content={"Contact Us"}
                />
              </div>
              <img
                src="/Images/faq/faqFooter.png"
                alt="Schedule Image"
                className="max-h-[250px] max-w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
