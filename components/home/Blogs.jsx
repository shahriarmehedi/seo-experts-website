import Link from 'next/link'

export default function Blogs() {


    const blogs = [
        {
            id: 1,
            title: "The blog title goes here with somewhat long title to test the responsiveness",
            category: "CATEGORY",
            image: "https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
            cta: "Read More",
            link: "https://www.google.com/",
            read: "6.5k",
            comments: "20"
        },
        {
            id: 2,
            title: "The blog title goes here with somewhat long title to test the responsiveness",
            category: "CATEGORY",
            image: "https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
            cta: "Read More",
            link: "https://www.google.com/",
            read: "6.5k",
            comments: "20"
        },
        {
            id: 3,
            title: "The blog title goes here with somewhat long title to test the responsiveness",
            category: "CATEGORY",
            image: "https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
            cta: "Read More",
            link: "https://www.google.com/",
            read: "6.5k",
            comments: "20"
        }
    ]


    return (
        <div className='bg-black text-white py-10'>
            <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8 relative z-20 py-5 lg:py-10">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl  font-bold title-font mb-4 text-sky-500">Blogs</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        blogs.map((blog) => {
                            return (
                                <div className="p-4 lg:w-1/3">
                                    <div className="h-full border-2 border-sky-500 border-opacity-50 rounded-lg overflow-hidden">
                                        <picture><img className=" lg:h-60 md:h-44 w-full object-cover object-center" src={blog.image} alt="blog" /></picture>
                                        <div className="p-6">
                                            <h2 className=" title-font text-sm text-gray-400 mb-1">
                                                BLOGS | MARCH 30, 2023
                                            </h2>
                                            <h1 className=" text-lg font-semibold text-gray-200 mb-3">{blog.title}</h1>
                                            <div className="flex items-center flex-wrap ">
                                                <Link className="text-sky-500 text-lg font-semibold inline-flex items-center md:mb-2 lg:mb-0" href={`/blog/${blog.id}`}> {blog.cta}
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <Link href="/blog">
                    <div className='flex justify-center'>
                        <button className='mt-16 text-white bg-sky-500 border-0 py-3 px-10 focus:outline-none hover:bg-sky-600 transition duration-200 rounded-full '>
                            View All Blogs
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}