"use client";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./../style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Popover } from "antd";

const Data = [
  {
    label: "Apparels",
    bg: "#D5F0FF",
    color_imageUrl: "/Images/categories/Accessories_color.webp",
    white_imageUrl: "/Images/categories/Accessories_white.webp",
    id: "Apparels",
  },
  {
    label: "Drinkware",
    id: "Drinkware",
    bg: "#FFEEDB",
    color_imageUrl: "/Images/categories/Drinkware_color.webp",
    white_imageUrl: "/Images/categories/Drinkware_white.webp",
  },
  {
    label: "Stationery",
    id: "Stationery",
    bg: "#FFFACE",
    color_imageUrl: "/Images/categories/Stationary_color.webp",
    white_imageUrl: "/Images/categories/Stationary_white.webp",
  },
  {
    label: "Accessories",
    id: "Accessories",
    bg: "#D9FFE4",
    color_imageUrl: "/Images/categories/Accessories_color.webp",
    white_imageUrl: "/Images/categories/Accessories_white.webp",
  },
  {
    label: "Games",
    id: "Games",
    bg: "#F2E8FF",
    color_imageUrl: "/Images/categories/Games_color.webp",
    white_imageUrl: "/Images/categories/Games_white.webp",
  },
  {
    label: "Everything Else",
    id: "Everything Else",
    bg: "#FFFACE",
    color_imageUrl: "/Images/categories/EverythingElse_color.webp",
    white_imageUrl: "/Images/categories/EverythingElse_white.webp",
  },
  {
    label: "Packaging",
    id: "Packaging",
    bg: "#FEECCA",
    color_imageUrl: "/Images/categories/Packaging_color.webp",
    white_imageUrl: "/Images/categories/Packaging_white.webp",
  },
  {
    label: "Shipping",
    id: "Shipping",
    bg: "#FFF7DC",
    color_imageUrl: "/Images/categories/Shipping_color.webp",
    white_imageUrl: "/Images/categories/Shipping_white.webp",
  },
];

// const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
// const paddingTop = parseInt(
//   window.getComputedStyle(section).paddingTop,
//   10
// );
//     const scrollPosition = section.offsetTop - paddingTop - 100;
//     window.scrollTo({ top: scrollPosition, behavior: "smooth" });
//   }
// };

const Category = ({
  bg,
  color_imageUrl,
  white_imageUrl,
  scrollToSection,
  label,
  closePopOver = () => {}, // Default value is an empty function
  selected,
  setSelected,
  id,
  slideTo,
}) => {
  const seletedIndex = (label) => {
    return Data.findIndex((data) => data.id === label);
  };
  return (
    <div
      onClick={() => {
        setSelected(label);
        scrollToSection(label);
        closePopOver(false);
        let index = seletedIndex(label);
        if (slideTo) {
          slideTo(index);
        }
        console.log(index);
      }}
      className="cursor-pointer select-none "
    >
      <div className="flex items-center gap-4 px-[10px] nxl:px-[20px]">
        <div
          className={`w-[40px] h-[40px] flex items-center rounded-full justify-center border-2`}
          style={{
            background: selected === label ? bg : "transparent",
          }}
        >
          <ImageWrapper
            src={selected === label ? color_imageUrl : white_imageUrl}
          />
        </div>
        <h3
          className={
            selected === label
              ? "font-mazzardSemiBold text-black"
              : "font-mazzard"
          }
        >
          {label}
        </h3>
      </div>
    </div>
  );
};

const Categories = ({ selected, setSelected }) => {
  const [showCart, setShowCart] = useState(false);
  const [openPopOver, setOpenPopOver] = useState(false);
  const [swiper, setSwiper] = useState();
  const [constantInnerWidth, setConstantInnerWidth] = useState(
    window.innerWidth
  );

  // Step 2: Use useEffect to add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      // Update state with current inner width
      setConstantInnerWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    // Define breakpoints for different window inner widths
    const breakpoints = {
      small: 600,
      medium: 768,
      large: 900,
      xlarge: 1000,
    };

    // Determine the current breakpoint based on window inner width
    const currentBreakpoint = Object.keys(breakpoints).find(
      (key) => constantInnerWidth <= breakpoints[key]
    );

    if (section) {
      // Define different padding values for each breakpoint
      const paddingValues = {
        small: 20,
        medium: 29,
        large: 40,
        xlarge: 50,
      };

      const paddingTop = paddingValues[currentBreakpoint] || 0;

      const scrollPosition = section.offsetTop - paddingTop - 50;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  console.log(constantInnerWidth);
  const slideTo = (index) => {
    if (swiper) {
      swiper.slideTo(index); // Use the slideTo method provided by Swiper
    }
  };

  return (
    <>
      <div className="  flex-col gap-6 justify-center hidden nxl:flex  ">
        <h2 className="py-3 hidden nxl:block  text-center font-mazzardSemiBold text-lg border-b-2">
          Categories
        </h2>
        {Data.map((data, index) => {
          return (
            <Category
              scrollToSection={scrollToSection}
              key={index}
              selected={selected}
              setSelected={setSelected}
              bg={data.bg}
              color_imageUrl={data.color_imageUrl}
              white_imageUrl={data.white_imageUrl}
              label={data.label}
              id={data.id}
            />
          );
        })}
      </div>
      <div className="fixed bg-[#fff] left-0 md:top-[125px]">
        <h2 className="py-3  text-center w-[100vw] nxl:hidden  font-mazzardSemiBold text-lg border-b-2">
          Categories
        </h2>
        <Popover
          trigger="click"
          open={openPopOver}
          placement="bottom"
          content={
            <div className="flex flex-col gap-3">
              {" "}
              <h2 className="py-3 hidden nxl:block  text-center font-mazzardSemiBold text-lg border-b-2">
                Categegories
              </h2>
              {Data.map((data, index) => {
                return (
                  <div onClick={() => setOpenPopOver && setOpenPopOver(false)}>
                    <Category
                      scrollToSection={scrollToSection}
                      slideTo={slideTo}
                      closePopOver={setOpenPopOver}
                      key={index}
                      selected={selected}
                      setSelected={setSelected}
                      bg={data.bg}
                      color_imageUrl={data.color_imageUrl}
                      white_imageUrl={data.white_imageUrl}
                      label={data.label}
                      id={data.id}
                    />
                  </div>
                );
              })}
            </div>
          }
        >
          <div className="py-3 block nxl:hidden categories_slider">
            <Swiper
              // loop={true}
              navigation={true}
              modules={[Navigation]}
              onSlideChange={(swiper) => {
                scrollToSection(Data[swiper.activeIndex].id);
                setSelected(Data[swiper.activeIndex].label);
              }}
              onSwiper={setSwiper}
              className="mySwiper w-[250px]"
            >
              {Data.map((data, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => setOpenPopOver((prev) => !prev)}
                  >
                    <div className="flex items-center justify-center">
                      <Category
                        scrollToSection={scrollToSection}
                        key={index}
                        selected={selected}
                        setSelected={setSelected}
                        bg={data.bg}
                        color_imageUrl={data.color_imageUrl}
                        white_imageUrl={data.white_imageUrl}
                        label={data.label}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Popover>
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
