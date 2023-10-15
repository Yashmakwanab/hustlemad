import Swags from '@/app/_components/web3page/swags';
import WebRequestForm from '@/app/_components/web3page/webRequestForm';
import React from 'react';

const Web = () => {
    return (
        <>
            <div className='pt-[44px] md:pt-[127px] nxl:pt-[80px] bg-black'>
                <Swags/>
                <WebRequestForm />
            </div>
        </>
    )
}
export default Web