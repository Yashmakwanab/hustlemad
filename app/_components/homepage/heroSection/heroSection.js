"use client";
import ButtonPrimary from "../../commonComponents/ButtonPrimary";
import hero_person from "../../../../public/Images/heroSectionSvgs/hero_person.png";
import style from "./heroSection.module.css";
import Image from "next/image";
import Circular from "./BigHero/circular";
import { useEffect, useState } from "react";
import SmallHero from "./SmallHero/SmallHero";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
const HeroSection = () => {
  const size = useWindowSize();
  const handleClick = () => {
    console.log("hello");
  };
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

        {size.width > 1024 ?
          <div className={style.hero_image_section}>
            <div className={style.hero_circle_images}>
              <Circular />
            </div>
            <div className={style.hero_image_container}>
              <Image
                className={style.hero_image}
                src={hero_person}
                alt="our services"
              />
            </div>
          </div> : <><SmallHero /></>}

      </div>
    </div>
  );
};

export default HeroSection;
