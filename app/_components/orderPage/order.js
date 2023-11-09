"use client";
import React, { useState } from "react";
import Cartpage from "../cart/orderCart";
import OrderRequest from "./orderRequestForm/orderRequest";
import { useSelector } from "react-redux";

export default function OrderPage() {
    const [showCart, setShowCart] = useState(false);
    const cartitems = useSelector((state) => state.cart);
    return (
        <>
            <div className="w-full lg:w-[calc(100vw-300px)]">
                <OrderRequest />
            </div>
            <div className="fixed w-[300px] flex items-center justify-center top-[127px] nxl:top-[80px] right-0 hidden lg:block lg:fixed">
                <Cartpage />
            </div>
            <div>
                <div className="z-[99999999] bg-[#0F143A] py-[20px] px-[32px] flex items-center justify-center top-[45px] md:top-[127px] nxl:top-[80px] right-0 block lg:hidden fixed cursor-pointer w-full sm:w-auto rounded-b-[12px] sm:rounded-bl-[12px] sm:!rounded-br-none" onClick={() => setShowCart(!showCart)}>
                    <div className="text-white font-mazzardMedium text-[18px] leading-[18px] hidden sm:block">
                        Expand Swag Pack [{cartitems.length}]
                    </div>
                    <div className="text-white font-mazzardMedium text-[18px] leading-[18px] sm:hidden">
                        View Swag Pack [{cartitems.length}]
                    </div>
                    {showCart && <div className=""><Cartpage /></div>}
                </div>
            </div>
        </>
    );
}
