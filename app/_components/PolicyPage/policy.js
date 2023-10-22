"use client";
import "./style.css";
import React, { useRef, useState } from "react";
// Import Swiper React components

export default function PolicyPage() {
  return (
    <div className=" p-5 sm:p-10 lg:p-20  flex flex-col gap-5 md:gap-10">
      <h1 className="font-recoleta policy_title  flex justify-start text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[700] leading-[54px] text-[#0F143A] ">
        Privacy Policy
      </h1>
      <div>
        <article className=" font-mazzardSemiBold leading-[26px] sm:leading-[32px] md:leading-[36px] nxl:leading-[40px] text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px]  text-justify text-[#0F143A] ">
          We value the trust you place in us. That&#39;s why we insist upon the
          highest standards for secure transactions and customer information
          privacy. Please read the following statement to learn about our
          information gathering and dissemination practices.
        </article>
      </div>

      <div>
        <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Note
        </h2>
        <ul className="list-disc ml-5">
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              Our privacy policy is subject to change at any time without
              notice. To make sure you are aware of any changes, please review
              this policy periodically.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              By visiting this Website, you agree to be bound by the terms and
              conditions of this Privacy Policy. If you do not agree, please do
              not use or access our Website.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              By mere use of the Website, you specifically consent to our use
              and disclosure of your personal information in accordance with
              this Privacy Policy. This Privacy Policy is incorporated into and
              subject to the Terms of Use.
            </article>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Collection of Personally Identifiable Information and Other
          Information
        </h2>

        <ul className="flex flex-col gap-[2em]">
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              When you use our Website, we collect and store your personal
              information which is provided by you from time to time. Our
              primary goal in doing so is to provide you a safe, efficient,
              smooth and customized experience. This allows us to provide
              services and features that most likely meet your needs, and to
              customize our Website to make your experience safer and easier.
              More importantly, while doing so we collect personal information
              from you that we consider necessary for achieving this purpose.
            </article>
          </li>

          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              In general, you can browse the Website without telling us who you
              are or revealing any personal information about yourself. Once you
              give us your personal information, you are not anonymous to us.
              Where possible, we indicate which fields are required and which
              fields are optional. You always have the option to not provide
              information by choosing not to use a particular service or feature
              on the Website. We may automatically track certain information
              about you based upon your behaviour on our Website. We use this
              information to do internal research on our users&#39; demographics,
              interests, and behaviour to better understand, protect and serve
              our users. This information is compiled and analysed on an
              aggregated basis. This information may include the URL that you
              just came from (whether this URL is on our Website or not), which
              URL you next go to (whether this URL is on our Website or not),
              your computer browser information, and your IP address.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              We use data collection devices such as &#34;cookies&#34; on certain pages
              of the Website to help analyse our web page flow, measure
              promotional effectiveness, and promote trust and safety. &#34;Cookies&#34;
              are small files placed on your hard drive that assist us in
              providing our services. We offer certain features that are only
              available through the use of a &#34;cookie&#34;. We also use cookies to
              allow you to enter your password less frequently during a session.
              Cookies can also help us provide information that is targeted to
              your interests. Most cookies are &#34;session cookies,&#34; meaning that
              they are automatically deleted from your hard drive at the end of
              a session. You are always free to decline our cookies if your
              browser permits, although in that case you may not be able to use
              certain features on the Website and you may be required to
              re-enter your password more frequently during a session.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              Additionally, you may encounter &#34;cookies&#34; or other similar devices
              on certain pages of the Website that are placed by third parties.
              We do not control the use of cookies by third parties.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              If you choose to buy on the Website, we collect information about
              your buying behaviour.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              If you transact with us, we collect some additional information,
              such as a billing address, a credit / debit card number and a
              credit / debit card expiration date and/ or other payment
              instrument details and tracking information from cheques or money
              orders.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              If you choose to post messages on our message boards, chat rooms
              or other message areas or leave feedback, we will collect that
              information you provide to us. We retain this information as
              necessary to resolve disputes, provide customer support and
              troubleshoot problems as permitted by law.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              If you send us personal correspondence, such as emails or letters,
              or if other users or third parties send us correspondence about
              your activities or postings on the Website, we may collect such
              information into a file specific to you.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              We collect personally identifiable information (email address,
              name, phone number, credit card / debit card / other payment
              instrument details, etc.) from you when you set up a free account
              with us. While you can browse some sections of our Website without
              being a registered member, certain activities (such as placing an
              order) do require registration. We do use your contact information
              to send you offers based on your previous orders and your
              interests.
            </article>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Use of Demographic / Profile Data / Your Information
        </h2>

        <ul className="flex flex-col gap-[2em]">
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              We use personal information to provide the services you request.
              To the extent we use your personal information to market to you,
              we will provide you the ability to opt-out of such uses. We use
              your personal information to resolve disputes; troubleshoot
              problems; help promote a safe service; collect money; measure
              consumer interest in our products and services, inform you about
              online and offline offers, products, services, and updates;
              customize your experience; detect and protect us against error,
              fraud and other criminal activity; enforce our terms and
              conditions; and as otherwise described to you at the time of
              collection.
            </article>
          </li>

          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              In our efforts to continually improve our product and service
              offerings, we collect and analyze demographic and profile data
              about our users&#39; activity on our Website.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              We identify and use your IP address to help diagnose problems with
              our server, and to administer our Website. Your IP address is also
              used to help identify you and to gather broad demographic
              information.
            </article>
          </li>
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              We will occasionally ask you to complete optional online surveys.
              These surveys may ask you for contact information and demographic
              information (like zip code, age, or income level). We use this
              data to tailor your experience at our Website, providing you with
              content that we think you might be interested in and to display
              content according to your preferences.
            </article>
          </li>
          <li>
            <div>
              <h2 className="policy_list_title text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  font-[600] decoration-4 text-[#0F143A] opacity-80">
                Cookies
              </h2>
              <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
                A &#34;cookie&#34; is a small piece of information stored by a web
                server on a web browser so it can be later read back from that
                browser. Cookies are useful for enabling the browser to remember
                information specific to a given user. We place both permanent
                and temporary cookies in your computer&#39;s hard drive. The cookies
                do not contain any of your personally identifiable information.
              </article>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Sharing of Personal Information
        </h2>

        <ul className="flex flex-col gap-[2em]">
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              We may share personal information with our other corporate
              entities and affiliates to help detect and prevent identity theft,
              fraud and other potentially illegal acts; correlate related or
              multiple accounts to prevent abuse of our services; and to
              facilitate joint or co-branded services that you request where
              such services are provided by more than one corporate entity.
              Those entities and affiliates may not market to you as a result of
              such sharing unless you explicitly opt-in.
            </article>
          </li>

          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              We may disclose personal information if required to do so by law
              or in the good faith belief that such disclosure is reasonably
              necessary to respond to subpoenas, court orders, or other legal
              process. We may disclose personal information to law enforcement
              offices, third party rights owners, or others in the good faith
              belief that such disclosure is reasonably necessary to: enforce
              our Terms or Privacy Policy; respond to claims that an
              advertisement, posting or other content violates the rights of a
              third party; or protect the rights, property or personal safety of
              our users or the general public.
            </article>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Security Precautions
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          Our Website has stringent security measures in place to protect the
          loss, misuse, and alteration of the information under our control.
          Whenever you change or access your account information, we offer the
          use of a secure server. Once your information is in our possession, we
          adhere to strict security guidelines, protecting it against
          unauthorized access.
        </article>
      </div>
      <div>
        <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Choice/Opt-Out
        </h2>
        <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
          We provide all users with the opportunity to opt-out of receiving
          non-essential (promotional, marketing-related) communications from us
          on behalf of our partners, and from us in general, after setting up an
          account.
        </article>
      </div>
      <div>
        <h2 className="font-mazzard flex justify-start policy_subTitle text-[16px] sm:text-[20px] md:text-[24px] nxl:text-[30px] font-[600] leading-[40px] md:leading-[54px] text-[#0F143A]   decoration-4">
          Your Consent
        </h2>
        <ul className="flex flex-col gap-[2em]">
          <li>
            <article className="text-[12px] font-mazzard leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              By using the Website and/ or by providing your information, you
              consent to the collection and use of the information you disclose
              on the Website in accordance with this Privacy Policy, including
              but not limited to your consent for sharing your information as
              per this privacy policy.
            </article>
          </li>

          <li>
            <article className=" italic text-[12px] font-mazzardSemiBold leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              If we decide to change our privacy policy, we will post those
              changes on this page so that you are always aware of what
              information we collect, how we use it, and under what
              circumstances we disclose it.
            </article>
          </li>
          <li>
            <article className="italic text-[12px] font-mazzardSemiBold leading-[20px] sm:leading-[24px] md:leading-[28px] nxl:leading-[32px] sm:text-[14px] md:text-[16px] nxl:text-[20px]  text-justify">
              For further information, please contact us at{" "}
              <a
                className="text-[#0075C2] font-[700]"
                href="mailto:info@hustlemad.com"
              >
                info@hustlemad.com
              </a>
              .
            </article>
          </li>
        </ul>
      </div>
    </div>
  );
}
