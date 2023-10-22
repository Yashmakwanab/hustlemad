"use client"
import React, { useState } from 'react';

const images = [
    "/Images/latestWork/latestWork1.svg",
    "/Images/latestWork/latestWork2.svg",
    "/Images/latestWork/latestWork3.svg",
    "/Images/latestWork/latestWork4.svg",
    "/Images/latestWork/latestWork5.svg",
    "/Images/latestWork/latestWork6.svg",
    "/Images/latestWork/latestWork7.svg",
    "/Images/latestWork/latestWork8.svg",
    "/Images/latestWork/latestWork9.svg",
    "/Images/latestWork/latestWork10.svg",
    "/Images/latestWork/latestWork11.svg",
];

const LatestWork = () => {
    const firstGridImages = images.slice(0, 1);
    const secondGridImages = images.slice(1, 5);
    const thirdGridImages = images.slice(5, 9);
    const fourthGridImages = images.slice(9, 10);
    const fifthGridImages = images.slice(10, 11);


    return (
        <div className='flex justify-center'>
            <div className="max-w-[1348px] mx-[14px] sm:mx-[25px] md:mx-[32px]">
                <div className="grid grid-cols-2 gap-[4px] md:gap-[10px] lg:gap-[20px] mb-[4px] md:mb-[10px] lg:mb-[20px]">
                    <div className="grid overflow-hidden">
                        {firstGridImages.map((imageUrl, index) => (
                            <div key={index} className="lg:w-[460px] xll:w-[664px] cursor-pointer">
                                <img className="h-auto w-full hover:scale-125 duration-300" src={imageUrl} alt="Image" />
                            </div>
                        ))}
                    </div>
                    <div className="grid">
                        <div className='grid grid-cols-2 gap-[4px] md:gap-[10px] lg:gap-[20px]'>
                            {secondGridImages.map((imageUrl, index) => (
                                <div key={index} className="cursor-pointer overflow-hidden">
                                    <img className="h-auto w-full hover:scale-125 duration-300" src={imageUrl} alt="Image" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-[4px] md:gap-[10px] lg:gap-[20px] mb-[4px] md:mb-[10px] lg:mb-[20px]">
                    <div className="grid">
                        <div className='grid grid-cols-2 md:grid-cols-2 gap-[4px] md:gap-[10px] lg:gap-[20px]'>

                            {thirdGridImages.map((imageUrl, index) => (
                                <div key={index} className="w-full cursor-pointer overflow-hidden">
                                    <img className="h-auto w-full hover:scale-125 duration-300" src={imageUrl} alt="Image" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid">
                        {fourthGridImages.map((imageUrl, index) => (
                            <div key={index} className="w-full cursor-pointer overflow-hidden">
                                <img className="h-auto w-full hover:scale-125 duration-300" src={imageUrl} alt="Image" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 mb-[4px] md:mb-[10px] lg:mb-[20px]">
                    {fifthGridImages.map((imageUrl, index) => (
                        <div key={index} className="w-full cursor-pointer overflow-hidden">
                            <img className="h-auto w-full hover:scale-125 duration-300" src={imageUrl} alt="Image" />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}


export default LatestWork;