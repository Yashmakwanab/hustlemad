import Link from 'next/link'
import ImageWrapper from '../ImageWrapper/ImageWrapper'

export default function BlogCard({ blogs}) {
    return (
        <main className="flex flex-col items-center justify-between bg-white">
            <section className="text-gray-600 body-font">
                <div className="container py-5 mx-auto px-[30px]">
                    <div className="grid grid-cols-1 mdl:grid-cols-2 xll:grid-cols-3 gap-x-[80px] gap-y-[40px] mdl:gap-y-[64px]">
                        {
                            blogs?.map((dat, index) => (
                                <div key={index} className="max-w-[360px] 3xl:max-w-[520px]" >
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <ImageWrapper className="h-[180px] 3xl:h-[280px] w-full object-cover object-center" 
                                        // src={dat.image} 
                                        src="/Images/blog/blogImage.png"
                                        alt="blog cover" />

                                        <div className="py-[10px] 3xl:py-[16px]">
                                            <p className="w-fit font-mazzardMedium text-[#286CD3] bg-[#EBF6FF] mb-[12px] 3xl:mb-[16px] text-[12px] sm:text-[14px] 3xl:text-[20px] leading-[14px] sm:leading-[14px] 3xl:leading-[20px] mx-[18px] 3xl:mx-[22px] px-[14px] 3xl:px-[20px] py-[10px] sm:py-[14px] rounded-[24px]">
                                                {/* {dat.tag} */}
                                                Communities
                                                </p>
                                            <hr />
                                            <div className='mx-[18px] 3xl:mx-[22px]'>
                                                <h1 className="text-[14px] sm:text-[18px] 3xl:text-[23px] leading-[21px] sm:leading-[27px] 3xl:leading-[39px] text-[#0F143A] font-mazzardMedium mt-[12px] 3xl:mt-[16px] mb-[8px] 3xl:mb-[10px]">{dat.title.substring(0, 30)}...</h1>
                                                <p className="text-[12px] 3xl:text-[17px] leading-[18px] 3xl:leading-[27px] text-[#0F143A] font-mazzard mb-[10px] 3xl:mb-[14px] opacity-80">{dat.body.substring(0, 135)}...</p>
                                                <div className='flex mb-[16px] 3xl:mb-[22px]'>
                                                    <p className="text-[10px] sm:text-[12px] 3xl:text-[16px] leading-[15px] sm:leading-[18px] 3xl:leading-[24px] text-[#0F143A] font-mazzardMedium opacity-90">
                                                        {/* {dat.readtime} */}
                                                        2 min read
                                                        </p>
                                                    <p className="text-[10px] sm:text-[12px] 3xl:text-[16px] leading-[15px] sm:leading-[18px] 3xl:leading-[24px] mt-[-4px] text-[#0F143A] font-mazzardMedium opacity-90 mx-[12px]">.</p>
                                                    <p className="text-[10px] sm:text-[12px] 3xl:text-[16px] leading-[15px] sm:leading-[18px] 3xl:leading-[24px] text-[#0F143A] font-mazzardMedium opacity-90">
                                                        {/* {dat.date} */}
                                                        Jan 31, 2023
                                                        </p>
                                                </div>

                                                <div className="mb-[8px]">
                                                    <Link href={`blog/${dat.id}`}>
                                                        <div className='flex underline underline-offset-[5px] decoration-[#286CD3]'>

                                                        <p className="text-[10px] sm:text-[12px] 3xl:text-[16px] leading-[15px] sm:leading-[18px] 3xl:leading-[24px] text-[#286CD3] font-mazzardSemiBold mr-[8px]">Read more
                                                        </p>
                                                        <ImageWrapper className="" src="/Images/blog/rightArrow.svg" alt="right arrow" />
                                                        </div>
                                                            
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}