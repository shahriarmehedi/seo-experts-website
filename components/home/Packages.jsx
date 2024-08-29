import React from 'react'

function Packages() {
    return (
        <div id='pricing' className='bg-black text-white pt-20'>
            <section className="text-zinc-300 body-font overflow-hidden max-w-6xl mx-auto px-7 2xl:px-0">

                <h2 className='text-3xl font-semibold text-center pt-14 pb-5 text-white'>
                    Packages
                </h2>
                <p className='text-center lg:w-3/5 mx-auto text-sm'>
                    Our pricing is competitive and affordable, reflecting the value we provide. See bellow for a pricing comparison to other packages.
                </p>


                <div className="max-w-7xl px-5 py-20 mx-auto flex flex-wrap">
                    <div className="w-full mb-5 lg:mb-0 lg:w-1/4 lg:mt-48 ">
                        <div className="mt-px border-t border-zinc-800 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                            <p className="bg-zinc-900 text-zinc-200 h-12 text-center px-4 flex items-center justify-start -mt-px">On-page SEO</p>
                            <p className="text-zinc-200 h-12 text-center px-4 flex items-center justify-start">Local SEO</p>
                            <p className="bg-zinc-900 text-zinc-200 h-12 text-center px-4 flex items-center justify-start">Monthly SEO report</p>
                            <p className="text-zinc-200 h-12 text-center px-4 flex items-center justify-start">Content creation/marketing</p>
                            <p className="bg-zinc-900 text-zinc-200 h-12 text-center px-4 flex items-center justify-start">Off-page SEO</p>
                            <p className="text-zinc-200 h-12 text-center px-4 flex items-center justify-start">Link building</p>

                        </div>

                    </div>
                    <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-zinc-800 rounded-lg">
                        <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-zinc-800 lg:border-none rounded-lg lg:rounded-none">
                            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                                <h3 className="tracking-widest text-white">BASIC</h3>
                                <h2 className="text-5xl text-zinc-200 font-medium flex items-center justify-center leading-none mb-4 mt-2">$500
                                    <span className="text-zinc-400 text-base ml-1">/Month</span>
                                </h2>
                                {/* <span className="text-sm text-zinc-400">Strategy Builder +</span>
                                <span className="text-sm text-zinc-400">Manual Alerts</span> */}
                            </div>
                            <p className="bg-zinc-900 text-zinc-300 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-zinc-800">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="text-zinc-300 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="bg-zinc-900 text-zinc-300 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="h-12 text-zinc-300 px-6 text-center leading-relaxed flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-zinc-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>
                            <p className="bg-zinc-900 text-zinc-300 text-center h-12 flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-zinc-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>
                            <p className="text-zinc-300 text-center h-12 flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-zinc-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>

                            <div className="border-t border-zinc-800 p-6 text-center rounded-bl-lg">
                                <button className="flex items-center mt-auto text-white bg-sky-500  border-0 py-3 px-4 w-full focus:outline-none hover:bg-sky-600 rounded transition duration-200 hover:text-white">Get Started
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border border-sky-500 rounded-lg border-opacity-50 relative">
                            <span className="bg-sky-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                                <h3 className="tracking-widest text-white">ADVANCED</h3>
                                <h2 className="text-5xl text-zinc-200 font-medium flex items-center justify-center leading-none mb-4 mt-2">$1,000
                                    <span className="text-zinc-400 text-base ml-1">/Month</span>
                                </h2>
                                <span className="text-sm text-zinc-400">4 blog posts/month</span>
                                {/* <span className="text-sm text-zinc-400">4 blog posts/month</span> */}
                            </div>
                            <p className="bg-zinc-900 text-zinc-300 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-zinc-800">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="text-zinc-300 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="bg-zinc-900 text-zinc-300 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="h-12 text-zinc-300 px-6 text-center leading-relaxed flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="bg-zinc-900 text-zinc-300 text-center h-12 flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-zinc-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>
                            <p className="text-zinc-300 text-center h-12 flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-zinc-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>

                            <div className="p-6 text-center border-t border-zinc-800">
                                <button className="flex items-center mt-auto text-white bg-sky-500 border-0 py-3 px-4 w-full focus:outline-none hover:bg-sky-600 rounded transition duration-200 hover:text-white">Get Started
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div className="lg:w-1/3 w-full lg:mt-px border-2 border-zinc-800 lg:border-none rounded-lg lg:rounded-none">
                            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                                <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                                    <h3 className="tracking-widest text-white">PREMIUM</h3>
                                    <h2 className="text-5xl text-zinc-200 font-medium flex items-center justify-center leading-none mb-4 mt-2">$2,000
                                        <span className="text-zinc-400 text-base ml-1">/Month</span>
                                    </h2>
                                    <span className="text-sm text-zinc-400">
                                        8 blog posts/month
                                    </span>
                                    <span className="text-sm text-zinc-400">
                                        10 links/month
                                    </span>

                                </div>

                            </div>
                            <p className="bg-zinc-900 text-zinc-300 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-zinc-800">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="text-zinc-300 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="bg-zinc-900 text-zinc-300 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="h-12 text-zinc-300 px-6 text-center leading-relaxed flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="bg-zinc-900 text-zinc-300 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="text-zinc-300 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-sky-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>

                            <div className="p-6 text-center border-t border-zinc-800">
                                <button className="flex items-center mt-auto text-white bg-sky-500 border-0 py-3 px-4 w-full focus:outline-none hover:bg-sky-600 rounded transition duration-200 hover:text-white">Get Started
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Packages