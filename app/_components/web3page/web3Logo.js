"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "./styles.css";

// import required modules
import { FreeMode } from "swiper/modules";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

export default function Web3Logo() {
  return (
    <div className="pt-10 mt-20  bg-[#fff] flex flex-col ">
      <h2 className="font-spaceMono pl-5 pr-5 text-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
        We work with some of the Best!
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        modules={[FreeMode]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.75": {
            slidesPerView: 5,
          },
          "@1.50": {
            slidesPerView: 6,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px] "
            src={"/Images/web3Page/logo1.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo2.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo3.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo4.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo5.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo6.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo7.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo8.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo9.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo10.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo11.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo12.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo13.png"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"/Images/web3Page/logo14.png"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
