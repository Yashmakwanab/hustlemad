"use client";
import React, { useState } from "react";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const PartnersData = [
  {
    title: "Apparels",
    images: [
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/466a25ca-fc9c-4266-ae5d-103970e05200/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/68849acf-6db6-4450-f03f-038a1b516c00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/afc30212-e715-4655-83d8-fbc8e8913a00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/36f503da-191c-4db8-9ae4-e4ed5c8cc100/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/67603137-07e0-4b0f-a65b-183450bc3100/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/94f8dbcc-0810-4659-e3e2-bff1043e9b00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/8fe4ac61-5e0f-4963-78f9-ca7cb51f3300/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/4fe92331-ea4f-454c-0c7d-d3fbdee43f00/public",
    ],
  },
  {
    title: "Drinkware",
    images: [
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/d52aa92b-1030-4407-de3d-643e039bce00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/fdb573b1-b867-43fd-c9cb-9497f7c00300/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/c35d5fee-edd2-4562-c394-1959e2831200/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/af19492c-99fd-4969-74db-b85d914f4600/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/8497ca24-d5b4-4131-a135-b052503d6700/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ddfa876c-1f9d-448b-09c5-8af951345c00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/dfc2a73b-72ce-48a8-2f94-4c8f0557ed00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/6a02d811-61e9-4a1c-49a4-8359adafb100/public",
    ],
  },
  {
    title: "Stationery",
    images: [
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/f6dc321a-2ebf-4d1b-83fe-19cb022dec00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/13310641-6023-4a68-6128-f1418bc77e00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/7bf2215b-7152-4b72-4eb7-8406870fee00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9c5fbb0f-dfd8-43dd-6e44-4fc8d1cc4e00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/3a2822cd-edeb-4b17-9f01-9714e47c0100/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/a73eed50-c756-4d70-679b-709d9def6100/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/e9533e82-01eb-44b2-629e-066f844bc700/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/8e1c88b9-054e-42f5-90e8-f720645bfe00/public",
    ],
  },
  {
    title: "Accessories",
    images: [
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/518f91f9-7382-47de-eca0-75de76414d00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/e9bf01c0-23f4-4554-cfcc-47c2f1cb9900/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/022364fa-93c1-4c55-9c60-8d900b181d00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9d05dcba-d741-411e-f811-38542d0abd00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9be1f7f0-c072-43db-6dd0-eb803c7c7e00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/7b59c47a-6170-4175-d93f-df9463d87d00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/62e86209-3563-4a6a-3e92-1f9413f3b900/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/1038b969-8a89-4321-b918-be44abdc1500/public",
    ],
  },
  {
    title: "Gadgets",
    images: [
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/6f4d90e9-9614-4d74-5aa7-2ac12c754600/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/49ec3ca7-01b6-4579-b057-3a6f523ea000/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/36cbfb05-ef01-4841-69f8-9c40261b8400/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/c9a91ffa-305b-4347-8822-357c1e437f00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/cd654b04-212e-4ffc-f815-0733b233f400/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/0127d86b-87f1-49aa-3e32-ead0757b3400/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/07b75bfe-708b-45b3-3710-9ed8d4b44b00/public",
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b55afff9-d2de-4639-8f93-97cd4575c800/public",
    ],
  },
];

export default function Partners() {
  const [value, setValue] = useState(0);
  return (
    <div
      className={`mt-[33px] sm:mt-[54px] lg:mt-[80px] mb-[36px] sm:mb-[52px] lg:mb-[60px] flex items-center flex-col mx-[10px]`}
    >
      <div className="container">
        <div className="flex justify-center w-full mb-[35px] sm:mb-[48px] lg:mb-[68px]">
          <div className="relative">
            <h1 className="font-recoleta font-[700] text-[#0F143A] text-center text-[24px] sm:text-[40px] lg:text-[48px] 2xl:text-[52px]">
              We partner with the <span className="underline">Best</span> <br />{" "}
              to serve you better.
            </h1>
            <ImageWrapper
              src="/Images/landingPage/star.webp"
              alt="star"
              className="w-[32px] sm:w-[48px] lg:w-[64px] h-[24px] sm:h-[36px] lg:h-[48px] absolute right-[-30px] sm:right-[-65px] lg:right-[-85px] top-[-17px] sm:top-[-30px]"
            />
            <ImageWrapper
              src="/Images/landingPage/star.webp"
              alt="star"
              className="w-[32px] sm:w-[48px] lg:w-[64px] h-[24px] sm:h-[36px] lg:h-[48px] absolute left-[-29px] sm:left-[-43px] lg:left-[-75px] bottom-[6px]"
            />
          </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <div className="flex w-full max-w-[848px]  justify-evenly border-solid border-[#2A3DA01F] border-[2px] rounded-[4px] py-[20px] mb-[20px] sm:mb-[52px] lg:mb-[52px]">
            {PartnersData.map((Partner, index) => (
              <div key={index} className="flex flex-col">
                <div
                  className={`font-mazzard text-center text-[12px] sm:text-[20px] lg:text-[20px] text-[#0F143ACC] cursor-pointer ${
                    value === index ? "mt-[-5px] font-[600]" : "font-[400]"
                  }`}
                  onClick={() => setValue(index)}
                >
                  {Partner.title}
                  {value === index && (
                    <div className="w-[71px] sm:w-full">
                      <ImageWrapper
                        src="/Images/landingPage/underline.webp"
                        alt="underline"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {PartnersData.map((Partnervvv, index) => (
              <React.Fragment key={index}>
                {value === index && (
                  <div className="grid grid-cols-4 2xl:grid-cols-8 border-[2px] border-[#2A3DA0] border-solid rounded-[6px]">
                    {Partnervvv.images.map((image, index) => (
                      <div
                        key={index}
                        className="font-mazzard text-[20px] text-[#0F143ACC] font-[400] border-[#2A3DA0] border-[1px]"
                      >
                        <ImageWrapper
                          src={image}
                          alt="Logo"
                          className="w-[84px] sm:w-[143px] lg:w-[208px] 2xl:w-[182px] h-[52px] sm:h-[110px] lg:h-[160px] 2xl:h-[140px] hover:scale-125 cursor-pointer duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
