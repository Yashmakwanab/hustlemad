'use client'
import './styles.css'
const OurGallery = () => {
    return (
        <div className=' pb-20 flex flex-col w-full items-center'>
            <h1 className="font-spaceMonoBold  text-white text-center  text-[24px] lg:text-[36px]  xl:text-[40px] xll:text-[48px] pb-5 pt-5 md:pb-10"> Our Gallery</h1>
            <div className='hidden lg:block'>
                <div className='flex gap-[15px] pl-20 pr-20'>
                    <div className='gallery_container'>
                        <img className='w-full ' src={'/Images/web3Page/gallery1.png'} />
                        <img className='w-full ' src={'/Images/web3Page/gallery2.png'} />
                        <img className='w-full ' src={'/Images/web3Page/gallery3.png'} />
                        <img className='w-full ' src={'/Images/web3Page/gallery4.png'} />
                    </div>
                    <div>
                        <img className='w-full ' src={'/Images/web3Page/gallery5.png'} />
                    </div>
                    <div className='gallery_container'>
                        <img className='w-full ' src={'/Images/web3Page/gallery1.png'} />
                        <img className='w-full ' src={'/Images/web3Page/gallery2.png'} />
                        <img className='w-full ' src={'/Images/web3Page/gallery3.png'} />
                        <img className='w-full ' src={'/Images/web3Page/gallery4.png'} />
                    </div>
                </div>
            </div>
            <div className='hidden md:block lg:hidden'>
                <div className="parent p-10 md:p-20">
                    <div className="div1"><img className='w-full ' src={'/Images/web3Page/gallery1.png'} /> </div>
                    <div className="div2"> <img className='w-full ' src={'/Images/web3Page/gallery2.png'} /></div>
                    <div className="div3"><img className='w-full ' src={'/Images/web3Page/gallery3.png'} /> </div>
                    <div className="div4"><img className='w-full ' src={'/Images/web3Page/gallery4.png'} /> </div>
                    <div className="div5"><img className='w-full ' src={'/Images/web3Page/gallery2.png'} /> </div>
                    <div className="div6"><img className='w-full ' src={'/Images/web3Page/gallery5.png'} /> </div>
                    <div className="div7"> <img className='w-full ' src={'/Images/web3Page/gallery3.png'} /> </div>
                    <div className="div8"> <img className='w-full ' src={'/Images/web3Page/gallery2.png'} /></div>
                    <div className="div9"> <img className='w-full ' src={'/Images/web3Page/gallery1.png'} /> </div>
                </div>

            </div>
            <div className='static md:hidden flex flex-col gap-[15px]  p-10 md:p-20'>

                <div className="parentMobile1">
                    <div className="div1Mobile">  <img className='w-full ' src={'/Images/web3Page/gallery1.png'} /></div>
                    <div className="div2Mobile"> <img className='w-full ' src={'/Images/web3Page/gallery2.png'} /> </div>
                </div>
                <img className='w-full ' src={'/Images/web3Page/gallery5.png'} />
                <div className="parentMobile1">
                    <div className="div1Mobile">  <img className='w-full ' src={'/Images/web3Page/gallery3.png'} /></div>
                    <div className="div2Mobile"> <img className='w-full ' src={'/Images/web3Page/gallery4.png'} /> </div>
                </div>

            </div>
        </div>
    );
}

export default OurGallery;