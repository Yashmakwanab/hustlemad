import Link from 'next/link'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
import BlogCard from './blogCard'

export default function Blog() {
    return (
        <div className='mt-[64px]'>
            <div className='mb-[28px] sm:mb-[40px]'>
                <div className='flex justify-center mb-[16px] sm:mb-[32px]'>
                    <ImageWrapper className="w-[144px] h-[120px] sm:w-[192px] sm:h-[160px] mdl:h-[200px] mdl:w-[240px]" src="/Images/blog/blogBook.svg" alt="blog book" />
                </div>
                <div className="text-[24px] sm:text-[36px] mdl:text-[52px] leading-[27px] sm:leading-[41px] mdl:leading-[60px] text-[#0F143A] font-recoleta flex justify-center  mb-[12px] sm:mb-[20px]">Blog</div>
                <p className="text-[14px] sm:text-[16px] mdl:text-[24px] leading-[21px] sm:leading-[24px] mdl:leading-[36px] text-[#0F143A] font-mazzardMedium opacity-90 max-w-[720px] mx-auto text-center px-[20px] sm:px-[60px] mdl:px-0">The best gifts are thoughtful, surprising and personal. We share ideas for giving great presents here for you & your team!</p>
            </div>
            <div className='3xl:px-[77px]'>
                <ImageWrapper className="w-full" src="/Images/blog/blogBorder.svg" alt="blog border" />
            </div>
            <div className='mt-[40px] sm:mt-[80px] mb-[40px] sm:mb-[80px] flex justify-center'>
                <div className='max-w-[560px] mdl:max-w-[800px] xll:max-w-[960px] 3xl:max-w-[1280px] relative mx-[16px] sm:mx-[40px]'>
                    <ImageWrapper className="w-full h-[400px] xll:h-[480px] 3xl:h-[640px] hidden sm:block" src="/Images/blog/blogImage.webp" alt="blog border" />
                    <ImageWrapper className="w-full sm:hidden" src="/Images/blog/blogMobileImage.webp" alt="blog border" />
                    <div className='bg-white absolute bottom-[12px] sm:bottom-[20px] 3xl:bottom-[32px] sm:right-[24px] 3xl:right-[36px] rounded-[12px] mx-[12px] sm:mx-0'>
                        <div className="py-[10px] 3xl:py-[16px] max-w-[304px] sm:max-w-[320px] 3xl:max-w-[480px]">
                            <p className="w-fit font-mazzardMedium text-[#286CD3] bg-[#EBF6FF] mb-[12px] 3xl:mb-[16px] text-[12px] sm:text-[16px] 3xl:text-[20px] leading-[12px] sm:leading-[16px] 3xl:leading-[20px] mx-[18px] 3xl:mx-[22px] px-[14px] 3xl:px-[20px] py-[10px] sm:py-[14px] rounded-[24px]">Web3</p>
                            <hr />
                            <div className='mx-[18px] 3xl:mx-[22px]'>
                                <h1 className="text-[14px] sm:text-[18px] 3xl:text-[23px] leading-[21px] sm:leading-[27px] 3xl:leading-[39px] text-[#0F143A] font-mazzardMedium mt-[12px] 3xl:mt-[16px] mb-[8px] 3xl:mb-[10px]">Rethinking UX - A loved-by-all Swag Collection!</h1>
                                <p className="text-[12px] 3xl:text-[17px] leading-[18px] 3xl:leading-[27px] text-[#0F143A] font-mazzard mb-[10px] 3xl:mb-[14px] opacity-80">Community building and event collections are important for any organization looking to establish a strong presence in their industry...</p>
                                <div className='flex mb-[16px] 3xl:mb-[22px]'>
                                    <p className="text-[10px] sm:text-[12px] 3xl:text-[16px] leading-[15px] sm:leading-[18px] 3xl:leading-[24px] text-[#0F143A] font-mazzardMedium opacity-90">2 min read</p>
                                    <p className="text-[10px] sm:text-[12px] 3xl:text-[16px] leading-[15px] sm:leading-[18px] 3xl:leading-[24px] mt-[-4px] text-[#0F143A] font-mazzardMedium opacity-90 mx-[12px]">.</p>
                                    <p className="text-[10px] sm:text-[12px] 3xl:text-[16px] leading-[15px] sm:leading-[18px] 3xl:leading-[24px] text-[#0F143A] font-mazzardMedium opacity-90">Jan 1, 2023</p>
                                </div>

                                <div className="mb-[8px]">
                                    <Link href="/blog">
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
            </div>
            <div className="text-[22px] sm:text-[40px] 3xl:text-[48px] leading-[25px] sm:leading-[46px] 3xl:leading-[55px] text-[#0F143A] font-recoleta mb-[32px] sm:mb-[48px] mdl:mb-[72px] underline underline-offset-[7px] flex justify-center">New Blogs</div>
            <BlogCard />
        </div>
    )
}