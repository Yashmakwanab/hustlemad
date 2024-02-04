"use client";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import "./style.css";
import './flippable-card.css';
import Card from './card/card';
import { CSSTransition } from 'react-transition-group';
import React, { useState } from "react";
import Card1 from "./card/card1";

const DynamicDuo = () => {
  const [showFront, setShowFront] = useState(true);
  const [showFront1, setShowFront1] = useState(true);


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
        <div className="w-full flex flex-col items-center justify-center sm:flex-row container-gap">
          <div className="flippable-card-container">
            <CSSTransition
              in={showFront}
              timeout={300}
              classNames='flip'
            >
              <Card onClick={() => {
                setShowFront((v) => !v);
                if (!showFront1) {
                  setShowFront1((v) => !v);
                }
              }} />
            </CSSTransition>
          </div>
          <div className="flippable-card-container">
            <CSSTransition
              in={showFront1}
              timeout={300}
              classNames='flip'
            >
              <Card1 onClick={() => {
                setShowFront1((v) => !v);
                if (!showFront) {
                  setShowFront((v) => !v);
                }
              }} />
            </CSSTransition>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicDuo;
