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
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import Link from "next/link";
import { remove } from "@/app/redux/slice/cartSlice";
import Cartpage from "../../cart/cart";

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
    lable: "Stationary",
    id: "Stationary",
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
  const [quantity, setQuantity] = useState(100);

  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  const handleChange = (value) => {
    setQuantity(value);
  };

  const pricePerPack = cartitems.reduce((acc, item) => {
    return acc + parseFloat(item?.price?.[0]?.cost);
  }, 0);

  const totalEstimate = pricePerPack * quantity;
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
        <div>
          <div
            className="z-[99999999] bg-[#0F143A] py-[20px] px-[32px] flex items-center justify-center top-[45px] md:top-[127px] nxl:top-[80px] right-0 block lg:hidden fixed cursor-pointer w-full sm:w-auto rounded-b-[12px] sm:rounded-bl-[12px] sm:!rounded-br-none"
            onClick={() => setShowCart(!showCart)}
          >
            <div className="text-white font-mazzardMedium text-[18px] leading-[18px] hidden sm:block">
              Expand Swag Pack
            </div>
            <div className="text-white font-mazzardMedium text-[18px] leading-[18px] sm:hidden">
              View Swag Pack
            </div>
            {showCart && (
              <div className="">
                <Cartpage />
              </div>
            )}
          </div>
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
