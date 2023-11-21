import React from "react";
import styles from "./Spinner.module.css";
import Backdrop from "../Backdrop_Spinner/Backdrop";

import animationData from "./../../../public/Images/RocketLoader.json";
import Lottie from "lottie-react";

function Spinner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {/* this is backdrop */}
      <Backdrop show={true} />
      <div style={{ backgroundColor: "#fff" }} className={styles.position}>
        <div className="w-[150px] md:w-[200px] lg:w-[250px]">
          <Lottie
            animationData={animationData}
            loop={true}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
        </div>
        ;
      </div>
    </div>
  );
}

export default Spinner;
