"use client";
import ButtonPrimary from "../../commonComponents/ButtonPrimary";
import style from "./heroSection.module.css";

import { useEffect, useState } from "react";
import SmallHero from "./SmallHero/SmallHero";
import BigHero from "./BigHero/BigHero";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const HeroSection = () => {
  const { height, width } = useWindowDimensions();
  const handleClick = () => {
    console.log("hello");
  };
  console.log(width)
  return (
    <div className="flex justify-center bg-[#B3FFFA]">
      <div className={`${style.hero_section} w-full flex-col-reverse flex lg:flex-row container mt-14 relative px-[32px]`}>
        <div className={`${style.hero_text_section} w-full flex flex-col	items-center lg:items-start`}>
          <h1 className={`${style.hero_title}  text-[32px] 6xl:text-[76px] 5xl:text-[72px]  md:text-[64px] text-center lg:text-left`}>
            <span>Mindful</span> <span className={style.underline}>Swag</span> for
            your Tribe!
          </h1>
          <p className={`${style.tagline} 6xl:text-[36px] 5xl:text-[32px] 2xl:text-[28px] sm:text-[14px] text-center lg:text-left`}>
            We curate new-age Swag Pack, so you dont have to.
          </p>
          <ButtonPrimary content={"Get Started"} handleClick={handleClick} />
        </div>

        {width > 1024 ?
          <BigHero /> : <><SmallHero /></>}

      </div>
    </div>
  );
};

export default HeroSection;
