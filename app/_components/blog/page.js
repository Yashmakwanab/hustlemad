import Image from 'next/image'
import Link from 'next/link'

const data = [
    {
        name: ""
    },
    {
        name: ""
    },
    {
        name: ""
    },
    {
        name: ""
    },
    {
        name: ""
    },
    {
        name: ""
    },
    {
        name: ""
    },

]

export default function Blog() {
    return (
        <main className="flex flex-col items-center justify-between bg-white">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            data.map((dat, index) => (
                                <div className="p-[40px] lg:w-1/2 xll:w-1/3" >
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="md:h-36 3xl:h-[280px] w-full object-cover object-center" src="/Images/blog/blogImage.png" alt="blog cover" />

                                        <div className="py-[16px]">
                                            <p className="w-fit font-mazzardMedium text-[#286CD3] bg-[#EBF6FF] mb-[16px] text-[20px] mx-4 px-[20px] py-[10px] rounded-[24px]">Communities</p>
                                            <hr />
                                            <div className='mx-4'>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">This is a blog template</h1>
                                                <p>Lets all be unique together until we realise we are all the same.</p>
                                                <p className="text-xs">2 June 2022</p>
                                                <div className="flex items-center flex-wrap underline mb-1">
                                                    <Link href="/blog" className="text-green-800  md:mb-2 lg:mb-0">
                                                        <p className="inline-flex items-center">Read Blog
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </p>
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