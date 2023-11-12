"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "./styles.css";
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
        className="mySwiper uniq-value"
      >
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px] "
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b7d6c757-0248-4bf6-b592-3fec25367500/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/7c5581c4-5c9c-4795-5b52-7c3be1ba5700/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/4c25241a-54cf-4e9f-99e4-fbe749f2af00/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/09d950c7-74c7-4783-e658-488459124600/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/fe52a5e4-b7f3-4ba5-dd63-49795fed4000/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/2076639f-2feb-4069-3ad5-b3fc9ad53100/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/c2a6b36a-40f7-4217-859e-e600f4780e00/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/2fb459d1-5a4e-43db-d08b-11e90f83f700/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/500d38c0-00bd-4b1a-75dc-2d278c601800/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/48a585c9-d54b-4bb3-c4b4-83ecc571e700/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b3d33559-82ef-4022-9296-b1b6b52c9800/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9259d22a-6b32-4e7b-b7dd-f557b5c32300/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/49c1a461-19fc-4f50-0532-97e21ead7800/public"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <ImageWrapper
            alt={"preset Cards"}
            className="w-full max-w-[220px]"
            src={"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/fa75bf3f-5696-4f86-9ef1-96e5ee8af500/public"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
