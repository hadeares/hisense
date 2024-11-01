import React from 'react'
import Image from "next/image";
import Link from "next/link"

interface Product {
    name: string
    imageSrc: string
    link: string
}

interface ForYouProps {
    products: Product[]
    title: string
}

function ForYou({ products, title }: ForYouProps) {
    return (
        <div className="bg-white py-8 sm:py-12 lg:py-20">
            <div className="max-w-[1250px] mx-auto text-center">

                <div className="mb-10 text-center">
                    <h2 className="lg:text-[38px] text-[28px] py-3 px-3 font-bold tracking-tight leading-7">{title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 mt-8 sm:mt-10 px-4 sm:px-6 lg:px-8">

                    {products.map((product: Product) => (
                        <Link key={product.name} href={product.link}>
                            <div
                                className="w-full h-auto border border-gray-100 bg-gray-100 rounded-[1.5rem] overflow-hidden cursor-pointer hover:shadow-xl duration-300"
                            >
                                <div className="w-full bg-white">
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.name}
                                        width={400}
                                        height={400}
                                        className="object-contain w-full h-full bg-white p-3"
                                    />
                                </div>
                                <div className="p-4 sm:p-6">
                                    <p className="text-center text-sm sm:text-lg font-semibold">{product.name}</p>
                                    <div className="flex justify-center mt-4">
                                        <button className="border border-gray-400 rounded-full px-4 pt-2 pb-1 text-xs sm:text-sm hover:bg-hisense hover:text-white hover:border-hisense duration-300">
                                            Saiba mais
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ForYou