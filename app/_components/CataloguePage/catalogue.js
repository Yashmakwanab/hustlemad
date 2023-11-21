"use client";
import { useDispatch, useSelector } from "react-redux";
import Cartpage from "../cart/cart";
import AllProduct from "./components/allProducts";
import SideBarCatalogue from "./components/sidebar";
import "./style.css";
import React, { useEffect, useState } from "react";
import {
  selectAllProductList,
  setAllProductList,
} from "@/app/redux/slice/globleSlice";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

export default function CataloguePage() {
  const dispatch = useDispatch();
  const getproducts = async () => {
    try {
      const response = await axios.get(
        "https://hustlemad-backend.herokuapp.com/productList"
      );
      dispatch(setAllProductList(response.data.products));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const allProducts = useSelector(selectAllProductList);
  useEffect(() => {
    getproducts();
  }, []);
  const [selected, setSelected] = useState("Apparels");
  return (
    <>
      {allProducts.length == 0 ? (
        <Spinner />
      ) : (
        <div className="catalogue_container ">
          <div className="catalogue_container1">
            <div className="nxl:fixed nxl:shadow-md">
              <SideBarCatalogue selected={selected} setSelected={setSelected} />
            </div>
          </div>
          <div className="catalogue_container2">
            <AllProduct selected={selected} setSelected={setSelected} />
          </div>
          <Cartpage className="catalogue_container3" />
        </div>
      )}
    </>
  );
}
