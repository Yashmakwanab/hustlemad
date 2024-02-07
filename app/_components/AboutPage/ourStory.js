"use client";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const OurStory = () => {
  return (
    <div className="p-10 md:p-20 flex flex-col gap-5 xl:gap-10 items-center bg-[#fff] relative">
      <div className="flex flex-col items-center">
        <h1 className="font-recoleta relative flex justify-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[700] leading-[32px] sm:leading-[54px] underline underline-offset-[11px] text-[#0F143A] mb-[40px]   decoration-4">
          Our Story
        </h1>
        <img src="/Images/aboutPage/storyLeaf.svg" className="w-[30px]" />
      </div>
      <p
        className={` text-[#0F143A] max-w-[1000px] font-mazzardMedium opacity-80 text-center text-[14px] sm:text-[24px] md:text-[28px] font-normal`}
      >
        What pains us the most is poor quality swag, it’s not only a waste of
        money but also harms the brand image. Whether you are trying to attract
        the best talent or wow your clients, thoughtful swag goes a long way in
        establishing your commitment to settle for nothing but the best. Today,
        while we have figured out how to send rockets to Mars, procuring branded
        swag continues to be a hassle, even for large companies. We have taken
        it upon ourselves to be your procurement partners. Think of us as your
        extended arm that curates, procures, packs & ships quality swag where
        you need it when you need it.
      </p>
      <p
        className={`max-w-[1000px] text-[#0F143A] font-mazzardMedium opacity-80 text-center text-[14px] sm:text-[24px] md:text-[28px] font-normal`}
      >
        {" "}
        We are a bunch of entrepreneurs, marketers, and technologists who
        understand the challenges of a growing business. We get you the best
        swag while you focus on doing what you do the best!
      </p>
      <div className="absolute bottom-0 w-full z-[99]">
        <div className="purpleBorderStyle"></div>
      </div>
    </div>
  );
};

export default OurStory;
