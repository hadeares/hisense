'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import ForYou from '@/components/ForYou';

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
                  <h1 className="text-white text-5xl md:text-5xl font-bold">
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

  const [isMobile, setIsMobile] = useState(false);

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
      name: 'Ar Condicionados',
      imageSrc: '/Janela/1.png',
      link: '/ar-condicionados'
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

  const bannerDesktop: string[] = [
    '/homeLavaSeca/Banner-Topo.png',

  ];
  const bannerMobile: string[] = [
    '/homeLavaSeca/fullimage-mobile.png',


  ];

  // Textos para cada banner
  const bannerTexts = [
    { title: 'Lava e Seca', description: 'Roupas limpas e impecáveis com tecnologia que cuida.', buttonText: 'COMPRE AGORA' },

  ];

  return (
    <main className="max-w-[1920px] mx-auto">
      <div className="h-[100vh]">
        <Banner bannerDesktop={bannerDesktop} bannerMobile={bannerMobile} bannerTexts={bannerTexts} />
      </div>

      <section className='py-28 bg-dark'>

        <div className="text-center pb-10">
          <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-white">Mais tempo para você, mais cuidado para suas roupas</h2>
        </div>

        <div className="max-w-[900px] px-5 mx-auto">
          <Swiper
            slidesPerView={isMobile ? 1 : 2}
            autoplay
            loop
            spaceBetween={20}
            modules={[Navigation, Pagination, Autoplay]}
            className="carousel"
          >
            <SwiperSlide>
              <div className="relative rounded-[2rem] overflow-hidden min-h-[380px] max-w-[100%] mx-auto">
                <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full z-[2]"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image quality={100} className="object-cover" src='/homeLavaSeca/lava-seca-3s.png' alt="" fill />
                </div>
                <div className="absolute bottom-12 w-full h-full flex items-center justify-end flex-col px-4">
                  <h4 className="font-bold text-xl text-white mb-3 z-[3]">Lava e Seca 3S</h4>
                  <div className="w-[60%] z-[3]">
                    <Link href={'/eletrodomesticos/lava-e-seca-3s'}>
                      <button className="border border-white bg-transparent w-full hover:bg-hisense hover:border-hisense duration-300 text-white rounded-3xl relative text-sm pb-2 pt-3 px-5">
                        Saiba mais
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative rounded-[2rem] overflow-hidden min-h-[380px] max-w-[100%] mx-auto">
                <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full z-[2]"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image quality={100} className="object-cover h-auto w-auto" src='/homeLavaSeca/lava-seca-qx.png' alt="" fill />
                </div>
                <div className="absolute bottom-12 w-full h-full flex items-center justify-end flex-col px-4">
                  <h4 className="font-bold text-xl text-white mb-3 z-[3]">Lava e Seca QX</h4>
                  <div className="w-[60%] z-[3]">
                    <Link href={'/eletrodomesticos/lava-e-seca-qx'}>
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
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/homeLavaSeca/Banner-Feature02.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[30%] left-[12%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[550px]">
              <h2 className="text-dark lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Motor Inverter
              </h2>
              <p className="text-dark">
                Com o motor inverter de última geração, nossa linha de Lava e Seca oferece um desempenho superior, minimizando o ruído e aumentando a eficiência. Esse motor ajusta a velocidade automaticamente, proporcionando uma lavagem mais silenciosa, perfeita para qualquer hora do dia ou da noite. Além de ser mais durável e econômico, o motor inverter reduz vibrações, diminuindo o desgaste das peças e prolongando a vida útil da máquina. Assim, você tem um eletrodoméstico mais eficiente, com menor consumo de energia e 10 anos de garantia, garantindo tranquilidade e conforto na sua rotina.
              </p>
            </div>
          </motion.div>


          {/* Mobile Version */}
          <Image
            className="h-full w-full object-cover object-right-bottom md:hidden"
            src='/homeLavaSeca/Banner-Feature02-mobile.png'
            alt=""
            width={1920}
            height={1080}
            quality={100}
          />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[5%] left-[5%] md:hidden overflow-hidden z-[5]"
          >
            <div className="max-w-[450px]">
              <h2 className="text-dark text-[20px] pb-2 font-bold tracking-tight leading-snug">
                Motor Inverter
              </h2>
              <p className="text-dark text-[13px] leading-snug">
                Com o motor inverter de última geração, nossa linha de Lava e Seca oferece um desempenho superior, minimizando o ruído e aumentando a eficiência. Esse motor ajusta a velocidade automaticamente, proporcionando uma lavagem mais silenciosa, perfeita para qualquer hora do dia ou da noite. Além de ser mais durável e econômico, o motor inverter reduz vibrações, diminuindo o desgaste das peças e prolongando a vida útil da máquina. Assim, você tem um eletrodoméstico mais eficiente, com menor consumo de energia e 10 anos de garantia, garantindo tranquilidade e conforto na sua rotina.
              </p>
            </div>
          </motion.div>


        </div>

        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/homeLavaSeca/Banner-Features-LavaESeca.png' alt="" width={1920} height={1080} quality={100} />
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[40%] left-[10%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[550px] text-white">
              <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Jet Wash
              </h2>
              <p>
                Essa tecnologia utiliza um jato forte e contínuo de água, proporcionando uma limpeza profunda e eficiente em menos tempo. Esse fluxo direcionado remove sujeiras difíceis e garante que até mesmo as peças mais exigentes sejam lavadas com precisão.<br></br>
                Ideal para quem busca rapidez sem abrir mão da qualidade, o Jet Wash oferece um ciclo mais curto e eficiente, reduzindo o consumo de água e energia. Agora, você pode lavar suas roupas com confiança, sabendo que cada peça sairá impecável e pronta para uso.
              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image
            className="h-full w-full object-cover object-right-bottom md:hidden"
            src='/homeLavaSeca/Banner-Features-LavaESeca-mobile.png'
            alt=""
            width={1920}
            height={1080}
            quality={100}
          />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[7%] left-[5%] md:hidden overflow-hidden z-[5]"
          >
            <div className="max-w-[450px]">
              <h2 className="text-white text-[22px] pb-2 font-bold tracking-tight leading-snug">
                Jet Wash
              </h2>
              <p className="text-white text-[14px] leading-snug">
                Essa tecnologia utiliza um jato forte e contínuo de água, proporcionando uma limpeza profunda e eficiente em menos tempo. Esse fluxo direcionado remove sujeiras difíceis e garante que até mesmo as peças mais exigentes sejam lavadas com precisão.<br></br>
                Ideal para quem busca rapidez sem abrir mão da qualidade, o Jet Wash oferece um ciclo mais curto e eficiente, reduzindo o consumo de água e energia. Agora, você pode lavar suas roupas com confiança, sabendo que cada peça sairá impecável e pronta para uso.
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
