// U8N.tsx

'use client';

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactCompareImage from 'react-compare-image';
import ProductPresentation from "@/components/ProductPresentation";
import VideoContainer from "@/components/VideoContainer ";
import Specifications from "@/components/Specifications";
import { FaArrowCircleUp } from "react-icons/fa";
import ForYou from "@/components/ForYou";
import Footer from "@/components/Footer";
import ProductBar from "@/components/ProductBar";

interface ProductProps {
  productImages: string[];
  technologyImage: string;
  name: string;
  copy: string;
  features: string[];
  type: string;
  sizes: string[];
}

interface StoreLink {
  name: string;
  logo: string;
  link: string;
}

export default function U8N() {
  const productRef = useRef<HTMLButtonElement>(null);

  // Função para abrir o modal de "Onde Comprar"
  const openStoreModal = () => {
    if (productRef.current) {
      productRef.current.click();
    }
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const productProps: ProductProps = {
    productImages: ['/A4N/1.png', '/A4N/A4N_2.webp', '/A4N/A4N_3.webp', '/A4N/A4N_4.webp', '/A4N/A4N_5.webp', '/A4N/A4N_6.webp'],
    technologyImage: '',
    name: 'Hisense Smart TV FHD A4N',
    copy: 'Deixe fluir sua paixão',
    features: ['Full HD', 'Game Mode Plus AI', 'Share TV', 'Modo AI Esportes'],
    type: 'Tamanhos de tela:',
    sizes: ['40"', '43"']
  };

  const storeLinks: Record<string, StoreLink[]> = {
    '40"': [
      {
        name: 'Casas Bahia',
        logo: '/casas_bahia.png',
        link: 'https://www.casasbahia.com.br/smart-tv-40-hisense-full-hd-dled-a4n-com-sistema-operacional-vidaa-modo-game-dolby-audio-depth-enhancer-e-modo-ai-esportes-40a35hsv/p/55066607?utm_source=gp_branding&utm_medium=cpc&utm_campaign=gg_brd_inst_cb_exata',
      },
    ],
    '43"': [
      {
        name: 'Casas Bahia',
        logo: '/casas_bahia.png',
        link: 'https://www.casasbahia.com.br/smart-tv-43-hisense-fhd-43a35hsv-tela-dled-com-wi-fi-bluetooth-usb-e-hdmi/p/55066172',
      },
      {
        name: 'Amazon',
        logo: '/amazon.png',
        link: 'https://www.amazon.com.br/Hisense-Polegadas-Virtual-Controle-Compat%C3%ADvel/dp/B0D6WHFRSX/ref=sr_1_3_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TLZ70QTZ3D9G&dib=eyJ2IjoiMSJ9.6_Ae_nnL4GIRWp-C_aKSxt_nyGkJuJ6ZEziac8-Mw68E7USwXKByTWWvOJOADIIWJRNmbckCjaBQpK0IQVupyPlm2qajt_EkdHv3bJtof9o_zpvJD3izGc26GdXdXCHgkLCiuZqNVJ55lF5lXnIA_WMXgzfBbRndcZUVnMj-yOGv0HGcKBWDAeBN2BDdq_lMWd2vrasqtGDIxLjwRmJiIru3YVPV7Zu_jjFWrk9CkRTQyMC6Ms527IJJSG5IM3CrQd5ZsZlpKCd_hsbkrIkdrMbC4dBYvLMC037TovSOBQQ.MkodPX-tNhaMQJ6GGRVSM9W3Lx00NfHfg3rdC80mTbE&dib_tag=se&keywords=hisense+TV&qid=1727725442&sprefix=hisense+tv%2Caps%2C263&sr=8-3-spons&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
      },
    ],
  };

  const productItems = [
    {
      name: 'Hisense Smart TV QLED 100U7',
      imageSrc: '/100U7/100U7_1.png',
      link: '/televisores/100U7N'
    },
    {
      name: 'Hisense Smart TV ULED MiniLED U8N',
      imageSrc: '/U8N/1.png',
      link: '/televisores/U8N'
    },
    {
      name: 'Hisense Smart TV ULED MiniLED 4K U7N',
      imageSrc: '/U7N/U7N_1.png',
      link: '/televisores/U7N'
    },
    {
      name: 'Hisense Smart TV QLED 4K Q6N',
      imageSrc: '/Q6N/1.png',
      link: '/televisores/Q6N'
    },
  ];

  const specificationsDataA4N = [
    {
      title: 'Informações Gerais',
      content: [
        { item: 'Modelo', description: 'Hisense Smart TV A4N' },
        { item: 'Sistema Operacional', description: 'VIDAA' },
        { item: 'Idioma do Display', description: 'Inglês | Espanhol | Português' },
        { item: 'Wi-Fi', description: 'Sim' },
        { item: 'Bluetooth', description: 'Sim' },
        { item: 'Garantia', description: 'Sim' },
      ],
    },
    {
      title: 'Vídeo',
      content: [
        { item: 'Tamanho da Tela', description: '40’’ | 43’’' },
        { item: 'Tipo de Tela', description: 'DLED TV' },
        { item: 'Resolução', description: '1920px X 1008px' },
        { item: 'Taxa de Movimento', description: '60' },
        { item: 'Retroluminação', description: 'Direct Full Array' },
      ],
    },
    {
      title: 'Áudio',
      content: [
        { item: 'Potências', description: '40’’ – 6W x 2, 43’’ – 6W x 2' },
        { item: 'Aperfeiçoamento de Som', description: 'DTS Virtual X, DTS HD' },
      ],
    },
    {
      title: 'Recursos Smart',
      content: [
        { item: 'Smart TV', description: 'Sim (VIDAA)' },
        { item: 'App Store', description: 'Sim (VIDAA App)' },
      ],
    },
    {
      title: 'Dimensões e Peso',
      content: [
        { item: 'Dimensões do produto (sem suporte)', description: '40’’ – 900 mm × 515 mm × 85 mm, 43’’ – 965 mm × 563 mm × 88 mm' },
        { item: 'Dimensões do produto (com suporte)', description: '40’’ – 900 mm × 565 mm × 182 mm, 43’’ – 965 mm × 611 mm × 182 mm' },
        { item: 'Dimensões da embalagem', description: '40’’ – 1008 mm × 615 mm × 129 mm, 43’’ – 1080 mm × 132 mm × 656 mm' },
        { item: 'Peso do Produto', description: '40’’ – 7,9 Kg, 43’’ – 8,9 Kg' },
      ],
    },
    {
      title: 'Consumo',
      content: [
        { item: 'Consumo de Energia', description: '110W' },
        { item: 'Consumo em Standby', description: '<0.5W' },
        { item: 'Fonte de Alimentação', description: '100-240V, 50/60Hz' },
      ],
    },
    {
      title: 'Portas',
      content: [
        { item: 'HDMI', description: '2' },
        { item: 'HDMI eARC', description: 'Sim' },
        { item: 'RCA', description: '1' },
        { item: 'USB 2.0', description: '1' },
        { item: 'Saída para Fone', description: '1' },
        { item: 'L/R AUDIO', description: '1' },
        { item: 'RF', description: '1' },
        { item: 'Áudio Digital', description: '1 Óptico' },
        { item: 'HDMI CEC', description: 'Sim' },
      ],
    },
    {
      title: 'Funcionalidades',
      content: [
        { item: 'Alexa', description: 'Não' },
        { item: 'Google Assistant', description: 'Não' },
        { item: 'VIDAA Voice', description: 'Sim' },
        { item: 'Google Smart Home', description: '40’’ – Não , 43’’ – Sim' },
      ],
    },
  ];

  return (
    <main className="max-w-[1920px] mx-auto">

      <ProductBar
        productName={productProps.name}
        openStoreModal={openStoreModal}
      />

      {/* Seção Inicial */}
      <section>
        <div className="relative h-[100vh] w-full m-0 p-0 overflow-hidden">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="absolute bottom-[5%] lg:top-[23%] left-[15%]"
          >
            <motion.div variants={item}>
              <Image className="scale-75 lg:scale-100" src='/A4N/A4.png' alt="Logo A4 TV" width={470} height={500} quality={100} />
            </motion.div>
          </motion.div>

          <Image className="h-full w-full object-cover hidden md:block" src='/A4N/A4N-KV.png' alt="Imagem key visual da televisão U8N" width={2268} height={948} quality={100} />
          <Image className="h-full w-full object-cover md:hidden" src='/A4N/A4N-KV-mobile.png' alt="Imagem key visual da televisão U8N" width={2268} height={948} quality={100} />
        </div>
      </section>

      {/* ProductPresentation */}
      <ProductPresentation
        productProps={productProps}
        stores={storeLinks}
        ref={productRef}
      />

      {/* Seção Principais Características */}
      <section id="principais-caracteristicas" className="mx-auto px-3 py-20 bg-gray-100">
        <div className="max-w-[1250px] mx-auto">
          <div className="mb-10 text-center">
            <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Principais características</h2>
          </div>

          <div className="grid grid-cols-12 gap-3 lg:gap-5 min-h-[400px]">
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-white hover:shadow-xl duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center p-20">
                <Image src="/A4N/FHD-icon.png" alt="Full HD Icon" width={202} height={32} />
                <span>Full HD</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
              <div className="bg-white hover:shadow-xl duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/A4N/contrast.png" alt="Alto Contraste Icon" width={102} height={32} />
                <span className="text-xs md:text-sm">Alto Contraste</span>
              </div>
              <div className="bg-white hover:shadow-xl duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/A4N/ai-mode.png" alt="Modo AI Esportes Icon" width={102} height={32} />
                <span className="text-xs md:text-sm">Modo AI Esportes</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
              <div className="bg-white hover:shadow-xl duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/U8N/hdr.png" alt="Intensificador de Cor Natural Icon" width={132} height={32} />
                <span className="text-xs md:text-sm">Intensificador de Cor Natural</span>
              </div>
              <div className="bg-white hover:shadow-xl duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/A4N/DTS-black-icon.png" alt="DTS-HD Icon" width={152} height={32} />
                <Image src="/A4N/dolby-audio-black.png" alt="Dolby Audio Icon" width={152} height={32} />
                <span className="text-xs md:text-sm mt-3">DTS-HD e Dolby Audio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Vídeo */}
      <section>
        <VideoContainer videoSrc="/A4N/videos/A4N_video.mp4" />
      </section>

      {/* Seção Intensificador de Cor Natural */}
      <section className="mx-auto bg-dark overflow-hidden">
        <div className="w-full h-full relative">
          <Image className="h-full w-full object-cover hidden md:block" src='/A4N/FHD-background.jpg' alt="FHD Background" width={1920} height={1080} quality={100} />
          <motion.div
            animate={{
              scale: 1.08
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute top-[25%] left-[15%] hidden lg:block w-[60%]"
          >
            <div>
              <Image src='/A4N/FHD-overlay.png' alt="FHD Overlay" width={1200} height={1080} quality={100} />
              <Image className="ml-[50%] mt-[-3%]" src='/A4N/FHD.png' alt="FHD" width={200} height={1080} quality={100} />
            </div>
          </motion.div>

          {/* Versão Mobile */}
          <Image className="h-full w-full object-cover md:hidden" src='/A4N/FHD-mobile.png' alt="FHD Mobile" width={1920} height={1080} quality={100} />

          <div className="lg:absolute top-[35%] right-[4%] max-w-[600px] px-3 py-20 lg:p-0 z-[3] lg:w-[30%]">
            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Veja os detalhes nítidos e claros</h4>
            <p className="text-gray-300 text-md">
              Seja no sofá, na cama ou em uma reunião de amigos, todos
              desfrutam da mesma experiência de visualização sem
              distorções. A tecnologia FHD e cores vibrantes
              e precisas intensificam a experiência visual, deixando
              seus filmes, séries e jogos ainda mais envolventes. Os amplos ângulos de visão asseguram a qualidade da imagem, independentemente de onde você esteja assistindo.            </p>
          </div>
        </div>
      </section>

      {/* Seção Alto Contraste */}
      <section className="mx-auto bg-dark overflow-hidden">
        <div className="w-full h-full relative">
          <motion.div
            animate={{
              scale: 1.1,
              x: -10
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Image className="h-full w-full object-cover hidden md:block overflow-hidden" src='/A4N/contrast-TV-2.png' alt="Contrast Background" width={1920} height={1080} quality={100} />
          </motion.div>

          <div
            className="absolute top-0 left-0 w-full"
          >
            <Image src='/A4N/contrast-bg.png' alt="Contrast TV" width={1920} height={1080} quality={100} />
          </div>

          {/* Versão Mobile */}
          <Image className="h-full w-full object-cover md:hidden" src='/A4N/high-contrast-mobile.png' alt="High Contrast Mobile" width={1920} height={1080} quality={100} />

          <div className="text-white lg:text-dark lg:absolute top-[12%] left-[7%] max-w-[600px] px-3 py-20 lg:p-0 z-[3] lg:w-[30%]">
            <h4 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Descubra cada detalhe e a profundidade</h4>
            <p className="text-md">
              Cada cena é revelada com contraste aprimorado e detalhes que fazem a diferença. As cores brancas se tornam mais brilhantes, enquanto os pretos ganham profundidade, garantindo tons mais intensos e vibrantes. Isso proporciona uma experiência visual que combina fidelidade e riqueza de cores em cada momento.<br></br>
              Com nossa tecnologia, você enxerga cada nuance nas sombras e aproveita imagens mais realistas, destacando os detalhes ocultos em filmes, séries e jogos. Tudo isso traz mais imersão e realismo para o conteúdo que você mais gosta, elevando sua experiência visual.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Comparação de Imagem */}
      <section className="bg-dark pt-10 pb-20 mt-[-5px]">
        <div className="max-w-[1250px] mx-auto lg:py-20 lg:px-3">
          <div className="lg:rounded-[2rem] overflow-hidden">
            <ReactCompareImage leftImage="/A4N/color-bg.jpg" rightImage="/A4N/color-bg_2.jpg" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 }
            }}
            className="flex flex-col md:flex-row gap-3 mt-14 px-3"
          >
            <div className="flex-1">
              <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Em sintonia com a Natureza</h4>
            </div>
            <div className="flex-1 md:px-5">
              <p className="text-md text-gray-300">
                Com o Intensificador de Cor Natural da Smart TV A4N, cada
                imagem na tela ganha vida com cores fiéis à realidade.
                Seja nos tons suaves do amanhecer ou nas cores vibrantes
                de uma floresta outonal, essa tecnologia ajusta
                automaticamente cada nuance para refletir a beleza
                genuína do mundo ao seu redor.

                Essa função não apenas melhora a vivacidade das cores,
                mas também entrega uma experiência visual mais
                próxima da natureza. Filmes, séries e documentários
                ganham uma nova dimensão, permitindo que você sinta
                a essência das paisagens e dos momentos, como se estivesse lá.              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Depth Enhancer */}
      <section className="mx-auto bg-dark overflow-hidden">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-30 hidden lg:block"></div>
          <Image className="h-full w-full object-cover hidden md:block" src='/A4N/Depth-Enhancer.webp' alt="Depth Enhancer" width={1920} height={1080} quality={100} />

          {/* Versão Mobile */}
          <Image className="h-full w-full object-cover md:hidden" src='/A4N/depth-enhancer-mobile.png' alt="Depth Enhancer Mobile" width={1920} height={1080} quality={100} />

          <div className="lg:absolute top-[35%] left-[17%] max-w-[600px] px-3 py-20 lg:p-0 z-[3]">
            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Entre as camadas de cada imagem</h4>
            <p className="text-gray-300 text-md">
              Com o Depth Enhancer da Hisense, cada cena ganha uma nova
              dimensão. Essa tecnologia analisa diferentes áreas da imagem
              e ajusta o contraste de forma inteligente para criar uma sensação
              de profundidade mais realista. Assim, elementos em primeiro
              plano e ao fundo se destacam com clareza, proporcionando
              uma experiência visual mais imersiva.<br></br>
              A sensação é de estar mais perto da ação, seja assistindo filmes,
              séries ou transmissões ao vivo. A tecnologia torna as imagens
              mais ricas e envolventes, permitindo que você aproveite cada
              detalhe com a qualidade e nitidez que só a Hisense oferece.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Redutor de Ruído */}
      <section className="bg-dark">
        <div className="max-w-[1920px] mx-auto">
          <ReactCompareImage leftImage="/A4N/ruido-bg.jpg" rightImage="/A4N/ruido-bg_2.png" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 }
            }}
            className="flex flex-col md:flex-row gap-3 py-20 max-w-[1250px] mx-auto px-3"
          >
            <div className="flex-1">
              <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Imagem nítida e livre de ruídos</h4>
            </div>
            <div className="flex-1 md:px-5">
              <p className="text-md text-gray-300">
                Cada detalhe da imagem é otimizado para que você desfrute de
                uma experiência visual mais clara e envolvente. Usando
                algoritmos avançados, essa tecnologia analisa e elimina ruídos
                visuais presentes na imagem, seja em filmes antigos ou
                no mais recente lançamento.<br></br>
                A combinação de tecnologia 3D dinâmica e filtros estáticos
                2D garante que cada cena seja exibida com a máxima nitidez,
                sem interferências que distraiam o seu olhar. Assim, você pode
                focar no que realmente importa – a qualidade do conteúdo
                – com imagens mais limpas e naturais.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção DTS-HD e Dolby Audio */}
      <section className="mx-auto bg-dark overflow-hidden">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-80 hidden lg:block"></div>
          <Image className="h-full w-full object-cover hidden md:block" src='/A4N/dts-bg.jpg' alt="DTS Background" width={1920} height={1080} quality={100} />
          <motion.div
            animate={{
              scale: 1.05
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute top-0 left-[2%] hidden md:block w-[90%]"
          >
            <Image src='/A4N/dts-overlay.png' alt="DTS Overlay" width={1920} height={1080} quality={100} />
          </motion.div>
          <div
            className="absolute bottom-[6%] right-[8%] hidden md:block z-[3]"
          >
            <Image src='/A4N/dolby-digital-white.png' alt="Dolby Digital White" width={347} height={52} quality={100} />
            <Image src='/A4N/dts-icon.png' alt="DTS Icon" width={367} height={85} quality={100} />
          </div>

          {/* Versão Mobile */}
          <Image className="h-full w-full object-cover md:hidden" src='/A4N/dts-mobile.png' alt="DTS Mobile" width={1920} height={1080} quality={100} />
        </div>
      </section>

      {/* Seção Experiências de Áudio */}
      <section className="bg-dark">
        <div className="max-w-[1250px] mx-auto lg:py-14 px-3 lg:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 }
            }}
            className="flex flex-col md:flex-row gap-2 py-14"
          >
            <div className="flex-1">
              <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Som imersivo para experiências
                de entretenimento impressionantes</h4>
            </div>
            <div className="flex-1 md:px-2">
              <p className="text-md text-gray-300">
                Transforme sua experiência de entretenimento com a
                Smart TV A4N, onde o som parece vir de todos os lados,
                sem precisar de múltiplos alto-falantes. Com as tecnologias
                DTS-HD e Dolby Audio, você tem um som envolvente que eleva
                o impacto das cenas e músicas favoritas. O DTS-HD permite
                decodificar áudio de alta resolução, oferecendo até 7.1 canais,
                ideal para conteúdos de streaming, discos Blu-ray e mídias USB.
                Já o Dolby Audio garante diálogos nítidos e um som surround
                realista, proporcionando uma imersão completa, como
                se você estivesse dentro da ação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto px-3 pb-14 bg-dark overflow-hidden">
        <div className="max-w-[1250px] mx-auto">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="flex flex-col md:flex-row gap-16 items-center"
          >
            <div className="flex-1 rounded-[2rem] overflow-hidden">
              <Image src='/A4N/game-mode.png' alt="" width={743} height={744} quality={100} />
            </div>
            <div className="flex-1 md:px-2">
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                Suba no ranking
              </h4>
              <p className="text-md text-gray-300">
                Desperte o gamer que existe em você! Entre no modo de jogo da
                Hisense e deixe o atraso no passado. Com um tempo de resposta
                otimizado de apenas 16ms, cada movimento, estratégia e decisão
                rápida são instantaneamente refletidos na tela. Mergulhe em seus
                jogos, onde suas habilidades se destacam sem interrupções,
                proporcionando uma experiência competitiva e envolvente.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="flex flex-col-reverse md:flex-row gap-16 items-center py-16"
          >
            <div className="flex-1 md:px-2">
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                Controle total na palma da sua mão
              </h4>
              <p className="text-md text-gray-300">
                Sinta a liberdade de controlar sua experiência de entretenimento sem
                esforço, tornando cada momento mais agradável e interativo. Com o
                Controle Remoto por Voz, Assistente de Voz Integrado e a VIDAA VOICE,
                sua TV Hisense se torna ainda mais inteligente! Mude de canal, ajuste o
                volume ou encontre seu filme favorito com apenas um comando de voz.
                É o futuro da TV, disponível na palma da sua mão!
              </p>
            </div>
            <div className="flex-1 rounded-[2rem] overflow-hidden">
              <Image src='/A4N/vidaa.png' alt="" width={743} height={744} quality={100} />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="flex flex-col md:flex-row gap-16 items-center"
          >
            <div className="flex-1 rounded-[2rem] overflow-hidden">
              <Image src='/A4N/share.png' alt="" width={743} height={744} quality={100} />
            </div>
            <div className="flex-1 md:px-2">
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Entretenimento global e local</h4>
              <p className="text-md text-gray-300">
                Bem-vindo ao futuro do entretenimento! A Smart TV A4N unifica
                seu conteúdo favorito, tanto internacional quanto local, de forma
                prática e adaptada às suas preferências. Explore um vasto mundo
                de filmes, programas e muito mais, tudo personalizado
                e facilmente acessível a qualquer momento.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto bg-dark overflow-hidden">
        <div className="w-full h-full relative">
          <Image className="h-full w-full object-cover hidden md:block" src='/A4N/connectivity.png' alt="" width={1920} height={1080} quality={100} />

          <div className="bg-gradient-to-r from-dark opacity-60 absolute top-0 h-full w-full hidden lg:block"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[10%] left-[10%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[600px] text-white">
              <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Ajuste, conecte e aproveite
              </h2>
              <p>Aproveite ao máximo suas opções de entretenimento! Com
                múltiplas portas HDMI, entradas USB e conectividade Wi-Fi,
                a TV A4N se conecta a uma variedade de dispositivos,
                permitindo que você desfrute de todas as suas fontes
                externas com facilidade. A diversão nunca foi tão simples e versátil!</p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image className="h-full w-full object-cover md:hidden" src='/A4N/connectivity-mobile.png' alt="" width={750} height={1200} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[8%] left-[5%] md:hidden overflow-hidden z-[5]">
            <div className="max-w-[420px] text-white">
              <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Ajuste, conecte e aproveite
              </h2>
              <p>Aproveite ao máximo suas opções de entretenimento! Com
                múltiplas portas HDMI, entradas USB e conectividade Wi-Fi,
                a TV A4N se conecta a uma variedade de dispositivos,
                permitindo que você desfrute de todas as suas fontes
                externas com facilidade. A diversão nunca foi tão simples e versátil!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Galeria de Imagens */}
      <section className="mx-auto px-3 py-20 bg-gray-100">
        <div className="max-w-[1250px] mx-auto">
          <div className="mb-10 text-center">
            <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Galeria de imagens</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            <div className="overflow-hidden rounded-[2.7rem] py-6 px-3 bg-white">
              <Image className="hover:scale-105 duration-300" src="/A4N/1.png" alt="Imagem 1" width={496} height={497} quality={100} />
            </div>
            <div className="overflow-hidden rounded-[2.7rem] py-6 px-3 bg-white">
              <Image className="hover:scale-105 duration-300" src="/A4N/A4N_3.webp" alt="Imagem 3" width={496} height={497} quality={100} />
            </div>
            <div className="overflow-hidden rounded-[2.7rem] py-6 px-3 bg-white">
              <Image className="hover:scale-105 duration-300" src="/A4N/A4N_2.webp" alt="Imagem 2" width={496} height={497} quality={100} />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            <div className="overflow-hidden rounded-[2.7rem]">
              <Image className="hover:scale-105 duration-300" src="/A4N/A4N_4.webp" alt="Imagem 4" width={769} height={497} quality={100} />
            </div>
            <div className="overflow-hidden rounded-[2.7rem]">
              <Image className="hover:scale-105 duration-300" src="/A4N/A4N_6.webp" alt="Imagem 6" width={769} height={497} quality={100} />
            </div>
          </div>

          <div className="h-full mt-5">
            <div className="overflow-hidden rounded-[2.7rem]">
              <Image className="hover:scale-105 duration-300 hidden md:block" src="/A4N/gallery-6.png" alt="Galeria 6" width={1588} height={890} quality={100} />
            </div>
          </div>

          <div className="h-full mt-5">
            <div className="overflow-hidden rounded-[2.7rem]">
              <Image className="hover:scale-105 duration-300 md:hidden" src="/A4N/gallery-7.png" alt="Galeria 7" width={1588} height={890} quality={100} />
            </div>
          </div>
        </div>
      </section>

      {/* Seção Especificações */}
      <section id="specifications" className="scroll-mt-20">
        <Specifications categories={specificationsDataA4N} />
      </section>

      {/* Seção Recomendações */}
      <section>
        <ForYou products={productItems} title='Descubra as melhores Tecnologias de TV' />
      </section>

    </main>
  );
}
