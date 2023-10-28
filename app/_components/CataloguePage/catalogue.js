"use client";
import AllProduct from "./components/allProducts";
import SideBarCatalogue from "./components/sidebar";
import "./style.css";
import React, { useState } from "react";

export default function CataloguePage() {
  const [selected, setSelected] = useState("Apparels");
  return (
    <div className="catalogue_container relative">
      <div className="catalogue_container1 fixed">
        <SideBarCatalogue selected={selected} setSelected={setSelected} />
      </div>
      <div className="catalogue_container2 py-8">
        <AllProduct selected={selected} setSelected={setSelected} />
      </div>
      <div className="catalogue_container3 fixed bg-[#ff0] w-[100x] flex h-[100vh] items-center justify-center">
        cart
      </div>
    </div>
  );
}
