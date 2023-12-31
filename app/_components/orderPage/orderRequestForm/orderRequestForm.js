"use client";
import React, { useState } from "react";
import { Button, DatePicker, Form, Input } from "antd";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectQuantityNumber, selectTotalEstimate, selectTotalPrice } from "@/app/redux/slice/globleSlice";
import CustomOrder from "../../customOrder/customOrder";



const OrderRequestForm = ({ setsubmitRequest, submitRequest }) => {
    const [submitDetail, setsubmitDetail] = useState(false);
    const cartitems = useSelector((state) => state.cart)
    const totalPrice = useSelector(selectTotalPrice)
    const totalEstimate = useSelector(selectTotalEstimate)
    const [form] = Form.useForm();
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    const defaultQuantityNumber = useSelector(selectQuantityNumber);
    const custom_product_list = useSelector((state) => state.customOrder);

    const intialValues = {
        swagbox_quantity: defaultQuantityNumber ? defaultQuantityNumber : 100,
        delivery_date: "",
        comment: "",
        full_name: "",
        company_name: "",
        email: "",
        phone: "",
    };

    const filteredItems = cartitems.filter(item => {
        return item.brandName !== "Custom";
    });

    const onFinish = async (values) => {
        const formattedDate = values.delivery_date ? new Date(values.delivery_date).toISOString().split('T')[0] : '';
        try {
          await axios
            .post(
                "https://hustlemad-backend.herokuapp.com/Admin/orderedProduct/",
              {
                swagbox_quantity: values?.swagbox_quantity,
                delivery_date: formattedDate,
                comment: values?.comment,
                full_name: values?.full_name,
                company_name: values?.company_name,
                email: values?.email,
                phone: values?.phone,
                budget_per_box: "",
                items_count: cartitems.length,
                preset_pack: "NO",
                product_list: filteredItems,
                tbd: "YES",
                total_estimate: totalEstimate,
                total_price:totalPrice,
                custom_product_list:custom_product_list
              },
            //   {
            //     headers: {
            //       'Authorization': 'ba909715-f7d4-425e-9087-e9cddc7314e3',
            //     },
            //   }
            )
            .then((res) => {
              if (res.status == 200) {
                setsubmitDetail(true)
                form.resetFields();
              }
            }
            );
        } catch (e) {
          console.log("e");
        }
      };

      const handleContinueClick = () => {
        form
            .validateFields(["swagbox_quantity", "delivery_date", "comment"])
            .then(() => {
                setsubmitRequest(true);
            })
            .catch((error) => {
                console.error("Validation failed:", error);
            });
    };

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                name="order_form"
                onFinish={onFinish}
                requiredMark={false}
                initialValues={intialValues}
            >
                <div className={`border-b-[3px] order-form`}>
                    <div className={`${submitRequest ? "hidden" : ""} sm:ml-[54px] pb-[40px]`}>
                        <Form.Item
                            name="swagbox_quantity"
                            label="How many Swag packs do you want?"
                            className="mb-[20px] lg:mb-[32px] max-w-[620px] sm:max-w-[520px] md:max-w-[826px] nxl:max-w-[1146px]"
                        >
                            <Input placeholder="Please input swag" />
                        </Form.Item>
                        <Form.Item
                            name="delivery_date"
                            label="Do you need these by a certain date?"
                            className="mb-[20px] lg:mb-[32px] form-date max-w-[620px] sm:max-w-[520px] md:max-w-[826px] nxl:max-w-[1146px]"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input date!",
                                },
                            ]}
                        >
                            <DatePicker onChange={onChange} placeholder="Enter date ( dd-mm-yyyy)" className="w-full" format="DD-MM-YYYY" />
                        </Form.Item>
                        <div>
                            <div className='custom-label underline underline-offset-4 mb-[20px]'>Custom items added to your Pack</div>
                            <CustomOrder/>
                        </div>
                        <Form.Item
                            name="comment"
                            label="Add Comments"
                            className="mb-[20px] lg:mb-[32px] max-w-[620px] sm:max-w-[620px] md:max-w-[826px] nxl:max-w-[1146px]"
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

                        <Button
                            type="primary"
                            onClick={handleContinueClick}
                            className="font-mazzardSemiBold bg-[#0F143A] py-[14px] px-[72px] text-[18px] sm:text-[22px] lg:text-[24px] font-[600] h-full text-center"
                        >
                            Continue
                        </Button>
                    </div>
                </div>
                <div className="flex mb-[40px] items-center mt-[40px] sm:mt-[60px]">
                    <div className='mr-[28px]'>
                        <ImageWrapper src="/Images/Catlog/editIcon.svg" alt='img' className='w-[26px] h-[26px]' />
                    </div>
                    <div className='text-[#0F143A] font-recoleta text-[22px] sm:text-[30px] leading-[22px] sm:leading-[30px] font-[500] mr-[40px]'>Contact Details</div>
                </div>
                <div className={`${submitRequest ? "" : "hidden"} max-w-[620px] sm:max-w-[620px] md:max-w-[826px] nxl:max-w-[1146px] sm:ml-[54px] mb-[30px]`}>
                    <div className="grid grid-cols-1 xll:grid-cols-2 gap:10 xll:gap-24 font-mazzard">
                        <Form.Item
                            name="full_name"
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
                            name="company_name"
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
                    <div className="grid grid-cols-1 xll:grid-cols-2 gap:10 xll:gap-24 sm:mt-[16px] lg:mt-0">
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
                                className="border-[#0f143acc] !border-[2px] !text-[14px] sm:!text-[18px] px-[20px] py-[7px] sm:py-[8px] numberInput"
                            />
                        </Form.Item>
                    </div>
                    <Form.Item className="m-0 flex">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="font-mazzardMedium bg-[#0F143A] py-[14px] px-[72px] text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-[500] h-full text-center"
                        >
                            Submit Request
                        </Button>
                    </Form.Item>
                </div>
            </Form>
            <div className={`${submitDetail ? "" : "hidden"} text-[#2A32FF] font-mazzardMedium text-[16px] leading-[16px] ml-[54px]`}>You will receive a confirmation mail soon!</div>
        </>
    );
};
export default OrderRequestForm;
