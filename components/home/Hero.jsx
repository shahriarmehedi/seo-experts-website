import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div
            className=' bg-[url(/bg.png)] bg-cover bg-center bg-no-repeat bg-fixed min-h-[80vh] flex items-center'
        >
            <div className='max-w-7xl mx-auto px-5 2xl:px-0'>
                <div className="flex flex-col lg:flex-row items-center gap-10 py-20 lg:py-36">
                    <div data-aos="fade-up" data-aos-duration="1500" className="w-full lg:w-1/2">
                        <div className='flex flex-col'>
                            <h1 className='text-5xl lg:text-6xl font-semibold text-left text-gray-300'>
                                YOUR TRUSTED <span className='text-sky-500'>SEO</span> PARTNER TO GROW YOUR BUSINESS
                            </h1>

                            <p className='lg:text-lg text-left pt-5 text-zinc-400'>
                                More leads, more conversions, more sales.
                                We guarantee it.
                            </p>

                            <div className='mt-10'>
                                <Link href='/get-a-quote'>
                                    <button className='px-10 py-3 rounded-full border border-sky-500 bg-sky-500 hover:border-sky-500 hover:bg-black text-white  transition duration-200 flex gap-2 items-center justify-center'>
                                        Free SEO Audit & Consultation
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>

                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1500" className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img src='https://growseo.com/images/banner-slider-1.png' alt='hero' className='w-10/12' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero