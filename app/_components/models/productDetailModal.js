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
import { selectProductDetail } from "@/app/redux/slice/globleSlice";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/app/redux/slice/cartSlice";
const ProductDetailModal = ({ openModel, setOpenModel }) => {
  const [selectVariant, setSelectVariant] = useState(null);
  const [selectVariantIndex, setSelectVariantIndex] = useState(null);
  const product = useSelector(selectProductDetail);
  const dispatch = useDispatch();

  const handleadd = (productDetail) => {
    const color = productDetail?.colorName;
    dispatch(add({ ...product, color, choice: "" }));
  };
  return (
    <>
      <Modal
        centered
        footer={false}
        width={800}
        open={openModel}
        onCancel={() => {
          setOpenModel(false);
          setSelectVariant(null);
        }}
      >
        <div className="flex gap-8 select-none flex-col md:flex-row items-center	">
          <div className="w-[300px]">
            <div>
              <ImageWrapper
                src={
                  selectVariant
                    ? selectVariant?.images?.[0]
                    : product?.image?.[0]
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
                className="modalSwiper"
                onSlideChange={(swiper) => {
                  console.log(swiper);
                  setSelectVariant(product?.variant[swiper?.realIndex]);
                }}
              >
                {product?.variant?.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ImageWrapper src={item?.images?.[0]} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-w-[500px]">
            <p className="font-mazzardMedium text-xl"> {product?.name}</p>
            <h2 className="uppercase font-mazzardMedium text-md">
              {product?.brandName}
            </h2>
            <p className="font-mazzardMedium"> Available Colors</p>
            <div className="flex gap-2">
              {product?.variant?.map((item, index) => {
                const divStyle = {
                  backgroundColor: item?.hexColor,
                  width: "20px",
                  height: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                };

                return (
                  <div
                    key={index}
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
                ₹{product?.price?.[0]?.cost}
              </span>
              /swag
            </p>
            <button
              className=""
              onClick={() => {
                handleadd(selectVariant);
                setOpenModel(false);
              }}
            >
              add to cart
            </button>

            <p className="uppercase font-mazzardSemiBold text-md underline underline-offset-2">
              description
            </p>
            <p>{product?.description}</p>
            <p>item details</p>
            <div>
              {product?.item_Details?.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductDetailModal;
