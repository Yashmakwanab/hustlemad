import React from "react";
import OurServices from "@/app/_components/homepage/ourServices";
import RequestForm from "@/app/_components/homepage/requestForm";
// import Carousel from '@/app/_components/homepage/carousel';
import HeroSection from "@/app/_components/homepage/heroSection/heroSection";
import PresetSection from "@/app/_components/homepage/presetSection";
import ScheduleSection from "@/app/_components/homepage/scheduleSection";
import ClientSection from "@/app/_components/homepage/ClientSection";
import Testimonials from "@/app/_components/homepage/testimonials/testimonials";
import Partners from "@/app/_components/homepage/partners";

const Home = () => {
  return (
    <>
      <div className="pt-[44px] md:pt-[127px] nxl:pt-[80px]">
        <HeroSection />
        <OurServices />
        <Partners />
        <ScheduleSection />
        <ClientSection
          title={
            <>
              Brewing <span className="underlineCtm">Fresh</span> swag for
            </>
          }
        />
        <Testimonials />
        <PresetSection />
        <RequestForm />
        {/* <Carousel/> */}
      </div>
    </>
  );
};
export default Home;
