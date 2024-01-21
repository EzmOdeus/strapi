import React from 'react'

function Aboutus() {
    return (
        <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins  ">
            <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap ">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative">
                            <img
                                src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg"
                                alt=""
                                className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                            />
                            <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                            <div className="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <div className="relative">
                            <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  opacity-5 md:block hidden">
                                About Us
                            </h1>
                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl ">
                                Welcome to our site
                            </h1>
                        </div>
                        <p className="mt-6 mb-10 text-base leading-7 text-gray-500 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                        </p>
                        <a
                            href="#"
                            className="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500  "
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Aboutus