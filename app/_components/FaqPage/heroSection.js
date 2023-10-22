"use client";

import { useState } from "react";
import ButtonPrimary from "../commonComponents/ButtonPrimary";
import "./style.css";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import Link from "next/link";

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="my-2 sm:my-4 md:my-2 shadow-sm cursor-pointer bg-white  border-[1px] border-[#001636ac] rounded-[16px] flex flex-col	"
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
            <ImageWrapper
              src="/Images/faq/cross.webp"
              alt="faq"
              width={100}
              height={100}
              className="w-[24px]"
            />
          ) : (
            <ImageWrapper
              src="/Images/faq/plus.webp"
              alt="faq"
              width={100}
              height={100}
              className="w-[24px]"
            />
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
        <div className=" flex flex-col gap-2 items-center">
          <ImageWrapper
            src="/Images/faq/faqHero.webp"
            alt="faq"
            width={200}
            height={200}
          />
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
        <div className="max-w-[1000px] flex flex-col m-5 ]   gap-10 mb-20">
          <div className="max-w-[1000px] flex flex-col m-2  gap-0 ">
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
          <div className="faq_container sm:pt-[55px] sm:px-[55px] sm:pb-[30px] pt-[30px] px-[30px] pb-[30px]">
            <div className="faq_content items-center justify-between flex-col-reverse sm:flex-row gap-10 ">
              <div className="ctc_section w-full sm:w-[50%] items-center sm:items-start  ">
                <h2 className="font-recoleta text-center sm:text-left text-[24px] sm:text-[30px] md:text-[40px] font-[600] leading-[27px] sm:leading-[40px] xl:leading-[44px] text-[#0F143A] ">
                  Cant find what youre looking for?
                </h2>
                <p
                  className={`tagline font-mazzardMedium 6xl:text-[36px]  2xl:text-[24px] leading-[24px] 2xl:leading-[36px]  lg:text-left text-[#0F143A]  text-center sm:text-left `}
                >
                  You can post your question. Our team will reach out to you as
                  soon as possible!
                </p>

                <Link
                  href="contact"
                  className={
                    "w-fit font-recoleta bg-[#0F143A] px-[24px] lg:px-[32px] py-[8px] lg:py-[11px] xl:py-[7px] rounded-[6px] text-[14px] sm:text-[18px] lg:text-[24px] text-[#FFFFFF] flex m-auto sm:m-0 leading-[16px] sm:leading-[21px] lg:leading-[28px] xl:leading-[33px]"
                  }
                >
                  Contact Us
                </Link>
              </div>
              <ImageWrapper
                src="/Images/faq/faqFooter.webp"
                alt="Schedule Image"
                className="max-h-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
