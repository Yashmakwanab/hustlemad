"use client";
import style from "./style.module.css";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
const data = [
  {
    image: "/Images/aboutPage/qualityBox.webp",
    title: "Quality",
    values:
      "Quality swag is a great culture enabler in a company. It not just delights your team but also inspires them to be #BetterEveryday. ",
  },
  {
    image: "/Images/aboutPage/costBox.webp",
    title: "Cost",
    values:
      "We save hundreds of your human hours that go in the mundanity of swag design, curation, procurement, storage & distribution. ",
  },
  {
    image: "/Images/aboutPage/deliveryBox.webp",
    title: "Delivery",
    values:
      "We are not a vendor, we are your partner in growth. We effectively manage end-to-end procurement operations to keep you lean. ",
  },
];

const OurCoreServices = () => {
  return (
    <div className="p-10 md:p-20 flex flex-col gap-10  xl:gap-20  items-center bg-[#FFF8E1] relative">
      <div>
        <h1 className="font-recoleta flex justify-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[700] leading-[32px] sm:leading-[54px] lg:leading-[65px] xl:leading-[70px] underline underline-offset-[11px] text-[#0F143A] mb-5  decoration-4">
          Our Core Values
        </h1>

        <p className="text-[14px] text-center sm:text-[20px] md:text-[24px] nxl:text-[28px] font-mazzardMedium text-[#0F143A] opacity-80 ">
          Our core values guide everything we do
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center sm:gap-20 nxl:flex-row">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-center gap-5 w-full sm:max-w-[90%] nxl:flex-col  ${
                index % 2 == 0 ? style.alternateFlex : ""
              }`}
            >
              <ImageWrapper
                width={300}
                height={300}
                className="w-[30%]  nxl:w-[70%] max-w-[240px]"
                alt="Image"
                src={data.image}
              />

              <div
                className={`flex  flex-col gap-2 items-end sm:gap-5 nxl:items-center nxl:min-h-[350px] ${
                  index % 2 == 0 ? style.alternateBox : ""
                }`}
              >
                <h2 className="text-[#702100]  font-mazzardSemiBold underline underline-offset-[5px] text-[20px] sm:text-[28px] md:text-[32px] nxl:text-[40px] ">
                  {data.title}
                </h2>
                <p
                  className={`text-right nxl:text-center text-[#702100] font-mazzard text-[14px] leading-6 sm:text-[20px] sm:leading-8 md:text-[24px] nxl:text-[28px]	md:leading-10 ${
                    index % 2 == 0 ? style.alternateFlex : ""
                  }`}
                >
                  {data.values}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 w-full z-[99]">
        <ImageWrapper
          src="/Images/landingPage/purpleBorder.webp"
          className="w-full absolute bottom-[-1px] md:top-[-4px] xl:top-[-8px]"
          alt="Green Border"
          width={2000}
          height={200}
        />
      </div>
    </div>
  );
};

export default OurCoreServices;
