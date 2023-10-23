"use client";
import React, { useLayoutEffect, useState } from "react";
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

  // Add more image paths as needed
];

const ImageGrid = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImageIndex = (currentIndex) => (currentIndex + 1) % images.length;

  // Split the images into groups of 11
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
              onLoad={() => console.log(`Image ${imageIndex + 1} loaded`)}
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

// "use client";
// import React, { useState } from "react";
// import "./style.css";
// import ImageWrapper from "../ImageWrapper/ImageWrapper";

// const images = [
//   "/Images/latestWork/latestWork1.webp",
//   "/Images/latestWork/latestWork2.webp",
//   "/Images/latestWork/latestWork3.webp",
//   "/Images/latestWork/latestWork4.webp",
//   "/Images/latestWork/latestWork5.webp",
//   "/Images/latestWork/latestWork6.webp",
//   "/Images/latestWork/latestWork7.webp",
//   "/Images/latestWork/latestWork8.webp",
//   "/Images/latestWork/latestWork9.webp",
//   "/Images/latestWork/latestWork10.webp",
//   "/Images/latestWork/latestWork11.webp",
//   "/Images/latestWork/latestWork12.webp",
//   "/Images/latestWork/latestWork13.webp",
//   "/Images/latestWork/latestWork14.webp",
//   "/Images/latestWork/latestWork15.webp",
//   "/Images/latestWork/latestWork16.webp",
//   "/Images/latestWork/latestWork17.webp",
//   "/Images/latestWork/latestWork18.webp",
//   "/Images/latestWork/latestWork19.webp",
//   "/Images/latestWork/latestWork20.webp",
//   "/Images/latestWork/latestWork21.webp",
//   "/Images/latestWork/latestWork22.webp",
//   "/Images/latestWork/latestWork23.webp",
//   "/Images/latestWork/latestWork24.webp",
//   "/Images/latestWork/latestWork25.webp",
//   "/Images/latestWork/latestWork26.webp",
//   "/Images/latestWork/latestWork27.webp",
//   "/Images/latestWork/latestWork28.webp",
//   "/Images/latestWork/latestWork29.webp",
//   "/Images/latestWork/latestWork30.webp",
//   "/Images/latestWork/latestWork31.webp",
//   "/Images/latestWork/latestWork32.webp",
//   "/Images/latestWork/latestWork33.webp",
//   "/Images/latestWork/latestWork34.webp",
//   "/Images/latestWork/latestWork35.webp",
//   "/Images/latestWork/latestWork36.webp",
//   "/Images/latestWork/latestWork37.webp",
//   "/Images/latestWork/latestWork38.webp",
//   "/Images/latestWork/latestWork39.webp",
//   "/Images/latestWork/latestWork40.webp",
//   "/Images/latestWork/latestWork41.webp",
//   "/Images/latestWork/latestWork42.webp",
//   "/Images/latestWork/latestWork43.webp",
//   "/Images/latestWork/latestWork44.webp",
//   "/Images/latestWork/latestWork45.webp",
//   "/Images/latestWork/latestWork46.webp",
//   "/Images/latestWork/latestWork47.webp",
//   "/Images/latestWork/latestWork48.webp",
//   "/Images/latestWork/latestWork49.webp",
//   "/Images/latestWork/latestWork50.webp",
//   "/Images/latestWork/latestWork51.webp",
//   "/Images/latestWork/latestWork52.webp",
//   "/Images/latestWork/latestWork53.webp",
//   "/Images/latestWork/latestWork54.webp",
//   "/Images/latestWork/latestWork55.webp",

//   // Add more image paths as needed
// ];

// const ImageGrid = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImageIndex = (currentIndex) => (currentIndex + 1) % images.length;

//   // Split the images into groups of 11
//   const imageGroups = [];
//   for (let i = 0; i < images.length; i += 11) {
//     imageGroups.push(images.slice(i, i + 11));
//   }

//   //   const imageDivs = imageGroups.map((group, groupIndex) => (
//   //     <div
//   //       className="parent max-w-[332px] sm:max-w-[590px] md:max-w-[728px] lg:max-w-[940px] xll:max-w-[1100px] 3xl:max-w-[1348px] gap-x-[4px] sm:gap-x-[10px] md:gap-x-[16px] lg:gap-x-[20px] gap-y-[4px] sm:gap-y-[10px] md:gap-y-[16px] lg:gap-y-[20px]"
//   //       key={groupIndex}
//   //     >
//   //       {group.map(("/Images/latestWork/latestWork2.webp", index) => {
//   //         const imageIndex = (currentImageIndex + index) % images.length;
//   //         const gridArea = `div${
//   //           (index % 11) + 1
//   //         } cursor-pointer group/item relative`;
//   //         return (
//   //           <div className={gridArea} key={imageIndex}>
//   //             <ImageWrapper
//   //               src={"/Images/latestWork/latestWork2.webp"}
//   //
//   //               alt={`Image ${imageIndex + 1}`}
//   //               onLoad={() => console.log(`Image ${imageIndex + 1} loaded`)}
//   //             />
//   //             <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//   //               <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//   //                 Urban Health
//   //               </div>
//   //             </div>
//   //           </div>
//   //         );
//   //       })}
//   //     </div>
//   //   ));

//   return (
//     <div className="flex flex-col gap-[4px] sm:gap-[10px] md:gap-[16px] lg:gap-[20px] py-[30px] lg:py-[60px]">
//       {/* {imageDivs} */}
//       <div className="parent">
//         <div className="div1 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork1.webp"}
//             alt={`Image`}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div2 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork2.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div3 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork3.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div4 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork4.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div5 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork5.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div6 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork6.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div7 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork7.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div8 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork8.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div9 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork9.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div10 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork10.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div11 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork11.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="parent">
//         <div className="div1 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork12.webp"}
//             alt={`Image`}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div2 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork13.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div3 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork14.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div4 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork15.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div5 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork16.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div6 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork17.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div7 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork18.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div8 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork19.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div9 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork20.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div10 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork21.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div11 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork22.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="parent">
//         <div className="div1 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork23.webp"}
//             alt={`Image`}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div2 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork24.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div3 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork25.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div4 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork26.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div5 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork27.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div6 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork28.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div7 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork29.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div8 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork30.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div9 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork31.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div10 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork32.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div11 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork33.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="parent">
//         <div className="div1 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork34.webp"}
//             alt={`Image`}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div2 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork35.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div3 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork36.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div4 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork37.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div5 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork38.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div6 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork39.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div7 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork40.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div8 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork41.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div9 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork42.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div10 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork43.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div11 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork44.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="parent">
//         <div className="div1 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork45.webp"}
//             alt={`Image`}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div2 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork46.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div3 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork47.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div4 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork48.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div5 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork49.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div6 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork50.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div7 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork51.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div8 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork52.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div9 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork53.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div10 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork54.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//         <div className="div11 cursor-pointer group/item relative">
//           <ImageWrapper
//             src={"/Images/latestWork/latestWork55.webp"}
//             alt={"grid images"}
//           />
//           <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
//             <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
//               Urban Health
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGrid;
