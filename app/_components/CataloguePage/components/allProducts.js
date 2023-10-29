"use client";
import React, { useState, useEffect } from "react";
import "./../style.css";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../redux/slice/cartSlice";

const AllProduct = () => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);

  const getproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setproducts(data);
  };

  useEffect(() => {
    getproducts();
  }, []);

  const handleadd = (product) => {
    const isProductInCart = cartitems.some(
      (item) => item.title === product.title
    );
    if (isProductInCart !== true) {
      dispatch(add(product));
    }
  };

  return (
    <>
      <div
        id="apparels"
        className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10"
      >
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
                <div
                  className="add_cart flex w-[13%] cursor-pointer"
                  onClick={() => handleadd(product)}
                >
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
      <div id="drinkware" className="h-[1000px] bg-[#787]">
        ggg
      </div>
      <div id="stationary" className="h-[1000px] bg-[#578]">
        ggg
      </div>
      <div id="accessories" className="h-[1000px] bg-[#355]">
        ggg
      </div>
      <div id="games" className="h-[1000px] bg-[#345]">
        ggg
      </div>
      <div id="everything" className="h-[1000px] bg-[#753]">
        ggg
      </div>
      <div id="packaging" className="h-[1000px] bg-[#466]">
        ggg
      </div>
      <div id="shipping" className="h-[1000px] bg-[#555]">
        ggg
      </div>
    </>
  );
};

export default AllProduct;
