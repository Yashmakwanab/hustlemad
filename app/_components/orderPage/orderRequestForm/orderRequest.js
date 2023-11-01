import Link from "next/link";
import React, { useState } from "react";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import OrderRequestForm from "./orderRequestForm";

export default function OrderRequest() {
    const [submitRequest, setsubmitRequest] = useState(false);
    return (
        <div className="pt-[90px] sm:pt-[40px] px-[18px] sm:px-[80px] order-form">
            <div className="flex mb-[32px]">
                <Link href="/catalogue" className='text-[#0F143A8F] font-mazzardSemiBold text-[12px] leading-[12px]'>Swag</Link>
                <span className='text-[#0F143A] font-mazzardSemiBold text-[12px] leading-[12px] opacity-90 mx-[8px]'> &gt; </span>
                <div className='text-[#0F143A] font-mazzardSemiBold text-[12px] leading-[12px]'>Order Request Form</div>
            </div>
            <div>
                <div className="flex mb-[40px] items-center">
                    <div className='mr-[28px]'>
                        <ImageWrapper src="/Images/Catlog/editIcon.svg" alt='img' className='w-[26px] h-[26px]' />
                    </div>
                    <div className='text-[#0F143A] font-recoleta text-[22px] sm:text-[30px] leading-[22px] sm:leading-[30px] font-[500] mr-[40px]'>Order Request Form</div>
                    <div className='text-[#2A32FF] font-mazzardSemiBold text-[16px] leading-[16px] cursor-pointer' onClick={() => setsubmitRequest(false)}>Edit</div>
                </div>
                <div>
                    <OrderRequestForm setsubmitRequest={setsubmitRequest} submitRequest={submitRequest}/>
                </div>
            </div>
        </div>
    );
}
