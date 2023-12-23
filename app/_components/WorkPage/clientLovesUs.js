"use client";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import { Navigation } from "swiper/modules";
const ClientLovesUs = () => {
  const Reviews = [
    {
      review:
        "We loved the entire swag experience with Hustlemad. Everything from a wide range of options to regular progress updates and final output was loved by all of us. Keen to work sigain with them.",
      reviewer: "Karan Prasad",
    },
    {
      review:
        "Love the quality of merchandise. Very excited for the team to see them. Great fit! 🙌",
      reviewer: "Nayna Yadav",
    },
    {
      review:
        "With varied options in the market, continued increase in demands of our requests and working around within our budgets, the team was patient and helpful at every decision making step. To rightly say, your products were a perfect Swag for our Tribe. Thank you Hustlemad.",
      reviewer: "Nizar Mohammed",
    },
    {
      review:
        "We loved working with Hustlemad. We have already done multiple orders with them. Never before have we been able to get so many brands together in one box. The option to choose from multiple DTC brands is a godsend.",
      reviewer: "Preeti Ahuja",
    },
    {
      review:
        "Excellent! Aditya, and the Hustlemad team were really proactive, collaborative and accommodating throughout the process. As the showrunner of a design and brand cohort, I'm very particular about details and attention to quality - Hustlemad were the perfect partners to make this happen",
      reviewer: "Sneha Sankar",
    },
    {
      review: "Amazing quality, timely delivery and reasonable pricing!",
      reviewer: "Vijayalakshmi R",
    },
    {
      review:
        "The experience of partnering with Hustlemad was smooth. Aditya and his team promptly responded to our queries and helped build a custom solution we were looking for. Hustlemad team is professional and I'd definitely recommend them for your business.",
      reviewer: "Kaustubh Katdare",
    },
    {
      review:
        "The experience with Hustlemad was great. They did a quick turnaround even for very limited quantities and were readily available. Much more responsive than any other venders we have tried. would recommend!",
      reviewer: "Rahul Bhatnagar",
    },
    {
      review:
        "It was very efficient, no time was squandered, and the merchandise quality was excellent!",
      reviewer: "Harshit Kataria",
    },
    {
      review:
        "Putting together a swag kit for the Squad is a difficult process. Hustlemad provided a wonderful experience. There are a plethora of D2C brand products to choose from. I'm excited to work with Hustlemad in the future.",
      reviewer: "Deepali Rawat",
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
            spaceBetween={10}
            centeredSlides={false}
            loop={true}
            freeMode={true}
            navigation={true}
            breakpoints={{
              400: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1180: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 4.5,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation]}
            className="preset_swiper"
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
                  <div className={"writingp2 gap-[5px]"}>
                    <p className="font-mazzardMedium text-[10px] xs:text-[13px] sm:text-[16px] md:text-[16px] text-[#0F143A] opacity-80">
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
