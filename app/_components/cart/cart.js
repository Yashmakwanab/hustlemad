"use client";
import React, { useState } from "react";
import { remove } from "../../redux/slice/cartSlice";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import { Select } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProductList,
  selectQuantityNumber,
  setAllProductList,
  setQuantityNumber,
  setTotalEstimate,
  setTotalPrice,
} from "../../redux/slice/globleSlice";
import "./style.css";
import { removeCustomProduct } from "@/app/redux/slice/customOrderSlice";
const CartSection = ({
  cartitems,
  defaultQuantityNumber,
  handleChange,
  totalEstimate,
  pricePerPack,
  getColor,
  getCartImage,
  handleremove,
  showContinue,
  heightOfCart,
  setShow,
}) => {
  return (
    <div className="bg-white">
      <div className="flex nxl:justify-center    items-center pt-[12px] pb-[12px] border-b-[1px]">
        <div className="flex justify-center pt-[12px] pb-[12px] w-full">
          {" "}
          <div className="text-[#0F143A] font-mazzardMedium text-[18px] leading-[18px] mr-[8px]">
            Your Swag Pack
          </div>
          <div className="text-[#2A32FF] font-recoleta text-[18px] leading-[18px] font-[500]">
            [{cartitems.length}]
          </div>
        </div>
        <ImageWrapper
          onClick={() => setShow((prev) => !prev)}
          src={"/Images/landingPage/closeIcon.webp"}
          className=" w-[18px] h-[18px] nxl:hidden cursor-pointer"
        />
      </div>
      <div
        style={{
          overflowY: "auto",
          height: `calc(100vh - ${heightOfCart}) `,
        }}
      >
        {cartitems?.map((item, index) => (
          <div
            key={index}
            className="flex border-b-[1px] pt-[13px] pb-[9px] px-[8px] justify-between"
          >
            <div className="flex">
              <div className="mr-[7px]">
                <ImageWrapper
                  src={getCartImage(item)}
                  alt="img"
                  className="w-[72px] h-[60px]"
                />
              </div>
              <div className="mr-[7px]">
                <div className="text-[#0F143A] font-mazzardSemiBold text-[14px] leading-[14px] mb-[10px] w-[174px]">
                  {item?.name?.substring(0, 22)}...
                </div>
                <div className="text-[#0F143A] font-mazzardMedium text-[12px] leading-[12px] mb-[6px] opacity-90">
                  <span className="font-[600] opacity-80">₹ </span>
                  {item?.price?.[0]?.cost}
                </div>
                <div className="text-[#0F143A] font-mazzardMedium text-[12px] leading-[12px] opacity-90">
                  {item?.brandName} {item?.color ? "-" : ""} {getColor(item)}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className=""
                onClick={() =>
                  handleremove([index, item?.name, item?.price?.[0]?.cost])
                }
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
                defaultValue={defaultQuantityNumber}
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
          <div className=" justify-center mb-[12px]   md:flex hidden">
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
  );
};
const Cartpage = ({ className }) => {
  const defaultQuantityNumber = useSelector(selectQuantityNumber);
  const [quantity, setQuantity] = useState(defaultQuantityNumber);
  const [show, setShow] = useState(false);
  const allProducts = useSelector(selectAllProductList);

  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove(id[0]));
    dispatch(removeCustomProduct(id[1]));
    if (id[2] === "TBD") {
      const productToRemove = allProducts.find(
        (product) => product?.name === id[1]
      );
      if (productToRemove) {
        const updatedProducts = allProducts.filter(
          (product) => product?.name !== id[1]
        );
        dispatch(setAllProductList(updatedProducts));
      }
    }
  };

  const handleChange = (value) => {
    setQuantity(value);
  };

  const pricePerPack = cartitems.reduce((acc, item) => {
    if (item?.price?.[0]?.cost !== "TBD") {
      return acc + parseFloat(item?.price?.[0]?.cost);
    } else {
      return acc;
    }
  }, 0);

  const totalEstimate =
    defaultQuantityNumber !== "Custom"
      ? pricePerPack * defaultQuantityNumber
      : pricePerPack;

  dispatch(setTotalPrice(pricePerPack));
  dispatch(setTotalEstimate(totalEstimate));
  dispatch(setQuantityNumber(quantity));

  const getCartImage = (item) => {
    const variantWithMatchingColor = item?.variant?.find(
      (variant) => variant?.colorName === item?.color
    );

    if (variantWithMatchingColor) {
      const [imageUrl] = variantWithMatchingColor?.images;
      return imageUrl;
    } else {
      return item?.image?.[0];
    }
  };

  const getColor = (item) => {
    const variantWithMatchingColor = item?.variant?.find(
      (variant) => variant?.colorName === item?.color
    );
    if (variantWithMatchingColor) {
      const colorName = variantWithMatchingColor?.colorName;
      return colorName;
    } else {
      return item?.color;
    }
  };

  return (
    <div className={className}>
      <div className="w-[300px] bg-white hidden nxl:block fixed  right-0 shadow-md h-full">
        <CartSection
          cartitems={cartitems}
          defaultQuantityNumber={defaultQuantityNumber}
          handleChange={handleChange}
          pricePerPack={pricePerPack}
          totalEstimate={totalEstimate}
          getCartImage={getCartImage}
          getColor={getColor}
          handleremove={handleremove}
          heightOfCart={"400px"}
          setShow={setShow}
          showContinue={true}
        />
      </div>
      <div
        className="fixed swag_pack_button nxl:hidden top-0 right-0 flex items-center justify-center"
        onClick={() => setShow((prev) => !prev)}
      >
        <div className=" text-white font-mazzardSemiBold flex items-center justify-center   nxl:hidden ">
          <p className="hidden md:block">Expand Swag Pack</p>
          {!show ? (
            <p className="block md:hidden">View Swag Pack</p>
          ) : (
            <div className=" justify-center mb-[12px] flex md:hidden">
              <Link href="/order" className="text-white font-mazzardMedium ">
                Continue
              </Link>
            </div>
          )}
        </div>
      </div>
      {show && (
        <div className="fixed w-full md:w-[unset] right-0 bottom-[70px] md:bottom-[-10px] nxl:hidden">
          <CartSection
            cartitems={cartitems}
            defaultQuantityNumber={defaultQuantityNumber}
            handleChange={handleChange}
            pricePerPack={pricePerPack}
            totalEstimate={totalEstimate}
            getCartImage={getCartImage}
            getColor={getColor}
            handleremove={handleremove}
            heightOfCart={"600px"}
            showContinue={false}
            setShow={setShow}
          />
        </div>
      )}
    </div>
  );
};

export default Cartpage;
