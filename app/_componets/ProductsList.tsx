import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Skeleton from './skeleton';

function ProductsList({ ProductList }: any) {
    console.log('-------', ProductList);
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 mb-[3rem] '>{ProductList.map((item: any) => {
            return <Link key={item?.id} href={`/product-details/${item.id}`} className="block rounded-lg p-4 shadow-sm  shadow-indigo-100 border hover:border-primary border-md">
                <img
                    alt="Home"
                    src={item?.attributes?.img?.data?.attributes?.url}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">${item.attributes.price}</dd>
                        </div>

                        {item.attributes.title ? <div>
                            <dt className="sr-only ">title</dt>

                            <dd className="font-medium line-clamp-1">{item.attributes.title}</dd>
                        </div>
                            :
                            <Skeleton />
                        }
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z" fill="#952833"></path> <path d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z" fill="#952833"></path> <path d="M18.6695 13.4297H16.7695C14.5895 13.4297 13.4395 14.5797 13.4395 16.7597V18.6597C13.4395 20.8397 14.5895 21.9897 16.7695 21.9897H18.6695C20.8495 21.9897 21.9995 20.8397 21.9995 18.6597V16.7597C21.9995 14.5797 20.8495 13.4297 18.6695 13.4297Z" fill="#952833"></path> <path d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z" fill="#952833"></path> </g></svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Category</p>

                                <p className="font-medium">{item.attributes.category}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg fill="#952833" width="20px" height="20px" viewBox="-1 -1 22.00 22.00" xmlns="http://www.w3.org/2000/svg" stroke="#952833" stroke-width="0.0002" transform="rotate(-45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"></path></g></svg>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Hours</p>

                                <p className="font-medium">{item.attributes.Hours} Hours </p>

                            </div>
                        </div>


                    </div>
                </div>
            </Link>
        })}</div>
    )
}

export default ProductsList;