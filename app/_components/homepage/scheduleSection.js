"use client";
import ScheduleCall from "./scheduleCall/ScheduleCall";

const ScheduleSection = () => {
  return (
    <div>
      <ScheduleCall
        bgColor={"purple"}
        title={" Wanna know more?"}
        subTitle={"Find a time that fits your Schedule..."}
        buttonContent={"Book Now"}
        showBorder={true}
      />
    </div>
  );
};

export default ScheduleSection;
