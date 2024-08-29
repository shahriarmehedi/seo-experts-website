'use client'


import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Testimonials() {






    const items = [

        <div className="h-full bg-zinc-900 p-8 rounded-xl  mx-5 lg:mx-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta harum assumenda officia commodi, quibusdam similique dolores distinctio dolorum repellendus quia laudantium ex delectus itaque velit exercitationem laborum deserunt, totam accusamus ipsum magni quasi error. Aliquam pariatur beatae a porro? In accusamus unde, obcaecati ratione sapiente cumque exercitationem commodi modi.
            </p>
            <a className="inline-flex items-center">
                <picture>
                    <img alt="testimonial" src="https://as1.ftcdn.net/v2/jpg/01/48/87/16/1000_F_148871674_wRvPIuNEwxUI1jHadVrb5uoV7C2Sv27i.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                </picture>
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">Dodi S.</span>
                    <span className="text-gray-500 text-sm">Client from USA</span>
                </span>
            </a>
        </div>,
        <div className="h-full bg-zinc-900 p-8 rounded-xl  mx-5 lg:mx-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, nam architecto rerum dolorum quas ex nulla delectus quasi facere. Modi quasi, perspiciatis obcaecati quas voluptatem assumenda beatae id laboriosam aperiam recusandae qui quibusdam excepturi hic ratione ab, voluptatum officiis ipsum quisquam asperiores nam sunt explicabo quod vitae. Iste, iure voluptatem.
            </p>
            <a className="inline-flex items-center">
                <picture>
                    <img alt="testimonial" src="https://as1.ftcdn.net/v2/jpg/01/48/87/16/1000_F_148871674_wRvPIuNEwxUI1jHadVrb5uoV7C2Sv27i.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                </picture>
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">Ash Oxford</span>
                    <span className="text-gray-500 text-sm">Client from UK</span>
                </span>
            </a>
        </div>
    ];



    return (
        <div id='testimonials'>
            <div className='bg-black'>
                <div className="max-w-5xl mx-auto px-5 2xl:px-0">
                    <section className="text-zinc-400 bg-black">
                        <div data-aos="fade-up" data-aos-duration="1500" className="py-24 lg:pt-44 mx-auto">
                            <div className="flex justify-center">
                                <h1 className="text-3xl  font-semibold text-white mb-5 text-center gold-gradient-text">What Our Client Says</h1>
                            </div>
                            <p className='text-center lg:w-3/5 mx-auto text-sm pb-10'>
                                Our clients love us! Read what they have to say below.
                            </p>
                            <div className="flex flex-col lg:flex-row gap-5">

                                {/* SLIDER */}
                                <AliceCarousel
                                    mouseTracking

                                    items={items}
                                    autoPlayInterval={2000}
                                    autoPlayDirection="ltr"
                                    autoPlay={true}
                                    infinite={true}
                                    disableButtonsControls={true}

                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </div>
    )
}

export default Testimonials