"use client";
import React, { useState } from "react";
import "./style.css";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const images = [
  "/Images/latestWork/latestWork1.webp",
  "/Images/latestWork/latestWork2.webp",
  "/Images/latestWork/latestWork3.webp",
  "/Images/latestWork/latestWork4.webp",
  "/Images/latestWork/latestWork5.webp",
  "/Images/latestWork/latestWork6.webp",
  "/Images/latestWork/latestWork7.webp",
  "/Images/latestWork/latestWork8.webp",
  "/Images/latestWork/latestWork9.webp",
  "/Images/latestWork/latestWork10.webp",
  "/Images/latestWork/latestWork11.webp",
  "/Images/latestWork/latestWork12.webp",
  "/Images/latestWork/latestWork13.webp",
  "/Images/latestWork/latestWork14.webp",
  "/Images/latestWork/latestWork15.webp",
  "/Images/latestWork/latestWork16.webp",
  "/Images/latestWork/latestWork17.webp",
  "/Images/latestWork/latestWork18.webp",
  "/Images/latestWork/latestWork19.webp",
  "/Images/latestWork/latestWork20.webp",
  "/Images/latestWork/latestWork21.webp",
  "/Images/latestWork/latestWork22.webp",
  "/Images/latestWork/latestWork23.webp",
  "/Images/latestWork/latestWork24.webp",
  "/Images/latestWork/latestWork25.webp",
  "/Images/latestWork/latestWork26.webp",
  "/Images/latestWork/latestWork27.webp",
  "/Images/latestWork/latestWork28.webp",
  "/Images/latestWork/latestWork29.webp",
  "/Images/latestWork/latestWork30.webp",
  "/Images/latestWork/latestWork31.webp",
  "/Images/latestWork/latestWork32.webp",
  "/Images/latestWork/latestWork33.webp",
  "/Images/latestWork/latestWork34.webp",
  "/Images/latestWork/latestWork35.webp",
  "/Images/latestWork/latestWork36.webp",
  "/Images/latestWork/latestWork37.webp",
  "/Images/latestWork/latestWork38.webp",
  "/Images/latestWork/latestWork39.webp",
  "/Images/latestWork/latestWork40.webp",
  "/Images/latestWork/latestWork41.webp",
  "/Images/latestWork/latestWork42.webp",
  "/Images/latestWork/latestWork43.webp",
  "/Images/latestWork/latestWork44.webp",
  "/Images/latestWork/latestWork45.webp",
  "/Images/latestWork/latestWork46.webp",
  "/Images/latestWork/latestWork47.webp",
  "/Images/latestWork/latestWork48.webp",
  "/Images/latestWork/latestWork49.webp",
  "/Images/latestWork/latestWork50.webp",
  "/Images/latestWork/latestWork51.webp",
  "/Images/latestWork/latestWork52.webp",
  "/Images/latestWork/latestWork53.webp",
  "/Images/latestWork/latestWork54.webp",
  "/Images/latestWork/latestWork55.webp",
];

const ImageGrid = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImageIndex = (currentIndex) => (currentIndex + 1) % images.length;

  const imageGroups = [];
  for (let i = 0; i < images.length; i += 11) {
    imageGroups.push(images.slice(i, i + 11));
  }

  const imageDivs = imageGroups.map((group, groupIndex) => (
    <div
      className="parent max-w-[332px] sm:max-w-[590px] md:max-w-[728px] lg:max-w-[940px] xll:max-w-[1100px] 3xl:max-w-[1348px] gap-x-[4px] sm:gap-x-[10px] md:gap-x-[16px] lg:gap-x-[20px] gap-y-[4px] sm:gap-y-[10px] md:gap-y-[16px] lg:gap-y-[20px]"
      key={groupIndex}
    >
      {group.map((images, index) => {
        const imageIndex = (currentImageIndex + index) % images.length;
        const gridArea = `div${
          (index % 11) + 1
        } cursor-pointer group/item relative`;
        return (
          <div className={gridArea} key={imageIndex}>
            <ImageWrapper
              src={images}
              alt={`Image ${imageIndex + 1}`}
            />
            <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
              <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
                Urban Health
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ));

  return (
    <div className="flex flex-col gap-[4px] sm:gap-[10px] md:gap-[16px] lg:gap-[20px] py-[30px] lg:py-[60px]">
      {imageDivs}
    </div>
  );
};

export default ImageGrid;