import React from 'react'

function Hero() {
    return (
        <section className="relative pb-8 " style={{ height: 750 }}>
            <div > 
                <img
                    src="/hero.png"
                    className=" rounded-[5%] absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center rounded-[5%] bg-[#303030bf]">
                    <div className="z-10 max-w-6xl px-4 mx-auto ">
                        <span className="text-sm font-semibold bg-white p-3 rounded-lg text-blue-400 uppercase">
                            Never stop learning
                        </span>
                        <h2 className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                            Grow up your skills
                        </h2>
                        <p className="mb-8 text-base  leading-8 text-gray-400 lg:text-2xl">
                            By online courses with Spider-Courses
                        </p>
                        <div className="items-center justify-start block gap-4 md:flex">
                        
                            <a
                                className="block px-5 py-3 text-sm font-semibold text-center text-blue-700 transition duration-200 bg-white rounded md:inline-block hover:bg-blue-700 hover:text-gray-100"
                                href="#"
                            >
                                {" "}
                                Get Started{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero