'use client'


import React from 'react'
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';



function page() {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        Swal.fire({
            title: 'Success',
            text: 'Your message has been sent, we will get back to you soon',
            icon: 'success',
            confirmButtonText: 'Ok'
        })

        // clear the form
        reset()
    }







    return (
        <div>
            <Navbar />
            <div className='bg-zinc-900 py-24 text-white'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col items-center gap-10'>
                        <div className='text-center'>
                            <h1 className='text-zinc-200 text-2xl font-semibold text-center pt-5 pb-10'>Get A Quote</h1>
                        </div>
                    </div>


                    <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/2'>
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <label className='text-zinc-200'>Name</label>
                                    <input
                                        type='text'
                                        className='w-full bg-zinc-800 p-3 rounded-lg'
                                        placeholder='Enter your name'
                                        {...register('name', { required: true })}
                                    />
                                    {errors.name && <p className='text-red-500'>This field is required</p>}
                                </div>
                                <div>
                                    <label className='text-zinc-200'>Email</label>
                                    <input
                                        type='email'
                                        className='w-full bg-zinc-800 p-3 rounded-lg'
                                        placeholder='Enter your email'
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && <p className='text-red-500'>This field is required</p>}
                                </div>
                                <div>
                                    <label className='text-zinc-200'>Phone</label>
                                    <input
                                        type='text'
                                        className='w-full bg-zinc-800 p-3 rounded-lg'
                                        placeholder='Enter your phone number'
                                        {...register('phone', { required: true })}
                                    />
                                    {errors.phone && <p className='text-red-500'>This field is required</p>}
                                </div>
                                <div>
                                    <label className='text-zinc-200'>Message</label>
                                    <textarea
                                        className='w-full bg-zinc-800 p-3 rounded-lg'
                                        placeholder='Enter your message'
                                        {...register('message', { required: true })}
                                    />
                                    {errors.message && <p className='text-red-500'>This field is required</p>}
                                </div>
                                <button
                                    type='submit'
                                    className='bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition duration-200'>
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>





                </div>
                <div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page