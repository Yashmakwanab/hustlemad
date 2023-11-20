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
      <Backdrop show={true} />
      <div style={{ backgroundColor: "#fff" }} className={styles.position}>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
}

export default Spinner;
