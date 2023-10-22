"use client";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import "./styles.css";
const OurGallery = () => {
  return (
    <div className=" pb-20 flex flex-col w-full items-center">
      <h1 className="font-spaceMonoBold  text-white text-center  text-[24px] lg:text-[36px]  xl:text-[40px] xll:text-[48px] pb-5 pt-5 md:pb-10">
        Our Gallery
      </h1>
      <div className=" px-10 max-w-[1200px] md:px-20">
        <div class="parent">
          <div class="div1">
            <ImageWrapper
              alt={"gallary images"}
              className="w-full "
              src={"/Images/web3Page/gallery1.png"}
            />
          </div>
          <div class="div2">
            <ImageWrapper
              alt={"gallary images"}
              className="w-full "
              src={"/Images/web3Page/gallery2.png"}
            />
          </div>
          <div class="div3">
            {" "}
            <ImageWrapper
              alt={"gallary images"}
              className="w-full "
              src={"/Images/web3Page/gallery3.png"}
            />{" "}
          </div>
          <div class="div4">
            {" "}
            <ImageWrapper
              alt={"gallary images"}
              className="w-full "
              src={"/Images/web3Page/gallery4.png"}
            />
          </div>
          <div class="div5">
            {" "}
            <ImageWrapper
              alt={"gallary images"}
              className="w-full "
              src={"/Images/web3Page/gallery5.png"}
            />
          </div>
          <div class="div6">
            {" "}
            <ImageWrapper
              alt={"gallary images"}
              className="w-full "
              src={"/Images/web3Page/gallery3.png"}
            />
          </div>
          <div class="div7">
            <ImageWrapper
              alt={"gallary images"}
              className="w-full "
              src={"/Images/web3Page/gallery1.png"}
            />
          </div>
          <div class="div8">
            <ImageWrapper
              alt={"gallary images"}
              className="w-full "
              src={"/Images/web3Page/gallery2.png"}
            />
          </div>
          <div class="div9">
            {" "}
            <ImageWrapper
              alt={"gallary images"}
              className="w-full "
              src={"/Images/web3Page/gallery3.png"}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
