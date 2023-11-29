"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import BlogCard from "../blogCard";
import Link from "next/link";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Spinner from "../../Spinner/Spinner";

const SingleBlogPage = () => {
  const { singleblog } = useParams();
  console.log(singleblog);

  const [singleBlogData, setSingleBlogData] = useState();

  const getSingleBlog = async () => {
    try {
      console.log("hello");
      const response = await axios.get(
        `http://192.168.0.115:4000/blog/details/${singleblog}`
      );
      setSingleBlogData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const [blogs, setBlogs] = useState();

  const getBlogs = async () => {
    try {
      const response = await axios.get("http://192.168.0.115:4000/blog");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBlogs();
    getSingleBlog();
  }, []);
  console.log(singleBlogData);
  return (
    <>
      {singleBlogData ? (
        <>
          <div className="mt-[40px] sm:mt-[80px] mb-[40px] sm:mb-[80px] flex justify-center">
            <div className="w-[90%]  relative m:auto ">
              <ImageWrapper
                className="w-full h-[400px] xll:h-[480px] 3xl:h-[640px]"
                src={singleBlogData.thumbnail}
                alt="blog border"
              />

              <div className="bg-white absolute bottom-[120px] lg:bottom-[150px] w-[90%] xl:w-[80%] py-5 md:py-10 m-auto bottom_center rounded-[12px]">
                <h1 className="text-[22px] sm:text-[30px] mdl:text-[36px] xll:text-[48px] 4xl:text-[52px] px-5 text-center leading-10 text-[#0F143A] font-recoleta mb-4 md:mb-10">
                  {singleBlogData.title}
                </h1>
                <div className="flex justify-center items-center">
                  <p className="w-fit font-mazzardMedium text-[#286CD3] bg-[#EBF6FF] text-[12px] sm:text-[14px] 3xl:text-[20px] leading-[14px] sm:leading-[14px] 3xl:leading-[20px] mx-[18px] 3xl:mx-[22px] px-[14px] 3xl:px-[20px] py-[10px] sm:py-[14px] rounded-[24px]">
                    {singleBlogData.cat}
                  </p>
                  <p className="text-[10px] sm:text-[12px] 3xl:text-[16px] leading-[15px] sm:leading-[18px] 3xl:leading-[24px] text-[#0F143A] font-mazzardMedium opacity-90">
                    {singleBlogData.read} min. read
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1800px] m-auto p-5 sm:p-10 lg:p-20  flex flex-col gap-5 md:gap-10">
            {singleBlogData?.article.map((item) => {
              console.log(item);
              return (
                <div>
                  <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
                    {item.title}
                  </h2>
                  {item.image ? (
                    <ImageWrapper
                      className="mb-4  w-[320px]"
                      src={item.image}
                      alt="blog border"
                    />
                  ) : (
                    <></>
                  )}

                  <ul className="list-disc ml-5">
                    {item.bulletPoints?.map((point) => {
                      return (
                        <li>
                          <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                            {point}
                          </article>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-[25px]">
            <div className="text-[22px] sm:text-[40px] 3xl:text-[48px] leading-[25px] sm:leading-[46px] 3xl:leading-[55px] text-[#0F143A] font-recoleta mb-[32px] sm:mb-[48px] mdl:mb-[52px] underline underline-offset-[7px] flex justify-center">
              More Blogs
            </div>
            <BlogCard blogs={blogs && blogs} />
            <div className="flex justify-center mt-[64px]">
              <Link
                href="/blog"
                className="w-fit font-mazzardMedium text-[#0F143A] bg-[#F0F0F0] text-[20px] leading-[20px] px-[20px] py-[14px] rounded-[24px]"
              >
                View all Blogs
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default SingleBlogPage;
