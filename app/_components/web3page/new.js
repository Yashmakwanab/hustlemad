'use client'

import Image from "next/image";

const NewPage = () => {
    return (
        <div className='flex justify-center'>
            <div className='container grid nxl:flex my-[48px] sm:my-[85px] nxl:my-[100px] 2xl:my-[123px] nxl:max-w-[952px] xl:max-w-[1072px] 2xl:max-w-[1288px]'>
                <div className='font-spaceMonoBold underline text-white nxl:hidden text-[24px] sm:text-[36px] md:text-[40px] decoration-2 underline-offset-[5px] mb-[37px] text-center'>Explore Trending Swags</div>
                <div className='w-[100%] nxl:w-[60%] order-last nxl:order-first flex nxl:flex-col justify-center'>
                    <div className='hidden nxl:block font-spaceMonoBold underline text-white nxl:text-[36px] xl:text-[40px] 2xl:text-[48px] decoration-2 underline-offset-[5px] mb-[37px] 2xl:mb-[48px]'>Explore Trending Swags</div>
                    <div className={`transition ease-in-out delay-150 px-[10px] sm:px-[28px] 2xl:px-[32px] 2xl:pr-[36px] py-[20px] sm:py-[40px] border-[2px] border-white rounded-[12px] max-w-[332px] sm:max-w-[520px] md:max-w-[640px] nxl:max-w-[540px] xl:max-w-[640px] 2xl:max-w-[764px]`} style={{ backgroundColor: swags[index]?.color }}>
                        <div className='mb-[20px]'>
                            <div className='flex justify-center sm:justify-start m-auto sm:m-0'>
                                <div className='w-[12px] sm:w-[18px] 2xl:w-[24px] h-[20px] sm:h-[30px] 2xl:h-[40px] flex mt-[5px]'>
                                    <Image width={24} height={40} className='mr-[12px]' src="/Images/web/pin.svg" alt='Pin Image' />
                                </div>
                                <div className='font-spaceMonoBold underline text-white text-[20px] sm:text-[26px] nxl:text-[32px] decoration-2 underline-offset-[1px] text-center ml-[12px] sm:ml-[17px]'>Fact</div>
                            </div>
                        </div>
                        <div className='transition ease-in-out delay-300 text-[16px] sm:text-[24px] font-spaceMono leading-[28px] sm:leading-[43px] text-white text-center sm:text-start'>
                            {swags[index]?.description}
                        </div>
                    </div>
                </div>
                <div className='w-[100%] nxl:w-[40%] flex justify-center nxl:justify-end mb-[40px] nxl:mb-0'>
                    <div className='w-[234px] sm:w-[312px] 2xl:w-[364px] h-[270px] sm:h-[360px] 2xl:h-[360px]'>
                        <Image width={364} height={360} className='mr-[12px]' src={swags[index]?.image} alt='Swag Image' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPage;