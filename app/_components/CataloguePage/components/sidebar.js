"use client";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";

const Data = [
  {
    lable: "Apparels",
    bg: "#D5F0FF",
    color_imageUrl: "/Images/categories/Accessories_color.webp",
    white_imageUrl: "/Images/categories/Accessories_white.webp",
  },
  {
    lable: "Drinkware",
    bg: "#FFEEDB",
    color_imageUrl: "/Images/categories/Drinkware_color.webp",
    white_imageUrl: "/Images/categories/Drinkware_white.webp",
  },
  {
    lable: "Stationary",
    bg: "#FFFACE",
    color_imageUrl: "/Images/categories/Stationary_color.webp",
    white_imageUrl: "/Images/categories/Stationary_white.webp",
  },
  {
    lable: "Accessories",
    bg: "#D9FFE4",
    color_imageUrl: "/Images/categories/Accessories_color.webp",
    white_imageUrl: "/Images/categories/Accessories_white.webp",
  },
  {
    lable: "Games",
    bg: "#F2E8FF",
    color_imageUrl: "/Images/categories/Games_color.webp",
    white_imageUrl: "/Images/categories/Games_white.webp",
  },
  {
    lable: "Everything Else",
    bg: "#FFFACE",
    color_imageUrl: "/Images/categories/EverythingElse_color.webp",
    white_imageUrl: "/Images/categories/EverythingElse_white.webp",
  },
  {
    lable: "Packaging",
    bg: "#FEECCA",
    color_imageUrl: "/Images/categories/Packaging_color.webp",
    white_imageUrl: "/Images/categories/Packaging_white.webp",
  },
  {
    lable: "Shipping",
    bg: "#FFF7DC",
    color_imageUrl: "/Images/categories/Shipping_color.webp",
    white_imageUrl: "/Images/categories/Shipping_white.webp",
  },
];

const Category = ({
  bg,
  color_imageUrl,
  white_imageUrl,
  lable,
  selected,
  setSelected,
}) => {
  return (
    <div
      onClick={() => setSelected(lable)}
      className="cursor-pointer select-none"
    >
      <div className="flex items-center gap-4 pl-10">
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
    <div className="pt-10 flex flex-col gap-6 justify-center">
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
          />
        );
      })}
    </div>
  );
};

const SideBarCatalogue = ({ selected, setSelected }) => {
  console.log(selected);
  return (
    <div className="sidebar flex flex-col gap-5 xl:gap-10 w-[250px] bg-[#fff] relative h-[100vh] ">
      <Categories selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SideBarCatalogue;
