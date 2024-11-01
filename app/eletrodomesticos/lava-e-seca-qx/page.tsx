'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useRef } from "react";
import Specifications from "@/components/Specifications";
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
        productImages: ['/LavaSeca/1.jpg', '/LavaSeca/2.jpg', '/LavaSeca/3.jpg', '/LavaSeca/4.jpg'],
        technologyImage: '',
        copy: 'Lava e Seca',
        name: 'QX Series',
        features: [
            'Lavagem de 13kg e secagem de 8kg',
            'Função Steam',
            'Auto limpeza',
            'Painel Touch',
            '13 Programas de lavagem',
        ],
        options1: ['Branca', 'Titanium'],  // Anteriormente 'capacities' ou 'colors'
        options2: ['127v', '220v'],        // Anteriormente 'voltages'
        guarantee: 'Garantia de 10 anos no motor',
    };

    const storeLinks = [
        // Branca 220v
        {
            options: { options1: 'Branca', options2: '220v' },
            stores: [
                {
                    name: 'Berlanda',
                    logo: '/berlanda.png',
                    link: 'https://www.berlanda.com.br/lava-seca-hisense-wd5q13-13kg-branca-p7350',
                },
                {
                    name: 'Casas Bahia',
                    logo: '/casas_bahia.png',
                    link: 'https://www.casasbahia.com.br/lava-e-seca-hisense-wd5q13-branca-com-motor-inverter-e-funcao-steam-13-8kg/p/55058193',
                },
                {
                    name: 'Clima Rio',
                    logo: '/clima-rio.png',
                    link: 'https://www.climario.com.br/lava-e-seca--13kg-hisense-wd5q1342bw2-br-220v-2/p',
                },
                {
                    name: 'Loja Solar',
                    logo: '/lojas_solar.png',
                    link: 'https://www.lojasolar.com.br/lava-e-seca-13kg-branco-220v-wd5q1342bw2-hisense/p',
                },
                {
                    name: 'Lojas Adelino',
                    logo: '/adelino.png',
                    link: 'https://www.lojasadelino.com.br/produto/121296/lavadora-secadora-hisense-wd5q13-13kg-branca-inverter-220v-121296',
                },
                {
                    name: 'Lojas Império',
                    logo: '/imperio.png',
                    link: 'https://www.lojasimperio.com.br/produto/lava-e-seca-hisense-wd5q1342bw2-com-func-o-steam-13kg-branca-220v-066030123.html',
                },
            ],
        },
        // Titanium 127v
        {
            options: { options1: 'Titanium', options2: '127v' },
            stores: [
                {
                    name: 'Clima Rio',
                    logo: '/clima-rio.png',
                    link: 'https://www.climario.com.br/lava-e-seca--13kg-hisense-wd5q1342bt1-inox-127v-2/p',
                },
                {
                    name: 'Friopeças',
                    logo: '/friopecas.png',
                    link: 'https://www.friopecas.com.br/lava-e-seca-hisense-13kg-wd13x-127-volts/p',
                },
            ],
        },
        // Branca 127v
        {
            options: { options1: 'Branca', options2: '127v' },
            stores: [
                {
                    name: 'Clima Rio',
                    logo: '/clima-rio.png',
                    link: 'https://www.climario.com.br/lava-e-seca--13kg--hisense-wd5q1342bw1-br-127v-2/p',
                },
                {
                    name: 'Fujioka',
                    logo: '/fujioka.png',
                    link: 'https://www.fujioka.com.br/lava-seca-hisense-steam-com-13-programas-de-lavagem-wd5q13-196998/p',
                },
            ],
        },
        // Titanium 220v
        {
            options: { options1: 'Titanium', options2: '220v' },
            stores: [
                {
                    name: 'Clima Rio',
                    logo: '/clima-rio.png',
                    link: 'https://www.climario.com.br/lava-e-seca--13kg-hisense-wd5q1342bt2-inox-220v-2/p',
                },
                {
                    name: 'Loja Presidente',
                    logo: '/presidente.png',
                    link: 'https://www.lojaspresidente.com.br/lava-e-seca-hisense-wd5q1342bt2-titanium-com-motor-inverter-e-funcao-steam-13-8kg-220v.html',
                },
                {
                    name: 'Loja Solar',
                    logo: '/lojas_solar.png',
                    link: 'https://www.lojasolar.com.br/lava-e-seca-13kg-titanium-220v-wd5q1342bt2-hisense/p',
                },
                {
                    name: 'Lojas Adelino',
                    logo: '/adelino.png',
                    link: 'https://www.lojasadelino.com.br/produto/121295/lavadora-secadora-hisense-wd5q13-13kg-prata-inverter-220v-121295',
                },
                {
                    name: 'Lojas Becker',
                    logo: '/lojas_becker.png',
                    link: 'https://www.lojasbecker.com/lavadora-de-roupas-hisense-13kg-wd5q13-lava-e-seca-silver/p',
                },
                {
                    name: 'Lojas Império',
                    logo: '/imperio.png',
                    link: 'https://www.lojasimperio.com.br/produto/lava-e-seca-hisense-wd5q1342bt2-com-func-o-steam-13kg-titanium-220v-066030121.html',
                },
            ],
        },
    ];





    const specificationsData = [
        {
            title: 'Gerais',
            content: [
                { item: 'Modelo', description: 'WD5Q1342BW1 e D5Q1342BW2 - Branco | WD5Q1342BT1 e WD5Q1342BT2 - Titanium' },
                { item: 'Programas de Lavagem e Secagem', description: '13 e 3' },
                { item: 'Voltagem', description: '127v e 220v' },
                { item: 'Consumo de energia', description: '0,38KW/h' },
            ],
        },
        {
            title: 'Tipo',
            content: [
                { item: 'Tipo', description: 'Lava e Seca' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Embalado', description: '890 X 670  x 700mm' },
                { item: 'Desembalado', description: '845 x 595 x 660mm' },
                { item: 'Peso', description: 'Bruto - 65Kg | Líquido - 68Kg' },
            ],
        },
        {
            title: 'Capacidade',
            content: [
                { item: 'Lavagem', description: '13kg' },
                { item: 'Secagem', description: '8kg' },
            ],
        },
        {
            title: 'Velocidade de Rotação',
            content: [
                { item: 'Velocidade Máxima', description: '1.400 RPM' },
            ],
        },
        {
            title: 'Classificação energética',
            content: [
                { item: 'Classificação', description: 'A' },
            ],
        },
        {
            title: 'Código EAN',
            content: [
                { item: '127v/Branco', description: '6901101825520' },
                { item: '220v/Branco', description: '6901101825537' },
                { item: '127v/Titanium', description: '6901101825506' },
                { item: '220v/Titanium', description: '6901101825513' },
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
            name: 'Lava Louças',
            imageSrc: '/LavaLoucas/1.jpg',
            link: '/eletrodomesticos/lava-loucas'
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
                    <div className="bg-gradient-to-t from-dark opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute lg:left-[17%] left-[5%] bottom-[10%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                Lava e Seca QX
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Performance e cuidado em cada ciclo</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/LavaSeca/gallery-6.jpg' alt="Imagem key visual da Lava e Seca" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/LavaSeca/lava-e-seca-mobile.png' alt="Imagem key visual da Lava e Seca" width={2268} height={948} quality={100} />
                </div>
            </section>

            <ProductModalEletro
                productProps={productProps}
                stores={storeLinks}
                option1Title="Cor:"
                option2Title="Voltagem:"
                ref={productRef}
            />

            <section id="principais-caracteristicas" className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Principais características</h2>
                    </div>

                    <div className="grid grid-cols-11 gap-3 lg:gap-5 min-h-[400px]">
                        <div className="col-span-12 lg:col-span-3 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-8 px-8 text-center">
                                <Image src="/LavaSeca/top-feature-1.png" alt="" width={250} height={32} />
                                <h5 className="text-xl font-bold mb-2">PURE JET WASH</h5>
                                <span className="text-xs md:text-sm">Fluxo de água potente e de alta velocidade para uma limpeza eficiente</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full pb-5 px-20 text-center">
                                <Image src="/LavaSeca/top-feature-2.png" alt="" width={160} height={32} />
                                <h5 className="text-xl font-bold mb-1">TECNOLOGIA PURE STREAM</h5>
                                <span className="text-xs md:text-sm">Menos engomagem, limpeza profunda, roupas renovadas</span>
                            </div>
                            <div className="lg:flex gap-5 hidden">
                                <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-10">
                                    <Image src="/LavaSeca/top-feature-3.png" alt="" width={160} height={32} />
                                    <span className="text-xs md:text-sm">2 em 1: Lava e Seca</span>
                                </div>
                                <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-10">
                                    <Image src="/LavaSeca/top-feature-4.png" alt="" width={160} height={32} />
                                    <span className="text-xs md:text-sm">Pausa e adição</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-5 text-center">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full px-5 py-8">
                                <Image src="/LavaSeca/top-feature-5.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Cuidados com o vapor para alergias</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full py-8">
                                <Image src="/LavaSeca/top-feature-6.png" alt="" width={160} height={32} />
                                <span className="text-xs md:text-sm">Tambor Floco de Neve</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full py-10">
                                <Image src="/LavaSeca/top-feature-8.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Inversor durável</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-5 w-full py-8">
                                <Image src="/LavaSeca/top-feature-7.png" alt="" width={160} height={32} />
                                <span className="text-xs md:text-sm">Limpeza com tambor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/LavaSeca/banner-1.jpg' alt="" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[8%] left-[15%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[600px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Adicione roupas durante a lavagem
                            </h2>
                            <p>Ideal para aqueles dias corridos, essa função foi projetada para entregar resultados rápidos, sem comprometer a qualidade da lavagem. Pequenas cargas de roupas e peças levemente sujas são lavadas de forma rápida e eficiente, em até 15 minutos. Perfeita para situações emergenciais – como lavar aquela roupa que você precisa de última hora ou renovar peças usadas apenas uma vez – a Quick Wash economiza tempo e energia, ajustando automaticamente o ciclo de acordo com a quantidade de roupas.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/LavaSeca/banner-1-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Adicione roupas durante a lavagem
                            </h2>
                            <p>Ideal para aqueles dias corridos, essa função foi projetada para entregar resultados rápidos, sem comprometer a qualidade da lavagem. Pequenas cargas de roupas e peças levemente sujas são lavadas de forma rápida e eficiente, em até 15 minutos. Perfeita para situações emergenciais – como lavar aquela roupa que você precisa de última hora ou renovar peças usadas apenas uma vez – a Quick Wash economiza tempo e energia, ajustando automaticamente o ciclo de acordo com a quantidade de roupas.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/LavaSeca/banner-2.jpg' alt="" width={1920} height={1080} quality={100} />
                    <motion.div
                        initial={{ y: -150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute w-full top-[25%] left-[36%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[490px] text-dark">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Limpeza do tambor
                            </h2>
                            <p>A função Drum Clean é simples de usar e ideal para quem
                                busca prolongar a vida útil da máquina, evitando problemas
                                causados por acúmulo de sujeira.Esse ciclo de limpeza
                                profunda a 95°C elimina resíduos de detergente, bactérias
                                e odores acumulados no tambor, garantindo que cada
                                lavagem seja mais eficiente e segura para suas roupas.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/LavaSeca/banner-2-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Limpeza do tambor
                            </h2>
                            <p>A função Drum Clean é simples de usar e ideal para quem
                                busca prolongar a vida útil da máquina, evitando problemas
                                causados por acúmulo de sujeira.Esse ciclo de limpeza
                                profunda a 95°C elimina resíduos de detergente, bactérias
                                e odores acumulados no tambor, garantindo que cada
                                lavagem seja mais eficiente e segura para suas roupas.</p>
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
                            <Image src='/LavaSeca/box-1.jpg' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Silencioso, econômico e mais durável</h4>
                            <p className="text-md text-gray-300">O motor inverter reduz vibrações e ruídos, garantindo um ciclo de
                                lavagem mais suave, ideal para qualquer momento do dia – mesmo
                                à noite. Além do conforto acústico, o motor inverter proporciona uma
                                maior economia de energia e água, otimizando o consumo sem
                                comprometer o desempenho. Isso significa que você cuida das
                                suas roupas e do meio ambiente ao mesmo tempo.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Função Steam</h4>
                            <p className="text-md text-gray-300">Com essa tecnologia avançada, suas peças saem da máquina não
                                apenas limpas, mas também macias, livres de amassados e com
                                aparência renovada, como se fossem novas. Além de remover odores
                                difíceis, como suor e fumaça, o vapor ajuda a higienizar as roupas,
                                eliminando bactérias e ácaros, tornando-se ideal para roupas
                                de cama, toalhas e vestuário infantil.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/LavaSeca/box-2.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-16"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/LavaSeca/box-3.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Inversor durável</h4>
                            <p className="text-md text-gray-300">
                                Silencioso, eficiente em termos de energia, mais durável.
                                A alimentação do motor da máquina de lavar é como o motor de um carro.
                                O motor INVERTER é o melhor motor para a sua máquina de lavar devido
                                ao seu acionamento sem escovas e sem atrito. Ele muda o princípio de
                                rotação do motor para mantê-lo frio durante a operação,
                                permitindo que você economize mais energia.
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
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca/gallery-1.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca/gallery-2.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca/gallery-3.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca/gallery-4.jpg" alt="" width={996} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca/gallery-5.jpg" alt="" width={996} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/LavaSeca/lava-e-seca.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/LavaSeca/gallery-7.png" alt="" width={1588} height={890} quality={100} />
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


