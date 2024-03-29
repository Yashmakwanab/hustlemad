"use client";
import React from "react";
import { Button, Form, Input, Select } from "antd";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import axios from "axios";
const { Option } = Select;

const RequestForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      await axios
        .post("https://hustlemad-backend.herokuapp.com/feed/post/", {
          companyname: values.companyname,
          contact: values.contact,
          email: values.email,
          name: values.name,
          preference: values.preference,
          swagpacks: values.swagpacks,
        })
        .then((res) => {
          if (res.status == 201) {
            form.resetFields();
          }
        });
    } catch (e) {
      console.log("e");
    }
  };

  return (
    <div className="bg-[#E7FFCE] flex justify-center px-[16px] relative">
      <div className="container py-[36px] xl:py-[80px] max-w-[520px]  lg:max-w-[880px] xl:max-w-[1040px] 2xl:max-w-[1400px]">
        <h1 className="font-recoleta flex justify-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[700] leading-[32px] sm:leading-[54px] lg:leading-[65px] xl:leading-[70px] underline underline-offset-[11px] text-[#0F143A] mb-[28px] xl:mb-[80px] decoration-4">
          Request Information
        </h1>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap:10 lg:gap-24 font-mazzard">
            <Form.Item
              name="name"
              label="Enter your Full Name"
              className="text-[28px]"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Enter Name" />
            </Form.Item>
            <Form.Item
              name="companyname"
              label="What’s the Name of your Company? "
              rules={[
                {
                  required: true,
                  message: "Please input your company name!",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Company Name" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap:10 lg:gap-24">
            <Form.Item
              name="swagpacks"
              label="How many Swag packs do you want?"
              rules={[
                {
                  required: true,
                  message: "Please input number!",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Enter quantity" />
            </Form.Item>
            <Form.Item
              name="preference"
              label="Swag Pack of preference"
              className="home-select"
              rules={[
                {
                  required: true,
                  message: "Please select preference!",
                },
              ]}
            >
              <Select
                suffixIcon={<span className="custom-select-arrow" />}
                placeholder="select your preference"
                className="[&>*]:!border-[#0f143acc] [&>div]:!border-[2px] !font-mazzard"
              >
                <Option value="Custom">Custom Pack</Option>
                <Option value="EssentialPack">Essential Pack</Option>
                <Option value="DelightPack">Delight Pack</Option>
                <Option value="EventElevateBag">Event Elevate Bag</Option>
                <Option value="CryptoCrate">Crypto Crate</Option>
                <Option value="TokenTreat">Token Treat</Option>
                <Option value="TechTribeTreasure">Tech Tribe Treasure</Option>
                <Option value="GiveawayGem">Giveaway Gem</Option>
                <Option value="BondBox">Bond Box</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap:10 lg:gap-24 sm:mt-[16px] lg:mt-0">
            <Form.Item
              name="email"
              label="Work Email Address"
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
              <Input placeholder="Enter Work Email" />
            </Form.Item>
            <Form.Item
              name="contact"
              label="Contact Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                prefix="+91-"
                placeholder="Phone Number"
                className="border-[#0f143acc] !border-[2px] !text-[14px] sm:!text-[20px] px-[10px] py-[7px] sm:py-[10px] numberInput"
              />
            </Form.Item>
          </div>
          <Form.Item className="m-0 flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="font-mazzardMedium bg-[#0F143A] py-3 px-7 text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[26px] font-[500] h-full text-center xl:mt-4"
            >
              Submit Request
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="z-[99] absolute bottom-0 w-full">
        <div className="purpleBorderStyle"></div>
      </div>
    </div>
  );
};
export default RequestForm;
