// "use client";
// import Image from "next/image";
// import IIMB from "./../../../../public/Images/landingPage/IIMB.png"
// import Frame from "./../../../../public/Images/landingPage/Frame.png"
// import Easyat from "./../../../../public/Images/landingPage/Easyat.png"
// import Groww from "./../../../../public/Images/landingPage/Groww.png"
// import Deliveroo from "./../../../../public/Images/landingPage/Deliveroo.png"
// import CapTable from "./../../../../public/Images/landingPage/CapTable.png"
// import ExcelenciaLogo from "./../../../../public/Images/landingPage/Excelencia-logo.png"
// import "./styles.css";

// const Client = () => {

//   return (
//     <div className="client_container pt-20">
//       <div className="client_content flex-col-reverse md:flex-row">
//         <div className="ctc_section ">
//           <marquee>
//             <div className="marquee_elem">
// <Image src={IIMB} />
// <Image src={Frame} />
// <Image src={Easyat} />
// <Image src={Groww} />
// <Image src={Deliveroo} />
// <Image src={CapTable} />
// <Image src={ExcelenciaLogo} />
//             </div>
//           </marquee>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Client;

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

const Client = () => {

  return (
    <div className="client_container p-20 overflow-hidden">
      <div className="client_content flex-col-reverse md:flex-row">

        <div className="ctc_section ">
          <h2 className="font-recoleta text-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
            Brewing Fresh swag for
          </h2>
          <div className="slider">
            <div className="slide-track">
              <Image src={IIMB} />
              <Image src={Frame} />
              <Image src={Easyat} />
              <Image src={Groww} />
              <Image src={Deliveroo} />
              <Image src={CapTable} />
              <Image src={ExcelenciaLogo} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
