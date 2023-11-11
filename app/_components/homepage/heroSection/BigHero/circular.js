import "./style.css";
import book from "../../../../../public/Images/heroSectionSvgs/book.webp";
import briefcase from "../../../../../public/Images/heroSectionSvgs/briefcase.webp";
import cups from "../../../../../public/Images/heroSectionSvgs/cups.webp";
import shirt from "../../../../../public/Images/heroSectionSvgs/shirt.webp";
import shoes from "../../../../../public/Images/heroSectionSvgs/shoes.webp";
import gift from "../../../../../public/Images/heroSectionSvgs/gift.webp";
import React from "react";
import ImageWrapper from "@/app/_components/ImageWrapper/ImageWrapper";
const images = [briefcase, shirt, book, shoes, cups];

const ImageCircle = ({ images }) => {
  const numImages = images.length;
  const radius = 120;
  const angleStep = (2 * Math.PI) / numImages;

  return (
    <div
      className="image-circle-container"
      style={{
        position: "relative",
        width: "300px",
        height: "300px",
        animation: "rotateAnimation 10s linear infinite",
      }}
    >
      {images.map((image, index) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return (
          <ImageWrapper
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className="image-circle-image"
            style={{
              width: "110px",
              position: "absolute",
              left: `calc(50% - 50px + ${x}px)`,
              top: `calc(50% - 50px + ${y}px)`,
              animation: "counterRotateAnimation 10s linear infinite",
            }}
          />
        );
      })}
    </div>
  );
};

function Circular() {
  return (
    <>
      <ImageCircle images={images} />
      <ImageWrapper className="hero_image" src={gift.src} alt="our services" />
    </>
  );
}

export default Circular;
