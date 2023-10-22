"use client";
import Image from "next/image";
import IIMB from "./../../../../public/Images/landingPage/IIMB.webp";
import Frame from "./../../../../public/Images/landingPage/Frame.webp";
import Easyat from "./../../../../public/Images/landingPage/Easyat.webp";
import Groww from "./../../../../public/Images/landingPage/Groww.webp";
import Deliveroo from "./../../../../public/Images/landingPage/Deliveroo.webp";
import CapTable from "./../../../../public/Images/landingPage/CapTable.webp";
import ExcelenciaLogo from "./../../../../public/Images/landingPage/Excelencia-logo.webp";
import "./styles.css";
import MarqeeComponent from "../../commonComponents/MarqeeComponent";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";

const Client = () => {
  return (
    <div className="client_container">
      <h2 className="font-recoleta text-center text-[24px]  sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] pt-[20px] pb-[10px] ">
        Brewing <span className="underlineCtm">Fresh</span> swag for
      </h2>
      <MarqeeComponent
        scrollingContent={
          <div
            className=" pt-[15px] pb-[15px] md:pt-[25px] md:pb-[25px] xl:pt-[35px] xl:pb-[35px] 2xl:pt-[55px] 2xl:pb-[55px]"
            style={{ display: "flex", alignItems: "center", gap: "1em" }}
          >
            <ImageWrapper
              width={200}
              height={100}
              src={IIMB.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              width={200}
              height={100}
              src={Frame.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              width={200}
              height={100}
              src={Easyat.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              width={200}
              height={100}
              src={Groww.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              width={200}
              height={100}
              src={Deliveroo.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              width={200}
              height={100}
              src={CapTable.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              width={200}
              height={100}
              src={ExcelenciaLogo.src}
              alt="logo"
              className="marque_images"
            />
          </div>
        }
      />
    </div>
  );
};

export default Client;
