"use client";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { Cartcontext } from "../_context/Cartcontext";
import ProductApis from "../_utlis/ProductApis";
import CartApis from "../_utlis/CartApis";
import Cart from "./Cart";

function Header() {
    const [isopen, setisopen] = useState(false);
    const { cart, setCart }: any = useContext(Cartcontext);
    const getCartItems = () => {
        CartApis.getCartItem(user?.primaryEmailAddress?.emailAddress)
            .then((res: any) => {
                console.log("cart item=>", res.data.data);
                res?.data?.data.forEach((cartitem: any) => {
                    setCart((oldcart: any) => [
                        ...oldcart,
                        {
                            id: cartitem.id,
                            product: cartitem?.attributes?.products?.data[0],
                        },
                    ]);
                });
            })
            .catch((err: any) => {
                console.log("ERROR", err);
            });
    };
    const [isLog, setisLog] = useState(false);
    useEffect(() => {
        setisLog(window.location.href.toString().includes("sign-in" || "sign-up"));
    }, []);
    const { user } = useUser();
    useEffect(() => {
        user && getCartItems();
    }, [user]);
    return (
        !isLog && (
            <header className="bg-white fixed w-full z-[9999] mb-5">
                <div className=" mx-auto  px-4 sm:px-6 lg:px-8 shadow-md ">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <Image src="/seyam.png" width={50} height={50} alt="logo" />
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >

                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/AllCourses"
                                        >
                                            Courses
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/cart"
                                        >
                                            MyCart
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/Aboutus"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/Contact"
                                        >
                                            Contact
                                        </a>
                                    </li>


                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center  gap-4">
                            {!user ? (
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                                        href="/sign-in"
                                    >
                                        Login
                                    </a>

                                    <div className="hidden sm:flex">
                                        <a
                                            className="rounded-md bg-third px-5 py-2.5 text-sm font-medium text-black"
                                            href="/sign-up"
                                        >
                                            Register
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-betwen">
                                    <div className="flex items-center pr-[1rem]">
                                        <div
                                            className="flex items-center"
                                            onClick={() => setisopen(!isopen)}
                                        >
                                            <p>({cart?.length})</p>
                                            <svg
                                                width="30px"
                                                height="30px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                stroke="#ff0000"
                                                stroke-width="0.00024000000000000003"
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
                                                        d="M8.7499 13C8.7499 12.5858 8.41412 12.25 7.9999 12.25C7.58569 12.25 7.2499 12.5858 7.2499 13V17C7.2499 17.4142 7.58569 17.75 7.9999 17.75C8.41412 17.75 8.7499 17.4142 8.7499 17V13Z"
                                                        fill="#ff0000"
                                                    ></path>{" "}
                                                    <path
                                                        d="M15.9999 12.25C16.4141 12.25 16.7499 12.5858 16.7499 13V17C16.7499 17.4142 16.4141 17.75 15.9999 17.75C15.5857 17.75 15.2499 17.4142 15.2499 17V13C15.2499 12.5858 15.5857 12.25 15.9999 12.25Z"
                                                        fill="#ff0000"
                                                    ></path>{" "}
                                                    <path
                                                        d="M12.7499 13C12.7499 12.5858 12.4141 12.25 11.9999 12.25C11.5857 12.25 11.2499 12.5858 11.2499 13V17C11.2499 17.4142 11.5857 17.75 11.9999 17.75C12.4141 17.75 12.7499 17.4142 12.7499 17V13Z"
                                                        fill="#ff0000"
                                                    ></path>{" "}
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M17.2737 3.47298C16.7981 3.28712 16.2654 3.25574 15.5819 3.25077C15.3012 2.65912 14.6983 2.25 13.9999 2.25H9.9999C9.3015 2.25 8.69865 2.65912 8.41794 3.25077C7.7344 3.25574 7.20166 3.28712 6.72611 3.47298C6.15792 3.69505 5.66371 4.07255 5.29999 4.5623C4.93306 5.05639 4.76082 5.68968 4.52374 6.56133L3.89587 8.86426C3.50837 9.06269 3.16928 9.32992 2.88642 9.6922C2.26442 10.4888 2.15427 11.4377 2.26492 12.5261C2.37229 13.5822 2.70479 14.9121 3.121 16.5769L3.1474 16.6825C3.41058 17.7353 3.62426 18.5901 3.8784 19.2572C4.14337 19.9527 4.47977 20.5227 5.03439 20.9558C5.58901 21.3888 6.22365 21.5769 6.96266 21.6653C7.67148 21.75 8.55256 21.75 9.63774 21.75H14.362C15.4472 21.75 16.3282 21.75 17.0371 21.6653C17.7761 21.5769 18.4107 21.3888 18.9653 20.9558C19.5199 20.5227 19.8563 19.9527 20.1213 19.2572C20.3755 18.5901 20.5891 17.7353 20.8523 16.6825L20.8787 16.577C21.2949 14.9122 21.6274 13.5822 21.7348 12.5261C21.8454 11.4377 21.7353 10.4888 21.1133 9.6922C20.8305 9.32995 20.4914 9.06274 20.104 8.86431L19.4761 6.56133C19.239 5.68968 19.0667 5.05639 18.6998 4.5623C18.3361 4.07255 17.8419 3.69505 17.2737 3.47298ZM7.27214 4.87007C7.49194 4.78416 7.75752 4.75888 8.41935 4.75219C8.70067 5.34225 9.30267 5.75 9.9999 5.75H13.9999C14.6971 5.75 15.2991 5.34225 15.5805 4.75219C16.2423 4.75888 16.5079 4.78416 16.7277 4.87007C17.0336 4.98964 17.2997 5.19291 17.4956 5.45663C17.6717 5.69377 17.775 6.02508 18.0659 7.09194L18.4195 8.3887C17.3817 8.24996 16.0419 8.24998 14.3773 8.25H9.62246C7.95788 8.24998 6.61809 8.24996 5.5803 8.38868L5.93388 7.09195C6.22478 6.02508 6.32812 5.69376 6.50423 5.45662C6.70008 5.19291 6.96619 4.98964 7.27214 4.87007ZM9.9999 3.75C9.86183 3.75 9.7499 3.86193 9.7499 4C9.7499 4.13807 9.86183 4.25 9.9999 4.25H13.9999C14.138 4.25 14.2499 4.13807 14.2499 4C14.2499 3.86193 14.138 3.75 13.9999 3.75H9.9999ZM4.06873 10.6153C4.34756 10.2582 4.78854 10.0183 5.69971 9.88649C6.63034 9.75187 7.89217 9.75 9.68452 9.75H14.3152C16.1075 9.75 17.3694 9.75187 18.3 9.88649C19.2112 10.0183 19.6522 10.2582 19.931 10.6153C20.2098 10.9725 20.3356 11.4584 20.2425 12.3744C20.1474 13.3099 19.8432 14.5345 19.4084 16.2733C19.1312 17.3824 18.9381 18.1496 18.7196 18.7231C18.5083 19.2778 18.3014 19.5711 18.0422 19.7735C17.783 19.9758 17.4483 20.1054 16.859 20.1759C16.2496 20.2488 15.4584 20.25 14.3152 20.25H9.68452C8.54133 20.25 7.75015 20.2488 7.14076 20.1759C6.5514 20.1054 6.21667 19.9758 5.95751 19.7735C5.69835 19.5711 5.49144 19.2778 5.28013 18.7231C5.06163 18.1496 4.86853 17.3824 4.59127 16.2733C4.15656 14.5345 3.85233 13.3099 3.75723 12.3744C3.66411 11.4584 3.78989 10.9725 4.06873 10.6153Z"
                                                        fill="#ff0000"
                                                    ></path>{" "}
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <UserButton afterSignOutUrl="/" />
                                    {isopen && <Cart />}
                                </div>
                            )}
                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    );
}

export default Header;
