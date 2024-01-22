"use client";
import React, { useState, useContext } from "react";
import { useUser } from "@clerk/nextjs";
import Skeleton from "./skeleton";
import { useRouter } from "next/navigation";
import CartApis from "../_utlis/CartApis";
import { Cartcontext } from "../_context/Cartcontext";
// import  Image  from 'next/image';
// import Similarcourses from "./Similarcourses";

function Productinfo({ product }: any) {
  let i = 0
  const { cart, setCart }: any = useContext(Cartcontext);
  const { user } = useUser();
  const router = useRouter();
  const handelAddTocart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          products: [product?.id],
        },
      };
      CartApis.addToCart(data)
        .then((res: any) => {
          console.log("OK");
          setCart((oldcart: any) => [
            ...oldcart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((e: any) => console.log("erorr", e));
    }
  };
  // console.log(product.attributes.img.data.attributes.url );
  const [prod, setprod] = useState();
  return (
    <section className="py-10 font-poppins ">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="sticky top-0 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-96">
                {product?.attributes?.img?.data?.attributes?.url ? (
                  <img
                    className="object-contain w-full  rounded-2xl mt-20"
                    src={product?.attributes?.img?.data?.attributes?.url}
                    alt=""
                  />
                ) : (
                  <div className=" w-full bg-slate-300 h-[600px] animate-pulse  rounded-2xl mt-20 "></div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-6">
              <div className="mb-6 ">
                <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 rounded-xl">
                  {product?.attributes?.category}
                </span>
                {product?.attributes?.title ? (
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
                    {product?.attributes?.title}
                  </h2>
                ) : (
                  <div>
                    {" "}
                    <Skeleton />
                  </div>
                )}
                <div className="flex flex-wrap items-center mb-6">
                  <ul className="flex mb-4 mr-2 lg:mb-0">
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-4 mr-1  text-red-500 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500   bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500  bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500  bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                {product?.attributes?.price ? (
                  <p className="inline-block text-2xl font-semibold text-gray-700  ">
                    <span> ${product?.attributes?.price}</span>
                  </p>
                ) : (
                  <Skeleton />
                )}
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700 ">
                  Description:
                </h2>
                <div className="bg-gray-100  rounded-xl">
                  <div className="p-3 lg:p-5 ">
                    <div className="p-2 rounded-xl  lg:p-6  bg-gray-50">
                      <div>
                        <div>
                          {product?.attributes?.description ? (
                            <span className="text-[20px] block">
                              {
                                product?.attributes?.description.map((item: any) =>
                                item.children.map((text: any) => <span key={i++}>{text.text} <br/></span>)
                              )}
                            </span>
                          ) : (
                            <Skeleton />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 px-6 flex items-center justify-between mb-6 border-t border-b border-gray-200">
                <span className=" justify-center items-center text-xl flex text-gray-600 ">
                  <svg
                    fill="#952833"
                    width="20px"
                    height="20px"
                    viewBox="-1 -1 22.00 22.00"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#952833"
                    stroke-width="0.0002"
                    transform="rotate(-45)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"></path>
                    </g>
                  </svg>

                  {product?.attributes?.Hours} Hours
                </span>
                <p className="items-center justify-center text-sm flex text-blue-500">
                  <svg

                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke=""
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
                        fill="#952833"
                      ></path>{" "}
                      <path
                        d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z"
                        fill="#952833"
                      ></path>{" "}
                      <path
                        d="M18.6695 13.4297H16.7695C14.5895 13.4297 13.4395 14.5797 13.4395 16.7597V18.6597C13.4395 20.8397 14.5895 21.9897 16.7695 21.9897H18.6695C20.8495 21.9897 21.9995 20.8397 21.9995 18.6597V16.7597C21.9995 14.5797 20.8495 13.4297 18.6695 13.4297Z"
                        fill="#952833"
                      ></path>{" "}
                      <path
                        d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z"
                        fill="#952833"
                      ></path>{" "}
                    </g>
                  </svg>

                  <span className="text-gray-600 text-xl ">
                    {product?.attributes?.category}
                  </span>
                </p>
              </div>
              <div className="mb-6 " />
              <div className="flex flex-wrap justify-center items-center mb-6">


                <button
                  onClick={() => handelAddTocart()}
                  className="w-full px-4 py-3 text-center text-forth bg-primary border border-primary hover:bg-priborder-primary hover:text-gray-100 lg:w-1/2 rounded-xl"
                >
                  Add to cart
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <span className="relative flex justify-center items-center ">
        <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
        >

        </div>

        <div  className="flex justify-center items-center">
          <span className="relative z-10 bg-white text-3xl font-semibold "> Similar Courses</span>
        
        </div>
      </span>
     
    
 
    </section>
  );
}

export default Productinfo;
