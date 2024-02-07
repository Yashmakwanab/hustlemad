"use client";
import React, { useState } from "react";
import Cartpage from "../cart/orderCart";
import OrderRequest from "./orderRequestForm/orderRequest";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import { useSelector } from "react-redux";

export default function OrderPage() {
  const [showCart, setShowCart] = useState(false);
  const cartitems = useSelector((state) => state.cart);

  return (
    <>
      <span className={showCart ? "overlay" : ""}></span>
      <div className="w-full lg:w-[calc(100vw-300px)]">
        <OrderRequest />
      </div>
      <div className="fixed w-[300px] flex items-center justify-center !top-[127px] nxl:!top-[80px] right-0 hidden lg:block lg:fixed">
        <Cartpage />
      </div>
      <div>
        <div className="bg-white">
          <div
            className="z-[99999999] bg-[#0F143A] pt-[16px] pb-[8px] sm:pt-[20px] sm:pb-[20px] px-[32px] flex items-center justify-center top-[45px] md:top-[127px] nxl:top-[80px] right-0 block lg:hidden fixed cursor-pointer w-full sm:w-auto rounded-b-[12px] sm:rounded-bl-[12px] sm:!rounded-br-none"
            onClick={() => setShowCart(!showCart)}
          >
            <p className="hidden md:flex items-center gap-4">
              Expand Swag Pack
              <div className="text-[#9397ff] font-recoleta text-[18px] leading-[18px] font-[500]">
                [{cartitems?.length}]
              </div>
            </p>
            <div className="sm:hidden">
              <div className="text-white font-mazzardMedium text-[16px] leading-[16px] mb-[10px]">
                View Swag Pack
              </div>
              <div className="flex justify-center">
                {showCart === true ? (
                  <ImageWrapper
                    src="/Images/Catlog/upCart.svg"
                    alt="img"
                    className="w-[20px] h-[20px]"
                  />
                ) : (
                  <ImageWrapper
                    src="/Images/Catlog/downCart.svg"
                    alt="img"
                    className="w-[20px] h-[20px]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {showCart && (
          <div className="">
            <Cartpage setShowCart={setShowCart} />
          </div>
        )}
      </div>
    </>
  );
}
