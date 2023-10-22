"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import TextArea from "antd/es/input/TextArea";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

const SellerLead = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    form.resetFields();
  };
  return (
    <>
      <div className="pt-[40px] sm:pt-[44px] md:pt-[80px] nxl:pt-[120px] pb-[20px] sm:pb-[44px] bg-[#D3FFD5B8] flex justify-center">
        <div className="container nxl:max-w-[1109px] 2xl:max-w-[1264px]">
          <div className="grid grid-cols-1 nxl:grid-cols-2 gap-[28px] sm:gap-[40px] nxl:gap-[80px] 2xl:gap-32">
            <div className="flex justify-center">
              <div className="max-w-[320px] sm:max-w-[520px] md:max-w-[640px] nxl:max-w-[400px] 2xl:max-w-[480px] text-center nxl:text-start w-full">
                <h1 className="font-recoleta text-[22px] sm:text-[36px] md:text-[44px] nxl:text-[40px] 2xl:text-[48px] text-[#0F143A] leading-[37px] sm:leading-[61px] md:leading-[75px] nxl:leading-[68px] 2xl:leading-[82px] mb-[24px] md:mb-[36px]">
                  We enable{" "}
                  <span className="text-[#05C03D] underline underline-offset-[8px]">
                    100+
                  </span>{" "}
                  D2C brands generate B2B orders
                </h1>
                <p className="font-mazzardMedium nxl:font-[600] text-[16px] sm:text-[20px] md:text-[24px] 2xl:text-[28px] text-[#0F143A] leading-[28px] md:leading-[42px]  2xl:leading-[52px] opacity-90 mb-[28px] sm:mb-[60px] md:mb-[80px] nxl:mb-[90px] nxl:mr-[27px]">
                  Let us{" "}
                  <span className="opacity-100 font-[500] text-[#00BC38] underline underline-offset-[7px]">
                    grow your revenue
                  </span>{" "}
                  while you build your brand
                </p>
                <div className="w-[210px] sm:w-[250px] md:w-[350px] nxl:w-[350px] 2xl:w-[420px] h-[180px] sm:h-[220px] md:h-[300px] nxl:h-[300px] 2xl:h-[360px] flex mt-[5px] m-auto nxl:m-0">
                  <ImageWrapper
                    src="/Images/sellerlead/growthForm.webp"
                    alt="Pin Image"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-[320px] sm:max-w-[520px] md:max-w-[600px] nxl:max-w-[440px] 2xl:max-w-[480px] sellerLead w-full">
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
                      className="text-[28px]"
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
                      name="websitename"
                      rules={[
                        {
                          required: true,
                          message: "Please input your website name!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input placeholder="Website / Store Link" />
                    </Form.Item>
                    <Form.Item
                      name="email"
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
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input placeholder="Phone Number" />
                    </Form.Item>
                    <Form.Item name="description">
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
                      className="font-recoleta bg-[#0F143A] py-3 px-[30px] text-[18px] sm:text-[24px] font-[600] h-full text-center rounded-[120px]"
                    >
                      Sign me up!
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SellerLead;
