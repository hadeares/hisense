"use client";

import Image from "next/image";
import Link from "next/link";

function LatestReleases() {
  const latestReleases = [
    {
      product: 'Hisense Smart TV ULED MiniLED U8N',
      image: '/home/latest-release-1.png',
      link: '/televisores/U8N'
    },
    {
      product: 'Frigobar',
      image: '/home/latest-release-2.png',
      link: '/eletrodomesticos/frigobar'
    },
    {
      product: 'Split Hi-Wall',
      image: '/home/latest-release-3.png',
      link: '/ar-condicionados/split'
    }
  ];

  return (
    <div
      className="max-w-[1250px] mx-auto px-3"
    >
      <div className="mb-10 text-center">
        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Últimos lançamentos</h2>
        <p className="max-w-[850px] mx-auto text-gray-500">O que temos de mais atual para lhe oferecer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {latestReleases.map((product, index) => (
          <Link key={index} href={product.link}>
            <div
              className="rounded-[2rem] overflow-hidden hover:shadow-xl duration-300"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  quality={100}
                  className="object-cover h-auto w-auto"
                  src={product.image}
                  alt={product.product}
                  fill
                />
              </div>
              <div className="flex flex-col items-center bg-gray-100 py-6 lg:px-8 px-6">
                <h4 className="font-bold mb-3">{product.product}</h4>
                <div className="flex justify-center w-full">
                  <button
                    className="border border-gray-400 text-gray-500 rounded-3xl relative text-sm pb-2 pt-3 px-5 duration-500 hover:bg-hisense hover:border-hisense hover:text-white hover:shadow-md"
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div >
  );
}

export default LatestReleases;
