import React from 'react'

function Services() {


    const services = [
        {
            id: 1,
            title: 'Google SEO',
            description: ' We help you rank on the first page of Google search results. Our SEO experts will optimize your website to increase your organic traffic.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 2,
            title: 'Wordpress SEO',
            description: 'We specialize in optimizing WordPress websites for search engines. Our SEO experts will help you rank higher on Google.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 3,
            title: 'Local SEO',
            description: ' We help you rank on the first page of Google search results. Our SEO experts will optimize your website to increase your organic traffic.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 4,
            title: 'Shopify SEO',
            description: 'We specialize in optimizing Shopify websites for search engines. Our SEO experts will help you rank higher on Google.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 5,
            title: 'Content Creation/Blogging',
            description: 'We help you rank on the first page of Google search results. Our SEO experts will optimize your website to increase your organic traffic.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 6,
            title: 'Backlink Building',
            description: 'We specialize in backlink building. Our SEO experts will help you get high-quality backlinks to your website to increase your organic traffic.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 7,
            title: 'Local Keyword Research',
            description: ' We specialize in local keyword research. Our SEO experts will help you find the best keywords to target for your local business.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 8,
            title: 'Local Listing & Citation Services',
            description: ' We specialize in local listing and citation services. Our SEO experts will help you get your business listed on local directories and websites.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        },
        {
            id: 9,
            title: 'Google My Business Optimization',
            description: 'We specialize in Google My Business optimization. Our SEO experts will help you optimize your GMB listing to increase your local search visibility.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        }

    ]




    return (
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
                                <p className='mt-3 text-sm text-gray-500 group-hover:text-gray-200 transition duration-500'>
                                    {service.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services