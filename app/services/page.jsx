import React from 'react'
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";



function page() {


    const services = [
        {
            id: 1,
            title: 'Wordpress SEO',
            description: 'SEO Experts will take your WordPress site to its full potential. We fine-tune all the aspects of your site - ranging from content to technical features. Our foremost aim is to make your site accessible to users and, at the same time, be search engine friendly. We optimize the structure of your site, increase loading speed, and install vital SEO plugins. Whether you have a blog site or an online store, we will take action, keeping in mind your specific needs. ',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 2,
            title: 'Google SEO',
            description: 'Google dominates the search engine market, and our Google SEO service ensures that your website stands out in search results. We use promising and effective approaches including keyword optimization, content writing, as well as technical optimization. With a thorough understanding of Google’s algorithms and user intent, we increase your site’s relevancy and credibility. Our main focus is to make your business successful in the constantly evolving digital landscape. ',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 3,
            title: 'Local SEO',
            description: 'If your business relies on local customers, our Local SEO service is essential. We will work on local backlinks and ensure that your business is located in geo-targeted keywords so that it can feature in local search results. We will promote your site using different strategies including positive engagement and community building. SEO Experts will optimize your Google Business Profile to make sure you have control over your local customer base. ',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 4,
            title: 'Shopify SEO',
            description: 'We strive to make every page of your Shopify store SEO-friendly. Product pages, category pages, and the overall structure of your site - we optimize it all to help your online store thrive. At SEO Experts, we pay attention to keyword usage, content, and site speed to give your Shopify store a boost of visibility. Our mission is to drive traffic and turn visitors into buyers.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 5,
            title: 'Squarespace SEO',
            description: 'Our Squarespace SEO service will improve the layout and content of your site together with various other factors that would lead to an improvement of the ranking of your site on search engine. We increase the mobile interface of your site, boost the loading time of the page, and optimize the site for better SEO. ',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 6,
            title: 'Content Creation/Blogging',
            description: 'Content is king, and we help you create content that is not only engaging but also SEO-friendly. Our content creators will help you rank on the first page of Google search results. We will optimize your website to increase your organic traffic. We will also help you create a blog that will attract more visitors to your site. ',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },


    ]



    return (
        <div>
            <Navbar />
            <div id='services' className='bg-black text-white'>
                <div className='max-w-7xl mx-auto py-20 lg:py-32 px-7 2xl:px-0'>
                    <h2 className='text-2xl font-bold text-center pb-5 text-white'>
                        Services We Offer
                    </h2>
                    {/* horizontal line */}
                    <div className='w-24 h-[2px] gradient-bg rounded-md mx-auto mb-14 opacity-70'></div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                        {
                            services.map((service, idx) => (
                                <div key={idx} className='bg-white bg-opacity-5 hover:border-opacity-50 transition duration-500 cursor-pointer group  border border-sky-500 border-opacity-20 p-7 rounded-xl shadow-md hover:translate-y-[-5px]'>
                                    <div className="flex flex-col gap-2">
                                        <div className='bg-sky-500 p-1 w-[37px] rounded-lg bg-opacity-10 text-sky-500 group-hover:text-white group-hover:bg-opacity-100  group-hover:border-gray-800 group-hover:border-opacity-50 transition duration-300'>
                                            {service.icon}
                                        </div>
                                        <h3 className='text-xl text-white text-opacity-80 group-hover:text-sky-500 transition duration-500 '>
                                            {service.title}
                                        </h3>

                                    </div>
                                    <p className='
                                mt-3 text-sm text-gray-500 group-hover:text-gray-200 transition duration-500'>
                                        {service.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                    {/* View Details */}
                    <div className='text-center mt-14'>
                        <button className='hover:bg-sky-500 border-sky-500 px-10 py-3 rounded-full border border-opacity-70 hover:border-opacity-70 hover:border-sky-500 bg-black text-white transition duration-200'>
                            Get Your Free SEO Audit & Consultation
                        </button>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page