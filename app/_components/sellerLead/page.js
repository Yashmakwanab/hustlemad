"use client"
import React from 'react';
import {
    Col,
    Row,
    Button,
    Form,
    Input,
    Select,
} from 'antd';

const SellerLead = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        form.resetFields();
    };
    return (
        <>
            <div className='h-[100vh] pt-[44px] md:pt-[127px] nxl:pt-[80px] bg-[#D3FFD5B8] flex justify-center'>
                <div className='container max-w-[1264px]'>

                <div className='grid grid-cols-2 gap-32'>
                    <div>
                        <h1 className='font-recoleta text-[48px] text-[#0F143A] leading-[82px] mb-[36px]'>We enable <span className='text-[#05C03D] underline underline-offset-[8px]'>100+</span> D2C brands generate B2B orders</h1>
                        <p className='font-mazzardMedium text-[28px] text-[#0F143A] leading-[42px]'>Let us <span className='text-[#00BC38] underline underline-offset-[7px]'>grow your revenue</span> while you build your brand</p>
                    </div>
                    <div className='max-w[[480px]'>
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
                    <div className='font-mazzard'>
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
                            name="phone"
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
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default SellerLead