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
    <div className="schedule_container pt-20">
      <div className="schedule_content flex-col-reverse md:flex-row">
        <div>
          <Image src={scheduleImage} />
        </div>
        <div className="ctc_section ">
          <h2 className="font-recoleta text-center text-[24px] sm:text-[30px] md:text-[40px] font-[900] leading-[27px] sm:leading-[40px] xl:leading-[44px] text-[#0F143A] ">
            Brewing Fresh swag for
          </h2>

          <ButtonPrimary handleClick={handleClick} content={"Book Now"} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
