"use client";
import ButtonPrimary from "../../commonComponents/ButtonPrimary";
import presetPhoto from "./../../../../public/Images/landingPage/preset.png";
import "./styles.css";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";

const Card = ({ preset_name, content, price, cut_price, image_url }) => {
  const handleClick = () => {
    console.log("btn clicked");
  };
  return (
    <div className="card">
      <div className="presetImageContainer">
        <ImageWrapper
          className="presetImage"
          src={image_url}
          alt="Preset Image"
        />
      </div>
      <hr className="solid" />
      <div>
        <h3 className="font-recoleta underline productTitle">{preset_name}</h3>
        <p className="text-[12px] md:text-[14px] lg:text-[16px]">{content}</p>
      </div>
      <hr className="solid" />
      <div>
        <ButtonPrimary
          handleClick={handleClick}
          content={
            <p className="text-[12px] md:text-[14px] lg:text-[16px]">
              Get at ₹ <span className="line-through">{price} </span>
              {cut_price}/Pack
            </p>
          }
        />
      </div>
      <span className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px]">
        **Excl. of taxes
      </span>
    </div>
  );
};

export default Card;
