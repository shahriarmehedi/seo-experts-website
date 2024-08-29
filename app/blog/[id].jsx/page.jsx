'use client'
import React from 'react'
import SingleBlog from "@/components/blog/SingleBlog";

function page({ params }) {

    const { id } = params

    return (
        <div>
            <SingleBlog />
        </div>
    )
}

export default page