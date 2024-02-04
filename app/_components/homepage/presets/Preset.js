"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Card from "./Card";

export default function Preset() {
  const presetData = [
    {
      name: "Essential Pack",
      content:
        "Hustlemad Crew Neck T-shirt, Borosil Insulated Bottle, Insulated Coffee Mug, Notebook A5, Parker Pen, Premium Custom Box",
      price: "2675",
      cut_price: "2499",
      image_url:
        "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/cd9fae32-19ee-4049-4fee-44de85517d00/public",
      product_list: [
        "62d9a4a188bbf0df799fdfcd",
        "62d9a4a188bbf0df799fdfdc",
        "62d9a4a188bbf0df799fdfe2",
        "62d9a4a288bbf0df799fe039",
        "62d9a4a288bbf0df799fe021",
        "62e398ce1e53d25b9ee56b68",
      ],
    },
    {
      name: "Delight Pack",
      content:
        "Hustlemad Crew Neck T-shirt, Running Cap, Notebook A5, Paperkraft Pen, TheWholeTruth Bars, Drawstring Bag",
      price: "1825",
      cut_price: "1750",
      image_url:
        "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ed192709-72df-4d6a-fafe-656fbf378000/public",
      product_list: [
        "62d9a4a188bbf0df799fdfcd",
        "62d9a4a188bbf0df799fdfd3",
        "62d9a4a288bbf0df799fe039",
        "62d9a4a288bbf0df799fe030",
        "62d9a4a288bbf0df799fe054",
      ],
    },
    {
      name: "Event Elevate Bag",
      content:
        "Cap, Hoodie, Laptop Sticker Sheet, Playing Cards, Bon-fiction Chocolates, Premium Tote Bag",
      price: "2795",
      cut_price: "2650",
      image_url:
        "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9b7bf677-0623-402f-34a2-9b416ab49900/public",
      product_list: [
        "62d9a4a188bbf0df799fdfc7",
        "62d9a4a188bbf0df799fdfd3",
        "62d9a4a288bbf0df799fe027",
        "62d9a4a288bbf0df799fe051",
      ],
    },
    {
      name: "Crypto Crate",
      content:
        "Rare Rabbit Zipper Jacket, Glass Bottle, JBL Headphone, Laptop Sticker Sheet, Custom Mailer Box",
      price: "5020",
      cut_price: "4800",
      image_url:
        "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/6001d4f1-d597-40c7-1728-3f5cef876d00/public",
      product_list: [
        "62e398cd1e53d25b9ee56b0e",
        "62d9a4a288bbf0df799fe027",
        "62d9a4a288bbf0df799fe051",
        "62d9a4a288bbf0df799fe00c",
      ],
    },
    {
      name: "Token Treat",
      content:
        "JBL Speakers, Laptop Sleeve, Pop Socket, Ceramic Coffee Mug, Greeting Card, Premium Custom Box",
      price: "4229",
      cut_price: "3999",
      image_url:
        "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/6f838796-e0a9-4d9e-0ff5-53550e562d00/public",
      product_list: [
        "62d9a4a288bbf0df799fe048",
        "62d9a4a288bbf0df799fe07e",
        "62e398ce1e53d25b9ee56b17",
        "62e398ce1e53d25b9ee56b68",
      ],
    },
    {
      name: "Tech Tribe Treasure",
      content:
        "Backpack, Cable Organiser, boAt Rockerz 450, Artiart Ostrich Travel Tumbler, Laptop Sticker Sheet, Luggage Tag",
      price: "5205",
      cut_price: "4999",
      image_url:
        "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/1f15b629-8258-4da8-4b28-90ef9ba2ca00/public",
      product_list: [
        "62d9a4a288bbf0df799fe045",
        "62d9a4a288bbf0df799fe04b",
        "62d9a4a288bbf0df799fe027",
        "62d9a4a288bbf0df799fe081",
      ],
    },
    {
      name: "Giveaway Gem",
      content:
        "Bon-fiction Chocolates, Glass Bottle, Luggage Tags, Sleepy Owl Tea, Pin Badges, Custom Mailer Box",
      price: "1105",
      cut_price: "999",
      image_url:
        "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/bf07da71-b0ac-44a6-afb8-fcfeb77f9500/public",
      product_list: [
        "62d9a4a288bbf0df799fe00f",
        "62e398ce1e53d25b9ee56b32",
        "62d9a4a288bbf0df799fe081",
        "62d9a4a288bbf0df799fe00c",
      ],
    },
    {
      name: "Bond Box",
      content:
        "Playing Cards, Scented Candle, Zipper Hoodie, Artiart Zebra Travel Tumbler, Book, Premium Custom Box",
      price: "3700",
      cut_price: "3500",
      image_url:
        "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/24315064-b545-4b8f-7b9d-afc67aceb000/public",
      product_list: [
        "62d9a4a288bbf0df799fdff4",
        "62d9a4a288bbf0df799fe024",
        "62d9a4a188bbf0df799fdfc7",
        "62d9a4a288bbf0df799fe039",
        "62e398ce1e53d25b9ee56b68",
      ],
    },
  ];
  return (
    <div className="py-10 px-5 sm:px-10 md:px-20 lg:px-0 bg-[#CEF6FF] select-none	">
      <h2 className="font-recoleta text-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
        Preset Packs
      </h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        centeredSlides={false}
        loop={true}
        freeMode={true}
        navigation={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1180: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4.5,
            spaceBetween: 40,
          },
          1800: {
            slidesPerView: 5.5,
            spaceBetween: 40,
          },
          2300: {
            slidesPerView: 7.5,
            spaceBetween: 40,
          },
          2600: {
            slidesPerView: 8.5,
            spaceBetween: 40,
          },
          3000: {
            slidesPerView: 9.5,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        className="preset_swiper"
      >
        {presetData.map((preset, index) => {
          return (
            <SwiperSlide key={index}>
              <Card
                preset_name={preset.name}
                content={preset.content}
                image_url={preset.image_url}
                cut_price={preset.cut_price}
                price={preset.price}
                product_list={preset.product_list}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
