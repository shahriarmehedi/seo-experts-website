'use client'

import Link from 'next/link'
import React from 'react'


function Navbar() {



    //mobile menu toggle

    const [menuOpen, setMenuOpen] = React.useState(false)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <div className='bg-black sticky lg:static top-0 z-50'>
            <nav className='max-w-7xl mx-auto px-5 2xl:px-0 py-2 flex justify-between items-center'>
                <Link href='/' className='text-white'>
                    <img src='/logo.jpeg' alt='logo' className='w-20 h-20' />
                </Link>

                <div className="lg:flex hidden gap-5 items-center">
                    <Link href='/' className='hover:text-sky-500 transition duration-200 text-gray-200'>Home </Link>
                    <Link href='/blog' className='hover:text-sky-500 transition duration-200 text-gray-200'>Blog</Link>

                    <Link href='/get-a-quote' className='hover:text-sky-500 transition duration-200'>
                        <button className='bg-sky-500 border-sky-500 px-7 py-2 rounded-full border hover:border-opacity-70 hover:border-sky-500 hover:bg-black text-white transition duration-200'>
                            Get A Quote
                        </button>
                    </Link>
                </div>


                <div
                    onClick={handleMenu}
                    className='lg:hidden cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>

                <div
                    className={`lg:hidden fixed top-0 left-0 p-10 w-full h-full bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >


                    <div
                        onClick={handleMenu}
                        className='flex justify-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>


                    <div
                        onClick={handleMenu}
                        className='flex flex-col gap-5 text-white justify-center'>
                        <Link href='/' className='hover:text-sky-500 transition duration-200'>Home </Link>
                        <Link href='/blog' className='hover:text-sky-500 transition duration-200'>Blog </Link>


                        <Link href='/get-a-quote' className='hover:text-sky-500 transition duration-200'>
                            <button className='bg-white text-black px-7 py-2 rounded-full border hover:border-opacity-70 hover:border-sky-500 hover:bg-black hover:text-white transition duration-200'>Get A Quote</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar



// import Link from 'next/link'

// function Navbar() {
//     return (
//         <nav className=''>
//             <div className='flex justify-between items-center max-w-7xl mx-auto'>
//                 <img src='/logo.jpeg' alt='logo' className='w-[100px]' />
//                 <div className='flex'>
//                     <Link href='/' className='text-white mr-4'>Home</Link>
//                     <Link href='/about' className='text-white'>About</Link>
//                 </div>
//             </div>
//             <hr />
//         </nav>
//     )
// }

// export default Navbar