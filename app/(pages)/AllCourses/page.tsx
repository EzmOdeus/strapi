"use client"
import ProductsList from '@/app/_componets/ProductsList'
import ProductApis from '@/app/_utlis/ProductApis'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function AllCourses() {
  const [ProductList, setProductList] = useState([])
  useEffect(() => {
    getLatestProduct_()
  }, [])
  const getLatestProduct_ = () => {
    ProductApis.getallProduct().then((res: any) => {
      console.log(res.data.data)
      setProductList(res.data.data)
    })
  }
  return (
    <div className="pt-[3%]">
      <p className='text-[100px] font-bold text-center text-[#c6c6c642]'>  All Courses</p>
      {/* <p className='text-center mt-[-70px] font-[600] text-[30px] text-gray-400 pb-5'>Let's start learning</p> */}
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

export default AllCourses