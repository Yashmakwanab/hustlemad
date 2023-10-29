import Link from "next/link";
import React, { useState } from "react";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import OrderRequestForm from "./orderRequestForm";
import ContactDetailForm from "./contactDetailForm";

export default function OrderRequest() {
    const [submitRequest, setsubmitRequest] = useState(false);
    const [submitDetail, setsubmitDetail] = useState(false);
    return (
        <div className="pt-[40px] px-[80px] order-form">
            <div className="flex mb-[32px]">
                <Link href="/catalogue" className='text-[#0F143A8F] font-mazzardSemiBold text-[12px] leading-[12px]'>Swag</Link>
                <span className='text-[#0F143A] font-mazzardSemiBold text-[12px] leading-[12px] opacity-90 mx-[8px]'> &gt; </span>
                <div className='text-[#0F143A] font-mazzardSemiBold text-[12px] leading-[12px]'>Order Request Form</div>
            </div>
            <div className="border-b-[3px]">
                <div className="flex mb-[40px] items-center">
                    <div className='mr-[28px]'>
                        <ImageWrapper src="/Images/Catlog/editIcon.svg" alt='img' className='w-[26px] h-[26px]' />
                    </div>
                    <div className='text-[#0F143A] font-recoleta text-[30px] leading-[30px] font-[500] mr-[40px]'>Order Request Form</div>
                    <div className='text-[#2A32FF] font-mazzardSemiBold text-[16px] leading-[16px] cursor-pointer' onClick={() => setsubmitRequest(false)}>Edit</div>
                </div>
                <div className={`${submitRequest ? "hidden" : ""} max-w-[320px] sm:max-w-[520px] md:max-w-[600px] nxl:max-w-[1146px] ml-[54px] mb-[40px]`}>
                    <OrderRequestForm setsubmitRequest={setsubmitRequest}/>
                </div>
            </div>
            <div>
                <div className="flex mb-[40px] items-center mt-[60px]">
                    <div className='mr-[28px]'>
                        <ImageWrapper src="/Images/Catlog/editIcon.svg" alt='img' className='w-[26px] h-[26px]' />
                    </div>
                    <div className='text-[#0F143A] font-recoleta text-[30px] leading-[30px] font-[500] mr-[40px]'>Contact Details</div>
                </div>
                <div className={`${submitRequest ? "" : "hidden"} max-w-[320px] sm:max-w-[520px] md:max-w-[600px] nxl:max-w-[1146px] ml-[54px] mb-[30px]`}>
                    <ContactDetailForm setsubmitDetail={setsubmitDetail}/>
                </div>
                <div className={`${submitDetail ? "" : "hidden"} text-[#2A32FF] font-mazzardMedium text-[16px] leading-[16px] ml-[54px]`}>You will receive a confirmation mail soon!</div>
            </div>
        </div>
    );
}
