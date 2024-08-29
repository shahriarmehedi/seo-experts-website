import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import AllBlog from "@/components/blog/AllBlog";
function page() {


    return (
        <div>
            <Navbar />
            <AllBlog />
            <Footer />
        </div>
    )
}

export default page