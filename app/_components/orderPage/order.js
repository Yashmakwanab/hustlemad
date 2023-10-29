"use client";
import Cartpage from "../cart/cart";
import React from "react";
import OrderRequest from "./orderRequestForm/orderRequest";

export default function OrderPage() {
    return (
        <>
            <div className="w-full lg:w-[calc(100vw-300px)]">
                <OrderRequest />
            </div>
            <div className="fixed w-[300x] flex h-[100vh] items-center justify-center">
                <Cartpage />
            </div>
        </>
    );
}
