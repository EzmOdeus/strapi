'use client'
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import ProductApis from '../_utlis/ProductApis'
import ProductsList from './ProductsList';
import Link from "next/link";

function products() {
  const [ProductList, setProductList] = useState([])

  useEffect(() => {
    getLatestProduct_()

  }, [])
  const getLatestProduct_ = () => {
    ProductApis.getLatestProduct().then((res: any) => {
      console.log(res.data.data)
      setProductList(res.data.data)
    })
  }

  return (

    <div>
      <p className='text-[100px] font-bold text-center text-[#c6c6c642]'>   Courses</p>
      <p className='text-center mt-[-70px] font-[600] text-[30px] text-gray-400 pb-5'>Let's start learning</p>

      <span className="relative flex justify-center items-center w-[30%]">
        <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
        >

        </div>

        <Link href='/AllCourses' className="flex justify-center items-center">
          <span className="relative z-10 bg-white text-xl ">See All Courses</span>
          <svg width="35px" height="35px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ca1212" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        </Link>
      </span>

      <hr className="pb-3" />
      {ProductList.length > 0 ? <ProductsList ProductList={ProductList} />
        : <section className="flex justify-center items-center w-full">
          <div >
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        </section>}
    </div>
  )
}

export default products