"use client";
import Image from "next/image";
import IIMB from "./../../../../public/Images/landingPage/IIMB.png"
import Frame from "./../../../../public/Images/landingPage/Frame.png"
import Easyat from "./../../../../public/Images/landingPage/Easyat.png"
import Groww from "./../../../../public/Images/landingPage/Groww.png"
import Deliveroo from "./../../../../public/Images/landingPage/Deliveroo.png"
import CapTable from "./../../../../public/Images/landingPage/CapTable.png"
import ExcelenciaLogo from "./../../../../public/Images/landingPage/Excelencia-logo.png"
import "./styles.css";
import MarqeeComponent from "../../commonComponents/MarqeeComponent";

const Client = () => {

  return (
    <div className="client_container">


      <h2 className="font-recoleta text-center text-[24px]  sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] pt-[20px] pb-[10px] ">
        Brewing <span className="underlineCtm">Fresh</span> swag for
      </h2>
      <MarqeeComponent scrollingContent={<div className=" pt-[15px] pb-[15px] md:pt-[25px] md:pb-[25px] xl:pt-[35px] xl:pb-[35px] 2xl:pt-[55px] 2xl:pb-[55px]" style={{ display: 'flex', alignItems: 'center', gap: '1em' }}><Image src={IIMB} alt="logo" className="marque_images" />
        <Image src={Frame} alt="logo" className="marque_images" />
        <Image src={Easyat} alt="logo" className="marque_images" />
        <Image src={Groww} alt="logo" className="marque_images" />
        <Image src={Deliveroo} alt="logo" className="marque_images" />
        <Image src={CapTable} alt="logo" className="marque_images" />
        <Image src={ExcelenciaLogo} alt="logo" className="marque_images" /></div>} />
    </div>
  );
};

export default Client;
