import { useState } from 'react'
import './style.css'
import book from "../../../../../public/Images/heroSectionSvgs/book.svg";
import briefcase from "../../../../../public/Images/heroSectionSvgs/briefcase.svg";
import cups from "../../../../../public/Images/heroSectionSvgs/cups.svg";
import shirt from "../../../../../public/Images/heroSectionSvgs/shirt.svg";
import shoes from "../../../../../public/Images/heroSectionSvgs/shoes.svg";
import gift from "../../../../../public/Images/heroSectionSvgs/gift.svg";
import React from 'react';
import Image from 'next/image';
const images = [briefcase, shirt, book, shoes, cups]; // Import or define your image sources

const ImageCircle = ({ images }) => {
  const numImages = images.length;
  const radius = 120; // Adjust the radius as needed
  const angleStep = (2 * Math.PI) / numImages;

  return (
    <div
      className="image-circle-container"
      style={{
        position: 'relative',
        width: '300px', // Set your desired container size
        height: '300px', // Set your desired container size
        animation: 'rotateAnimation 10s linear infinite', // Adjust animation duration and delay as needed
      }}
    >
      {images.map((image, index) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <Image

            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="image-circle-image"
            style={{
              width: '110px', // Set your desired image size
              position: 'absolute',
              left: `calc(50% - 50px + ${x}px)`, // Center the image horizontally
              top: `calc(50% - 50px + ${y}px)`, // Center the image vertically
              animation: 'counterRotateAnimation 10s linear infinite', // Adjust animation duration and delay as needed

            }}
          />
        );
      })}
    </div>
  );
};

function Circular() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageCircle images={images} />
      <Image
            className="hero_image"
            src={gift}
            alt="our services"
          />
    </>
  )
}

export default Circular