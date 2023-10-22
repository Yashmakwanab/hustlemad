"use client";
import React from "react";
import logo from "./../../../public/Images/landingPage/Hustlemad_logo.svg";
import style from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
export default function Footer() {
  return (
    <div className="relative max-w-[1400px] m-auto">
      <div className={style.footer_section}>
        <section className={style.footer_middle}>
          <div className={style.hustlemad_logo_container}>
            <Image
              src={logo}
              className={style.hustlemad_logo}
              alt="Hustlemad Logo"
            />
            <p className="text-center md:text-left">Based in Bengaluru ❤️</p>
          </div>

          <div className={`${style.link_container}  `}>
            <div className={style.links}>
              <div className={style.footer_links_header}>Company</div>
              <Link
                className={`${style.footer_social_link} text-reset`}
                href="/catalogue"
              >
                Catalogue
              </Link>
              <p>
                <a className={`${style.footer_social_link} text-reset`}>
                  Blogs
                </a>
              </p>
              <Link
                className={`${style.footer_social_link} text-reset`}
                href="/about"
              >
                About Us
              </Link>
              <Link
                className={`${style.footer_social_link} text-reset`}
                href="/faq"
              >
                FAQs
              </Link>
            </div>
            <div className={style.footer_last}>
              <div className={style.links}>
                <div className={style.footer_links_header}>Contact</div>
                <p>
                  <a className={`${style.footer_social_link} text-reset`}>
                    Schedule a Call
                  </a>
                </p>
                <Link
                  className={`${style.footer_social_link} text-reset`}
                  href="/partner"
                >
                  Be our Partner
                </Link>

                <p>
                  <a className={`${style.footer_social_link} text-reset`}>
                    Contact Us
                  </a>
                </p>
              </div>
              <div className={style.links}>
                <div className={style.footer_links_header}>Legal</div>

                <Link
                  className={`${style.footer_social_link} text-reset`}
                  href="/policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className={`${style.footer_social_link} text-reset`}
                  href="/terms"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full mt-2">
          <div className="flex justify-between px-[12px] font-mazzard text-[#0F143A] border-t-[2px] py-[18px]">
            <div className="flex w-full">
              <p className="ml-[12px]  text-[14px] font-mazzardMedium">
                Follow along on our Journey!
              </p>
            </div>
            <div className="flex">
              <a
                href="https://twitter.com/hustlemad_"
                target="_blank"
                className="mr-[6px]"
              >
                <ImageWrapper
                  src="/Images/landingPage/twitter.svg"
                  alt="Twitter Logo"
                  className="w-[22px] h-[22px]"
                />
              </a>
              <a href="https://www.instagram.com/hustlemad/" target="_blank">
                <ImageWrapper
                  src="/Images/landingPage/instagram.svg"
                  alt="Instagram Logo"
                  className="w-[22px] h-[22px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
