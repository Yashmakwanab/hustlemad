"use client";
import style from "./style.module.css";

const ButtonPrimary = ({ handleClick, content, className }) => {
  return (
    <button
      className={`${style.primary_btn} ${className}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default ButtonPrimary;
