"use client";
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

const Client = ({title}) => {
  return (
    <div className="client_container py-5 md:py-10 md:pb-6 lg:py-10 lg:pb-6">
      <h2 className="font-recoleta text-center text-[24px]  sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] pt-[20px] pb-[10px] ">
        {title}
      </h2>
      <MarqeeComponent
        scrollingContent={
          <div className=" pt-[15px] flex items-center gap-[1em] pb-[15px] md:pt-[25px] md:pb-[25px] xl:pt-[35px] xl:pb-[35px] 2xl:pt-[55px] 2xl:pb-[55px]">
            <ImageWrapper src={IIMB.src} alt="logo" className="marque_images" />
            <ImageWrapper
              src={Frame.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              src={Easyat.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              src={Groww.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              src={Deliveroo.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
              src={CapTable.src}
              alt="logo"
              className="marque_images"
            />
            <ImageWrapper
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
