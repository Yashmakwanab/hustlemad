"use client";
import React, { useState, useEffect } from "react";
import "./../style.css";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../redux/slice/cartSlice";
import {
  selectAllProductList,
  setAllProductList,
} from "@/app/redux/slice/globleSlice";
import CustomOrderModel from "../../models/customOrderModel";

const AllProduct = () => {
  const [addCart, setAddCart] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const getproducts = async () => {
    const res = await fetch(
      "https://hustlemad-backend.herokuapp.com/productList"
    );
    const data = await res.json();
    dispatch(setAllProductList(data.products));
  };
  const allProducts = useSelector(selectAllProductList);

  useEffect(() => {
    getproducts();
  }, []);

  const handleadd = (product) => {
    const isProductInCart = cartitems.some(
      (item) => item?.name === product?.name
    );
    if (isProductInCart !== true) {
      dispatch(add(product));
    }
  };

  const customCategoryOrder = ['62d964b6f57e16db99387e6c', '62d964f7f57e16db99387e6f', '62d9652ef57e16db99387e72', "62d96572f57e16db99387e75", "62d965b2f57e16db99387e78", "62d965eaf57e16db99387e7b", "62d9662bf57e16db99387e7e", "62d966b9f57e16db99387e81"];

  const groupedProducts = allProducts.reduce((acc, product) => {
    if (!acc[product?.categoryId]) {
      acc[product?.categoryId] = [];
    }
    acc[product?.categoryId].push(product);
    return acc;
  }, {});

  const categoryIds = Object.keys(groupedProducts).sort((a, b) => {
    const indexOfA = customCategoryOrder.indexOf(a);
    const indexOfB = customCategoryOrder.indexOf(b);
    return indexOfA - indexOfB;
  });

  const sortedGroupedProducts = categoryIds.reduce((acc, categoryId) => {
    acc[categoryId] = groupedProducts[categoryId];
    return acc;
  }, {});

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
  function getCategorySubTitle(category) {
    switch (category) {
      case "62d964b6f57e16db99387e6c":
        return "Wear your Hustle";
      case "62d964f7f57e16db99387e6f":
        return "Fuel Carriers";
      case "62d9652ef57e16db99387e72":
        return "Scribble. Sort. Slay.";
      case "62d96572f57e16db99387e75":
        return "Smart tools = Smart tribe!";
      case "62d965b2f57e16db99387e78":
        return "No Work. All Play.";
      case "62d965eaf57e16db99387e7b":
        return "Outside the box, in the box.";
      case "62d9662bf57e16db99387e7e":
        return "The First Impression";
      case "62d966b9f57e16db99387e81":
        return "The Last Mile";
      default:
        return "";
    }
  }

  console.log("aaaaaaaaaaaaa", sortedGroupedProducts);
  return (
    <>
      <div className="flex flex-col items-start">
        <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
          {Object.entries(sortedGroupedProducts)?.map(
            ([category, categoryProducts]) => (
              <div
                key={category}
                id={getCategoryName(category)}
                className="pt-[7em]"
              >
                <div>
                  <h1 className="font-recoleta text-[24px] ">
                    {getCategoryName(category)}
                  </h1>
                  <h1 className="font-mazzard text-[36px] pb-4">
                    {getCategorySubTitle(category)}
                  </h1>
                </div>
                <div className="productsWrapper gap-6 flex flex-wrap">
                  {categoryProducts.map((product, index) => (
                    <div key={product?._id} className="product_card ">
                      <div
                        className="product_image_container p-4"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWrapper
                          src={product?.image?.[0]}
                          alt="img"
                          className="product_image"
                        />
                      </div>
                      <p className="font-mazzardSemiBold text-[11px] py-[0.5em] text-white company_title text-center bg-[#0F143A] uppercase">
                        {product?.brandName}
                      </p>
                      <div className="product_detail p-4 flex flex-col gap-1">
                        <div className="flex justify-between gap-4">
                          <div className="title_container w-[87%]">
                            <h4 className="font-mazzardMedium product_title title_container ">
                              {product?.name}
                            </h4>
                          </div>
                          <div
                            className="add_cart flex w-[13%] cursor-pointer"
                            onClick={() => {
                              handleadd(product)
                              setAddCart(index)
                            }}
                          >
                            {cartitems ?
                              <ImageWrapper
                                src={"/Images/categories/selectedPlus.svg"}
                                className={"w-[24px] h-[24px] cursor-pointer"}
                              />
                              :

                              <ImageWrapper
                                src={"/Images/categories/plus.webp"}
                                className={"w-[24px] h-[24px] cursor-pointer"}
                              />
                            }
                          </div>
                        </div>
                        <h5 className={"font-mazzard"}>
                          ₹ {product?.price?.[0]?.cost}
                        </h5>
                      </div>
                    </div>
                  ))}
                  <div
                    className="product_card bg-[#0F143A14] cursor-pointer flex items-center"
                    onClick={() => setOpenModel(true)}
                  >
                    <div className="px-[34px] py-[42px]">
                      <div className="text-[#0F143A] text-[18px] leading-[27px] font-mazzardSemiBold text-center mb-[16px]">
                        Looking for <br /> something else?
                      </div>
                      <div className="text-[#0F143ACC] text-[14px] leading-[21px] font-mazzardMedium text-center">
                        If only we could read minds! :D You’ll have to tell us.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <CustomOrderModel openModel={openModel} setOpenModel={setOpenModel} />
    </>
  );
};

export default AllProduct;
