'use client'
import './styles.css'
const OurGallery = () => {
    return (
        <div className=' pb-20'>
            <h1 className="font-spaceMonoBold text-white text-center  text-[24px] lg:text-[36px]  xl:text-[40px] xll:text-[48px] pb-20"> Our Gallery</h1>
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
                <div class="parent p-10 md:p-20">
                    <div class="div1"><img className='w-full ' src={'/Images/web3Page/gallery1.png'} /> </div>
                    <div class="div2"> <img className='w-full ' src={'/Images/web3Page/gallery2.png'} /></div>
                    <div class="div3"><img className='w-full ' src={'/Images/web3Page/gallery3.png'} /> </div>
                    <div class="div4"><img className='w-full ' src={'/Images/web3Page/gallery4.png'} /> </div>
                    <div class="div5"><img className='w-full ' src={'/Images/web3Page/gallery2.png'} /> </div>
                    <div class="div6"><img className='w-full ' src={'/Images/web3Page/gallery5.png'} /> </div>
                    <div class="div7"> <img className='w-full ' src={'/Images/web3Page/gallery3.png'} /> </div>
                    <div class="div8"> <img className='w-full ' src={'/Images/web3Page/gallery2.png'} /></div>
                    <div class="div9"> <img className='w-full ' src={'/Images/web3Page/gallery1.png'} /> </div>
                </div>

            </div>
            <div className='static md:hidden flex flex-col gap-[15px]  p-10 md:p-20'>

                <div class="parentMobile1">
                    <div class="div1Mobile">  <img className='w-full ' src={'/Images/web3Page/gallery1.png'} /></div>
                    <div class="div2Mobile"> <img className='w-full ' src={'/Images/web3Page/gallery1.png'} /> </div>
                </div>
                <img className='w-full ' src={'/Images/web3Page/gallery1.png'} />
                <div class="parentMobile1">
                    <div class="div1Mobile">  <img className='w-full ' src={'/Images/web3Page/gallery1.png'} /></div>
                    <div class="div2Mobile"> <img className='w-full ' src={'/Images/web3Page/gallery1.png'} /> </div>
                </div>

            </div>
        </div>
    );
}

export default OurGallery;