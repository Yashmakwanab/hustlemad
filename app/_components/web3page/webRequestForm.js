"use client"
import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

const WebRequestForm = () => {
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
                  message: "This information is coming from web3 request information form"
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
        <div className='bg-[#F8D82F] flex justify-center px-[16px] web-form rounded-t-[40px] md:rounded-t-[80px]'>
            <div className='container py-[36px] xl:py-[80px] max-w-[520px]  lg:max-w-[880px] xl:max-w-[1040px] 2xl:max-w-[1400px]'>
                <h1 className='font-spaceMonoBold flex justify-center text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[700] leading-[32px] sm:leading-[54px] lg:leading-[65px] xl:leading-[70px] underline underline-offset-[5px] text-[#0F143A] mb-[28px] xl:mb-[80px] decoration-2'>Request Information</h1>
                <Form
                    form={form}
                    layout="vertical"
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        preference: 'Custom Pack',
                    }}
                    scrollToFirstError
                    requiredMark={false}
                >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap:10 lg:gap-24 font-mazzard'>
                        <Form.Item
                            name="name"
                            label="Enter your Full Name"
                            className='text-[28px]'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Enter Name" />
                        </Form.Item>
                        <Form.Item
                            name="companyname"
                            label="Company/Community name?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your company name!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Company Name" />
                        </Form.Item>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap:10 lg:gap-24'>
                        <Form.Item
                            name="email"
                            label="Email Address"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input placeholder='Enter Work Email' />
                        </Form.Item>
                        <Form.Item
                            name="contact"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input placeholder='Phone Number' />
                        </Form.Item>
                    </div>
                    <Form.Item className='m-0 flex justify-center'>
                        <Button type="primary" htmlType="submit" className='font-spaceMonoBold bg-[#000000] py-3 px-7 text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[26px] font-[500] h-full text-center xl:mt-10 shadow-[-5px_5px_0px_0px_#FAA500]'>
                            Submit Request
                        </Button>
                    </Form.Item>
                </Form>
            </div >
        </div >
    );
};
export default WebRequestForm;
