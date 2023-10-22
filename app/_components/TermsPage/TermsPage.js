"use client";
import "./style.css";
import React, { useRef, useState } from "react";
// Import Swiper React components

export default function TermsPage() {
  return (
    <div className=" p-5 sm:p-10 lg:p-20  flex flex-col gap-5 md:gap-10">
      <h1 className="font-recoleta  terms_title  flex justify-start text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[700] leading-[54px] text-[#0F143A]  decoration-4">
        Terms of Use
      </h1>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Introduction
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          Hustlemad (www.hustlemad.com) is a website (the “Website”) operated by
          Hustlemad Brands Private Limited (Indian Private Limited Company) (the
          “Website Owner”). The Website Owner, including subsidiaries and
          affiliates (or "we" or "us" or "our") provides the information
          contained on this Website or any of the pages comprising the Website
          to visitors ("Visitors") (cumulatively referred to as "you" or "your"
          hereinafter) subject to the terms and conditions set out in these
          Website terms and conditions, the privacy policy and any other
          relevant terms and conditions, policies and notices which may be
          applicable to a specific section or module of this website. Please
          read this agreement carefully. By browsing, accessing or using this
          website or by using any facilities or services made available through
          it or by transacting through or on it, you are agreeing to the terms
          and conditions that appear below (all of which are called the
          "Agreement"). This Agreement is made between you and us.
        </article>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Website Availability
        </h2>
        <ul className="list-disc ml-5">
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              Hustlemad may suspend the Website for any reason whatsoever,
              including but not limited to repairs, planned maintenance or
              upgrades, and shall not be liable to you for any such suspension.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              Hustlemad reserves the right to make any changes to the Website or
              to discontinue any aspect or feature of the Website without
              notice.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              In the event that Hustlemad, in its sole discretion, considers
              that you are making any illegal and/or unauthorized use of the
              Website, and/or your use of the Website is in breach of these
              Terms, Hustlemad reserves the right to take any action that it
              deems necessary, including terminating without notice your use of
              the Website and, in the case of illegal use, instigating legal
              proceedings.
            </article>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Your Status
        </h2>
        <p>
          By placing an order to purchase Products (Order) through the Website,
          you warrant that:
        </p>
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
          The Contract Between You and The Partner
        </h2>

        <ul className="list-disc ml-5">
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              After placing an Order, you will receive an email from Hustlemad
              acknowledging that Hustlemad has received your order. Please note
              that this does not mean that your Order has been accepted. Your
              Order constitutes an offer to Hustlemad to buy a Product from the
              third party that offers the Product for sale via the Website (the
              Partner). All orders are subject to acceptance by the Partner, and
              the Partner will confirm such acceptance to you by sending you an
              email that confirms that the Product has been dispatched (the
              Dispatch Confirmation). The contract between the Partner and you
              (Contract) will only be formed when the relevant Partner sends you
              the Dispatch Confirmation.
            </article>
          </li>

          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              Each Contract relates only to those Products whose dispatch the
              Partner has confirmed in the Dispatch Confirmation. The Partner
              shall not be obliged to supply any other Products which may have
              been part of your Order until the dispatch of such Products has
              been confirmed by way of a Dispatch Confirmation.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              For the avoidance of doubt, your contract with Hustlemad relates
              only to your use of the Website and the Services available
              therein.
            </article>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Credit Card Payment
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          In a credit card transaction, you must use your own credit card. We
          will not be liable for any credit card fraud. The liability to use a
          card fraudulently will be on the user and the onus to 'prove
          otherwise' shall be exclusively on the user.
        </article>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Trademarks
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          The trademarks, names, logos and service marks (collectively
          "trademarks") displayed on this website are registered and
          unregistered trademarks of the Website Owner and the suppliers of the
          products listed on the Website. Nothing contained on this website
          should be construed as granting any license or right to use any
          trademark without the prior written permission of the Website Owner.
        </article>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          External Links
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          External links may be provided for your convenience, but they are
          beyond the control of the Website Owner and no representation is made
          as to their content. Use or reliance on any external links and the
          content thereon provided is at your own risk. When visiting external
          links you must refer to the external websites terms and conditions of
          use. No hypertext links shall be created from any website controlled
          by you or otherwise to this website without the express prior written
          permission of the Website Owner. Please contact us at
          info@hustlemad.com if you would like to link to this website or would
          like to request a link to your website.
        </article>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Specific Use
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          You further agree not to use the website to send or post any message
          or material that is unlawful, harassing, defamatory, abusive,
          indecent, threatening, harmful, vulgar, obscene, sexually orientated,
          racially offensive, profane, pornographic or violates any applicable
          law and you hereby INDEMNIFY the Website Owner against any loss,
          liability, damage or expense of whatever nature which the Website
          Owner or any third party may suffer which is caused by or attributable
          to, whether directly or indirectly, your use of the website to send or
          post any such message or material.
        </article>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Hustlemad Refund Policy
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          Products returned by you because of a defect will be refunded in full,
          including a standard delivery cost incurred by you in returning the
          item to us. Hustlemad will not refund opened or used products. All
          refunds will be initiated through a Bank NEFT/RTGS transfer.
        </article>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Disclaimer of Liability
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          The Website Owner shall not be responsible for and DISCLAIMS all
          liability for any loss, liability, damage (whether direct, indirect or
          consequential), personal injury or expense of any nature whatsoever
          which may be suffered by you or any third party (including your
          company), as a result of or which may be attributable, directly or
          indirectly, to your access and use of the website, any information
          contained on the website, your or your company's personal information
          or material and information transmitted over our system. In
          PARTICULAR, neither the Website Owner nor any third party or data or
          content provider shall be liable in any way to you or to any other
          person, firm or corporation whatsoever for any loss, liability, damage
          (whether direct or consequential), personal injury or expense of any
          nature whatsoever arising from any delays, inaccuracies, errors in, or
          omission of any share price information or the transmission thereof,
          or for any actions taken in reliance thereon or occasioned thereby or
          by reason of non-performance or interruption, or termination thereof.
        </article>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          User of the Website
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          The Website Owner does not make any warranty or representation that
          information on the website is appropriate for use in any jurisdiction
          (other than India). By accessing the website, you warrant and
          represent to the Website Owner that you are legally entitled to do so
          and to make use of information made available via the website.
        </article>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          No Commercial Use
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          This Website is for your personal, non-commercial use only. You may
          not modify, copy, distribute, transmit, display, perform, reproduce,
          publish, license, commercially exploit, create derivative works from,
          transfer, or sell any content, software, products, or services
          contained within this site. You may not use this site, or any of its
          content, to further any commercial purpose, including any advertising
          or advertising revenue generation activity on your own site.
        </article>
      </div>
      <div>
        <h2 className="terms_subTitle font-mazzard flex justify-start text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Visitor Registration
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          Visitors will need to register with the Website in order to use some
          of the services or features made available on this Website. When you
          register, you are required to provide information about yourself that
          is true, accurate, current and complete in all respects. Should any of
          your registration information change, please notify us immediately
          either using the Website’s automated service, or via email at
          info@hustlemad.com. We may change registration requirements from time
          to time.
        </article>
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
                These website terms and conditions constitute the sole record of
                the agreement between you and the Website Owner in relation to
                your use of the website. Neither you nor the Website Owner shall
                be bound by any express tacit or implied representation,
                warranty, promise or the like not recorded herein. Unless
                otherwise specifically stated these website terms and conditions
                supersede and replace all prior commitments, undertakings or
                representations, whether written or oral, between you and the
                Website Owner in respect of your use of the website.
              </article>
            </div>
          </li>
          <li>
            <div>
              <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                Alteration
              </h2>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                The Website Owner may at any time modify any relevant terms and
                conditions, policies or notices. You acknowledge that by
                visiting the website from time to time, you shall become bound
                to the current version of the relevant terms and conditions (the
                "current version") and, unless stated in the current version,
                all previous versions shall be superseded by the current
                version. You shall be responsible for reviewing the then current
                version each time you visit the website.
              </article>
            </div>
          </li>
          <li>
            <div>
              <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                Conflict
              </h2>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                Where any conflict or contradiction appears between the
                provisions of these website terms and conditions and any other
                relevant terms and conditions, policies or notices, the other
                relevant terms and conditions, policies or notices which relate
                specifically to a particular section or module of the website
                shall prevail in respect of your use of the relevant section or
                module of the website.
              </article>
            </div>
          </li>
          <li>
            <div>
              <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                Waiver
              </h2>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                No indulgence or extension of time which either you or the
                Website Owner may grant to the other will constitute a waiver of
                or, whether by estoppel or otherwise, limit any of the existing
                or future rights of the grantor in terms hereof, save in the
                event or to the extent that the grantor has signed a written
                document expressly waiving or limiting such rights.
              </article>
            </div>
          </li>
          <li>
            <div>
              <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                Cession
              </h2>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                The Website Owner shall be entitled to cede, assign and delegate
                all or any of its rights and obligations in terms of any
                relevant terms and conditions, policies and notices to any third
                party.
              </article>
            </div>
          </li>
          <li>
            <div>
              <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                Severability
              </h2>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                All provisions of any relevant terms and conditions, policies
                and notices are, notwithstanding the manner in which they have
                been grouped together or linked grammatically, severable from
                each other. Any provision of any relevant terms and conditions,
                policies and notices, which is or becomes unenforceable in any
                jurisdiction, whether due to voidness, invalidity, illegality,
                unlawfulness or for any reason whatever, shall, in such
                jurisdiction only and only to the extent that it is so
                unenforceable, be treated as pro non scripto and the remaining
                provisions of any relevant terms and conditions, policies and
                notices shall remain in full force and effect.
              </article>
            </div>
          </li>
          <li>
            <div>
              <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                Applicable
              </h2>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                Any relevant terms and conditions, policies and notices shall be
                governed by and construed in accordance with the laws of India
                without giving effect to any principles of conflict of law. You
                hereby consent to the exclusive jurisdiction of the courts of
                India in respect of any disputes arising in connection with the
                website, or any relevant terms and conditions, policies and
                notices or any matter related to or in connection therewith.
              </article>
            </div>
          </li>
          <li>
            <div>
              <h2 className="terms_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                Comments or Questions
              </h2>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                If you have any questions, comments or concerns arising from the
                website or any other relevant terms and conditions, policies and
                notices contact us at{" "}
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
  );
}
