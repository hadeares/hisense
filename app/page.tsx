'use client';
import { CategoryCard } from "@/components/CategoryCard";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import LatestReleases from "@/components/LatestReleases";
import SponsorshipCarousel from "@/components/SponsorshipCarousel";
import Image from "next/image";
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Banner } from "@/components/Banner";

export default function Home() {

  const cardCategories = [
    {
      category: 'Televisores',
      image: '/home/tv-category-image.png',
      link: '/televisores'
    },
    {
      category: 'Eletrodomésticos',
      image: '/home/appliance-category-image.png',
      link: '/lava-e-seca'
    },
    {
      category: 'Ar-Condicionados',
      image: '/home/air-category-image.png',
      link: '/ar-condicionados'
    }
  ];

  const prizes = [
    {
      title: "CES Innovation Awards",
      image: "/home/ces.png",
      description: "O Prêmio CES Innovation Awards destaca as TVs mais inovadoras apresentadas na CES. Avaliado por especialistas, o prêmio reconhece avanços em design, qualidade de imagem e tecnologia de display."
    },
    {
      title: "EISA Award",
      image: "/home/eisa.png",
      description: "O Prêmio EISA reconhece os melhores produtos de eletrônica de consumo, como TVs e sistemas de áudio. Avaliado por especialistas internacionais, destaca inovações em desempenho e qualidade."
    },
    {
      title: "Tom's Guide",
      image: "/home/guide.png",
      description: "O Tom's Guide é um site especializado em análises e recomendações de tecnologia. Ele oferece avaliações detalhadas sobre gadgets, eletrônicos e software, ajudando os consumidores a tomar decisões informadas."
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const container = {
    hidden: { opacity: 0, scale: 0 },
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
    hidden: { opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const banners = [
    {
      bannersDesktop: [
        '/banner-desktop-U8.png',
        '/banner-desktop-hiblack.png',
        '/banner-desktop-acsplit2.png',
        '/banner-desktop-MAX-NOCTA.png',
        '/banner-desktop-100U7.png'

      ]
    },
    {
      bannersMobile: [
        '/banner-mobile-U8.png',
        '/banner-mobile-hiblack.png',
        '/banner-mobile-acsplit-2.png',
        '/banner-mobile-MAX-NOCTA.png',
        '/banner-mobile-100U7.png'

      ]
    },
    {
      links: [
        '/',
        '/',
        '/',
        '/',
        '/',
      ]
    }
  ]

  const bannerDesktop: string[] = [
    '/banner-desktop-fifa.png',
    '/banner-desktop-U8.png',
    '/banner-desktop-hiblack.png',
    '/banner-desktop-acsplit2.png',
    '/banner-desktop-MAX-NOCTA.png',
    '/banner-desktop-100U7.png'

  ];
  const bannerMobile: string[] = [
    '/banner-mobile-fifa.png',
    '/banner-mobile-U8.png',
    '/banner-mobile-hiblack.png',
    '/banner-mobile-acsplit-2.png',
    '/banner-mobile-MAX-NOCTA.png',
    '/banner-mobile-100U7.png',
  ];

  const bannerLinks: string[] = [
    '/televisores/U8N',
    '/',
    '/ar-condicionados',
    '/',
    '/televisores/100U7N'
  ];

  const bannerButton = [false, true, false, true, false, true];

  return (
    <main className="max-w-[1920px] mx-auto overflow-hidden">

      <Banner
        bannerDesktop={bannerDesktop}
        bannerMobile={bannerMobile}
        bannerLinks={bannerLinks}
        bannerButton={bannerButton} // Passa o array booleano
      />

      {/* Latest Releases */}
      <motion.section initial="hidden" whileInView="visible" variants={sectionVariants} className="py-16">
        <LatestReleases />
      </motion.section>

      {/* Featured Products */}
      <motion.section initial="hidden" whileInView="visible" variants={sectionVariants} className="pt-10">
        <FeaturedProducts />
      </motion.section>

      {/* Categorias */}
      <section
        className="bg-dark py-8 mt-[-5px]"
      >
        <div className="max-w-[1250px] mx-auto px-3 py-14">
          <div className="text-center">
            <div className="mb-10">
              <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-white">
                Todas as categorias
              </h2>
              <p className="max-w-[850px] mx-auto text-gray-300">
                O produto perfeito que você tanto procurava está aqui
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cardCategories.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CategoryCard
                    category={card.category}
                    image={card.image}
                    link={card.link}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prêmios */}
      <motion.section initial="hidden" whileInView="visible" variants={sectionVariants} className="max-w-[1250px] mx-auto px-3 py-16">
        <div className="text-center">
          <div className="mb-10">
            <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">+ de 10 prêmios</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-16">
            {prizes.map((prize, index) => (
              <div key={index}>
                <div className="flex justify-center mb-5">
                  <Image className="object-cover h-auto w-auto" src={prize.image} alt={prize.title} width={177} height={133} />
                </div>
                <h4 className="font-bold text-2xl">{prize.title}</h4>
                <p className="text-[16px] text-gray-500 my-5">{prize.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Patrocinadores */}
      <motion.section initial="hidden" whileInView="visible" variants={sectionVariants} className="relative py-16 px-10 lg:px-0 overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0">
          <Image quality={100} className="object-cover" src={'/home/sponsorship-bg.png'} alt="Imagem de fundo da seção dos patrocinadores" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <SponsorshipCarousel />
      </motion.section>


      {/* Sobre a Hisense */}
      <motion.section initial="hidden" whileInView="visible" variants={sectionVariants} className="max-w-[1250px] mx-auto xl:px-0 xl:my-10 mb-0 py-24 text-center bg-gray-100 lg:rounded-[2rem]">
        <div className="mb-10 px-3">
          <h2 className="lg:text-[38px] text-[26px] pb-5 font-bold tracking-tight leading-7">Sobre a Hisense</h2>
          <p className="max-w-[850px] mx-auto text-gray-500">Com mais de um século de tradição, nosso objetivo é ser a marca mais confiável do mundo, inovando continuamente em ciência e tecnologia para melhorar a qualidade de vida e trazer felicidade a milhões de famílias</p>
        </div>
        <iframe
          className="w-full mx-auto h-[40vh] lg:h-[65vh] mt-20"
          src="https://www.youtube.com/embed/Tb10P6-6Fnk?si=EN_Vq7UFEoLk8wpJ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        <div className="mt-20">
          <p className="lg:max-w-[850px] mx-auto text-gray-500">Nosso desejo é impactar positivamente o seu dia a dia, trazendo qualidade, conforto e tecnologia, para você se preocupar apenas com o que é importante</p>
        </div>
      </motion.section>

      {/* Fale Conosco */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="max-w-[1920px] mx-auto px-5 py-16 bg-white"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-[1250px] mx-auto">
          <div className="flex justify-center mb-5 relative">
            <Image
              quality={100}
              className="object-cover h-full w-full hidden md:flex"
              src={'/home/talk-to-us.png'}
              alt="Seção de fale conosco"
              width={1588}
              height={477}
              loading="lazy"
            />
            <div className="md:absolute top-0 left-[23%] lg:top-[15%] lg:left-[30%] text-white bg-hisense md:bg-transparent p-8 rounded-[2rem] w-full mx-auto">
              <h4 className="font-bold text-4xl lg:text-5xl">
                Fale conosco
              </h4>
              <p className="mt-5 opacity-85 mb-2">Canais de atendimento:</p>
              <div className="flex gap-x-5 gap-y-2 tracking-wide flex-wrap">
                <div className="flex items-center gap-2">
                  <MdMailOutline className="text-white mt-[-2px]" />
                  <span>sac@hisense.com</span>
                </div>
                <div className="flex items-center gap-2 border-x-[1px] px-5">
                  <FaPhoneAlt className="text-white mt-[-2px]" />
                  <span>0800 000 1454</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoLogoWhatsapp className="text-white mt-[-2px] text-xl" />
                  <span>11 98990-8945</span>
                </div>
              </div>
              <p className="mt-7 lg:mt-5 opacity-85 mb-2">Horário de atendimento:</p>
              <div className="flex gap-5 tracking-wide">
                <span>Segunda a Sexta das 8h00 às 20h00</span>
                <span className="border-s-[1px] ps-5">Sábados das 8h00 às 14h00</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </main>
  );
}
