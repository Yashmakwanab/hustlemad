"use client";
import React from "react";
import { Button, DatePicker, Form, Input } from "antd";

const OrderRequestForm = ({setsubmitRequest}) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        setsubmitRequest(true)
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
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
                <div className="font-mazzard">
                    <Form.Item
                        name="swag"
                        label="How many Swag packs do you want?"
                        className="mb-[20px] lg:mb-[32px]"
                        rules={[
                            {
                                required: true,
                                message: "Please input swag!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Please input swag" />
                    </Form.Item>
                    <Form.Item
                        name="date"
                        label="Do you need these by a certain date?"
                        className="mb-[20px] lg:mb-[32px] form-date"
                    >
                        <DatePicker onChange={onChange} placeholder="Enter date ( dd-mm-yyyy)" className="w-full" format="DD-MM-YYYY" />
                    </Form.Item>
                    <div>
                        <div className='custom-label underline underline-offset-4 mb-[20px]'>Custom items added to your Pack</div>
                    </div>
                    <Form.Item
                        name="comments"
                        label="Add Comments"
                        className="mb-[20px] lg:mb-[32px]"
                        rules={[
                            {
                                required: true,
                                message: "Please input your comments!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Enter Comments" />
                    </Form.Item>

                </div>
                <Form.Item className="m-0 flex">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="font-mazzardSemiBold bg-[#0F143A] py-[14px] px-[72px] text-[18px] sm:text-[22px] lg:text-[24px] font-[600] h-full text-center mb-[68px] lg:mb-0"
                    >
                        Continue
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default OrderRequestForm;
