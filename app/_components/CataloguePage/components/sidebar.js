"use client";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import React, { useState } from "react";
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
    id: "Apparels",
  },
  {
    lable: "Drinkware",
    id: "Drinkware",
    bg: "#FFEEDB",
    color_imageUrl: "/Images/categories/Drinkware_color.webp",
    white_imageUrl: "/Images/categories/Drinkware_white.webp",
  },
  {
    lable: "Stationery",
    id: "Stationery",
    bg: "#FFFACE",
    color_imageUrl: "/Images/categories/Stationary_color.webp",
    white_imageUrl: "/Images/categories/Stationary_white.webp",
  },
  {
    lable: "Accessories",
    id: "Accessories",
    bg: "#D9FFE4",
    color_imageUrl: "/Images/categories/Accessories_color.webp",
    white_imageUrl: "/Images/categories/Accessories_white.webp",
  },
  {
    lable: "Games",
    id: "Games",
    bg: "#F2E8FF",
    color_imageUrl: "/Images/categories/Games_color.webp",
    white_imageUrl: "/Images/categories/Games_white.webp",
  },
  {
    lable: "Everything Else",
    id: "Everything Else",
    bg: "#FFFACE",
    color_imageUrl: "/Images/categories/EverythingElse_color.webp",
    white_imageUrl: "/Images/categories/EverythingElse_white.webp",
  },
  {
    lable: "Packaging",
    id: "Packaging",
    bg: "#FEECCA",
    color_imageUrl: "/Images/categories/Packaging_color.webp",
    white_imageUrl: "/Images/categories/Packaging_white.webp",
  },
  {
    lable: "Shipping",
    id: "Shipping",
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
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div className="  flex-col gap-6 justify-center hidden nxl:flex ">
        <h2 className="py-3 hidden nxl:block  text-center font-mazzardSemiBold text-lg border-b-2">
          Categegories
        </h2>
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
            loop={true}
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
                <SwiperSlide key={index}>
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
  return (
    <div className="nxl:sidebar flex flex-col nxl:gap-5 xl:gap-10 nxl:w-[250px] bg-[#fff] relative nxl:h-[100vh] ">
      <Categories selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SideBarCatalogue;
