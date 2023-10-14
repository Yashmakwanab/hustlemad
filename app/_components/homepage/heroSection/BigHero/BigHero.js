'use client'
import style from './../heroSection.module.css'
import Image from "next/image";
import hero_person from "../../../../../public/Images/heroSectionSvgs/hero_person.png";
import Circular from "./circular";
const BigHero = () => {
    return (
        <div className={style.hero_image_section}>
            <div className={style.hero_circle_images}>
                <Circular />
            </div>
            <div className={style.hero_image_container}>
                <Image
                    className={style.hero_image}
                    src={hero_person}
                    alt="Our Services"
                />
            </div>
        </div>
    );
}

export default BigHero;