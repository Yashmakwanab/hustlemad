"use client";
import React, { useState, useEffect } from "react";
import Testimonialstyles from "./testimonials.module.css";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";

const testimonials = [
  {
    name: "Karan Prasad",
    description:
      "“We loved the entire swag experience with Hustlemad. Everything from a wide range of options to regular progress updates and final output was loved by all of us. Keen to work sigain with them.”",
    companyName: "Antler",
    image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/448448c1-c26d-4579-64c0-410c94c3d400/public",
  },
  {
    name: "Nayna Yadav",
    description:
      "“Love the quality of merchandise. Very excited for the team to see them. Great fit! 🙌”",
    companyName: "Groww",
    image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/01d404b4-c420-4691-e52f-bebe0824a600/public",
  },
  {
    name: "Nizar Mohammed",
    description:
      "“With varied options in the market, continued increase in demands of our requests and working around within our budgets, the team was patient and helpful at every decision making step. To rightly say, your products were a perfect Swag for our Tribe. Thank you Hustlemad.”",
    companyName: "Excelencia",
    image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/6d2d688b-a3b6-41ee-bf7d-0bf9fb3bfc00/public",
  },
  {
    name: "Preeti Ahuja",
    description:
      "“We loved working with Hustlemad. We have already done multiple orders with them. Never before have we been able to get so many brands together in one box. The option to choose from multiple DTC brands is a godsend.”",
    companyName: "InMobi Technologies",
    image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/f1b06df2-9630-4f94-d22a-1d076423ce00/public",
  },
  {
    name: "Kaustubh Katdare",
    description:
      "“The experience of partnering with Hustlemad was smooth. Aditya and his team promptly responded to our queries and helped build a custom solution we were looking for. Hustlemad team is professional and I'd definitely recommend them for your business.”",
    companyName: "Gumlet",
    image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b3d7a99e-32b6-484b-e0d0-626b72674200/public",
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
  }, [index]);

  return (
    <>
      <div className={Testimonialstyles.testimonial}>
        <div className={Testimonialstyles.testimonialheading}>
          <h1 className="font-recoleta text-[44px] text-[#0F143A]">
            Our Clients love us 3,000
          </h1>
          <ImageWrapper
            className={Testimonialstyles.arrowT}
            src="/Images/landingPage/horn.webp"
            alt="horn"
          />
        </div>
        <div className={Testimonialstyles.rightdiv}>
          <ImageWrapper
            src="/Images/landingPage/rightHand1.svg"
            alt="rightHand"
          />
        </div>
        <div className={Testimonialstyles.middlediv}>
          <div className={Testimonialstyles.speechboxp2}>
            <ImageWrapper
              className={Testimonialstyles.bubble}
              src="/Images/landingPage/container.svg"
              alt="container"
            />
            <div className={Testimonialstyles.writingp2}>
              <p className="font-mazzardMedium text-[20px] text-[#0F143A]">
                {testimonials[index]?.description}
              </p>
              <ImageWrapper
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
                src="/Images/landingPage/leftArrow.svg"
                alt="leftArrow"
                onClick={() =>
                  setIndex(index - 1 >= 0 ? index - 1 : testimonials.length - 1)
                }
              />
            </div>
            <div className={Testimonialstyles.leftmostpersondiv}>
              <ImageWrapper
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
              />
            </div>
            <div className={Testimonialstyles.middlepersondiv}>
              <ImageWrapper src={testimonials[index]?.image} alt="avtar" />
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
              />
            </div>
            <div className={Testimonialstyles.rightarrow}>
              <ImageWrapper
                src="/Images/landingPage/rightArrow.svg"
                alt="rightArrow"
                onClick={() =>
                  setIndex(index + 1 < testimonials.length ? index + 1 : 0)
                }
              />
            </div>
          </div>
        </div>
        <div className={Testimonialstyles.leftdiv}>
          <ImageWrapper src="/Images/landingPage/leftHand.svg" alt="leftHand" />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
