'use client'

import Image from "next/image";
import Link from "next/link"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { motion } from "framer-motion";
import ReactCompareImage from 'react-compare-image';
import VideoContainer from "@/components/VideoContainer ";
import Q6Animacao from "@/components/Q6_animcacao";
import ProductPresentation from "@/components/ProductPresentation";
import Specifications from "@/components/Specifications";
import { useRef, useState } from "react";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";


export default function A6K() {

    const productRef = useRef<HTMLButtonElement>(null);

    const openStoreModal = () => {
        if (productRef.current) {
            productRef.current.click();
        }
    };

    const [thumbsSwiper, setThumbsSwiper]: any = useState(null);

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
        productImages: ['/Q6N/1.png', '/Q6N/2.png', '/Q6N/3.png', '/Q6N/4.png', '/Q6N/5.png'],
        technologyImage: '/Q6N/qled-300x300.png',
        name: 'Hisense Smart TV QLED 4K Q6N',
        copy: 'Sua vida mais colorida',
        features: ['Quantum Dot Colors', 'Total HDR Solution', 'Dolby Atmos', 'Smooth Motion'],
        type: 'Tamanhos de tela:',
        sizes: ['65"', '75"', '85"']
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
            name: 'Hisense Smart TV ULED MiniLED 4K U7N',
            imageSrc: '/U7N/U7N_1.png',
            link: '/televisores/U7N'
        },
        {
            name: 'Hisense Smart TV ULED MiniLED 4K U6N',
            imageSrc: '/U6N-foryou.png',
            link: '/televisores/U6N'
        },
    ];

    const specificationsData = [
        {
            title: 'Informações Gerais',
            content: [
                { item: 'Modelo', description: 'Hisense Smart TV Q6N' },
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
                { item: 'Tamanho da Tela', description: '50’’ | 55’’ | 65’’ | 75’’ | 85’’' },
                { item: 'Tipo de Tela', description: 'QLED TV' },
                { item: 'Resolução', description: '4K 3840x2160' },
                { item: 'Taxa de Movimento', description: '60' },
                { item: 'Response Time', description: '8 ms' },
            ],
        },
        {
            title: 'Áudio',
            content: [
                { item: 'Potências', description: '50’’ – 2*8W, 55’’ – 2*8W, 65’’ – 2*10W, 75’’ – 2*15W, 85’’ – 2*15W' },
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
                { item: 'Dimensões do produto (sem suporte)', description: '50’’ – 1119×651×81 mm, 55’’ – 1233×717×80 mm, 65’’ – 1453×840×76 mm, 75’’ – 1676×965×87 mm, 85’’ – 1892×1092×102 mm' },
                { item: 'Dimensões do produto (com suporte)', description: '50’’ – 1119×700×274 mm, 55’’ – 1233×767×274 mm, 65’’ – 1453×897×299 mm, 75’’ – 1676×1044×370 mm, 85’’ – 1892×1182×474 mm' },
                { item: 'Dimensões da embalagem', description: '50’’ – 1265×135×799 mm, 55’’ – 1397×135×846 mm, 65’’ – 1649×160×1057 mm, 75’’ – 1865×210×1146 mm, 85’’ – 2100×1304×248 mm' },
                { item: 'Peso do Produto', description: '50’’ – 13.5 Kg, 55’’ – 16.6 Kg, 65’’ – 24.4 Kg, 75’’ – 33.8 Kg, 85’’ – 53.4 Kg' },
            ],
        },
        {
            title: 'Consumo',
            content: [
                { item: 'Consumo de Energia', description: '50’’ – 120 W, 55’’ – 130 W, 65’’ – 190 W, 75’’ – 230 W, 85’’ – 330 W' },
                { item: 'Consumo em Standby', description: '<0.5W' },
                { item: 'Fonte de Alimentação', description: 'AC100-240V, 50/60Hz' },
            ],
        },
        {
            title: 'Portas',
            content: [
                { item: 'HDMI', description: '50’’ – 3, 55’’ – 3, 65’’ – 4, 75’’ – 4, 85’’ – 4' },
                { item: 'USB', description: '2' },
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
        '50"': [
            {
                name: 'Fast Shop',
                logo: '/fast.png',
                link: 'https://site.fastshop.com.br/smart-tv-hisense-qled-4k-uhd-50--50q6n-polegadas-com-wi-fi---50a51hua-hh50q6nhua_prd-3389/p',
            },
        ],
        '65"': [
            {
                name: 'Fast Shop',
                logo: '/fast.png',
                link: 'https://site.fastshop.com.br/smart-tv-hisense-qled-4k-uhd-65--65q6n-polegadas-com-wi-fi---65a51hua-hh65q6nhua_prd-2887/p',
            },
        ],
        '75"': [
            {
                name: 'Fast Shop',
                logo: '/fast.png',
                link: 'https://site.fastshop.com.br/smart-tv-hisense-qled-4k-uhd-75--75q6n-polegadas-com-wi-fi---75a51hua-hh75q6nhua_prd-2888/p',
            },
        ],
        '85"': [
            {
                name: 'Fast Shop',
                logo: '/fast.png',
                link: 'https://site.fastshop.com.br/smart-tv-hisense-qled-4k-uhd-85--polegadas-85q6n-com-sleep-timer--entrada-hdmi-e-wi-fi-hh85q6n_prd-2913/p',
            },
        ],
    };






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
                            <Image className="scale-75 lg:scale-100" src='/Q6N/Q6.png' alt="Logo A4 TV" width={470} height={500} quality={100} />
                        </motion.div>
                    </motion.div>

                    <Image className="h-full w-full object-cover hidden md:block" src='/Q6N/Q6-KV-18-9_fundo.png' alt="Imagem key visual da televisão Q6N" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/Q6N/Q6-KV-V-AP_fundo.png' alt="Imagem key visual da televisão Q6N" width={500} height={600} quality={100} />
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
                                <Image src="/Dolby Vision Atmos.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Dolby Vision Atmos</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Adaptative Light Sensor.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Adaptative Light Sensor</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Smooth Motion.png" alt="" width={132} height={32} />
                                <span className="text-xs md:text-sm">Smooth Motion</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Q6N/QLED.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <VideoContainer videoSrc="/Q6-Feature Video-AU&MEA-4K.mp4" />
            </section>

            <section>
                <Q6Animacao />
            </section>

            <section className="mx-auto px-3 py-40 bg-white">
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
                            <h4 className="text-dark lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Som que move você
                            </h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-dark">
                                Seja em filmes, shows ou games, cada detalhe sonoro é
                                reproduzido com clareza, profundidade e precisão, criando
                                uma experiência imersiva onde o áudio parece preencher
                                o ambiente. Experimente o som tridimensional com Dolby Atmos,
                                projetado para envolver você completamente. O conteúdo local e
                                internacional é organizado e adaptado às suas preferências,
                                garantindo uma navegação fluida e personalizada.
                                Bem-vindo ao futuro do entretenimento, onde som e conteúdo
                                se unem para oferecer uma experiência incomparável.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto px-3 lg:py-20 py-14 bg-dark overflow-x-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1">
                            <Image src='/Controle_Escurecimento_PontaAPonta.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Controle de escurecimento ponta-a-ponta</h4>
                            <p className="text-md text-gray-300">
                                Seja assistindo a um filme emocionante ou uma série cheia de
                                contrastes, a TV Q6N Hisense entrega imagens impressionantes
                                e uniformes, sem deixar nada escapar. Com a tecnologia Direct
                                Full Array, cada detalhe na tela ganha vida. Essa funcionalidade
                                ajusta a luminosidade em diferentes partes da imagem,
                                oferecendo pretos mais intensos e cores vibrantes, garantindo
                                uma reprodução precisa e envolvente. Assim, você vê desde
                                os tons mais escuros até os mais claros com perfeição,
                                proporcionando uma experiência visual completa e
                                consistente em toda a tela.
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
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Ação em foco, sem interrupções
                            </h4>
                            <p className="text-md text-gray-300">
                                Perfeito para fãs de esportes e gamers, o Smooth Motion
                                garante uma experiência imersiva e contínua, mantendo
                                você no ritmo certo, sem pausas ou distorções. Nunca mais
                                perca um momento decisivo! Com a tecnologia Smooth Motion,
                                cenas de ação ganham fluidez impecável. A TV otimiza os
                                movimentos em tempo real, eliminando o desfoque e
                                garantindo que você acompanhe cada detalhe, mesmo
                                nas sequências mais rápidas.                                </p>
                        </div>
                        <div className="flex-1">
                            <Image src='/Acao_em_Foco.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-80 hidden lg:block"></div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/Q6_Layer1_BG_campo.png' alt="Imagem key visual da televisão U8N" width={1920} height={1080} quality={100} />
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

                    </motion.div>
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
                        className="absolute top-0 left-0 hidden md:block">
                        <Image src='/Q6_Layer2_Jogador.png' alt="" width={1920} height={1080} quality={100} />
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
                        className="absolute top-0 left-0 hidden md:block">
                        <Image src='/Q6_Layer3_Bola.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>


                    <div className="lg:absolute bottom-[20%] right-[17%] max-w-[600px] px-3 py-20 lg:p-0 z-[3]">
                        <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">A emoção do estádio na sua sala</h4>
                        <p className="text-gray-300 text-md">Com o AI Sports Mode, você não apenas assiste, mas sente a
                            emoção de cada jogada – tudo isso, sem sair do conforto
                            da sua casa. Essa tecnologia inteligente reconhece
                            automaticamente quando um jogo está em andamento e
                            ajusta tanto o áudio quanto a imagem para oferecer uma
                            sensação real de estádio.</p>
                    </div>
                </div>
            </section>



            <section className="bg-dark">
                <div className="max-w-[1250px] mx-auto lg:py-14 px-3 lg:px-0">
                    {/* Wrapper com bordas mais arredondadas */}
                    <div className="rounded-[20px] overflow-hidden">
                        <ReactCompareImage
                            leftImage="/Q6_Interativa_Switch_Dia.png"
                            rightImage="/Q6_Interativa_Switch_Noite.png"
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
                                Visão perfeita, a qualquer hora do dia
                            </h4>
                        </div>
                        <div className="flex-1 md:px-2">
                            <p className="text-md text-gray-300">
                                Seja assistindo a um filme em plena luz do dia ou maratonando
                                séries à noite, a imagem se adapta para garantir claridade
                                impecável e sem esforço. A tecnologia Adaptive Light Sensor
                                da TV Q6N Hisense ajusta automaticamente o brilho da tela de
                                acordo com a luminosidade ao seu redor, proporcionando uma
                                experiência visual confortável e clara em qualquer momento.
                                Com a Hisense, cada detalhe é pensado para que você tenha
                                conforto e imersão total, em qualquer hora e em qualquer lugar.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto px-3 lg:py-20 py-14 bg-dark overflow-x-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1">
                            <Image src='/Jogabilidade_Suave.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Game Mode Plus</h4>
                            <p className="text-md text-gray-300">
                                Seja em uma corrida contra o tempo ou em uma partida
                                multiplayer intensa, você tem a fluidez e precisão que fazem
                                toda a diferença para o seu desempenho. O jogo flui tão bem
                                quanto suas habilidades. Com painel de 60Hz, taxa de atualização
                                variável (VRR) e tecnologia MEMC de baixa latência, você diz
                                adeus aos atrasos e borrões durante o jogo. A TV e o console
                                trabalham em perfeita sintonia, garantindo que cada movimento
                                seu seja captado em tempo real, sem interrupções.                            </p>
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
                                Visual Deslumbrante com HDR
                            </h4>
                            <p className="text-md text-gray-300">
                                Assista a filmes, séries e jogos com a mesma qualidade que foi
                                planejada para o cinema, sem preocupações com compatibilidade.
                                Com a tecnologia HDR da Hisense, cada cena ganha cores
                                vibrantes e detalhes aprimorados. A TV Q6N oferece suporte
                                aos principais formatos, incluindo Dolby Vision IQ e HDR10+,
                                garantindo imagens com brilhos intensos e pretos profundos,
                                independentemente do conteúdo. Basta apertar o play e desfrutar
                                de uma experiência visual rica e realista.                            </p>
                        </div>
                        <div className="flex-1">
                            <Image src='/Assista_Conteudos_Detalhes.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1">
                            <Image src='/Seus_Filmes_Cineastas.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Experiência autêntica como no cinema                            </h4>
                            <p className="text-md text-gray-300">
                                Sinta-se imerso na visão artística dos criadores e aproveite cada
                                detalhe com qualidade cinematográfica autêntica, diretamente
                                na sua sala de estar. Com o Filmmaker Mode da Hisense, você
                                assiste a filmes e séries exatamente como os cineastas
                                imaginaram. A TV ajusta automaticamente configurações
                                como cor, taxa de quadros, som e proporção de tela para
                                oferecer uma experiência fiel à obra original.                                </p>
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
                                Google TV: tudo o que você gosta, em um só lugar
                            </h4>
                            <p className="text-md text-gray-300">
                                Chega de alternar entre aplicativos! O Google TV™ reúne filmes
                                e programas de todas as suas assinaturas em um só lugar,
                                oferecendo sugestões personalizadas com base nas suas
                                preferências. Com acesso a mais de 10.000 aplicativos e
                                canais gratuitos, você encontra facilmente o que deseja assistir.
                                Cada membro da família pode ter seu próprio perfil,
                                garantindo uma experiência única e sob medida para cada um.
                                Navegue, encontre e aproveite tudo o que você gosta,
                                sem complicações.                            </p>
                        </div>
                        <div className="flex-1">
                            <Image src='/Google_TV.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center pt-14"
                    >
                        <div className="flex-1">
                            <Image src='/Clique_Compartilhe.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Conectividade simples e prática
                            </h4>
                            <p className="text-md text-gray-300">
                                Compartilhe o que quiser, quando quiser, e tenha controle total
                                nas suas mãos. Com o recurso Share-to-TV, você transmite
                                conteúdos do seu smartphone diretamente para a TV de forma
                                fácil e rápida. Assista a fotos, vídeos e aplicativos favoritos na
                                tela grande, sem precisar de cabos ou configurações complicadas.
                                Transforme sua TV em um hub de entretenimento com
                                uma experiência integrada e prática.
                            </p>
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
                            <Image className="hover:scale-105 duration-300" src="/Q6N/gallery-1.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/Q6N/gallery-2.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/Q6N/gallery-3.png" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/Q6N/gallery-5.png" alt="" width={769} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/Q6N/gallery-4.png" alt="" width={769} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/Q6N/gallery-6.png" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/Q6N/gallery-7.png" alt="" width={1588} height={890} quality={100} />
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


