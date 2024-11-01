'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});

interface BannerProps {
  bannerDesktop: string[];
  bannerMobile: string[];
  bannerLinks: string[];
  bannerButton?: boolean[]; // Array para indicar se o botão deve aparecer
}

export const Banner: React.FC<BannerProps> = ({ bannerDesktop, bannerMobile, bannerLinks, bannerButton = [] }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const banners = isMobile ? bannerMobile : bannerDesktop;

  return (
    <div className="relative w-full max-w-[1920px] overflow-hidden">
      <Swiper
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
        {banners.map((src, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                width={1920}
                height={1080}
                className="object-contain"
                priority={true}
                quality={100}
              />
              {bannerButton[index] && ( // Renderiza o botão apenas se bannerButton[index] for true
                <div className="absolute xl:bottom-[38%] lg:bottom-[35%] bottom-8 lg:left-[7%] w-full flex justify-center lg:justify-start">
                  <Link href={bannerLinks[index] || ''}>
                    <button
                      className="border border-hisense bg-hisense text-white rounded-3xl relative text-md pb-2 pt-3 px-5 duration-500 hover:shadow-2xl"
                    >
                      Saiba mais
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev custom-swiper-arrow"></div>
        <div className="swiper-button-next custom-swiper-arrow"></div>
      </Swiper>
      <style jsx>{`
        .custom-swiper-arrow {
          color: #d9d9d9 !important;
        }
      `}</style>
    </div>
  );
};
