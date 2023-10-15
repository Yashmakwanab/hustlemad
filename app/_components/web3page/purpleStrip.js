'use client'

import MarqeeComponent from "../commonComponents/MarqeeComponent";

const PurpleStrip = ({ bgColor }) => {
    return (
        <div style={{ backgroundColor: `${bgColor}` }} className={` text-white font-spaceMonoBold`}>
            <MarqeeComponent scrollingContent={<div className=" pt-[15px] pb-[15px] md:pt-[25px] md:pb-[25px] xl:pt-[35px] xl:pb-[35px] 2xl:pt-[55px] 2xl:pb-[55px]" style={{ display: 'flex', alignItems: 'center', gap: '2em' }}>
                <img className='w-[50%]  ' src={'/Images/web3Page/perple1.png'} />
                <p className="text-[25px]">🚀</p>
                <img className='w-[50%]  ' src={'/Images/web3Page/perple2.png'} />
                <p className="text-[25px]">🚀</p>
                <img className='w-[50%]  ' src={'/Images/web3Page/perple3.png'} />
                <p className="text-[25px]">🚀</p>
                <img className='w-[50%]  ' src={'/Images/web3Page/perple4.png'} />
                <p className="text-[25px]">🚀</p>
                <img className='w-[50%]  ' src={'/Images/web3Page/perple5.png'} />
                <p className="text-[25px]">🚀</p>
                <img className='w-[50%]  ' src={'/Images/web3Page/perple6.png'} />
                <p className="text-[25px]">🚀</p>
                <img className='w-[50%]  ' src={'/Images/web3Page/perple7.png'} />
                <p className="text-[25px]">🚀</p>


            </div>} />
        </div>
    );
}

export default PurpleStrip;