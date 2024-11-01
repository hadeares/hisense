'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import { useRef } from "react";
import Specifications from "@/components/Specifications";
import ProductPresentation from "@/components/ProductPresentation";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";


export default function SideBySide() {

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
        productImages: ['/SideBySide/4.png', '/SideBySide/2.png', '/SideBySide/3.png', '/SideBySide/1.png'],
        technologyImage: '',
        copy: 'Refrigerador',
        name: 'Side by Side',
        features: ['Água e Gelo na porta', 'Prateleiras Ajustáveis', 'Puxador Embutido'],
        type: 'Voltagem:',
        models: ['127v', '220v'],
        size: ['127v', '220v'],
        guarantee: 'Garantia de 10 anos no compressor',
    }

    const storeLinks = {
        '127v': [
            {
                name: 'Fast Shop',
                logo: '/fast.png',
                link: 'https://site.fastshop.com.br/refrigerador-side-by-side-hisense-de-02-portas-frost-free-com-533-litros-inox-look---rs-69w1aiqi-hhrs69w_prd-2728/p',
            },
        ],
        '220v': [
            {
                name: 'Lojas Império',
                logo: '/imperio.png',
                link: 'https://www.lojasimperio.com.br/produto/geladeira-hisense-frost-free-rs-69w2aiqi-inverter-side-by-side-533l-inox-look-220v-066010192.html',
            },
        ],
    };

    const specificationsData = [
        {
            title: 'Modelo',
            content: [
                { item: 'Modelo', description: 'RS-69W' },
            ],
        },
        {
            title: 'Capacidade Líquida',
            content: [
                { item: 'Total', description: '533 | 368 | 165 litros' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Embalado (A x L x P)', description: '1850 x 950 x 735 mm' },
                { item: 'Desembalado (A x L x P)', description: '1786 x 910 x 689 mm' },
            ],
        },
        {
            title: 'Peso',
            content: [
                { item: 'Peso Bruto', description: '98 Kg' },
                { item: 'Peso Líquido', description: '102 Kg' },
            ],
        },
        {
            title: 'Código EAN',
            content: [
                { item: '127V', description: '6921727068170' },
                { item: '220V', description: '6921727068187' },
            ],
        },
    ];

    const items = [
        {
            name: 'Bottom Freezer',
            imageSrc: '/BottomFreezer/1.png',
            link: '/eletrodomesticos/bottom-freezer'
        },
        {
            name: 'French Door',
            imageSrc: '/FrenchDoor/01.png',
            link: '/eletrodomesticos/french-door'
        },
        {
            name: 'Frigobar',
            imageSrc: '/Frigobar/1.jpg',
            link: '/eletrodomesticos/frigobar'
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
                    <div className="bg-gradient-to-t from-dark opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute lg:left-[17%] left-[5%] bottom-[10%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                Side by Side
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Armazenamento inteligente e design sofisticado</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src="/SideBySide/side-by-side.jpg" alt="Imagem key visual do Side by side" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src="/SideBySide/side-by-side-mobile.png" alt="Imagem key visual do Side by side" width={2268} height={948} quality={100} />
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

                    <div className="grid grid-cols-11 gap-3 lg:gap-5 min-h-[400px]">
                        <div className="col-span-12 lg:col-span-3 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-12 px-12 text-center">
                                <Image src="/SideBySide/top-feature-1.png" alt="" width={250} height={32} />
                                <h5 className="text-xl font-bold mb-2">DISPENSADOR DE GELO E ÁGUA</h5>
                                <span className="text-xs md:text-sm">Gelo e água resfriada com o simples toque de um botão</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full px-20 py-10 text-center">
                                <Image src="/SideBySide/top-feature-2.png" alt="" width={160} height={32} />
                                <h5 className="text-xl font-bold mb-1">ZONA INDEPENDENTE DE GELADEIRA E FREEZER</h5>
                                <span className="text-xs md:text-sm">Os ingredientes permanecem frescos por mais tempo</span>
                            </div>
                            <div className="flex flex-row gap-3 lg:gap-5">
                                <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-10 px-3 text-center">
                                    <Image src="/SideBySide/top-feature-3.png" alt="" width={160} height={32} />
                                    <span className="text-xs md:text-sm">Sistema de fechamento automático</span>
                                </div>
                                <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full py-10">
                                    <Image src="/SideBySide/top-feature-4.png" alt="" width={160} height={32} />
                                    <span className="text-xs md:text-sm">Multi-Air Flow</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-3 flex flex-row lg:flex-col gap-3 lg:gap-5 text-center">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full px-5 lg:py-20">
                                <Image src="/SideBySide/top-feature-5.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Tanque de água sem encanamento</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-12">
                                <Image src="/SideBySide/top-feature-6.png" alt="" width={160} height={32} />
                                <span className="text-xs md:text-sm">Sensores digitais</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/SideBySide/banner-1.png' alt="" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[50%] left-[15%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[600px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Perfeitamente adequado para qualquer cozinha
                            </h2>
                            <p>Com um novo design de porta de vidro preto premium, que se encaixa perfeitamente no design da sua cozinha, e uma porta de vidro de fácil limpeza, você se livra das pesadas tarefas domésticas.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/SideBySide/side-by-side-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[420px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Perfeitamente adequado para qualquer cozinha
                            </h2>
                            <p>Com um novo design de porta de vidro preto premium, que se encaixa perfeitamente no design da sua cozinha, e uma porta de vidro de fácil limpeza, você se livra das pesadas tarefas domésticas.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/SideBySide/banner-2.jpg' alt="" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-r from-dark opacity-60 absolute top-0 h-full w-full hidden lg:block"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[20%] left-[10%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[600px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Controle total com um toque suave
                            </h2>
                            <p>Assuma o controle total dos recursos do seu refrigerador com um painel de controle de LED sensível ao toque claro, fácil de alcançar e simples de usar, que permite selecionar rapidamente a temperatura desejada para cada compartimento.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/SideBySide/side-by-side-2-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[8%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[420px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Controle total com um toque suave
                            </h2>
                            <p>Assuma o controle total dos recursos do seu refrigerador com um painel de controle de LED sensível ao toque claro, fácil de alcançar e simples de usar, que permite selecionar rapidamente a temperatura desejada para cada compartimento.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto px-3 lg:py-20 bg-dark overflow-x-hidden py-16">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/SideBySide/box-1.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Iluminação equilibrada</h4>
                            <p className="text-md text-gray-300">Mais brilhante e mais eficiente do que as lâmpadas incandescentes padrão de geladeiras, a iluminação de LED permite que você veja o conteúdo da geladeira com mais clareza, além de economizar energia.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">A temperatura constante mantém as coisas frescas</h4>
                            <p className="text-md text-gray-300">Graças à distribuição uniforme de ar frio obtida pelo sistema Hisense Multi Air Flow, uma temperatura ideal é mantida de forma consistente em todo o seu refrigerador - mantendo os alimentos refrigerados com perfeição, não importa onde sejam colocados.
                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/SideBySide/box-2.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-16"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/SideBySide/box-3.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Amplie seu alcance</h4>
                            <p className="text-md text-gray-300">A prateleira pode ser puxada para fora em até 100 mm, permitindo que você visualize e alcance facilmente os alimentos, sem esforço e sem reorganizar todo o espaço interno. Esse design inteligente facilita o acesso a ingredientes que costumam ficar mais ao fundo, evitando desperdício e otimizando a organização. Seja para pegar aquele molho especial ou organizar itens para um jantar em família, basta deslizar a prateleira para fora e ter tudo ao seu alcance.</p>
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
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/SideBySide/gallery-1.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/SideBySide/gallery-2.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/SideBySide/gallery-3.png" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/SideBySide/gallery-4.png" alt="" width={996} height={697} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/SideBySide/gallery-5.png" alt="" width={996} height={697} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/SideBySide/gallery-6.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/SideBySide/gallery-6-mobile.png" alt="" width={1588} height={890} quality={100} />
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


