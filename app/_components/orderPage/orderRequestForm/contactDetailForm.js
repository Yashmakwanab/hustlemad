"use client";
import React from "react";
import { Button, Form, Input } from "antd";

const ContactDetailForm = ({setsubmitDetail}) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        setsubmitDetail(true)
    };

    return (
        <>
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
                        name="phone"
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
                <Form.Item className="m-0 flex">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="font-mazzardMedium bg-[#0F143A] py-[14px] px-[72px] text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-[500] h-full text-center xl:mt-4"
                    >
                        Submit Request
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default ContactDetailForm;
