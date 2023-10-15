'use client'

const Communities = () => {
    return (
        <div className="p-10 md:p-20 flex flex-col gap-10 items-center">
            <img className='w-[80%] mr-20 max-w-[650px] ' src={'/Images/web3Page/web3comunity.png'} />
            <h1 className="font-spaceMonoBold text-white text-center underline underline-offset-8 text-[24px] lg:text-[36px]  xl:text-[40px] xll:text-[48px] "> Why we love working with Communities?</h1>
            <p className="font-spaceMonoRegular text-center text-[16px] md:text-[24px]	lg:text-[28px] text-white font-normal	">Meaningful connections are essential to our well-being and happiness, and working with communities is a great way to build these connections. We feel personalized products serve as a bridge between people, helping them to feel connected and supported by others who share their values and interests.</p>
        </div>
    );
}

export default Communities;