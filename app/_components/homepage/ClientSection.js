"use client";

import Client from "./clients/Clients";

const ClientSection = () => {
  return (
    <div className="relative">
      <Client />
      <div className="absolute bottom-0 w-full">
        <img src="/Images/landingPage/greenBorder.svg" className="w-full absolute top-[-1px] md:top-[-4px] xl:top-[-8px]" alt="Green Border" />
      </div>
    </div>
  );
};

export default ClientSection;
