"use client"
import React, { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('Our Services');
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${value === "We Procure" ? "bg-[#F7DCFF]" : value === "We Customize" ? "bg-[#C6F5FF]" : value === "We Deliver" ? "bg-[#C7FFDE]" : value === "We Process" ? "bg-[#FFE8BC]" : "bg-[#FAFFC6]"} `}>
      <div className='w-full grid grid-cols-2 container mt-14'>
        <div>
          <div className='flex'>
            <div className='w-[240px] h-[240px] flex flex-col place-content-center p-4 hover:p-3 bg-[#F2C5FF] rounded-full text-center hover:bg-[#FFF] hover:border-[6px] hover:border-[#E58DFF]' onMouseEnter={() => setValue("We Procure")}
              onMouseLeave={() => setValue("Our Services")}>
              <div className='text-[22px] font-[600] leading-[30px] text-[#0F143A] opacity-[72%]'>We Procure</div>
              <p className='text-[14px] font-[400] leading-[19px] text-[#0F143A] opacity-[72%]'>We procure top-quality swags from trusted brands worldwide.</p>
            </div>
            <div className='w-[240px] h-[240px] flex flex-col place-content-center p-4 hover:p-3 bg-[#B9FCFF] rounded-full text-center hover:bg-[#FFF] hover:border-[6px] hover:border-[#64C3FF]' onMouseEnter={() => setValue("We Customize")}
              onMouseLeave={() => setValue("Our Services")}>
              <div className='text-[22px] font-[600] leading-[30px] text-[#0F143A] opacity-[72%]'>We Customize</div>
              <p className='text-[14px] font-[400] leading-[19px] text-[#0F143A] opacity-[72%]'>We customize to your exact needs; your brand, your design, your pride.</p>
            </div>
          </div>
          <div className='flex'>
            <div className='w-[240px] h-[240px] flex flex-col place-content-center p-4 hover:p-3 bg-[#B1FFD2] rounded-full text-center hover:bg-[#FFF] hover:border-[6px] hover:border-[#46DB85]' onMouseEnter={() => setValue("We Deliver")}
              onMouseLeave={() => setValue("Our Services")}>
              <div className='text-[22px] font-[600] leading-[30px] text-[#0F143A] opacity-[72%]'>We Deliver</div>
              <p className='text-[14px] font-[400] leading-[19px] text-[#0F143A] opacity-[72%]'>We store and deliver - your merchandise, your way.</p>
            </div>
            <div className='w-[240px] h-[240px] flex flex-col place-content-center p-4 hover:p-3 bg-[#FFDA92] rounded-full text-center hover:bg-[#FFF] hover:border-[6px] hover:border-[#E9933A]' onMouseEnter={() => setValue("We Process")}
              onMouseLeave={() => setValue("Our Services")}>
              <div className='text-[22px] font-[600] leading-[30px] text-[#0F143A] opacity-[72%]'>We Process</div>
              <p className='text-[14px] font-[400] leading-[19px] text-[#0F143A] opacity-[72%]'>We process with care and precision, each item inspected and approved.</p>
            </div>
          </div>
        </div>
        {value === "Our Services" &&
          <div>
            <h2 className='text-[52px] font-[900] leading-[60px] text-[#0F143A]'>Our Services</h2>
            <p className='text-[28px] font-[400] leading-[38px] text-[#0F143A] opacity-[72%]'>We make the process of finding & acquiring the best Swags for your team easy.</p>
          </div>
        }
        {value === "We Procure" &&
          <div>
          <h2 className='text-[52px] font-[900] leading-[60px] text-[#0F143A]'>We Procure</h2>
          <p className='text-[28px] font-[400] leading-[38px] text-[#0F143A] opacity-[72%]'>We procure top-quality swags from trusted brands worldwide.</p>
        </div>
        }
        {value === "We Customize" &&
          <div>
          <h2 className='text-[52px] font-[900] leading-[60px] text-[#0F143A]'>We Customize</h2>
          <p className='text-[28px] font-[400] leading-[38px] text-[#0F143A] opacity-[72%]'>We customize to your exact needs; your brand, your design, your pride.</p>
        </div>
        }
        {value === "We Deliver" &&
          <div>
          <h2 className='text-[52px] font-[900] leading-[60px] text-[#0F143A]'>We Deliver</h2>
          <p className='text-[28px] font-[400] leading-[38px] text-[#0F143A] opacity-[72%]'>We store and deliver - your merchandise, your way.</p>
        </div>
        }
        {value === "We Process" &&
          <div>
          <h2 className='text-[52px] font-[900] leading-[60px] text-[#0F143A]'>We Process</h2>
          <p className='text-[28px] font-[400] leading-[38px] text-[#0F143A] opacity-[72%]'>We process with care and precision, each item inspected and approved.</p>
        </div>
        }
      </div>
    </main>
  )
}
