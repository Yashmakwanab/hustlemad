"use client";
import Image from "next/image";
import style from "./style.module.css";
import "./style.css";
import React from "react";

const DynamicDuo = () => {
  return (
    <div className="p-5 md:p-20 pb-20 flex flex-col gap-10  xl:gap-20  items-center bg-[#fff]">
      <div>
        <h1 className="font-recoleta flex justify-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[700] leading-[32px] sm:leading-[54px] lg:leading-[65px] xl:leading-[70px] underline underline-offset-[6px] text-[#0F143A] mb-5  decoration-4">
          The Dynamic Duo
        </h1>

        <p className="text-[14px] text-center sm:text-[20px] md:text-[24px] nxl:text-[28px] font-mazzardMedium text-[#0F143A] opacity-80 ">
          Meet your Swag Partners!
        </p>
      </div>
      <div className="flex flex-col gap-[3em]  items-center justify-center sm:gap-10  md:gap-20 sm:flex-row">
        <div className="flip-card" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="flex flex-col">
                <img
                  src={"/Images/aboutPage/adityaImage.png"}
                  className="pt-6 pl-4 pr-4 pb-2"
                />
                <p className="font-recoleta text-[#001636] text-[20px] md:text-[26px] text-center opacity-80">
                  Aditya Agrawal
                </p>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="pt-6 pl-4 pr-4">
                <div className="text-container bg-[#E3FFC0] w-[350px] h-[360px] mb-2">
                  <p className="text-center text-[#001636] font-mazzardMedium text-[24px]">
                  Aditya is a true blue first-principles guy. An avid trekker, he has worked at the intersection of finance & tech for 7 years. Take your half baked ideas to him and you’ve lost him.
                  </p>
                  <div className="flex items-center gap-2 pb-2">
                    <div className="flex items-end justify-center ]">
                      <img
                        src="/Images/aboutPage/twiter.svg"
                        alt="Twitter Logo"
                      />
                    </div>
                    <div className="flex items-end justify-center">
                      <img src="/Images/aboutPage/mail.svg" alt="Twitter Logo" />
                    </div>
                    <div className="flex items-end justify-center">
                      <img
                        src="/Images/aboutPage/linkedin.svg"
                        alt="Twitter Logo"
                      />
                    </div>
                  </div>
                </div>
                <p className="font-recoleta text-[#001636] text-[20px] md:text-[26px] text-center opacity-80">
                  Aditya Agrawal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <div className="flex flex-col">
              <img
                src={"/Images/aboutPage/anuragImage.png"}
                className="pt-6 pl-4 pr-4 pb-2"
              />
              <p className="font-recoleta text-[#001636] text-[20px] md:text-[26px] text-center opacity-80">
                Anurag Singh
              </p>
            </div>
            </div>
            <div className="flip-card-back">
            <div className="pt-6 pl-4 pr-4">
              <div className="text-container bg-[#FFDCC8] w-[196px]  sm:w-[350px] h-[212px] sm:h-[360px] mb-2">
                <p className="text-center text-[#001636] font-mazzardMedium text-[24px]">
                  Brand logo quiz winner. Loves music, football & motor-racing.
                  Reach out to Anurag for all your crazy ideas, you will find
                  the perfect audience in him.
                </p>
                <div className="flex items-center gap-2 pb-2">
                  <div className="flex items-end justify-center ]">
                    <img
                      src="/Images/aboutPage/twiter.svg"
                      alt="Twitter Logo"
                    />
                  </div>
                  <div className="flex items-end justify-center">
                    <img src="/Images/aboutPage/mail.svg" alt="Twitter Logo" />
                  </div>
                  <div className="flex items-end justify-center">
                    <img
                      src="/Images/aboutPage/linkedin.svg"
                      alt="Twitter Logo"
                    />
                  </div>
                </div>
              </div>
              <p className="font-recoleta text-[#001636] text-[20px] md:text-[26px] text-center  opacity-80">
                Anurag Singh
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicDuo;
