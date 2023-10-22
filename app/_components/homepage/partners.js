"use client";
import React, { useState } from "react";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const PartnersData = [
  {
    title: "Apparels",
    images: [
      "/Images/landingPage/boat.webp",
      "/Images/landingPage/rareRabit.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/unBottle.webp",
      "/Images/landingPage/unBottle.webp",
      "/Images/landingPage/unBottle.webp",
    ],
  },
  {
    title: "Drinkware",
    images: [
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/rareRabit.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/boat.webp",
      "/Images/landingPage/unBottle.webp",
      "/Images/landingPage/rareRabit.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/boat.webp",
    ],
  },
  {
    title: "Stationery",
    images: [
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/rareRabit.webp",
      "/Images/landingPage/boat.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/unBottle.webp",
      "/Images/landingPage/rareRabit.webp",
      "/Images/landingPage/boat.webp",
    ],
  },
  {
    title: "Accessories",
    images: [
      "/Images/landingPage/boat.webp",
      "/Images/landingPage/rareRabit.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/boat.webp",
      "/Images/landingPage/rareRabit.webp",
      "/Images/landingPage/unBottle.webp",
      "/Images/landingPage/unBottle.webp",
      "/Images/landingPage/scareters.webp",
    ],
  },
  {
    title: "Gadgets",
    images: [
      "/Images/landingPage/boat.webp",
      "/Images/landingPage/rareRabit.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/boat.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/rareRabit.webp",
      "/Images/landingPage/scareters.webp",
      "/Images/landingPage/boat.webp",
    ],
  },
];

export default function Partners() {
  const [value, setValue] = useState(0);
  return (
    <div
      className={`mt-[33px] sm:mt-[54px] lg:mt-[80px] mb-[36px] sm:mb-[52px] lg:mb-[60px] flex items-center flex-col mx-[10px]`}
    >
      <div className="container">
        <div className="flex justify-center w-full mb-[35px] sm:mb-[48px] lg:mb-[68px]">
          <div className="relative">
            <h1 className="font-recoleta font-[700] text-[#0F143A] text-center text-[24px] sm:text-[40px] lg:text-[48px] 2xl:text-[52px]">
              We partner with the <span className="underline">Best</span> <br />{" "}
              to serve you better.
            </h1>
            <ImageWrapper
              src="/Images/landingPage/star.webp"
              alt="star"
              className="w-[32px] sm:w-[48px] lg:w-[64px] h-[24px] sm:h-[36px] lg:h-[48px] absolute right-[-30px] sm:right-[-65px] lg:right-[-85px] top-[-17px] sm:top-[-30px]"
            />
            <ImageWrapper
              src="/Images/landingPage/star.webp"
              alt="star"
              className="w-[32px] sm:w-[48px] lg:w-[64px] h-[24px] sm:h-[36px] lg:h-[48px] absolute left-[-29px] sm:left-[-43px] lg:left-[-75px] bottom-[6px]"
            />
          </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <div className="flex w-full max-w-[848px]  justify-evenly border-solid border-[#2A3DA01F] border-[2px] rounded-[4px] py-[20px] mb-[20px] sm:mb-[52px] lg:mb-[52px]">
            {PartnersData.map((Partner, index) => (
              <div key={index} className="flex flex-col">
                <div
                  className={`font-mazzard text-center text-[12px] sm:text-[20px] lg:text-[20px] text-[#0F143ACC] cursor-pointer ${
                    value === index ? "mt-[-5px] font-[600]" : "font-[400]"
                  }`}
                  onClick={() => setValue(index)}
                >
                  {Partner.title}
                  {value === index && (
                    <div className="w-[71px] sm:w-full">
                      <ImageWrapper
                        src="/Images/landingPage/underline.webp"
                        alt="underline"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {PartnersData.map((Partnervvv, index) => (
              <React.Fragment key={index}>
                {value === index && (
                  <div className="grid grid-cols-4 2xl:grid-cols-8 border-[2px] border-[#2A3DA0] border-solid rounded-[6px]">
                    {Partnervvv.images.map((image, index) => (
                      <div
                        key={index}
                        className="font-mazzard text-[20px] text-[#0F143ACC] font-[400] border-[#2A3DA0] border-[1px]"
                      >
                        <ImageWrapper
                          src={image}
                          alt="Logo"
                          className="w-[84px] sm:w-[143px] lg:w-[208px] 2xl:w-[182px] h-[52px] sm:h-[110px] lg:h-[160px] 2xl:h-[140px]"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
