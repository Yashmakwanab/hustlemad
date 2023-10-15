"use client";
import ButtonPrimary from "../../commonComponents/ButtonPrimary";
import style from "./heroSection.module.css";

import { useEffect, useState } from "react";
import SmallHero from "./SmallHero/SmallHero";
import BigHero from "./BigHero/BigHero";

const HeroSection = () => {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="flex justify-center bg-[#B3FFFA]">
      <div className={`${style.hero_section} w-full grid grid-cols-1 lg:grid-cols-2 container mt-14 relative px-[32px]`}>
        <div className={`${style.hero_text_section} w-full flex flex-col	items-center lg:items-start order-last lg:order-first`}>
          <h1 className={`${style.hero_title}  text-[32px] 6xl:text-[76px] 5xl:text-[72px]  md:text-[64px] text-center lg:text-left`}>
            <span>Mindful</span> <span className={style.underline}>Swag</span> for
            your Tribe!
          </h1>
          <p className={`${style.tagline} 6xl:text-[36px] 5xl:text-[32px] 2xl:text-[28px] sm:text-[14px] text-center lg:text-left`}>
            We curate new-age Swag Pack, so you dont have to.
          </p>
          <ButtonPrimary content={"Get Started"} handleClick={handleClick} />
        </div>
        <div >
          <div className="hidden lg:block">
            <BigHero />
          </div>
          <div className="block lg:hidden"><SmallHero /></div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
