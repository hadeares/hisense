'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import ProductSection from "@/components/ProductSection";
import Accordion from "@/components/Accordion";

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxDimensions } from "react-icons/rx";
import Specifications from "@/components/Specifications";
import ProductPresentation from "@/components/ProductPresentation";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";


export default function LavaLoucas() {

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
        productImages: ['/LavaLoucas/1.jpg', '/LavaLoucas/2.jpg', '/LavaLoucas/3.jpg', '/LavaLoucas/4.jpg'],
        technologyImage: '',
        copy: 'Lavadora de louças',
        name: 'Lava Louças 15 Serviços',
        features: ['Free Standing', 'Aço inoxidável', 'Display LED', 'Easy lift'],
        type: 'Voltagem:',
        models: ['220v'],
        size: ["HS643E40XBR"],
        dimensions: ' 845 x 600 x 600mm',
    }


    const specificationsData = [
        {
            title: 'Capacidade',
            content: [
                { item: 'Capacidade', description: '15 Serviços' },
            ],
        },
        {
            title: 'Consumo',
            content: [
                { item: 'Consumo de Energia', description: '0,861 KWh/Mês' },
                { item: 'Consumo de Água/Ciclo', description: '10 Litros' },
            ],
        },
        {
            title: 'Classificação Energética',
            content: [
                { item: 'Classificação Energética', description: 'A+++' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Embalado (A x L x P)', description: '875 x 656 x 675 mm' },
                { item: 'Desembalado (A x L x P)', description: '845 x 600 x 600 mm' },
            ],
        },
        {
            title: 'Peso',
            content: [
                { item: 'Peso Bruto', description: '47 Kg' },
                { item: 'Peso Líquido', description: '54,5 Kg' },
            ],
        },
        {
            title: 'Código EAN',
            content: [
                { item: '220V', description: '6974805075409' },
            ],
        },
    ];

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
            name: 'Lava e Seca',
            imageSrc: '/LavaSeca3S/1.png',
            link: '/lava-e-seca'
        },
    ];

    const storeLinks = {
        'HS643E40XBR': [

            {
                name: 'Lojas Adelino',
                logo: '/adelino.png',
                link: 'https://www.lojasadelino.com.br/produto/122422/lavalouca-hisense-hs643e40xbr-15-servicos-inox-122422',
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
                    <div className="bg-gradient-to-t from-dark opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute lg:left-[17%] left-[5%] bottom-[10%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                Lava Louças
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl pe-3">Limpeza impecável com um toque de tecnologia</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/LavaLoucas/lava-loucas.jpg' alt="Imagem key visual do Freezer" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/LavaLoucas/lava-loucas-mobile.png' alt="Imagem key visual do Freezer" width={2268} height={948} quality={100} />
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
                        <div className="col-span-12 lg:col-span-6 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-7">
                                <Image src="/LavaLoucas/top-feature-1.svg" alt="" width={180} height={32} />
                                <span className="text-xs md:text-sm">Super silencioso</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/LavaLoucas/top-feature-2.svg" alt="" width={180} height={32} />
                                <span className="text-xs md:text-sm">Limpeza rápida em 15 minutos</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-8">
                                <Image src="/LavaLoucas/top-feature-3.svg" alt="" width={180} height={32} />
                                <span className="text-xs md:text-sm">Configuração em 16 posições</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-8">
                                <Image src="/LavaLoucas/top-feature-4.svg" alt="" width={180} height={32} />
                                <span className="text-xs md:text-sm">Auto Dry Technology</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/LavaLoucas/talheres-banner.jpg' alt="" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full hidden lg:block"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[12%] right-[5%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[550px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Lave tudo em uma única carga
                            </h2>
                            <p>Com três cestos para talheres.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/LavaLoucas/talheres-banner-mobile.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[430px] text-dark">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Lave tudo em uma única carga
                            </h2>
                            <p>Com três cestos para talheres.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-white overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/LavaLoucas/lavaloucas-banner.jpg' alt="" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-r from-dark opacity-50 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[40%] left-[6%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[550px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Cesto Superior Ajustável
                            </h2>
                            <p>Ideal para diferentes tipos de louça e tamanhos de carga, o cesto ajustável otimiza o espaço interno e facilita o manuseio, tornando a rotina de lavagem mais prática e eficiente. Além de evitar esforços desnecessários ao organizar as louças, você aproveita ao máximo cada ciclo, independentemente do volume ou formato das peças.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/LavaLoucas/lavaloucas-banner-mobile.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[8%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Cesto Superior Ajustável
                            </h2>
                            <p>Ideal para diferentes tipos de louça e tamanhos de carga, o cesto ajustável otimiza o espaço interno e facilita o manuseio, tornando a rotina de lavagem mais prática e eficiente. Além de evitar esforços desnecessários ao organizar as louças, você aproveita ao máximo cada ciclo, independentemente do volume ou formato das peças.</p>
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
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/LavaLoucas/cestos-moveis.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Cestos móveis</h4>
                            <p className="text-md text-gray-300">Você pode adaptar o espaço interno conforme a necessidade, acomodando desde itens delicados como taças até panelas maiores e travessas com facilidade. Esse ajuste simples e intuitivo maximiza o aproveitamento do espaço e evita que louças fiquem apertadas ou mal posicionadas, garantindo uma lavagem completa e eficiente.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Programação de 1 a 24 horas</h4>
                            <p className="text-md text-gray-300">Programe a lavagem no horário mais conveniente para você – seja para aproveitar tarifas de energia reduzidas ou para encontrar a louça limpa e pronta quando precisar. Essa funcionalidade oferece mais flexibilidade e otimiza sua rotina, permitindo que você escolha quando o ciclo começa, mesmo estando fora de casa. Com uma interface simples e intuitiva, ajustar a programação é fácil e rápido, garantindo que a lava-louças trabalhe no momento certo, sem esforço.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/LavaLoucas/programacao.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-14"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/LavaLoucas/desempenho.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Melhor desempenho de limpeza</h4>
                            <p className="text-md text-gray-300">O sistema de jatos otimizados atinge todos os cantos do compartimento, oferecendo uma limpeza 30% mais eficiente e removendo até mesmo as sujeiras mais difíceis. Essa performance superior não apenas garante louças impecáveis, mas também otimiza o uso de água e detergente, tornando cada ciclo mais sustentável e econômico. Ideal para lidar com panelas, pratos engordurados e copos delicados, a distribuição uniforme da água assegura que todas as peças saiam limpas e brilhantes.</p>
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
                            <Image className="hover:scale-105 duration-300" src="/LavaLoucas/gallery-1.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/LavaLoucas/gallery-2.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/LavaLoucas/gallery-3.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/LavaLoucas/gallery-4.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/LavaLoucas/gallery-5.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/LavaLoucas/gallery-6.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/LavaLoucas/gallery-7.png" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="specifications" className="scroll-mt-20">
                <Specifications categories={specificationsData} />
            </section>

            {/* Seção Recomendações */}
            <section>
                <ForYou products={items} title='Descubra a solução ideal para sua vida' />
            </section>

        </main >
    );
}


