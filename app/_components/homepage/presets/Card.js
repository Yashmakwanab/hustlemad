"use client";
import Image from "next/image";
import ButtonPrimary from "../../commonComponents/ButtonPrimary";
import presetPhoto from "./../../../../public/Images/landingPage/preset.png";
import "./styles.css";
const Card = () => {
  const handleClick = () => {
    console.log("btn clicked");
  };
  return (
    <div className="card">
      <div className="presetImageContainer">
        <Image className="presetImage" src={presetPhoto} />
      </div>
      <hr className="solid" />
      <div>
        <h3 className="font-recoleta underline productTitle">Basic Pack</h3>
        <p className="text-[18px]">
          Hustlemad Crew Neck T-shirt, Borosil Insulated Bottle, Coffee Mug,
          Papercoal A5 Notebook, Parker pen, Premium Boxing, Pan-India Shipping
        </p>
      </div>
      <hr className="solid" />
      <ButtonPrimary
        handleClick={handleClick}
        content={
          <p>
            Get at ₹ <span className="line-through">5000</span> 3499/Pack
          </p>
        }
      />
      <span>**Excl. of taxes</span>
    </div>
  );
};

export default Card;
