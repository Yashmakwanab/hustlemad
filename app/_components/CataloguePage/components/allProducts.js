"use client";
import React, { useState, useEffect } from "react";
import "./../style.css";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import { useDispatch } from 'react-redux';
import { add } from '../../../redux/slice/cartSlice';

const AllProduct = () => {
  const [products, setproducts] = useState([]);
  const dispatch =useDispatch();

  const getproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setproducts(data);
  };

  const handleadd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="productsWrapper w-full cards">
      {products.map((product) => (
        <div key={product.id} className="card ">
          <div className="product_image_container p-4">
            <ImageWrapper
              src={product.image}
              alt="img"
              className="product_image"
            />
          </div>
          <p className="font-mazzardSemiBold text-[10px] py-[0.5em] text-white company_title text-center bg-[#0F143A]">
            HUSTLEMAD
          </p>
          <div className="product_detail p-4 flex flex-col gap-1">
            <div className="flex justify-between gap-4">
              <div className="title_container w-[87%]">
                <h4 className="font-mazzardMedium product_title title_container ">
                  {product.title}
                </h4>
              </div>
              <div className="add_cart flex w-[13%] cursor-pointer" onClick={()=>handleadd(product)}>
                <ImageWrapper
                  src={"/Images/categories/plus.webp"}
                  className={"w-[24px] h-[24px] cursor-pointer"}
                />
              </div>
            </div>
            <h5 className={"font-mazzard"}>₹ {product.price}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
