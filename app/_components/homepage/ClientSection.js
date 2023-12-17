"use client";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import Client from "./clients/Clients";

const ClientSection = ({ title }) => {
  return (
    <div className="relative">
      <Client title={title} />
      <div className="absolute bottom-0 w-full z-[99]">
        <ImageWrapper
          width={1000}
          height={20}
          src="/Images/landingPage/purpleBorder.svg"
          className="w-full absolute top-[-1px] md:top-[-4px] xl:top-[-8px]"
          alt="Green Border"
        />
      </div>
    </div>
  );
};

export default ClientSection;
