"use client";
import style from "./style.module.css";
const ButtonPrimary = ({ handleClick, content }) => {
  return <button className={style.primary_btn} onClick={handleClick}>{content}</button>;
};

export default ButtonPrimary;
