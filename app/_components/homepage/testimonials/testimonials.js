"use client";
import React, { useState, useEffect } from "react";
import Testimonialstyles from "./testimonials.module.css";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";

const testimonials = [
  {
    name: "Abhishek Singh",
    description:
      "“Swag ordering has always been a hassle, it’s difficult to trust vendors as the market is very opaque. Moreover, our team size is ever increasing which bounds us to store kits in our office.”",
    companyName: "Magicbricks",
    image: "/Images/landingPage/Test_Avtar_1.webp",
  },
  {
    name: "Joy Jackson",
    description:
      "“Introducing Stacksome, the revolutionary web development platform that streamlines the process of building and deploying websites. With its intuitive.”",
    companyName: "Stacksome",
    image: "/Images/landingPage/Test_Avtar_2.webp",
  },
  {
    name: "Wanda Ng",
    description:
      "“Thorium is a naturally occurring radioactive element with the atomic number 90. It is a silvery-white metal that is slightly radioactive and has a high.”",
    companyName: "Thorium",
    image: "/Images/landingPage/Test_Avtar_3.webp",
  },
  {
    name: "Stephen Var",
    description:
      "“The ignek boasts an array of impressive features that set it apart from its competitors. Equipped with state-of-the-art touch-sensitive controls, this device offersn.”",
    companyName: "Ignek",
    image: "/Images/landingPage/Test_Avtar_4.webp",
  },
  {
    name: "William Chu",
    description:
      "“Ymsofttech boasts a comprehensive suite of tools and functionalities that cater to various aspects of your business needs. From streamlining workflow.”",
    companyName: "Ymsofttech",
    image: "/Images/landingPage/Test_Avtar_5.webp",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId = 0;
    const Changing = () => {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => {
          return prevIndex + 1 < testimonials.length ? prevIndex + 1 : 0;
        });
      }, 3000);
    };
    Changing();

    return () => {
      clearInterval(intervalId);
    };
  }, [testimonials, index]);

  return (
    <>
      <div className={Testimonialstyles.testimonial}>
        <div className={Testimonialstyles.testimonialheading}>
          <h1 className="font-recoleta text-[44px] text-[#0F143A]">
            Our Clients love us 3,000
          </h1>
          <ImageWrapper
            width={300}
            height={300}
            className={Testimonialstyles.arrowT}
            src="/Images/landingPage/horn.webp"
            alt="horn"
          />
        </div>
        <div className={Testimonialstyles.rightdiv}>
          <ImageWrapper
            width={300}
            height={300}
            src="/Images/landingPage/rightHand1.webp"
            alt="rightHand"
          />
        </div>
        <div className={Testimonialstyles.middlediv}>
          <div className={Testimonialstyles.speechboxp2}>
            <ImageWrapper
              width={2000}
              height={1000}
              className={Testimonialstyles.bubble}
              src="/Images/landingPage/container.webp"
              alt="container"
            />
            <div className={Testimonialstyles.writingp2}>
              <p className="font-mazzardMedium text-[24px] text-[#0F143A]">
                {testimonials[index]?.description}
              </p>
              <ImageWrapper
                width={2000}
                height={2000}
                src="/Images/landingPage/border.webp"
                alt="border"
              />
              <h2 className="font-mazzardMedium text-[24px] text-[#0F143A]">
                {testimonials[index]?.name}
              </h2>
              <h3 className="font-mazzardMedium text-[20px] text-[#0F143A] opacity-80">
                {testimonials[index]?.companyName}
              </h3>
            </div>
          </div>
          <div className={Testimonialstyles.lowerContent}>
            <div className={Testimonialstyles.leftarrow}>
              <ImageWrapper
                width={50}
                height={50}
                src="/Images/landingPage/leftArrow.webp"
                alt="leftArrow"
                onClick={() =>
                  setIndex(index - 1 >= 0 ? index - 1 : testimonials.length - 1)
                }
              />
            </div>
            <div className={Testimonialstyles.leftmostpersondiv}>
              <ImageWrapper
                width={50}
                height={50}
                src={
                  testimonials[index - 2]?.image ||
                  testimonials[testimonials.length + index - 2]?.image
                }
                alt="avtar"
                onClick={() =>
                  setIndex(index - 2 >= 0 ? index - 2 : testimonials.length - 2)
                }
              />
            </div>
            <div className={Testimonialstyles.leftpersondiv}>
              <ImageWrapper
                src={
                  testimonials[index - 1]?.image ||
                  testimonials[testimonials.length + index - 1]?.image
                }
                alt="avtar"
                onClick={() =>
                  setIndex(index - 1 >= 0 ? index - 1 : testimonials.length - 1)
                }
                width={50}
                height={50}
              />
            </div>
            <div className={Testimonialstyles.middlepersondiv}>
              <ImageWrapper
                width={50}
                height={50}
                src={testimonials[index]?.image}
                alt="avtar"
              />
            </div>
            <div className={Testimonialstyles.rightpersondiv}>
              <ImageWrapper
                src={
                  testimonials[index + 1]?.image ||
                  testimonials[index - testimonials.length + 1]?.image
                }
                alt="avtar"
                onClick={() =>
                  setIndex(index + 1 < testimonials.length ? index + 1 : 0)
                }
                width={50}
                height={50}
              />
            </div>
            <div className={Testimonialstyles.rightmostpersondiv}>
              <ImageWrapper
                src={
                  testimonials[index + 2]?.image ||
                  testimonials[index - testimonials.length + 2]?.image
                }
                alt="avtar"
                onClick={() =>
                  setIndex(index + 2 < testimonials.length ? index + 2 : 1)
                }
                width={50}
                height={50}
              />
            </div>
            <div className={Testimonialstyles.rightarrow}>
              <ImageWrapper
                src="/Images/landingPage/rightArrow.webp"
                alt="rightArrow"
                onClick={() =>
                  setIndex(index + 1 < testimonials.length ? index + 1 : 0)
                }
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className={Testimonialstyles.leftdiv}>
          <ImageWrapper
            width={300}
            height={300}
            src="/Images/landingPage/leftHand.webp"
            alt="leftHand"
          />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
