"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const swags = [
  {
    description: 'Hustlemad has successfully delivered over 10K+ customized T-shirts to over 60 Clients.',
    image: '/Images/web/swageSpeaker.png',
    color: '#1A0052F5'
  },
  {
    description: "Get ahead in style with our caps, because bad hair days are not on the company's agenda.",
    image: '/Images/web/swageCap.png',
    color: '#251C00'
  },
  {
    description: 'Elevate your corporate events and make a statement with our impressive standees.',
    image: '/Images/web/swageHolding.png',
    color: '#1E0021'
  },
  {
    description: 'Wear your professionalism on your sleeve (or chest) with our branded tees.',
    image: '/Images/web/swageTshirt.png',
    color: '#131B00'
  },
  {
    description: 'Stay connected and stand out with our customizable pop sockets.',
    image: '/Images/web/swageMobileCap.png',
    color: '#0B0136'
  },
  {
    description: 'Add some humor to your workday with our pun-derful badges.',
    image: '/Images/web/swageCircle.png',
    color: '#00221C'
  },
  {
    description: 'Brighten up your workspace and inspire greatness with our eye-catching posters.',
    image: '/Images/web/swageTenK.png',
    color: '#1A001C'
  },
  {
    description: 'Take note of your brilliant ideas in our sleek and sophisticated notebooks.',
    image: '/Images/web/swageCruize.png',
    color: '#001335'
  },
  {
    description: 'Carry your workload and your brand with ease with our spacious tote bags.',
    image: '/Images/web/swageBag.png',
    color: '#1D1D1D'
  },
];

const Swags = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId = 0;
    const Changing = () => {
      intervalId = setInterval(() => {
        setIndex(prevIndex => {
          return (prevIndex + 1 < swags.length) ? (prevIndex + 1) : 0
        });
      }, 10000);
    }
    Changing()

    return () => {
      clearInterval(intervalId);
    }
  }, [swags, index])

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
        <img className='w-[65%] lg:w-[85%]' src={'/Images/web3Page/web3heroImage4.png'} />
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
            Don't worry!! We will be with you, every step of the way.
          </h1>

        </div>


      </div>
    </div >
  )
}
export default Swags