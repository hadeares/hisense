'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});

interface BannerProps {
  bannerDesktop: string[];
  bannerMobile: string[];
}

const BannerTvHome: React.FC<BannerProps> = ({ bannerDesktop, bannerMobile }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`relative w-full ${isMobile ? 'h-[85vh]' : 'h-[70vh]'} overflow-hidden`}>
      <Swiper
        effect="creative"
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation, EffectCreative]}
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
        {isMobile
          ? bannerMobile.map((src, index) => (
              <SwiperSlide key={`mobile-${index}`}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Banner Mobile ${index + 1}`}
                    fill
                    objectFit="cover"
                    priority={true}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex gap-3">
                    <button className="border border-white text-white rounded-3xl relative text-xs py-2 px-8 duration-500 hover:bg-hisense hover:text-white whitespace-nowrap">
                      Saiba mais
                    </button>
                    <button className="bg-hisense text-white rounded-3xl relative text-xs py-2 px-8 duration-500 hover:bg-dark hover:text-white whitespace-nowrap">
                      Comprar
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : bannerDesktop.map((src, index) => (
              <SwiperSlide key={`desktop-${index}`}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Banner Desktop ${index + 1}`}
                    fill
                    objectFit="cover"
                    priority={true}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-[20%] left-[10%] flex gap-4">
                    <button className="border border-white text-white rounded-3xl relative text-base pb-2 pt-3 px-6 duration-500 hover:bg-hisense hover:text-white">
                      Saiba mais
                    </button>
                    <button className="bg-hisense text-white rounded-3xl relative text-base pb-2 pt-3 px-6 duration-500 hover:bg-dark hover:text-white">
                      Comprar
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

        <div className="swiper-button-prev custom-swiper-arrow"></div>
        <div className="swiper-button-next custom-swiper-arrow"></div>
      </Swiper>

      <style jsx>{`
        .custom-swiper-arrow {
          color: #D9D9D9 !important;
        }
      `}</style>
    </div>
  );
};

export default BannerTvHome;
