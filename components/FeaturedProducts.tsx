"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css/bundle';
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const FeaturedProducts = () => {
  const [banner, setBanner] = useState('/home/banner-featured-1.png');
  const [activeTech, setActiveTech] = useState('Tecnologia QLED');
  const [tvOn, setTvOn] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const controls = useAnimation();
  const sectionRef = useRef(null);

  const technologies = [
    {
      name: 'Smart TV QLED 100U7',
      imageSrc: '/home/banner-featured-1.png',
      title: "Contraste e brilho mais intensos",
      description: "",
      buttonText: "Saiba mais",
      link: "/televisores/100U7N",
      textImageSrc: '/qled-home.png',
      hasSpecialAnimation: true,
    },
    {
      name: 'Smart TV MiniLED U8N',
      imageSrc: '/banner-desktop-featureU8.png',
      title: "A tecnologia por trás da experiência visual perfeita",
      description: "",
      buttonText: "Saiba mais",
      link: "/televisores/U8N",
      textImageSrc: '/hi-view-home.png',
      hasSpecialAnimation: false,
    },
    {
      name: 'Ar Condicionado Split Hi-Wall',
      imageSrc: '/banner-desktop-acsplit-feature.png',
      title: "Conforto silencioso, desempenho superior",
      description: "",
      buttonText: "Saiba mais",
      link: "/ar-condicionados/split",
      textImageSrc: '',
      hasSpecialAnimation: false,
    },
    {
      name: 'Lava e Seca 3S',
      imageSrc: '/banner-desktop-feature3S.png',
      title: "Cuidado completo, roupas impecáveis.",
      description: "",
      buttonText: "Saiba mais",
      link: "/eletrodomesticos/lava-e-seca-3s",
      textImageSrc: '',
      hasSpecialAnimation: false,
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setBanner('/home/banner-featured-mobile-1.png');
      } else {
        setBanner('/home/banner-featured-1.png');
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Observer para iniciar a animação quando a seção estiver visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const currentTech = technologies.find((tech) => tech.name === activeTech);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="relative"
      ref={sectionRef}
    >
      <div className="mb-6 text-center">
        <h2 className="text-[16px] lg:text-[36px] pb-2 font-bold tracking-tight leading-6 lg:leading-10">
          Produtos em destaque
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center w-full mx-auto mb-6 px-2">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center">
            <button
              className={`px-1 sm:px-2 py-1 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] border-b transition-opacity duration-500 ${tech.name === activeTech
                ? 'border-b-[#00AAA6] text-black opacity-100 font-bold'
                : 'border-b-gray-300 text-gray-500 opacity-50 hover:text-hisense duration-300 hover:border-hisense'
                }`}
              onClick={() => setActiveTech(tech.name)}
            >
              {tech.name}
            </button>
            {index < technologies.length - 1 && (
              <div className="hidden sm:block w-[6px] md:w-[8px] lg:w-[10px] h-[0px] border-t border-[#808080] transform -rotate-90 opacity-50 mx-1 sm:mx-1 md:mx-2 lg:mx-3"></div>
            )}
          </div>
        ))}
      </div>

      <Swiper modules={[EffectCreative]} slidesPerView={1} loop={false}>
        <SwiperSlide>
          <div className="relative">
            {/* Renderiza a imagem principal ou animação especial */}
            {currentTech && (
              <>
                {/* Verifica se a tecnologia ativa possui animação especial */}
                {currentTech.hasSpecialAnimation ? (
                  <motion.div className="relative w-full flex justify-center items-center">
                    {/* Ajuste do contêiner para manter a proporção */}
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                      {/* Todo o conteúdo interno é posicionado absolutamente dentro deste contêiner */}
                      <div className="absolute inset-0">
                        {/* Etapa 1: Tela preta dentro da TV */}
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 0 }}
                          transition={{ delay: 0.5, duration: 1 }}
                          style={{ zIndex: 1, backgroundColor: 'black' }}
                        ></motion.div>

                        {/* Etapa 2: Exibição do carros_bg e ele permanece visível */}
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          style={{ zIndex: 1 }}
                        >
                          <Image
                            src="/home/carros_bg.jpg"
                            alt="Carros BG"
                            fill
                            className="object-cover"
                            style={{ filter: 'brightness(0.8)' }}
                          />
                        </motion.div>

                        {/* Etapa 3: Exibição do fundo_tv por cima do carros_bg */}
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1, duration: 1 }}
                          style={{ zIndex: 2, filter: 'brightness(0.6)' }}
                          onAnimationComplete={() => setTvOn(true)}
                        >
                          <Image
                            src="/home/fundo_tv.png"
                            alt="Fundo TV"
                            fill
                            className="object-cover"
                          />
                        </motion.div>

                        {/* Etapa 4: Carros entram após a TV ligar */}
                        {tvOn && (
                          <>
                            <motion.img
                              src="/home/carro_esqueda.png"
                              alt="Carro da Esquerda"
                              className="object-contain absolute left-0 bottom-0"
                              initial={{ scale: 0, x: 0 }}
                              animate={{ scale: 1, x: 10, y: -5 }}
                              transition={{ delay: 1.5, duration: 1 }}
                              style={{ zIndex: 10 }}
                            />
                            <motion.img
                              src="/home/carro_direita.png"
                              alt="Carro da Direita"
                              className="object-contain absolute right-0 bottom-0"
                              initial={{ scale: 0, x: 0 }}
                              animate={{ scale: 1, x: -10, y: 0 }}
                              transition={{ delay: 0.5, duration: 1 }}
                              style={{ zIndex: 10 }}
                            />
                          </>
                        )}

                        {/* Texto e Botão */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white pb-4 md:pb-6 lg:pb-8 px-1 md:px-0 z-10">
                          {/* Adicionando a imagem de título */}
                          {currentTech.textImageSrc && (
                            <Image
                              src={currentTech.textImageSrc}
                              alt={`Título ${currentTech.name}`}
                              width={100}
                              height={50}
                              className="mb-1 md:mb-2 lg:mb-4"
                            />
                          )}
                          <h2 className="text-[12px] md:text-[14px] lg:text-[24px] font-bold px-1">
                            {currentTech.title}
                          </h2>
                          <p className="text-[9px] md:text-[12px] lg:text-[16px] mt-1 md:mt-1 lg:mt-2 max-w-[350px] lg:max-w-[600px] px-1">
                            {currentTech.description}
                          </p>
                          <a
                            href={currentTech.link}
                            className="banner-button mt-2 lg:mt-4"
                          >
                            {currentTech.buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // Renderiza o conteúdo padrão para tecnologias sem animação especial
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <div className="absolute inset-0">
                      <Image
                        src={currentTech.imageSrc}
                        alt={currentTech.name}
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                      />

                      {/* Texto e Botão */}
                      <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white pb-3 md:pb-4 lg:pb-8 px-1 md:px-0 z-10">
                        {/* Exibe a imagem de texto, se houver */}
                        {currentTech.textImageSrc && (
                          <Image
                            src={currentTech.textImageSrc}
                            alt={`Título ${currentTech.name}`}
                            width={100}
                            height={50}
                            className="mb-1 md:mb-2 lg:mb-4"
                            quality={100}
                          />
                        )}
                        <h2 className="text-[12px] md:text-[14px] lg:text-[24px] font-bold px-1">
                          {currentTech.title}
                        </h2>
                        <p className="text-[9px] md:text-[12px] lg:text-[16px] mt-1 md:mt-1 lg:mt-2 max-w-[350px] lg:max-w-[600px] px-1">
                          {currentTech.description}
                        </p>
                        <a
                          href={currentTech.link}
                          className="banner-button mt-2 lg:mt-4"
                        >
                          {currentTech.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Estilos do Botão */}
      <style jsx>{`
        .banner-button {
          border: 1px solid #ffffff;
          background-color: transparent;
          color: #ffffff;
          border-radius: 9999px;
          padding: 0.2rem 0.4rem;
          font-size: 0.5rem;
          transition: background-color 0.3s, color 0.3s;
          text-decoration: none;
        }
        @media (min-width: 640px) {
          .banner-button {
            font-size: 0.6rem;
            padding: 0.3rem 0.6rem;
          }
        }
        @media (min-width: 768px) {
          .banner-button {
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
          }
        }
        @media (min-width: 1024px) {
          .banner-button {
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
          }
        }
        .banner-button:hover {
          background-color: #00B3AC;
          border-color: #00B3AC;
          color: #ffffff;
        }
      `}</style>
    </motion.div>
  );
};
