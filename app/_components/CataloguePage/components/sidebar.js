"use client";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./../style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Data = [
  {
    lable: "Apparels",
    bg: "#D5F0FF",
    color_imageUrl: "/Images/categories/Accessories_color.webp",
    white_imageUrl: "/Images/categories/Accessories_white.webp",
    id: "apparels",
  },
  {
    lable: "Drinkware",
    id: "drinkware",
    bg: "#FFEEDB",
    color_imageUrl: "/Images/categories/Drinkware_color.webp",
    white_imageUrl: "/Images/categories/Drinkware_white.webp",
  },
  {
    lable: "Stationary",
    id: "stationary",
    bg: "#FFFACE",
    color_imageUrl: "/Images/categories/Stationary_color.webp",
    white_imageUrl: "/Images/categories/Stationary_white.webp",
  },
  {
    lable: "Accessories",
    id: "accessories",
    bg: "#D9FFE4",
    color_imageUrl: "/Images/categories/Accessories_color.webp",
    white_imageUrl: "/Images/categories/Accessories_white.webp",
  },
  {
    lable: "Games",
    id: "games",
    bg: "#F2E8FF",
    color_imageUrl: "/Images/categories/Games_color.webp",
    white_imageUrl: "/Images/categories/Games_white.webp",
  },
  {
    lable: "Everything Else",
    id: "everything",
    bg: "#FFFACE",
    color_imageUrl: "/Images/categories/EverythingElse_color.webp",
    white_imageUrl: "/Images/categories/EverythingElse_white.webp",
  },
  {
    lable: "Packaging",
    id: "packaging",
    bg: "#FEECCA",
    color_imageUrl: "/Images/categories/Packaging_color.webp",
    white_imageUrl: "/Images/categories/Packaging_white.webp",
  },
  {
    lable: "Shipping",
    id: "shipping",
    bg: "#FFF7DC",
    color_imageUrl: "/Images/categories/Shipping_color.webp",
    white_imageUrl: "/Images/categories/Shipping_white.webp",
  },
];
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const Category = ({
  bg,
  color_imageUrl,
  white_imageUrl,
  lable,
  selected,
  setSelected,
  id,
}) => {
  return (
    <div
      onClick={() => {
        setSelected(lable);
        scrollToSection(id);
      }}
      className="cursor-pointer select-none"
    >
      <div className="flex items-center gap-4 px-[20px] ">
        <div
          className={`w-[40px] h-[40px] flex items-center rounded-full justify-center border-2`}
          style={{
            background: selected === lable ? bg : "transparent",
          }}
        >
          <ImageWrapper
            src={selected === lable ? color_imageUrl : white_imageUrl}
          />
        </div>
        <h3
          className={
            selected === lable
              ? "font-mazzardSemiBold text-black"
              : "font-mazzard"
          }
        >
          {lable}
        </h3>
      </div>
    </div>
  );
};

const Categories = ({ selected, setSelected }) => {
  return (
    <>
      <div className="pt-10  flex-col gap-6 justify-center hidden nxl:flex ">
        {Data.map((data, index) => {
          return (
            <Category
              key={index}
              selected={selected}
              setSelected={setSelected}
              bg={data.bg}
              color_imageUrl={data.color_imageUrl}
              white_imageUrl={data.white_imageUrl}
              lable={data.lable}
              id={data.id}
            />
          );
        })}
      </div>
      <div className="fixed bg-[#fff] left-0">
        <h2 className="py-3  text-center w-[100vw] nxl:hidden  font-mazzardSemiBold text-lg border-b-2">
          Categegories
        </h2>
        <div className="py-3 block nxl:hidden categories_slider">
          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            onSlideChange={(swiper) => {
              scrollToSection(Data[swiper.activeIndex].id);
              setSelected(Data[swiper.activeIndex].lable);
            }}
            className="mySwiper w-[250px]"
          >
            {Data.map((data, index) => {
              return (
                <SwiperSlide>
                  <div className="flex items-center justify-center">
                    <Category
                      key={index}
                      selected={selected}
                      setSelected={setSelected}
                      bg={data.bg}
                      color_imageUrl={data.color_imageUrl}
                      white_imageUrl={data.white_imageUrl}
                      lable={data.lable}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

const SideBarCatalogue = ({ selected, setSelected }) => {
  console.log(selected);
  return (
    <div className="nxl:sidebar flex flex-col nxl:gap-5 xl:gap-10 nxl:w-[250px] bg-[#fff] relative nxl:h-[100vh] ">
      <Categories selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SideBarCatalogue;
