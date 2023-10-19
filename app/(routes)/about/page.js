import React from "react";
import WeLoveSwag from "@/app/_components/AboutPage/weLoveSwag";
import OurStory from "@/app/_components/AboutPage/ourStory";
import OurCoreServices from "@/app/_components/AboutPage/ourCoreServices";
import DynamicDuo from "@/app/_components/AboutPage/dynamicDuo";

const About = () => {
  return (
    <>
      <div className="pt-[44px] md:pt-[127px] nxl:pt-[80px] ">
        <WeLoveSwag />

        <OurStory />
        <OurCoreServices />
        <DynamicDuo />
      </div>
    </>
  );
};
export default About;
