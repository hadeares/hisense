'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import { useRef } from "react";
import Specifications from "@/components/Specifications";
import ProductPresentation from "@/components/ProductPresentation";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";


export default function RefrigeradorBottomFreezer() {

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
        productImages: ['/BottomFreezer/1.png', '/BottomFreezer/2.png', '/BottomFreezer/3.png', '/BottomFreezer/4.png', '/BottomFreezer/5.png', '/BottomFreezer/6.png', '/BottomFreezer/7.png'],
        technologyImage: '',
        name: 'Refrigerador Bottom Freezer',
        copy: 'Congelador',
        features: ['Filtro desodorizante ', 'Super Cool e Super Freeze ', 'Profundidade do balcão', 'Porta reversível', 'Iluminação LED suave', 'Controle eletrônico por toque'],
        dimensions: '1830 x 714 x 704mm',
        type: 'Voltagem:',
        models: ['127v', '220v'],
        size: ['220v |  RB-52W2ANRI'],
        volt: ['127v', '220v']
    }

    const storeLinks = {
        '220v |  RB-52W2ANRI': [
            {
                name: 'Lojas Afubra',
                logo: '/afubra.png',
                link: 'https://www.lojasafubra.com.br/geladeira-refrigerador-duplex-frost-free-freezer-inverter-397l-inox-rb-52w2anri-220v/p',
            },
            {
                name: 'Lojas Império',
                logo: '/imperio.png',
                link: 'https://www.lojasimperio.com.br/produto/geladeira-hisense-frost-free-rb-52w2anri-inverter-bottom-freezer-397l-inox-220v-066010167.html',
            },
            {
                name: 'Lojas Adelino',
                logo: '/adelino.png',
                link: 'https://www.lojasadelino.com.br/produto/125603/refrigerador-hisense-rb52w-397lt-frost-free-inverter-portas-reversiveis-inox-220v-125603',
            },
        ],
    };

    const specificationsData = [
        {
            title: 'Modelo',
            content: [
                { item: 'Modelo', description: 'BCD-422' },
            ],
        },
        {
            title: 'Capacidade',
            content: [
                { item: 'Capacidade Líquida', description: '397 | 301 | 96 Litros' },
            ],
        },
        {
            title: 'Classificação Energética',
            content: [
                { item: 'Classificação Energética', description: 'A+++' },
            ],
        },
        {
            title: 'Consumo',
            content: [
                { item: 'Consumo de Energia', description: '40 KWh/Mês' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Embalado (A x L x P)', description: '1830 x 714 x 704 mm' },
                { item: 'Desembalado (A x L x P)', description: '1720 x 704 x 694 mm' },
            ],
        },
        {
            title: 'Peso',
            content: [
                { item: 'Peso Bruto', description: '83 Kg' },
                { item: 'Peso Líquido', description: '79 Kg' },
            ],
        },
        {
            title: 'Código EAN',
            content: [
                { item: '110V', description: '6921727068194' },
                { item: '220V', description: '6921727068200' },
            ],
        },
    ];

    const items = [
        {
            name: 'French Door',
            imageSrc: '/FrenchDoor/01.png',
            link: '/eletrodomesticos/french-door'
        },
        {
            name: 'Side by Side',
            imageSrc: '/SideBySide/2.png',
            link: '/eletrodomesticos/side-by-side'
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
                    <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute left-[5%] lg:left-[15%] bottom-[12%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                Bottom Freezer
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Design funcional, para o encaixe perfeito em qualquer cozinha.</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src="/BottomFreezer/3840x2160-fullimage.png" alt="Imagem key visual do Bottom Freezer" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src="/BottomFreezer/banner-mobile.png" alt="Imagem key visual do Bottom Freezer" width={2268} height={948} quality={100} />
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
                            <div className="bg-white text-center hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center p-20">
                                <Image src="/BottomFreezer/02-ícones-fingerprint.png" alt="" width={252} height={32} />
                                <span>Controle eletrônico por toque</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/BottomFreezer/02-ícones-counter.png" alt="" width={250} height={32} />
                                <span className="text-xs md:text-sm">Profunidade do Balcão</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/BottomFreezer/02-ícones-icemaker.png" alt="" width={250} height={32} />
                                <span className="text-xs md:text-sm">Filtro Desodorizante</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/BottomFreezer/02-ícones-shelf.png" alt="" width={250} height={32} />
                                <span className="text-xs md:text-sm">Porta Reversível</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/BottomFreezer/02-ícones-cool.png" alt="" width={250} height={32} />
                                <span className="text-xs md:text-sm">Super Cool e Super Freeze</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-white overflow-hidden">
                <div className="w-[100%] h-full relative">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/BottomFreezer/1920x1080-estaticofull-portareversivel.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[35%] left-[10%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[450px]">
                            <h2 className="text-dark lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Portas reversíveis
                            </h2>
                            <p>
                                As portas da geladeira e do congelador podem ser instaladas para abrir de ambos os lados, alterando a dobradiça da porta, dependendo das necessidades individuais da sua cozinha.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/BottomFreezer/bottom-banner1-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[550px]">
                            <h2 className="text-dark lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Portas reversíveis

                            </h2>
                            <p>
                                As portas da geladeira e do congelador podem ser instaladas para abrir de ambos os lados, alterando a dobradiça da porta, dependendo das necessidades individuais da sua cozinha.

                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>


            <section className="mx-auto bg-white overflow-hidden">
                <div className="w-[100%] h-full relative">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/BottomFreezer/1920x1080-estaticofull-PainelDigital.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[9%] left-[10%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[800px]">
                            <h2 className="text-dark lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Painel eletrônico touch
                            </h2>
                            <p>
                                O painel de controle digital fácil de usar permite que você altere facilmente a temperatura dentro do refrigerador ou freezer e ative funções especiais, como os modos ECO ou Férias para economizar energia, com apenas um toque no botão.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/BottomFreezer/bottom-banner2-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[550px]">
                            <h2 className="text-dark lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Painel eletrônico touch
                            </h2>
                            <p>
                                O painel de controle digital fácil de usar permite que você altere facilmente a temperatura dentro do refrigerador ou freezer e ative funções especiais, como os modos ECO ou Férias para economizar energia, com apenas um toque no botão.
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
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/BottomFreezer/750x750-boxes-filtro.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Filtro desodorizante</h4>
                            <p className="text-md text-gray-300">O filtro desodorizante é ideal para refrigeradores que armazenam uma grande variedade de itens, como queijos, frutas e refeições prontas. Ele impede que os cheiros se misturam, evitando contaminação de aromas entre os alimentos. Além de facilitar a organização e a preservação, o sistema é prático e de fácil manutenção, proporcionando frescor contínuo e uma experiência mais agradável toda vez que você abrir a porta da geladeira.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Super Cool & Super Freeze
                            </h4>
                            <p className="text-md text-gray-300">A função Super Cool resfria rapidamente itens recém-colocados no refrigerador, ideal para aqueles momentos em que você precisa de uma bebida gelada na hora. Já a função Super Freeze é perfeita para armazenar alimentos no freezer, garantindo um congelamento rápido e eficiente que preserva melhor o sabor e os nutrientes. Ideal para congelar carnes, vegetais e refeições prontas, ela impede que as temperaturas dos itens já armazenados oscilem, protegendo a integridade dos alimentos.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/BottomFreezer/750x750-boxes-supercool.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-14"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/BottomFreezer/750x750-boxes-prateleiras.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Prateleiras extra largas</h4>
                            <p className="text-md text-gray-300">Prateleiras largas permitem que você armazene itens maiores e mais altos com segurança dentro da porta. Ele pode lidar com caixas volumosas de leite, suco e duas fileiras de latas e garrafas de bebidas. Além disso, as prateleiras ajustáveis também fornecem uma zona flexível para itens mais altos.

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
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/BottomFreezer/500x500-galeriafinal01.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/BottomFreezer/500x500-galeriafinal02.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/BottomFreezer/500x500-galeriafinal03.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/BottomFreezer/500x500-galeriafinal04.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/BottomFreezer/500x500-galeriafinal05.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300 hidden md:block"
                                src="/BottomFreezer/1600x900-galeriafinal-1600x900.png"
                                alt=""
                                width={1588}
                                height={890}
                                quality={100}
                            />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300 md:hidden"
                                src="/BottomFreezer/gallery-7.png"
                                alt=""
                                width={1588}
                                height={890}
                                quality={100}
                            />
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


