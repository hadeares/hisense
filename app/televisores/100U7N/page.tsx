'use client'

import Image from "next/image";
import Link from "next/link"

// import required modules
import { motion } from "framer-motion";
import ReactCompareImage from 'react-compare-image';
import ProductPresentation from "@/components/ProductPresentation";
import VideoContainer from "@/components/VideoContainer ";
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

    const productProps = {
        productImages: ['/100U7/100U7_1.png', '/100U7/100U7_2.png', '/100U7/100U7_3.png', '/100U7/100U7_4.png', '/100U7/100U7_5.png', '/100U7/100U7_6.png', '/100U7/100U7_7.png'],
        technologyImage: '/Q6N/qled-300x300.png',
        name: 'Hisense Smart TV QLED 100U7',
        copy: 'Eleve sua experiência ao próximo nível',
        features: ['Full Array', 'Quantum Dot Colors', '144Hz', 'Filmmaker Mode'],
        type: 'Tamanhos de tela:',
        sizes: ['100"']
    }

    const storeLinks = {
        '100"': [
            {
                name: 'Fast Shop',
                logo: '/fast.png',
                link: 'https://site.fastshop.com.br/smart-tv-hisense-qled-uhd-4k-100--polegadas-frequencia-144-hz-e-wi-fi---100u7n-hh100u7n_prd-64691/p',
            },
        ],
    };



    const specificationsData = [
        {
            title: 'Informações Gerais',
            content: [
                { item: 'Modelo', description: 'Hisense 100U7N' },
                { item: 'Sistema Operacional', description: 'Google TV' },
                { item: 'Idioma do Display', description: 'Inglês | Espanhol | Português' },
                { item: 'Wi-Fi', description: 'Sim' },
                { item: 'Bluetooth', description: 'Sim' },
                { item: 'Garantia', description: 'Sim' },
            ],
        },
        {
            title: 'Vídeo',
            content: [
                { item: 'Tamanho da Tela', description: '100’’' },
                { item: 'Tipo de Tela', description: 'QLED TV' },
                { item: 'Resolução', description: '3840X2160' },
                { item: 'Taxa de Movimento', description: '144Hz' },
                { item: 'Response Time', description: '6 ms' },
            ],
        },
        {
            title: 'Áudio',
            content: [
                { item: 'Potência', description: '2 x 15W + 20W' },
                { item: 'Aperfeiçoamento de Som', description: 'Dolby Atmos, DTS Virtual:X' },
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
                { item: 'Dimensões do produto (sem suporte)', description: '2235 × 1286 × 101 mm' },
                { item: 'Dimensões do produto (com suporte)', description: '2235 × 1322 × 500 mm' },
                { item: 'Dimensões da embalagem', description: '2402 × 325 × 1514 mm' },
                { item: 'Peso do Produto', description: '60 Kg' },
            ],
        },
        {
            title: 'Consumo',
            content: [
                { item: 'Consumo de Energia', description: '500W' },
                { item: 'Consumo em Standby', description: '<0.5W' },
                { item: 'Fonte de Alimentação', description: 'AC100-240V 50/60Hz' },
            ],
        },
        {
            title: 'Portas',
            content: [
                { item: 'HDMI', description: '4' },
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
                { item: 'Google Assistant', description: 'Sim' },
            ],
        },
    ];

    const productItems = [
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
        {
            name: 'Hisense Smart TV ULED MiniLED 4K U6N',
            imageSrc: '/U6N-foryou.png',
            link: '/televisores/U6N'
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
                        className="absolute bottom-[5%] lg:top-[28%] left-[5%] lg:left-[15%]"
                    >
                        <motion.div variants={item}>
                            <Image className="scale-75 lg:scale-100" src='/100U7/100U7.png' alt="Logo A4 TV" width={650} height={500} quality={100} />
                        </motion.div>
                    </motion.div>

                    <Image className="h-full w-full object-cover hidden md:block" src='/100U7/100U7-KV.jpg' alt="Imagem key visual da televisão 100U7" width={2268} height={948} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/100U7/100U7-KV-mobile.jpg' alt="Imagem key visual da televisão 100U7" width={2268} height={948} quality={100} />
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
                                <Image src="/100U7/144hz.png" alt="" width={132} height={32} />
                                <span className="text-xs md:text-sm">144Hz Game Mode PRO</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/100U7/imax.png" alt="" width={132} height={32} />
                                <span className="text-xs md:text-sm">Qualidade de cinema</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/100U7/subwoofer.png" alt="" width={122} height={32} />
                                <span className="text-xs md:text-sm">Built-in subwoofer</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center p-20">
                                <Image src="/100U7/filmaker.png" alt="" width={172} height={32} />
                                <span>Filmmaker Mode</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <VideoContainer videoSrc="/100U7/videos/100U7N_video_1.mp4" />
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
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Liberte o poder da QLED na sua casa
                            </h4>
                        </div>
                        <div className="flex-1 md:px-5">
                            <p className="text-md text-gray-300">
                                Com a tecnologia QLED da TV 100U7 Hisense, cada detalhe na
                                tela é exibido com incrível precisão e profundidade. A combinação
                                de cores puras e vibrantes com maior brilho e contraste oferece
                                uma experiência visual que vai além do esperado.Essa tecnologia
                                permite que você veja tons mais intensos e sutis em cada imagem,
                                proporcionando realismo surpreendente, seja em filmes, esportes
                                ou jogos. Mesmo em ambientes mais iluminados, a tela mantém a
                                qualidade de imagem impecável, sem perder brilho ou definição.

                                Com a QLED, cada momento na tela ganha vida, transformando
                                sua TV em uma janela para um entretenimento de alta performance.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/100U7/gamemode-bg.jpg' alt="" width={1920} height={1080} quality={100} />
                    <motion.div
                        animate={{
                            x: -10,
                            scale: 1.03
                        }}
                        transition={{
                            duration: 2.5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block overflow-hidden z-[6]">
                        <Image src='/100U7/gamemode-car.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>

                    <div className="bg-gradient-to-r from-dark opacity-30 absolute top-0 h-full w-full z-[6]"></div>

                    <div className="absolute top-[20%] left-[10%] w-[500px] z-[7] hidden lg:block">
                        <div>
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">A nova era dos jogos</h4>
                        </div>
                        <div className="">
                            <p className="text-md text-gray-300">
                                Experimente o Game Mode Pro 144Hz e leve seus jogos a outro
                                nível. Com a Game Bar e tecnologia MEMC de baixa latência,
                                cada movimento é suave e preciso. A combinação entre velocidade
                                e fluidez coloca você à frente dos oponentes, eliminando
                                travamentos e atrasos. Seja em partidas intensas ou campanhas
                                solo, você tem o controle total para jogar sem interrupções e
                                com máxima performance.</p>

                        </div>
                    </div>

                    <motion.div
                        animate={{
                            scale: 1.01
                        }}
                        transition={{
                            duration: 3,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block z-[3]">
                        <Image src='/100U7/gamemode-technologies.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/100U7/game-mode.png' alt="" width={1920} height={1080} quality={100} />

                </div>
            </section>

            <section className="bg-dark lg:hidden">
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
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">A próxima geração em solução para jogos</h4>
                        </div>
                        <div className="flex-1 md:px-5">
                            <p className="text-md text-gray-300">Lag e screen tearing te atrapalham? O Game Mode Pro de 144Hz, agora com Game Bar e MEMC de baixa latência, permite uma jogabilidade extremamente fluida. Essa será sua vantagem competitiva em qualquer cenário de jogo.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto px-3 lg:py-20 py-14 bg-dark overflow-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/100U7/quantum.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Mais de 1 bilhão de tonalidades em cores vivas
                            </h4>
                            <p className="text-md text-gray-300">
                                Mergulhe em uma experiência visual única com Quantum Dot Colour,
                                que traz mais de um bilhão de cores vibrantes à tela. Os tons
                                mais delicados e os mais intensos aparecem com fidelidade,
                                proporcionando imagens incrivelmente reais. Com cores tão
                                precisas e brilhantes, cada momento ganha mais vida – desde
                                filmes e séries até jogos e esportes ao vivo.                                </p>
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
                                Imagens impecáveis em qualquer conteúdo
                            </h4>
                            <p className="text-md text-gray-300">
                                Com a Total HDR Solution, você não precisa se preocupar com
                                compatibilidade. A TV Hisense 100U7 suporta os principais formatos,
                                como Dolby Vision IQ, HDR10 e HDR10+, garantindo pretos
                                intensos, brilhos equilibrados e cores ricas. Tudo o que você
                                assiste ganha um toque de perfeição, proporcionando uma
                                experiência mais real e imersiva.                                </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/100U7/hdr.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/100U7/ai-sports-mode.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">A energia do estádio, no conforto de casa
                            </h4>
                            <p className="text-md text-gray-300">
                                Transforme sua sala no seu estádio particular com o
                                AI Sports Mode. Ele detecta automaticamente quando
                                uma partida está no ar e ajusta imagem e áudio para
                                maximizar a experiência. Com sons claros e imagens
                                nítidas, cada lance ganha mais emoção e você se sente
                                no centro da ação, aproveitando cada jogada
                                sem perder um detalhe.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-60 hidden lg:block"></div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/100U7/dolby-bg.jpg' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />
                    <motion.div
                        animate={{
                            y: -10
                        }}
                        transition={{
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block">
                        <Image src='/100U7/dolby-robot.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>
                    <motion.div
                        animate={{
                            scale: 1.04
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block z-[3]">
                        <Image src='/100U7/dolby-wave-1.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>
                    <motion.div
                        animate={{
                            scale: 1.04
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block z-[3]">
                        <Image src='/100U7/dolby-wave-2.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/100U7/dolby-mobile.png' alt="" width={1920} height={1080} quality={100} />

                </div>
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
                        className="flex flex-col md:flex-row gap-3 pt-20 max-w-[1250px] mx-auto px-3"
                    >
                        <div className="flex-1">
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Sinta-se dentro da história</h4>
                        </div>
                        <div className="flex-1 md:px-5">
                            <p className="text-md text-gray-300">
                                Seja um diálogo ou um efeito sonoro explosivo cada som é reproduzido
                                com precisão, preenchendo a sala e trazendo a emoção de cada
                                cena para mais perto de você. Com Dolby Atmos®, o som não
                                apenas se ouve, mas se sente. Ele flui ao seu redor, criando
                                uma atmosfera tridimensional que transforma a maneira como
                                você vive filmes, músicas e jogos.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-dark">
                <div className="max-w-[1250px] mx-auto py-14 px-0">

                    <ReactCompareImage leftImage="/U8N/ambient-day.png" rightImage="/U8N/ambient-night.png" />;

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 }
                        }}
                        className="flex flex-col md:flex-row gap-2 mt-14 px-3"
                    >
                        <div className="flex-1">
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                A imagem perfeita em qualquer horário
                            </h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">
                                Com Dolby Vision IQ, sua TV ajusta automaticamente brilho e cor
                                de acordo com a iluminação do ambiente, garantindo que as imagens
                                fiquem sempre impecáveis, de dia ou de noite. Desfrute de detalhes
                                nítidos e cores vivas, mesmo em cenas escuras, sem precisar mexer
                                nas configurações. Assim, cada filme ou série é exibido exatamente
                                como deveria ser visto.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-60 hidden lg:block"></div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/100U7/google-assistant.jpg' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />


                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/100U7/google-tv.png' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />

                    <div className="lg:absolute bottom-[10%] left-[10%] max-w-[800px] px-3 py-20 lg:p-0 z-[3]">
                        <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Tudo na palma da mão
                        </h4>
                        <p className="text-gray-300 text-md">
                            Com o Google Assistant, controlar sua TV é mais fácil do que nunca.
                            Use apenas a sua voz para abrir aplicativos, buscar filmes, reproduzir
                            músicas e controlar dispositivos inteligentes. Basta dizer Ok Google
                            e aproveitar uma experiência personalizada e prática, sem complicações.
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
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16 px-10">
                            <Image className="hover:scale-105 duration-300" src="/100U7/100U7_2.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16 px-10">
                            <Image className="hover:scale-105 duration-300" src="/100U7/100U7_3.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16 px-10">
                            <Image className="hover:scale-105 duration-300" src="/100U7/100U7_4.png" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-16 px-10">
                            <Image className="hover:scale-105 duration-300" src="/100U7/100U7_1.png" alt="" width={769} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/100U7/100U7_6.png" alt="" width={1069} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/100U7/gallery-7.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>
                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/100U7/gallery-7-mobile.png" alt="" width={1588} height={890} quality={100} />
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
    )
}


