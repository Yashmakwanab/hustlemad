'use client'

const Web3Hero = () => {
    return (
        <div className='flex  flex-col items-center w-full gap-2 md:gap-5 xl:gap-10 pt-10 md:pt-20 xl:pt-30 2xl:pt-30 pb-2 md:pb-10 xl:pb-20 pl-2 md:pl-10 xl:pl-20 2xl:pl-30 pr-2 md:pr-5 xl:pr-20 2xl:pr-30'>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-between justify-items-center gap-10	 '>
                <div className='flex flex-col gap-10 max-w-[720px] order-last lg:order-first items-center	'>
                    <h1 className='font-spaceMonoBold text-[28px]  md:text-[40px] nxl:text-[48px] xll:text-[52px] 3xl:text-[56px]  text-white text-center	lg:text-left'>
                        The best Gifts & Swags curations for your Community and Events
                    </h1>
                    <div className='w-full flex items-center justify-center lg:justify-start'>

                        <img className='w-[75%]' src={'/Images/web3Page/web3heroImage.png'} />
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>

                    <img className='w-[75%]  max-w-[465px]' src={'/Images/web3Page/web3heroImage2.png'} />
                </div>

            </div>
            <div className='pb-10 md:pb-10 xl:pb-20 pt-10 md:pt-10 xl:pt-20 2xl:pt-30 flex  items-center justify-center'>
                <div className="rotating-element">
                    <img className='w-[65%] lg:w-[85%]' src={'/Images/web3Page/web3heroImage4.png'} />
                </div>

            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-between justify-items-center gap-10	 '>
                <div className='w-full flex items-center justify-center'>

                    <img className='w-[75%]  max-w-[465px]' src={'/Images/web3Page/web3heroImage3.png'} />
                </div>
                <div className='flex flex-col gap-10 max-w-[720px] items-center	'>
                    <h1 className='font-spaceMonoBold text-[28px]  md:text-[40px] nxl:text-[44px]  text-white text-center	lg:text-left'>
                        Growing a Community can be tough !!
                    </h1>
                    <h1 className='font-spaceMonoBold text-[28px]  md:text-[40px] nxl:text-[44px]  text-white text-center	lg:text-left'>
                        Don&apos;t worry!! We will be with you, every step of the way.
                    </h1>

                </div>


            </div>
        </div >
    );
}

export default Web3Hero;