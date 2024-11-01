'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import { motion } from "framer-motion";
import ForYou from '@/components/ForYou';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});

interface BannerProps {
  bannerDesktop: string[];
  bannerMobile: string[];
  bannerTexts: { title: string; description: string; buttonText: string }[];
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
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
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
  const bannerDesktop: string[] = [
    '/Adegas-home/Banner-Topo-WINE-COOLER.png',
    '/Adegas-home/Banner-Topo.png',
  ];
  const bannerMobile: string[] = ['/Adegas-home/wine-mobile.png', '/Adegas-home/beverage-mobile.png'];

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
      name: 'Ar Condicionados',
      imageSrc: '/Janela/1.png',
      link: '/ar-condicionados'
    },
    {
      name: 'Lava e Seca',
      imageSrc: '/LavaSeca/1.jpg',
      link: '/lava-e-seca'
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check the screen size on component mount

    window.addEventListener('resize', handleResize); // Update on window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  // Texts for each banner
  const bannerTexts = [
    { title: 'Wine Cooler', description: 'Preserve o sabor e a elegância de cada garrafa', buttonText: 'COMPRE AGORA' },
    { title: 'Beverage Cooler', description: 'Sua bebida sempre na temperatura ideal', buttonText: 'COMPRE AGORA' },
  ];

  return (
    <main className="max-w-[1920px] mx-auto">
      <div className="h-[100vh]">
        <Banner bannerDesktop={bannerDesktop} bannerMobile={bannerMobile} bannerTexts={bannerTexts} />
      </div>

      <section className='py-28 bg-dark'>

        <div className="text-center pb-10">
          <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-white">Conheça a adega ideal para você</h2>
        </div>

        <div className="max-w-[750px] px-3 mx-auto">
          <Swiper
            slidesPerView={isMobile ? 1 : 2}
            spaceBetween={30}
            autoplay
            loop
            modules={[Navigation, Pagination, Autoplay]}
            className="carousel"
          >
            <SwiperSlide>
              <div className="relative rounded-[2rem] overflow-hidden min-h-[340px]">
                <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full z-[2]"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image quality={100} className="object-cover h-auto w-auto" src='/Adegas-home/beverage.png' alt="" fill />
                </div>
                <div className="absolute bottom-12 w-full h-full flex items-center justify-end flex-col px-4">
                  <h4 className="font-bold text-xl text-white mb-3 z-[3]">Wine Cooler</h4>
                  <div className="w-[60%] z-[3]">
                    <Link href='/eletrodomesticos/wine-cooler'>
                      <button className="border border-white bg-transparent w-full hover:bg-hisense hover:border-hisense duration-300 text-white rounded-3xl relative text-sm pb-2 pt-3 px-5">
                        Saiba mais
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative rounded-[2rem] overflow-hidden min-h-[340px]">
                <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full z-[2]"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image quality={100} className="object-cover h-auto w-auto" src='/Adegas-home/wine.png' alt="" fill />
                </div>
                <div className="absolute bottom-12 w-full h-full flex items-center justify-end flex-col px-4">
                  <h4 className="font-bold text-xl text-white mb-3 z-[3]">Beverage Cooler</h4>
                  <div className="w-[60%] z-[3]">
                    <Link href='/eletrodomesticos/beverage'>
                      <button className="border border-white bg-transparent w-full hover:bg-hisense hover:border-hisense duration-300 text-white rounded-3xl relative text-sm pb-2 pt-3 px-5">
                        Saiba mais
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>


      <section className="mx-auto bg-white overflow-hidden">
        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/Adegas-home/estatico1.png' alt="" width={1920} height={1080} quality={100} />

          <div className="lg:bg-gradient-to-r bg-gradient-to-t from-dark lg:opacity-50 opacity-80 absolute top-0 h-full w-full"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[15%] left-[10%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[600px]">
              <h2 className="text-white lg:text-4xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Proteção e elegância para os seus vinhos
              </h2 >
              <p className="text-white  lg:text-1xl" >
                Com prateleiras que possuem fechamento suave, a adega
                da Hisense foi projetada para oferecer uma experiência mais
                confortável e segura. Esse sistema evita impactos e vibrações
                que possam prejudicar a qualidade dos seus vinhos, garantindo
                que cada garrafa seja tratada com o cuidado que merece.
                Além disso, a capacidade para até 54 garrafas permite que
                você organize sua coleção com eficiência, mantendo todos os
                rótulos prontos para serem apreciados. Aproveite a combinação
                de design elegante e tecnologia pensada para preservar seus
                vinhos, proporcionando uma experiência perfeita em cada taça.
              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Adegas-home/estatico1-mobile.png' alt="" width={750} height={1200} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[5%] left-[5%] md:hidden overflow-hidden z-[5]">
            <div className="max-w-[480px] text-white">
              <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Proteção e elegância para os seus vinhos
              </h2>
              <p>
                Com prateleiras que possuem fechamento suave, a adega
                da Hisense foi projetada para oferecer uma experiência mais
                confortável e segura. Esse sistema evita impactos e vibrações
                que possam prejudicar a qualidade dos seus vinhos, garantindo
                que cada garrafa seja tratada com o cuidado que merece.
                Além disso, a capacidade para até 54 garrafas permite que
                você organize sua coleção com eficiência, mantendo todos os
                rótulos prontos para serem apreciados. Aproveite a combinação
                de design elegante e tecnologia pensada para preservar seus
                vinhos, proporcionando uma experiência perfeita em cada taça.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/Adegas-home/estatico2.png' alt="" width={1920} height={1080} quality={100} />

          <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[13%] left-[12%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[550px]">
              <h2 className="text-white lg:text-4xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Porta de Vidro com Proteção UV
              </h2 >
              <p className="text-white lg:text-1xl" >
                A porta de vidro com UV Protection da adega Hisense foi
                desenvolvida para proteger seus vinhos contra os efeitos
                nocivos da luz ultravioleta. Essa proteção evita o envelhecimento
                prematuro, mantendo o sabor e os aromas dos vinhos por muito
                mais tempo. Seja armazenando um vinho especial ou sua coleção
                de rótulos favoritos, o vidro UV Protection garante que cada garrafa
                seja preservada nas condições ideais.
              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Adegas-home/estatico2-mobile.png' alt="" width={750} height={1200} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[7%] left-[5%] md:hidden overflow-hidden z-[5]">
            <div className="max-w-[480px] text-white">
              <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Porta de Vidro com Proteção UV
              </h2>
              <p>
                A porta de vidro com UV Protection da adega Hisense foi
                desenvolvida para proteger seus vinhos contra os efeitos
                nocivos da luz ultravioleta. Essa proteção evita o envelhecimento
                prematuro, mantendo o sabor e os aromas dos vinhos por muito
                mais tempo. Seja armazenando um vinho especial ou sua coleção
                de rótulos favoritos, o vidro UV Protection garante que cada garrafa
                seja preservada nas condições ideais.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Recomendações */}
      <section>
        <ForYou products={items} title='Descubra a solução ideal para sua vida' />
      </section>

    </main>
  );
}
