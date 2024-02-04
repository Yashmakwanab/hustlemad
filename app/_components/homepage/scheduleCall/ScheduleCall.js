"use client";
import scheduleImage from "./../../../../public/Images/landingPage/scheduleCall.png";
import ButtonPrimary from "../../commonComponents/ButtonPrimary";
import "./styles.css";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import { useRouter } from "next/navigation";

const ScheduleCall = ({
  bgColor,
  title,
  subTitle,
  buttonContent,
  showBorder,
}) => {
  let router = useRouter();
  const handleClick = () => {
    router.push("/catalogue");
  };
  return (
    <div className="relative ">
      {showBorder && (
        <div className="absolute top-0 w-full ">
          <div className="greenBorderStyle"></div>
        </div>
      )}
      <div
        className={`schedule_container sectionPadding ${
          bgColor === "purple" ? "bg-[#FFDFFE]" : "bg-[#FFF9D7]"
        }`}
      >
        <div className="schedule_content flex-col-reverse md:flex-row">
          <div>
            <ImageWrapper
              width={250}
              height={200}
              src={scheduleImage.src}
              alt="Schedule Image"
            />
          </div>
          <div className="ctc_section ">
            <h2 className="font-recoleta text-center text-[24px] sm:text-[30px] md:text-[40px] font-[900] leading-[27px] sm:leading-[40px] xl:leading-[44px] text-[#0F143A] ">
              {title}
            </h2>
            <p
              className={`text-center tagline 6xl:text-[36px] max-w-[500px]  5xl:text-[32px] 2xl:text-[28px] sm:text-[28px]   text-[#0F143A] `}
            >
              {subTitle}
            </p>
            <ButtonPrimary handleClick={handleClick} content={buttonContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
