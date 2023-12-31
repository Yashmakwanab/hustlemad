"use client";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import style from "./style.module.css";

const WeLoveSwag = () => {
  return (
    <div className="relative">
      <div className="p-10 md:p-20 flex flex-col gap-5 xl:gap-10 items-center bg-[#FFCCCC]">
        <h1 className="font-recoleta relative  text-center text-[24px] lg:text-[36px]  xl:text-[40px] xll:text-[48px] text-[#0F143A]">
          {" "}
          We love Swag!
          <div
            className="h-full absolute bottom-[-100%] left-0 w-full bg-top bg-no-repeat bg-contain"
            style={{
              backgroundImage: 'url("/Images/aboutPage/swagBorder.webp")',
            }}
          ></div>
        </h1>
        <p
          className={`${style.quote} text-[#0F143A] font-mazzardMedium opacity-80 text-center text-[14px] md:text-[28px] lg:text-[32px] nxl:[text-36px]  font-normal`}
        >
          Our mission is to revolutionize the gifting market. We hustle to
          provide top-notch, cost-effective swags that leave a lasting
          impression, delivered with unbeatable excellence.
        </p>
      </div>
      <div className="absolute bottom-0 w-full z-[99]">
        <ImageWrapper
          width={2000}
          height={20}
          src="/Images/landingPage/purpleBorder.svg"
          className="w-full absolute top-[-1px] md:top-[-4px] xl:top-[-8px]"
          alt="Green Border"
        />
      </div>
    </div>
  );
};

export default WeLoveSwag;
