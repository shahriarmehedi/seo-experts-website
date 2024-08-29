'use client'

import React from 'react'

export default function singleBlog() {


    // ----------- BLOG DATA COMES FROM HERE ------------
    const blog = {

        title: "The Catalyzer",
        category: "CATEGORY NAME HERE",
        image: "https://cloudify.co/wp-content/uploads/2022/09/Blog-banners8-1-scaled.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
        cta: "Read More",
        link: "https://www.google.com/",
        blogImage: "http://www.techelium.in/wp-content/uploads/2015/10/blog-banner.jpg",
        blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur animi porro voluptatum vero? Error reiciendis incidunt laborum aspernatur perferendis, impedit saepe ad! Quod voluptatibus laudantium facere non veritatis corporis eveniet sapiente. Tempore, expedita ullam. Ab tenetur inventore repudiandae id? Officia aut eveniet veritatis vel suscipit, quisquam laudantium quo voluptatum, impedit repudiandae maiores magnam dolorum debitis, fugit architecto quidem nemo laboriosam nulla. Iure odit unde at facilis iste deserunt placeat quisquam consequuntur cum nostrum hic, adipisci consequatur voluptatum. Impedit modi tempora iusto nam iure eos vero officiis quasi aliquam ut? Harum praesentium, sit facilis aperiam asperiores modi magnam dolore officia. Distinctio aliquam hic nisi dignissimos nihil. Laborum necessitatibus optio, sint porro consequuntur, cum sunt doloremque laboriosam totam ullam, aperiam tenetur officia consectetur nam corporis inventore delectus voluptas! Vero, doloribus. Ut maiores iusto aperiam adipisci libero minus ex, cupiditate, facere, qui dignissimos quaerat obcaecati. Cupiditate temporibus rem quidem totam molestiae hic beatae non dicta eos vitae culpa, veritatis odit sit magni optio iste repellendus? Ipsam totam dolor recusandae alias odio nisi eveniet nesciunt quidem quia ea deleniti ipsum rerum laudantium pariatur voluptatum exercitationem ab provident odit possimus blanditiis.",
        read: "6.5k",
        comments: "20",
        by: "John Doe",
        date: "12th May 2021",
        time: "5 min read",
        authorImage: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    }

    return (
        <div>


            {/* Single blog page tailwindcss */}
            <div className="bg-black text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="text-base text-sky-500 font-semibold tracking-wide uppercase">{blog.category}</p>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {blog.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            {blog.description}
                        </p>

                        {/* blog image and text */}
                        <div className="mt-10">
                            <div className="mt-6">
                                <div className="mt-6">
                                    <div className='mb-10'>
                                        <img className="h-96 w-full object-cover" src={blog.blogImage} alt="" />
                                    </div>

                                    <div className='pb-10 flex flex-col lg:flex-row justify-between items-center'>
                                        <div className="mt-6 flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src={blog.authorImage} alt="" />
                                            </div>
                                            <div className="ml-3 text-left">
                                                <p className="text-sm font-medium text-gray-900">
                                                    By <span className=' text-sky-500 font-semibold'>{blog.by}</span>
                                                </p>
                                                <div className="flex space-x-1 text-sm text-gray-500">
                                                    <time dateTime="2020-03-16">
                                                        {blog.date}
                                                    </time>
                                                    <span aria-hidden="true">
                                                        &middot;
                                                    </span>
                                                    <span>
                                                        {blog.time}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Share icons */}
                                        <div className="flex flex-col lg:flex-row mt-4 gap-2 opacity-60">
                                            <div className='flex justify-center items-center pl-3'>
                                                <h3>
                                                    Share this post on:
                                                </h3>
                                            </div>
                                            <div className='flex gap-2'>
                                                <div className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                                    <a href='#' className="text-sky-500">
                                                        {/* facebook icon */}
                                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                                    <a href='#' className="text-sky-500">
                                                        {/* twitter svg icon */}
                                                        <picture>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="" className='w-5 h-5' />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                                    <a href='#' className="text-sky-500">
                                                        {/* twitter svg icon */}
                                                        <picture>
                                                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" className='w-5 h-5' />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                                    <a href='#' className="text-sky-500">
                                                        {/* whatsapp svg icon */}
                                                        <picture>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" alt="" className='w-5 h-5' />
                                                        </picture>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="space-y-6">
                                        <div className="text-lg leading-7 font-medium space-y-1 text-justify">
                                            <p className="text-gray-700">{blog.blogText}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                {/* visitor svg */}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    <path fillRule="evenodd" d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" />
                                                </svg>

                                                <span className="font-medium text-gray-900">
                                                    {blog.read}
                                                </span>
                                                <span className="sr-only">read</span>
                                            </div>


                                        </div>
                                        <div>
                                            {/* comment input box */}
                                            <div className="mt-6">
                                                <label htmlFor="comment" className="sr-only">Comment</label>
                                                <textarea id="comment" name="comment" rows={4} className="shadow-sm focus:ring-sky-500 focus:border-sky-500 mt-1 block w-full sm:text-sm border-gray-300 border-[1px] rounded-md p-3" placeholder="Add a comment" defaultValue={""} />
                                                <div className="mt-6 flex justify-end">
                                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-sky-500 bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                                        Post Comment
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>


        </div>
    )
}