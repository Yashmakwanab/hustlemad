"use client"
import React, { useState } from 'react';

const Services = [
  {
    title: 'Our Services',
    description: 'We make the process of finding & acquiring the best Swags for your team easy.',
    circleColor: '',
    circleBorder: '',
    src: '/Images/landingPage/serviceImage.svg'
  },
  {
    title: 'We Procure',
    description: 'We procure top-quality swags from trusted brands worldwide.',
    circleColor: '#F2C5FF',
    circleBorder: '#E58DFF',
    src: '/Images/landingPage/procureImage.svg'
  },
  {
    title: 'We Customize',
    description: 'We customize to your exact needs; your brand, your design, your pride.',
    circleColor: '#B9FCFF',
    circleBorder: '#64C3FF',
    src: '/Images/landingPage/customizeImage.svg'
  },
  {
    title: 'We Deliver',
    description: 'We store and deliver - your merchandise, your way.',
    circleColor: '#B1FFD2',
    circleBorder: '#46DB85',
    src: '/Images/landingPage/deliverImage.svg'
  },
  {
    title: 'We Process',
    description: 'We process with care and precision, each item inspected and approved.',
    circleColor: '#FFDA92',
    circleBorder: '#E9933A',
    src: '/Images/landingPage/processImage.svg'
  },
];

export default function OurServices() {
  const [value, setValue] = useState('Our Services');
  return (
    <main className={`transition duration-300 flex flex-col items-center justify-between ${value === "We Procure" ? "bg-[#F7DCFF]" : value === "We Customize" ? "bg-[#C6F5FF]" : value === "We Deliver" ? "bg-[#C7FFDE]" : value === "We Process" ? "bg-[#FFE8BC]" : "bg-[#FAFFC6]"} `}>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 container mt-14 relative px-[16px]'>
        <div className='w-full grid grid-cols-2 place-content-center mb-44 sm:mb-9 lg:mb-0'>
          {Services.map((Service, index) => (
            <>
              {index !== 0 &&
                <div key={index} className={`${index === 1 ? "mr-auto sm:!mr-[50px] lg:!mr-auto" : index === 3 ? "mr-auto sm:!mr-[133px] lg:!mr-auto" : index === 2 ? "ml-auto sm:!ml-[50px] lg:ml-auto" : index === 4 ? "ml-auto sm:!ml-[133px] lg:ml-auto" : ""} mx-auto sm:mx-auto lg:!mx-0 transition duration-300 w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] lg:w-[180px] lg:h-[180px] 2xl:w-[220px] 2xl:h-[220px] 3xl:w-[240px] 3xl:h-[240px] mb-[50px] flex flex-col place-content-center p-4 hover:p-3 bg-[${Service.circleColor}] rounded-full text-center hover:bg-[#FFF] hover:border-[4px] hover:xl:border-[6px] hover:border-[${Service.circleBorder}] cursor-pointer relative`} onMouseEnter={() => setValue(Service.title)} onMouseLeave={() => setValue("Our Services")}
                >
                  <div className='text-[14px] sm:text-[18px] xl:text-[22px] font-[600] leading-[30px] text-[#0F143A] opacity-[72%]'>{Service.title}</div>
                  <p className='text-[10px] sm:text-[12px] xl:text-[14px] font-[400] leading-[13px] sm:leading-[16px] xl:leading-[19px] text-[#0F143A] opacity-[72%]'>{Service.description}</p>
                </div>
              }
            </>
          ))}
        </div>
        <div className='order-first lg:order-last'>
          {Services.map((Service, index) => (
            <div key={index}>
              {value === Service.title &&
                <div className={`text-center lg:text-start transition duration-300`}>
                  <h2 className='text-[24px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-[900] leading-[27px] sm:leading-[46px] lg:leading-[55px] xl:leading-[60px] text-[#0F143A] mb-2 sm:mb-3 lg:mb-4 xl:mb-6'>{Service.title}</h2>
                  <p className='text-[14px] sm:text-[20px] xl:text-[24px] 3xl:text-[28px] font-[400] leading-[19px] sm:leading-[27px] xl:leading-[32px] 3xl:leading-[38px] text-[#0F143A] opacity-[72%] mb-10'>{Service.description}</p>
                  <img src={Service.src} alt={Service.title} className='w-[200px] sm:w-[240px] lg:w-[300px] 2xl:w-[332px] 3xl:w-[372px] absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:-translate-x-0' />
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
