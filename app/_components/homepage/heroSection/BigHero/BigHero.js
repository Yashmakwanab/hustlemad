"use client";
import style from "./../heroSection.module.css";
import Image from "next/image";
import hero_person from "../../../../../public/Images/heroSectionSvgs/hero_person.webp";
import Circular from "./circular";
import ImageWrapper from "@/app/_components/ImageWrapper/ImageWrapper";
const BigHero = () => {
  console.log(hero_person);
  return (
    <div className={style.hero_image_section}>
      <div className={style.hero_circle_images}>
        <Circular />
      </div>
      <div className={style.hero_image_container}>
        <ImageWrapper
          className={style.hero_image}
          src={hero_person.src}
          alt="Our Services"
        />
      </div>
    </div>
  );
};

export default BigHero;
