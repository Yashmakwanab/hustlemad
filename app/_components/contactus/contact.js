"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import axios from "axios";

const ContactUs = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      await axios
        .post(
          "https://hustlemad-backend.herokuapp.com/feed/send/",
          {
            companyname: values.companyname,
            contact: values.contact,
            email: values.email,
            name: values.name,
            message: values.message
          },
        )
        .then((res) => {
          if (res.status == 201) {
            form.resetFields();
          }
        }
        );
    } catch (e) {
      console.log("e");
    }
  };

  return (
    <div className="bg-[#D6FFF5] pt-[64px] pb-[80px] flex justify-center contactForm">
      <div className="max-w-[328px] sm:max-w-[572px] lg:max-w-[828px] xl:max-w-[1044px]">
        <div className="flex items-center w-[196px] sm:w-[236px] lg:w-[276px] xl:w-[316px] h-[112px] sm:h-[140px] lg:h-[168px] xl:h-[196px] m-auto mb-[16px] sm:mb-[24px] xl:mb-[32px]">
          <ImageWrapper
            src="/Images/contact/contactPhone.webp"
            alt="Phone Image"
            width={316}
            height={196}
          />
        </div>
        <h1 className="font-recoleta font-[600] text-[#0F143A] text-center text-[24px] sm:text-[36px] lg:text-[44px] xl:text-[52px] mb-[12px] sm:mb-[16px] xl:mb-[20px]">
          Contact Us
        </h1>
        <p className="font-mazzardMedium text-[#0F143ACC] text-center text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px] mb-[28px] sm:mb-[40px] lg:mb-[48px] xl:mb-[80px]">
          Any Questions or Remarks? Just write us a message!
        </p>
        <div className="mb-[60px] sm:mb-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[100px] border-[2px] border-[#001636A3] rounded-[44px] px-[30px] sm:px-[40px] lg:px-[48px] xl:px-[72px] py-[32px] sm:py-[40px] bg-[#ADFFDEA3] justify-beetwen">
            <div className="items-center w-[268px] sm:w-[300px] lg:w-[420px] xl:w-[480px]">
              <h2 className="font-recoleta text-center sm:text-left leading-[21px] sm:leading-[29px] lg:leading-[38px] xl:leading-[43px] text-[16px] sm:text-[22px] lg:text-[28px] xl:text-[32px] font-[600] text-[#0F143A] mb-[16px] sm:mb-[32px] lg:mb-[60px] sm:mt-[8px] lg:mt-[33px] xl:mt-[55px]">
                Find few of the most frequently asked questions over here...
              </h2>
              <Link
                href="faq"
                className={
                  "w-fit font-recoleta bg-[#0F143A] px-[24px] lg:px-[32px] py-[8px] lg:py-[11px] xl:py-[14px] rounded-[6px] text-[14px] sm:text-[18px] lg:text-[24px] xl:text-[28px] text-[#FFFFFF] flex m-auto sm:m-0 leading-[16px] sm:leading-[21px] lg:leading-[28px] xl:leading-[33px]"
                }
              >
                FAQ
              </Link>
            </div>
            <div className="w-[160px] sm:w-[180px] lg:w-[260px] xl:w-[320px] h-[160px] sm:h-[180px] lg:h-[260px] xl:h-[320px] justify-self-center sm:justify-self-end order-first sm:order-last mb-[28px] sm:mb-0">
              <ImageWrapper
                src="/Images/contact/contactGirlImage.webp"
                alt="Contact Girl"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
        <div className="bg-white px-0 sm:px-[60px] lg:px-[60px] xl:px-[72px] pt-[32px] sm:pt-[48px] lg:pt-[80px] pb-[32px] sm:pb-[48px] rounded-[32px] grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:w-[280px] xl:w-[320px] flex flex-col">
            <button className="font-recoleta bg-[#A5FFE952] text-[#00756E] px-[20px] py-[12px] sm:p-[18px] leading-[20px] sm:leading-[27px] text-[18px] sm:text-[24px] font-[700] text-center rounded-[8px] mb-[20px] sm:mb-[32px] w-fit mx-auto lg:mx-0 lg:mt-0">
              Contact Us
            </button>
            <h2 className="font-mazzardMedium text-[#0F143A] text-[20px] sm:text-[36px] lg:text-[34px] xl:text-[39px] leading-[29px] sm:leading-[48px] lg:leading-[48px] xl:leading-[54px] text-center lg:text-start mb-[28px] sm:mb-[40px] lg:mb-[44px] sm:max-w-[360px] lg:max-w-auto m-auto lg:mx-0 lg:mt-0">
              Have Questions? Don’t Be Shy
            </h2>
            <div className="grid gap-[44px] hidden lg:flex flex-col">
              <div>
                <div className="flex items-center mb-[18px]">
                  <div className="lg:w-[28px] lg:h-[28px] mr-[16px]">
                    <ImageWrapper
                      src="/Images/contact/phoneIcon.webp"
                      alt="Phone Image"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="font-mazzardMedium text-[#0F143A] sm:text-[24px] leading-[24px] opacity-80">
                    Call Us
                  </div>
                </div>
                <div className="font-mazzard text-[#0F143A] sm:text-[24px] leading-[24px] mb-[10px]">
                  966-305-2001
                </div>
                <div className="font-mazzardMedium text-[#009289] sm:text-[16px] leading-[18px]">
                  Mon-Fri, 9am-7pm, IST
                </div>
              </div>
              <div>
                <div className="flex items-center mb-[18px]">
                  <div className="lg:w-[28px] lg:h-[28px] mr-[16px]">
                    <ImageWrapper
                      src="/Images/contact/mailIcon.webp"
                      alt="Mail Image"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="font-mazzardMedium text-[#0F143A] text-[20px] sm:text-[24px] leading-[24px] opacity-80">
                    Send Email
                  </div>
                </div>
                <div className="font-mazzard text-[#0F143A] sm:text-[24px] leading-[24px] mb-[10px]">
                  aditya@hustlemad.com
                </div>
                <div className="font-mazzardMedium text-[#009289] sm:text-[16px] leading-[18px]">
                  Typically replies within 2 hours
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[320px] sm:max-w-[520px] md:max-w-[600px] nxl:max-w-[480px] w-full px-[20px] sm:px-0">
            <Form
              form={form}
              layout="vertical"
              name="register"
              onFinish={onFinish}
              initialValues={{
                preference: "Custom Pack",
              }}
              scrollToFirstError
              requiredMark={false}
            >
              <div className="font-mazzard">
                <Form.Item
                  name="name"
                  className="mb-[20px] lg:mb-[32px]"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input placeholder="Your name" />
                </Form.Item>
                <Form.Item
                  name="companyname"
                  className="mb-[20px] lg:mb-[32px]"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input placeholder="Company name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  className="mb-[20px] lg:mb-[32px]"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                  name="contact"
                  className="mb-[20px] lg:mb-[32px]"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input placeholder="Contact number" />
                </Form.Item>
                <Form.Item
                  name="message"
                  className="mb-[28px] lg:mb-[44px]"
                >
                  <TextArea
                    rows={5}
                    placeholder="Leave a message here (optional)"
                  />
                </Form.Item>
              </div>
              <Form.Item className="m-0 flex justify-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="font-recoleta bg-[#0F143A] py-3 px-[30px] text-[18px] sm:text-[22px] lg:text-[24px] font-[600] h-full text-center rounded-[120px] mb-[68px] lg:mb-0"
                >
                  Send us a message
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="flex justify-center gap-[24px] sm:gap-[60px] lg:hidden">
            <div>
              <div className="flex items-center mb-[8px] sm:mb-[12px]">
                <div className="w-[18px] h-[18px] mr-[12px]">
                  <ImageWrapper
                    src="/Images/contact/phoneIcon.webp"
                    alt="Phone Image"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="font-mazzardMedium text-[#0F143A] text-[14px] sm:text-[18px] leading-[14px] sm:leading-[18px] opacity-80">
                  Call Us
                </div>
              </div>
              <div className="font-mazzard text-[#0F143A] text-[14px] sm:text-[20px] leading-[20px] mb-[8px] sm:mb-[12px]">
                966-305-2001
              </div>
              <div className="font-mazzardMedium text-[#009289] text-[10px] sm:text-[14px] leading-[16px]">
                Mon-Fri, 9am-7pm, IST
              </div>
            </div>
            <div>
              <div className="flex items-center mb-[8px] sm:mb-[12px]">
                <div className="w-[18px] h-[18px] mr-[12px]">
                  <ImageWrapper
                    src="/Images/contact/mailIcon.webp"
                    alt="Mail Image"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="font-mazzardMedium text-[#0F143A] text-[14px] sm:text-[18px] leading-[14px] sm:leading-[18px] opacity-80">
                  Send Email
                </div>
              </div>
              <div className="font-mazzard text-[#0F143A] text-[14px] sm:text-[20px] leading-[20px] mb-[8px] sm:mb-[12px]">
                aditya@hustlemad.com
              </div>
              <div className="font-mazzardMedium text-[#009289] text-[10px] sm:text-[14px] leading-[16px]">
                Typically replies within 2 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
