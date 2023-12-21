"use client";
import React, { useState } from "react";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const Services = [
  {
    title: "Our Services",
    description:
      "We make the process of finding & acquiring the best Swags for your team easy.",
    circleColor: "",
    circleBorder: "",
    src: "/Images/landingPage/serviceImage.webp",
  },
  {
    title: "We Procure",
    description: "We procure top-quality swags from trusted brands worldwide.",
    circleColor: "#F2C5FF",
    circleBorder: "#E58DFF",
    src: "/Images/landingPage/procureImage.webp",
  },
  {
    title: "We Customize",
    description:
      "We customize to your exact needs; your brand, your design, your pride.",
    circleColor: "#B9FCFF",
    circleBorder: "#64C3FF",
    src: "/Images/landingPage/customizeImage.webp",
  },
  {
    title: "We Deliver",
    description: "We store and deliver - your merchandise, your way.",
    circleColor: "#B1FFD2",
    circleBorder: "#46DB85",
    src: "/Images/landingPage/deliverImage.webp",
  },
  {
    title: "We Process",
    description:
      "We process with care and precision, each item inspected and approved.",
    circleColor: "#FFDA92",
    circleBorder: "#E9933A",
    src: "/Images/landingPage/processImage.webp",
  },
];

export default function OurServices() {
  const [value, setValue] = useState("Our Services");
  return (
    <main
      className={`transition  sectionPadding duration-300 flex flex-col items-center justify-between ${
        value === "We Procure"
          ? "bg-[#F7DCFF]"
          : value === "We Customize"
          ? "bg-[#C6F5FF]"
          : value === "We Deliver"
          ? "bg-[#C7FFDE]"
          : value === "We Process"
          ? "bg-[#FFE8BC]"
          : "bg-[#FAFFC6]"
      } `}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 container relative max-w-[1800px]">
        <div className=" w-full grid grid-cols-2 place-content-center mb-44 sm:mb-9 lg:mb-0">
          <ImageWrapper
            width={500}
            height={500}
            src="/Images/landingPage/seviceArrowOne.webp"
            alt="arrow"
            className="hidden lg:flex w-[44px] nxl:w-[68px] absolute top-[15%] nxl:top-[13%] 2xl:top-[14%] ml-[calc(20%-2px)] nxl:ml-[calc(17%-2px)] xl:ml-[calc(17%-4px)] 2xl:ml-[calc(17%+8px)]"
          />
          <ImageWrapper
            width={500}
            height={500}
            src="/Images/landingPage/seviceArrowTwo.webp"
            alt="arrow"
            className="hidden lg:flex w-[44px] nxl:w-[52px] absolute top-[41%] nxl:top-[40%] 2xl:top-[42%] ml-[calc(30%-2px)] nxl:ml-[calc(29%-2px)] xl:ml-[calc(29%-4px)] 2xl:ml-[calc(29%+8px)]"
          />
          <ImageWrapper
            width={500}
            height={500}
            src="/Images/landingPage/serviceArrowThree.webp"
            alt="arrow"
            className="hidden lg:flex w-[54px] nxl:w-[85px] absolute bottom-[28%] nxl:bottom-[28%] 2xl:bottom-[27%] ml-[calc(19%+4px)] nxl:ml-[calc(17%-7px)] xl:ml-[calc(17%-9px)] 2xl:ml-[calc(17%+1px)]"
          />
          <ImageWrapper
            width={500}
            height={500}
            src="/Images/landingPage/serviceCenterArrow.webp"
            alt="arrow"
            className="absolute w-[36px] xs:w-[44px] sm:w-[61px] top-[25%] sm:top-[34%] ml-[calc(45%-0px)] xs:ml-[calc(45%-0px)] sm:ml-[calc(46%-4px)] md:ml-[calc(46%+1px)] lg:hidden"
          />
          <ImageWrapper
            width={500}
            height={500}
            src="/Images/landingPage/serviceRightArrow.webp"
            alt="arrow"
            className="absolute w-[36px] sm:w-[49px] top-[39.5%] xs:top-[40%] sm:top-[52%] ml-[calc(68%-0px)] xs:ml-[calc(68%-0px)] sm:ml-[calc(72%-4px)] md:ml-[calc(69%+1px)] lg:hidden"
          />
          <ImageWrapper
            width={500}
            height={500}
            src="/Images/landingPage/serviceLeftArrow.webp"
            alt="arrow"
            className="absolute w-[36px] sm:w-[49px] top-[39.5%] xs:top-[40%] sm:top-[52%] ml-[calc(21%-0px)] xs:ml-[calc(21%-0px)] sm:ml-[calc(22%-4px)] md:ml-[calc(26%+1px)] lg:hidden"
          />
          {Services.map((Service, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                <div
                  key={index}
                  style={{
                    backgroundColor: `${Service.circleColor}`,
                    borderColor: `${Service.circleBorder}`,
                  }}
                  className={`${
                    index === 1
                      ? "mr-auto sm:!mr-[50px] lg:!mr-auto"
                      : index === 3
                      ? "mr-auto sm:!mr-[133px] lg:!mr-auto"
                      : index === 2
                      ? "ml-auto sm:!ml-[50px] lg:ml-auto"
                      : index === 4
                      ? "ml-auto sm:!ml-[133px] lg:ml-auto"
                      : ""
                  } mx-auto sm:mx-auto lg:!mx-0 transition duration-300 w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] lg:w-[180px] lg:h-[180px] 2xl:w-[220px] 2xl:h-[220px] 3xl:w-[240px] 3xl:h-[240px] mb-[50px] flex flex-col place-content-center p-4 hover:p-3 rounded-full text-center hover:!bg-[#FFF] hover:border-[4px] hover:xl:border-[6px] hover:!border-[${
                    Service.circleBorder
                  }] cursor-pointer relative`}
                  onMouseEnter={() => setValue(Service.title)}
                  onMouseLeave={() => setValue("Our Services")}
                >
                  <div className="font-mazzard text-[14px] sm:text-[18px] xl:text-[22px] font-[600] leading-[30px] text-[#0F143A] opacity-[72%] mb-1">
                    {Service.title}
                  </div>
                  <p className="font-mazzard text-[10px] sm:text-[12px] xl:text-[13px] 2xl:text-[14px] font-[400] leading-[13px] sm:leading-[16px] xl:leading-[19px] text-[#0F143A] opacity-[72%]">
                    {Service.description}
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="order-first lg:order-last  ">
          {Services.map((Service, index) => (
            <div key={index}>
              {value === Service.title && (
                <div
                  className={`text-center lg:text-start transition duration-300 px-[16px]`}
                >
                  <div className="">
                    <h2 className="font-recoleta text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                      {Service.title}
                    </h2>
                    <p className="font-mazzard m-auto lg:mx-0 max-w-[600px] text-[14px] sm:text-[20px] xl:text-[24px] 3xl:text-[28px] font-[400] leading-[19px] sm:leading-[27px] xl:leading-[32px] 3xl:leading-[38px] text-[#0F143A] opacity-[72%] mb-10">
                      {Service.description}
                    </p>
                  </div>
                  <ImageWrapper
                    src={Service.src}
                    alt={Service.title}
                    className="w-[200px] sm:w-[240px] lg:w-[300px] 2xl:w-[332px] 3xl:w-[372px] absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:-translate-x-0"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
