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
  const [show, setShow] = useState(false);
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
    return acc + parseFloat(item.price);
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
        <div className="relative nxl:hidden">
          <div
            onClick={() => setShow((prev) => !prev)}
            className="swag_pack_button py-5 text-white font-mazzardSemiBold flex items-center justify-center fixed  nxl:hidden right-0"
          >
            <p>Expand Swag Pack</p>
          </div>
          {show && (
            <div className=" swag_pack_container  right-0  fixed">
              <div className="w-[300px] swag_pack_content  bg-white  shadow-md ">
                <div className="flex justify-center pt-[20px] pb-[12px] border-b-[1px]">
                  <div className="text-[#0F143A] font-mazzardMedium text-[18px] leading-[18px] mr-[8px] relative">
                    Your Swag Pack
                  </div>
                  <div className="text-[#2A32FF] font-recoleta text-[18px] leading-[18px] font-[500]">
                    [{cartitems.length}]
                  </div>
                  <span
                    onClick={() => setShow((prev) => !prev)}
                    className="fixed right-2"
                  >
                    <ImageWrapper
                      alt="Close Icon"
                      src="/Images/landingPage/closeIcon.webp"
                      width={16}
                      height={16}
                    />
                  </span>
                </div>
                <div className="h-[calc(100vh-600px)] overflow-y-auto overflow-style">
                  {cartitems?.map((item, index) => (
                    <div
                      key={index}
                      className="flex border-b-[1px] pt-[13px] pb-[9px] px-[12px] justify-between"
                    >
                      <div className="flex">
                        <div className="mr-[20px]">
                          <ImageWrapper
                            src={item.image}
                            alt="img"
                            className="w-[72px] h-[60px]"
                          />
                        </div>
                        <div className="mr-[12px]">
                          <div className="text-[#0F143A] font-mazzardSemiBold text-[14px] leading-[14px] mb-[10px] w-[174px]">
                            {item.title.substring(0, 22)}...
                          </div>
                          <div className="text-[#0F143A] font-mazzardMedium text-[12px] leading-[12px] mb-[6px] opacity-90">
                            <span className="font-[600] opacity-80">₹ </span>
                            {item.price}
                          </div>
                          <div className="text-[#0F143A] font-mazzardMedium text-[12px] leading-[12px] opacity-90">
                            {item.category}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button
                          className=""
                          onClick={() => handleremove(item.id)}
                        >
                          <ImageWrapper
                            src={"/Images/Catlog/delete-icon.svg"}
                            className="w-[18px] h-[18px]"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-[40px]">
                  <div className="border-b-[1px] px-[18px]">
                    <div className="flex items-center justify-between mb-[10px]">
                      <div className="text-[#0F143A] font-mazzardMedium text-[16px] leading-[18px]">
                        Quantity
                        <span className="text-[#0F143A] font-mazzardMedium text-[12px] leading-[14px] opacity-90 ml-[6px]">
                          ( 30 min. )
                        </span>
                      </div>
                      <div className="cart-select">
                        <Select
                          suffixIcon={<span className="custom-select-cart" />}
                          defaultValue={100}
                          popupClassName="cart-dropdown"
                          onChange={handleChange}
                          options={[
                            {
                              value: "30",
                              label: "30",
                            },
                            {
                              value: "50",
                              label: "50",
                            },
                            {
                              value: "100",
                              label: "100",
                            },
                            {
                              value: "150",
                              label: "150",
                            },
                            {
                              value: "200",
                              label: "200",
                            },
                            {
                              value: "250",
                              label: "250",
                            },
                            {
                              value: "300",
                              label: "300",
                            },
                            {
                              value: "500",
                              label: "500",
                            },
                            {
                              value: "Custom",
                              label: "Custom",
                            },
                          ]}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-[14px]">
                      <div className="text-[#0F143A] font-mazzardMedium text-[16px] leading-[18px]">
                        Price
                        <span className="text-[#0F143A] font-mazzardMedium text-[12px] leading-[14px] opacity-90 ml-[6px]">
                          ( per pack )
                        </span>
                      </div>
                      <div className="text-[#343434CC] font-mazzardSemiBold text-[10px] leading-[12px]">
                        <span className="text-[#0F143A] font-mazzardSemiBold text-[14px] leading-[16px]">
                          <span className="font-[600]">₹ </span>
                          {pricePerPack.toFixed(2)}
                        </span>{" "}
                        + <span>TBD</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-[18px]">
                    <div className="flex items-center justify-between mt-[14px] mb-[28px]">
                      <div className="text-[#0F143A] font-mazzardMedium text-[16px] leading-[18px]">
                        Total Estimate
                      </div>
                      <div className="text-[#343434CC] font-mazzardSemiBold text-[12px] leading-[14px]">
                        <span className="text-[#0F143A] font-mazzardSemiBold text-[16px] leading-[18px]">
                          <span className="font-[600]">₹ </span>
                          {totalEstimate.toFixed(2)}
                        </span>{" "}
                        + <span>TBD</span>
                      </div>
                    </div>
                    <div className="flex justify-center mb-[12px]">
                      <Link
                        href="/order"
                        className="text-white font-mazzardMedium text-[14px] leading-[17px] bg-[#0F143A] py-[8px] px-[40px] rounded-[6px]"
                      >
                        Continue
                      </Link>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-[#343434CC] font-mazzard text-[10px] leading-[12px] opacity-90">
                        Total est. doesn&#39;t include taxes and shipping fees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
