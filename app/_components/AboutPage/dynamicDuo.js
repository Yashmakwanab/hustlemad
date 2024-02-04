"use client";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import "./style.css";
import './flippable-card.css';
import Card from './card/card';
import { CSSTransition } from 'react-transition-group';
import React, { useState } from "react";

const DynamicDuo = () => {
  const [showFront, setShowFront] = useState(true);

  return (
    <>
      <div className="p-5 md:p-20 pb-20 flex flex-col gap-10 xl:gap-20  items-center bg-[#fff]">
        <div>
          <h1 className="font-recoleta flex justify-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[700] leading-[32px] sm:leading-[54px] lg:leading-[65px] xl:leading-[70px] underline underline-offset-[6px] text-[#0F143A] mb-5  decoration-4">
            The Dynamic Duo
          </h1>

          <p className="text-[14px] text-center sm:text-[20px] md:text-[24px] nxl:text-[28px] font-mazzardMedium text-[#0F143A] opacity-80 ">
            Meet your Swag Partners!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row container-gap">
          <div className="">
            <div className="flip-card " tabIndex="0">
              <div className="flip-card-inner ">
                <div className="flip-card-front dot">
                  <div className="flex flex-col">
                    <ImageWrapper
                      src={"/Images/aboutPage/adityaImage.webp"}
                      className="person-image"
                    />
                    <p className="font-recoleta text-[#001636] text-center opacity-80 name-plate">
                      Aditya Agrawal
                    </p>
                  </div>
                </div>
                <div className="flip-card-back dot2">
                  <div className="">
                    <div className="text-container bg-[#E3FFC0]">
                      <p className="text-center text-[#001636] font-mazzardMedium description">
                        Aditya is a true blue first-principles guy. An avid
                        trekker, he has worked at the intersection of finance &
                        tech for 7 years. Take your half baked ideas to him and
                        you’ve lost him.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-end justify-center">
                          <ImageWrapper
                            src="/Images/aboutPage/twiter.webp"
                            alt="Twitter Logo"
                            className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                          />
                        </div>
                        <div className="flex items-end justify-center">
                          <ImageWrapper
                            src="/Images/aboutPage/mail.webp"
                            alt="Twitter Logo"
                            className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                          />
                        </div>
                        <div className="flex items-end justify-center">
                          <ImageWrapper
                            src="/Images/aboutPage/linkedin.webp"
                            alt="Twitter Logo"
                            className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-recoleta text-[#001636] text-center opacity-80 name-plate">
                      Aditya Agrawal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front dot">
                  <div className="flex flex-col">
                    <ImageWrapper
                      src={"/Images/aboutPage/anuragImage.webp"}
                      className="person-image"
                    />
                    <p className="font-recoleta text-[#001636] text-center opacity-80 name-plate">
                      Anurag Singh
                    </p>
                  </div>
                </div>
                <div className="flip-card-back dot2">
                  <div className="relative">
                    <div className="text-container bg-[#FFDCC8] mb-2">
                      <p className="text-center text-[#001636] font-mazzardMedium description">
                        Brand logo quiz winner. Loves music, football &
                        motor-racing. Reach out to Anurag for all your crazy
                        ideas, you will find the perfect audience in him.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-end justify-center">
                          <ImageWrapper
                            src="/Images/aboutPage/twiter.webp"
                            alt="Twitter Logo"
                            className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                          />
                        </div>
                        <div className="flex items-end justify-center">
                          <ImageWrapper
                            src="/Images/aboutPage/mail.webp"
                            alt="Twitter Logo"
                            className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                          />
                        </div>
                        <div className="flex items-end justify-center">
                          <ImageWrapper
                            src="/Images/aboutPage/linkedin.webp"
                            alt="Twitter Logo"
                            className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-recoleta text-[#001636] text-center opacity-80 name-plate">
                      Anurag Singh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flippable-card-container">
        <CSSTransition
          in={showFront}
          timeout={300}
          classNames='flip'
        >
          <Card onClick={() => {
            setShowFront((v) => !v);
          }} />
        </CSSTransition>
      </div>
    </>
  );
};

export default DynamicDuo;
