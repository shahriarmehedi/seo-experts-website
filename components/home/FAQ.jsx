import React from 'react'

function FAQ() {
    return (
        <div id='faq' className='bg-black text-white pt-20 pb-32'>
            <section className=" max-w-7xl mx-auto px-7 2xl:px-0">

                <h2 className='text-3xl font-semibold text-center pt-14 pb-5 text-white'>
                    Frequently Asked Questions
                </h2>
                <p className='text-center text-sm'>
                    Got questions? We've got answers. If you have some other questions, feel free to send us an email at
                </p>

                <div className='flex flex-col pt-20'>
                    <div className="collapse collapse-arrow bg-zinc-900 mb-1">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            How long does it take to see results from SEO?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>
                                SEO is a long-term strategy, and while some improvements may be seen within the first
                                few weeks, it generally takes about 3 to 6 months to start seeing significant results. This
                                time frame can vary based on factors such as your website’s current condition, the
                                competitiveness of your industry, and the specific SEO strategies we implement.
                                Remember, SEO is about sustainable growth, so the results you see will continue to
                                improve over time as we optimize your site.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-zinc-900 mb-1">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            Can I customize my SEO package?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>
                                Yes, absolutely! We understand that every business is unique, so we offer flexible and
                                customizable SEO packages to suit your specific needs and goals. Whether you need
                                more focus on local SEO, content creation, or technical optimization, we’ll work together
                                to create a plan that fits your business and budget.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-zinc-900 mb-1">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            What happens if I want to cancel my services?

                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>
                                If you decide to cancel your services, you can do so at any time with no hidden fees.
                                However, SEO results are cumulative, and stopping the service may slow down the
                                momentum we've built. We’ll ensure a smooth transition and provide you with a final
                                report showing the progress made. Simply notify us, and we’ll handle the cancellation
                                process promptly and professionally.

                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-zinc-900 mb-1">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            How do you measure the success of your SEO efforts?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>
                                We measure success using a variety of key metrics such as organic traffic growth,
                                keyword rankings, domain authority, and conversion rates. We also track improvements
                                in your website’s performance, including bounce rate and time spent on the site. You’ll
                                receive regular reports outlining these metrics so you can clearly see the impact of our
                                SEO efforts and how they’re driving results for your business.
                            </p>
                        </div>
                    </div>
                </div>



            </section>
        </div>
    )
}

export default FAQ