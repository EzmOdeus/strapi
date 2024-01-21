'use client'
import React, { useContext } from 'react'
import { Cartcontext } from '../_context/Cartcontext'
import CartApis from '../_utlis/CartApis'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function Page() {
    const router = useRouter()
    const { cart, setCart }: any = useContext(Cartcontext)
    const total = () => {
        let total = 0
        cart.forEach((item: any) => {
            total = total + Number(item?.product?.attributes?.price)
        });
        return total
    }
    const deletitem = (id: any) => {
        CartApis.deletitem(id).then((res: any) => {
            if (res) setCart((oldcart: any) => oldcart.filter((item: any) => item.id !== res.data.data.id))


        })
    }
    return (
        <section className="flex items-center bg-stone-200 lg:h-screen font-poppins dark:bg-gray-700 ">
            <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                <div className="p-8 bg-gray-50 dark:bg-gray-800">
                    <h2 className="mb-8 text-4xl font-bold dark:text-gray-400">Your Cart</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
                            <div className="flex flex-wrap justify-between items-center mb-6 -mx-4 md:mb-8">
                                <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                    <h2 className="font-bold text-gray-500 dark:text-gray-400">
                                        Product name
                                    </h2>
                                </div>
                                <div className="hidden px-4 lg:block lg:w-2/12">
                                    <h2 className="font-bold text-gray-500 dark:text-gray-400">
                                        Price
                                    </h2>
                                </div>

                            </div>
                            <div className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700 overflow-auto overflow-x-hidden h-[400px]">
                                {cart.length > 0 ? cart.map((item: any) => (
                                    <div key={item.id} className="flex flex-wrap justify-between items-center mb-6 -mx-4 md:mb-8">
                                        <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                            <div className="flex flex-wrap items-center -mx-4">
                                                <div className="w-full px-4 mb-3 md:w-1/3">
                                                    <div className="w-full h-96 md:h-24 md:w-24">
                                                        <img
                                                            src={item?.product?.attributes?.img?.data?.attributes?.url}
                                                            alt=""
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-2/3 px-4">
                                                    <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                                                        {item.product.attributes.title}
                                                    </h2>
                                                    <p className="text-gray-500 dark:text-gray-400 ">
                                                        {item.product.attributes.category}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden px-4  lg:block lg:w-2/12">
                                            <p className="text-lg flex items-center justify-evenly font-bold text-red-500 dark:text-gray-400">
                                                ${item.product.attributes.price}
                                                <button onClick={() => deletitem(item?.id)}><svg width="30px" height="30px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#f50000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#f50000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#f50000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#f50000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#f50000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </button>
                                            </p>

                                        </div>

                                    </div>
                                )) :
                                    <div className='flex justify-center items-center'><Image src='/empty-cart.webp' width={400} height={300} alt={'image'} /></div>}

                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-gray-700 dark:text-gray-400">
                                    Apply Coupon
                                </span>
                                <input
                                    type="text"
                                    className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400 dark:bg-gray-800"
                                    placeholder="x304k45"
                                    required={true}
                                />
                                <button className="flex-1 inline-block px-8 py-4 font-bold text-center text-gray-100 bg-red-500 rounded-md hover:bg-red-600 md:flex-none">
                                    Apply
                                </button>
                            </div>
                        </div>
                        <div className="w-full px-4 xl:w-4/12">
                            <div className="p-6 border border-red-100 dark:bg-gray-900 dark:border-gray-900 bg-red-50 md:p-8">
                                <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">
                                    Order Summary
                                </h2>

                                <div className="flex items-center justify-between pb-4 mb-4 ">
                                    <span className="text-gray-700 dark:text-gray-400">
                                        Order Total
                                    </span>
                                    <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
                                        ${total()}
                                    </span>
                                </div>
                                <h2 className="text-lg text-gray-500 dark:text-gray-400">
                                    We offer:
                                </h2>
                                <div className="flex items-center mb-4 ">
                                    <a href="#">
                                        <img
                                            src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                                            alt=""
                                            className="object-cover h-16 mr-2 w-26"
                                        />
                                    </a>
                                    <a href="#">
                                        <img
                                            src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                                            alt=""
                                            className="object-cover h-16 mr-2 w-26"
                                        />
                                    </a>
                                    <a href="#">
                                        <img
                                            src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                                            alt=""
                                            className="object-cover h-16 mr-2 w-26"
                                        />
                                    </a>
                                </div>
                                <div className="flex items-center justify-between ">

                                    <button
                                        onClick={() => router.push(`/check-out?amount=${total()}`)}
                                        className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-red-500 rounded-md hover:bg-red-600">
                                        Checkout
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Page