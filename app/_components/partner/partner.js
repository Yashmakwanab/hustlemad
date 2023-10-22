import Image from 'next/image';
import React from 'react';

const PartnersData = [
    '/Images/landingPage/boat.svg',
    '/Images/landingPage/boat.svg',
    '/Images/landingPage/rareRabit.svg',
    '/Images/landingPage/scareters.svg',
    '/Images/landingPage/unBottle.svg',
    '/Images/landingPage/unBottle.svg',
    '/Images/landingPage/unBottle.svg',
    '/Images/landingPage/partnerone.svg',
    '/Images/landingPage/partnerone.svg',
    '/Images/landingPage/partnertwo.svg',
    '/Images/landingPage/partnerthree.svg',
    '/Images/landingPage/latest.svg',
    '/Images/landingPage/latest.svg',
    '/Images/landingPage/latest.svg',
    '/Images/landingPage/partnerfour.svg',
    '/Images/landingPage/partnerfive.svg',
    '/Images/landingPage/partnerfive.svg',
    '/Images/landingPage/partnersix.svg',
    '/Images/landingPage/partnerseven.svg',
    '/Images/landingPage/partnerseven.svg',
    '/Images/landingPage/partnerseven.svg',
    '/Images/landingPage/partnereight.svg',
    '/Images/landingPage/partnernine.svg',
    '/Images/landingPage/partnerten.svg',
    '/Images/landingPage/partnereleven.svg',
];

const Partners = () => {
    return (
        <div className="pt-[68px] sm:pt-[78px] pb-[73px] sm:pb-[98px] bg-[url('/Images/landingPage/partnerBackground.svg')]">
            <div className='flex justify-center items-center'>
            <p className='font-mazzardMedium text-[#2A32FF] text-center text-[16px] sm:text-[24px] md:text-[32px] mr-[15px] sm:mr-[20px]'>the absolute best</p>
            <div className='flex items-center w-[20px] sm:w-[40px] md:w-[60px] h-[12px] sm:h-[24px] md:h-[36px]'>
                <Image src='/Images/landingPage/partnerArrow.svg' alt="arrow" width={60} height={36} />
            </div>
            </div>
            <h1 className='font-recoleta font-[700] text-[#0F143A] text-center text-[24px] sm:text-[48px] md:text-[60px] mb-[36px] sm:mb-[52px]'>We get you the Best</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 nxl:grid-cols-4 xll:grid-cols-5 3xl:grid-cols-6 5xl:grid-cols-7 items-center justify-center w-fit m-auto'>
                {
                    PartnersData.map((data, index) => (
                        <div key={index} className='bg-white w-[130px] sm:w-[182px] lg:w-[260px] h-[100px] sm:h-[140px] lg:h-[200px] outline outline-offset-[-1px] lg:outline-offset-[-2px] outline-[#001636EB] cursor-pointer'>
                            <Image src={PartnersData[index]} alt="Partners Image" width={260} height={200} className='hover:scale-125 duration-300' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Partners;