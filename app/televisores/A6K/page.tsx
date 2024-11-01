'use client'

import Image from "next/image";
import Link from "next/link"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ProductSection from "@/components/ProductSection";
import Accordion from "@/components/Accordion";
import VideoContainer from "@/components/VideoContainer ";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductPresentation from "@/components/ProductPresentation";
import Specifications from "@/components/Specifications";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";

export default function A6K() {

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
    const [isScrolled, setIsScrolled] = useState(false);

    gsap.registerPlugin(ScrollTrigger);


    const sectionRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const text2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            const section = sectionRef.current;
            const bg = bgRef.current;
            const text = textRef.current;

            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                pin: text,
                pinSpacing: true,
            });


            gsap.fromTo(
                bg,
                { opacity: 0 },
                {
                    opacity: 1, // Fica visível
                    duration: 1.5, // Transição suave
                    ease: 'power2.out', // Suavização da transição
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center', // Inicia a animação quando o topo da seção está no centro da viewport
                        end: 'bottom top', // Termina a animação quando o fundo da seção toca o topo da viewport
                        scrub: true, // Sincroniza a animação com a rolagem
                    },
                }
            );
        }
    }, []);


    const productProps = {
        productImages: ['/A6K/gallery-1.png', '/A6K/gallery-2.png', '/A6K/gallery-3.png'],
        technologyImage: '/UHD-icon-black.png',
        name: 'Hisense Smart TV UHD 4K A6K',
        copy: 'Brilhe com a sua Smart TV 4K',
        features: ['4K Upscaling', 'Dolby Vision', 'Game Mode Plus', 'Precision Color'],
        type: 'Tamanhos de tela:',
        sizes: ['50"', '58"', '65"', '70"']
    }

    const storeLinks = {
        '50"': [
            {
                name: 'Carrefour',
                logo: '/carrefour.png',
                link: 'https://www.carrefour.com.br/hisense-smart-tv-uhd-4k-50-polegadas-50a6k-hdr10--dolby-vision-controle-por-voz-compativel-com-alexa-3458903/p',
            },
        ],
        '58"': [
            {
                name: 'Amazon',
                logo: '/amazon.png',
                link: 'https://www.amazon.com.br/Hisense-Polegadas-58A6K-Controle-AirPlay/dp/B0CZTX6MGM/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25VE8FLWT7CUY&dib=eyJ2IjoiMSJ9.7QryZi8Up8fkizatg-3CWKbzguioQ0fWOJCOc0nA6oBJau7WL2dk2ot_l93emuWPqMXHz56B5BPxkUK24dBe35_68xCqR1N9q2DLomBTFEAW3Gav2caihU7z3SKcKnqOucF--kt0gpFmTyVHVHHJm0ftJQhZ2k-_0aZejVEytOGTLZgtdsPQ3ZcqpwCQwGUeYrhzMxihIWXMYsT5C6KmILy2kqr5L8lS1TskXGfxW6V6nFU2qxlT18j8UuKt83DEYs4q2-LTGF1PACKrCa5pLUn6awSNszIALjWzC0_d7LE.4qJ6v2TRINtfqITDmXx48zVZcOrOPSO6MWXw-GNNbqQ',
            },
            {
                name: 'Casas Bahia',
                logo: '/casas_bahia.png',
                link: 'https://www.casasbahia.com.br/smart-tv-58-hisense-uhd-4k-58a51hsv-tela-dled-com-wi-fi-bluetooth-usb-e-hdmi/p/55066176',
            },
            {
                name: 'Fast Shop',
                logo: '/fast.png',
                link: 'https://site.fastshop.com.br/smart-tv-hisense-uhd-4k-dled-58--polegadas-58a6k-com-sleep-timer--entrada-hdmi-e-wi-fi-hh58a6khsv_prd-4802/p',
            },
            {
                name: 'Carrefour',
                logo: '/carrefour.png',
                link: 'https://www.carrefour.com.br/hisense-smart-tv-uhd-4k-58-polegadas-58a6k-hdr10-dolby-vision-controle-por-voz-compativel-com-alexa-3458881/p',
            },
        ],
        '65"': [
            {
                name: 'Amazon',
                logo: '/amazon.png',
                link: 'https://www.amazon.com.br/Hisense-Polegadas-65A6K-Controle-AirPlay/dp/B0CZTXNQR6?ref_=ast_sto_dp',
            },
            {
                name: 'Casas Bahia',
                logo: '/casas_bahia.png',
                link: 'https://www.casasbahia.com.br/smart-tv-hisense-uhd-4k-dled-65-polegadas-65a6k-com-sleep-timer-entrada-hdmi-e-wi-fi/p/1566940807?utm_source=gp_branding&utm_medium=cpc&utm_campaign=gg_brd_inst_cb_exata',
            },

            {
                name: 'Carrefour',
                logo: '/carrefour.png',
                link: 'https://www.carrefour.com.br/hisense-smart-tv-uhd-4k-65-polegadas-65a6k-hdr10-dolby-vision-controle-por-voz-compativel-com-alexa-3458830/p',
            },
        ],
        '70"': [
            {
                name: 'Amazon',
                logo: '/amazon.png',
                link: 'https://www.amazon.com.br/Hisense-Polegadas-70A6K-Controle-AirPlay/dp/B0CZTYKV45/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25VE8FLWT7CUY&dib=eyJ2IjoiMSJ9.7QryZi8Up8fkizatg-3CWKbzguioQ0fWOJCOc0nA6oBJau7WL2dk2ot_l93emuWPqMXHz56B5BPxkUK24dBe35_68xCqR1N9q2DLomBTFEAW3Gav2caihU7z3SKcKnqOucF--kt0gpFmTyVHVHHJm0ftJQhZ2k-_0aZejVEytOGTLZgtdsPQ3ZcqpwCQwGUeYrhzMxihIWXMYsT5C6KmILy2kqr5L8lS1TskXGfxW6V6nFU2qxlT18j8UuKt83DEYs4q2-LTGF1PACKrCa5pLUn6awSNszIALjWzC0_d7LE.4qJ6v2TRINtfqITDmXx48zVZcOrOPSO6MWXw-GNNbqQ',
            },
            {
                name: 'Casas Bahia',
                logo: '/casas_bahia.png',
                link: 'https://www.casasbahia.com.br/smart-tv-70-hisense-uhd-4k-70a51hsv-tela-de-dled-com-wi-fi-bluetooth-usb-e-hdmi/p/55066177',
            },
            {
                name: 'Fast Shop',
                logo: '/fast.png',
                link: 'https://site.fastshop.com.br/smart-tv-hisense-uhd-4k-dled-70--polegadas-70a6k-com-sleep-timer--entrada-hdmi-e-wi-fi-hh70a6khsv_prd-15565/p',
            },
            {
                name: 'Carrefour',
                logo: '/carrefour.png',
                link: 'https://www.carrefour.com.br/smart-tv-hisense-uhd-4k-dled-70quot-polegadas-70a6khsv-com-sleep-timer-entrada-hdmi-e-wifi-mp937476535/p',
            },
        ],
    };

    const specificationsData = [
        {
            title: 'Informações Gerais',
            content: [
                { item: 'Modelo', description: 'Hisense Smart TV UHD 4K A6K' },
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
                { item: 'Tamanho da Tela', description: '50’’ | 58’’ | 65’’ | 70’’' },
                { item: 'Tipo de Tela', description: 'DLED TV' },
                { item: 'Resolução', description: '3840px X 2160px' },
                { item: 'Taxa de Movimento', description: '60' },
                { item: 'Response Time', description: '50’’ – 8 ms, 58’’ – 6,5 ms, 65’’ – 6,5 ms, 70’’ – 8 ms' },
            ],
        },
        {
            title: 'Áudio',
            content: [
                { item: 'Potências', description: '50’’ – 8 W x 2, 58’’ – 8 W x 2, 65’’ – 10 W x 2, 70’’ – 12 W x 2' },
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
                { item: 'Dimensões do produto (sem suporte)', description: '50’’ – 1119 mm × 649 mm × 80 mm, 58’’ – 1295 mm × 812 mm × 291 mm, 65’’ – 1452 mm × 834 mm × 74 mm, 70’’ – 1577 mm × 883 mm × 84 mm' },
                { item: 'Dimensões do produto (com suporte)', description: '50’’ – 1119 mm × 702 mm × 274 mm, 58’’ – 1295 mm × 752 mm × 70 mm, 65’’ – 1452 mm × 896 mm × 300 mm, 70’’ – 1577 mm × 963 mm × 369 mm' },
                { item: 'Dimensões da embalagem', description: '50’’ – 1265 mm × 799 mm × 135 mm, 58’’ – 1436 mm × 874 mm × 152 mm, 65’’ – 1602 mm × 996 mm × 160 mm, 70’’ – 1765 mm × 1075 mm × 203 mm' },
                { item: 'Peso do Produto', description: '50’’ – 12,5 Kg, 58’’ – 17,4 Kg, 65’’ – 24,3 Kg, 70’’ – 31,7 Kg' },
            ],
        },
        {
            title: 'Consumo',
            content: [
                { item: 'Consumo de Energia', description: '50’’ – 120 W, 58’’ – 135 W, 65’’ – 150 W, 70’’ – 200W' },
                { item: 'Consumo em Standby', description: '<0.5W' },
                { item: 'Fonte de Alimentação', description: '100-240V, 50/60Hz' },
            ],
        },
        {
            title: 'Portas',
            content: [
                { item: 'HDMI', description: '3' },
                { item: 'USB 2.0', description: '2' },
                { item: 'RF', description: '1' },
                { item: 'HDMI eARC', description: 'Sim' },
                { item: 'Saída para Fone', description: '1' },
                { item: 'RCA', description: '1' },
                { item: 'L/R AUDIO', description: '1' },
                { item: 'Áudio Digital', description: '1 Óptico' },
                { item: 'HDMI CEC', description: 'Sim' },
            ],
        },
        {
            title: 'Funcionalidades',
            content: [
                { item: 'Alexa', description: 'Sim' },
                { item: 'Google Assistant', description: 'Não' },
            ],
        },
    ];

    const productRef = useRef<HTMLButtonElement>(null);


    const openStoreModal = () => {
        if (productRef.current) {
            productRef.current.click();
        }
    };

    return (
        <main className="max-w-[1920px] mx-auto">

            <ProductBar
                productName={productProps.name}
                openStoreModal={openStoreModal}
            />

            <section>
                <div className="relative h-[100vh] w-full m-0 p-0 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 opacity-40 absolute top-0 h-full w-full hidden lg:block"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute bottom-[5%] lg:top-[23%] left-[15%]"
                    >
                        <motion.div variants={item}>
                            <Image className="scale-75 lg:scale-100" src='/A6K/A6.png' alt="Logo A4 TV" width={470} height={500} quality={100} />
                        </motion.div>
                    </motion.div>

                    <Image className="h-full w-full object-cover hidden md:block" src='/A6K/a6kBG.png' alt="Imagem key visual da televisão U8N" width={2268} height={948} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/A6K/A6K-mobile.png' alt="Imagem key visual da televisão U8N" width={2268} height={948} quality={100} />
                </div>
            </section>

            <ProductPresentation
                productProps={productProps}
                stores={storeLinks}
                ref={productRef}
            />

            <section id="principais-caracteristicas" className="mx-auto px-3 py-20 bg-gray-100">

                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Principais características</h2>
                    </div>

                    <div className="grid grid-cols-12 gap-3 lg:gap-5 min-h-[400px]">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center p-20">
                                <Image src="/4kia.png" alt="" width={400} height={32} />
                                <span>4K Upscaling</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="p-5 bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/dolby.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Dolby Vision</span>
                            </div>
                            <div className="p-5 bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/dts.png" alt="" width={200} height={32} />
                                <span className="text-xs md:text-sm">DTS® Virtual</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/gameplus.png" alt="" width={132} height={32} />
                                <span className="text-xs md:text-sm">Game Mode Plus</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/precision.png" alt="" width={80} height={32} />
                                <span className="text-xs md:text-sm">Precision Colour</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <VideoContainer videoSrc="/A6K/videos/A6K_video.mp4" />
            </section>


            <section className="mx-auto px-8 py-40 bg-dark">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 },
                        }}
                        className="flex flex-col md:flex-row gap-2"
                    >
                        <div className="flex-1">
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Qualidade 4K com detalhes excepcionais
                            </h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">
                                Experimente cada cena com uma definição incrível. As TVs Hisense 4K trazem cores mais vivas, contrastes profundos e uma clareza que coloca você no centro da ação. Seja assistindo aos seus programas favoritos, jogando ou mergulhando em um filme, a resolução 4K transforma cada momento em uma experiência cinematográfica.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        ease: "linear",
                        duration: 1,
                        x: { duration: 1 },
                    }}
                    className="text-center px-3 pt-20"
                >
                    <div>
                        <h4 className="text-dark lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                            Precision Colour
                        </h4>
                    </div>
                    <div>
                        <p className="text-md text-dark text-xl">
                            A mais pura expressão de cor
                        </p>
                    </div>
                </motion.div>

                {/* Fundo (6-Precision-Colour-bg.jpg) */}
                <div ref={bgRef} className="absolute top-0 left-0 w-full h-full z-0">
                    <Image
                        src="/6-Precision-Colour-bg.jpg"
                        alt="Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={100}
                    />
                </div>

                {/* Imagem de frente (6-Precision-Colour.png) */}
                <div
                    ref={textRef}
                    className="relative z-10 flex justify-center items-center h-full  left-4"
                >
                    <Image
                        src="/6-Precision-Colour.png"
                        alt="Precision"
                        width={1600}
                        height={600}
                        style={{ objectFit: 'contain' }}
                        quality={100}
                    />
                </div>
            </section>

            <section className="mx-auto px-3 lg:py-20 pt-14 mt-[-2px] pb-20 bg-dark overflow-x-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/A6K/7HDR10+.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Realismo Impressionante em cada cena</h4>
                            <p className="text-md text-gray-300">
                                Seja assistindo ao mais recente lançamento do cinema ou
                                mergulhando em seus jogos favoritos, cada cor e detalhe
                                são preservados com fidelidade à intenção original do criador.
                                A reprodução precisa de tons escuros e claros cria uma imersão
                                completa, colocando você no centro da ação, como se estivesse
                                vivendo cada momento na tela.<br></br>
                                Com o HDR10+, a TV A6K Hisense transforma sua experiência
                                de entretenimento ao elevar a qualidade de imagem a novos
                                patamares. Essa tecnologia ajusta o contraste de forma dinâmica,
                                trazendo sombras mais profundas e realces mais brilhantes,
                                revelando detalhes que você não veria em uma TV convencional.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center mt-14"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Entre na história com profundidade real</h4>
                            <p className="text-md text-gray-300">
                                Cada cena ganha vida com a profundidade que você pode sentir.
                                Graças ao AI Adaptive Depth da Hisense, cada detalhe é realçado
                                com clareza e precisão. A TV A6K transforma cada imagem em
                                uma experiência imersiva, criando camadas de profundidade
                                que fazem você se sentir dentro da história. Desfrute de uma
                                visualização mais envolvente, onde cada cenário é percebido
                                com realismo impressionante, transformando sua experiência
                                de entretenimento.
                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/A6K/adaptative-depth.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section>
                <VideoContainer videoSrc="/Game Mode PLUS1.mp4" />
            </section>

            <section className="mx-auto px-3 py-40 bg-dark">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 },
                        }}
                        className="flex flex-col md:flex-row gap-2"
                    >
                        <div className="flex-1">
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Jogos ultra suaves, resposta incrível.

                            </h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">

                                Entre em ação com o Modo Jogo PLUS da Hisense, projetado
                                para garantir uma jogabilidade suave e responsiva. Essa
                                poderosa combinação de tecnologias – como taxa de
                                atualização variável (VRR) e modo automático de baixa
                                latência (ALLM) – sincroniza perfeitamente sua tela com
                                a placa gráfica, eliminando travamentos e atrasos.
                                Com uma tela de 60Hz e respostas rápidas, você terá a
                                vantagem competitiva para reagir instantaneamente e
                                jogar no seu melhor. Desfrute de gráficos fluidos e uma
                                performance sem interrupções, independentemente do jogo.<br></br>
                                O Modo Jogo PLUS transforma cada partida em uma
                                experiência de alto desempenho.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/A6K/dts-virtual.png' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />

                    <motion.div
                        animate={{
                            scale: 1.08
                        }}
                        transition={{
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-[10%] left-[22%] hidden md:block z-[5]">
                        <Image src='/A6K/dts-tv.png' alt="" width={540} height={1080} quality={100} />
                    </motion.div>

                    <motion.div
                        animate={{
                            scale: 1.05
                        }}
                        transition={{
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block">
                        <Image src='/A6K/dts-virtual.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/A6K/dts-virtual-mobile.png' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />
                </div>
            </section>

            <section className="mx-auto px-3 py-40 bg-dark">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 },
                        }}
                        className="flex flex-col md:flex-row gap-2"
                    >
                        <div className="flex-1">
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Entretenimento além das imagens
                            </h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">
                                A tecnologia DTS® Virtual™ da Hisense eleva o som da TV para um novo patamar, proporcionando uma experiência acústica imersiva sem precisar de equipamentos adicionais. Os graves mais ricos e os diálogos mais claros fazem com que você se sinta no meio da ação, seja assistindo filmes, ouvindo música ou jogando.<br></br>
                                Com um áudio que parece surgir ao seu redor, você terá uma experiência de cinema em casa, diretamente da sua TV. Prepare-se para transformar cada momento de entretenimento com som tridimensional e detalhes sonoros nítidos – tudo isso com a praticidade de uma configuração simplificada.
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
                            <Image src='/A6K/pixel-tuning.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Uma experiência visual impressionante
                            </h4>
                            <p className="text-md text-gray-300">
                                Descubra um novo nível de detalhes com o Pixel Tuning na
                                TV Hisense A6K! Essa tecnologia avançada ajusta dinamicamente
                                cada pixel, trazendo à vida imagens com uma riqueza de camadas
                                em tons claros e escuros. Sinta a diferença em cada cena: os
                                detalhes são aprimorados, os contrastes são mais nítidos e
                                a profundidade da imagem transforma sua visualização em
                                uma experiência verdadeiramente envolvente. Prepare-se para
                                se perder nas nuances de suas séries, filmes e jogos favoritos,
                                onde cada quadro é uma obra-prima esperando para ser apreciada.
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
                                Compartilhe a diversão com facilidade
                            </h4>
                            <p className="text-md text-gray-300">
                                Transforme a maneira como você compartilha momentos
                                especiais! Com a função Share to TV da Hisense, você pode transmitir
                                vídeos, fotos e aplicativos diretamente do seu smartphone para a tela
                                grande, com apenas um toque.<br></br>
                                Agora, é mais fácil do que nunca reunir
                                a família e amigos para aproveitar seus conteúdos favoritos.
                                Amplie sua experiência de entretenimento e compartilhe a
                                diversão em grande estilo!
                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/A6K/share.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/A6K/vidaa.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Seu entretenimento, sua maneira</h4>
                            <p className="text-md text-gray-300">
                                Mergulhe em um mundo de entretenimento personalizado com
                                o Sistema Operacional VIDAA! Ele coloca suas preferências em
                                primeiro lugar, oferecendo acesso rápido a todos os seus filmes,
                                séries e aplicativos favoritos.Com uma interface intuitiva e
                                recomendações inteligentes, a VIDAA torna a navegação
                                simples e prazerosa. A TV Hisense A6K transforma cada sessão
                                de streaming em uma experiência única e envolvente!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-30 hidden lg:block"></div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/A6K/voice-control.png' alt="" width={1920} height={1080} quality={100} />

                    {/* Versão Mobile */}
                    <Image className="h-full w-full object-cover md:hidden" src='/A6K/voice-control-mobile.png' alt="" width={1920} height={1080} quality={100} />

                    <div className="lg:absolute top-[5%] left-[30%] max-w-[750px] px-3 py-20 lg:p-0 z-[3]">
                        <h4 className="text-white lg:text-dark lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Controle total na palma da sua mão</h4>
                        <p className="text-white lg:text-dark text-md">
                            Sinta a liberdade de controlar sua experiência de entretenimento sem
                            esforço, tornando cada momento mais agradável e interativo. Com o
                            Controle Remoto por Voz e Assistente de Voz Integrado, como a Alexa
                            e o VIDAA VOICE, sua TV Hisense se torna ainda mais inteligente!
                            Mude de canal, ajuste o volume ou encontre seu filme favorito com
                            apenas um comando de voz.<br></br>
                            É o futuro da TV, disponível na palma da sua mão!
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Galeria de imagens</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16">
                            <Image className="hover:scale-105 duration-300" src="/A6K/gallery-2.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16">
                            <Image className="hover:scale-105 duration-300" src="/A6K/gallery-1.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16">
                            <Image className="hover:scale-105 duration-300" src="/A6K/gallery-3.png" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/A4N/gallery-4.png" alt="" width={769} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/A4N/gallery-5.png" alt="" width={769} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/A6K/gallery-6.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/A6K/A6K-mobile.png" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="specifications" className="scroll-mt-20">
                <Specifications categories={specificationsData} />
            </section>

            {/* Seção Recomendações */}
            <section>
                <ForYou products={productItems} title='Descubra as melhores Tecnologias de TV' />
            </section>

        </main >
    );
}

