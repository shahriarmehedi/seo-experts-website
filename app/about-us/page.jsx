import React from 'react'
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

function page() {
    return (
        <div>
            <Navbar />

            {/* About us */}

            <div className='bg-black text-white'>
                <div className='max-w-7xl mx-auto px-5 2xl:px-0 py-20'>
                    <h1 className='text-3xl font-bold text-center mb-10'>About Us</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
                        <div>
                            <img src='https://plus.unsplash.com/premium_photo-1682124886753-ea98cc90c611?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='about us' className='w-full h-full object-cover rounded-lg' />
                        </div>

                        <div className='flex flex-col justify-center gap-5'>
                            <h2 className='text-xl font-semibold text-zinc-300'>Our Story </h2>
                            <p className='text-gray-400 pt-5'>
                                Founded in the heart of Toronto, <span className='text-white'>SEO Experts</span> began with a simple mission: helping businesses rise in the digital marketplace. Originally established as a team of ambitious <span className='text-white'>SEO Experts</span>, it has become one of the most successful agencies now targeting different spheres. <br /> <br /> <br />
                                Our mission was initially founded on the idea that even the smallest business must have a powerful internet image. Over the years, we have adapted our strategies to the latest trends. However, one thing has remained consistent: our principle of offering professional and efficient SEO solutions. <br /> <br /> <br />
                                Numerous success stories later, we are committed to giving the best service to our clients. SEO Experts began with a dream but gradually built a solid foundation of success through client satisfaction and gained popularity as a <span className='text-sky-500'>SEO expert in Toronto</span>.

                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
                        <div>
                            <img src='https://plus.unsplash.com/premium_vector-1682308602228-47e6defaa118?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='about us' className='w-full h-full object-cover rounded-lg' />
                        </div>

                        <div className='flex flex-col justify-center gap-5'>
                            <h2 className='text-xl font-semibold text-zinc-300'>Our Vision </h2>
                            <p className='text-gray-400 pt-5'>
                                <span className='text-white'>SEO Experts</span> has a straightforward mission: lead businesses into increasing their presence online, getting to their target market, and succeed in the continuously evolving marketplace. <br /> <br />
                                <span className='text-sky-500'>This vision is based upon three pillars: innovation, learning, and customer service. </span> We not only strive to remain at par with emerging trends, but also to shape them. Our team diligently navigates the SEO landscape to find the most suitable solutions for our clients.

                            </p>
                        </div>
                    </div>


                    <div>
                        <h2 className='text-4xl font-semibold text-center pt-28 pb-14'>Your Success is Our Mission</h2>

                    </div>



                    <div className='grid grid-cols-1 md:grid-cols-2 gap-14 mt-16'>

                        <div className='flex flex-col justify-center gap-5'>
                            <h2 className='text-xl font-semibold text-sky-500'>Proven Expertise</h2>
                            <p className='text-gray-400'>
                                <span className='text-white'>SEO Experts</span> comprise a team of seasoned professionals. They are not only aware of changing industry trends but also know how to stay ahead of them. Our years of experience and our brilliant team of specialists can help your business get to the top, attract organic traffic, and turn site visitors into customers.
                            </p>
                            <br /> <br />
                            <h2 className='text-xl font-semibold text-sky-500'>Tailored Strategies </h2>
                            <p className='text-gray-400'>
                                No two businesses are alike. Therefore, <span className='text-white'>SEO Experts</span>  offers a different action plan for each of its client. We design strategies that best match the needs of your business. Our result oriented team has one mission: provide you with the results that will have an impact in your business. Following this approach, we show the same enthusiasm and motivation for each project, with the shared goals of visibility and optimization.
                            </p>
                            <br /> <br />
                            <h2 className='text-xl font-semibold text-sky-500'>Transparent Communication</h2>
                            <p className='text-gray-400'>
                                We understand how overwhelming it is to handover the reins of your business to a third party. To ease this worry, <span className='text-white'>SEO Experts</span> thrives to keep all our clients informed at every given point in their SEO campaign. We ensure transparency through frequent updates, reporting, and analysis of your SEO campaign results.
                            </p>
                        </div>





                        <div>
                            <img src='https://plus.unsplash.com/premium_vector-1721134017127-d915979eaebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pc3Npb258ZW58MHx8MHx8fDA%3D' alt='about us' className='w-full h-full object-cover rounded-lg' />
                        </div>


                    </div>


                    <div className='flex justify-center items-center flex-col pb-20 pt-10'>
                        <h2 className='text-3xl font-semibold text-center pt-28 pb-10'>Looking for a SEO consultant in Toronto?</h2>

                        <button className='bg-sky-500 border-sky-500 px-7 py-2 rounded-full border hover:border-opacity-70 hover:border-sky-500 hover:bg-black text-white transition duration-200'>
                            You’ve Found Us: Get in Touch
                        </button>

                    </div>




                </div>
            </div>



            <Footer />
        </div>
    )
}

export default page