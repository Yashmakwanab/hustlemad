"use client"
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import BlogCard from "../blogCard";
import Link from "next/link";

const blogs = [
    {
        title: "Community Building & Events Collection.",
        tag: "Communities",
        image: "/Images/blog/blogImage.png",
        body: "Community building and event collections are important for any organization looking to establish a strong presence in their industry...",
        readtime: "2 min read",
        date: "Jan 31, 2023",
        link: ""
    },
    {
        title: "Community Building & Events Collection.",
        tag: "Communities",
        image: "/Images/blog/blogImage.png",
        body: "Community building and event collections are important for any organization looking to establish a strong presence in their industry...",
        readtime: "2 min read",
        date: "Jan 31, 2023",
        link: ""
    },
    {
        title: "Community Building & Events Collection.",
        tag: "Communities",
        image: "/Images/blog/blogImage.png",
        body: "Community building and event collections are important for any organization looking to establish a strong presence in their industry...",
        readtime: "2 min read",
        date: "Jan 31, 2023",
        link: ""
    },

]

const SingleBlogPage = () => {
    const path = useParams()
    const id = path.singleblog
    const [singleBlogData, setSingleBlogData] = useState();

    const getSingleBlog = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setSingleBlogData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getSingleBlog();
    }, []);
    return (
        <>
            <div className="flex justify-center mt-[64px]">
                <div className="max-w-[1320px] bg-white py-[40px] px-[52px] rounded-[24px] border">
                    <h1 className="text-[45px] leading-[70px] text-[#0F143A] font-recoleta mb-[40px]">{singleBlogData?.title}</h1>
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
            <div className="mt-[25px]">

                <div className="text-[22px] sm:text-[40px] 3xl:text-[48px] leading-[25px] sm:leading-[46px] 3xl:leading-[55px] text-[#0F143A] font-recoleta mb-[32px] sm:mb-[48px] mdl:mb-[52px] underline underline-offset-[7px] flex justify-center">More Blogs</div>
                <BlogCard blogs={blogs && blogs} />
                <div className="flex justify-center mt-[64px]">

                <Link href="/blog" className="w-fit font-mazzardMedium text-[#0F143A] bg-[#F0F0F0] text-[20px] leading-[20px] px-[20px] py-[14px] rounded-[24px]">
                    View all Blogs
                </Link>
                </div>
            </div>
        </>
    );
};
export default SingleBlogPage;
