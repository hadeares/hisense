'use client'

import Image from "next/image";
import Link from "next/link"


// import required modules
import { motion } from "framer-motion";
import ReactCompareImage from 'react-compare-image';
import VideoContainer from "@/components/VideoContainer ";
import LuzRevo from "@/components/LuzRevo";
import Iluminau8n from "@/components/Iluminau8n";
import ProductPresentation from "@/components/ProductPresentation";
import Specifications from "@/components/Specifications";
import { useRef } from "react";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";

export default function U8N() {

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

    const storeLinks = {
        '85"': [
            {
                name: 'Fast Shop',
                logo: '/fast.png',
                link: 'https://site.fastshop.com.br/smart-tv-hisense-qled-4k-uhd-85--polegadas-85u8n-com-mini-led-sleep-timer--entrada-hdmi-e-wi-fi-hh85u8n_prd-2914/p',
            },

        ],

    };

    const productProps = {
        productImages: ['/U8N/1.png', '/U8N/U8N_2.webp', '/U8N/U8N_3.webp', '/U8N/U8N_4.webp', '/U8N/U8N_5.webp',],
        technologyImage: '/miniLED-black.png',
        name: 'Hisense Smart TV ULED MiniLED U8N',
        copy: 'Mais do que extraordinária',
        features: ['144Hz Game Mode PRO', 'Quantum Dot Colors', 'Hi-View Engine PRO', '2.1.2 Multi-Channel Surround'],
        type: 'Tamanhos de tela:',
        sizes: ['75"', '85"']
    }

    const specificationsData = [
        {
            title: 'Informações Gerais',
            content: [
                { item: 'Modelo', description: 'Hisense Smart TV MiniLED U8N' },
                { item: 'Sistema Operacional', description: 'Google TV' },
                { item: 'Idioma do Display', description: 'Inglês | Espanhol | Francês' },
                { item: 'Wi-Fi', description: 'Sim' },
                { item: 'Bluetooth', description: 'Sim' },
                { item: 'UPC/Garantia', description: '888143016474' },
            ],
        },
        {
            title: 'Vídeo',
            content: [
                { item: 'Tamanho da Tela', description: '75" | 85"' },
                { item: 'Tipo de Tela', description: 'MiniLED | QLED TV' },
                { item: 'Resolução', description: '3840x2160' },
                { item: 'Taxa de Movimento', description: '60' },
                { item: 'Tempo de Resposta', description: '6,5 ms' },
            ],
        },
        {
            title: 'Áudio',
            content: [
                { item: 'Potências', description: '75’’ – 2*10W+20W+2*5W, 85’’ – 2*15W+20W+2*5W' },
                { item: 'Aperfeiçoamento de Som', description: 'DTS Virtual X, Dolby Atmos' },
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
                { item: 'Dimensões do produto (sem suporte)', description: '75’’ – 1671 mm × 965 mm × 73 mm, 85’’ – 1899 mm × 1096 mm × 77 mm' },
                { item: 'Dimensões do produto (com suporte)', description: '75’’ – 1671 mm × 1032 mm × 340 mm, 85’’ – 1899 mm × 1166 mm × 400 mm' },
                { item: 'Dimensões da embalagem', description: '75’’ – 1865 mm × 1175 mm × 230 mm, 85’’ – 2100 mm × 1304 mm × 248 mm' },
                { item: 'Peso do Produto', description: '75’’ – 53 Kg, 85’’ – 73 Kg' },
            ],
        },
        {
            title: 'Consumo',
            content: [
                { item: 'Consumo de Energia', description: '350W' },
                { item: 'Consumo em Standby', description: '<0.5W' },
                { item: 'Fonte de Alimentação', description: 'AC 100V~240V/50Hz/60Hz' },
            ],
        },
        {
            title: 'Portas',
            content: [
                { item: 'HDMI', description: '2' },
                { item: 'USB 2.0', description: '1' },
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
                { item: 'Google Assistant', description: 'Sim' },
            ],
        },
    ];


    const productItems = [
        {
            name: 'Hisense Smart TV QLED 100U7',
            imageSrc: '/100U7/100U7_1.png',
            link: '/televisores/100U7N'
        },
        {
            name: 'Hisense Smart TV QLED 4K Q6N',
            imageSrc: '/Q6N/1.png',
            link: '/televisores/Q6N'
        },
        {
            name: 'Hisense Smart TV ULED MiniLED 4K U7N',
            imageSrc: '/U7N/U7N_1.png',
            link: '/televisores/U7N'
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
                            <Image className="scale-75 lg:scale-100" src='/U8N/U8.png' alt="Logo A4 TV" width={470} height={500} quality={100} />
                        </motion.div>
                    </motion.div>

                    <Image className="h-full w-full object-cover hidden md:block" src='/U8N/U8N-KV.png' alt="Imagem key visual da televisão U8N" width={2268} height={948} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/U8N/U8N-KV-mobile.png' alt="Imagem key visual da televisão U8N" width={2268} height={948} quality={100} />
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
                                <Image src="/U8N/MiniLED.png" alt="" width={252} height={32} />
                                <span>Mini LED PRO</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/U8N/144hz.png" alt="" width={102} height={32} />
                                <span className="text-xs md:text-sm">144Hz Game Mode PRO</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/U8N/hi-view.png" alt="" width={102} height={32} />
                                <span className="text-xs md:text-sm">Hi-View Engine PRO</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/U8N/hdr.png" alt="" width={132} height={32} />
                                <span className="text-xs md:text-sm">Low Reflection Screen</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/U8N/qled.png" alt="" width={102} height={32} />
                                <span className="text-xs md:text-sm">Quantum Dot Colour</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <VideoContainer videoSrc="/U8N/videos/1-mini-led-pro_1.mp4" />
            </section>

            <section className="mx-auto px-3 py-20 bg-dark">
                < LuzRevo />
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <Iluminau8n />
            </section>

            <section className="mx-auto px-3 lg:py-20 bg-dark overflow-x-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1">
                            <Image src='/U8N/IA.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Domínio visual perfeito baseado em IA
                            </h4>
                            <p className="text-md text-gray-300">Aproveite imagens vibrantes e realistas aprimorados por IA com o Hi-View Engine PRO. Aproveitando a rede neural profunda da Hisense, ele analisa e aprimora cada pixel em tempo real, garantindo que sua visualização seja otimizada quadro a quadro. Experimente o máximo do upscaling e do aprimoramento de cores para 4K, onde as imagens padrões se tornam extraordinárias.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Cores vivas em cada detalhe
                            </h4>
                            <p className="text-md text-gray-300">
                                A tecnologia Quantum Dot Colour na TV U8N da Hisense revela
                                uma paleta de bilhões de cores que se destacam em cada cena.
                                Das nuances mais sutis aos tons mais vibrantes, essa tecnologia
                                oferece uma reprodução de cores precisa e realista, criando uma
                                experiência visual envolvente e próxima da vida real. O Quantum
                                Dot Colour garante que as imagens ganhem vida na tela,
                                proporcionando uma imersão completa em cada conteúdo.
                                Com a Hisense, suas séries e filmes favoritos ganham nova
                                dimensão, e cada cena se transforma em um espetáculo visual.                                </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/U8N/QuantumDot.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-80 hidden lg:block"></div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/U8N/surround-bg.jpg' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />
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
                        <Image src='/U8N/surround-wave.png' alt="" width={1920} height={1080} quality={100} />
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
                        className="absolute top-0 left-0 hidden md:block">
                        <Image src='/U8N/surround-effect.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>
                    <div
                        className="absolute top-0 left-0 hidden md:block">
                        <Image src='/U8N/surround-tv.png' alt="" width={1920} height={1080} quality={100} />
                    </div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/U8N/surround-bg-mobile.jpg' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />
                    <motion.div
                        animate={{
                            scale: 1.2
                        }}
                        transition={{
                            duration: 3,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 md:hidden overflow-hidden">
                        <Image className="scale-75" src='/U8N/surround-effect-mobile.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>
                    <div
                        className="absolute top-0 left-0 md:hidden">
                        <Image src='/U8N/surround-tv-mobile.png' alt="" width={1920} height={1080} quality={100} />
                    </div>

                    <div className="lg:absolute top-[35%] left-[17%] max-w-[600px] px-3 py-20 lg:p-0 z-[3]">
                        <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Som ajustado para todos os ângulos</h4>
                        <p className="text-gray-300 text-md">Experimente a próxima geração de som com Multi-Channel Surround. Nossa tecnologia avançada transforma o áudio original dos conteúdos em som multicanal envolvente. Sinta os tons agudos mais nítidos, tudo isso vindo diretamente da sua TV com harmonia e sem a necessidade das caixas traseiras para efeito surround.</p>
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
                            <p className="text-md text-gray-300">
                                Seja em uma sala ensolarada ou à meia-luz, cada cena é otimizada
                                para que você aproveite o conteúdo com qualidade impecável,
                                sem esforço. Com a tecnologia Total Ambient Adaptive, a TV U8N
                                da Hisense ajusta automaticamente o brilho, contraste e cores para
                                se adaptar perfeitamente à iluminação do ambiente.

                                Ajustando desde as cores para combinar com a luz do espaço até
                                a profundidade da imagem, essa funcionalidade garante uma
                                experiência visual confortável e envolvente, independentemente
                                da hora do dia ou das condições de luz ao redor.
                            </p>
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

                    <div className="lg:absolute bottom-[7%] left-[17%] max-w-[600px] px-3 py-20 lg:p-0 z-[4]">
                        <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                            Cada cena com detalhes deslumbrantes
                        </h4>
                        <p className="text-gray-300 text-md">
                            Com a Total HDR Solution da TV U8N Hisense, seus conteúdos
                            ganham vida com uma qualidade visual impressionante.
                            A compatibilidade com os principais formatos HDR – incluindo
                            Dolby Vision IQ, HDR10, HDR10+ e HLG – garante que cada
                            cena seja exibida com nitidez, cores vibrantes e contraste
                            profundo, exatamente como deveria ser vista. Não importa o
                            conteúdo, a TV se ajusta automaticamente para proporcionar
                            a melhor imagem possível, destacando cada detalhe e
                            entregando uma experiência imersiva.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto px-3 lg:py-20 bg-dark overflow-x-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1">
                            <Image src='/U8N/game-mode.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Mantenha a sua vantagem competitiva</h4>
                            <p className="text-md text-gray-300">Aprimore seu jogo com o 144Hz Game Mode PRO, aprimorado com uma barra de jogo integrada. Jogue com movimentos ultrafluidos, graças ao VRR e ao MEMC de baixa latência. Com uma velocidade de repostas em 144Hz, não se trata apenas de jogar, trata-se de não perder nenhum quadro. A vitória nunca pareceu tão tranquila.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Assista seus filmes e séries da maneira que os cineastas gostariam</h4>
                            <p className="text-md text-gray-300">Experimente seus filmes ou séries como foram planejados, com o Hisense Filmmaker Mode. Ajuste seus conteúdos às configurações originais para ver detalhes, como som, proporção, cor, taxa de quadros e muito mais, conforme foi originalmente concebido para a exibição mais autêntica da obra-prima de seu cineasta favorito.</p>
                        </div>
                        <div className="flex-1">
                            <Image src='/U8N/filmmaker.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Galeria de imagens</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/U8N/gallery-1.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/U8N/gallery-2.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/U8N/gallery-3.png" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/U8N/gallery-4.png" alt="" width={769} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/U8N/gallery-5.png" alt="" width={769} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/U8N/gallery-6.png" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/U8N/gallery-7.png" alt="" width={1588} height={890} quality={100} />
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
