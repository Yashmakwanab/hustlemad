import Communities from '@/app/_components/web3page/communities';
import OurGallery from '@/app/_components/web3page/gallery';
import PurpleStrip from '@/app/_components/web3page/purpleStrip';
import Swags from '@/app/_components/web3page/swags';
import Web3Hero from '@/app/_components/web3page/web3Hero';
import Web3Logo from '@/app/_components/web3page/web3Logo';
import WebRequestForm from '@/app/_components/web3page/webRequestForm';
import React from 'react';

const Web = () => {
    return (
        <>
            <div className='pt-[44px] md:pt-[127px] nxl:pt-[80px] bg-black'>
                <Web3Hero />
                <Web3Logo />
                <PurpleStrip bgColor={"#DA47EF"} />
                <Swags />
                <PurpleStrip bgColor={"#8647EF"} />
                <Communities />
                <OurGallery />
                <WebRequestForm />

            </div>
        </>
    )
}
export default Web