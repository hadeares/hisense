'use client'

import Image from "next/image";
import Link from "next/link"

// import required modules
import { motion } from "framer-motion";
import ProductSection from "@/components/ProductSection";
import Accordion from "@/components/Accordion";
import ReactCompareImage from 'react-compare-image';
import VideoContainer from "@/components/VideoContainer ";
import Q6Animacao from "@/components/Q6_animcacao";
import ProductPresentation from "@/components/ProductPresentation";
import { useRef, useState } from "react";
import Specifications from "@/components/Specifications";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";


export default function A6K() {


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
    const [isScrolled, setIsScrolled] = useState(false);

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

    const productProps = {
        productImages: ['/U6N/1.png', '/U6N/2.png', '/U6N/3.png', '/U6N/4.png', '/U6N/5.png', '/U6N/6.png', '/U6N/7.png'],
        technologyImage: '/miniLED-black.png',
        name: 'Hisense Smart TV ULED MiniLED 4K U6N',
        copy: 'Mini-LED, o melhor para o seu lazer',
        features: ['Mini LED', 'Quantum Dot Colors', 'Game Mode Plus', '60Hz'],
        type: 'Tamanhos de tela:',
        sizes: ['55"', '65"']
    }

    const storeLinks = {
        '55"': [
            {
                name: 'Casas Bahia',
                logo: '/casas_bahia.png',
                link: 'https://www.casasbahia.com.br/smart-tv-55-hisense-ultra-hd-4k-mini-led-u6n-com-google-tv-wi-fi-bluetooth-usb-e-hdmi-55u66lua/p/55066173?utm_source=gp_branding&utm_medium=cpc&utm_campaign=gg_brd_inst_cb_exata',
            },
        ],
    };


    const specificationsData = [
        {
            title: 'Informações Gerais',
            content: [
                { item: 'Modelo', description: 'Hisense Smart TV U6N' },
                { item: 'Sistema Operacional', description: 'Google TV' },
                { item: 'Idioma do Display', description: 'Inglês | Espanhol | Francês | Alemão | Português | Chinês' },
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
                { item: 'Potências', description: '2*10W' },
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
                { item: 'Dimensões do produto (sem suporte)', description: '55’’ – 1232×716×77 mm, 65’’ – 1451×840×78 mm' },
                { item: 'Dimensões do produto (com suporte)', description: '55’’ – 1232×766×274 mm, 65’’ – 1451×896×300 mm' },
                { item: 'Dimensões da embalagem', description: '55’’ – 1387×838×152 mm, 65’’ – 1649×1057×160 mm' },
                { item: 'Peso do Produto', description: '55’’ – 19.5 Kg, 65’’ – 27.5 Kg' },
            ],
        },
        {
            title: 'Consumo',
            content: [
                { item: 'Consumo de Energia', description: '55’’ – 180W, 65’’ – 240W' },
                { item: 'Consumo em Standby', description: '<0.5W' },
                { item: 'Fonte de Alimentação', description: 'AC 100V~240V/50Hz/60Hz' },
            ],
        },
        {
            title: 'Portas',
            content: [
                { item: 'HDMI', description: '1' },
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



    return (
        <main className="max-w-[1920px] mx-auto">
            <ProductBar
                productName={productProps.name}
                openStoreModal={openStoreModal}
            />

            <section>
                <div className="relative h-[100vh] w-full m-0 p-0 overflow-hidden">
                    <div className="bg-gradient-to-r from-dark opacity-60 absolute top-0 h-full w-full hidden lg:block"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute bottom-[5%] lg:top-[23%] left-[15%]"
                    >
                        <motion.div variants={item}>
                            <Image className="scale-75 lg:scale-100" src='/U6N/U6.png' alt="Logo A4 TV" width={470} height={500} quality={100} />
                        </motion.div>
                    </motion.div>

                    <Image className="h-full w-full object-cover hidden md:block" src='/U6N/HOME_16x9.jpg' alt="Imagem key visual da televisão U8N" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/U6N/HOME_9X16.jpg' alt="Imagem key visual da televisão U8N" width={2268} height={948} quality={100} />
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
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/U6N/120.png" alt="" width={120} height={32} />
                                <span className="text-xs md:text-sm">120 High Refresh Rate</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/U6N/600.png" alt="" width={120} height={32} />
                                <span className="text-xs md:text-sm">Até 600 nits de brilho máximo</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/U6N/FILMAKER.png" alt="" width={132} height={32} />
                                <span className="text-xs md:text-sm">Smooth Motion</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/U6N/MINI_LED.png" alt="" width={120} height={32} />
                                <span className="text-xs md:text-sm">MiniLed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <VideoContainer videoSrc="/U6N/videos/U6_video.mp4" />
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
                                Iluminação em MiniLED
                            </h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">
                                A Hisense sempre esteve na vanguarda do entretenimento,
                                impulsionando avanços na tecnologia LED para aprimorar todos os
                                aspectos da experiência de visualização. A nova linha de TVs Hisense ULED
                                Mini LED representa o próximo passo para o futuro com a inovação da
                                retroiluminação Mini LED. Com processador Hi-View Engine e Quantum
                                Dot Colour, estamos abrindo caminho para a melhor qualidade de
                                imagem, criando um mundo de entretenimento mais brilhante,
                                envolvente e cativante do que nunca.                       </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/U6N/hi-view-bg.png' alt="" width={1920} height={1080} quality={100} />
                    <motion.div
                        animate={{
                            top: 20
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block overflow-hidden z-[5]">
                        <Image src='/U6N/hi-view-1.jpg' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>

                    <motion.div
                        animate={{
                            top: 0
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block overflow-hidden z-[5]">
                        <Image src='/U6N/hi-view-2.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            scale: 1.02,
                            opacity: 1
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-0 left-0 hidden md:block overflow-hidden z-[7]">
                        <Image src='/U6N/hi-view-text.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/U6N/hi-view-mobile.png' alt="" width={1920} height={1080} quality={100} />
                </div>
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
                                Testemunhe o poder do processador com IA

                            </h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">
                                Com o Hi-View Engine da Hisense, cada imagem é aprimorada
                                para oferecer uma experiência visual de tirar o fôlego. Graças à
                                tecnologia 4K AI Upscaling, até conteúdos com resolução inferior
                                são ajustados para uma qualidade 4K impecável, garantindo
                                que filmes, jogos e esportes pareçam mais nítidos e envolventes.

                                O processador Hi-View Engine analisa e ajusta cada cena em
                                tempo real, revelando detalhes ocultos e otimizando as cores e
                                o contraste. Assim, o seu conteúdo favorito ganha uma nova vida,
                                sempre com a melhor qualidade possível. Com a Hisense, a
                                tecnologia de IA trabalha para que tudo o que você assista
                                fique melhor do que nunca, proporcionando uma experiência
                                superior em cada momento.                                </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section>
                <Q6Animacao />
            </section>

            <section className="mx-auto px-3 lg:py-20 py-14 bg-dark overflow-x-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/U6N/total-hdr.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">

                                Imagens impecáveis em todos os formatos HDR

                            </h4>
                            <p className="text-md text-gray-300">

                                Seja assistindo a uma superprodução ou ao seu esporte favorito,
                                você pode esperar imagens envolventes e de alta definição,
                                para que cada detalhe brilhe na tela e cada momento seja
                                ainda mais especial. Com a Total HDR Solution da Hisense,
                                cada cena ganha vida com detalhes impressionantes e cores
                                vibrantes. Compatível com os principais formatos, incluindo
                                Dolby Vision IQ, HDR10, HDR10+ e HLG, essa tecnologia
                                garante brilho otimizado, pretos mais profundos e contraste
                                impecável. O resultado? Filmes, séries e esportes exibidos
                                com a máxima qualidade com que foram produzidos.

                            </p>
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

                                Game Bar: personalize seu jogo e eleve seu desempenho
                            </h4>
                            <p className="text-md text-gray-300">

                                Com a TV U6N Hisense, você leva sua experiência gamer a um
                                novo nível – com foco, performance e controle absoluto. Com a
                                função Game Bar da Hisense, você tem controle total em tempo
                                real para otimizar sua jogabilidade. Ajuste FPS, HDR e VRR
                                facilmente, altere a proporção ou reposicione a tela com rapidez,
                                sem sair da partida. Essa central de comandos foi pensada para
                                quem busca precisão e agilidade.
                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/U6N/game-bar.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                {/* Mobile Version */}
                <Image className="h-full w-full object-cover md:hidden" src='/U6N/full-banner-mobile.png' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />

                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-80 hidden lg:block"></div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/U6N/full-banner.png' alt="" width={1920} height={1080} quality={100} />
                    <motion.div
                        animate={{
                            scale: 1.02
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute top-[2%] left-[20%] hidden md:block">
                        <Image src='/U6N/full-banner-asset.png' alt="" width={1200} height={1080} quality={100} />
                    </motion.div>


                    <div className="lg:absolute bottom-[15%] left-[10%] max-w-[600px] px-3 py-20 lg:p-0 z-[3]">
                        <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                            Ver e ouvir de uma forma espetacular
                        </h4>
                        <p className="text-gray-300 text-md">
                            A fusão da imagem Dolby Vision™ HDR e do som Dolby Atmos® , agora
                            reunidas para sua casa, proporcionam um realismo incrível
                            que você verá, ouvirá e sentirá como nunca antes. Dolby Vision
                            é uma tecnologia HDR inspirada no cinema que dá vida à sua
                            TV com imagens perfeitas. Brilho, cor, contraste e detalhes
                            surpreendentes. Dolby Atmos coloca você dentro da ação com
                            um som 360° que preenche sua sala, até mesmo acima da
                            cabeça, para envolvê-lo em seu entretenimento.
                        </p>
                    </div>

                </div>
            </section>



            <section className="bg-dark">
                <div className="max-w-[1250px] mx-auto lg:py-14 px-3 lg:px-0">
                    {/* Wrapper com bordas mais arredondadas */}
                    <div className="rounded-[20px] overflow-hidden">
                        <ReactCompareImage
                            leftImage="/U6N/dia.png"
                            rightImage="/U6N/noite.png"
                        />
                    </div>

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
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Qualidade de imagem independente da luz do ambiente
                            </h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">
                                Incomodado com a luz do seu ambiente durante seu filme favorito? Nosso Adaptive Light Sensor ajusta o brilho da tela instantaneamente. Seja em plena luz do dia ou à meia-noite, você desfrutará de clareza impecável e conforto adaptado ao seu ambiente.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto px-3 lg:py-20 bg-dark overflow-x-hidden py-14">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/U6N/dynamic.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Aperferfeiçomento até dos tons mais suaves
                            </h4>
                            <p className="text-md text-gray-300">
                                Apresentando o Dynamic Tone Mapping: um recurso dedicado
                                a aprimorar sua experiência de visualização. Ao analisar cada
                                quadro e ajustar as zonas de controle de iluminação em tempo
                                real, garante a clareza e a precisão das cores. Contraste,
                                realces e todas as nuances intermediárias são perfeitamente
                                equilibradas para uma experiência verdadeiramente
                                fiel ao conteúdo original.                            </p>
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
                                Sinta a emoção das ondas com detalhes incríveis
                            </h4>
                            <p className="text-md text-gray-300">
                                Transforme sua sala em uma arquibancada à beira-mar e aproveite cada competição como se estivesse lá!  Com o AI Sports Mode
                                da Hisense, cada manobra na prancha ganha vida na sua tela. Desde o impacto das ondas até a precisão dos movimentos,
                                esta tecnologia ajusta automaticamente a imagem para garantir que você não perca nenhum detalhe da ação. Desfrute de cores
                                vibrantes, fluidez impecável e som imersivo, para uma experiência de surf que vai além da tela.
                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/U6N/ai-sports.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center my-14 mb-28"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/U6N/filmaker-box.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Assista seus filmes da maneira que os diretores de cinema gostariam
                            </h4>
                            <p className="text-md text-gray-300">
                                Experimente seus filmes ou séries como foram planejados, com o
                                Hisense Filmmaker Mode. Ajuste seus conteúdos às configurações
                                originais para ver detalhes, como som, proporção, cor, taxa de
                                quadros e muito mais, conforme foi originalmente produzido para
                                a exibição mais autêntica da obra-prima de seu diretor favorito.                                </p>
                        </div>
                    </motion.div>

                    <div className="rounded-[2rem] overflow-hidden">
                        <ReactCompareImage leftImage="/U6N/connect-1.png" rightImage="/U6N/connect-2.png" />;
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 }
                        }}
                        className="flex flex-col md:flex-row gap-2 my-14"
                    >
                        <div className="flex-1">
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Esteja conectado</h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">
                                Conexão com consoles mais novos, transmissão de dados mais
                                rápida e menor atraso. Adicione todos os dispositivos externos
                                com conectividade sem fio e com fio de última geração.
                                WiFi6E, HDMI 2.1, AirPlay, Bluetooth, Share to TV e WISA Ready.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10 max-w-[580px]">
                                Entretenimento que você adora, com uma pequena ajuda do Google
                            </h4>
                            <p className="text-md text-gray-300">
                                Chega de pular de um aplicativo para o outro. O Google TV™ reúne filmes
                                e programas de todas as duas assinaturas. Precisa de inspiração? Receba
                                recomendações selecionadas. Use a poderosa pesquisa do Google para
                                encontrar programas em mais de 10.000 aplicativos ou navegue em
                                centenas de canais gratuitos. Com perfis personalizados, a experiência
                                de todos da sua família é exclusiva para cada um.
                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/U6N/google-tv.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:mt-14"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/U6N/voice-control.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                O total contole na palma da sua mão

                            </h4>
                            <p className="text-md text-gray-300">
                                Controle sua TV sem esforço com o Voice Control da Hisense.
                                Pressione o botão no controle e fale os comandos para sua
                                experiência de visualização. Troque de aplicativo, ajuste o
                                volume ou explore novos conteúdos, tudo com o poder da
                                sua voz. É a liberdade do controle através da sua voz.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10 max-w-[580px]">
                                Clique, compartilhe e aproveite
                            </h4>
                            <p className="text-md text-gray-300">
                                Alternar entre dispositivos é algo antigo. O Share-to-TV da Hisense
                                transmite seu conteúdo favorito do seu dispositivo diretamente
                                para sua TV. Espelhe ou apenas compartilhe, a escolha é sua
                                e sem complicações.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Clique_Compartilhe.png' alt="" width={743} height={744} quality={100} />
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
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/U6N/4.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/U6N/1.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/U6N/6.png" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/U6N/7.png" alt="" width={1920} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/U6N/2.png" alt="" width={769} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/U6N/AMBIENTADA.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/U6N/gallery-7.png" alt="" width={1588} height={890} quality={100} />
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


