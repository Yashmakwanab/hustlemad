import React from 'react';
import OurServices from '@/app/_components/homepage/ourServices';
import RequestForm from '@/app/_components/homepage/requestForm';
// import Carousel from '@/app/_components/homepage/carousel';
import HeroSection from '@/app/_components/homepage/heroSection/heroSection';
import PresetSection from '@/app/_components/homepage/presetSection';
import ScheduleSection from '@/app/_components/homepage/scheduleSection';
import ClientSection from '@/app/_components/homepage/ClientSection';
import Testimonials from '@/app/_components/homepage/testimonials/testimonials';
import Partners from '@/app/_components/homepage/partners';

const Home = () => {
    return (
        <>
            <div>
                <HeroSection/>
                <OurServices />
                <Partners/>
                <ScheduleSection />
                <ClientSection />
                <Testimonials/>
                <PresetSection/>
                <RequestForm />
                {/* <Carousel/> */}
            </div>
        </>
    )
}
export default Home