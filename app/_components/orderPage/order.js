"use client";
import Cartpage from "../cart/cart";
import React, { useState } from "react";

export default function OrderPage() {
  return (
    <div className="relative">
      <div className="fixed w-[300x] flex h-[100vh] items-center justify-center">
        <Cartpage/>
      </div>
    </div>
  );
}
