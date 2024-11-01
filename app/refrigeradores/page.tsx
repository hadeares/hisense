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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check the screen size on component mount

    window.addEventListener('resize', handleResize); // Update on window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  const banners = isMobile ? bannerMobile : bannerDesktop;

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
                  <h1 className="text-white text-xl md:text-5xl font-bold uppercase">
                    {bannerTexts[index].title}
                  </h1>
                  <p className="text-white mt-4 text-base md:text-lg uppercase">
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
  const bannerDesktop: string[] = ['/Refrigeradores/banner-side.png', '/Refrigeradores/banner-french.png', '/Refrigeradores/banner-bottom.png', '/Refrigeradores/frigobar.jpg',];
  const bannerMobile: string[] = ['/Refrigeradores/side-mobile.png', '/Refrigeradores/french-mobile.png', '/Refrigeradores/bottom-mobile.png', '/Refrigeradores/frigobar-mobile.jpg',];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check the screen size on component mount

    window.addEventListener('resize', handleResize); // Update on window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  // Texts for each banner
  const bannerTexts = [
    { title: 'Side by Side', description: 'Seu dia a dia mais prático, sua cozinha mais moderna.', buttonText: 'Comprar' },
    { title: 'French Door', description: 'Elegância e funcionalidade para a sua cozinha.', buttonText: 'Comprar' },
    { title: 'Bottom Freezer', description: 'Mais fácil de organizar, mais fácil de viver.', buttonText: 'Comprar' },
    { title: 'Frigobar', description: 'Leva praticidade para sua vida.', buttonText: 'Comprar' },
  ];

  const items = [
    {
      name: 'Televisores',
      imageSrc: '/U8N/1.png',
      link: '/televisores'
    },
    {
      name: 'Ar Condicionados',
      imageSrc: '/Janela/1.png',
      link: '/ar-condicionados'
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
        <div className="bg-gradient-to-t from-dark opacity-100 absolute top-0 h-full w-full"></div>
        <Banner bannerDesktop={bannerDesktop} bannerMobile={bannerMobile} bannerTexts={bannerTexts} />
      </div>

      <section className='py-28 bg-dark'>

        <div className="text-center pb-10">
          <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-white">Conheça o refrigerador ideal para você</h2>
        </div>

        <div className="max-w-[1250px] px-3 mx-auto">
          <Swiper
            slidesPerView={isMobile ? 1 : 4}
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
                  <Image quality={100} className="object-cover h-auto w-auto" src='/Refrigeradores/french.png' alt="" fill />
                </div>
                <div className="absolute bottom-12 w-full h-full flex items-center justify-end flex-col px-4">
                  <h4 className="font-bold text-xl text-white mb-3 z-[3]">French Door</h4>
                  <div className="w-[60%] z-[3]">
                    <Link href={'/eletrodomesticos/french-door'}>
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
                  <Image quality={100} className="object-cover h-auto w-auto" src='/Refrigeradores/side.png' alt="" fill />
                </div>
                <div className="absolute bottom-12 w-full h-full flex items-center justify-end flex-col px-4">
                  <h4 className="font-bold text-xl text-white mb-3 z-[3]">Side by Side</h4>
                  <div className="w-[60%] z-[3]">
                    <Link href={'/eletrodomesticos/side-by-side'}>
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
                  <Image quality={100} className="object-cover h-auto w-auto" src='/Refrigeradores/bottom.png' alt="" fill />
                </div>
                <div className="absolute bottom-12 w-full h-full flex items-center justify-end flex-col px-4">
                  <h4 className="font-bold text-xl text-white mb-3 z-[3]">Bottom Freezer</h4>
                  <div className="w-[60%] z-[3]">
                    <Link href={'/eletrodomesticos/bottom-freezer'}>
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
                  <Image quality={100} className="object-cover h-auto w-auto" src='/Refrigeradores/frigobar.png' alt="" fill />
                </div>
                <div className="absolute bottom-12 w-full h-full flex items-center justify-end flex-col px-4">
                  <h4 className="font-bold text-xl text-white mb-3 z-[3]">Frigobar</h4>
                  <div className="w-[60%] z-[3]">
                    <Link href={'/eletrodomesticos/frigobar'}>
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

      <section className="mx-auto bg-dark overflow-hidden">
        <div className="w-full h-full relative">
          <Image className="h-full w-full object-cover hidden md:block" src='/Refrigeradores/airflow.png' alt="" width={1920} height={1080} quality={100} />

          <div className="bg-gradient-to-t from-dark opacity-0 absolute top-0 h-full w-full"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[7%] left-[10%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[700px] text-dark">
              <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Sistema Multi Air Flow
              </h2>
              <p>Esse sistema avançado evita o acúmulo de calor em
                determinados pontos e minimiza a oscilação de temperatura,
                ideal para armazenar frutas, vegetais e laticínios com máxima
                eficiência. Além disso, o Multi Air Flow otimiza o resfriamento
                rápido de itens recém-armazenados, garantindo que tudo se
                mantenha fresco desde o momento em que entra na geladeira.</p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image className="h-full w-full object-cover md:hidden" src='/Refrigeradores/airflow-mobile.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
            <div className="max-w-[550px]">
              <h2 className="text-dark lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Sistema Multi Air Flow
              </h2>
              <p>Esse sistema avançado evita o acúmulo de calor em
                determinados pontos e minimiza a oscilação de temperatura,
                ideal para armazenar frutas, vegetais e laticínios com máxima
                eficiência. Além disso, o Multi Air Flow otimiza o resfriamento
                rápido de itens recém-armazenados, garantindo que tudo se
                mantenha fresco desde o momento em que entra na geladeira.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto bg-dark overflow-hidden">
        <div className="w-full h-full relative">
          <Image className="h-full w-full object-cover hidden md:block" src='/HomeRefrigeradores/banner-2.png' alt="" width={1920} height={1080} quality={100} />

          <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[10%] right-[33%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[700px] text-white text-center">
              <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Aço resistente a impressões digitais
              </h2>
              <p className='text-start'>Os refrigeradores Hisense mantêm um visual sofisticado e
                impecável, mesmo com o uso diário. O aço inoxidável com
                essa tecnologia é altamente durável e fácil de limpar, ideal
                para quem busca praticidade e elegância em um único produto.
                Seja na cozinha de casa ou em espaços gourmet, seu
                refrigerador estará sempre apresentável, acompanhando seu
                estilo e facilitando a rotina.</p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image className="h-full w-full object-cover md:hidden" src='/FrenchDoor/estatico2-mobile.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[5%] left-[5%] md:hidden overflow-hidden z-[5]">
            <div className="max-w-[430px] text-white">
              <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Aço resistente a impressões digitais
              </h2>
              <p>Os refrigeradores Hisense mantêm um visual sofisticado e
                impecável, mesmo com o uso diário. O aço inoxidável com
                essa tecnologia é altamente durável e fácil de limpar, ideal
                para quem busca praticidade e elegância em um único produto.
                Seja na cozinha de casa ou em espaços gourmet, seu
                refrigerador estará sempre apresentável, acompanhando seu
                estilo e facilitando a rotina.</p>
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
