"use client";
import React, { useState } from "react";
import "./style.css";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const images = [
  {image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/fa7be2d9-6bfc-416f-44ee-d80533e43800/public",tagName: 'InMobi, The Product Folks',},
  {image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/bae23491-aac0-4b00-6ace-416a1bf0bb00/public",tagName: 'BVP',},
  {image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/28a35f0f-a224-4435-132d-599cbd770b00/public",tagName: 'Buildoor',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/c48b7b3b-bd91-408e-4db2-6fbc9bf49d00/public",tagName: 'Cruize',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b9bb89c8-453d-497e-8859-60708843c400/public",tagName: 'Urban Health',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/859f6acf-44a7-4982-39d7-e771edc3bd00/public",tagName: 'Arkam Ventures',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ba4ddaf3-5354-41c9-6799-bcb353102900/public",tagName: 'InMobi',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ff541446-9bcf-4099-c347-b1ad6556de00/public",tagName: 'Clarisights',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/aa3dfe17-0eaf-4c1f-695f-db2aa0e31800/public",tagName: 'Seek Rewards',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9445c4a9-c031-4920-f6f6-e460f0622700/public",tagName: 'Polygon, The Product House',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/522d2786-473a-471c-38de-cf852f03e600/public",tagName: 'Powerhouse',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/06ed8f02-3cf7-450e-c476-e6f7fae80700/public",tagName: 'Frontier',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/52c9cae1-6a43-4739-5e41-c5704088ae00/public",tagName: 'Agile Engine',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/49b378d5-f988-42c0-0aa5-2fa342f65a00/public",tagName: 'Deliveroo',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/135feca4-e25d-4617-11a0-1625dda27800/public",tagName: 'Berkowits',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/af1c2e27-11e8-435f-e4f6-ea10fb197b00/public",tagName: 'IIMB NSRCEL',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/3e6745a5-c1c4-4ed0-ea3e-dd1a3b0fbb00/public",tagName: 'The Product House',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/98c9aba7-0afc-46e0-f817-7d858ecc9d00/public",tagName: 'Agile Engine',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/7f8fec2e-8901-4a55-8d5b-de9f9ec78600/public",tagName: 'Cruize',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/243b9bb8-20bd-48fd-b960-d285285aa200/public",tagName: 'Apollo.io',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9e388636-f950-45d6-2b0c-aa46e1954200/public",tagName: 'Obvious',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/a9fc6588-cb50-42bb-3192-1fdf677d7b00/public",tagName: 'InMobi',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/87b60629-64f2-43f3-1d3f-5539fbc30600/public",tagName: 'Antler',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/4450589e-52fb-478c-12af-bef2efe58b00/public",tagName: 'Gumlet',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/34b714eb-1522-4336-5f34-ddddb18ed200/public",tagName: 'Bugbase',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/6b6d6691-701d-4853-763d-8b403c85f800/public",tagName: 'Ripen',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/381e2457-4f16-499d-c7e6-cda1c9e71d00/public",tagName: 'WebOasis',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/d6c1270b-9136-4e56-52f6-8b5998e82f00/public",tagName: 'Thousand Faces',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/aaaa1956-0b0d-493c-b582-26f6f9596200/public",tagName: 'Bobble Al, Excelencia',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/a1ad1e18-5ee3-4440-0057-dd7ffc316100/public",tagName: 'Gumlet',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/6ead317c-414b-4b38-26f0-3212d878e600/public",tagName: 'Primathon',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/1b089fef-08b0-49c3-0c73-535ba9d28e00/public",tagName: 'Groww',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/659b9737-0411-4435-cfd9-162247db1400/public",tagName: 'Polygon',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/70f2e802-2310-4792-1292-963082ccf700/public",tagName: 'InMobi',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ed48fced-fc05-4c62-61a8-c4aacd5f9f00/public",tagName: 'Agile Engine, Antler',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/e5c6dadc-4743-41c6-77a6-3bfda23dea00/public",tagName: 'Jar',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b36f1174-3289-48b5-1c40-fe337c179b00/public",tagName: 'BVP',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/50c25145-f27d-4b0a-bddc-6fe118538900/public",tagName: 'Signzy, Powerschool',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/68abe9cb-d2d7-44b9-aacd-a36e21798600/public",tagName: 'Excelencia',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/eafa8138-f017-4a25-55ff-27fbd7341300/public",tagName: 'Apollo.io',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/a89dc0bc-778f-4d0c-7e45-848a68535700/public",tagName: 'Revise Network, Urban Health',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/f0179d38-95c4-4900-11e3-ff9e99735100/public",tagName: 'First Cheque',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ac009788-6604-45c8-5edf-69fa7e356900/public",tagName: 'InMobi, Antler',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/c12455c8-1ddf-4933-f201-f4345aabbb00/public",tagName: 'Seek Rewards',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9fe94a16-4673-4fd8-95c7-53d2214f3700/public",tagName: 'Saas Insider, Antler',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/a6fc775e-832f-4ba1-922b-386ce7b86700/public",tagName: 'Polygon',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/e9d48036-d4e3-40c9-b080-f8f86e3fb400/public",tagName: 'RethinkingUX',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/d85d2f62-9a93-4c0e-7c27-160ccb5be200/public",tagName: 'dbvious, Bugbase, 10K Designe',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/bc998b0e-d92b-4709-a634-f98e81d8f000/public",tagName: 'The Product Folks',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/132a82d5-157f-4e64-befe-a20a19b1a600/public",tagName: 'Antler',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/66255b48-3600-4bcb-b0e3-bf65c0216c00/public",tagName: 'Spacekayak',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/121c176a-cfa3-43d0-303b-c86e585b6400/public",tagName: 'Nife',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b4360927-0ada-45d7-ef7f-da20944cbe00/public",tagName: 'Deliveroo',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/bbd67bf6-6abe-4fe7-b62a-159858eef500/public",tagName: 'Clarisights',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/8c248e17-122c-4bf8-ff29-8585a6987200/public",tagName: 'EasyEat, BX',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/4f7b3b74-4539-4895-95cb-4445ea0fbf00/public",tagName: 'Agile Engine',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/bde76fe8-027f-4210-8097-858675d53400/public",tagName: 'Realworld One',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/623cc2c3-1bf6-46dc-9a2a-f3c6ba67cd00/public",tagName: 'The Product Folks',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/e62ffb9a-64c5-45c3-00b1-c27c548a7d00/public",tagName: 'Upsurge, Creator Stack',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/f2ac6a43-7d09-4e5f-4e01-9ff75bae7a00/public",tagName: 'Zingbus',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/3db15e51-d408-4d54-4cef-4008ff598400/public",tagName: 'InMobi',},
  {image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/fa7be2d9-6bfc-416f-44ee-d80533e43800/public",tagName: 'InMobi, The Product Folks',},
  {image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/bae23491-aac0-4b00-6ace-416a1bf0bb00/public",tagName: 'BVP',},
  {image: "https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/28a35f0f-a224-4435-132d-599cbd770b00/public",tagName: 'Buildoor',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/c48b7b3b-bd91-408e-4db2-6fbc9bf49d00/public",tagName: 'Cruize',},
  {image:"https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b9bb89c8-453d-497e-8859-60708843c400/public",tagName: 'Urban Health',},
];

const ImageGrid = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImageIndex = (currentIndex) => (currentIndex + 1) % images.length;

  const imageGroups = [];
  for (let i = 0; i < images.length; i += 11) {
    imageGroups.push(images.slice(i, i + 11));
  }

  const imageDivs = imageGroups.map((group, groupIndex) => (
    <div
      className="parent max-w-[332px] sm:max-w-[590px] md:max-w-[728px] lg:max-w-[940px] xll:max-w-[1100px] 3xl:max-w-[1348px] gap-x-[4px] sm:gap-x-[10px] md:gap-x-[16px] lg:gap-x-[20px] gap-y-[4px] sm:gap-y-[10px] md:gap-y-[16px] lg:gap-y-[20px]"
      key={groupIndex}
    >
      {group.map((images, index) => {
        const imageIndex = (currentImageIndex + index) % images.length;
        const gridArea = `div${
          (index % 11) + 1
        } cursor-pointer group/item relative`;
        return (
          <div className={gridArea} key={index}>
            <ImageWrapper
              src={images?.image}
              alt={`Image ${imageIndex + 1}`}
            />
            <div className="absolute bottom-0 w-full h-full lg:h-auto group/edit invisible text-white text-[24px] bg-[#000000B2] lg:bg-[#000000B2] group-hover/item:visible flex justify-center lg:justify-start">
              <div className="font-mazzard px-[4px] lg:px-[16px] py-[5px] sm:py-[10px] lg:py-[14px] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xll:text-[24px] text-center lg:text-start flex items-end">
                {images?.tagName}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ));

  return (
    <div className="flex flex-col gap-[4px] sm:gap-[10px] md:gap-[16px] lg:gap-[20px] py-[30px] lg:py-[60px]">
      {imageDivs}
    </div>
  );
};

export default ImageGrid;