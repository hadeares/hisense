import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";  // Importando Framer Motion

function SponsorshipCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  const CarouselData = [
    { image: '/home/euro-24.png', title: 'UEFA Euro', year: '2024' },
    { image: '/home/qualifiers.png', title: 'European Qualifiers', year: '2023' },
    { image: '/home/qatar-22.png', title: 'FIFA World Cup', year: '2022' },
    { image: '/home/euro-22.png', title: "UEFA Women's Euro", year: '2022' },
    { image: '/home/euro-20.png', title: 'UEFA Euro', year: '2020' },
    { image: '/home/russia-18.png', title: 'FIFA World Cup', year: '2018' },
    { image: '/home/euro-16.png', title: 'FIFA World Cup', year: '2018' },
    { image: '/home/psg.png', title: 'FIFA World Cup', year: '2018' }
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1080) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(5);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-[1250px] mx-auto px-3"
    >
      <div className="text-center">
        <div className="mb-10 relative">
          <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-white">Patrocinador dos Maiores Eventos</h2>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev'
          }}
        >
          <div className="absolute top-[45%] left-0 z-20">
            <button className="text-white text-4xl cursor-pointer prev"><MdNavigateBefore /></button>
          </div>

          <div className="absolute top-[45%] right-0 z-20">
            <button className="text-white text-4xl cursor-pointer next"><MdNavigateNext /></button>
          </div>

          {CarouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="bg-[#006d67] rounded-[3rem] py-5 px-10 min-h-[200px] flex flex-col justify-center items-center">
                <div className="flex justify-center mb-5">
                  <Image className="object-cover h-auto w-auto" src={item.image} alt={item.title} width={243} height={97} />
                </div>
                <h5 className="text-[15px] leading-6 text-white font-bold">{item.title}</h5>
                <span className="text-white text-sm">{item.year}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default SponsorshipCarousel;
