'use client'

import Image from "next/image";
import Link from "next/link"

// import required modules
import { motion } from "framer-motion";
import ProductSection from "@/components/ProductSection";
import Accordion from "@/components/Accordion";
import ReactCompareImage from 'react-compare-image';
import ProductPresentation from "@/components/ProductPresentation";
import VideoContainer from "@/components/VideoContainer ";
import Iluminau8n from "@/components/Iluminau8n";
import Q6Animacao from "@/components/Q6_animcacao";
import Specifications from "@/components/Specifications";
import { useRef } from "react";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";

const specificationsData = [
    {
        title: 'Informações Gerais',
        content: [
            { item: 'Modelo', description: 'Hisense U7N' },
            { item: 'Sistema Operacional', description: 'Google TV' },
            { item: 'Idioma do Display', description: 'Inglês | Espanhol | Francês | Português' },
            { item: 'Wi-Fi', description: 'Sim' },
            { item: 'Bluetooth', description: 'Sim' },
            { item: 'Garantia', description: 'UPC 888143016474' },
        ],
    },
    {
        title: 'Vídeo',
        content: [
            { item: 'Tamanho da Tela', description: '55’’ | 65’’' },
            { item: 'Tipo de Tela', description: 'MiniLED | QLED TV' },
            { item: 'Resolução', description: '4K 3840X2160' },
            { item: 'Taxa de Movimento', description: '60' },
            { item: 'Response Time', description: '8 ms' },
        ],
    },
    {
        title: 'Áudio',
        content: [
            { item: 'Potências', description: '2*10W+20W' },
            { item: 'Aperfeiçoamento de Som', description: 'Dolby Atmos' },
        ],
    },
    {
        title: 'Recursos Smart',
        content: [
            { item: 'Smart TV', description: 'Sim (Google TV)' },
            { item: 'App Store', description: 'Sim (Google Play Store)' },
        ],
    },
    {
        title: 'Dimensões e Peso',
        content: [
            { item: 'Dimensões do produto (sem suporte)', description: '55’’ – 1230×717×79 mm, 65’’ – 1449×838×77 mm' },
            { item: 'Dimensões do produto (com suporte)', description: '55’’ – 1230×781×295 mm, 65’’ – 1449×899×295 mm' },
            { item: 'Dimensões da embalagem', description: '55’’ – 1387×152×838 mm, 65’’ – 1649×160×1057 mm' },
            { item: 'Peso do Produto', description: '55’’ – 21.3 Kg, 65’’ – 29.2 Kg' },
        ],
    },
    {
        title: 'Consumo',
        content: [
            { item: 'Consumo de Energia', description: '55’’ – 180W, 65’’ – 250W' },
            { item: 'Consumo em Standby', description: '<0.5W' },
            { item: 'Fonte de Alimentação', description: 'AC 100V~240V/50Hz/60Hz' },
        ],
    },
    {
        title: 'Portas',
        content: [
            { item: 'HDMI', description: '2' },
            { item: 'USB', description: '1' },
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
            { item: 'Google Smart Home', description: 'Sim' },
            { item: 'Google Assistant', description: 'Sim' },
        ],
    },
];

const storeLinks = {

};


export default function U7N() {

    const productRef = useRef<HTMLButtonElement>(null);

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

    const productProps = {
        productImages: ['/U7N/U7N_1.png', '/U7N/U7N_2.png', '/U7N/U7N_3.png', '/U7N/U7N_4.png', '/U7N/U7N_5.png', '/U7N/U7N_6.png', '/U7N/U7N_7.png', '/U7N/U7N_8.png', '/U7N/U7N_9.png'],
        technologyImage: '/miniLED-black.png',
        name: 'Hisense Smart TV ULED MiniLED 4K U7N',
        copy: 'Para cada grande momento',
        features: ['Full Array', 'Quantum Dot Colors', '144Hz', 'Built-in Subwoofer'],
        type: 'Tamanhos de tela:',
        sizes: ['55"', '65"']
    }

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
            name: 'Hisense Smart TV QLED 4K Q6N',
            imageSrc: '/Q6N/1.png',
            link: '/televisores/Q6N'
        },
        {
            name: 'Hisense Smart TV UHD 4K A6K',
            imageSrc: '/A6K/gallery-1.png',
            link: '/televisores/A6K'
        },
    ];


    return (
        <main className="max-w-[1920px] mx-auto">
            <ProductBar
                productName={productProps.name}
                openStoreModal={openStoreModal}
            />

            <section>
                <div className="relative h-[100vh] w-full m-0 p-0 overflow-hidden">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute bottom-[5%] lg:top-[23%] left-[15%]"
                    >
                        <motion.div variants={item}>
                            <Image className="scale-75 lg:scale-100" src='/U7N/U7.png' alt="Logo A4 TV" width={470} height={500} quality={100} />
                        </motion.div>
                    </motion.div>

                    <Image className="h-full w-full object-cover hidden md:block" src='/U7N/U7N-KV.jpg' alt="Imagem key visual da televisão U7N" width={2268} height={948} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/U7N/U7N-KV-mobile.jpg' alt="Imagem key visual da televisão U7N" width={2268} height={948} quality={100} />
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
                                <Image src="/U7N/MiniLED.png" alt="" width={252} height={32} />
                                <span>Mini LED PRO</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/U7N/144hz.png" alt="" width={102} height={32} />
                                <span className="text-xs md:text-sm">144Hz Game Mode PRO</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image className="invert" src="/U7N/1500-nits.png" alt="" width={122} height={32} />
                                <span className="text-xs md:text-sm">1500 nits de brilho</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center p-20">
                                <Image src="/U7N/subwoofer.png" alt="" width={252} height={32} />
                                <span>Built-in Subwoofer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <VideoContainer videoSrc="/U7N/videos/U7_video_1.mp4" />
            </section>

            <section className="bg-dark">
                <div className="max-w-[1920px] mx-auto">
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
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Iluminação em MiniLED</h4>
                        </div>
                        <div className="flex-1 md:px-5">
                            <p className="text-md text-gray-300">
                                Com a tecnologia Mini-LED, a TV U7N da Hisense eleva a
                                experiência de entretenimento a um novo patamar. Essa
                                inovação oferece um controle preciso da luz de fundo, criando
                                níveis de brilho intensos e pretos profundos, revelando detalhes
                                que antes passavam despercebidos. O resultado é uma imagem
                                mais nítida, vibrante e realista, independentemente do conteúdo.

                                A iluminação Mini-LED proporciona um contraste aprimorado e
                                cores que saltam aos olhos, garantindo que você viva o
                                entretenimento com intensidade e qualidade inigualáveis.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <Iluminau8n />
            </section>

            <section className="bg-dark">
                <div className="max-w-[1250px] mx-auto lg:py-14 lg:px-0">
                    <ReactCompareImage leftImage="/U7N/144hz-gamemode_1.png" rightImage="/U7N/144hz-gamemode_2.png" />

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
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Mantenha a sua vantagem competitiva</h4>
                        </div>
                        <div className="flex-1 md:px-5">
                            <p className="text-md text-gray-300">Aprimore seu jogo com o 144Hz Game Mode PRO, aprimorado com uma barra de jogo integrada. Jogue com movimentos ultra fluidos, graças ao VRR e ao MEMC de baixa latência. Com uma velocidade de resposta em 144Hz, não se trata apenas de jogar, trata-se de não perder nenhum quadro. A vitória nunca pareceu tão tranquila.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section>
                <Q6Animacao />
            </section>

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
                        className="flex flex-col md:flex-row gap-3 py-20 max-w-[1250px] mx-auto px-3"
                    >
                        <div className="flex-1">
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Bilhões de tons de cores vivas</h4>
                        </div>
                        <div className="flex-1 md:px-5">
                            <p className="text-md text-gray-300">Tenha uma experiência visual com Quantum Dot Colour. Cada imagem rica, vibrante e realista, garantindo que todas as cores, das mais sutis às mais vibrantes, se destaquem.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-60 hidden lg:block"></div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/U7N/imax-bg.png' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />
                    <motion.div
                        animate={{
                            scale: 1.1
                        }}
                        transition={{
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block">
                        <Image src='/U7N/imax-waves.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>
                    <motion.div
                        animate={{
                            scale: 1.02
                        }}
                        transition={{
                            duration: 3,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block z-[3]">
                        <Image src='/U7N/imax-technologies.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/U7N/imax-mobile.png' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />

                    <div className="lg:absolute top-[35%] left-[17%] max-w-[600px] px-3 py-20 lg:p-0 z-[3]">
                        <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Liberte o poder o IMAX na sua casa</h4>
                        <p className="text-gray-300 text-md">O cinema com qualidade IMAX não precisa estar fora de alcance. As TVs com tecnologia IMAX Enhanced da Hisense são certificadas pela corporação IMAX e pelos principais especialistas técnicos de Hollywood para oferecer qualidade de imagem da marca IMAX e imersão de áudio com tecnologia DTS® no conforto da sua casa. Mergulhe mais fundo numa experiência cinematográfica mais inovadora do mundo e uma experiência audiovisual envolvente.</p>
                    </div>
                </div>
            </section>

            <section className="bg-dark">
                <div className="max-w-[1250px] mx-auto lg:py-14 px-3 lg:px-0">

                    <ReactCompareImage leftImage="/U8N/ambient-day.png" rightImage="/U8N/ambient-night.png" />;

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 }
                        }}
                        className="flex flex-col md:flex-row gap-2 mt-14"
                    >
                        <div className="flex-1">
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">A imagem perfeita em qualquer lugar</h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">Abrace a simplicidade de visualização com a tecnologia Total Ambient Adaptive. Seja ajustando o brilho à luz ambiente, ajustando as cores para combinar com a luz da sua sala ou melhorando a percepção de profundidade, garanta que cada cena seja otimizada para seu prazer visual, independentemente do ambiente, sem levantar um dedo.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-80 hidden md:block"></div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/U8N/hdr-bg.jpg' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />
                    <motion.div
                        animate={{
                            scale: 1.2,
                            rotate: 2,
                            y: -55
                        }}
                        transition={{
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 z-[1] hidden md:block">
                        <Image src='/U8N/hdr-camel.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>
                    <div
                        className="absolute top-0 left-0 hidden md:block">
                        <Image src='/U8N/hdr-tv.png' alt="" width={1920} height={1080} quality={100} />
                    </div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover mt-20 md:hidden" src='/U8N/hdr-bg-mobile.jpg' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />
                    <div
                        className="absolute top-[-2%] left-[2%] z-[1] md:hidden">
                        <Image src='/U8N/hdr-camel-mobile.png' alt="" width={1920} height={1080} quality={100} />
                    </div>
                    <div
                        className="absolute top-0 left-0 md:hidden">
                        <Image src='/U8N/hdr-tv-mobile.png' alt="" width={1920} height={1080} quality={100} />
                    </div>

                    <div className="lg:absolute bottom-[12%] left-[17%] max-w-[600px] px-3 py-20 lg:p-0 z-[4]">
                        <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Veja os conteúdos que você ama com detalhes deslumbrantes</h4>
                        <p className="text-gray-300 text-md">Total HDR Solution Hisense revoluciona a forma como você assiste os conteúdos na sua TV. Compatibilidade com todos os principais formatos HDR, incluindo Dolby Vision IQ, HDR10, HDR10+ e HLG, oferece imagens que impressionam. Testemunhe uma nitidez impressionante, cores ricas e contrastes profundos, garantindo que cada conteúdo seja apresentado na sua forma mais envolvente.</p>
                    </div>
                </div>
            </section>

            <section className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Galeria de imagens</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16 px-10">
                            <Image className="hover:scale-105 duration-300" src="/U7N/U7N_1.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16 px-10">
                            <Image className="hover:scale-105 duration-300" src="/U7N/U7N_2.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16 px-10">
                            <Image className="hover:scale-105 duration-300" src="/U7N/U7N_3.png" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16 px-10">
                            <Image className="hover:scale-105 duration-300" src="/U7N/U7N_4.png" alt="" width={769} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/U7N/U7N_8.png" alt="" width={769} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/U7N/U7N_10.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/U7N/gallery-7.png" alt="" width={1588} height={890} quality={100} />
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


