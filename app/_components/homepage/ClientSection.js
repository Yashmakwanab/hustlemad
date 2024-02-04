"use client";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import Client from "./clients/Clients";

const ClientSection = ({ title }) => {
  return (
    <div className="relative">
      <Client title={title} />
      <div className="absolute bottom-0 w-full z-[99]">
        <div className="purpleBorderStyle"></div>
      </div>
    </div>
  );
};

export default ClientSection;
