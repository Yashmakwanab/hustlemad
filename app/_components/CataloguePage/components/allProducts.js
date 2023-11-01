"use client";
import React, { useState, useEffect } from "react";
import "./../style.css";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../redux/slice/cartSlice";
import { Modal } from "antd";
import { selectAllProductList, setAllProductList } from "@/app/redux/slice/globleSlice";

const AllProduct = () => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const getproducts = async () => {
    const res = await fetch("https://hustlemad-backend.herokuapp.com/productList");
    const data = await res.json();
    setproducts(data.products);
    dispatch(setAllProductList(data.products));
  };
  const allProducts = useSelector(selectAllProductList)

  console.log("products", products)

  useEffect(() => {
    getproducts();
  }, []);

  const handleadd = (product) => {
    const isProductInCart = cartitems.some(
      (item) => item.name === product.name
    );
    if (isProductInCart !== true) {
      dispatch(add(product));
    }
  };
  // const modalContainer = (
  //   <Modal
  //     centered
  //     footer={false}
  //     open={open}
  //     onCancel={() => setOpen(false)}
  //     width={800}
  //   >
  //     <div className="flex">
  //       <div>
  //         <ImageWrapper
  //           src={"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"}
  //           alt="img"
  //           className="product_image"
  //         />
  //       </div>
  //       <div>
  //         <div>
  //           <h1>The Milk Bottle 2l</h1>
  //           <h2>HUSTLEMAD</h2>
  //           Available Colors
  //         </div>
  //       </div>
  //     </div>
  //   </Modal>
  // );
  // const products_content = products.map((product) => (
  //   <>
  //     <div key={product._id} className="product_card ">
  //       <div
  //         className="product_image_container p-4"
  //         onClick={() => setOpen(true)}
  //       >
  //         <ImageWrapper
  //           src={product.image}
  //           alt="img"
  //           className="product_image"
  //         />
  //       </div>
  //       <p className="font-mazzardSemiBold text-[10px] py-[0.5em] text-white company_title text-center bg-[#0F143A]">
  //         HUSTLEMAD
  //       </p>
  //       <div className="product_detail p-4 flex flex-col gap-1">
  //         <div className="flex justify-between gap-4">
  //           <div className="title_container w-[87%]">
  //             <h4 className="font-mazzardMedium product_title title_container ">
  //               {product.name}
  //             </h4>
  //           </div>
  //           <div
  //             className="add_cart flex w-[13%] cursor-pointer"
  //             onClick={() => handleadd(product)}
  //           >
  //             <ImageWrapper
  //               src={"/Images/categories/plus.webp"}
  //               className={"w-[24px] h-[24px] cursor-pointer"}
  //             />
  //           </div>
  //         </div>
  //         <h5 className={"font-mazzard"}>₹ {product.price}</h5>
  //       </div>
  //     </div>
  //   </>
  // ));
  const groupedProducts = allProducts.reduce((acc, product) => {
    if (!acc[product.categoryId]) {
      acc[product.categoryId] = [];
    }
    acc[product.categoryId].push(product);
    return acc;
  }, {});

  return (
    <>
      <div id="drinkware">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="font-recoleta text-[24px] ">Drinkware</h1>
            <h1 className="font-mazzard text-[36px] ">Fuel up!!</h1>
          </div>
          <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
            {Object.entries(groupedProducts)?.map(([category, categoryProducts]) => (
              <div key={category}>
                <h2>{category}</h2>
                <div className='productsWrapper flex flex-wrap'>
                  {categoryProducts.map((product) => (
                    <div key={product._id} className="product_card ">
                      <div
                        className="product_image_container p-4"
                        onClick={() => setOpen(true)}
                      >
                        <ImageWrapper
                          src={product.image[0]}
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
                              {product.name}
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
                        <h5 className={"font-mazzard"}>₹ {product.price[0].cost}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* {modalContainer} */}
      {/* <div id="apparels">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="font-recoleta text-[24px] ">Apparels</h1>
            <h1 className="font-mazzard text-[36px] ">Wear your Hustle!</h1>
          </div>
          <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
            {products_content}
          </div>
        </div>
      </div>
      <div id="drinkware">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="font-recoleta text-[24px] ">Drinkware</h1>
            <h1 className="font-mazzard text-[36px] ">Fuel up!!</h1>
          </div>
          <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
            {products_content}
          </div>
        </div>
      </div>
      <div id="stationary">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="font-recoleta text-[24px] ">Stationary</h1>
            <h1 className="font-mazzard text-[36px] ">
              Scribble . Sort . Slay
            </h1>
          </div>
          <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
            {products_content}
          </div>
        </div>
      </div>
      <div id="accessories">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="font-recoleta text-[24px] ">Stationary</h1>
            <h1 className="font-mazzard text-[36px] ">
              Scribble . Sort . Slay
            </h1>
          </div>
          <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
            {products_content}
          </div>
        </div>
      </div>
      <div id="games">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="font-recoleta text-[24px] ">Stationary</h1>
            <h1 className="font-mazzard text-[36px] ">
              Scribble . Sort . Slay
            </h1>
          </div>
          <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
            {products_content}
          </div>
        </div>
      </div>
      <div id="everything">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="font-recoleta text-[24px] ">everything</h1>
            <h1 className="font-mazzard text-[36px] ">
              Scribble . Sort . Slay
            </h1>
          </div>
          <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
            {products_content}
          </div>
        </div>
      </div>
      <div id="packaging">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="font-recoleta text-[24px] ">packaging</h1>
            <h1 className="font-mazzard text-[36px] ">
              Scribble . Sort . Slay
            </h1>
          </div>
          <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
            {products_content}
          </div>
        </div>
      </div>
      <div id="shipping">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="font-recoleta text-[24px] ">Stationary</h1>
            <h1 className="font-mazzard text-[36px] ">
              Scribble . Sort . Slay
            </h1>
          </div>
          <div className="productsWrapper w-[100%] m-auto cards items-center justify-center nxl:justify-start  py-10">
            {products_content}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AllProduct;
