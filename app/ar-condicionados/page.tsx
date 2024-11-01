'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import ForYou from '@/components/ForYou';
import FindIdealAC from '@/components/FindIdealAC';
import ACCategories from '@/components/categorieAC';

interface BannerProps {
  bannerDesktop: string[];
  bannerMobile: string[];
  bannerTexts: { title: string; description: string; buttonText: string }[];
}

interface CategoriesProps {
  onFilterClick: (technology: string) => void;
}

const Banner: React.FC<BannerProps> = ({ bannerDesktop, bannerMobile, bannerTexts }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
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
        {bannerDesktop.map((srcDesktop, index) => {
          const srcMobile = bannerMobile[index];
          return (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="bg-gradient-to-t from-dark opacity-60 absolute top-0 h-full w-full z-[2]"></div>
              <div className="relative w-full h-full">
                {/* Imagem de Fundo */}
                <div className="hidden md:block">
                  <Image
                    src={srcDesktop}
                    alt={`Banner ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
                <div className="md:hidden">
                  <Image
                    src={srcMobile}
                    alt={`Banner ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>

                {/* Texto do Banner */}
                <div className="absolute bottom-[10%] w-[80%] md:w-auto left-1/2 md:left-[10%] transform -translate-x-1/2 md:translate-x-0 text-center md:text-left z-[3]">
                  <h1 className="text-white text-xl md:text-6xl font-bold">
                    {bannerTexts[index].title}
                  </h1>
                  <p className="text-white mt-4 text-base md:text-lg">
                    {bannerTexts[index].description}
                  </p>
                  <button className="bg-hisense text-white rounded-3xl mt-6 md:mt-10 text-sm md:text-base py-2 px-6 duration-500 hover:bg-[#019B96] hover:text-white hidden">
                    {bannerTexts[index].buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
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
  );
};

export default function Home() {
  const findIdealACRef = useRef<{ applyTechnologyFilter: (technology: string) => void }>(null);

  const applyFilterAndScroll = (technology: string) => {
    if (findIdealACRef.current) {
      findIdealACRef.current.applyTechnologyFilter(technology);
      document.getElementById('findIdealAC')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterClick = (technology: string) => {
    applyFilterAndScroll(technology);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check the screen size on component mount

    window.addEventListener('resize', handleResize); // Update on window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  const bannerDesktop: string[] = [
    '/Ac-home/BANNERS1.jpg',
    '/Ac-home/BANNERS2.jpg',
    '/Ac-home/BANNERS3.jpg',
    '/Ac-home/BANNERS4.jpg',
    '/Ac-home/BANNERS5.jpg',
  ];
  const bannerMobile: string[] = [
    '/Ac-home/BANNERS1_9x16.jpg',
    '/Ac-home/BANNERS2_9x16.jpg',
    '/Ac-home/BANNERS3_9x16.jpg',
    '/Ac-home/BANNERS4_9x16.jpg',
    '/Ac-home/BANNERS5_9x16.jpg',
  ];

  // Textos para cada banner
  const bannerTexts = [
    { title: 'Ar-Condicionado Split Hi-Wall', description: 'Clima perfeito para o seu lar, todos os dias', buttonText: 'COMPRE AGORA' },
    { title: 'Ar-Condicionado Portátil', description: 'Leve o conforto de um ar fresco para qualquer ambiente', buttonText: 'COMPRE AGORA' },
    { title: 'Ar-Condicionado Janela', description: 'Eficiente, compacto e sempre ao seu alcance.', buttonText: 'COMPRE AGORA' },
    { title: 'Ar-Condicionado Cassete', description: 'Sofisticação e desempenho para ambientes comerciais.', buttonText: 'COMPRE AGORA' },
    { title: 'Ar-Condicionado Piso Teto', description: 'Potência e eficiência para espaços amplos', buttonText: 'COMPRE AGORA' },
  ];

  const items = [
    {
      name: 'Televisores',
      imageSrc: '/U8N/1.png',
      link: '/televisores'
    },
    {
      name: 'Refrigeradores',
      imageSrc: '/BottomFreezer/1.png',
      link: '/refrigeradores'
    },
    {
      name: 'Adegas',
      imageSrc: '/WineCooler/1.jpg',
      link: '/adegas'
    },
    {
      name: 'Lava e Seca',
      imageSrc: '/LavaSeca/1.jpg',
      link: '/lava-e-seca'
    },
  ];

  return (
    <main className="max-w-[1920px] mx-auto">
      <div className="h-[100vh]">
        <Banner bannerDesktop={bannerDesktop} bannerMobile={bannerMobile} bannerTexts={bannerTexts} />
      </div>

      <section className="py-28 bg-dark">
        <div className="text-center pb-10">
          <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-white">
            Conheça o Ar-Condicionado Ideal para Você
          </h2>
        </div>
        <ACCategories onFilterClick={handleFilterClick} />
      </section>

      <section className="mx-auto bg-white overflow-hidden">
        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/Ac-home/Banner-Feature02.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[10%] left-[15%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[550px]">
              <h2 className="text-dark lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Tecnologia Inverter
              </h2>
              <p>
                Nos últimos 20 anos, a Hisense continuou a alcançar a inovação tecnológica, inovou de forma independente nove gerações de tecnologia de núcleo de inversor e obteve várias patentes nacionais.<br></br>
                Como pioneira do inversor CA na China, a produção de inversor CA da Hisense representa mais de 95% do total, muito acima da média. A Hisense também assumiu a liderança na formulação das normas de CA com um inversor da China e é conhecida como especialista em inversores.
              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image
            className="h-full w-full object-cover object-right-bottom md:hidden"
            src="/Ac-home/Banner-Feature02-mobile.png"
            alt=""
            width={1920}
            height={1080}
            quality={100}
          />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]"
          >
            <div className="max-w-[450px]">
              <h2 className="text-dark text-[20px] pb-2 font-bold tracking-tight leading-snug">
                Tecnologia Inverter
              </h2>
              <p className="text-dark text-[13px] leading-snug">
                Nos últimos 20 anos, a Hisense continuou a alcançar a inovação tecnológica, inovou de forma independente nove gerações de tecnologia de núcleo de inversor e obteve várias patentes nacionais.<br></br>
                Como pioneira do inversor CA na China, a produção de inversor CA da Hisense representa mais de 95% do total, muito acima da média. A Hisense também assumiu a liderança na formulação das normas de CA com um inversor da China e é conhecida como especialista em inversores.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/Ac-home/Banner-Feature01.png' alt="" width={1920} height={1080} quality={100} />

          <div className="bg-gradient-to-l from-dark opacity-40 absolute top-0 h-full w-full"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[40%] left-[60%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[550px] text-white">
              <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Conectividade
              </h2>
              <p>
                Em todos os lugares com o Wi-Fi integrado pelo aplicativo o ConnectLife, você pode controlar seu ar-condicionado a qualquer momento e de qualquer lugar. Possui compatibilidade com google Assistant ou Alexa podendo ligar e desligar, ajustar a temperatura e realizar comandos de voz.
              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image
            className="h-full w-full object-cover object-right-bottom md:hidden"
            src="/Ac-home/split-wifi-mobile.png"
            alt=""
            width={1920}
            height={1080}
            quality={100}
          />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]"
          >
            <div className="max-w-[450px]">
              <h2 className="text-white text-[22px] pb-2 font-bold tracking-tight leading-snug">
                Conectividade
              </h2>
              <p className="text-white text-[14px] leading-snug">
                Em todos os lugares com o Wi-Fi integrado pelo aplicativo o ConnectLife, você pode controlar seu ar-condicionado a qualquer momento e de qualquer lugar. Possui compatibilidade com google Assistant ou Alexa podendo ligar e desligar, ajustar a temperatura e realizar comandos de voz.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/Ac-home/Banner-Feature-R32.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[40%] left-[4%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[550px]">
              <h2 className="text-white lg:text-5xl text-[20px] pb-3 font-bold tracking-tight leading-10">
                Sustentabilidade
              </h2>
              <p className="text-white">
                Com Gás R32, baixo consumo de energia e proteção imbatível e a resistência aprimorada contra oxidação e corrosão com a tecnologia Golden Fin, nossa linha de Ar-Condicionados têm garantia de um desempenho superior e uma troca de calor mais eficiente no seu dia a dia.
              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image
            className="h-full w-full object-cover object-right-bottom md:hidden"
            src="/Ac-home/Banner-Feature-R32-mobile.png"
            alt=""
            width={1920}
            height={1080}
            quality={100}
          />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[15%] left-[5%] md:hidden overflow-hidden z-[5]"
          >
            <div className="max-w-[450px]">
              <h2 className="text-white text-[22px] pb-2 font-bold tracking-tight leading-snug">
                Sustentabilidade
              </h2>
              <p className="text-white text-[14px] leading-snug">
                Com Gás R32, baixo consumo de energia e proteção imbatível e a resistência aprimorada contra oxidação e corrosão com a tecnologia Golden Fin, nossa linha de Ar-Condicionados têm garantia de um desempenho superior e uma troca de calor mais eficiente no seu dia a dia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FindIdealAC section com referencia */}
      <section id="findIdealAC" className="pt-14 lg:pt-8">
        <FindIdealAC ref={findIdealACRef} />
      </section>

      {/* Seção Recomendações */}
      <section>
        <ForYou products={items} title='Descubra a solução ideal para sua vida' />
      </section>
    </main>
  );
}
