"use client";
import React, { useState } from "react";
import { Modal } from "antd";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
const ProductDetailModal = ({
  openModel,
  setOpenModel,
  setProductDetail,
  //   productDetail,
}) => {
  const [selectVariant, setSelectVariant] = useState(null);
  const [selectVariantIndex, setSelectVariantIndex] = useState(null);
  const productDetail = {
    _id: "62d9a4a188bbf0df799fdfc7",
    categoryId: "62d964b6f57e16db99387e6c",
    sortId: 103,
    name: "Unisex Zipper Hoodie",
    description:
      "A truly classic zipper sweatshirt that owes its uncompromising construction to Hustlemad’s highest quality benchmarks.",
    sub_description: "",
    item_Details: [
      "Super soft Altima fabric",
      "97% Cotton & 3% Elastane",
      "Long Lasting, Stylish and Comfortable",
      "Guaranteed zero pilling and shrinkage",
    ],
    productType: "C",
    price: [
      {
        cost: 1375,
        cost_GST: "0.05",
        customisation: 100,
        customisation_GST: "0.18",
        margin: "0.3",
        _id: "646eeb453680d5b3be780836",
      },
    ],
    image: [
      "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9d5ef6e1-b5fa-4be1-a284-05a91150f800/public",
    ],
    brandName: "Hustlemad",
    available: true,
    cust_flag: true,
    createdBy: "60e9c7db11ab1428accf8278",
    updatedBy: "60e9c7db11ab1428accf8278",
    deletedBy: "60e9c7db11ab1428accf8278",
    timestamp: "2022-07-21T19:10:15.067Z",
    __v: 0,
    folder: "",
    updatedAt: "2023-05-25T04:59:49.037Z",
    variant: [
      {
        _id: "62db777f020b6b2d10f4f19d",
        productId: "62d9a4a188bbf0df799fdfc7",
        productType: "",
        sizeAndInventory: [""],
        images: [
          "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9d5ef6e1-b5fa-4be1-a284-05a91150f800/public",
        ],
        colorName: "Charcoal",
        hexColor: "#121212",
        varName: "",
        sku: "",
        createdBy: "60e9c7db11ab1428accf8278",
        updatedBy: "60e9c7db11ab1428accf8278",
        deletedBy: "60e9c7db11ab1428accf8278",
        timestamp: "2022-07-23T04:22:18.248Z",
        __v: 0,
      },
      {
        _id: "62db777f020b6b2d10f4f1a0",
        productId: "62d9a4a188bbf0df799fdfc7",
        productType: "",
        sizeAndInventory: [""],
        images: [
          "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/62bf2e25-5b8c-4ca7-d77c-c94b3cd48f00/public",
        ],
        colorName: "Salmon",
        hexColor: "#A36974",
        varName: "",
        sku: "",
        createdBy: "60e9c7db11ab1428accf8278",
        updatedBy: "60e9c7db11ab1428accf8278",
        deletedBy: "60e9c7db11ab1428accf8278",
        timestamp: "2022-07-23T04:22:18.248Z",
        __v: 0,
      },
      {
        _id: "62db777f020b6b2d10f4f19f",
        productId: "62d9a4a188bbf0df799fdfc7",
        productType: "",
        sizeAndInventory: [""],
        images: [
          "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/d9844769-7f78-433c-36c9-9ed0b8b2e500/public",
        ],
        colorName: "Olive",
        hexColor: "#26361E",
        varName: "",
        sku: "",
        createdBy: "60e9c7db11ab1428accf8278",
        updatedBy: "60e9c7db11ab1428accf8278",
        deletedBy: "60e9c7db11ab1428accf8278",
        timestamp: "2022-07-23T04:22:18.248Z",
        __v: 0,
      },
      {
        _id: "62db777f020b6b2d10f4f19e",
        productId: "62d9a4a188bbf0df799fdfc7",
        productType: "",
        sizeAndInventory: [""],
        images: [
          "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/d05a0005-b778-4f21-7a3f-1d0b36196800/public",
        ],
        colorName: "Pink",
        hexColor: "#EDC2E3",
        varName: "",
        sku: "",
        createdBy: "60e9c7db11ab1428accf8278",
        updatedBy: "60e9c7db11ab1428accf8278",
        deletedBy: "60e9c7db11ab1428accf8278",
        timestamp: "2022-07-23T04:22:18.248Z",
        __v: 0,
      },
      {
        _id: "62db777f020b6b2d10f4f1a1",
        productId: "62d9a4a188bbf0df799fdfc7",
        productType: "",
        sizeAndInventory: [""],
        images: [
          "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/fc34f35f-25be-4668-df9b-ee8afc873a00/public",
        ],
        colorName: "White",
        hexColor: "#FFFFFF",
        varName: "",
        sku: "",
        createdBy: "60e9c7db11ab1428accf8278",
        updatedBy: "60e9c7db11ab1428accf8278",
        deletedBy: "60e9c7db11ab1428accf8278",
        timestamp: "2022-07-23T04:22:18.248Z",
        __v: 0,
      },
    ],
  };
  console.log(selectVariant);
  return (
    <>
      <Modal
        centered
        footer={false}
        width={800}
        open={openModel}
        onCancel={() => {
          setOpenModel(true);
          setProductDetail(null);
        }}
      >
        <div className="flex gap-8 select-none flex-col md:flex-row items-center	">
          <div className="w-[300px]">
            <div>
              <ImageWrapper
                src={
                  selectVariant
                    ? selectVariant.images[0]
                    : productDetail.image[0]
                }
              />
            </div>
            <div className="w-[250]">
              <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation]}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={10}
                onSlideChange={(swiper) => {
                  console.log(swiper);
                  setSelectVariant(productDetail.variant[swiper.realIndex]);
                }}
              >
                {productDetail.variant.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ImageWrapper src={item.images[0]} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-w-[500px]">
            <p className="font-mazzardMedium text-xl"> {productDetail.name}</p>
            <h2 className="uppercase font-mazzardMedium text-md">
              {productDetail.brandName}
            </h2>
            <p className="font-mazzardMedium"> Available Colors</p>
            <div className="flex gap-2">
              {productDetail.variant.map((item, index) => {
                const divStyle = {
                  backgroundColor: item.hexColor,
                  width: "20px",
                  height: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                };

                return (
                  <div
                    style={divStyle}
                    className="block"
                    onClick={() => {
                      setSelectVariant(item);
                      setSelectVariantIndex(index);
                    }}
                  ></div>
                );
              })}
            </div>
            <p className="font-mazzardMedium">Price</p>
            <p>
              <span className="font-mazzardSemiBold text-lg">
                ₹{productDetail.price[0].cost}
              </span>
              /swag
            </p>
            <button>add to cart</button>

            <p className="uppercase font-mazzardSemiBold text-md underline underline-offset-2">
              description
            </p>
            <p>{productDetail.description}</p>
            <p>item details</p>
            <div>
              {productDetail.item_Details.map((detail) => (
                <p>{detail}</p>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductDetailModal;
