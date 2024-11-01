'use client';

import Categories from '@/components/categories';
import Technologies from '@/components/Technologies';
import OperatingSystem from '@/components/OperatingSystem';
import FindIdealTV from '@/components/FindIdealTV';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import { useRef } from 'react';

const Home: React.FC = () => {
  const banners = [
    {
      desktopSrc: '/U8N/U8N-KV.png',
      mobileSrc: '/U8N/U8N-KV-mobile.png',
      showButton: true,
      link: '/televisores/U8N',
      buttonText: 'Saiba mais',
      logo: '/U8N/U8.png'
    },
    {
      desktopSrc: '/Q6N/Q6-KV-18-9_fundo.png',
      mobileSrc: '/Q6N/Q6-KV-V-AP_fundo.png',
      showButton: true,
      link: '/televisores/U8N',
      buttonText: 'Saiba mais',
      logo: '/Q6N/Q6.png'
    },
    {
      desktopSrc: '/A6K/a6kBG.png',
      mobileSrc: '/A6K/A6K-mobile.png',
      showButton: true,
      link: '/televisores/U8N',
      buttonText: 'Saiba mais',
      logo: '/A6K/A6.png'
    },
  ];

  // Referência para a seção "Encontre a TV ideal"
  const findIdealTVRef = useRef<{ applyTechnologyFilter: (technology: string) => void }>(null);

  const applyFilterAndScroll = (technology: string) => {
    if (findIdealTVRef.current) {
      findIdealTVRef.current.applyTechnologyFilter(technology);
      document.getElementById('findIdealTV')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Banner principal */}
      <div className="h-[100vh]">
        <div className="h-[100vh]">
          <div className="relative w-full h-full overflow-hidden">
            <Swiper
              effect="creative"
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Navigation]}
              className="w-full h-full"
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
            >
              <SwiperSlide className="w-full h-full">
                <div className="relative w-full h-full">
                  {/* Imagem Desktop */}
                  <div className="hidden md:block relative w-full h-full">
                    <Image
                      src='/100U7/100U7-KV.jpg'
                      alt=''
                      fill
                      className='object-cover'
                      priority={true}
                      quality={100}
                    />

                    <div className="absolute top-[22%] left-[12%] w-full h-full">
                      <div>
                        <Image
                          src='/100U7/100U7.png'
                          alt=''
                          height={550}
                          width={720}
                          className=''
                          priority={true}
                          quality={100}
                        />
                      </div>
                      <Link href='/televisores/100U7N'>
                        <button className='border text-white border-white rounded-3xl text-base pb-2 pt-3 px-6 hover:bg-hisense hover:border-hisense duration-300 mt-8'>
                          Saiba mais
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Imagem Mobile */}
                  <div className="block md:hidden relative w-full h-full">
                    <Image
                      src='/100U7/100U7-KV-mobile.jpg'
                      alt=''
                      fill
                      className='object-cover'
                      priority={true}
                      sizes="100vw"
                    />

                    <div className="absolute bottom-[-70%] left-[18%] w-full h-full">
                      <div>
                        <Image
                          src='/100U7/100U7.png'
                          alt=''
                          height={550}
                          width={350}
                          className=''
                          priority={true}
                          quality={100}
                        />
                      </div>
                      <Link href='/televisores/100U7N'>
                        <button className='border text-white border-white rounded-3xl text-base pb-2 pt-3 px-6 hover:bg-hisense hover:border-hisense duration-300'>
                          Saiba mais
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {banners.map((banner, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <div className="relative w-full h-full">
                    {/* Imagem Desktop */}
                    <div className="hidden md:block relative w-full h-full">
                      <Image
                        src={banner.desktopSrc}
                        alt={`Banner ${index + 1} Desktop`}
                        fill
                        className='object-cover'
                        priority={true}
                        quality={100}
                      />

                      <div className="absolute top-[15%] left-[15%] w-full h-full">
                        <div>
                          <Image
                            src={banner.logo}
                            alt=''
                            height={550}
                            width={500}
                            className=''
                            priority={true}
                            quality={100}
                          />
                        </div>
                        <Link href={banner.link}>
                          <button className='border text-white border-white rounded-3xl text-base pb-2 pt-3 px-6 hover:bg-hisense hover:border-hisense duration-300'>
                            {banner.buttonText}
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Imagem Mobile */}
                    <div className="block md:hidden relative w-full h-full">
                      <Image
                        src={banner.mobileSrc}
                        alt={`Banner ${index + 1} Mobile`}
                        fill
                        className='object-cover'
                        priority={true}
                        sizes="100vw"
                      />

                      <div className="absolute bottom-[-65%] left-[25%] w-full h-full">
                        <div>
                          <Image
                            src={banner.logo}
                            alt=''
                            height={550}
                            width={300}
                            className=''
                            priority={true}
                            quality={100}
                          />
                        </div>
                        <Link href={banner.link}>
                          <button className='border text-white border-white rounded-3xl text-base pb-2 pt-3 px-6 hover:bg-hisense hover:border-hisense duration-300'>
                            {banner.buttonText}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Personalizar a cor das setas de navegação */}
              <div className="swiper-button-prev custom-swiper-arrow"></div>
              <div className="swiper-button-next custom-swiper-arrow"></div>
            </Swiper>
            <style jsx>{`
            .custom-swiper-arrow {
              color: #d9d9d9 !important;
            }
          `}</style>
          </div>
        </div>
      </div>

      {/* Seção de categorias */}
      <section className="pt-0 pb-[40px] mt-[-2px]">
        <Categories onFilterClick={applyFilterAndScroll} />
      </section>




      {/* Outras seções */}
      <section className="py-0 sm:py-0">
        <Technologies />
      </section>
      <section className="py-0 sm:py-0 bg-black">
        <OperatingSystem />
      </section>
      <section id="findIdealTV" className="pt-14 lg:pt-8">
        <FindIdealTV ref={findIdealTVRef} />
      </section>
    </main>
  );
};

export default Home;
