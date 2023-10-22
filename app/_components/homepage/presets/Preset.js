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
import Card from "./Card";

export default function Preset() {
  return (
    <div className="pt-10 pb-10 bg-[#CEF6FF]">
      <h2 className="font-recoleta text-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
        Preset Packs
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
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px] ">
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
