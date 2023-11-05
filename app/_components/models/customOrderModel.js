

"use client";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, InputNumber, Modal, Select } from 'antd';
import { setAllProductList, selectAllProductList } from '../../redux/slice/globleSlice';
import { add } from '../../redux/slice/cartSlice';
const { Option } = Select;

const CustomOrderModel = ({ openModel, setOpenModel }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProductList)

    const onFinish = (values) => {
        const staticValues = {
            brandName: 'Custom',
            price: [{
                cost: "TBD"
            }],
            image: ["https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/cd1d25ae-708e-4820-ee61-828a1a840500/public"]
        };

        const finalFormValues = { ...values, ...staticValues };
        const newProduct = finalFormValues;
        const updatedProducts = [...allProducts, newProduct];
        dispatch(setAllProductList(updatedProducts));
        dispatch(add(newProduct));
    };

    const intialValues = {
        categoryId: "",
        name: "",
        link: "",
        brandName: "Custom",
        price: "",
    };

    return (
        <>
            <Modal
                centered
                footer={false}
                open={openModel}
                onCancel={() => setOpenModel(false)}
                className='customOrderModel'
                intialValues={intialValues}
            >
                <div className='customOrderModel-form'>
                    <div className='mb-[20px] sm:mb-[32px]'><h1 className="text-[#0F143A] text-[18px] sm:text-[28px] leading-[24px] sm:leading-[38px] font-recoleta text-center mb-[10px] sm:mb-[12px]">Add New Swag</h1>
                        <div className="text-[#0F143ACC] text-[10px] sm:text-[16px] leading-[15px] sm:leading-[24px] font-mazzardMedium text-center">Saw something cool elsewhere? <br />
                            Drop the link and we’ll get it for you.
                        </div>
                    </div>
                    <Form
                        form={form}
                        layout="vertical"
                        name="customOrderModel"
                        onFinish={onFinish}
                        initialValues={{
                            preference: "Custom Pack",
                        }}
                        scrollToFirstError
                        requiredMark={false}
                    >
                        <div className="font-mazzard">
                            <Form.Item
                                name="categoryId"
                                label="Category"
                                className="customOrderModel-select"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select Category!",
                                    },
                                ]}
                            >
                                <Select
                                    suffixIcon={<span className="custom-select-arrow" />}
                                    placeholder="Swag Category"
                                    className="[&>*]:!border-[#0f143acc] [&>div]:!border-[2px] !font-mazzard"
                                >
                                    <Option value="62d964b6f57e16db99387e6c">Apparels</Option>
                                    <Option value="62d964f7f57e16db99387e6f">Drinkware</Option>
                                    <Option value="62d965b2f57e16db99387e78">Stationery</Option>
                                    <Option value="62d9662bf57e16db99387e7e">Accessories</Option>
                                    <Option value="62d965eaf57e16db99387e7b">Games</Option>
                                    <Option value="62d9652ef57e16db99387e72">Everything Else</Option>
                                    <Option value="62d96572f57e16db99387e75">Packaging</Option>
                                    <Option value="62d966b9f57e16db99387e81">Shipping</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="name"
                                label="Swag Name"
                                className="text-[28px]"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your swag name!",
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Enter Name" />
                            </Form.Item>
                            <Form.Item
                                name="link"
                                label="Link  { Where did you see this product? }"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your link!",
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Link" />
                            </Form.Item>

                        </div>
                        <Form.Item className="m-0 flex justify-center">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="font-mazzardMedium bg-[#0F143A] py-[10px] sm:py-[13px] px-[40px] text-[14px] font-[500] h-full text-center xl:mt-[12px]"
                            >
                                Add to Cart
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default CustomOrderModel