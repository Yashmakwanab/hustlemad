"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode } from "swiper/modules";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
const ClientLovesUs = () => {
  const Reviews = [
    {
      review:
        "Love the quality of merchandise. Very excited for the team to see them. Great fit! 🙌",
      reviewer: "Ankur, Magikbricks",
    },
    {
      review:
        "Love the quality of merchandise. Very excited for the team to see them. Great fit! 🙌",
      reviewer: "Ankur, Magikbricks",
    },
    {
      review:
        "Love the quality of merchandise. Very excited for the team to see them. Great fit! 🙌",
      reviewer: "Ankur, Magikbricks",
    },
    {
      review:
        "Love the quality of merchandise. Very excited for the team to see them. Great fit! 🙌",
      reviewer: "Ankur, Magikbricks",
    },
    {
      review:
        "Love the quality of merchandise. Very excited for the team to see them. Great fit! 🙌",
      reviewer: "Ankur, Magikbricks",
    },
    {
      review:
        "Love the quality of merchandise. Very excited for the team to see them. Great fit! 🙌",
      reviewer: "Ankur, Magikbricks",
    },
  ];
  return (
    <div>
      <div className="pt-10   bg-[#fff] flex flex-col  over overflow-x-hidden	">
        <h2 className="font-recoleta underline pl-5 pr-5 text-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
          Our Clients love us 3,000
        </h2>
        <div className="py-5">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper "
          >
            {Reviews.map((review, index) => (
              <SwiperSlide key={index}>
                {" "}
                <div className={"speechboxp2"}>
                  <ImageWrapper
                    className={"bubble "}
                    src="/Images/latestWork/clientsLovesvg.svg"
                    alt="container"
                  />
                  <div className={"writingp2 gap-5"}>
                    <p className="font-mazzardMedium text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] text-[#0F143A] opacity-80">
                      {review.review}
                    </p>

                    <h3 className="font-mazzardMedium text-[12px] xs:text-[14px]  sm:text-[16px] md:text-[18px] text-[#0F143A]">
                      {review.reviewer}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientLovesUs;
