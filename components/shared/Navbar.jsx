import Link from 'next/link'

function Navbar() {
    return (
        <nav className=''>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <img src='/logo.jpeg' alt='logo' className='w-[100px]' />
                <div className='flex'>
                    <Link href='/' className='text-white mr-4'>Home</Link>
                    <Link href='/about' className='text-white'>About</Link>
                </div>
            </div>
            <hr />
        </nav>
    )
}

export default Navbar