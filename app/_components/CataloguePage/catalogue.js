"use client";
import Cartpage from "../cart/cart";
import AllProduct from "./components/allProducts";
import SideBarCatalogue from "./components/sidebar";
import "./style.css";
import React, { useState } from "react";

export default function CataloguePage() {
  const [selected, setSelected] = useState("Apparels");
  return (
    <>
      <div className="catalogue_container ">
        <div className="catalogue_container1 relative">
          <div className="nxl:fixed  nxl:border-r-2">
            <SideBarCatalogue selected={selected} setSelected={setSelected} />
          </div>
        </div>
        <div className="catalogue_container2 px-8">
          <AllProduct selected={selected} setSelected={setSelected} />
        </div>
        <div className="catalogue_container3 relative">
          <Cartpage />
          <div className="swag_pack_button fixed nxl:hidden right-0">
            <p>Expand Swag Pack</p>
          </div>
        </div>
      </div>
    </>
  );
}
