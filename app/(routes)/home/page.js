import React from 'react';
import OurServices from '@/app/_components/homepage/ourServices';
import RequestForm from '@/app/_components/homepage/requestForm';
// import Carousel from '@/app/_components/homepage/carousel';
import HeroSection from '@/app/_components/homepage/heroSection/heroSection';
import PresetSection from '@/app/_components/homepage/presetSection';

const Home = () => {
    return (
        <>
            <div>
                <HeroSection/>
                <OurServices />
                <PresetSection/>
                <RequestForm />
                {/* <Carousel/> */}
            </div>
        </>
    )
}
export default Home