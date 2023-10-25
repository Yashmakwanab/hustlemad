"use client";
import React, { useState } from "react";
import Link from "next/link";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const menuItems = [
  {
    label: "Home",
    directUrl: ["/"],
  },
  {
    label: "Company",
    directUrl: "",
    subMenuItems: ["About Us", "Contact Us", "FAQs"],
    subMenuItemsUrl: ["/about", "/contact", "/faq"],
    subMenuItemsImage: [
      "/Images/landingPage/homeIcon.webp",
      "/Images/landingPage/phoneIcon.webp",
      "/Images/landingPage/faqIcon.webp",
    ],
  },
  {
    label: "Build a Box",
    directUrl: ["/catalogue"],
  },
  {
    label: "Our Clients",
    directUrl: ["/clients"],
  },
  {
    label: "Partners",
    directUrl: "",
    subMenuItems: ["Our Partners", "Be our Partner"],
    subMenuItemsUrl: ["/partner", "/allcompanies"],
    subMenuItemsImage: [
      "/Images/landingPage/handIcon.webp",
      "/Images/landingPage/growthIcon.webp",
    ],
  },
  {
    label: "Web3 & Communities",
    directUrl: ["/web"],
  },
  {
    label: "Latest Works",
    directUrl: ["/works"],
  },
];
const Header = () => {
  const [show, setShow] = useState(false);
  const [activeHeader, setActiveHeader] = useState(5);
  const [activeHeaderIndex, setActiveHeaderIndex] = useState();

  return (
    <>
      <div className="nxl:px-[40px] bg-white fixed w-full z-[99999999]">
        <div className="grid grid-cols-1 nxl:flex justify-between items-center">
          <div className="w-full nxl:w-fit">
            <div className="items-center py-[12px] nxl:py-[25px] col-span-1 flex justify-between border-b-[1px] border-solid nxl:border-none px-[20px] md:px-[40px] nxl:px-0">
              <Link className="flex items-center" href="/">
                <ImageWrapper
                  src="/Images/landingPage/mainLogoHustle.svg"
                  width={300}
                  height={200}
                  alt="Hustle Logo"
                  className="w-[100px] md:w-[110px] nxl:w-[148px] h-[20px] md:h-[22px] nxl:h-[30px]"
                />
              </Link>
              <div className="hidden md:flex nxl:hidden">
                <div className="cursor-pointer">
                  <a href="/" target="_blank">
                    <div className="font-MazzardMedium flex bg-[#0F143A] text-white py-[9px] xl:py-[12px] px-[15px] xl:px-[20px] text-[14px] xl:text-[16px] font-600 rounded-[4px] items-center">
                      <ImageWrapper
                        width={16}
                        height={16}
                        src="/Images/landingPage/phoneWhite.svg"
                        className="text-white w-[16px] h-[16px] mr-[12px]"
                        alt="Phone Logo"
                      />
                      <p>Schedule a Call </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex items-center md:hidden">
                <a className="mr-[24px] cursor-pointer">
                  <ImageWrapper
                    height={16}
                    width={16}
                    src="/Images/landingPage/phone.svg"
                    alt="Phone Logo"
                  />
                </a>
                <a className="cursor-pointer" onClick={() => setShow(true)}>
                  <ImageWrapper
                    height={16}
                    width={16}
                    src="/Images/landingPage/mobileBar.svg"
                    alt="Navbar Logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="items-center col-span-4 px-[40px] nxl:px-0 py-[10px] nxl:py-0 justify-center hidden md:flex">
            <ul className="flex z-[999999999]">
              {menuItems.map((menuItem, index) => (
                <React.Fragment key={index}>
                  {menuItem.directUrl !== "" ? (
                    <li className="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
                      <Link className="" href={`${menuItem.directUrl}`}>
                        <div
                          className={`text-[14px] xl:text-[16px] ${
                            index === 5
                              ? "text-[#FF4A8CFA]"
                              : "text-[#001636EB]"
                          } `}
                        >
                          {menuItem.label}
                        </div>
                        {index === 5 && (
                          <div
                            className="h-full absolute bottom-[-23px] left-0 w-full bg-top bg-no-repeat bg-contain"
                            style={{
                              backgroundImage:
                                'url("/Images/landingPage/headerBorder.svg")',
                            }}
                          ></div>
                        )}
                      </Link>
                    </li>
                  ) : (
                    <li
                      className="min-w-min mx-[7px] lg:mx-[14px] nxl:mx-[10px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium relative text-[14px] cursor-pointer text-[#001636EB] mt-[12px]"
                      onMouseEnter={() => setActiveHeaderIndex(index)}
                      onMouseLeave={() => setActiveHeaderIndex(null)}
                    >
                      <div
                        className={`text-[14px] xl:text-[16px] text-[#001636EB] pb-[10px]`}
                      >
                        {menuItem.label}
                      </div>
                      {activeHeaderIndex === index && (
                        <div
                          className={`drop-shadow-lg absolute w-[172px] bg-white border-solid border-[1px] border-[#0F143AB8] rounded-[4px] ${
                            activeHeaderIndex === 1
                              ? "ml-[-37px]"
                              : activeHeaderIndex === 4
                              ? "ml-[-51px]"
                              : ""
                          }`}
                        >
                          <div className="absolute top-[-15px] right-[50%] after:content-[url('/Images/landingPage/upperArrow.png')] after:inline-block after:h-full after:w-full"></div>
                          {menuItem.subMenuItems.map(
                            (subMenuItem, subIndex) => (
                              <div
                                key={subIndex}
                                className="border-b-[1px] px-[14px] border-[#0F143AB8] last:border-none"
                                onMouseEnter={() => setActiveHeaderIndex(index)}
                              >
                                <Link
                                  className=""
                                  href={`${menuItem.subMenuItemsUrl[subIndex]}`}
                                  aria-current="page"
                                >
                                  <div className="py-[7px] flex">
                                    <ImageWrapper
                                      width={24}
                                      height={24}
                                      className="mr-[12px]"
                                      src={`${menuItem.subMenuItemsImage[subIndex]}`}
                                      alt="Header Logo"
                                    />
                                    <div className="flex items-center">
                                      {subMenuItem}
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="hidden nxl:flex">
            <div className="cursor-pointer">
              <a href="/" target="_blank">
                <div className="font-mazzardMedium flex bg-[#0F143A] text-white py-[9px] xl:py-[12px] px-[15px] xl:px-[20px] text-[14px] xl:text-[16px] font-600 rounded-[4px] items-center">
                  <ImageWrapper
                    width={25}
                    height={25}
                    src="/Images/landingPage/phoneWhite.webp"
                    className="text-white w-[16px] h-[16px] mr-[12px]"
                    alt="Phone White"
                  />
                  <p>Schedule a Call </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* #mobile */}
      <div>
        {show && (
          <div className="fixed h-[100vh] bg-white w-full z-[9999999999] px-[22px] py-[14px] md:hidden">
            <div
              className="flex justify-end cursor-pointer"
              onClick={() => setShow(false)}
            >
              <ImageWrapper
                alt="Close Icon"
                src="/Images/landingPage/closeIcon.webp"
                width={20}
                height={20}
              />
            </div>
            <div className="grid grid-cols-1 nxl:grid-cols-5 w-full nxl:w-fit px-[12px]">
              <div className="items-center py-[12px] col-span-1 flex justify-between mb-[10px]">
                <Link className="flex items-center" href="/">
                  <ImageWrapper
                    src="/Images/landingPage/mainLogoHustle.svg"
                    alt="Hustle Logo"
                    width={160}
                    height={32}
                  />
                </Link>
              </div>
              <div className="items-center col-span-4 py-[10px] justify-center z-[999999999999999]">
                <ul className="flex flex-col z-[99999999]">
                  {menuItems.map((menuItem, index) => (
                    <React.Fragment key={index}>
                      {menuItem.directUrl !== "" ? (
                        <li
                          className="font-mazzard text-[#001636EB] font-[600] mt-[32px]"
                          onClick={() => {
                            setShow(false);
                          }}
                        >
                          <Link className="" href={`${menuItem.directUrl}`}>
                            <div
                              className={`w-fit text-[22px] ${
                                activeHeader === index
                                  ? "text-[#FF4A8CFA] border-b-[1px] border-[#FF4A8CFA]"
                                  : "text-[#001636EB]"
                              } `}
                            >
                              {menuItem.label}
                            </div>
                          </Link>
                        </li>
                      ) : (
                        <li
                          className="font-mazzard relative cursor-pointer text-[#001636EB] font-[600] mt-[32px]"
                          onMouseEnter={() => setActiveHeaderIndex(index)}
                          onMouseLeave={() => setActiveHeaderIndex(null)}
                        >
                          <div
                            className={`w-fit text-[22px] ${
                              activeHeader === index
                                ? "text-[#FF4A8CFA] border-b-[1px] border-[#FF4A8CFA]"
                                : "text-[#001636EB]"
                            } `}
                          >
                            {menuItem.label}
                          </div>
                          {activeHeaderIndex === index && (
                            <div className="absolute z-[99999999999] w-[172px] bg-white border-solid border-[1px] border-[#0F143AB8] rounded-[4px] mt-[10px] md:mt-0">
                              <div className="absolute top-[-17px] right-[50%] after:content-[url('/Images/landingPage/upperArrow.png')] after:inline-block after:h-full after:w-full"></div>
                              {menuItem.subMenuItems.map(
                                (subMenuItem, subIndex) => (
                                  <div
                                    key={subIndex}
                                    className="border-b-[1px] px-[14px] border-[#0F143AB8] last:border-none"
                                    onMouseEnter={() =>
                                      setActiveHeaderIndex(index)
                                    }
                                    onClick={() => setShow(false)}
                                  >
                                    <Link
                                      className=""
                                      href={`${menuItem.subMenuItemsUrl[subIndex]}`}
                                      aria-current="page"
                                    >
                                      <div className="py-[7px] flex">
                                        <ImageWrapper
                                          width={24}
                                          height={24}
                                          className="mr-[12px]"
                                          alt="Header Logo"
                                          src={`${menuItem.subMenuItemsImage[subIndex]}`}
                                        />
                                        <div className="flex items-center text-[14px]">
                                          {subMenuItem}
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[89%] absolute bottom-0">
              <div className="flex justify-end mr-[-30px] xs:mr-[-46px] sm:mr-[-60px] ">
                <ImageWrapper
                  src="/Images/landingPage/mobileNavbar.webp"
                  alt="Navbar Logo"
                  className=" h-[200px] sm:h-[240px]"
                />
              </div>
              <div className="flex justify-between px-[12px] font-mazzard text-[#0F143A] border-t-[1px] py-[18px]">
                <div className="flex">
                  <p className="ml-[12px] text-[12px]">
                    2023 by Hustlemad Brands Pvt Ltd
                  </p>
                </div>
                <div className="flex">
                  <a
                    href="https://twitter.com/hustlemad_"
                    target="_blank"
                    className="mr-[6px]"
                  >
                    <ImageWrapper
                      src="/Images/landingPage/twitter.webp"
                      alt="Twitter Logo"
                      className="w-[24px]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/hustlemad/"
                    target="_blank"
                  >
                    <ImageWrapper
                      src="/Images/landingPage/instagram.svg"
                      alt="Instagram Logo"
                      className="w-[24px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
