import React from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'



function Footer() {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-zinc-800 text-white">
                <div className="grid grid-flow-col gap-4 py-3">
                    <div className='flex flex-wrap gap-5 lg:flex-row justify-center text-zinc-300'>
                        <Link href='/' className='hover:text-sky-500 transition duration-200'>Home </Link>
                        <Link href='#about' className='hover:text-sky-500 transition duration-200'>About us </Link>
                        <Link href='#howitworks' className='hover:text-sky-500 transition duration-200'>How It Works</Link>
                        <Link href='#testimonials' className='hover:text-sky-500 transition duration-200'>Testimonials</Link>
                        <Link href='#platforms' className='hover:text-sky-500 transition duration-200'>Platforms</Link>
                        <Link href='#pricing' className='hover:text-sky-500 transition duration-200'>Pricing</Link>
                        <Link href='#faq' className='hover:text-sky-500 transition duration-200'>FAQ</Link>

                    </div>
                </div>
                <div className='flex gap-3'>

                    <SocialIcon
                        url="https://www.facebook.com/trademanagerapp"
                        target="_blank"
                        bgColor="#fff"
                        fgColor="#000"
                        style={{ height: 40, width: 40 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/trademanager"
                        target="_blank"
                        bgColor="#fff"
                        fgColor="#000"
                        style={{ height: 40, width: 40 }}
                    />
                    <SocialIcon
                        url="https://www.instagram.com/trademanagerapp/"
                        target="_blank"
                        bgColor="#fff"
                        fgColor="#000"
                        style={{ height: 40, width: 40 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/company/trademanager/"
                        target="_blank"
                        bgColor="#fff"
                        fgColor="#000"
                        style={{ height: 40, width: 40 }}
                    />
                    <SocialIcon
                        url="https://www.tiktok.com/@trademanager"
                        target="_blank"
                        bgColor="#fff"
                        fgColor="#000"
                        style={{ height: 40, width: 40 }}
                    />
                </div>
                <div className='text-zinc-500 pt-2'>
                    <p>Copyright © 2024 - All right reserved by <span className='text-sky-700'>SEO EXPERT</span> </p>
                </div>

            </footer>
            <div className="flex lg:justify-end pt-5 lg:pt-0 pb-3 justify-center bg-zinc-900">
                <h1 className='text-xs font-light pt-2 lg:pr-5 text-zinc-400 opacity-60'>
                    Developed by <a href="https://www.fiverr.com/metrocoder">
                        <span className='text-[#64ee6f] hover:text-[#f5fff5] opacity-70 hover:opacity-90 transition duration-200'>Metrocoder</span>
                    </a>
                </h1>
            </div>
        </div>
    )
}

export default Footer