"use client";
import React, { useState } from "react";
import "../customOrder/style.css";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import { useDispatch, useSelector } from "react-redux";
import CustomOrderModel from "../models/customOrderModel";
import { selectAllProductList, setAllProductList } from "@/app/redux/slice/globleSlice";
import { remove } from "@/app/redux/slice/cartSlice";
import { removeCustomProduct } from "@/app/redux/slice/customOrderSlice";

const CustomOrder = () => {
    const [openModel, setOpenModel] = useState(false);
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart);
    const allProducts = useSelector(selectAllProductList);

    const handleremove = (id) => {
        dispatch(remove(id[0]));
        dispatch(removeCustomProduct(id[1]))
        if (id[2] === "TBD") {
          const productToRemove = allProducts.find(product => product?.name === id[1]);
          if (productToRemove) {
            const updatedProducts = allProducts.filter(product => product?.name !== id[1]);
            dispatch(setAllProductList(updatedProducts));
          }
        }
    };

    function getCategoryName(category) {
        switch (category) {
            case "62d964b6f57e16db99387e6c":
                return "Apparels";
            case "62d964f7f57e16db99387e6f":
                return "Drinkware";
            case "62d9652ef57e16db99387e72":
                return "Stationery";
            case "62d96572f57e16db99387e75":
                return "Accessories";
            case "62d965b2f57e16db99387e78":
                return "Games";
            case "62d965eaf57e16db99387e7b":
                return "Everything Else";
            case "62d9662bf57e16db99387e7e":
                return "Packaging";
            case "62d966b9f57e16db99387e81":
                return "Shipping";
            default:
                return "";
        }
    }

    return (
        <>
            <div className="flex flex-col items-start">
                <div className="productsWrapper w-[100%] m-auto cards_order items-center pb-[24px] sm:pb-[36px]">
                    <div className="productsWrapper gap-[40px] flex flex-wrap">
                        {cartitems.map((product, index) => (
                            product?.price?.[0]?.cost === "TBD" && (
                                <div key={index} className="product_card_order">
                                    <div className="product_image_container_order p-[5px]">
                                        <ImageWrapper
                                            src={product?.image?.[0]}
                                            alt="img"
                                            className="product_image_order"
                                        />
                                    </div>
                                    <p className="font-mazzardSemiBold text-[10px] py-[5px] leading-[12px] text-white company_title text-center bg-[#0F143A] uppercase">
                                        {product?.brandName} {getCategoryName(product?.categoryId)}
                                    </p>
                                    <div className="product_detail_order px-[14px] py-[16px] flex flex-col">
                                        <div className="flex justify-between gap-4">
                                            <div className="title_container_order text-[16px] leading-[16px]">
                                                <h4 className="font-mazzardMedium product_title title_container ">
                                                    {product?.name}
                                                </h4>
                                            </div>
                                            <div
                                                className="add_cart flex cursor-pointer"
                                                onClick={() => handleremove([index, product?.name, product?.price?.[0]?.cost])}
                                            >
                                                <ImageWrapper
                                                    src={"/Images/Catlog/delete.svg"}
                                                    className={"w-[28px] h-[28px] cursor-pointer"}
                                                />
                                            </div>

                                        </div>
                                        <h5 className={"font-mazzardMedium text-[12px] leading-[14px]"}>
                                            ₹ {product?.price?.[0]?.cost}
                                        </h5>
                                    </div>
                                </div>
                            )
                        ))}
                        <div
                            className="product_card_order bg-[#0F143A14] cursor-pointer flex items-center"
                            onClick={() => setOpenModel(true)}
                        >
                            <div className="px-[24px] py-[34px]">
                                <div className="text-[#0F143A] text-[16px] leading-[24px] font-mazzardSemiBold text-center mb-[6px]">
                                    Looking for something else?
                                </div>
                                <div className="text-[#0F143ACC] text-[12px] leading-[18px] font-mazzardMedium text-center mb-[20px]">
                                    If only we could read minds! :D You’ll have to tell us.
                                </div>
                                <div className="flex justify-center">
                                    <ImageWrapper
                                        src={"/Images/Catlog/plusIcon.svg"}
                                        alt="img"
                                        className="w-[32px] h-[32px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomOrderModel openModel={openModel} setOpenModel={setOpenModel} />
        </>
    );
};

export default CustomOrder;
