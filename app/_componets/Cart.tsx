import React, { useContext } from 'react'
import { Cartcontext } from '../_context/Cartcontext'
import Link from 'next/link'
function Cart() {
    const { cart, setCart }: any = useContext(Cartcontext)
    return (
        <div
            className="absolute overflow-auto h-[400px]  rounded-lg top-[90%] right-[5%] w-screen max-w-sm border border-gray-600 bg-gray-100/70 px-4 py-8 sm:px-6 lg:px-8"
            aria-modal="true"
            role="dialog"
            tabIndex={1}
        >
            <span className="flex items-center">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 font-bold px-6">Cart</span>
                <span className="h-px flex-1 bg-black"></span>
            </span>
            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {cart.map((item: any) => (
                        <li key={item?.id} className="flex items-center gap-4">
                            <img
                                src={item?.product?.attributes?.img?.data?.attributes?.url}
                                alt=""
                                className="h-16 w-20 rounded object-contain"
                            />
                            <div>
                                <h3 className="text-sm text-gray-900">{item.product.attributes.title}</h3>
                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dd className="inline">${item.product.attributes.price}</dd>
                                    </div>
                                    <div>
                                        <dd className="inline">{item.product.attributes.category}</dd>
                                    </div>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="space-y-4 text-center">
                    <Link
                        href="/cart"
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                        View my cart ({cart.length})
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart


