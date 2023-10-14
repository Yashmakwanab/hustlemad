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


      <h2 className="font-recoleta text-center text-[24px]  sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] mb-2 sm:mb-3 lg:mb-4 xl:mb-6  mt-2 sm:mt-3 lg:mt-4 xl:mt-6">
        Brewing <span className="underlineCtm">Fresh</span> swag for
      </h2>
      <MarqeeComponent scrollingContent={<div style={{ display: 'flex', padding: '50px 0px', alignItems: 'center', gap: '1em' }}><Image src={IIMB} alt="logo" />
        <Image src={Frame} alt="logo" />
        <Image src={Easyat} alt="logo" />
        <Image src={Groww} alt="logo" />
        <Image src={Deliveroo} alt="logo" />
        <Image src={CapTable} alt="logo" />
        <Image src={ExcelenciaLogo} alt="logo" /></div>} />
    </div>
  );
};

export default Client;
