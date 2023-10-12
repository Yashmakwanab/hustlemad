"use client";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import logo from "./../../../public/Images/landingPage/Hustlemad_logo.svg";
import style from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full">
        <img src="/Images/landingPage/footerBorder.svg" className="w-full absolute top-[-2px] md:top-[-8px] xl:top-[-12px]" />
      </div>

      <div className={style.footer_section}>
        <section className={style.footer_middle}>
          <div className={style.hustlemad_logo_container}>
            <Image src={logo} className={style.hustlemad_logo} />
            <p>Based in Bengaluru ❤️</p>
          </div>

          <div className={style.link_container}>
            <div className={style.links}>
              <h6 className={style.footer_links_header}>Company</h6>
              <p>
                <a className={`${style.footer_social_link} text-reset`}>Catalogue</a>
              </p>
              <p>
                <a className={`${style.footer_social_link} text-reset`}>Blogs</a>
              </p>
              <p>
                <a className={`${style.footer_social_link} text-reset`}>About Us</a>
              </p>
              <p>
                <a className={`${style.footer_social_link} text-reset`}>FAQs</a>
              </p>
            </div>
            <div className={style.footer_last}>
              <div className={style.links}>
                <h6 className={style.footer_links_header}>Contact</h6>
                <p>
                  <a className={`${style.footer_social_link} text-reset`}>Schedule a Call</a>
                </p>
                <p>
                  <a className={`${style.footer_social_link} text-reset`}>Be our Partner</a>
                </p>
                <p>
                  <a className={`${style.footer_social_link} text-reset`}>Contact Us</a>
                </p>

              </div>
              <div className={style.links}>
                <h6 className={style.footer_links_header}>Legal</h6>
                <p>
                  <a className={`${style.footer_social_link} text-reset`}>Privacy Policy</a>
                </p>
                <p>
                  <a className={`${style.footer_social_link} text-reset`}>Terms of Use</a>
                </p>
              </div>
            </div>


          </div>
        </section>

        <div className={style.footer_footer}>Follow along on our Journey!</div>
      </div>
    </div>
  );
}
