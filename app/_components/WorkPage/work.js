"use client";
import React, { useState } from "react";
import "./style.css";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const images = [
  "/Images/web3Page/gallery1.png",
  "/Images/web3Page/gallery2.png",
  "/Images/web3Page/gallery3.png",
  "/Images/web3Page/gallery4.png",
  "/Images/web3Page/gallery5.png",
  "/Images/web3Page/gallery1.png",
  "/Images/web3Page/gallery2.png",
  "/Images/web3Page/gallery3.png",
  "/Images/web3Page/gallery4.png",
  "/Images/web3Page/gallery5.png",
  "/Images/web3Page/gallery5.png",

  // Add more image paths as needed
];

export default function LatestWork() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImageIndex = (currentIndex) => (currentIndex + 1) % images.length;

  // Split the images into groups of 11
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 11) {
    imageGroups.push(images.slice(i, i + 11));
  }

  const imageDivs = imageGroups.map((group, groupIndex) => (
    <div className="parent" key={groupIndex}>
      {group.map((imagePath, index) => {
        const imageIndex = (currentImageIndex + index) % images.length;
        const gridArea = `div${(index % 11) + 1}`;
        return (
          <div className={gridArea} key={imageIndex}>
            <ImageWrapper src={imagePath} alt={`Image ${imageIndex + 1}`} />
          </div>
        );
      })}
    </div>
  ));

  return (
    <div className="flex items-center justify-center flex-col">
      {/* <div className="max-w-[1348px] flex flex-col items-center handpaint">
        <h1 className="font-recoleta relative font-[700] text-[#0F143A] text-center text-[24px] sm:text-[48px] md:text-[60px] mb-[36px] sm:mb-[52px] workTitle inline ">
          Our <span className="text-[#FF7919] orangeUnderLine">Latest</span>{" "}
          work
        </h1>
        <p
          className="text-center text text-[#0F143A] font-mazzardMedium underline underline-offset-4 downArrow
"
        >
          Past work for some of the best Teams out there!!
        </p>
      </div> */}
      <div class="titleGrid">
        <div class="titleGrid1 self-end">
          {" "}
          <ImageWrapper
            alt="web3 image"
            className="w-[90%] "
            src={"/Images/landingPage/work_rocket_image.webp"}
          />
        </div>
        <div class="titleGrid2 self-end">
          <ImageWrapper
            alt="web3 image"
            className="w-[100%] "
            src={"/Images/landingPage/work_handpaint.webp"}
          />{" "}
        </div>
        <div class="titleGrid3 flex flex-col items-center justify-center gap-5 px-5 ">
          {" "}
          <div className="flex flex-col items-center gap-5 px-5">
            <h1 className="font-recoleta relative font-[700] text-[#0F143A] text-center text-[24px] sm:text-[48px] md:text-[60px] workTitle inline ">
              Our <span className="text-[#FF7919] orangeUnderLine">Latest</span>{" "}
              work
            </h1>
            <p className="text-center text text-[#0F143A] font-mazzardMedium underline underline-offset-4 downArrow ">
              Past work for some of the best Teams out there!!
            </p>{" "}
          </div>
        </div>
        <div class="titleGrid4 self-start md:self-end">
          <ImageWrapper
            alt="web3 image"
            className="w-[50%]"
            src={"/Images/landingPage/workTitleDownArrow.webp"}
          />{" "}
        </div>
      </div>
      <div className="flex flex-col gap-[0.5em] p-5">{imageDivs}</div>
    </div>
  );
}
