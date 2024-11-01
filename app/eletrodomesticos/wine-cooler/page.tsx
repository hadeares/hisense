'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import { useRef } from "react";
import Specifications from "@/components/Specifications";
import ProductPresentation from "@/components/ProductPresentation";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";
import ProductModalEletro from "@/components/ProductModalEletro";


export default function WineCooler() {

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
            name: 'Beverage Cooler',
            imageSrc: '/Beverage/1.jpg',
            link: '/eletrodomesticos/beverage'
        },
        {
            name: 'Freezer',
            imageSrc: '/Freezer/1.jpg',
            link: '/eletrodomesticos/freezer'
        },
    ];


    const productProps = {
        productImages: ['/WineCooler/1.jpg', '/WineCooler/2.jpg', '/WineCooler/3.jpg', '/WineCooler/4.jpg'],
        technologyImage: '',
        copy: 'Adega',
        name: 'Wine Cooler',
        features: [
            '152 litros',
            '54 garrafas',
            'Alarme de porta aberta',
            'Display de LED',
        ],
        options1: ['Titanium'],
        options2: ['127v', '220v'],
        guarantee: 'Garantia de 10 anos no compressor',
    };

    const storeLinks = [
        {
            options: { options1: 'Titanium', options2: '127v' },
            stores: [
                {
                    name: 'Fast Shop',
                    logo: '/fast.png',
                    link: 'https://site.fastshop.com.br/adega-de-vinhos-hisense-para-54-garrafas-com-ate-20%C2%B0c---hwl-54w1anqri-hhhwl54w_prd-15066/p',
                },
                {
                    name: 'Casas Bahia',
                    logo: '/casas_bahia.png',
                    link: 'https://www.casasbahia.com.br/adega-de-vinhos-hisense-para-54-garrafas-com-ate-20c-hwl-54w1anqri-1564005396/p/1564005396?utm_medium=Cpc&utm_source=GP_PLA&IdSku=1564005396&idLojista=37582&tipoLojista=3P&gclsrc=aw.ds&&utm_campaign=3p_gg_pmax_eldo_b&gad_source=4&gclid=CjwKCAjwg-24BhB_EiwA1ZOx8nzqOq208FrednO83fmlhA_aQMx2rhY1U9vw-Gbj7zFGFgVpZqNC4BoCa4gQAvD_BwE',
                },
                {
                    name: 'PontoFrio',
                    logo: '/pontofrio-logo.png',
                    link: 'https://www.pontofrio.com.br/adega-de-vinhos-hisense-para-54-garrafas-com-ate-20c-hwl-54w1anqri-1564005396/p/1564005396?utm_medium=cpc&utm_source=GP_PLA&IdSku=1564005396&idLojista=37582&tipoLojista=3P&gclsrc=aw.ds&&utm_campaign=3p_gg_pmax_eldo&gad_source=4&gclid=CjwKCAjwg-24BhB_EiwA1ZOx8u-S-7j7x3JbvQM--mpdtaWNIg6LK_1BVQX-LAsNdmk_y9Q0W7jhkRoCQUMQAvD_BwE',
                },
                {
                    name: 'Carrefour',
                    logo: '/carrefour.png',
                    link: 'https://www.carrefour.com.br/adega-de-vinhos-hisense-para-54-garrafas-com-ate-20c-hwl54w1anqri-mp935645494/p',
                },
            ],
        },
    ];

    const specificationsData = [
        {
            title: 'Capacidade',
            content: [
                { item: 'Capacidade Total', description: '152 litros' },
                { item: 'Capacidade de Garrafas', description: '54 garrafas' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Dimensões (A x L x P)', description: '86,2 x 59,5 x 59,9 cm' },
            ],
        },
        {
            title: 'Certificação Energética',
            content: [
                { item: 'Certificação Energética CSA', description: 'Sim' },
                { item: 'Certificação Energética DOE', description: 'Sim' },
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
                    <div className="bg-gradient-to-r from-dark opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute left-[15%] bottom-[12%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                Wine Cooler
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Sofisticação e tecnologia na temperatura ideal</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/WineCooler/wine-cooler.jpg' alt="Imagem key visual do Wine Cooler" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/WineCooler/wine-cooler-mobile.png' alt="Imagem key visual do Wine Cooler" width={2268} height={948} quality={100} />
                </div>

            </section>
            <ProductModalEletro
                productProps={productProps}
                stores={storeLinks}
                option1Title="Capacidade:"
                option2Title="Voltagem:"
                ref={productRef}
            />

            <section id="principais-caracteristicas" className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Principais características</h2>
                    </div>

                    <div className="grid grid-cols-12 gap-3 lg:gap-5 min-h-[400px]">
                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full px-14 text-center py-11">
                                <Image src="/WineCooler/top-feature-1.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Instalação embutida perfeita</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col px-16 text-center items-center justify-center w-full py-8">
                                <Image src="/WineCooler/top-feature-2.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Temperatura aquedequada sem congelamento</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center gap-3 justify-center w-full py-8">
                                <Image src="/WineCooler/top-feature-3.png" alt="" width={180} height={32} />
                                <span className="text-xs md:text-sm">Prateleira deslizante</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full py-8">
                                <Image src="/WineCooler/top-feature-4.png" alt="" width={180} height={32} />
                                <span className="text-xs md:text-sm">Porta com proteção UV</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full py-8">
                                <Image src="/WineCooler/top-feature-5.png" alt="" width={180} height={32} />
                                <span className="text-xs md:text-sm">Energia DOE</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-5 w-full py-8">
                                <Image src="/WineCooler/top-feature-6.png" alt="" width={180} height={32} />
                                <span className="text-xs md:text-sm">Baixo nível de ruído</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/WineCooler/prateleira.jpg' alt="" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[60%] left-[8%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[600px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Prateleira deslizante com acabamento em madeira
                            </h2>
                            <p>A prateleira com frente em madeira confere um design elegante aos suportes de arame, além de possuírem corrediças telescópicas de extensão total que garantem fácil acesso
                                ao seu vinho e podem ser totalmente retiradas.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/WineCooler/estatico1-mobile.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Prateleira deslizante com acabamento em madeira
                            </h2>
                            <p>A prateleira com frente em madeira confere um design elegante aos suportes de arame, além de possuírem corrediças telescópicas de extensão total que garantem fácil acesso
                                ao seu vinho e podem ser totalmente retiradas.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/WineCooler/embutido.jpg' alt="" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[50%] left-[8%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[600px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Design Embutido
                            </h2>
                            <p>O amplo espaço de 600 mm permite que a porta seja aberta normalmente, o que torna a instalação embutida realmente perfeita. O design compacto é perfeito para cozinhas pequenas, apartamentos ou escritórios.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/WineCooler/embutido-mobile.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[550px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Design Embutido
                            </h2>
                            <p>O amplo espaço de 600 mm permite que a porta seja aberta normalmente, o que torna a instalação embutida realmente perfeita. O design compacto é perfeito para cozinhas pequenas, apartamentos ou escritórios.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/WineCooler/frost.jpg' alt="" width={1920} height={1080} quality={100} />

                    <div className="lg:bg-gradient-to-r bg-gradient-to-b from-dark opacity-80 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[30%] left-[8%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[600px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Conservação eficiente, sem complicações
                            </h2>
                            <p>A adega Wine Cooler mantém as condições ideais para conservar seus vinhos sem a formação de gelo. Isso significa que a temperatura interna permanece estável, evitando a oscilação que pode comprometer o sabor e a qualidade das garrafas armazenadas. Além disso, você não precisa se preocupar com o descongelamento manual, economizando tempo e esforço. Seus vinhos ficam armazenados na temperatura perfeita, prontos para serem apreciados a qualquer momento, sem interferências e com total praticidade.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/WineCooler/frost-mobile.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Conservação eficiente, sem complicações
                            </h2>
                            <p>A adega Wine Cooler mantém as condições ideais para conservar seus vinhos sem a formação de gelo. Isso significa que a temperatura interna permanece estável, evitando a oscilação que pode comprometer o sabor e a qualidade das garrafas armazenadas. Além disso, você não precisa se preocupar com o descongelamento manual, economizando tempo e esforço. Seus vinhos ficam armazenados na temperatura perfeita, prontos para serem apreciados a qualquer momento, sem interferências e com total praticidade.</p>
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
                            <Image src='/WineCooler/anti-uv.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Vidro anti-UV e Low E</h4>
                            <p className="text-md text-gray-300">O vidro de alta eficiência energética Low-E ajuda a manter a temperatura interna estável, evitando flutuações térmicas que poderiam comprometer a qualidade da bebida, ao mesmo tempo que reduz o consumo de energia. A proteção anti-UV bloqueia os raios ultravioleta que podem acelerar o processo de envelhecimento do vinho. Essa barreira essencial garante que suas garrafas estejam protegidas dos efeitos prejudiciais da luz, preservando o sabor, os aromas e a cor dos vinhos por muito mais tempo.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Instalação flexível</h4>
                            <p className="text-md text-gray-300">Você tem total liberdade para criar o ambiente ideal e armazenar seus vinhos da maneira mais conveniente e charmosa. A adega pode ser instalada de forma independente, como um elemento destacado na sua cozinha ou área gourmet, ou integrada sob armários, garantindo um visual harmonioso e sofisticado. Para facilitar ainda mais, a porta reversível permite escolher o lado de abertura que melhor se adapta ao layout do ambiente, proporcionando maior praticidade e aproveitamento de espaço.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/WineCooler/embutido-box.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-14"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/WineCooler/baixo-ruido.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Baixo nível de ruído</h4>
                            <p className="text-md text-gray-300">A adega Hisense oferece um ambiente de baixo ruído (40dB). Ele apresenta baixa vibração e garante que seu vinho fique em um ambiente adequado. Graças à tecnologia Hisense, esse armário para vinhos também pode economizar energia.</p>
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
                            <Image className="hover:scale-105 duration-300" src="/WineCooler/gallery-1.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/WineCooler/gallery-2.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/WineCooler/gallery-3.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/WineCooler/gallery-4.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/WineCooler/gallery-5.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/WineCooler/gallery-6.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/WineCooler/gallery-7.png" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="specifications" className="scroll-mt-20">
                <Specifications categories={specificationsData} />
            </section>

            {/* Seção Recomendações */}
            <section>
                <ForYou products={items} title='Explore o que há de melhor para sua casa' />
            </section>

        </main >
    );
}


