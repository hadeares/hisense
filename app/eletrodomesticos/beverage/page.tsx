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




export default function Beverage() {

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
        productImages: ['/Beverage/1.jpg', '/Beverage/2.jpg', '/Beverage/3.jpg', '/Beverage/4.jpg'],
        technologyImage: '',
        copy: 'Adega',
        name: 'Beverage Cooler',
        features: [
            'Porta reversível',
            'Painel de controle de LED',
            'Armazena até 140 latas de 354 ml',
            'Porta de vidro Low-E',
            'Ampla faixa de temperatura: 1°C a 10°C',
        ],
        option1: ['152l'],
        option2: ['127v', '220v'],
        guarantee: 'Garantia de 10 anos no compressor',
    };

    const storeLinks = [
        {
            options: { options1: '152l', options2: '127v' },
            stores: [
                {
                    name: 'Fast Shop',
                    logo: '/fast.png',
                    link: 'https://site.fastshop.com.br/adega--frigobar--60hz--com-capacidade-de-152-litros---modelo-hbl-14w1anqri-hhhbl14w_prd-4337/p',
                },
            ],
        },
    ];

    const specificationsData = [
        {
            title: 'Capacidade',
            content: [
                { item: 'Capacidade Total', description: '152 litros' },
                { item: 'Capacidade de Latas', description: '140 latas' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Com Puxadores', description: '862 x 595 x 646,9 mm' },
                { item: 'Sem Puxadores', description: '862 x 595 x 599,9 mm' },
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
            name: 'Wine Cooler',
            imageSrc: '/WineCooler/1.jpg',
            link: '/eletrodomesticos/wine-cooler'
        },
        {
            name: 'Freezer',
            imageSrc: '/Freezer/1.jpg',
            link: '/eletrodomesticos/freezer'
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
                                Beverage Cooler
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Refrigere com elegância, sirva com estilo</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/Beverage/beverage.jpg' alt="Imagem key visual do Beverage" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/Beverage/beverage-mobile.jpg' alt="Imagem key visual do Beverage" width={2268} height={948} quality={100} />
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
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer text-center h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-11 px-14">
                                <Image src="/Beverage/top-feature-1.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Instalação embutida perfeita</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col px-16 text-center items-center justify-center w-full py-8">
                                <Image src="/Beverage/top-feature-3.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Temperatura aquedequada sem congelamento</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center gap-3 justify-center w-full py-8">
                                <Image src="/Beverage/top-feature-2.png" alt="" width={160} height={32} />
                                <span className="text-xs md:text-sm">Prateleira deslizante</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full py-8">
                                <Image src="/Beverage/top-feature-4.png" alt="" width={160} height={32} />
                                <span className="text-xs md:text-sm">Energia DOE</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full py-8">
                                <Image src="/Beverage/top-feature-6.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Porta reversível</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-5 w-full py-8">
                                <Image src="/Beverage/top-feature-5.png" alt="" width={160} height={32} />
                                <span className="text-xs md:text-sm">Baixo nível de ruído</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/Beverage/porta-banner.jpg' alt="" width={1920} height={1080} quality={100} />

                    <div className="lg:bg-gradient-to-t bg-gradient-to-b from-dark lg:opacity-70 opacity-50 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[15%] left-[15%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[600px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Porta reversível
                            </h2>
                            <p>O produto pode ser instalado de forma independente ou sob armários com porta reversível para máxima flexibilidade.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-0 left-0 hidden md:block overflow-hidden z-[5]">
                        <Image className="hidden md:block" src='/Beverage/porta-banner-2.png' alt="" width={1920} height={1080} quality={100} />
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/Beverage/porta-banner-mobile.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Porta reversível
                            </h2>
                            <p>O produto pode ser instalado de forma independente ou sob armários com porta reversível para máxima flexibilidade.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/Beverage/uv-banner.jpg' alt="" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-b from-dark opacity-70 absolute top-0 h-full w-full lg:hidden"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[50%] left-[8%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[600px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Sem gelo
                            </h2>
                            <p>Essa tecnologia evita a formação de névoa e acúmulo de gelo, garantindo que a porta de vidro permaneça sempre transparente, valorizando a apresentação de suas cervejas, refrigerantes e outras bebidas. Além de manter o vidro impecável, o sistema anticongelante preserva a temperatura interna de maneira eficiente, garantindo que as bebidas estejam sempre prontas para o consumo, na temperatura ideal.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/Beverage/uv-banner-mobile.jpg' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[7%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Sem gelo
                            </h2>
                            <p>Essa tecnologia evita a formação de névoa e acúmulo de gelo, garantindo que a porta de vidro permaneça sempre transparente, valorizando a apresentação de suas cervejas, refrigerantes e outras bebidas. Além de manter o vidro impecável, o sistema anticongelante preserva a temperatura interna de maneira eficiente, garantindo que as bebidas estejam sempre prontas para o consumo, na temperatura ideal.</p>
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
                            <Image src='/Beverage/box-1.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Design embutido</h4>
                            <p className="text-md text-gray-300">Com opções de instalação embutida ou independente, você tem liberdade para escolher a melhor forma de posicioná-la, seja como peça central em sua área gourmet ou discretamente integrada ao mobiliário da sua cozinha. Essa versatilidade permite que o produto se adapte perfeitamente a diferentes estilos de decoração, mantendo a funcionalidade e o design moderno. A instalação embutida maximiza o uso do espaço, enquanto a opção independente proporciona mobilidade e destaque, oferecendo soluções práticas para ambientes de qualquer tamanho.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center pt-14"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Proteção e temperatura ideal para suas bebidas</h4>
                            <p className="text-md text-gray-300">A porta de vidro Low-E da Beverage Cooler Hisense oferece muito mais do que um design moderno. Com suas propriedades avançadas de isolamento térmico, ela reduz a entrada de calor externo e minimiza a condensação, mantendo suas bebidas sempre na temperatura ideal. Além de ajudar a preservar o frescor, essa tecnologia também reflete a luz solar, protegendo o conteúdo armazenado e garantindo que cada bebida esteja pronta para ser apreciada, mesmo nos dias mais quentes. Ideal para quem busca não apenas praticidade, mas também uma solução inteligente para manter refrigerantes, cervejas e vinhos sempre no ponto certo.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Beverage/box-2.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center mt-16"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Beverage/box-3.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Tela em LED</h4>
                            <p className="text-md text-gray-300">Com a tela de LED intuitiva, você ajusta facilmente a temperatura ideal para suas bebidas entre 1°C e 10°C com um simples toque. Esse painel moderno não apenas facilita a configuração precisa, mas também oferece uma leitura clara da temperatura em tempo real, garantindo que suas bebidas estejam sempre na condição perfeita para consumo. Seja para manter cervejas geladas ou refrigerantes na temperatura ideal, o sistema de controle por LED oferece flexibilidade e praticidade, adaptando-se às suas preferências a qualquer momento. Além disso, o painel é de fácil manutenção e complementa o design elegante do produto, combinando estética e funcionalidade.</p>
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
                            <Image className="hover:scale-105 duration-300" src="/Beverage/gallery-1.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/Beverage/gallery-2.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/Beverage/gallery-3.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/Beverage/gallery-4.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/Beverage/gallery-5.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/Beverage/gallery-6.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/Beverage/gallery-7.png" alt="" width={1588} height={890} quality={100} />
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


