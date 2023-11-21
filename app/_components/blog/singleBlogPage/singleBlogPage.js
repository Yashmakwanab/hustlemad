"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import BlogCard from "../blogCard";
import Link from "next/link";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";

const blogs = [
  {
    title: "Community Building & Events Collection.",
    tag: "Communities",
    image: "/Images/blog/blogImage.png",
    body: "Community building and event collections are important for any organization looking to establish a strong presence in their industry...",
    readtime: "2 min read",
    date: "Jan 31, 2023",
    link: "",
  },
  {
    title: "Community Building & Events Collection.",
    tag: "Communities",
    image: "/Images/blog/blogImage.png",
    body: "Community building and event collections are important for any organization looking to establish a strong presence in their industry...",
    readtime: "2 min read",
    date: "Jan 31, 2023",
    link: "",
  },
  {
    title: "Community Building & Events Collection.",
    tag: "Communities",
    image: "/Images/blog/blogImage.png",
    body: "Community building and event collections are important for any organization looking to establish a strong presence in their industry...",
    readtime: "2 min read",
    date: "Jan 31, 2023",
    link: "",
  },
];

const SingleBlogPage = () => {
  const path = useParams();
  const id = path.singleblog;
  const [singleBlogData, setSingleBlogData] = useState();

  const getSingleBlog = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setSingleBlogData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getSingleBlog();
  }, []);
  return (
    <>
      <div className="mt-[40px] sm:mt-[80px] mb-[40px] sm:mb-[80px] flex justify-center">
        <div className="w-[90%]  relative m:auto ">
          <ImageWrapper
            className="w-full h-[400px] xll:h-[480px] 3xl:h-[640px]"
            src="/Images/blog/blogImage.webp"
            alt="blog border"
          />

          <div className="bg-white absolute bottom-[120px] lg:bottom-[150px] w-[90%] xl:w-[80%] py-5 md:py-10 m-auto bottom_center rounded-[12px]">
            <h1 className="text-[22px] sm:text-[30px] mdl:text-[36px] xll:text-[48px] 4xl:text-[52px] px-5 text-center leading-10 text-[#0F143A] font-recoleta mb-4 md:mb-10">
              Rethinking UX - A loved-by-all Swag Collection!
            </h1>
            <div className="flex justify-center items-center">
              <p className="w-fit font-mazzardMedium text-[#286CD3] bg-[#EBF6FF] text-[12px] sm:text-[14px] 3xl:text-[20px] leading-[14px] sm:leading-[14px] 3xl:leading-[20px] mx-[18px] 3xl:mx-[22px] px-[14px] 3xl:px-[20px] py-[10px] sm:py-[14px] rounded-[24px]">
                Web3
              </p>
              <p className="text-[10px] sm:text-[12px] 3xl:text-[16px] leading-[15px] sm:leading-[18px] 3xl:leading-[24px] text-[#0F143A] font-mazzardMedium opacity-90">
                7 min. read
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1800px] m-auto p-5 sm:p-10 lg:p-20  flex flex-col gap-5 md:gap-10">
        <div>
          <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
            Introduction
          </h2>
          <ImageWrapper
            className="mb-4  w-[320px]"
            src="/Images/blog/productImage.png"
            alt="blog border"
          />
          <ul>
            <li>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                Hustlemad (www.hustlemad.com) is a website (the “Website”)
                operated by Hustlemad Brands Private Limited (Indian Private
                Limited Company) (the “Website Owner”). The Website Owner,
                including subsidiaries and affiliates (or &#34;we&#34; or &#34;us&#34; or &#34;our&#34;)
                provides the information contained on this Website or any of the
                pages comprising the Website to visitors (&#34;Visitors&#34;)
                (cumulatively referred to as &#34;you&#34; or &#34;your&#34; hereinafter)
                subject to the terms and conditions set out in these Website
                terms and conditions, the privacy policy and any other relevant
                terms and conditions, policies and notices which may be
                applicable to a specific section or module of this website.
                Please read this agreement carefully. By browsing, accessing or
                using this website or by using any facilities or services made
                available through it or by transacting through or on it, you are
                agreeing to the terms and conditions that appear below (all of
                which are called the &#34;Agreement&#34;). This Agreement is made
                between you and us.
              </article>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
            Website Availability
          </h2>

          <ul className="list-disc ml-5">
            <li>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                Hustlemad may suspend the Website for any reason whatsoever,
                including but not limited to repairs, planned maintenance or
                upgrades, and shall not be liable to you for any such
                suspension.
              </article>
            </li>
            <li>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                Hustlemad reserves the right to make any changes to the Website
                or to discontinue any aspect or feature of the Website without
                notice.
              </article>
            </li>
            <li>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                In the event that Hustlemad, in its sole discretion, considers
                that you are making any illegal and/or unauthorized use of the
                Website, and/or your use of the Website is in breach of these
                Terms, Hustlemad reserves the right to take any action that it
                deems necessary, including terminating without notice your use
                of the Website and, in the case of illegal use, instigating
                legal proceedings.
              </article>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
            Your Status
          </h2>

          <ul>
            <li>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                By placing an order to purchase Products (Order) through the
                Website, you warrant that:
              </article>
            </li>
          </ul>
          <ul className="list-disc ml-5">
            <li>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                You are legally capable of entering into binding contracts.
              </article>
            </li>
            <li>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                You are at least 18 years old.
              </article>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
            General
          </h2>

          <ul className="list-disc ml-5  flex flex-col gap-5">
            <li>
              <div>
                <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                  Entire Agreement
                </h2>
                <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                  These website terms and conditions constitute the sole record
                  of the agreement between you and the Website Owner in relation
                  to your use of the website. Neither you nor the Website Owner
                  shall be bound by any express tacit or implied representation,
                  warranty, promise or the like not recorded herein. Unless
                  otherwise specifically stated these website terms and
                  conditions supersede and replace all prior commitments,
                  undertakings or representations, whether written or oral,
                  between you and the Website Owner in respect of your use of
                  the website.
                </article>
              </div>
            </li>
            <ImageWrapper
              className="mb-4 w-[120px] sm:w-[320px]"
              src="/Images/blog/productImage.png"
              alt="blog border"
            />
            <li>
              <div>
                <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                  Alteration
                </h2>
                <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                  The Website Owner may at any time modify any relevant terms
                  and conditions, policies or notices. You acknowledge that by
                  visiting the website from time to time, you shall become bound
                  to the current version of the relevant terms and conditions
                  (the &#34;current version&#34;) and, unless stated in the
                  current version, all previous versions shall be superseded by
                  the current version. You shall be responsible for reviewing
                  the then current version each time you visit the website.
                </article>
              </div>
            </li>
            <li>
              <div>
                <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                  Comments or Questions
                </h2>
                <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                  If you have any questions, comments or concerns arising from
                  the website or any other relevant terms and conditions,
                  policies and notices contact us at{" "}
                  <a
                    className="text-[#0075C2] font-[700]"
                    href="mailto:info@hustlemad.com"
                  >
                    info@hustlemad.com
                  </a>
                  .
                </article>
              </div>
            </li>
          </ul>
        </div>
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
  );
};
export default SingleBlogPage;
