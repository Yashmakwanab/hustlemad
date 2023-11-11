"use client";

import React from "react";
import hero_person2 from "../../../../../public/Images/heroSectionSvgs/hero_person2.webp";
import "./style.css";
import ImageWrapper from "@/app/_components/ImageWrapper/ImageWrapper";

const SmallHero = () => {
  return <ImageWrapper src={hero_person2.src} alt="Person Image" />;
};

export default SmallHero;
