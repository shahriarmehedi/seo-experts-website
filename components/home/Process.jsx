import React from 'react'

function Process() {
    return (
        <div id='proces' className='bg-black text-white pb-32'>
            <section className=" max-w-7xl mx-auto px-7 2xl:px-0">

                <h2 className='text-3xl font-semibold text-center pt-14 pb-5 text-white'>
                    Our Process
                </h2>
                <p className='text-center lg:w-3/5 mx-auto text-sm text-gray-400'>
                    A Strategic Approach to SEO Success and Business Growth
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 pt-20'>

                    <div className='flex flex-col justify-center gap-5'>
                        <h2 className='text-xl font-semibold text-sky-500'>01. Discovery and Analysis</h2>
                        <p className='text-gray-400'>
                            The process of elevating your business begins with a conversation. We start by discussing your business, goals, and the intended customers. We conduct an in-depth analysis of your current SEO standing along with your competitors and market trends. This allows us lay a foundation for your unique SEO strategy. <br /> <br /> During this step, we are also able pinpoint future challenges, thus giving ourselves extra time to prepare.
                        </p>
                        <br /> <br />
                        <h2 className='text-xl font-semibold text-sky-500'>02. Strategy Development and Implementation</h2>
                        <p className='text-gray-400'>
                            After understanding the initial demands of your business, we begin developing a comprehensive SEO strategy that will fit the plans and goals you have set. <br /> <br /> This consists of keyword identification, link building, HTML optimization, content mapping and so on. Whether you’re availing our Google SEO or Shopify SEO services, we execute the SEO strategy utmost dedication.
                        </p>
                        <br /> <br />
                        <h2 className='text-xl font-semibold text-sky-500'>03. Continuous Monitoring and Optimization</h2>
                        <p className='text-gray-400'>
                            SEO is a constant activity, and we do all that is necessary to make your business successful in the long run. We track your website’s performance by applying the best analytical tools and metrics. <br /> <br /> By tracking key performance indicators (KPIs) and metrics, our team is able to analyze the impact of employed SEO strategies and make adjustments when needed.
                        </p>
                    </div>





                    <div>
                        <img src='https://plus.unsplash.com/premium_vector-1721134017127-d915979eaebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pc3Npb258ZW58MHx8MHx8fDA%3D' alt='about us' className='w-full h-full object-cover rounded-lg' />
                    </div>


                </div>


                <div className='flex justify-center items-center flex-col pt-10'>
                    <h2 className='text-3xl font-semibold text-center pt-28 pb-10 lg:w-1/2 mx-auto'>Are you Looking for a SEO Strategist Who Would Not Break the Bank?</h2>

                    <button className='bg-sky-500 border-sky-500 px-7 py-3 rounded-full border hover:border-opacity-70 hover:border-sky-500 hover:bg-black text-white transition duration-200'>
                        Kickstart your SEO Journey: Get a Free Audit
                    </button>

                </div>

            </section>

        </div>
    )
}

export default Process