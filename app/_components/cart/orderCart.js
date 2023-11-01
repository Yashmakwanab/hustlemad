"use client";
import React, { useState } from 'react'
import { remove } from '../../redux/slice/cartSlice';
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import { Select } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalEstimate, setTotalPrice } from '../../redux/slice/globleSlice';
import "./style.css";

const Cartpage = () => {
  const [quantity, setQuantity] = useState(100);

  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  const handleChange = (value) => {
    setQuantity(value);
  };

  const pricePerPack = cartitems.reduce((acc, item) => {
    return acc + parseFloat(item.price);
  }, 0);

  const totalEstimate = pricePerPack * quantity;

  dispatch(setTotalPrice(pricePerPack))
  dispatch(setTotalEstimate(totalEstimate))

  return (
    <div className="absolute top-[58px] lg:top-0 ">
      <div className="w-full sm:w-[300px] fixed right-0 shadow-md lg:h-full rounded-l-[16px] lg:rounded-none border-[20px] bg-white flex justify-center">
        <div className='max-w-[300px]'>
          <div className="flex justify-center pt-[20px] pb-[12px] border-b-[1px]">
            <div className="text-[#0F143A] font-mazzardMedium text-[18px] leading-[18px] mr-[8px]">
              Your Swag Pack
            </div>
            <div className="text-[#2A32FF] font-recoleta text-[18px] leading-[18px] font-[500]">
              [{cartitems.length}]
            </div>
          </div>
          <div className="h-[300px] lg:h-[calc(100vh-400px)] overflow-y-auto overflow-style">
            {cartitems?.map((item, index) => (
              <div
                key={index}
                className="flex border-b-[1px] pt-[13px] pb-[9px] px-[12px] justify-between"
              >
                <div className="flex">
                  <div className="mr-[20px]">
                    <ImageWrapper
                      src={item.image}
                      alt="img"
                      className="w-[72px] h-[60px]"
                    />
                  </div>
                  <div className="mr-[12px]">
                    <div className="text-[#0F143A] font-mazzardSemiBold text-[14px] leading-[14px] mb-[10px] w-[174px]">
                      {item.name.substring(0, 22)}...
                    </div>
                    <div className="text-[#0F143A] font-mazzardMedium text-[12px] leading-[12px] mb-[6px] opacity-90">
                      <span className="font-[600] opacity-80">₹ </span>
                      {item.price}
                    </div>
                    <div className="text-[#0F143A] font-mazzardMedium text-[12px] leading-[12px] opacity-90">
                      {item.category}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="" onClick={() => handleremove(item.id)}>
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
                    defaultValue={100}
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
            <div className="px-[18px] pb-[20px] lg:pb-0">
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
              <div className="flex justify-center mb-[12px]">
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
      </div>
    </div>
  );
};

export default Cartpage;
