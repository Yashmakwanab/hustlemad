"use client";
import React, { useState } from "react";
import "./style.css";

import ClientLovesUs from "./clientLovesUs";
import ClientSection from "../homepage/ClientSection";
import ScheduleCall from "../homepage/scheduleCall/ScheduleCall";
import ImageGrid from "./imageGrid";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

export default function LatestWork() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col pt-[44px] sm:pt-[84px] md:pt-[126px] 3xl:pt-[140px]">
        <div className="flex relative">
          <div className="absolute ml-[calc(9%-4px)] sm:ml-[calc(-12%-4px)] md:ml-[calc(-20%-4px)] lg:ml-[calc(-24%-4px)] nxl:ml-[calc(-29%-4px)] 3xl:ml-[calc(-34%-4px)] top-[-21%] sm:top-[-27%] 3xl:top-[-21%]">
            <ImageWrapper
              alt="web3 image"
              className="w-[64px] sm:w-[100px] md:w-[141px] lg:w-[200px] nxl:w-[212px] 3xl:w-[240px] h-[64px] sm:h-[100px] md:h-[144px] lg:h-[200px] nxl:h-[212px] 3xl:h-[240px]"
              src={"/Images/landingPage/work_rocket_image.webp"}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-5 px-5">
            <div className="flex flex-col items-center gap-5 px-5">
              <h1 className="font-recoleta relative font-[700] text-[#0F143A] text-center text-[24px] sm:text-[44px] md:text-[52px] lg:text-[64px] 3xl:text-[72px] mb-[12px] md:mb-[24px] lg:mb-[36px]">
                Our{" "}
                <span className="text-[#FF7919] orangeUnderLine">Latest </span>
                work
              </h1>
              <p className="font-[600] text-center text text-[#0F143A] font-mazzardMedium underline underline-offset-4 downArrow text-[12px] sm:text-[14px] md:text-[16px] lg:text-[23px]">
                Past work for some of the best Teams out there!!
              </p>
              <div className="flex justify-end w-full mr-[-28px] sm:mr-[-28px] lg:mr-[-65px]">
                <ImageWrapper
                  alt="web3 image"
                  className="w-[48px] sm:w-[65px] lg:w-[86px] h-[42px] sm:h-[56px] lg:h-[74px]"
                  src={"/Images/landingPage/workTitleDownArrow.webp"}
                />
              </div>
            </div>
          </div>
          <div className="absolute right-[9%] sm:right-[-12%] md:right-[-22%] lg:right-[-22%] nxl:right-[-30%] 3xl:right-[-35%] top-[-21%] sm:top-[-20%] lg:top-[-22%] nxl:top-[-21%] 3xl:top-[-21%]">
            <ImageWrapper
              alt="web3 image"
              className="w-[64px] sm:w-[100px] md:w-[150px] lg:w-[200px] nxl:w-[226px] 3xl:w-[240px] h-[34px] sm:h-[53px] md:h-[80px] lg:h-[106px] nxl:h-[120px] 3xl:h-[127px]"
              src={"/Images/landingPage/work_handpaint.webp"}
            />
          </div>
        </div>
        <ImageGrid />
      </div>
      <ClientSection
        title={
          <>
            Brewing <span className="underlineCtm">Fresh</span> swag for
          </>
        }
      />
      <ClientLovesUs />
      <ScheduleCall
        showBorder={false}
        bgColor={"FFF9D7"}
        title={" Interested?"}
        subTitle={"Best Swag collection for your team, just one call away..."}
        buttonContent={"Schedule a Call"}
      />
    </div>
  );
}
