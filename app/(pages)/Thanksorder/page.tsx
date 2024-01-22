'use client'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

function  Thanksorder() {
    const searchParams = useSearchParams()
    const { user } = useUser();
    const date = new Date();

    return (
        <section className="flex items-center py-16 bg-gray-100 md:py-20 font-poppins  ">
            <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto bg-white border rounded-md   md:py-10 md:px-10">
                <div>
                    <h1 className="px-4 mb-8 text-2xl font-semibold tracking-wide text-gray-700 ">
                        Thank you. Your order has been received.{" "}
                    </h1>
                    <div className="flex border-b border-gray-200  items-stretch justify-start w-full h-full px-4 mb-8 md:flex-row xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex items-start justify-start flex-shrink-0">
                            <div className="flex items-center justify-center w-full pb-6 space-x-4 md:justify-start">
                                <img
                                    src={user?.imageUrl}
                                    className="object-cover w-16 h-16 rounded-full"
                                    alt="avatar"
                                />
                                <div className="flex flex-col items-start justify-start space-y-2">
                                    <p className="text-lg font-semibold leading-4 text-left text-gray-800 ">
                                        {user?.fullName}
                                    </p>

                                    <p className="text-sm leading-4 cursor-pointer ">
                                        {user?.primaryEmailAddress?.emailAddress}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center pb-4 mb-10 border-b border-gray-200 ">

                        <div className="w-full px-4 mb-4 md:w-1/4">
                            <p className="mb-2 text-sm leading-5 text-gray-600  ">
                                Date:{" "}
                            </p>
                            <p className="text-base font-semibold leading-4 text-gray-800 ">
                                {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
                            </p>
                        </div>
                        <div className="w-full px-4 mb-4 md:w-1/4">
                            <p className="mb-2 text-sm font-medium leading-5 text-gray-800  ">
                                Total:{" "}
                            </p>
                            <p className="text-base font-semibold leading-4 text-blue-600 ">
                                {Number(searchParams.get('total'))}$
                            </p>
                        </div>

                    </div>
                    <div className="px-4 mb-10">
                        <div className="flex flex-col items-stretch justify-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                            <div className="flex flex-col w-full space-y-6 ">
                                <h2 className="mb-2 text-xl font-semibold text-gray-700 ">
                                    Order details
                                </h2>
                                <div className="flex flex-col items-center justify-center w-full pb-4 space-y-4 border-b border-gray-200 ">
                                    <div className="flex justify-between w-full">
                                        <p className="text-base leading-4 text-gray-800 ">
                                            Subtotal
                                        </p>
                                        <p className="text-base leading-4 text-gray-600 ">
                                            {Number(searchParams.get('total'))}$
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <p className="text-base leading-4 text-gray-800 ">
                                            Discount
                                        </p>
                                        <p className="text-base leading-4 text-gray-600 ">
                                            0%
                                        </p>
                                    </div>
                                   
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base font-semibold leading-4 text-gray-800 ">
                                        Total
                                    </p>
                                    <p className="text-base font-semibold leading-4 text-gray-600 ">
                                        {Number(searchParams.get('total'))}$
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-4 px-4 mt-6 ">
                        <Link href='/' className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-blue-600 ">
                            Go back Home
                        </Link>
                        <Link href='/AllCourses' className="w-full px-4 py-2 bg-blue-500 rounded-md text-gray-50 md:w-auto  hover:bg-blue-600 : bg-gray-800">
                            View All Courses
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Thanksorder