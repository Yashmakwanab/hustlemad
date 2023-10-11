"use client";
import Image from "next/image";
import scheduleImage from "./../../../../public/Images/landingPage/scheduleCall.png";
import ButtonPrimary from "../../commonComponents/ButtonPrimary";
import "./styles.css";

const ScheduleCall = () => {
  const handleClick = () => {
    console.log("btn clicked");
  };
  return (
    <div className="schedule_container pt-[25px]">
      <div className="schedule_content flex-col-reverse md:flex-row">
        <div>
          <Image src={scheduleImage} />
        </div>
        <div className="ctc_section ">
          <h2 className="font-recoleta text-center text-[24px] sm:text-[30px] md:text-[40px] font-[900] leading-[27px] sm:leading-[40px] xl:leading-[44px] text-[#0F143A] ">
            Wanna know more?
          </h2>
          <p
            className={`tagline 6xl:text-[36px] 5xl:text-[32px] 2xl:text-[28px] sm:text-[28px] text-center lg:text-left text-[#0F143A] `}
          >
            Find a time that fits your Schedule...
          </p>

          <ButtonPrimary handleClick={handleClick} content={"Book Now"} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
